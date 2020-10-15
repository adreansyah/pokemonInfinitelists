import ApolloClient from "apollo-boost"
const pokemonClient = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
})
export default pokemonClient
