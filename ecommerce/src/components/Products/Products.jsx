import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price:'$5', image:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-8a39d2ed-c6f8-4183-93a9-69cf4dbd0cb8/react-miler-womens-running-shoe-0mgX0d.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price:'$10', image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1603332211000'}
]

const Products = ()=> {
    
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
    </main>
    )
    
}
export default Products;