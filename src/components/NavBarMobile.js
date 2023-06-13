import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AboutPicture from '../static/img/about_my.jpg'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import PythonLogo from '../static/img/python_logo.png';
import JavaScriptLogo from '../static/img/javascript_logo.png';
import DockerLogo from '../static/img/docker_logo.png';
import DjangoLogo from '../static/img/django_logo.png';
import FlaskLogo from '../static/img/flask_logo.jpeg';
import ReactLogo from '../static/img/react_logo.png';
import LinuxImage from '../static/img/linux_1.png';
import GitHubImage from '../static/img/github_1.png';
import BashImage from '../static/img/bash_1.jpg';
import MySQLImage from '../static/img/mysql_1.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import WebDesignImg from '../static/img/web_design.jpg'
import ServicesServer from '../static/img/manage_servers.png';
import FixComputers from '../static/img/fix_computer.png';
import CloudDownloadSharpIcon from '@mui/icons-material/CloudDownloadSharp';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function NavBarMobile() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [aboutMe, setAboutMe] = React.useState(true);
    const [mySkills, setMySkills] = React.useState(false);
    const [myServices, setMyServices] = React.useState(false);
    const [myContact, setMyContact] = React.useState(false);
    const [titleBar, setTitleBar] = React.useState('Sobre mi');


    const redirectUrls = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
        return null;
    }
    const mailContact = (mailto) => {
        window.location.replace(mailto);
        return null;
    }

    const SwitchViewMobile = () => {
        setTitleBar('Sobre mi');
        if (aboutMe) {
            return (
                <>
                    <Typography paragraph>
                        Actualmente me encuentro trabajando exclusivamente en
                        <b>servidores linux y scripting</b> desde hace aproximadamente 4 años. El lenguaje principal
                        con el que trabajo es <b>Python</b>, a parte de este tambien tengo experiencia con <b>JavaScript</b>.
                        En el 2022 comencé a estudiar para <b>Analista de Sistemas</b> en el Instituto IRSO. Actualmente me
                        encuentro <b>2do año de la carrera</b>.
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: 'center',
                            marginTop: 40
                        }}
                    >
                        <Avatar
                            alt="Python"
                            src={PythonLogo}
                            sx={{ width: 60, height: 60 }}
                        />
                        <Avatar
                            alt="JavaScript"
                            src={JavaScriptLogo}
                            sx={{ width: 60, height: 60 }}
                        />
                        <Avatar
                            alt="Docker"
                            src={DockerLogo}
                            sx={{ width: 60, height: 60 }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: 'center',
                            marginTop: 10
                        }}

                    >
                        <Avatar
                            alt="Django"
                            src={DjangoLogo}
                            sx={{ width: 60, height: 60 }}
                        />
                        <Avatar
                            alt="Flask"
                            src={FlaskLogo}
                            sx={{ width: 60, height: 60 }}
                        />
                        <Avatar
                            alt="ReactJs"
                            src={ReactLogo}
                            sx={{ width: 60, height: 60 }}
                        />

                    </div>
                </>
            );
        } else if (mySkills) {
            setTitleBar('Mis Skills');
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
            return (
                <>
                    <div style={{
                        'display': 'flex',
                        'flex-direction': 'column',
                        'flex-wrap': 'wrap',
                        'margin-top': '20px',
                        "margin-right": "10%",
                        "margin-left": "10%",
                    }}
                    >
                        {skilsDescriptions.map((item) => (
                            <Card sx={{ maxWidth: 280, maxHeight: 350, marginLeft: 1, marginTop: 5 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={item.image_src}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ height: 150 }}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body4" color="text.secondary" style={{ fontSize: 13 }}>
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
        } else if (myServices) {
            setTitleBar('Mis Servicios');
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
                        'flex-direction': 'column',
                        'flex-wrap': 'wrap',
                        alignContent: 'center',
                        'margin-top': '20px',
                        'margin-right': '20px',
                        'margin-left': '10%'
                    }}
                    >
                        {listServices.map((item) => (
                            <Card sx={{ maxWidth: 300, maxHeight: 300, marginLeft: 1, marginTop: 5 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={item.image_src}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ height: 500 }}>
                                        <p>
                                            {item.name}
                                        </p>
                                        <Typography variant="body4" style={{ fontSize: 15 }} color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}

                    </div>
                </>
            );
        } else if (myContact) {
            setTitleBar('Contacto');
            return (
                <>
                    <div style={{
                        'display': 'flex',
                        'flex-direction': 'column',
                        'justify-content': 'space-around',
                        'align-items': 'center',
                        'color': 'white',
                        'margin-top': '10%',
                    }}>

                        <IconButton
                            onClick={() => redirectUrls('https://www.linkedin.com/in/roseabdev/')}
                            color="primary"
                            component="label"
                        >
                            <LinkedInIcon sx={{ fontSize: 35, color: '#0077B5' }} />
                        </IconButton>
                        <p style={{ color: 'black' }}>LinkedIn</p>
                        <IconButton
                            onClick={() => mailContact('mailto:r.j.abrahambenitez@gmail.com')}
                            color="primary"
                            component="label"
                        >
                            <MailOutlineIcon sx={{ fontSize: 35, color: '#EA4335' }} />
                        </IconButton>
                        <p style={{ color: 'black' }}>r.j.abrahambenitez@gmail.com</p>
                        <IconButton
                            onClick={() => redirectUrls('https://wa.me/5491133476418')}
                            color="primary"
                            component="label"
                        >
                            <WhatsAppIcon sx={{ fontSize: 35, color: '#25D366' }} />
                        </IconButton>
                        <p style={{ color: 'black' }}>Whatsapp: 1133476418</p>
                    </div>
                </>
            );
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
        setMySkills(false);
        setMyContact(false);
        setMyServices(false);
        setAboutMe(true);
        setTitleBar('Sobre mi');
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const changeView = (arg) => {
        if (arg == 'skills') {
            setMySkills(true);
            setMyContact(false);
            setMyServices(false);
            setAboutMe(false);
            setOpen(false);

        } else if (arg == 'contact') {
            setMySkills(false);
            setMyContact(true);
            setMyServices(false);
            setAboutMe(false);
            setOpen(false);

        } else if (arg == 'service') {
            setMySkills(false);
            setMyContact(false);
            setMyServices(true);
            setAboutMe(false);
            setOpen(false);

        } else if (arg == 'about') {
            setMySkills(false);
            setMyContact(false);
            setMyServices(false);
            setAboutMe(true);
            setOpen(false);

        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} >
                <Toolbar sx={{ backgroundColor: '#21222c' }}>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1, backgroundColor: '#21222c' }} component="div">
                        {titleBar}
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <DrawerHeader />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 10
                    }}
                >
                    <img src={AboutPicture}
                        width='100px'
                        height='auto'
                        border='2'
                        style={{
                            'object-fit': 'cover',
                            'border-radius': '50%',
                            'height': '100px'
                        }}
                    />
                </div>
                <SwitchViewMobile />
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key='Skills' disablePadding>
                        <ListItemButton onClick={() => changeView('skills')}>
                            <ListItemIcon>
                                <ImportantDevicesIcon />
                            </ListItemIcon>
                            <ListItemText primary='Skills' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Servicios' disablePadding>
                        <ListItemButton onClick={() => changeView('service')}>
                            <ListItemIcon>
                                <BuildCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary='Servicios' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Contacto' disablePadding>
                        <ListItemButton onClick={() => changeView('contact')}>
                            <ListItemIcon>
                                <ContactsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Contacto' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='mycv' disablePadding>
                        <ListItemButton onClick={() => window.open('https://drive.google.com/file/d/1edOpYS9mmL46k8N2OYq5AFInNHtokrw8/view?usp=sharing', '_blank', 'noopener,noreferrer')}>
                            <ListItemIcon>
                                <CloudDownloadSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Download CV' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
}