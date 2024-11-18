import { Box, Flex } from "@chakra-ui/react";
import { CardTotal, ProductList } from "../../components/shared/Card/Card";
import { EmptyCart } from "../../components/shared/Empty/Empty";
import { Help } from "../../components/shared/Help/Help";

import { useEffect, useState } from "react";

import { Product } from "../../models/Product.interface";	
import Loader from "../../components/shared/Loader/Loader";
import { getSession } from "../../services/session.service";

export const Cart: React.FC = () => {
    const [items, setItems] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getSession('cart') || [];
            setItems(products);
        };

        fetchProducts();
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);
    
    if (loading) {
        return <Loader/>
    }

    return (
        <div className="page">
            {items.length === 0 ? <EmptyCart /> :
                <Flex direction={{ base: "column", md: "row" }} maxW={'-moz-fit-content'}>
                    <Box flex="1">
                        {items.map(item => (
                            <ProductList key={item.id} product={item} />
                        ))}
                    </Box>
                    <Box flex="1" mb={20}>
                        <CardTotal />
                    </Box>
                </Flex>
            }

            <Help />
        </div>

    )
}