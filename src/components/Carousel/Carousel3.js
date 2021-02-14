import Carousel from "react-bootstrap/Carousel";
import AnF6 from "../../assets/AnF6.jpg";
import AnF26 from "../../assets/AnF26.jpg";
import AnF54 from "../../assets/AnF37.jpg";
import AnF37 from "../../assets/AnF54.jpg";
import AnF100 from "../../assets/AnF100.jpg";
import AnF104 from "../../assets/AnF104.jpg";
import React from "react";

export default function Carousel3() {
  return (
    <div>
      <div className="d-block w-75 mt-2 mb-2">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={AnF6} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p> Marshall Tidrick Photo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={AnF26} alt="Second slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={AnF37} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={AnF54} alt="Fourth slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={AnF100} alt="Fifth slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={AnF104} alt="Fifth slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
