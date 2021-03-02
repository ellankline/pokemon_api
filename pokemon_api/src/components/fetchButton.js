import React from 'react';
import DisplayPokemon from './displayPokemon.js'

const CatchEm = ({DisplayPokemon}) => {
    const  showPokemon = (e) => {

    }
    return (
        <div>
        <button onClick={DisplayPokemon}>Fetch Pokemon</button>
        </div>
    
    

    );
};

export default CatchEm;