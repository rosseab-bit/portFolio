import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardSkils = ({description}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
	    {description.name} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
	    {description.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
	<a href={description.url} target="_blank" rel="noreferrer">
        <Button size="small" color="primary">
	  {description.name}
        </Button>
	</a>
      </CardActions>
    </Card>
  );
}
export default CardSkils;
