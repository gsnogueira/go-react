import { Box, Heading, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/images/meli-full.png';
import styles from './Login.module.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Box maxW="sm" mx="auto" mt={10} p={6} border={'none'} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={6} textAlign="center">
                <img src={logo} alt='Mercado Livre' className={styles.logo} />
            </Heading>
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
                <Button type="submit" colorPalette={'yellow'} width="full">
                    Entrar
                </Button>
            </form>
        </Box>
    );
};

export default Login;