import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const ResponsiveAppBar = () => {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (    
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h4" component="div" sx={{ 
              mr: 2,
              //display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'mediumpurple',
              textDecoration: 'none',
              flexDirection: 'row-reverse'
            }}>
          NEXO
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
};
export default ResponsiveAppBar;
