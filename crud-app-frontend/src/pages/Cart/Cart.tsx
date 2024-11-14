import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react"

interface CartItemProps {
    name: string;
    price: number;
    imageUrl: string;
}

const CartItem = ({ name, price }: CartItemProps) => (
    <HStack align="center">
        {/* <Image boxSize="100px" src={imageUrl} alt={name} /> */}
        <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">{name}</Text>
            <Text color="gray.500">${price}</Text>
        </VStack>
    </HStack>
)

const ShippingOptions = () => (
    <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">Shipping Options</Text>
        {/* <Select placeholder="Select shipping option">
            <option value="standard">Standard - Free</option>
            <option value="express">Express - $5.00</option>
            <option value="overnight">Overnight - $15.00</option>
        </Select> */}
    </VStack>
)

export const Cart = () => {
    return (
        <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden">
            <VStack gap={4} align="stretch">
                <Text fontSize="2xl" fontWeight="bold">Shopping Cart</Text>
                <CartItem name="Product 1" price={29.99} imageUrl="https://via.placeholder.com/100" />
                <CartItem name="Product 2" price={49.99} imageUrl="https://via.placeholder.com/100" />
                <hr/>
                <ShippingOptions />
                <HStack>
                    <Button colorScheme="teal">Checkout</Button>
                    <Button colorScheme="red">Clear Cart</Button>
                </HStack>
            </VStack>
        </Box>
    )
}