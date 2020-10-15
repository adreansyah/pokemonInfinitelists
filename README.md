# React Pokemon GraphQL !

## Features

This pokemon project creates by requirement the following :

-   We are creating pokedex app (what is pokedex? [https://id.wikipedia.org/wiki/Pok%C3%A9dex](https://id.wikipedia.org/wiki/Pok%C3%A9dex) that enable user to browse information in Poke-API ~~Consume Poke-API on [https://pokeapi.co/](https://pokeapi.co/) (for REST) or~~ [https://graphql-pokemon2.vercel.app/](https://graphql-pokemon2.vercel.app/) (for GraphQL). The scenario is focused on browsing theinformation.
-   User can browse pokemon in infinite list - User can view detailed information of each pokemon
-   User can view the image of each pokemon
-   User can filter list of pokemon based on an attribute of pokemon (feel free to choose one attribute to use for filtering i.e. nature, types)

## Tech!

-   React.js using hooks
-   Material-UI framework.
-   Graphql
-   RxJS for throttling infinite list.

### Folder Structure Description

-   `Components` spliting ui component.
-   `Containers` component as page or container
-   `Graphql` graphql setting and query

## Usage

Clone and run application.

```sh
$ cd /{YOUR_PATH_FOLDER}/
$ git clone "https://github.com/adreansyah/pokemon-gql.git"
$ cd pokemon-gql/
```

1. Start React Apps Using Npm

```sh
$ npm install
$ npm start
```
2. Start React Apps Using yarn

```sh
$ yarn
$ yarn start
```

3. Start React Apps Using Docker

```sh
$ docker build . -t pokemon-gql
$ docker container run -it -p 5000:5000 pokemon-gql:latest
```

### Run Unit Test

```sh
$ npm test
```
