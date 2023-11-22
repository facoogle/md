const { Router } = require("express");
const { User, PostBlog  } = require("../../db");
const path = require('path');
const fs = require('fs');
const axios = require("axios")
const { Op } = require('sequelize');

const isUserLoggedIn = require("../../middlewares/auth")
const isUserLoggedInAdmin = require("../../middlewares/authAdmin")

const {
  userLogin,
  userSingIn,
} = require("../../controllers/usersControllers/users.controllers");


const router = Router();

router.post("/singin", userSingIn);

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userLogin(email, password, res);
    res.json({
      user,
    });
  } catch (error) {
    console.log(error)
  }
});


router.get("/protected", isUserLoggedIn, (req, res) => {
  try {
    const user = req.user; // Acceder a los datos del usuario obtenidos en el middleware
    // Realizar acciones con los datos del usuario aquí
    res.json({ user, msg: "Acceso autorizado" });
  } catch (error) {
    // Ocurrió un error, enviar respuesta de error
    res.status(500).json({ error: "Error en el servidor" });
  }
});


router.post('/create', isUserLoggedInAdmin, async (req, res) => {
  try {
    const { titulo, description, imageFile, descriptionImg, content, tags, userId, userUserName, userUserImg } = req.body;

    // Verificar campos obligatorios
    const requiredFields = [];
    if (!titulo) requiredFields.push('Titulo');
    if (!description) requiredFields.push('Breve Descripcion');
    if (!imageFile) requiredFields.push('Imagen de portada');
    if (!descriptionImg) requiredFields.push('Descripcion de la imagen de perfil');
    if (!content) requiredFields.push('Texto del blog');
    if (!userId) requiredFields.push('Iniciar sesion');

    if (requiredFields.length > 0) {
      return res.status(400).json({ message: `Faltan campos obligatorios: ${requiredFields.join(', ')}` });
    }

    //const parsedTags = tags ? JSON.parse(tags) : [];

    // Crear el nuevo PostBlog
    const newPostBlog = await PostBlog.create({
      titulo,
      description,
      imageFile,
      descriptionImg,
      content,
      tags,
      userId,
      userUserName,
      userUserImg
    });

    return res.status(201).json({newPostBlog, message:"Publicacion creada correctamente"})
  } catch (error) {
    console.error('Error al crear el PostBlog:', error);
    return res.status(500).json({ error: 'Hubo un error al crear el PostBlog.' });
  }
});


router.get('/blog/:postId', async (req, res) => {
  try {
      const postId = req.params.postId;
      const post = await PostBlog.findByPk(postId, {
          include: [
              {
                  model: User,
                  as: 'user',
                  attributes: ['imgPerfil', 'username', 'email'],
              },
          ],
      });

      if (!post) {
          return res.status(404).json({ error: 'Post no encontrado.' });
      }

      return res.status(200).json(post);
  } catch (error) {
      console.error('Error al obtener el PostBlog:', error);
      return res.status(500).json({ error: 'Hubo un error al obtener el PostBlog.' });
  }
});




router.post('/edit', isUserLoggedInAdmin, async (req, res) => {
  try {
   
    const {
      postId,
      titulo,
      description,
      imageFile,
      descriptionImg,
      content,
      tags,
      userId,
      userUserName,
      userUserImg,
    } = req.body;

    // Verificar campos obligatorios
    const requiredFields = [];
    if (!titulo) requiredFields.push('Titulo');
    if (!description) requiredFields.push('Breve Descripcion');
    if (!descriptionImg) requiredFields.push('Descripcion de la imagen de perfil');
    if (!content) requiredFields.push('Texto del blog');
    if (!userId) requiredFields.push('Iniciar sesion');

    if (requiredFields.length > 0) {
      return res.status(400).json({ message: `Faltan campos obligatorios: ${requiredFields.join(', ')}` });
    }

    // Buscar el post existente
    const existingPost = await PostBlog.findByPk(postId);

    if (!existingPost) {
      return res.status(404).json({ message: 'Post no encontrado.' });
    }

    // Actualizar los campos del post existente
    existingPost.titulo = titulo;
    existingPost.description = description;
    existingPost.imageFile = imageFile;
    existingPost.descriptionImg = descriptionImg;
    existingPost.content = content;
    existingPost.tags = tags;
    existingPost.userId = userId;
    existingPost.userUserName = userUserName;
    existingPost.userUserImg = userUserImg;

    // Guardar los cambios
    await existingPost.save();

    return res.status(200).json({ message: 'Blog editado correctamente' });
  } catch (error) {
    console.error('Error al editar el PostBlog:', error);
    return res.status(500).json({ error: 'Hubo un error al editar el PostBlog.' });
  }
});


