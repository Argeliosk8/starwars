import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import { AppContext } from "../context/ContextWrapper";
import { Link } from "react-router-dom";

function PlanetCard({planet}){
    
    const store = useContext(AppContext)
        

        function handleFavoriteClick(e, planet){
            planet.type = 'planets'
            e.preventDefault()
            if(store.favorites.includes(planet)){     
                const newFavorites = store.favorites.filter(favorite => favorite !== planet)
                store.setFavorites(newFavorites) 
                //e.target.textContent = "favorite"; 
                e.target.style.color = 'black'      
                
            } else {
                store.setFavorites([...store.favorites, planet]) 
                //e.target.textContent = "done"; 
                e.target.style.color = 'red'            
            }
            
        }
        return(
        <Container id='card'>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://placehold.co/200x200" />
                <Card.Body>
                    <Card.Title>{planet.name}</Card.Title>
                    <Container className="buttonsContainer">
                        <Link to={`planets/${planet.uid}`}><Button>Learn More</Button></Link>                        
                        <i className="fas fa-band-aid" onClick={(e)=>handleFavoriteClick(e, planet)}><span className="material-symbols-outlined">favorite</span></i>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
        )
}

export default PlanetCard;