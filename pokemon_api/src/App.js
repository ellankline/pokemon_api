import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState({});

  //const fetchPokemon = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <button onClick={setPokemon}>Fetch Pokemon</button>
      {pokemon.individuals ? pokemon.individuals.map((item, index)=>{
        console.log('hello!')
        return(<div key={index}>{item.name}</div>)
      }):null}
    </div>
  )
}

export default App;