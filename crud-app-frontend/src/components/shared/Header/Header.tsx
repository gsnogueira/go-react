import styles from './Header.module.css'
import logo from '../../../assets/images/meli-short.png'
import { Box, Flex, IconButton, Button, Float, Circle } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { RxDividerVertical } from 'react-icons/rx';
import { FaApple } from 'react-icons/fa';

export const Header: React.FC = () => {

  return (
    <div className="main">
      <Box as="header" className={styles.header} p={4} boxShadow="md">
        <Button padding={0} variant="plain" size="lg" onClick={() => window.location.href = '/'}>
          <img src={logo} alt='Mercado Livre' className={styles.logo} onClick={() => window.location.href = '/'} />
        </Button>
        <Flex align="center">
          <Box>
            <Button color='black' className={styles.button} variant="plain" size="lg" onClick={() => window.location.href = '/login'}>
              Entre
            </Button>
          </Box>
          <Box>
            <Button color='black' className={styles.button} variant="plain" size="lg" onClick={() => window.location.href = '/cadastro'}>
              Cadastre-se
            </Button>
          </Box>
          <Box>
            <IconButton color='black' variant="plain" size="lg" aria-label="Search database" onClick={() => window.location.href = '/carrinho'}>
              <BiCart className={styles.icon} />
              <Float>
                <Circle size="5" bg="white" color="black">
                {JSON.parse(localStorage.getItem('cart') || '[]').reduce((total: number, item: any) => total + item.quantity, 0)}
                </Circle>
              </Float>
            </IconButton>
          </Box>
        </Flex>
      </Box>
      <Box as="div" className={styles.subHeader} p={4} mb={5} textAlign="center">
        <Flex align='center'>
          <Box>
            <FaApple className={styles.icon} />
          </Box>
          <RxDividerVertical className={styles.icon} />
          <Box>
            <span className={styles.icon}>Loja Oficial</span>
          </Box>
        </Flex>
      </Box>
    </div>

  );
}


