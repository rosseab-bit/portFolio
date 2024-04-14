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
      contrastText: '#4f82ff',
      secondary: '#4f82ff',

    },
    cvButtomColor: {
      main: '#4f82ff',
      contrastText: '#ffffff'
    }
  }
});




const NavButtons = ({ switchFunctions, props }) => {
  const setViewAboutMy = () => {
    switchFunctions.seeAboutMy(true);
    switchFunctions.seeMySkils(false);
    switchFunctions.seeMyProyects(false);
    switchFunctions.seeMyServices(false);
    switchFunctions.seeMyContact(false);
    console.log('Cambiando estado de aboutMy')
  };
  const setViewMySkils = () => {
    switchFunctions.seeAboutMy(false);
    switchFunctions.seeMySkils(true);
    switchFunctions.seeMyProyects(false);
    switchFunctions.seeMyServices(false);
    switchFunctions.seeMyContact(false);
    console.log('Cambiando estado de seeMySkils')
  };
  const setViewMyProyects = () => {
    switchFunctions.seeAboutMy(false);
    switchFunctions.seeMySkils(false);
    switchFunctions.seeMyProyects(true);
    switchFunctions.seeMyServices(false);
    switchFunctions.seeMyContact(false);
    console.log('Cambiando estado de seeMyProyects')
  };
  const setViewMyServices = () => {
    switchFunctions.seeAboutMy(false);
    switchFunctions.seeMySkils(false);
    switchFunctions.seeMyProyects(false);
    switchFunctions.seeMyServices(true);
    switchFunctions.seeMyContact(false);
    console.log('Cambiando estado de seeMyServices')
  };
  const setViewMyContact = () => {
    switchFunctions.seeAboutMy(false);
    switchFunctions.seeMySkils(false);
    switchFunctions.seeMyProyects(false);
    switchFunctions.seeMyServices(false);
    switchFunctions.seeMyContact(true);
    console.log('Cambiando estado de seeMyContact')
  }
  const buttons = [
    <Button key="SobreMi" style={{ 'color': 'black' }} onClick={() => setViewAboutMy()} sx={{borderColor: '#bfbfbf'}}>

      <p style={{ color: 'white', marginTop: '0', marginBottom: '0', fontSize: '15px' }}>Sobre mi</p>
    </Button>,
    <Button key="MisSkils" onClick={() => setViewMySkils()} sx={{borderColor: '#bfbfbf'}}>
      <p style={{ color: 'white', marginTop: '0', marginBottom: '0', fontSize: '15px' }}>Mis Skills</p>
    </Button>,
    <Button key="MisProyectos" onClick={() => setViewMyProyects()} sx={{borderColor: '#bfbfbf'}}>
      <p style={{ color: 'white', marginTop: '0', marginBottom: '0', fontSize: '15px' }}>Mis Proyectos</p>
    </Button>,
    <Button key="Servicios" onClick={() => setViewMyServices()} sx={{borderColor: '#bfbfbf'}}>
      <p style={{ color: 'white', marginTop: '0', marginBottom: '0', fontSize: '15px' }}>Servicios</p>
    </Button>,
    <Button key="Contacto" onClick={() => setViewMyContact()} sx={{borderColor: '#bfbfbf'}}>
      <p style={{ color: 'white', marginTop: '0', marginBottom: '0', fontSize: '15px' }}>Contacto</p>
    </Button>,
    <Button variant="contained" component="label" color="cvButtomColor" sx={{ marginLeft: 2, marginRight: 2 }}
    onClick={()=>window.open('https://drive.google.com/file/d/1DZ1qQ3ctULBOhRjHyMI0AumEHoN2JtTD/view?usp=sharing', '_blank', 'noopener,noreferrer')}
    >
        <p style={{ marginTop: '1px', marginBottom: '1px', color: 'black', fontSize: '20px' }}>Descargar CV</p>
    </Button>
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
          margin: '30px'
        }}
      >
        <ThemeProvider theme={theme}>
          <ButtonGroup
            size="small" aria-label="small button group"
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