router.get('/allBlogs', async (req, res) => {
  try {
    const posts = await PostBlog.findAll();

    if (posts.length === 0) {
      return res.status(404).json({ message: 'No se encontraron posts.' });
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.error('Error al obtener blogs:', error);
    return res.status(500).json({ error: 'Hubo un error al obtener los blogs.' });
  }
});

router.get('/paginado', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Página actual
    const perPage = parseInt(req.query.perPage) || 10; // Cantidad de posts por página
    const searchQuery = req.query.search || ''; // Consulta de búsqueda por título o tag

    const offset = (page - 1) * perPage;

    const whereClause = {
      [Op.or]: [
        { titulo: { [Op.iLike]: `%${searchQuery}%` } },
        { tags: { [Op.contains]: [searchQuery] } }
      ]
    };

    const { count, rows: posts } = await PostBlog.findAndCountAll({
      where: whereClause,
      offset,
      limit: perPage,
      include: [
        {
            model: User,
            as: 'user',
            attributes: ['imgPerfil', 'username', 'email'],
        },
    ],
    },);

    if (count === 0) {
      return res.status(404).json({ message: 'No se encontraron posts.' });
    }

    const totalPages = Math.ceil(count / perPage);

    return res.status(200).json({
      totalPages,
      currentPage: page,
      perPage,
      posts,
    });
  } catch (error) {
    console.error('Error al obtener blogs:', error);
    return res.status(500).json({ error: 'Hubo un error al obtener los blogs.' });
  }
});



router.delete('/delete/:postId', isUserLoggedInAdmin, async (req, res) => {
  try {
    const postId = req.params.postId;

    // Buscar el post a eliminar
    const postToDelete = await PostBlog.findByPk(postId);

    if (!postToDelete) {
      return res.status(404).json({ message: 'Post no encontrado.' });
    }

    // Eliminar el post
    await postToDelete.destroy();

    return res.status(200).json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el PostBlog:', error);
    return res.status(500).json({ message: 'Hubo un error al eliminar el PostBlog.' });
  }
});


// router.get("/users", isUserLoggedInAdmin, async (req, res) => {
//   try {
//     const users = await User.findAll({ where: { banned: false } });
//     res.json({ users });
//   } catch (error) {
//     res.status(500).json({ error: "Error en el servidor" });
//   }
// });












// router.post("/banear", isUserLoggedIn, async (req, res) => {
//   try {
//     const { id } = req.body;

//     // Buscar el usuario por ID en la base de datos
//     const user = await User.findOne({ where: { id } });

//     if (!user) {
//       return res.status(404).json({ error: "Usuario no encontrado" });
//     }

//     user.banned = true;
//     user.emailVerified = true
//     await user.save();

//     res.json({ message: "Cuenta Baneada" });
//   } catch (error) {
//     res.status(500).json({ error: "Error en el servidor" });
//   }
// });








// router.get("/confirm/:token", confirmAccount);
// router.post("/forgot-password", forgotPassword)
// router.post("/new-password/:token", newPassword)

module.exports = router;
