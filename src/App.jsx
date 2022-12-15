import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import ListTasks  from './component/ListTasks'
import FormTasks from './component/FormTasks'
function App() {
  return <Container className='mt-4'>
    <Row>
      <Col sm={12} md={4}>
        <FormTasks/>
      </Col>
      <Col sm={12} md={8}>
        <ListTasks/>
      </Col>
    </Row>
  </Container>
}

export default App
