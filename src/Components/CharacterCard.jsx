import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CharacterCard({character}){
    const navigate = useNavigate()
    
    function clickHandler(id){
        navigate(`/character/${id}`)
    }

    return(
        <Container id='card' >
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://placehold.co/200x200" />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Button variant="primary" onClick={()=>clickHandler(character.uid)}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CharacterCard;