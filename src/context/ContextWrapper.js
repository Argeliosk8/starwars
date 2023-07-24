import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const ContextWrapper = ({children})=> {
    const [characters, setCharacters] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [characterProfile, setCharacterProfile] = useState([])
    const [planetProfile, setPlanetProfile] = useState([])
    const [planets, setPlanets] = useState([])
    
    return (
        <AppContext.Provider value={{characters, setCharacters, favorites, setFavorites, characterProfile, setCharacterProfile, planets, setPlanets, planetProfile, setPlanetProfile}}>
            {children}
        </AppContext.Provider>
    )   
}