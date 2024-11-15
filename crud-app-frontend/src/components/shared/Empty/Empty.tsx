import React from 'react';
import { EmptyState } from "../../ui/empty-state";
import { LuShoppingCart } from "react-icons/lu"


export const Empty: React.FC = () => {
    return (
        <EmptyState
        icon={<LuShoppingCart />}
        title="Seu carrinho está vazio"
        description="Explore nossos produtos e adicione itens ao seu carrinho"
        />
    );
};