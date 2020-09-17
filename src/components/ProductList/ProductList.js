import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';
import useStyles from './ProductList.style';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography } from "@material-ui/core";

const ProductList = ({ products }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const productArrayList = products.filter(model => {
    return model.modelClass.indexOf(value) !== -1;
  });
  return (
    <div >
      <Grid container alignItems="center">
        <Grid>
          <Typography className={classes.textField}>Cars In Stock </Typography>
        </Grid>
        <Grid className={classes.right}>
          <TextField value={value} id="filled-search" label="Type to Filter..." type="search" variant="filled" onChange={(e) => setValue(e.target.value)} />
        </Grid>
      </Grid>
      <ul className={classes.productList}>
        {productArrayList.map(product => (
          <li key={product.id} className={classes.productListitem}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
}

export default ProductList;
