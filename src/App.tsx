import { Box, ThemeProvider, Typography, GlobalStyles } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Route, Routes } from 'react-router-dom';
import { CategoryList } from './features/categories/ListCategory';
import { CategoryCreate } from './features/categories/CreateCategory';
import { CategoryEdit } from './features/categories/EditCategory';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      {/* Estilos globais precisam estar DENTRO da árvore React */}
 
    <GlobalStyles styles={{
      // Firefox
      '*': { scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,.35) transparent' },
      // WebKit (Chrome/Edge/Safari)
      '*::-webkit-scrollbar': { width: 8, height: 8, background: 'transparent' },
      '*::-webkit-scrollbar-track': { background: 'transparent' },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(255,255,255,.35)',
        borderRadius: 999,
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
      },
       '*:hover::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(255,255,255,.55)',
      },
      '*::-webkit-scrollbar-thumb:active': {
        backgroundColor: 'rgba(255,255,255,.7)',
      },
    }} />


      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />
            <Route
              path="*"
              element={
                <Box sx={{ color: 'white' }}>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Page not found</Typography>
                </Box>
              }
            />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
