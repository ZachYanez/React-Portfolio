import Carousel from 'react-bootstrap/Carousel'
import Jacket1 from '../../assets/Jacket1.jpg'
import Jacket2 from '../../assets/Jacket2.jpg'
import Jacket3 from '../../assets/Jacket3.jpg'
import Jacket4 from '../../assets/Jacket4.jpg'
import Jacket5 from '../../assets/Jacket5.jpg'
import React from 'react'

export default function Carousel5() {
    return (
        <div>
            <div className="d-block w-50 mt-2 mb-2">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jacket1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p> Ruben Caballero 2020</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jacket2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jacket3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jacket4}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jacket5}
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </div>
    )
}
