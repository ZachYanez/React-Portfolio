import Carousel from 'react-bootstrap/Carousel'
import Fashion1 from '../../assets/Fashion1.jpg'
import Fashion2 from '../../assets/Fashion2.jpg'
import Fashion3 from '../../assets/Fashion3.jpg'
import Fashion4 from '../../assets/Fashion4.jpg'
import React from 'react'

export default function Carousel1() {
    return (
        <div>
            <div className="d-block w-100">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Fashion1}
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
      src={Fashion2}
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
      src={Fashion3}
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
      src={Fashion4}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
   {/* 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={}
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
</div>
        </div>
    )
}
