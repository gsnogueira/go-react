import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import { Product } from '../../components/shared/Card/Card';
import { useState, useEffect } from 'react';
import Loader from '../../components/shared/Loader/Loader';
import style from './Vitrine.module.css';

const products = [
    { id: 1, name: 'Iphone 16 Pro', price: 100 },
    { id: 1, name: 'Iphone 16 Pro', price: 100 },
    { id: 1, name: 'Iphone 16 Pro', price: 100 },
];

const Vitrine: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    
    if (loading) {
        return <Loader/>
    }
    return (
        <div className={style.page}>
            <Grid>
                <GridItem />
                {products.map(item => (
                    <Product key={item.id} product={item} />
                ))}
                <GridItem />
            </Grid>
        </div>
    );
};

export default Vitrine;