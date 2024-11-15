import React from 'react';
import { Spinner, VStack, Text } from "@chakra-ui/react";
import style from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <VStack className={style.loader} colorPalette="teal">
            <Spinner size={'lg'} />
            <Text >Carregando...</Text>
        </VStack>
    );
};

export default Loader;