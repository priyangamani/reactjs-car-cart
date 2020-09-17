import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';
import useStyles from './ProductList.style';
const ProductList = ({ products }) => {
    const classes = useStyles();
    return (
        <div >
            <ul className={classes.productList}>
              {products.map(product => (
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
