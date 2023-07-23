import React, { useState, createContext } from "react";

export const AppContext = createContext();

const initialState = {
        characters: [],
        characterProfile: [],
        characterDescription: '',
        favoriteCharacters: []
}

export const ContextWrapper = ({children})=> {
    const [characters, setCharacters] = useState([]);
    const [favoriteCharacters, setFavoriteCharacters] = useState([])
    const [characterProfile, setCharacterProfile] = useState([])
    
    return (
        <AppContext.Provider value={{characters, setCharacters, favoriteCharacters, setFavoriteCharacters, characterProfile, setCharacterProfile}}>
            {children}
        </AppContext.Provider>
    )   
}