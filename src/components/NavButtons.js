import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Outlet, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    myCustom: {
      main: '#4f82ff',
      contrastText: '#4f82ff'
  },}
});




const NavButtons = ({switchFunctions}) => {
  const buttons = [
    <Button key="SobreMi" style={{'color': 'black'}}>
      <Link to ="/aboutmy" style={{
            textDecoration: 'none'
          }}
      >
        <p style={{color:'white', marginTop:'0', marginBottom:'0'}}>Sobre mi</p> 
      </Link>
    </Button>,
    <Button key="MisSkils" onClick={switchFunctions.seeMySkils}>
      <Link to ="/myskils" style={{
            textDecoration: 'none',
            padingTop: '2',
          }}
      >
        <p style={{color:'white', marginTop:'0', marginBottom:'0'}}>Mis Skils</p> 
      </Link>
    </Button>,
    <Button key="MisProyectos">
      <Link to ="/aboutmy" style={{
            textDecoration: 'none',
            padingTop: '2',
          }}
      >
        <p style={{color:'white', marginTop:'0', marginBottom:'0'}}>Mis Proyectos</p> 
      </Link>
    </Button>,
    <Button key="Servicios">
      <Link to ="/aboutmy" style={{
            textDecoration: 'none',
            padingTop: '2',
          }}
      >
        <p style={{color:'white', marginTop:'0', marginBottom:'0'}}>Servicios</p> 
      </Link>
    </Button>,
    <Button key="Contacto">
      <Link to ="/aboutmy" style={{
            textDecoration: 'none',
            padingTop: '2',
          }}
      >
        <p style={{color:'white', marginTop:'0', marginBottom:'0'}}>Contacto</p> 
      </Link>
    </Button>,
  ];
  
  return (
    <>
      <Box
	    sx={{
	    display: 'flex',
	    '& > *': {
		  m: 1,
		  },
	    margin:'30px'
	    }}
	  >
	    <ThemeProvider theme={theme}>
	    <ButtonGroup
	      size="small"
	      orientation="vertical"
	      aria-label="vertical contained button group"
	      variant="text"
	      color="myCustom"
	    >
	      {buttons}
	    </ButtonGroup>
	    </ThemeProvider >
      </Box>
    </>
  )
}
export default NavButtons;
