import styles from './Header.module.css'
import logo from '../../../assets/images/meli-short.png'
import { Box, Flex, IconButton, Button, Float, Circle } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { RxDividerVertical } from 'react-icons/rx';
import { FaApple } from 'react-icons/fa';

export function Header() {

  return (
    <div>
      <Box as="header" className={styles.header} p={4} boxShadow="md">
        <Button variant="plain" size="lg" onClick={() => window.location.href = '/'}>
          <img src={logo} alt='Mercado Livre' className={styles.logo} onClick={() => window.location.href = '/'} />
        </Button>
        <Flex align="center">
          <Box>
            <Button className={styles.button} variant="plain" size="lg" onClick={() => window.location.href = '/login'}>
              Entre
            </Button>
          </Box>
          <Box>
            <Button className={styles.button} variant="plain" size="lg" onClick={() => window.location.href = '/cadastro'}>
              Cadastre-se
            </Button>
          </Box>
          <Box>
            <IconButton variant="plain" size="lg" aria-label="Search database" onClick={() => window.location.href = '/carrinho'}>
              <BiCart className={styles.icon} />
              <Float>
                <Circle size="5" bg="white" color="blakc">
                  3
                </Circle>
              </Float>
            </IconButton>
          </Box>
        </Flex>
      </Box>
      <Box as="div" className={styles.subHeader} p={4} mb={10} bg="gray.100" textAlign="center">
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


