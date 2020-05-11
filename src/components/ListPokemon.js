/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { ListPokemonContext } from "../context/ListPokemonContext";
import ModalAbility from "./ModalAbility"
import StyledList from "../styled-components/ListPokemon-styled";
import pokemonLogo from "../img/pokemon_logo.png"
import Loader from "./Loader";

import Grid from "../styled-components/Grid-styled"
import Card from "../styled-components/Card-styled"


const List = () => {
    const { pokemon, loading, hasMore } = useContext(ListPokemonContext);
    const [showModal, setShowModal] = useState(false);
    const [showDetail, setShowDetail] = useState({});

    const handleClick = async (e, obj) => {
        if (typeof (obj) === 'object') {
            const response = await (await fetch(obj.url)).json();
            setShowDetail({ ...obj, ...response });
        } else {
            setShowDetail({});
        }
        setShowModal(!showModal);
    }

    return (
        <StyledList>
            <ModalAbility detail={showDetail} handleShow={handleClick} open={showModal} />
            <img src={pokemonLogo} alt="pokemon_logo" />
            <Grid>
                {pokemon.map(x =>
                    <Card key={x.name}>
                        <div>
                            <div>
                                <img src={x.sprites.front_default} alt="" />
                            </div>
                            <div>
                                <h1>{x.name}</h1>
                                <h2>Ability</h2>
                                {x.abilities.map(y =>
                                    <div key={y.ability.name}>
                                        <div>
                                            <h3 onClick={(e) => handleClick(e, {
                                                url: y.ability.url,
                                                name: x.name,
                                                img: x.sprites.front_default
                                            })}>{y.ability.name}</h3>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                )}
            </Grid>

            <div>
                {(loading && hasMore) && (
                    <Loader />
                )}
            </div>
        </StyledList>

    );
};

export default List;