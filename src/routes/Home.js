import React, {useContext, useEffect} from "react";
import { Container } from "react-bootstrap";
import CharacterCard from "../Components/CharacterCard";
import PlanetCard from "../Components/PlanetCards";
import './home.css';
import { AppContext } from "../context/ContextWrapper";


function Home(){
    const store = useContext(AppContext)
    async function getCharactersApi(){
      let options = {
          method: 'GET',
          headers: {'content-type': 'application/json'}
      }
      try {
          const response = await fetch("https://www.swapi.tech/api/people", options)
          const jsonResponse = await response.json()
          if(response.ok){             
              
              store.setCharacters(jsonResponse.results)
              
          }
      } catch (error) {
          console.error(error)
      }
    }
    async function getPlanetsApi(){
        let options = {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        }
        try {
            const response = await fetch("https://www.swapi.tech/api/planets", options)
            const jsonResponse = await response.json()
            if(response.ok){
                store.setPlanets(jsonResponse.results)
               
            }
            
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(()=>{getCharactersApi()},[])
    useEffect(()=>{getPlanetsApi()},[])
    
    console.log(store.characters)
    console.log(store.planets)

    const renderCharacterCards = ()=>{
        return store.characters.map((character, key)=>{
            return <CharacterCard character={character} key={key}/>
        })
    }

    const renderPlanetCards = ()=>{
        return store.planets.map((planet, key)=>{
            return <PlanetCard planet={planet} key={key} />
        })
    }
    return(
        <>
                <Container className="titleContainer">
                    <h3>Characters</h3>
                </Container>
                <Container id='cardcontainer'>
                    {renderCharacterCards()}
                </Container>
                <Container className="titleContainer">
                    <h3>Planets</h3>
                </Container>
                <Container id='cardcontainer'>
                    {renderPlanetCards()}
                </Container>
                
        </>
    )
}

export default Home;