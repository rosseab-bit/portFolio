import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'; 
import Stack from '@mui/material/Stack';
import MyAvatar from './static/img/my_avatar.jpg';
import NavButtons from './components/NavButtons.js';
import BannerLogos from './components/BannerLogos.js';
import AboutPicture from './static/img/about_my.jpg';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
	<Grid item xs={4} sx={{marginTop:3}}>
	  <Stack direction="row" spacing={2}>
	    <Avatar
	      alt="Remy Sharp"
	      src={MyAvatar}
	      sx={{ width: 200, height: 200 }}
	    />
	  </Stack>
	</Grid>
	<Grid item xs={8} 
		  sx={{
		      display: 'flex',
		      flexDirection: 'row',
		      justifyContent: 'center',
		      marginTop: 5
		    }}
	>
	  <BannerLogos />
	</Grid>
        <Grid item xs={2}>
	  <NavButtons />
	</Grid>
        <Grid item xs={10}>
	  <div
	    style={{

	      'display': 'flex',
	      'flex-direction': 'row',
	      'justify-content': 'space-between'
	    }}
	  >
	    <div style={{'border-radius':'20px'}}>
	      <img src={AboutPicture} width='300px' height='auto' border='2'/>
	    </div>
	    <div style={{'margin-left':'30px', 'margin-right': '30px', 'border':'2'}}>
	      <h1>Sobre mi...</h1>
	      <br/>
	      <p>
		Comence en el mundo de la informatica desde joven por curiosidad. Comence con un curso
		de reparacion de computadoras en donde comprendi los conceptos basicos del funcionamiento
		de un compoutador. Luego de terminar el colegio secundario ingrese a cursar la carrera 
		de profesor en Ciencias Fisicas en la Uiversidad Nacional de Misiones, esta carrera me 
		permitio ver todo un mundo nuevo. Por motivos personales la carrera no la termine, deje 
		la misma sin cursar el ultimo año.<br/> 
		Con todo esto nunca disminuyo mi interes por la informatica. Con lo que consegui mi primer
		empleo en el area como SuportDesktop en una PyMES en la cual realizaba soporte a oficianas
		pasando por todos los aspectos, desktop, notebooks, servers, imporesoras, redes, seguridad,
		gestion de emails, etc.<br/>
		En el camino me intereso la programacion ya que realizaba pequeños scripts en Windows para 
		automatizar pequeñas cosas en servidores. Des este modo me fui metiendo al mundo del 
		scripting y a la programacion. Actualmente me encuentro trabajando exclusivamente en
		servidores linux y programacion desde hace aproximadamente 4 años. El lenguaje que manejo
		con mas experiencia es Python. Tambien tengo experiencia con JavaScript pero como trabajo
		mas en el lado del servidor suelo usar mas Python.<br/>
		En el 2022 comence a estudiar para Analista de Sistemas en el Instituto Irso de la cual me
		me encuentro cursando 6 materias anuales con todos los trabajos y examenes aprobados hasta
		el momento.
	      </p>
	    </div>
	  </div>
        </Grid>
      </Grid>
    </Box>
 );
}

export default App;
