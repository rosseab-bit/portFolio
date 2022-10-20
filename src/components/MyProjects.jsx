import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

const MyProjects = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const redirectUrls = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    return null;
  }
  return (
    <>
      <div
        style={{
          "display": "flex",
          "justify-content": "center",
          "flex-direction": "column",
          "margin-top": "10%",
          "margin-right": "10%",
          "margin-left": "10%",
        }}
      >
        <div style={{ "width": "80%" }}>
          <p style={{ "color": "#ffffff", "font-size": "30px" }}>
            Podras encontrar todos mis proyectos y trabajos en mi perfil de GitHub.
            Tengo proyectos publicos que los voy actualizando y mejorando...
            Puedes acceder clickeando el icono debajo...
          </p>
        </div>
        <div style={{marginLeft: '30%'}}>
          <IconButton
            onClick={() => redirectUrls('https://github.com/rosseab-bit')}
            color="primary"
            component="label"
          >
            <GitHubIcon sx={{ fontSize: 60, color: "#ffffff" }} />
          </IconButton >
        </div>
      </div>
    </>
  );
}
export default MyProjects;