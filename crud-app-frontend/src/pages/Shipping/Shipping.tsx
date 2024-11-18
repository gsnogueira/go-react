import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Radio, RadioGroup } from '../../components/ui/radio';

const Shipping: React.FC = () => {
    return (
        <Box p={{ base: 2, md: 4 }} maxW="container.md" mx="auto">
            <Stack direction={{ base: 'column', md: 'row' }} gap={6}>
                <Box flex="1" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
                    <RadioGroup variant={'subtle'} size={'lg'} colorPalette={'yellow'} defaultValue="standard">
                        <Stack gap={4}>
                            <Radio value="standard">Enviar no meu endereço</Radio>
                            <Radio value="express">Retirar em uma Agência Mercado Livre</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
            </Stack>
        </Box>
    );
};

export default Shipping;