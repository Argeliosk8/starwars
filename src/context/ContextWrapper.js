import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextWrapper = (props)=> {
    const [store, setStore] = useState({
        characters: [],
        characterProfile: []
    });

    const [actions, setActions] = useState({
        getCharacters: characters => setStore({...store, characters: characters}),
        getCharacterProfile: profile => setStore({...store, characterProfile: profile})
    });

    return (
        <AppContext.Provider value={{store, actions}}>
            {props.children}
        </AppContext.Provider>
    )
}