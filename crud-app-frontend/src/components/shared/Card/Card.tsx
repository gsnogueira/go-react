import { Button, Box, Card, Text, Image, Flex, FormatNumber, SelectRoot, SelectTrigger, SelectLabel, SelectValueText, SelectContent, SelectItem, createListCollection } from "@chakra-ui/react"
import { ModalLogin } from "../Modal/Modal"
import { ProductListProps } from "../../../models/ProductList.interface"
import { Tag } from "../../../components/ui/tag"
import Iphone from '../../../assets/images/iphone.png'
import AppleWatch from '../../../assets/images/watch.png'
import { GoTrash } from "react-icons/go"
import { setSession } from "../../../services/session.service"

export const Products: React.FC<ProductListProps> = ({ product }) => {
  return (
    <div className="main">
      {product && (
        <Card.Root width={{ base: '100%' }} padding={5} flexDirection={{ base: 'column', md: 'row' }} overflow="hidden" border={'none'}>
          <Image
            objectFit="cover"
            maxW={{ base: '100%', md: product.type === 'smartwatch' ? '250px' : '450px' }}
            src={product.type === 'smartphone' ? Iphone : product.type === 'smartwatch' ? AppleWatch : 'default-image-path'}
            alt="Iphone 16 Pro"
          />
          <Box>
            <Card.Body>
              <Card.Title mb="2"><div>{product.name}</div></Card.Title>
              <Card.Description>
                <div>{product.description}</div>
                <Tag colorPalette={'yellow'} mt={5}>{product.avaible + ' disponiveis'}</Tag>
              </Card.Description>
              <Text textStyle="4xl" fontWeight="medium" letterSpacing="tight" mt="2">
                <div>{product.price}</div>
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <ModalLogin />
              <Button size={'sm'} variant="ghost" onClick={() => {
                const currentSession = JSON.parse(localStorage.getItem('cart') || '[]');
                const existingProductIndex = currentSession.findIndex((item: any) => item.id === product.id);
                if (existingProductIndex !== -1) {
                  currentSession[existingProductIndex].quantity += 1;
                } else {
                  currentSession.push({ ...product, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(currentSession));
                setSession('cart', currentSession);
                window.location.href = '/carrinho';
              }}>
                Adicionar ao carrinho
              </Button>
            </Card.Footer>
          </Box>
        </Card.Root>
      )}
    </div>

  )
}

export const ProductList: React.FC<ProductListProps> = ({ product }) => {

  const quantity = createListCollection({
    items: product ? Array.from({ length: product.avaible }, (_, i) => ({
      value: i + 1,
    })) : [],
  });

  return (

    <div className="main">

      {product && (
        <Card.Root width={{ base: '100%', md: 'xl' }} flexDirection={{ base: 'column', md: 'row' }} overflow="hidden" mb={5}>
          <Flex align={{ base: 'center', md: 'start' }} flexDirection={{ base: 'column', md: 'row' }}>
            <Box>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', md: '120px' }}
                src={product.type === 'smartphone' ? Iphone : product.type === 'smartwatch' ? AppleWatch : 'default-image-path'}
                alt="Iphone 16 Pro"
                padding={5}
              />
            </Box>
            <Box>
              <Card.Body>
                <Card.Title mb="2"><span>{product.name}</span></Card.Title>
                <Card.Description>
                  <span>{product.description}</span>
                </Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                  <FormatNumber value={product.price} style="currency" currency="BRL" />
                </Text>
                <Text textStyle="1xl" fontWeight="medium" letterSpacing="tight" mt="2">
                  subtotal: <FormatNumber value={product.price * product.quantity} style="currency" currency="BRL" />
                </Text>
              </Card.Body>
              <Card.Footer gap="2">

                <SelectRoot
                  collection={quantity}
                  size="sm"
                  width={{ base: '100%', md: '320px' }}
                  onValueChange={(change) => {
                    const currentSession = JSON.parse(localStorage.getItem('cart') || '[]');
                    const updatedSession = currentSession.map((item: any) => {
                      if (item.id === product.id) {
                        return { ...item, quantity: change.value[0] };
                      }
                      return item;
                    });
                    localStorage.setItem('cart', JSON.stringify(updatedSession));
                    setSession('cart', updatedSession);
                    window.location.reload();
                  }}
                >
                  <SelectLabel>Selecione uma quantidade</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText placeholder={product.quantity.toString()} />
                  </SelectTrigger>
                  <SelectContent>
                    {quantity.items.map((product) => (
                      <SelectItem item={product} key={product.value}>
                        <div>{product.value}</div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Card.Footer>
            </Box>
            <Button colorPalette={'yellow'} size={'lg'} variant="ghost" onClick={() => {
              const currentSession = JSON.parse(localStorage.getItem('cart') || '[]');
              const updatedSession = currentSession.filter((item: any) => item.id !== product.id);
              localStorage.setItem('cart', JSON.stringify(updatedSession));
              setSession('cart', updatedSession);
              window.location.reload();
            }}>
              <GoTrash />
            </Button>
          </Flex>
        </Card.Root>
      )}

    </div>
  )
}

export const CardTotal: React.FC = () => {
  return (
    <div className="main">
      <Card.Root width={{ base: '100%', md: 'xl' }} flexDirection={{ base: 'column', md: 'row' }} overflow="hidden" border={'none'} mb={5}>
        <Card.Body gap="2">
          <Card.Title mb="2">Resumo do pedido</Card.Title>
          <Card.Description>
            <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="4">
              Quantidade total: {JSON.parse(localStorage.getItem('cart') || '[]').reduce((total: number, item: any) => total + item.quantity, 0)}
            </Text>
            <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="4">
              Frete: Grátis
            </Text>
            <Text textStyle="xl" fontWeight="medium" letterSpacing="tight" mt="4">
              Total: {JSON.parse(localStorage.getItem('cart') || '[]').reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2)}
            </Text>
          </Card.Description>
          <Button variant={'solid'} colorPalette={'yellow'} onClick={() => {
            const authSession = localStorage.getItem('authSession');
            if (authSession) {
              window.location.href = '/entrega';
            } else {
              window.location.href = '/login';
            }
          }} mt="4">
            Continuar a compra
          </Button>
        </Card.Body>
      </Card.Root>
    </div>
  )
}