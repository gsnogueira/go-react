import { Box, Flex } from "@chakra-ui/react";
import { CardTotal, ProductList } from "../../components/shared/Card/Card";
import { Empty } from "../../components/shared/Empty/Empty";
import { Help } from "../../components/shared/Help/Help";

const Itens = [
    { id: 1, name: 'Iphone 16', price: 100 },
    { id: 1, name: 'Iphone 16', price: 100 },
    { id: 1, name: 'Iphone 16', price: 100 },
    { id: 1, name: 'Iphone 16', price: 100 },
]


export const Cart: React.FC = () => {
    return (
        <div className="page">
            {Itens.length === 0 ? <Empty /> :
                <Flex direction={{ base: "column", md: "row" }} maxW={'-moz-fit-content'}>
                    <Box flex="1">
                        <ProductList />
                        {Itens.map(item => (
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