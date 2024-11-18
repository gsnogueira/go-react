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
import authService from '../../../services/auth.service';
import Alert from "../Alert/Alert";
import { setSession } from "../../../services/session.service";

export const ModalLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info' | 'warning', message: string } | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await authService.signIn(email, password);
            if (response) {
                setSession('authSession', response);
                window.location.href = '/entrega';
            }
        } catch (err) {
            setAlert({ type: 'error', message: 'Falha no login. Por favor, tente novamente' });
        }
    };

    return (
        <DialogRoot size={'sm'}>
            <DialogTrigger asChild>
                <Button
                    size={'lg'}
                    variant="solid"
                    colorPalette={'yellow'}
                    onClick={() => {
                        const authSession = localStorage.getItem('authSession');
                        if (authSession) {
                            window.location.href = '/entrega';
                        }
                    }}
                >
                    Comprar agora
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Olá! Para comprar, acesse a sua conta</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    {alert && (
                        <Alert status={alert.type} title={alert.message} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <Box mb={5} mt={5}>
                            <label>Email</label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Box>
                        <Box mb={10}>
                            <label>Senha</label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Box>
                        <Button type="submit" colorPalette={'yellow'} width="full">
                            Entrar
                        </Button>
                    </form>
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}

export const Connfigurations: React.FC = () => {
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info' | 'warning', message: string } | null>(null);

    const handlePasswordUpdate = async (event: React.FormEvent) => {
        event.preventDefault();

        const newpassword = (document.getElementById('newpassword') as HTMLInputElement).value;

        try {
            await authService.updatePassword(newpassword);
            setAlert({ type: 'success', message: 'Senha atualizada!' });
            window.location.reload();
        } catch (error) {
            setAlert({ type: 'error', message: 'Falha na atualização. Por favor, tente novamente' });
        }
    };

    return (
        <DialogRoot size={'sm'}>
            <DialogTrigger asChild>
                <Button size={'sm'} variant="plain">
                    Configurações
                </Button>
            </DialogTrigger>
            <DialogContent>
                {alert && (
                    <Alert status={alert.type} title={alert.message} />
                )}
                <DialogHeader>
                    <DialogTitle>{JSON.parse(localStorage.getItem('authSession') || '{}').email}</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Box mb={5}>
                        <Input id="newpassword" type="password" placeholder="Nova senha" required />
                    </Box>
                    <Box mb={5}>
                        <Input type="password" placeholder="Confirmar nova senha" required />
                    </Box>
                </DialogBody>
                <DialogFooter>
                    <Button type="submit" colorPalette={'yellow'} width="full" onClick={handlePasswordUpdate}>
                        Salvar
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}