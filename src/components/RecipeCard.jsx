import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
    text-decoration: none;
    margin-right: 10px;
`

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
        <LinkStyle to={`/recipe/${recipe?.id}`}><Button size="medium" variant='contained'>View</Button></LinkStyle>
        <Button size="medium" variant='outlined' color='error'>Delete</Button>
      </CardActions>
    </Card>
  );
}