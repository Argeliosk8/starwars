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

    const deleteFavorite = (e, fav) => {
        e.preventDefault()
        const newFavorites = store.favorites.filter(favorite => favorite !== fav)
        store.setFavorites(newFavorites)
    }
    
    const renderOptions = ()=>{
        return store.favorites.map((favorite, key)=>{
            return(
                <>
                <NavDropdown.Item key={key}><Link to={`/${favorite.type}/${favorite.uid}`}>{favorite.name}</Link><span onClick={(e)=>{deleteFavorite(e, favorite)}} class="material-symbols-outlined">delete</span></NavDropdown.Item>
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
                    <NavDropdown title={`Favorites (${store.favorites.length})`} id="collasible-nav-dropdown" className="dropContainer">                        
                        {renderOptions()}                    
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default HomeNav;