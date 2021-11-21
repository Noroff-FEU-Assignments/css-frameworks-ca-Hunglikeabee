import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const StyledCarousel = styled(Carousel)`
  .carousel-indicators button {
    height: 30px !important;
    width: 30px !important;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px 0px;
    margin: 5px;
  }

  .carousel-indicators > .active {
    background-color: #e92569 !important;
  }
`;

function Bigcarousel() {
  return (
    <StyledCarousel
      fade
      interval={null}
      prevIcon={null}
      prevLabel={null}
      nextIcon={null}
      nextLabel={null}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.jpg"
          alt="Old monitors and a old bike"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.jpg"
          alt="The green ray closeup"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.jpg"
          alt="Destroyed old tv on bench"
        />
      </Carousel.Item>
    </StyledCarousel>
  );
}

export default Bigcarousel;
