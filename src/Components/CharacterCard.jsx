import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

function CharacterCard({character}){
    return(
        <Container id='card' >
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://placehold.co/200x200" />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        {character.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CharacterCard;