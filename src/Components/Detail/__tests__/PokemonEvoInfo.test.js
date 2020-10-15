import React from "react"
import { render } from "@testing-library/react"
import PokemonEvoInfo from "../PokemonEvoInfo"

test("Pokemon information detail expeced props", async () => {
    const expectedEvo = [{ image: "https://img.pokemondb.net/artwork/ivysaur.jpg", name: "Ivysaur", number: "002" }]
    const expectedReq = { amount: 25, name: "Bulbasaur candies" }
    const { container } = render(<PokemonEvoInfo evolutions={expectedEvo} requirement={expectedReq} />)
    expect(container.innerHTML).toMatch(expectedEvo[0].name)
    expect(container.innerHTML).toMatch(expectedEvo[0].number)
    expect(container.innerHTML).toMatch(expectedEvo[0].image)
    expect(container.innerHTML).toMatch(`${expectedReq.name} x ${expectedReq.amount}`)
})
