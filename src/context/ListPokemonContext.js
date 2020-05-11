/* eslint-disable no-new-object */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { createContext, useState, useEffect } from "react";

export const ListPokemonContext = createContext();

const ListPokemonContextProvider = props => {
    const [pokemon, setPokemon] = useState([]);
    const [pos, setPos] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        if(!loading)return;
        listPokemon(pos);
    }, [loading])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getPokemon = (pos) => fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pos * 20}&limiy=20`);
    const listPokemon = async (pos) =>  {
        if (!hasMore) {
            setLoading(false);
            return;
          }
        setPos(pos + 1);
        const data = await (await getPokemon(pos)).json();
        setHasMore(data.results.length ? true : false);
        const details = await Promise.all(data.results.map(x => fetch(x.url)));
        const detailsJson =  await Promise.all(details.map(x => x.json()));
        console.log(data.count)
        
        const pokemonDTO = [
            ...pokemon,
            ...data.results.map((x, idx) => {
                return {
                    ...x,
                    ...detailsJson[idx],
                };
            })
        ]

        setPokemon([...pokemonDTO])
        setLoading(false)

    }

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 300 >=
            document.documentElement.offsetHeight
          ) {
            setLoading(true);
          }
    }


    return (
        <ListPokemonContext.Provider
            value={{
                pokemon,
                loading,
                pos,
                hasMore
            }}>
            {props.children}
        </ListPokemonContext.Provider>
    );

}

export default ListPokemonContextProvider;