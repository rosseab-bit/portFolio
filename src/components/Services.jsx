import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import WebDesignImg from '../static/img/web_design.jpg'
import ServicesServer from '../static/img/manage_servers.png';
import FixComputers from '../static/img/fix_computer.png'; 


const Services = () => {
    const listServices = [
        {
            name: 'Desarrollo web',
            description: 'Desarrollo de paginas webs y landigs. Desarrollo de pequeños sistemas webs.',
            image_src: WebDesignImg
        },
        {
            name: 'Mantenimiento',
            description: 'Instalacion de Sistemas Operativos, programas y armado de computadoras. Reemplazo de componentes y actualizaciones. Backups.-',
            image_src: FixComputers
        },
        {
            name: 'Asesoramiento',
            description: 'Instalacion de servidores Linux, bases de datos, configuracion de puertos y servidores webs. Dockerizacion de codigo. Monitoreo de servidores.',
            image_src: ServicesServer
        }
    ]
    return (
        <>
            <div style={{
                'display': 'flex',
                'flex-direction': 'row',
                'flex-wrap': 'wrap',
                'margin-top': '20px',
                'margin-right': '20px',
                'margin-left': '10%'
            }}
            >
                {listServices.map((item) => (
                    <Card sx={{ maxWidth: 400, maxHeight: 400, marginLeft: 1, marginTop: 5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={item.image_src}
                                alt="green iguana"
                            />
                            <CardContent sx={{ height: 200 }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body4" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}

            </div>
        </>
    );
}
export default Services;