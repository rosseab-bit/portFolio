import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PythonLogo from '../static/img/python_1.jpg';
import JavaScriptLogo from '../static/img/javascript_1.jpg';
import DockerLogo from '../static/img/docker_logo.png';
import DjangoLogo from '../static/img/django_1.jpg';
import FlaskLogo from '../static/img/flask_1.png';
import ReactLogo from '../static/img/react_logo.png';
import LinuxImage from '../static/img/linux_1.png';
import GitHubImage from '../static/img/github_1.png';
import BashImage from '../static/img/bash_1.jpg';
import MySQLImage from '../static/img/mysql_1.png';
import { Link } from 'react-router-dom';

const skilsDescriptions = [
  {
    'name': 'Python',
    'description': 'Desarrollo de scripting, automatización, programación orientada a objetos. Desarrollo de aplicaciones web y escritorio.',
    'url': 'https://www.python.org/',
    'image_src': PythonLogo,
  },
  {
    'name': 'Flask',
    'description': 'Desarrollo de APIs y pequeños software de gestión',
    'url': 'https://flask.palletsprojects.com/en/2.2.x/',
    'image_src': FlaskLogo,
  },
  {
    'name': 'DJango',
    'description': 'Curso en EducacionIT aprobado, desarrollo de Modelos, Templates y apps',
    'url': 'https://www.djangoproject.com/',
    'image_src': DjangoLogo,
  },
  {
    'name': 'Tkinter',
    'description': 'Desarrollo de aplicaciónes para escritorio, stock, almacenador de contraseñas.',
    'url': 'https://docs.python.org/es/3/library/tkinter.html',
    'image_src': PythonLogo,
  },
  {
    'name': 'Java Script',
    'description': 'Experiencia en programación orientada a objetos, interacción con el DOM y aplicaciones con Frameworks',
    'url': 'https://www.javascript.com/',
    'image_src': JavaScriptLogo,
  },
  {
    'name': 'React',
    'description': 'Desarrollo de componentes y aplicaciónes en React JS y React Native',
    'url': 'https://es.reactjs.org/',
    'image_src': ReactLogo,
  },
  {
    'name': 'Docker',
    'description': 'Creación de contenedores para apps en React y Flask. Creacion de contenedores de bases de datos. DockerFile.',
    'url': 'https://www.docker.com/',
    'image_src': DockerLogo,
  },
  {
    'name': 'Linux',
    'description': 'Instalación y configuración de servidores Linux OpenSuse, Ubuntu, RedHat. Y derivados de Debian.',
    'url': 'https://es.wikipedia.org/wiki/GNU/Linux',
    'image_src': LinuxImage,
  },
  {
    'name': 'GitHub',
    'description': 'Creacion de repositorios, manejo de ramas y fusiones.',
    'url': 'https://github.com/',
    'image_src': GitHubImage,
  },
  {
    'name': 'Bash Script',
    'description': 'Desarrollo de scripts y automatizaciones en Linux Server',
    'url': 'https://es.wikipedia.org/wiki/Bash',
    'image_src': BashImage,
  },
  {
    'name': 'MySQL',
    'description': 'Instalacion del motor, creacion de bases de datos y tablas.',
    'url': 'https://www.mysql.com/',
    'image_src': MySQLImage,
  }
]

const CardSkils = () => {
  return (
    <>
      <div style={{
        'display': 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'margin-top': '20px',
        "margin-right": "10%",
        "margin-left": "10%",
      }}
      >
        {skilsDescriptions.map((item) => (
          <Card sx={{ maxWidth: 260, maxHeight: 350, marginLeft: 1, marginTop: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={item.image_src}
                alt="green iguana"
              />
              <CardContent sx={{height: 160}}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href={item.url} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                <Button size="small" color="primary">
                  {item.name}
                </Button>
              </a>
            </CardActions>
          </Card>
        ))}

      </div>
    </>
  );
}
export default CardSkils;
