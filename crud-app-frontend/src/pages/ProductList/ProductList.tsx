import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import { Product } from '../Product/Product';


const products = [
    { id: 1, name: 'Product 1', price: 100 },
];

const ProductList: React.FC = () => {
    return (
        <div>
            <Grid>
                <GridItem />
                {products.map(product => (
                    <Product key={product.id} {...product} />
                ))}
                <GridItem />
            </Grid>
        </div>
    );
};

export default ProductList;