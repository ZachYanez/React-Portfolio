import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Published() {
  return (
    <div className="background">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://docs.google.com/document/d/1G01xAHsiJRkWq-Ug-UA_B2KY-wJ0AABOxLXmicG0iYI/edit?usp=sharing"
              >
                Standard Resume
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://drive.google.com/drive/u/0/folders/1VTOSj2tns_3iLfshmJYWYNrPikSC0nIv"
              >
                Entertainment Resume
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/zachary-yanez/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="http://www.brownagency.co/commercial/men/1114-zach-yanez/">
                Brown
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/zach_on_drums/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.westlakelessons.com/zachary-yanez#:~:text=Zach%20Yanez%20is%20a%20highly,classical%20percussion%20and%20drum%20set."
              >
                Westlake Lessons
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/ZachYanez">
                Github
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#VidPage">Videos</Nav.Link>
            <Nav.Link href="#Published">Published</Nav.Link>
            <Nav.Link href="#Webdev">Web Development</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:zachyanez@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area">Content</div>
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
  );
}
