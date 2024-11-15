import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"

import { Box, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
export const ModalLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <DialogRoot size={'sm'}>
            <DialogTrigger asChild>
                <Button size={'lg'} variant="solid" colorPalette={'yellow'}>
                    Comprar agora
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Olá! Para comprar, acesse a sua conta</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <form onSubmit={handleSubmit}>
                        <Box mb={5}>
                            <form id="email">
                                <label>Email</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </form>
                        </Box>
                        <Box mb={5}>
                            <form id="password">
                                <label>Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </form>
                        </Box>
                    </form>
                </DialogBody>
                <DialogFooter>
                    <Button type="submit" colorPalette={'yellow'} width="full">
                        Entrar
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}
