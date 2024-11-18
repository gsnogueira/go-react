import React from 'react';
import { EmptyState } from "../../ui/empty-state";
import { LuShoppingCart } from "react-icons/lu"


export const EmptyCart: React.FC = () => {
    return (
        <EmptyState
        icon={<LuShoppingCart />}
        title="Seu carrinho está vazio"
        description="Explore nossos produtos e adicione itens ao seu carrinho"
        />
    );
};

export const EmptyVitrine: React.FC = () => {
    return (
        <EmptyState
        icon={<LuShoppingCart />}
        title="Execute o backend para vizualizar"
        description="go run main.go"
        />
    );
};