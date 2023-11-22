import * as React from 'react';
import {Box, Button, Typography} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../state/actions/blog';
import { deleteBlog } from '../../state/actions/blog';

export default function ListBlogs() {
  const dispatch = useDispatch();
  const { blogAll } = useSelector((state) => state.blogAll);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const columns = [
    {
      field: 'imagen', // Cambia 'imagen' al campo correcto de tus datos
      headerName: 'Imagen',
      width: 160,
      renderCell: (params) => (
        
        <img src={params.row.imageFile} alt="Imagen" style={{ width: '100px', height: 'auto' }} />
      ),
    },
    { field: 'titulo', headerName: 'Titulo', width: 600 },
    { field: 'updatedAt', headerName: 'Fecha y hora', width: 300, color: 'green' },
    {
      field: 'preferenceId',
      headerName: 'Editar',
      width: 120,
      renderCell: (params) => (
        <Button sx={{background:"orange", color:"white", marginRight:"16px"}}
          onClick={() => {
            window.location.href =`/admin/blogeditor/${params.row.id}`
          }}
          style={{ background: 'orange', borderRadius: '1px solid black', color: 'white' }}
        >
          Editar
        </Button>
      ),
    },
    {
        field: 'id',
        headerName: 'Detalles',
        width: 120,
        renderCell: (params) => (
            <Button sx={{background:"orange", color:"white", marginRight:"16px"}}
            onClick={() => {
              dispatch(deleteBlog(params.row.id))
            }}
            style={{ background: 'red', borderRadius: '1px solid black', color: 'white' }}
          >

            Eliminar
          </Button>
        ),
      },
   
  ];

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', width: '90%', marginTop:"30px" }}>
          <Box sx={{ height: 800, width: '100%' }}>
            <Typography sx={{fontSize:"36px", color:"black"}}>
                Mis Blogs - Lista
            </Typography>
            <DataGrid
              rows={blogAll ? blogAll : []}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick // Deshabilita la selección de filas al hacer clic
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
