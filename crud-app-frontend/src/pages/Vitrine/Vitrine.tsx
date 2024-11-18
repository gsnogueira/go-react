import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import style from './Vitrine.module.css';
import { getProducts } from '../../services/product.service';
import { Product } from '../../models/Product.interface';
import { Products } from '../../components/shared/Card/Card';

const Vitrine: React.FC = () => {
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const product = await getProducts();
                setProduct(product);
            } catch (error) {
                console.error('Failed to fetch offers', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className={style.page}>
            <Grid>
                <GridItem />
                {product.map((item, index) => (
                    <Products key={`${item.id}-${index}`} product={item} />
                ))}
                <GridItem />
            </Grid>
        </div>
    );
};

export default Vitrine;