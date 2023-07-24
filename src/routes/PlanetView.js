import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import { ContextWrapper, AppContext } from '../context/ContextWrapper';
import './profile.css'

function PlanetView(){
    let {planet_id} = useParams()
    const store = useContext(AppContext)
    
    async function getPlanetProfileApi(){
        let options = {
            method: 'GET',
            headers: {"content-type": 'application/json'}
        }
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${planet_id}`, options)
            const jsonResponse = await response.json()
            if(response.ok){
                
                store.setPlanetProfile(jsonResponse.result.properties)
                console.log(store.planetProfile)
            }   
        } catch (error) {
            console.error(error)
        }
    }
    
    
    useEffect(()=>{getPlanetProfileApi()},[])
   
    
    return(
        <ContextWrapper>
            <Container fluid className="mainContainer">
                <Container className="profileContainer">
                    <Container className="profileHeader">
                                <h3>{store.planetProfile.name}</h3>
                    </Container>
                    <Container className="profileBody">
                                <Container className="imgContainer"><img src="https://placehold.co/600x400"/></Container>
                                <Container className="infoContainer">
                                    <Row>
                                        <Col sm={6}><strong>Chateristic</strong></Col>
                                        <Col sm={6}><strong>Value</strong></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Diameter</Col>
                                        <Col sm={6}>{store.planetProfile.diameter}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Rotation Period</Col>
                                        <Col sm={6}>{store.planetProfile.rotation_period}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Orbital Period</Col>
                                        <Col sm={6}>{store.planetProfile.orbital_period}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Gravity</Col>
                                        <Col sm={6}>{store.planetProfile.gravity}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Population</Col>
                                        <Col sm={6}>{store.planetProfile.population}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Climate</Col>
                                        <Col sm={6}>{store.planetProfile.climate}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Terrain</Col>
                                        <Col sm={6}>{store.planetProfile.terrain}</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>Surface Water</Col>
                                        <Col sm={6}>{store.planetProfile.surface_water}</Col>
                                    </Row>
                                    <Container className="descriptionContainer">
                                        <Container><h4>"A Planet."</h4></Container>
                                    </Container>
                                </Container>
                            </Container>
                </Container>
            </Container>
        </ContextWrapper>
    )
}

export default PlanetView;