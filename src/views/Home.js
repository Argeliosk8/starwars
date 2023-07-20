import React, {useContext, useEffect} from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import CharacterCard from "../Components/CharacterCard";
import HomeNav from "../Components/HomeNav";
import './home.css';
import { useParams } from "react-router-dom";


function Home(){
    const context = useContext(AppContext)
    let { id } = useParams();
    console.log(id)
    async function getCharactersApi(){
        let options = {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        }
        try {
            const response = await fetch("https://www.swapi.tech/api/people", options)
            if(response.ok){
                const jsonResponse = await response.json()
                console.log(jsonResponse.results)
                context.actions.getCharacters(jsonResponse.results)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{getCharactersApi()},[])

    const renderCharacterCards = ()=>{
        return context.store.characters.map((character, key)=>{
            return <CharacterCard character={character} key={key}/>
        })
    }
    return(
        <Container id="homecontainer">
                <HomeNav />
                <Container>
                    <h3>Characters</h3>
                </Container>
                <Container id='cardcontainer'>
                    {renderCharacterCards()}
                </Container>
                <Container>
                    <h3>Planets</h3>
                </Container>
                <Container id='cardcontainer'>
                </Container>
            </Container>
    )
}

export default Home;