import Container from "react-bootstrap/Container";
import Bigcarousel from "../components/carousel/Carousel";
import HeadingH1 from "../components/text/HeadingH1";
import Paragraph from "../components/text/Paragraph";
import Tabinfo from "../components/tab/Tab";
import SiteAccordion from "../components/accordion/Accordion";

function Home() {
  return (
    <>
      <Bigcarousel />
      <Container>
        <HeadingH1 fontSize="34px">We do YAY things</HeadingH1>
        <Paragraph fontSize="16px">
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </Paragraph>
        <Tabinfo />
        <SiteAccordion />
      </Container>
    </>
  );
}

export default Home;
