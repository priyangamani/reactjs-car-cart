import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './App.style';


export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <div>
          <Cart />
          <ProductList />
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.bg}>
          <h1 className={classes.txt} align="center">I look much better in a wide window :)</h1>
        </div>
      </Hidden>
    </div>
  );
}

