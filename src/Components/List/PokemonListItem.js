import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box, Chip } from "@material-ui/core"
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
    media: {
        height: 300,
        objectFit: "contain",
    },
    badge: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > .label": {
            margin: theme.spacing(0.5),
        },
    },
    number: {
        padding: theme.spacing(0),
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        top: 10,
    },
}))

const PokemonListItem = ({ pokemon }) => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Grid item xs={12} sm={3}>
            <Card>
                <CardActionArea onClick={() => history.push(`/${pokemon.name}`)}>
                    {pokemon.image ? <CardMedia component="img" className={classes.media} image={pokemon.image} title={pokemon.name} /> : null}
                    <Chip label={pokemon.number} className={classes.number} size="small" color="secondary" variant="outlined" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {pokemon.name}
                        </Typography>
                        {pokemon.classification ? (
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>Classification:</b> {pokemon.classification}
                            </Typography>
                        ) : null}
                        {pokemon.types ? (
                            <Box className={classes.badge}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Types:</b>
                                </Typography>
                                {pokemon.types.map((type, index) => (
                                    <Chip key={index} className="label" size="small" color="secondary" label={type} />
                                ))}
                            </Box>
                        ) : null}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="secondary" onClick={() => history.push(`/${pokemon.name}`)}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default PokemonListItem
