const { Router } = require("express");
const userRoute = require('./users/user.js')




// Importar todos los routers;

const router = Router();

// Configurar los routers


router.use('/user', userRoute)




module.exports = router;