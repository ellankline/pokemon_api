import React from 'react';
import DisplayPokemon from './displayPokemon.js'

const CatchEm = () => {
    const displayPokemon = (e) => {
        e.preventDefault();
        pokemon.individuals ? pokemon.individuals.map((item, index)=>{
            console.log('hello!')
            return(<div key={index}>{item.name}</div>)
          }):null}

    }
    return (
        <div>
        <button onClick={displayPokemon}>Fetch Pokemon</button>
        </div>
    
    

    );
};

export default CatchEm;