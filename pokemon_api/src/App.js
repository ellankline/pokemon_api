import './App.css';
import React, {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState({});

  //const fetchPokemon = () => {
 const buttonClick = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
      .then((response) => {
        return response.json()
        //response.json()
        //  .then((jsonResponse) => {
        //    console.log(jsonResponse);
        //    setPokemon(jsonResponse);
          })
        .then(response => {
          setPokemon({
            individuals: response.results
          })
        })
        //  .catch((jsonError) => {
        //    console.log(jsonError);
      //    })
      //})
      //.catch((error) => {
      //  console.log(error);
     // })
  };

  return (
    <div className="App">
      <button onClick={buttonClick}>Fetch Pokemon</button>
      {pokemon.individuals ? pokemon.individuals.map((item, index)=>{
        console.log('hello!')
        return(<div key={index}>{item.name}</div>)
      }):null}
    </div>
  )
}

export default App;