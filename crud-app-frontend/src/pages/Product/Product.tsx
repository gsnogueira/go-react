import { Button, Box, Card, Text, Image } from "@chakra-ui/react"

export const Product = () => (
  <Card.Root background={'white'} color={'black'} flexDirection="row" overflow="hidden" border={'none'}>
    <Image
      objectFit="cover"
      maxW="600px"
      src="https://http2.mlstatic.com/D_NQ_NP_2X_779617-MLA71782867320_092023-F.webp"
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">Iphone 16 Pro</Card.Title>
        <Card.Description>
        Iphone 16 Apple 128gb, Câmera Dupla De 48mp, Tela 6,1 Pol, Preto
        </Card.Description>
        <Text textStyle="4xl" fontWeight="medium" letterSpacing="tight" mt="2">
          R$8500
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid" colorPalette={'yellow'}>Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
  
)
