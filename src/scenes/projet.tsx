import Mini from '../component/sidebar';
import {Box, Container} from '@mui/material';
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'description', width: 130 },
  {
    field: 'status',
    headerName: 'status',
    width: 90,
  },
  {
    field: 'ville',
    headerName: 'ville',
    width: 90,
  },
  {
    field: 'position',
    headerName: 'positioon',
    width: 160,
    
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const project =() =>{
  return(
    <Box   m="90px 0 0 0"
    height="100vh" sx={{display:'flex', marginTop:'100px'}} >
      
        <Mini/>
        <Container fixed>
        <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
        </Container>

    </Box>
      
  )

}
export default project;