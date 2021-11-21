import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer>
      <Container className="footer__container">
        <Row>
          <Col xs={12} sm={true}>
            <i class="fab fa-vimeo-v"></i>
            <i class="fab fa-youtube"></i>
          </Col>
          <Col>
            <p>hello@yay.com</p>
          </Col>
          <Col>
            <p>Copyright 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
