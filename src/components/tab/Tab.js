import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Tabinfo() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3 d-none d-md-flex"
    >
      <Tab eventKey="first" title="First">
        <Container className="d-none d-md-flex">
          <Row>
            <Col md={4}>
              <img
                className="tab__image d-block w-100"
                src="/images/tab/tab-1.jpg"
              />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div className="tab-share">
                <a>SHARE</a>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="second" title="Second">
        <Container className="d-none d-md-flex">
          <Row>
            <Col md={4}>
              <img
                className="tab__image d-block w-100"
                src="/images/tab/tab-2.jpg"
              />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div className="tab-share">
                <a>SHARE</a>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="third" title="Third">
        <Container className="d-none d-md-flex">
          <Row>
            <Col md={4}>
              <img
                className="tab__image d-block w-100"
                src="/images/tab/tab-3.jpg"
              />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div className="tab-share">
                <a>SHARE</a>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default Tabinfo;
