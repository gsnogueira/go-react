import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import authService from '../../services/auth.service';
import Alert from '../../components/shared/Alert/Alert';


const Register: React.FC = () => {
    const [userName, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info' | 'warning', message: string } | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await authService.signUp(email, password);
            setAlert({ type: 'success', message: 'Cadastro bem-sucedido!' });
                window.location.href = '/login';
        } catch (error) {
            setAlert({ type: 'error', message: 'Falha no cadastro. Por favor, tente novamente' });
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} border={'none'} borderRadius="lg" boxShadow="md">
            {alert && (
                <Alert status={alert.type} title={alert.message} />
            )}
            <form onSubmit={handleSubmit}>
                <Box mb={5}>
                    <form id="user">
                        <label>Nome</label>
                        <Input
                            type="text"
                            value={userName}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </form>
                </Box>
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
                <Box mb={10}>
                    <form id="password">
                        <label>Senha</label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </form>
                </Box>
                <Button variant="surface" type="submit" colorPalette={'gray'} width="full">
                    Cadastro
                </Button>
            </form>
        </Box>
    );
};

export default Register;