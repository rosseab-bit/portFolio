import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'; 
import Stack from '@mui/material/Stack';
import MyAvatar from '../static/img/my_avatar.jpg';
import NavButtons from './NavButtons.js';
import BannerLogos from './BannerLogos.js';
import AboutPicture from '../static/img/about_my.jpg';

function AboutMy() {
  return (
    <>
	<div
	    style={{

	      'display': 'flex',
	      'flex-direction': 'row',
	      'justify-content': 'space-between',
	      'margin-top': '50px',
	    }}
	  >
	    <div style={{'margin-top': '130px'}}>
	      <img src={AboutPicture} 
		    width='400px' 
		    height='auto' 
		    border='2' 
		    style={{'object-fit': 'cover', 
			    'border-radius':'50%', 
			    'height':'400px'}}
	      />
	    </div>
	    <div style={{'margin-left':'30px', 'margin-right': '30px', 'border':'2', 'color': 'white'}}>
	      <div style={{'margin-top': '30px', 'margin-left':'20px', 'margin-right':'10px'}}>
	      <h1 >Sobre mi...</h1>
	      <br/>
	      <p style={{fontSize: 20}}>
		Comence en el mundo de la informática desde joven por curiosidad. Inicié con un curso
		de reparacion de computadoras en donde comprendí los conceptos generales del funcionamiento
		de un computador. Luego de terminar el colegio secundario ingrese a cursar la carrera 
		de profesor en Ciencias Físicas en la Universidad Nacional de Misiones, esta carrera me 
		permitio ver todo un mundo nuevo. Por motivos personales la carrera no la termine, deje 
		la misma sin cursar el ultimo año.<br/> <br/> 
		Con todo esto nunca disminuyó mi interés por la informática. Conseguí mi primer
		empleo en el área como SuportDesktop en una PyMES en la cual realizaba soporte a oficinas
		pasando por todos los aspectos, desktop, notebooks, servers, imporesoras, redes, seguridad,
		gestión de servidores de correos, etc.<br/> <br/>
		En el camino me interesó la programación ya que realizaba pequeños scripts en Windows para 
		automatizar pequeñas cosas en servidores. De este modo me fui metiendo al mundo del 
		scripting y a la programación. Actualmente me encuentro trabajando exclusivamente en
		servidores linux y programación desde hace aproximadamente 4 años. El lenguaje que principal
		con el que trabajo es Python, a parte de este tambien tengo experiencia con JavaScript.<br/> <br/>
		En el 2022 comencé a estudiar para Analista de Sistemas en el Instituto IRSO. Actualmente me
		me encuentro cursando 6 materias anuales con todos los trabajos y examenes aprobados hasta
		el momento.
	      </p>
	      </div>
	    </div>
	  </div>
	</>
 );
}

export default AboutMy;
