import React from 'react'
import { Box, Flex, Image, Text} from '@chakra-ui/react'
import i from "../Icons/i.png";

const HorizontalBarCard = ({heading, text, clr, value}) => {    

  return (
    <Box>
        <Box width='267px' h='134px' borderRadius='12px' border  bg='#FFFFFF' boxShadow='xs'>
            <Flex alignItems='center' gap='12px' pt='24px' pl='20px'>
                <Text fontFamily='HelveticaNeue' fontSize='16px' fontWeight='400' lineHeight='16px' >{heading}</Text>
                <Image w='11.67px' h='11.67px' src={i}/>
            </Flex>
            <Text pl='20px' fontFamily='Poppins' fontStyle='italic' fontSize='8px' fontWeight='275' lineHeight='12px'>{text}</Text>

            <Box w='219px' h='44px' border='1px solid' borderLeft='4px' borderColor={clr}  mt='14px' ml='20px' borderRadius='8px'>
                <Flex align='center' h='100%'>
                    <Text fontSize='15px' fontWeight='400'ml='15px' >{value}</Text>
                </Flex>
            </Box>
        </Box>
    </Box>
  )
}

export default HorizontalBarCard
