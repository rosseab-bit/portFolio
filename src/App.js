import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavButtons from './components/NavButtons.js';
import BannerLogos from './components/BannerLogos.js';
import AboutMy from './components/AboutMy';


function App() {
	const [aboutMy, setAboutMy] = React.useState(false);
	const [mySkils, setMySkils] = React.useState(false);
	const [myProyects, setMyProyects] = React.useState(false);
	const [myServices, setMyServices] = React.useState(false);
	const [myContact, setMyContact] = React.useState(false);

	const seeAboutMy = () => {};
	const seeMySkils = () => {console.log('see my skils')};
	const seeMyProyects = () => {};
	const seeMyServices = () => {};
	const seeMyContact = () => {};

	const switchFunctions = {
		seeAboutMy: seeAboutMy(),
		seeMySkils: seeMySkils(),
		seeMyProyects: seeMyProyects(),
		seeMyServices: seeMyServices(),
		seeMyContact: seeMyContact()
	}

	const statusViews = [aboutMy, mySkils, myProyects, myServices, myContact]

	const SwitchViewBody = () => {
		
		for (){

		}
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
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
				<Grid item xs={2}>
					<div style={{
						'display': 'flex',
						'flex-direction': 'column',
						'margin-top': '50%'
					}}
					>
						<NavButtons switchFunctions={switchFunctions}/>
					</div>
				</Grid>
				<Grid item xs={10}>
					<AboutMy />
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
