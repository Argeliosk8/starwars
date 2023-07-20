import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function CharacterView(){
    let {character_id} = useParams()
    const context = useContext(AppContext)
    async function getCharacterProfileApi(){
        let options = {
            method: 'GET',
            headers: {"content-type": 'application/json'}
        }
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${character_id}`, options)
            if(response.ok){
                const jsonResponse = await response.json()
                console.log(jsonResponse.result.properties)
                context.actions.getCharacterProfile(jsonResponse.result.properties)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{getCharacterProfileApi()},[])

    return(
        <div>
            <h1>id: {character_id}</h1>
            <h1>height: {context.store.characterProfile.height}</h1>
            <h1>hair_color: {context.store.characterProfile.hair_color}</h1>
            <h1>eye_color: {context.store.characterProfile.eye_color}</h1>
            <h1>gender: {context.store.characterProfile.gender}</h1>
        </div>
    )
}

export default CharacterView;