import React from "react"
import { render } from "@testing-library/react"
import Header from "../Header"

test("Headers expected Name", async () => {
    const expected = "Bulbasaur"
    const { getByRole } = render(<Header name={expected} />)
    expect(getByRole("heading").innerHTML).toBe(expected)
})

