import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Contactform() {
  return (
    <Form className="contact--form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Label htmlFor="basic-url">Email</Form.Label>
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon3" className="d-none d-md-block">https://</InputGroup.Text>
        <FormControl id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>

        <Form.Control as="textarea" rows={8} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details
                to whomever we want"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contactform;
