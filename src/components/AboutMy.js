import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'; 
import Stack from '@mui/material/Stack';
import MyAvatar from '../static/img/my_avatar.jpg';
import NavButtons from './NavButtons.js';
import BannerLogos from './BannerLogos.js';

function AboutMy() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
	<Grid item xs={4} sx={{marginTop:3}}>
	  <Stack direction="row" spacing={2}>
	    <Avatar
	      alt="Remy Sharp"
	      src={MyAvatar}
	      sx={{ width: 200, height: 200 }}
	    />
	  </Stack>
	</Grid>
	<Grid item xs={8} 
		  sx={{
		      display: 'flex',
		      flexDirection: 'row',
		      justifyContent: 'center',
		      marginTop: 5
		    }}
	>
	  <BannerLogos />
	</Grid>
        <Grid item xs={4}>
	  <NavButtons />
	</Grid>
        <Grid item xs={8}>
        </Grid>
      </Grid>
    </Box>
 );
}

export default AboutMy;
