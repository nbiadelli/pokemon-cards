/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { ListPokemonContext } from "../context/ListPokemonContext";
import ModalAbility from "./ModalAbility";
import StyledList from "../styled-components/ListPokemon-styled";
import pokemonLogo from "../img/pokemon_logo.png";
import Loader from "./Loader";
import { Link } from "@reach/router";
import Grid from "../styled-components/Grid-styled";
import Card from "../styled-components/Card-styled";

const List = () => {
  const { pokemon, loading, hasMore } = useContext(ListPokemonContext);
  const [showModal, setShowModal] = useState(false);
  const [showDetail, setShowDetail] = useState({});

  const handleClick = async (e, obj) => {
    if (typeof obj === "object") {
      const response = await (await fetch(obj.url)).json();
      setShowDetail({ ...obj, ...response });
    } else {
      setShowDetail({});
    }
    setShowModal(!showModal);
  };

  return (
    <StyledList>
      <ModalAbility
        detail={showDetail}
        handleShow={handleClick}
        open={showModal}
      />
      <img src={pokemonLogo} alt="pokemon_logo" />
      <Link className="link-home" to="/">
        Home
      </Link>
      <Grid>
        {pokemon.map((x) => (
          <Card key={x.name}>
            <div>
              <div>
                <img src={x.sprites.front_default} alt="" />
              </div>
              <div>
                <h1>{x.name}</h1>
                <h2>Ability</h2>
                <div>
                  {x.abilities.map((y) => (
                    <span
                      key={y.ability.name}
                      onClick={(e) =>
                        handleClick(e, {
                          url: y.ability.url,
                          name: x.name,
                          img: x.sprites.front_default,
                        })
                      }>
                      {y.ability.name}
                    </span>
                  ))}
                </div>
                <h2>Forms</h2>
                <section>
                  <span>
                    mega:{" "}
                    <span className="style-span">
                      {x.is_mega ? "yes" : "no"}
                    </span>
                  </span>
                  ,
                  <span>
                    {" "}
                    default:{" "}
                    <span className="style-span">
                      {x.is_default ? "yes" : "no"}
                    </span>
                  </span>
                  ,
                  <span>
                    {" "}
                    battle only:{" "}
                    <span className="style-span">
                      {x.is_battle_only ? "yes" : "no"}
                    </span>
                  </span>
                </section>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
      <div>{loading && hasMore && <Loader />}</div>
    </StyledList>
  );
};

export default List;
