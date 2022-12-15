import React from 'react'
import { useGetTasksQuery, useUpdateTaskMutation, useDeleteTaskMutation } from './../api/index'
import {
    Row, Col, Card, CardTitle, CardText, Button
} from 'reactstrap'


function ListTasks() {
    const { data : tasks, isError, isLoading, error } = useGetTasksQuery()
    const [ updateTask ] = useUpdateTaskMutation()
    const [ deleteTask ] = useDeleteTaskMutation()

    const handleStatus = (task) => {
      updateTask({...task, status: !task.status})
    }

    if(isLoading) return <p>Cargando</p>
    if (isError) return <p>{error.message}</p>

    return  <Row>
        <Col sm={12} md={6}>
            <h2>Tareas por hacer</h2>
            <ul>
                {              
                    tasks.filter(t => !t.status)
                    .map(t => <Card
                        key={t.id}
                        body
                        className="my-2"
                        color="dark"
                        style={{
                          width: '18rem'
                        }}
                      >
                        <CardTitle tag="h5">
                            {t.title}
                        </CardTitle>
                        <CardText>
                          {t.description}
                        </CardText>
                        <Button color="primary" onClick={() => handleStatus(t)}>
                          Hecho
                        </Button>
                      </Card>)
                }
            </ul>
        </Col>
        <Col sm={12} md={6}>
            <h2>Tareas realizados</h2>
            <ul>
                {          
                    tasks.filter(t => t.status)
                    .map(t => <Card
                        key={t.id}
                        body
                        className="my-2"
                        color="dark"
                        style={{
                          width: '18rem'
                        }}
                      >
                        <CardTitle tag="h5">
                            {t.title}
                        </CardTitle>
                        <CardText>
                          {t.description}
                        </CardText>               
                     
                            <Button size='sm' color="primary" onClick={() => handleStatus(t)}>
                              Re hacer
                            </Button>
                    
                            <Button size='sm' color="danger" onClick={() => deleteTask(t.id)}>
                              Eliminar
                            </Button>             
                      </Card>)
                }
            </ul>
        </Col>
    </Row>  
}

export default ListTasks