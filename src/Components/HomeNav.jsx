import React, {useContext, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppContext } from "../context/ContextWrapper";
import { Link } from "react-router-dom";
import logo from "../Images/starwars_logo.png"

function HomeNav(){
    
    const store = useContext(AppContext)

    const deleteFavorite = (e, uid) => {
        e.preventDefault()
        const newFavorites = store.favoriteCharacters.filter(favorite => favorite.uid != uid)
        store.setFavoriteCharacters(newFavorites)
    }
    
    const renderOptions = ()=>{
        return store.favoriteCharacters.map((character, key)=>{
            return(
                <>
                <NavDropdown.Item key={key}><Link to={`/character/${character.uid}`}>{character.name}</Link><span onClick={(e)=>{deleteFavorite(e, character.uid)}} class="material-symbols-outlined">delete</span></NavDropdown.Item>
                </>
                
            )
        })
    }

    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
            <Link to={"/"}><Navbar.Brand><img src={logo} width="200" alt="star wars logo design" /></Navbar.Brand></Link>            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">                  
                </Nav>
                <Nav>
                    <NavDropdown title={`Favorites (${store.favoriteCharacters.length})`} id="collasible-nav-dropdown" className="dropContainer">                        
                        {renderOptions()}                    
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default HomeNav;