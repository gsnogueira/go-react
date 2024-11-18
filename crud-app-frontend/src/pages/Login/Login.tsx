import { Box, Heading, Input, Button, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/images/meli-full.png';
import styles from './Login.module.css';
import authService from '../../services/auth.service';
import Alert from '../../components/shared/Alert/Alert';
import { setSession } from '../../services/session.service';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info' | 'warning', message: string } | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await authService.signIn(email, password);
            if (response) {
                setSession('authSession', response);
                window.location.href = '/';
            }
        } catch (err) {
            setAlert({ type: 'error', message: 'Falha no login. Por favor, tente novamente' });
        }
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} border={'none'} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={6} justifySelf={'center'}>
                <Image src={logo} alt='Mercado Livre' className={styles.logo} />
            </Heading>
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
                <Button type="submit"  colorPalette={'yellow'} width="full">
                    Entrar
                </Button>
            </form>
        </Box>
    );
};

export default Login;