import React, {useContext, useEffect} from "react";
import { Container } from "react-bootstrap";
import CharacterCard from "../Components/CharacterCard";
import HomeNav from "../Components/HomeNav";
import './home.css';
import { ContextWrapper, AppContext } from "../context/ContextWrapper";


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
              console.log(store.characters)
          }
      } catch (error) {
          console.error(error)
      }
    }
    
    useEffect(()=>{getCharactersApi()},[])

    const renderCharacterCards = ()=>{
        return store.characters.map((character, key)=>{
            return <CharacterCard character={character} key={key}/>
        })
    }
    return(
        <ContextWrapper>
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
        </ContextWrapper>
    )
}

export default Home;