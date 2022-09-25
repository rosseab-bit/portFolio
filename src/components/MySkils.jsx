import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'; 
import Stack from '@mui/material/Stack';
import MyAvatar from '../static/img/my_avatar.jpg';
import NavButtons from './NavButtons.js';
import BannerLogos from './BannerLogos.js';
import CardSkils from './CardSkils';

const skilsDescriptions = [
  {
    'name': 'Python',
    'description': 'Desarrollo de aplicaciones web y de escritorio',
    'url': 'https://www.python.org/',
    'image_src':'/path/img/example.jpg',
  }
]
function MySkils() {
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
		      'display':'flex',
		      'flex-direction':'column',
		      'margin-top':'50%'
		    }}
	  >
	  <NavButtons />
	  </div>
	</Grid>
        <Grid item xs={10}>
	  <CardSkils description={skilsDescriptions[0]}/>
        </Grid>
      </Grid>
    </Box>
 );
}

export default MySkils;
