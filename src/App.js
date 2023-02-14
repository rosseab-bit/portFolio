import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavButtons from './components/NavButtons.js';
import BannerLogos from './components/BannerLogos.js';
import AboutMy from './components/AboutMy';
import CardSkils from './components/CardSkils';
import MyContact from './components/MyContact';
import MyProjects from './components/MyProjects';
import Services from './components/Services';
import MyNavBar from './components/MyNavBar';


function App() {
	const [aboutMy, setAboutMy] = React.useState(true);
	const [mySkils, setMySkils] = React.useState(false);
	const [myProyects, setMyProyects] = React.useState(false);
	const [myServices, setMyServices] = React.useState(false);
	const [myContact, setMyContact] = React.useState(false);

	const switchFunctions = {
		seeAboutMy: setAboutMy,
		seeMySkils: setMySkils,
		seeMyProyects: setMyProyects,
		seeMyServices: setMyServices,
		seeMyContact: setMyContact
	}


	const SwitchViewBody = () => {
		if (aboutMy) {
			return <AboutMy />
		} else if (mySkils) {
			return <CardSkils />
		} else if (myContact) {
			return (
				<MyContact />
			);
		} else if (myProyects) {
			return (
				<MyProjects />
			);
		} else if (myServices){
			return (
				<Services />
			);
		}
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
				<div style={{
						'display': 'flex',
						'flex-direction': 'row',
						'justify-content': 'center'
					}}
					>
						<NavButtons switchFunctions={switchFunctions} />
					</div>
			<Grid container spacing={2}>
				<Grid item xs={12}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: 5
					}}
				>
					<BannerLogos />
					
				</Grid>
				<Grid item xs={12} sx={{marginLeft: 20, marginRight: 20}}>
					<SwitchViewBody />
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
