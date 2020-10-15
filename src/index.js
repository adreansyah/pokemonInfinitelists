import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import Theme from "./Theme"
import { ApolloProvider } from '@apollo/react-hooks'
import pokemonClient from "./Graphql"

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <ApolloProvider client={pokemonClient}>
            <CssBaseline />
            <App />
        </ApolloProvider>
    </ThemeProvider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()