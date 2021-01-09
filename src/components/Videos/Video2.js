import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export default function Video2() {
    return (
        <div>
            <Container className="mt-5" fluid >
                <Col className="d-flex justify-content-center" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AfkGA5B7QHc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Container>
        </div>
    )
}
