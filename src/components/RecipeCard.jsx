import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function RecipeCard({recipe}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={recipe?.images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {recipe?.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/recipe/${recipe?.id}`}><Button size="small" variant='contained'>View</Button></Link>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}