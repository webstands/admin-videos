import { Box, Button, IconButton, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import type { Category } from "./categorySlice"; // importar o tipo
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, renderActionsCell } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

 const rows: GridRowsProp = categories.map((category: Category) => ({
  id: category.id,
  name: category.name,
  description: category.description ?? '', 
  isActive : category.is_active,
  createdAt: new Date(category.created_at).toLocaleDateString("pt-BR")
}));
 

  const columns: GridColDef[] = [
     { 
      field: 'name', 
      headerName: 'Name',
      flex: 1 
    },
    {
      field: "isActive",
      headerName: "Active",
      type: "boolean",
      renderCell: renderIsActiveCell
    },
    {
      field: "createdAt",
      headerName: 'Created At',
      flex: 1  
    }, { 
      field: 'id',
      headerName: 'Actions',
      flex: 1 ,
      renderCell: renderActionsCells
    },
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
function renderIsActiveCell(row: GridRenderCellParams) {
     return <Typography color={row.value ? "primary": "secondary"}>
      {row.value ? "Active" : "Inactive"}
     </Typography>;
 }

function renderActionsCells(params: GridRenderCellParams): JSX.Element {
  return (
    <IconButton
      color="secondary"
      aria-label="delete"
      onClick={() => console.log('Clicked', params.id)}
      size="small"
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}
