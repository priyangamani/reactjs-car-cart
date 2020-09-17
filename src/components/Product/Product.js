import React from "react";
import { Grid, withStyles, Paper, Box, Button } from "@material-ui/core";
import useStyles from './Product.styles';

function Product(props) {

    const classes = useStyles();

    const handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    const { modelClass, price, imagePath, currency, isInCart, version } = props;

    return (
        <Grid item xl={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paperGrid} variant="outlined" square>
                <Grid className={classes.modelName}>
                    <Grid>{modelClass}{version}</Grid>
                </Grid>
                <Box className={classes.paper} flexDirection="row">
                    <img src={imagePath} alt={imagePath} />
                </Box>
                <Box flexDirection="row" >
                    <Grid className={classes.amountVal}>{price} {currency}</Grid>
                </Box>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color={isInCart ? '#000' : '#333'}  onClick={handleClick}>
                        {isInCart ? 'Remove' : 'Add to cart'}
                    </Button>
                </Grid>
            </Paper>

        </Grid>
    );
}



export default withStyles()(Product);
