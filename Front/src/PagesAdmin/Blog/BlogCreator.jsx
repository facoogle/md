import React, { useState } from 'react';
import './BlogCreator.css';
import RichTextEditor from './TextEditor';
import Preview from './Preview';
import { Box } from '@mui/material';

const BlogCreator = () => {
  const [editorContent, setEditorContent] = useState('');

  console.log(editorContent)
  const handleEditorChange = (content) => {
    setEditorContent(content);
    console.log(content)
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: "1440px" }}>
        <div style={{ marginTop: "100px", marginInline: "6%" }} className="blog-creator-container">
          <h2><span style={{color:"green"}}>CREAR BLOG</span> - Editor de texto</h2>
          <RichTextEditor editorContent={editorContent} onContentChange={handleEditorChange} setEditorContent={setEditorContent} />
          
        </div>
      </Box>
    </Box>
  );
};

export default BlogCreator;

