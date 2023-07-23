import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import { AppContext } from "../context/ContextWrapper";
import { Link } from "react-router-dom";

function CharacterCard({character}){
    
    const store = useContext(AppContext)
        

        function handleFavoriteClick(e, character){
            e.preventDefault()
            store.setFavoriteCharacters([...store.favoriteCharacters, character])
        }
        return(
        <Container id='card'>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://placehold.co/200x200" />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Container className="buttonsContainer">
                        <Link to={`character/${character.uid}`}><Button>Learn More</Button></Link>                        
                        <i className="fas fa-band-aid" onClick={(e)=>handleFavoriteClick(e, character)}><span className="material-symbols-outlined">favorite</span></i>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
        )
}

export default CharacterCard;