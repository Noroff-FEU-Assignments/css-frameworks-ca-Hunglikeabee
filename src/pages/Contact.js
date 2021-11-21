import Container from "react-bootstrap/Container";
import HeadingH1 from "../components/text/HeadingH1";
import Contactform from "../components/contact/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <Container className="d-flex-row">
      <Row>
        <Col xs={{ order: 2, span: 12}} md={{order: 1}}>
          <HeadingH1>Submit your details</HeadingH1>
        </Col>
        <Col xs={{ order: 3, span: 12 }} md={{ order: 1, span: 6 }}>
          <Contactform />
        </Col>
        <Col xs={{ order: 1, span: 12 }} md={{ order: 3, span: 6 }}>
          <div className="contact__info--styling">
            <a href="https://www.vg.no">
              <i class="fas fa-envelope"></i>hello@yay.com
            </a>
            <a href="tel:123 456 7890">
              <i class="fas fa-phone"></i>123 456 7890
            </a>
            <a
              className="contact__info--address"
              href="https://goo.gl/maps/277cBVbZtof7erjJA"
            >
              <i class="far fa-comment-alt"></i>
              <div>
                <p>123 Some Street</p>
                <p>Somewhere</p>
                <p>Some City</p>
                <p>10000</p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
