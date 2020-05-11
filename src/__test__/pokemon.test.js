import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import App from "../components/App";
import { ListPokemonContext } from "../context/ListPokemonContext";
import Home from "../components/Home";
import ListPokemon from "../components/ListPokemon";

jest.setTimeout(20000);
jest.retryTimes(2);

function renderWithRouter(
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  };
}

afterEach(cleanup);

describe("Tests for:: Home", () => {
  it("Checks if was rendered text description", async () => {
    const { getByText } = render(
      <App>
        <ListPokemonContext.Provider>
          <Home />
        </ListPokemonContext.Provider>
      </App>
    );
    const text = getByText(/Basic Pokémon are the foundation of all decks./);
    expect(text).toBeInTheDocument();
  });
});

describe("Tests for:: ListPokemon", () => {
  it("Checks if API was call and list of pokemon populated", async () => {
    const {
      getByText,
      history: { navigate },
    } = renderWithRouter(
      <App>
        <ListPokemonContext.Provider>
          <ListPokemon />
        </ListPokemonContext.Provider>
      </App>
    );

    await navigate("/pokemon");
    const bulbasaur = await waitForElement(() => getByText(/bulbasaur/), {
      timeout: 20000,
    });
    const charmander = await waitForElement(() => getByText(/charmander/), {
      timeout: 20000,
    });
    const charizard = await waitForElement(() => getByText(/charizard/), {
      timeout: 20000,
    });
    expect(bulbasaur).toBeInTheDocument();
    expect(charmander).toBeInTheDocument();
    expect(charizard).toBeInTheDocument();
  });
});
