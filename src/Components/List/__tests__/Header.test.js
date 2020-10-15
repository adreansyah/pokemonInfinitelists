import React from "react"
import { render } from "@testing-library/react"
import Header from "../Header"

test("Headers expected keywords", async () => {
    const setup = () => {
        const utils = render(<Header keywords="pik" />)
        const input = utils.getByLabelText("search")
        return {
            input,
            ...utils,
        }
    }
    const { input } = setup()
    expect(input.value).toBe('pik')
})

