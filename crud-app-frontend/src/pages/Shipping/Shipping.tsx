import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Radio, RadioGroup } from '../../components/ui/radio';

const Shipping: React.FC = () => {
    return (
        <div>
            <h1>Escolha a forma de entrega</h1>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" mt="4">
                <RadioGroup defaultValue="standard">
                    <Stack gap={4}>
                        <Radio value="standard">Enviar no meu endereço</Radio>
                        <Radio value="express">Retirar em uma Agência Mercado Livre</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        </div>
    );
};

export default Shipping;