import React, {useContext} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppContext } from "../context/AppContext";

function HomeNav(){
    
    const context = useContext(AppContext)
    const renderOptions = ()=>{
        return context.store.characters.map(character=>{
            return(
                <NavDropdown.Item href={`#action/3.1`}>{character.name}</NavDropdown.Item>
            )
        })
        
    }
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dstar%2Bwars&psig=AOvVaw0fyqcHMRWqm3JrHBRquLLk&ust=1689862559291000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPj2td76moADFQAAAAAdAAAAABAJ" width="200" alt="star wars logo design" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">                  
                </Nav>
                <Nav>
                    <NavDropdown title={`Favorites (${context.store.characters.length})`} id="collasible-nav-dropdown">                        
                        {renderOptions()}                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default HomeNav;