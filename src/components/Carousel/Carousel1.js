import Carousel from "react-bootstrap/Carousel";
import Smile from "../../assets/Smile.jpg";
import Smile2 from "../../assets/Smile2.jpg";
import Smile3 from "../../assets/Smile3.jpg";
import Smile4 from "../../assets/Smile4.jpg";
import Smile5 from "../../assets/Smile5.jpg";
import React from "react";

export default function Carousel1() {
  return (
    <div>
      <div className="d-block w-50 mt-2 mb-2">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Smile} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p> Ruben Caballero 2020</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Smile2} alt="Second slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Smile3} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Smile4} alt="Fourth slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Smile5} alt="Fifth slide" />

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
