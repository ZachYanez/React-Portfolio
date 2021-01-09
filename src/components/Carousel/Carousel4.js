import Carousel from 'react-bootstrap/Carousel'
import CDW1  from '../../assets/CDW1.jpg'
import CDW13 from '../../assets/CDW13.jpg'
import CDWcar1 from '../../assets/CDWcar1.jpg'
import CDWsitting7 from '../../assets/CDWsitting7.jpg'
import CDWstanding5 from '../../assets/CDWstanding5.jpg'
import CDWsweater1 from '../../assets/CDWsweater1.jpg'
import React from 'react'

export default function Carousel1() {
    return (
        <div>
            <div className="d-block w-100 mt-2 mb-2">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CDW1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p> Britton Orrange</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CDW13}
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
      src={CDWcar1}
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
      src={CDWsitting7}
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
      src={CDWstanding5}
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CDWsweater1}
      alt="Sixth slide"
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
