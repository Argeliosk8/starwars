import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextWrapper = (props)=> {
    const [store, setStore] = useState({
        characters: [
            {
                name: "Character 1",
                description: "adadsad adad ads asda sda dsa sda dsasd asdadsdadsasdad"
            },
            {
                name: "Character 2",
                description: "adadsad adad ads asda sda dsa sda dsasd asdadsdadsasdad"
            },
            {
                name: "Character 3",
                description: "adadsad adad ads asda sda dsa sda dsasd asdadsdadsasdad"
            },
            {
                name: "Character 4",
                description: "adadsad adad ads asda sda dsa sda dsasd asdadsdadsasdad"
            },
            {
                name: "Character 5",
                description: "adadsad adad ads asda sda dsa sda dsasd asdadsdadsasdad"
            },
            {
                name: "Character 5",
                description: "adadsad adad ads asda sda dsa sda dsasd asdadsdadsasdad"
            }
        ]
    });

    const [actions, setActions] = useState({
        addCharacter: character => setStore({...store, characters: store.characters.push(character)})
    });

    return (
        <AppContext.Provider value={{store, actions}}>
            {props.children}
        </AppContext.Provider>
    )
}