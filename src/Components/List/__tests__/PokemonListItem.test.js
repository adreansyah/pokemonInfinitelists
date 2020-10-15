import React from "react"
import { render } from "@testing-library/react"
import PokemonListItem from "../PokemonListItem"

test("Pokemon List Item Card expected props", async () => {
    const expected = {
        classification: "Seed Pokémon",
        id: "UG9rZW1vbjowMDE=",
        image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        name: "Bulbasaur",
        number: "001",
        types: ["Grass", "Poison"],
        __typename: "Pokemon",
    }
    const { container } = render(<PokemonListItem pokemon={expected} />)
    expect(container.innerHTML).toMatch(expected.name)
    expect(container.innerHTML).toMatch(expected.number)
    expect(container.innerHTML).toMatch(expected.image)
    expect(container.innerHTML).toMatch(expected.classification)
    expect(container.innerHTML).toMatch(expected.types[0])
    expect(container.innerHTML).toMatch(expected.types[1])
})
