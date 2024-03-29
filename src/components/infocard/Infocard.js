import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Infocard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary" className="more-button">MORE</Button>
      </Card.Body>
    </Card>
  );
}

export default Infocard