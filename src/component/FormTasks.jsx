import React from 'react'
import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'
import {
  useCreateTaskMutation,
  useUpdateTaskMutation
} from './../api/index'

function FormTasks() {

  const [ createTask ] = useCreateTaskMutation()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const title = e.target.elements.title.value.trim()
    const description =  e.target.elements.description.value.trim()

    if ( !title || !description ) return false

    createTask({ title,  description, status: false })
    e.target.reset()    
  }



  return (
    <Form onSubmit={handleSubmit}>
    <FormGroup floating>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Titulo"
      />
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="description"
        name="text"
        type="textarea"
        placeholder="Descripción"
      />
    </FormGroup>
    {' '}
    <Button block color='success'>
      Guardar
    </Button>
  </Form>
  )
}

export default FormTasks