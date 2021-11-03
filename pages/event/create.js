import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";

let QuillEditor = dynamic(() => import("../../components/QuillEditor"), {
  ssr: false,
});

function CreateEvent() {
  return (
    <Container>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Titre de votre évènement</Form.Label>
          <Form.Control type='email' placeholder='Sortie à Paris !' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description de l&apos;évènement</Form.Label>
          <QuillEditor />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreateEvent;
