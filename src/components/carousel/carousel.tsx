import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel-styles.css";

function UncontrolledExample() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oniz.com.br/_uploads/af217418-09b5-4553-ba0f-a5c8d160b069.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oniz.com.br/_uploads/19eddf81-7731-489d-a8a2-b49e8ea3e469.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oniz.com.br/_uploads/7de1936a-8a58-4327-952c-bc8e31b2b05b.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
