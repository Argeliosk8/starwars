import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import HomeNav from "../Components/HomeNav";
import { ContextWrapper, AppContext } from '../context/ContextWrapper';
import './profile.css'

function CharacterView(){
    let {character_id} = useParams()
    const store = useContext(AppContext)
    
    async function getCharacterProfileApi(){
        let options = {
            method: 'GET',
            headers: {"content-type": 'application/json'}
        }
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${character_id}`, options)
            const jsonResponse = await response.json()
            if(response.ok){
                
                store.setCharacterProfile(jsonResponse.result.properties)
                console.log(store.characterProfile)
            }   
        } catch (error) {
            console.error(error)
        }
    }
    
    
    useEffect(()=>{getCharacterProfileApi()},[])
   
    
    return(
        <ContextWrapper>
            <Container fluid className="mainContainer">
                <HomeNav />
                <Container className="profileContainer">
                    <Container className="profileHeader">
                                <h3>{store.characterProfile.name}</h3>
                    </Container>
                    <Container className="profileBody">
                                <Container className="imgContainer"><img src="https://placehold.co/600x400"/></Container>
                                <Container className="infoContainer">
                                    <Row>
                                        <Col sm={6}><strong>Chateristic</strong></Col>
                                        <Col sm={6}><strong>Value</strong></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Height</Col>
                                        <Col sm={6}>{store.characterProfile.height}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Mass</Col>
                                        <Col sm={6}>{store.characterProfile.mass}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Hair Color</Col>
                                        <Col sm={6}>{store.characterProfile.hair_color}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Skin Color</Col>
                                        <Col sm={6}>{store.characterProfile.skin_color}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Eye Color</Col>
                                        <Col sm={6}>{store.characterProfile.eye_color}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Gender</Col>
                                        <Col sm={6}>{store.characterProfile.gender}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>World</Col>
                                        <Col sm={6}>{store.characterProfile.homeworld}</Col>
                                    </Row>
                                    <Container className="descriptionContainer">
                                        <Container><h4>"A person within the Star Wars universe"</h4></Container>
                                    </Container>
                                </Container>
                            </Container>
                </Container>
            </Container>
        </ContextWrapper>
    )
}

export default CharacterView;