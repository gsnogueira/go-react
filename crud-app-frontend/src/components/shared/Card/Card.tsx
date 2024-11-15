import { Button, Box, Card, Text, Image, Flex, FormatNumber, SelectRoot, SelectTrigger, SelectLabel, SelectValueText, SelectContent, SelectItem, createListCollection } from "@chakra-ui/react"
import { ModalLogin } from "../Modal/Modal"
import { ProductListProps } from "../../../models/ProductList.interface"
import { Tag } from "../../../components/ui/tag"
import Iphone from '../../../assets/images/iphone.png'
import { GoTrash } from "react-icons/go"

export const Product: React.FC<ProductListProps> = ({ product }) => {
  return (
    <div className="main">
      {product && (
        <Card.Root width={{ base: '100%' }} padding={5} flexDirection={{ base: 'column', md: 'row' }} overflow="hidden" border={'none'}>
          <Image
            objectFit="cover"
            maxW={{ base: '100%', md: '400px' }}
            src={Iphone}
            alt="Iphone 16 Pro"
          />
          <Box>
            <Card.Body>
              <Card.Title mb="2">{product.name}</Card.Title>
              <Card.Description>
                <p>Iphone 16 Apple 128gb, Câmera Dupla De 48mp, Tela 6,1 Pol, Preto</p>
                <Tag colorPalette={'yellow'} mt={5}>5 disponiveis</Tag>
              </Card.Description>
              <Text textStyle="4xl" fontWeight="medium" letterSpacing="tight" mt="2">
                R$ 8500
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <ModalLogin />
              <Button size={'sm'} variant="ghost">Adicionar ao carrinho</Button>
            </Card.Footer>
          </Box>
        </Card.Root>
      )}
    </div>

  )
}

export const ProductList: React.FC<ProductListProps> = ({ product }) => {
  return (

    <div className="main">

      {product && (

        <Card.Root width={{ base: '100%', md: 'xl' }} flexDirection={{ base: 'column', md: 'row' }} overflow="hidden" mb={5}>
          <Flex align={{ base: 'center', md: 'start' }} flexDirection={{ base: 'column', md: 'row' }}>
            <Box>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', md: '120px' }}
                src={Iphone}
                alt="Iphone 16 Pro"
                padding={5}
              />
            </Box>
            <Box>
              <Card.Body>
                <Card.Title mb="2">{product.name}</Card.Title>
                <Card.Description>
                  Iphone 16 Apple 128gb, Câmera Dupla De 48mp, Tela 6,1 Pol, Preto
                </Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                  <FormatNumber value={product.price} style="currency" currency="BRL" />
                </Text>
              </Card.Body>
              <Card.Footer gap="2">

                <SelectRoot collection={quantity} size="sm" width={{ base: '100%', md: '320px' }}>
                  <SelectLabel>Selecione uma quantidade</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText placeholder={product.id == 1 ? product.id.toString() + ' unidade' : product.id.toString() + ' unidades'} />
                  </SelectTrigger>
                  <SelectContent>
                    {quantity.items.map((product) => (
                      <SelectItem item={product} key={product.value}>
                        {product.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Card.Footer>
            </Box>
            <Button colorPalette={'yellow'} size={'lg'} variant="ghost" onClick={() => console.log('Remove product')}>
                <GoTrash />
              </Button>
          </Flex>
        </Card.Root>
      )}

    </div>
  )
}

const quantity = createListCollection({
  items: [
    { label: "1 unidade", value: 1 },
    { label: "2 unidades", value: 2 },
    { label: "3 unidades", value: 3 },
    { label: "4 unidades", value: 4 },
    { label: "5 unidades", value: 5 },
  ],
})

export const CardTotal: React.FC = () => {
  return (
    <div className="main">
      <Card.Root width={{ base: '100%', md: 'xl' }} flexDirection={{ base: 'column', md: 'row' }} overflow="hidden" border={'none'} mb={5}>
        <Card.Body gap="2">
          <Card.Title mb="2">Resumo do pedido</Card.Title>
          <Card.Description>
            <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="4">
              Quantidade: 3
            </Text>
            <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="4">
              Frete: Grátis
            </Text>
            <Text textStyle="xl" fontWeight="medium" letterSpacing="tight" mt="4">
              Total: R$ 8500
            </Text>
          </Card.Description>
          <Button variant={'solid'} colorPalette={'yellow'} onClick={() => window.location.href = '/entrega'} mt="4">
            Continuar a compra
          </Button>
        </Card.Body>
      </Card.Root>
    </div>
  )
}