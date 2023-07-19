import React, {useContext} from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import CharacterCard from "../Components/CharacterCard";
import HomeNav from "../Components/HomeNav";
import './home.css';


function Home(){
    const context = useContext(AppContext)
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