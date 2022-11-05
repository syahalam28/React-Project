// Fungsi yang di dalamnya akan berisikan Source Code HTML 
// Contoh Fungsi Umum

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Bentuk Sederhana 
// import {Container,Nav,Navbar} from "react-bootstrap";

// function app(){
// return(
    
// )
// }

// Arrow Function
const NavigationBar = () => {
    return (
   
          <Navbar bg="" variant="dark">
            <Container>
              <Navbar.Brand href="/">OCTO FILM</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#trending">Trending</Nav.Link>
                <Nav.Link href="#superhero">Superhero</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
         

    );
}
export default NavigationBar