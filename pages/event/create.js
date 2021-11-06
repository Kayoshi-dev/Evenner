import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DatePicker from "react-datepicker";
import dynamic from "next/dynamic";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

let QuillEditor = dynamic(() => import("../../components/QuillEditor"), {
  ssr: false,
});

function CreateEvent() {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <h1>Créer un nouvel évènement</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Titre de votre évènement</Form.Label>
          <Form.Control type='email' placeholder='Sortie à Paris !' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description de l&apos;évènement</Form.Label>
          <QuillEditor handleChange={setDescription} value={description} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Row>
            <Col xs={12} md={6}>
              <Form.Label>Date de commencement</Form.Label>
              <DatePicker
                dateFormat='dd/MM/yyyy'
                calendarStartDay={1}
                locale='fr'
                selected={date}
                onChange={(date) => setDate(date)}
                className='form-control'
              />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Date de fin</Form.Label>
              <DatePicker
                dateFormat='dd/MM/yyyy'
                calendarStartDay={1}
                locale='fr'
                selected={date}
                onChange={(date) => setDate(date)}
                className='form-control'
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Lieu de l&apos;évènement</Form.Label>
          <Form.Control type='text' placeholder='Paris, 13ème arrondissement' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Créer !
        </Button>
      </Form>
    </Container>
  );
}

export default CreateEvent;
