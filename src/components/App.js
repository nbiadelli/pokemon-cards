import React from "react";
import { Router } from "@reach/router";
import ListPokemonContextProvider from "../context/ListPokemonContext";
import ListPokemon from "./ListPokemon";
import Home from "./Home";
import "../App.css";

export default function App() {
  return (
    <ListPokemonContextProvider>
      <Router>
        <Home path="/" />
        <ListPokemon path="/pokemon" />
      </Router>
    </ListPokemonContextProvider>
  );
}
