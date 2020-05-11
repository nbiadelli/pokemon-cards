/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "@reach/router";
import StyledList from "../styled-components/ListPokemon-styled";
import logoHome from "../img/logoHome.png";
const Home = () => {
  return (
    <StyledList>
      <div className="container">
        <div>
          <img className="logo_home" src={logoHome} alt="pokemon_logo" />

          <div>
            <h1>Choose your Pokemon.</h1>
            <Link to="/pokemon">
              <button>GO!</button>
            </Link>
          </div>
        </div>
        <div>
          <h1>Pokémon Cards</h1>
          <p>
            Basic Pokémon are the foundation of all decks. Without them, a
            player cannot play the game since both players begin the game by
            placing a Basic Pokémon in the Active position on the field. Each
            Pokémon card depicts a Pokémon from the video games. Each player may
            have up to six Pokémon on the playing field at a time: one "Active"
            Pokémon and up to five on the bench. Each Pokémon card has a name, a
            type, and an amount of Health Points (HP).
          </p>
          <p>
            All Pokémon feature attacks; these typically deal damage to the
            opponent's active Pokémon, or occasionally, their benched Pokémon;
            however, an attack may also perform different functions, such as
            drawing cards, inflicting Special Conditions, or altering the
            opponent's board state. The vast majority of these attacks require
            Energy, which comes in the form of Energy cards. Abilities, known as
            Poké-Powers and Poké-Bodies until 2011, are not attacks but simply
            effects that either are activated under certain conditions or remain
            in effect as long as the Pokémon with the Ability remains in play.
          </p>
          <p>
            The other type of Pokémon card is an Evolved Pokémon. Basic Pokémon
            is Pokémon that have not evolved and can be played directly onto the
            Bench. In contrast, an Evolved Pokémon cannot normally be placed
            directly onto the field; they must be played on top of the
            corresponding lower-stage Pokémon. Stage 1 Pokémon evolve from Basic
            Pokémon, and Stage 2 Pokémon evolve from Stage 1 Pokémon. As a
            Pokémon evolves, it gains HP and its attacks change, typically
            becoming more powerful. Pokémon EX cards were first introduced in
            the TCG set EX Ruby and Sapphire, and typically have higher Hit
            Points than other Pokémon, yet award an extra prize card to the
            opponent when defeated. Baby Pokémon cards, introduced in Neo
            Genesis, are a special kind of Basic Pokémon that have low HP but
            attack with strange and occasionally very powerful effects. Mega
            Pokémon, introduced in XY, evolve from Pokémon-EX, but are a special
            stage; as such, effects on Stage 1 Pokémon do not apply to Mega
            Pokémon. Break Pokémon were also introduced in the BreakThrough
            Expansion Later In the X and Y Series. Variations of Basic, Evolved,
            and Baby Pokémon cards have appeared in many sets, usually indicated
            with a word before or after the Pokémon's name. Secret Rare Pokémon
            cards are some of the rarest cards. They are usually represented by
            a shiny holofoil and a gold outline. These cards include Shiny
            Pokémon, Trainers, alternate-art Pokémon, and some rarer Mega
            evolution cards. Pokémon-GX cards were introduced with the Pokémon
            Sun and Moon expansion. These cards have a specific move set at the
            bottom of their card that can only be used once per game.[7] Only
            one GX move can be played per game, so if there are three different
            Pokémon-GX cards in your deck only one of the three GX moves can be
            used. Introduced with the Sun and Moon expansion are Alolan forms;
            existing Pokémon that have an alternate form with a different design
            and type.
          </p>
          <p>
            Energy cards are attached to a Pokémon to the power that Pokémon's
            attacks. Typically, only one Energy card may be played per turn.
            There are two main categories of Energy cards: Basic Energy and
            Special Energy. The nine different Basic Energy types, which
            correspond to Pokémon card types, are Grass, Fire, Water, Lightning,
            Psychic, Fighting, Darkness, Metal, and Fairy. Two additional types,
            Dragon and Colorless, do not have their Energy cards and instead use
            other types of Energy. Basic Energy cards are used only to fulfill
            costs for attacking and retreating, while Special Energy cards have
            additional benefits. Most attacks require a certain type and amount
            of Energy. If an attack requires a certain type and amount of
            Energy, then that type and amount of Energy must be attached to the
            Pokémon. If the attack has a Colorless Energy requirement, that
            requirement can be met by any Energy card
          </p>
          <p>
            Trainer cards perform various functions to affect the game, for
            example healing Pokémon, discarding energy from the opposing Pokémon
            or retrieving cards from the discard pile. Before the Diamond &
            Pearl expansion, all cards that were not Pokémon or Energy were
            considered Trainer cards. Trainers have since been subdivided into
            categories. Item cards directly affect the battling Pokémon, Tool
            cards are attached to a Pokémon and modify their features, Stadium
            cards affect the entire field, and Supporters are like more powerful
            Items, only one of which can be played per turn
          </p>
        </div>
      </div>
    </StyledList>
  );
};

export default Home;
