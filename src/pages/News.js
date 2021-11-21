import InfoCard from "../components/infocard/Infocard";
import Container from "react-bootstrap/Container";
import HeadingH1 from "../components/text/HeadingH1";
import Paginationtag from "../components/paginationtag/paginationtag";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function News() {
  return (
    <Container>
      <Row>
      <HeadingH1>News</HeadingH1>
      <Paginationtag />
        <Col>
          <InfoCard
            src="/images/news/news-1.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-2.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-3.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-4.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-5.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-6.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-7.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        <Col>
          <InfoCard
            src="/images/news/news-8.jpg"
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        </Col>
        {/* <InfoCard src="/images/news/news-1.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-2.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-3.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-4.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-5.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-6.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-7.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." />
            <InfoCard src="/images/news/news-8.jpg" title="Nunc porttitor vel" text="Nunc malesuada eget est fringilla dapibus." /> */}
      </Row>
    </Container>
  );
}

export default News;
