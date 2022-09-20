import * as React from 'react';
import Avatar from '@mui/material/Avatar'; 
import Stack from '@mui/material/Stack';
import PythonLogo from '../static/img/python_logo.jpg';
import JavaScriptLogo from '../static/img/javascript_logo.png';
import DockerLogo from '../static/img/docker_logo.png';
import DjangoLogo from '../static/img/django_logo.png';
import FlaskLogo from '../static/img/flask_logo.jpeg';
import ReactLogo from '../static/img/react_logo.png';


const BannerLogos = () => {
  return (
    <>
      <Stack direction="row" spacing={6}>
	<Avatar
	  alt="Remy Sharp"
	  src={PythonLogo}
	  sx={{ width: 60, height: 60 }}
	/>
	<Avatar
	  alt="Remy Sharp"
	  src={JavaScriptLogo}
	  sx={{ width: 60, height: 60 }}
	/>
	<Avatar
	  alt="Remy Sharp"
	  src={DockerLogo}
	  sx={{ width: 60, height: 60 }}
	/>
	<Avatar
	  alt="Remy Sharp"
	  src={DjangoLogo}
	  sx={{ width: 60, height: 60 }}
	/>
	<Avatar
	  alt="Remy Sharp"
	  src={FlaskLogo}
	  sx={{ width: 60, height: 60 }}
	/>
	<Avatar
	  alt="Remy Sharp"
	  src={ReactLogo}
	  sx={{ width: 60, height: 60 }}
	/>

      </Stack>

    </>
  )
}
export default BannerLogos;
