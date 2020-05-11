import React from 'react';
import ListPokemonContextProvider from "../context/ListPokemonContext";
import ListPokemon from "./ListPokemon"
import '../App.css';


export default function App() {

  return (
    <ListPokemonContextProvider>
      <div className="container">
        <div className="main">
          <ListPokemon />
        </div>
      </div>
    </ListPokemonContextProvider>
  );
}

