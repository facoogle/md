




import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const RichTextEditor = ({ onChange }) => {
  const [content, setContent] = useState('');
  const quillRef = useRef(null); // Inicializamos la referencia como null

  const handleChange = (value) => {
    setContent(value);
    onChange(value);
  };

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'lhrxavmr'); // Reemplaza por tu upload_preset

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dumk9db4g/image/upload', // Reemplaza por tu cloud_name
        formData
      );

      const imageUrl = response.data.secure_url;
      const editor = quillRef.current.getEditor(); // Ahora debería estar definido
      const range = editor.getSelection();
      editor.insertEmbed(range.index, 'image', imageUrl, 'user');
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleImageInsert = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    handleImageUpload(file);
  };

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // Estilos de texto
        [{ header: 1 }, { header: 2 }], // Títulos de sección
        [{ list: 'ordered' }, { list: 'bullet' }], // Listas ordenadas y no ordenadas
        ['link', 'image'], // Enlaces e imágenes
        ['clean'], // Limpieza de formato
      ],
      handlers: {
        image: () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.onchange = handleImageInsert;
          input.click();
        },
      },
    },
  };

  return (
    <div>
      <ReactQuill ref={quillRef} value={content} onChange={handleChange} modules={modules} />
      <Preview content={value} />
    </div>
  );
};

export default RichTextEditor;