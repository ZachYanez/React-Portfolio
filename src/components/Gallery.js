import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel1 from './Carousel/Carousel1'
import Carousel2 from './Carousel/Carousel2'
import Carousel3 from './Carousel/Carousel3'
import Carousel4 from './Carousel/Carousel4'
import Carousel5 from './Carousel/Carousel5'


export default function Gallery() {
    return (
        <div className="background">
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://docs.google.com/document/d/1BcQMigdDc1vVoHoA74L9yAogPVHGwgpyKS150JCQnbQ/edit">Standard Resume</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://drive.google.com/drive/u/0/folders/1VTOSj2tns_3iLfshmJYWYNrPikSC0nIv">Entertainment Resume</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/zachary-yanez/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="http://www.brownagency.co/commercial/men/1114-zach-yanez/">Brown Agency</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/zach_on_drums/">Instagram</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.westlakelessons.com/zachary-yanez#:~:text=Zach%20Yanez%20is%20a%20highly,classical%20percussion%20and%20drum%20set.">Westlake Lessons</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/ZachYanez">Github</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="staticLink" href="#">Gallery</Nav.Link>
            <Nav.Link href="#VidPage">Videos</Nav.Link>
            <Nav.Link href="#Published">Published</Nav.Link>
            <Nav.Link href="#WebDev">Web Development</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:zachyanez@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area">
        <Carousel1/>
        <div className="d-flex justify-content-end">
          <span className="col-6"/>
          <Carousel2 />
      </div>
      <div>
        <Carousel3 />
        <div className="d-flex justify-content-end">
          <span className="col-4"/>
          <Carousel4 />
          </div>
          <Carousel5/>
          <div>
          <div/>
      </div>
      
      </div>
      
     </div>
     
        
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:zachyanez@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}