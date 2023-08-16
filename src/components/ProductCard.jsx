/* eslint-disable react/prop-types */
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react';


function ProductCard({ product }) {
  return (
    <Flex p={1} w="full" alignItems="center" justifyContent="center" >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        minH="250px"
        maxH="300px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <AspectRatio  maxW='300px' ratio={4/3}>
          <Image src={product.productLink} 
          alt={`Picture of ${product.name}`} 
          roundedTop="lg"/>
        </AspectRatio>
        {/* <Image 
        src={product.productLink} 
        alt={`Picture of ${product.name}`} 
        roundedTop="lg"
         /> */}

        <Box p="6">
          {/* <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              maxW='100px'>
              {product.name}
            </Box>
          </Flex> */}

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                Rp <span></span>
              </Box>
              {product.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
