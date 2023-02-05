import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { db } from "../firebase.config"
import { useState, useEffect } from "react"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"

import TextField from '@mui/material/TextField';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    /* align-items: center; */
    margin-top: 17px;

    div{
        width: 100%;
    }

`

const MappingContainers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const MappingContainerWrapper = styled.div`
    display: flex;
    gap: 0.7rem;
`

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RecipeModal({recipesCollectionRef }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const [form, setForm] = useState({
    title:'',
    desc:'',
    images:[],
    ingredients:[],
    steps:[]
})

const handleSubmit = e => {
    e.preventDefault()

    if (
      !form.title ||
      !form.desc ||
      !form.ingredients ||
      !form.steps
    ) {
      alert("Please fill out all fields")
      return
    }

    addDoc(recipesCollectionRef, form)

    setForm({
      title: "",
      desc: "",
      bg : "",
      ingredients: [],
      steps: [],
      images : []
    })

    setOpen(false)
  }

  const handleIngredient = (e, i) => {
    const ingredientsClone = [...form.ingredients]

    ingredientsClone[i] = e.target.value

    setForm({
      ...form,
      ingredients: ingredientsClone
    })
  }

  const handleIngredientCount = () => {
    setForm({
      ...form,
      ingredients: [...form.ingredients, ""]
    })
  }
  const handleStep = (e, i) => {
    const stepsClone = [...form.steps]

    stepsClone[i] = e.target.value

    setForm({
      ...form,
      steps: stepsClone
    })
  }


  const handleStepCount = () => {
    setForm({
      ...form,
      steps: [...form.steps, ""]
    })
  }
  const handleImages = (e, i) => {
    const imagesClone = [...form.imagesClone]

    imagesClone[i] = e.target.value

    setForm({
      ...form,
      images: imagesClone
    })
  }


  const handleImagesCount = () => {
    setForm({
      ...form,
      images: [...form.images, ""]
    })
  }


  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>Add Recipe</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
          <Typography variant="h4" gutterBottom >Add a new recipe</Typography>

          <Form onSubmit={handleSubmit}>

            <div className="form-group">
             
              <TextField id="outlined-basic" label="Title" variant="outlined" 
                type="text" 
                value={form.title} 
                onChange={e => setForm({...form, title: e.target.value})} />
            </div>

            <div className="form-group">
              
              <TextField id="outlined-basic" label="Description" variant="outlined" 
                type="text" 
                value={form.desc} 
                onChange={e => setForm({...form, desc: e.target.value})} />
            </div>
            <div className="form-group">
              
              <TextField id="outlined-basic" label="Background Images URL" variant="outlined" 
                type="text" 
                value={form.bg} 
                onChange={e => setForm({...form, bg: e.target.value})} />
            </div>

            <MappingContainerWrapper>
            <MappingContainers className="form-group">
              
              {
                form.ingredients.map((ingredient, i) => (
                  <TextField id="outlined-basic" label="Ingredients" variant="outlined" 
                    type="text"
                    key={i}
                    value={ingredient} 
                    onChange={e => handleIngredient(e, i)} />
                ))
              }
              <Button variant="outlined" type="button" onClick={handleIngredientCount}>Add ingredient</Button>
            </MappingContainers>

            <MappingContainers className="form-group">
            
              {
                form.steps.map((step, i) => (
                  <TextField id="outlined-basic" label="Steps" variant="outlined" 
                    type="text"
                    key={i}
                    value={step} 
                    onChange={e => handleStep(e, i)} />
                ))
              }
              <Button variant="outlined" type="button" onClick={handleStepCount}>Add step</Button>
            </MappingContainers>
            <MappingContainers className="form-group">
            
              {
                form.images.map((step, i) => (
                  <TextField id="outlined-basic" label="Images URL" variant="outlined" 
                    type="text"
                    key={i}
                    value={step} 
                    onChange={e => handleImages(e, i)} />
                ))
              }
              <Button variant="outlined" type="button" onClick={handleImagesCount}>Add Image URL</Button>
            </MappingContainers>
            </MappingContainerWrapper>

            <div className="buttons">
              <Button variant="outlined" sx={{marginRight: '10px'}} type="submit">Submit</Button>
              <Button variant="outlined" type="button" onClick={handleOpen}>Close</Button>
            </div>

          </Form>
          </Box>
      </Modal>
    </div>
  );
}