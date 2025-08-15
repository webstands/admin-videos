import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import type { Category } from "./categorySlice"; // importar o tipo
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

 const rows: GridRowsProp = categories.map((category: Category) => ({
  id: category.id,
  name: category.name,
  description: category.description ?? '', // evita null
}));
 

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
  ];
  
  

  return (
    <Box maxWidth="lg" sx={{mt: 4, mb: 4}}>
        <Box display="flex" justifyContent="flex-end">
          <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/categories/create"
                style={{ marginBottom: "1rem" }}
            >
                New Category
          </Button>
        </Box>

      <Typography variant="h3" component="h1">
        CategoryList Page
      </Typography>

  <div style={{height: 300, width: "100%"}}>
      <DataGrid
       rowsPerPageOptions={[10, 20, 50, 100]}
       rows={rows} columns={columns} />
  </div>
    </Box>
  );
};
