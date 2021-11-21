import Accordion from "react-bootstrap/Accordion";

function SiteAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Accordion.Item className="accordion-1" eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.</p>
          <img
            className="d-block w-100"
            src="/images/tab/tab-1.jpg"
            alt="First slide"
          />
          <div className="accordion-share">
            <a>SHARE</a>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="accordion-2" eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.</p>
          <img
            className="d-block w-100"
            src="/images/tab/tab-2.jpg"
            alt="First slide"
          />
          <div className="accordion-share">
            <a>SHARE</a>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="accordion-3" eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
          condimentum mattis rhoncus.</p>
          <img
            className="d-block w-100"
            src="/images/tab/tab-3.jpg"
            alt="First slide"
          />
          <div className="accordion-share">
            <a>SHARE</a>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SiteAccordion;
