import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FrizzCheck from './FrizzCheck'
import FoodBook from './FoodBook'
import RPG from './RPG'
import Restaurant from './Restaurant'
import Note from './Note'
import Budget from './Budget'
import SayHey from './SayHey'

export default function Accordian() {
    return (
        <div >
          <div>
            <Accordion>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite"  as={Button} variant="link" eventKey="0">
        FrizzCheck
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="d-flex justify-content-center" >
        <FrizzCheck/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite" as={Button} variant="link" eventKey="5">
        Budget Tracker
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body className="d-flex justify-content-center" >
        <Budget />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite" as={Button} variant="link" eventKey="1">
        FoodBook
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body className="d-flex justify-content-center" >
        <FoodBook />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite" as={Button} variant="link" eventKey="6">
        sayHey
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="6">
      <Card.Body className="d-flex justify-content-center" >
        <SayHey />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite"  as={Button} variant="link" eventKey="2">
        Random Password Generator
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body className="d-flex justify-content-center" >
        <RPG/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite"  as={Button} variant="link" eventKey="3">
        Restaurant Finder
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body className="d-flex justify-content-center" >
        <Restaurant/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="webAccord">
    <Card.Header className="d-flex justify-content-center" >
      <Accordion.Toggle  className="textColorWhite"  as={Button} variant="link" eventKey="4">
        Note Taker
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body className="d-flex justify-content-center" >
        <Note />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
        </div>
    )
}
