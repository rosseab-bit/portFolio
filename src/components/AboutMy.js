import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MyAvatar from "../static/img/my_avatar.jpg";
import NavButtons from "./NavButtons.js";
import BannerLogos from "./BannerLogos.js";
import AboutPicture from "../static/img/about_my.jpg";
import "../App.css";

function AboutMy() {
  return (
    <>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          "justify-content": "space-between",
          "margin-top": "50px",
        }}
      >
        <div style={{ "margin-top": "130px" }}>
          <img
            src={AboutPicture}
            width="400px"
            height="auto"
            border="2"
            style={{
              "object-fit": "cover",
              "border-radius": "50%",
              height: "400px",
            }}
          />
          <div className="containerMyName">
            <h1 className="myName">
              Ricardo Benitez
            </h1>
          </div>
        </div>
        <div
          style={{
            "margin-left": "30px",
            "margin-right": "30px",
            border: "2",
            color: "white",
          }}
        >
          <div
            style={{
              "margin-top": "30px",
              "margin-left": "20px",
              "margin-right": "10px",
            }}
          >
            <h2>Sobre mi...</h2>
            <br />
            <p style={{ fontSize: 20 }}>
              Comence en el mundo de la informática desde joven por curiosidad.
              Inicié con un curso de reparacion de computadoras en donde
              comprendí los conceptos generales del funcionamiento de un
              computador. Luego de terminar el colegio secundario ingrese a
              cursar la carrera de profesor en Ciencias Físicas en la
              Universidad Nacional de Misiones, esta carrera me permitio ver
              todo un mundo nuevo. Por motivos personales la carrera no la
              termine, deje la misma sin cursar el ultimo año.
              <br /> <br />
              Con todo esto nunca disminuyó mi interés por la informática.
              Conseguí mi primer empleo en el área como SuportDesktop en una
              PyMES en la cual realizaba soporte a oficinas pasando por todos
              los aspectos, desktop, notebooks, servers, imporesoras, redes,
              seguridad, gestión de servidores de correos, etc.
	      <br /> <br />
	      Me desempeñe en roles como SysAdmin y DevOps. Realizando trabajos 
	      tanto de opereaciones como de desarrollador. Actualmente me encuentro 
	      trabajando como Desarrollador Full-Stack para Movistar Argentina.
              <br /> <br />
              En el 2022 comencé a estudiar para Analista de Sistemas en el
              Instituto IRSO. En este momento me encuentro en 2do año de la
              carrera.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMy;
