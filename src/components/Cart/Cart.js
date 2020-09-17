import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import spinner from '../../../src/assets/mb-star.svg'
import shoppingBag from '../../../src/assets/shoppingBag.png'

import useStyles from './Cart.styles';


const Cart = ({ total, currency }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.toolbar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" testID="icon-img">

                    <img src={spinner} alt="spinner"></img>
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.root} testID="icon-txt">
                    Mercedes-Benz
            </Typography>
                <img src={shoppingBag} alt="shoppingBag" className={classes.shopping}></img>
                <Typography variant="h6" color="inherit">
                    Total: {total} {currency}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

Cart.propTypes = {
    total: PropTypes.number,
    currency: PropTypes.string,
}

export default Cart;
