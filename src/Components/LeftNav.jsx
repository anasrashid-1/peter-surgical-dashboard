import {
  Box,
  Image,
  VStack,
  Text,
  Select,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Images/logo.png";
import vector from "../Icons/Vector.png";
import ch from "../Icons/chakra.png";
import drop from "../Icons/drop.png";
import bin from "../Icons/bin.png";

const LeftNav = () => {
  const {
    isOpen: isOpenMenu1,
    onOpen: onOpenMenu1,
    onClose: onCloseMenu1,
  } = useDisclosure();
  const {
    isOpen: isOpenMenu2,
    onOpen: onOpenMenu2,
    onClose: onCloseMenu2,
  } = useDisclosure();

  return (
    // Side Nav Container
    <Box bg="#181818" w="249px">
      {/* Logo Container */}
      <Box borderY="1px" p="15px" position="sticky" top='0' zIndex='10' bg="#181818" >
        <Box boxSize="sm" w="219px" h="73px" p="13px 10px 13px 20px">
          <Image src={logo} w="128px" h="47px" />
        </Box>
      </Box>

      {/* Section 2 */}
      <Box p="10px 15px 15px 15px" w="249px">
        <VStack h="183px" spacing="10px" align="stretch">
          <Box w="219px" h="44px" p="13px 10px 10px 20px">
            <Text
              color="#5C5C5C"
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
            >
              DATA-IN
            </Text>
          </Box>

          <Box w="219px" h="44px" p="13px 10px 10px 20px">
            <Flex alignItems="center" gap='12px'>
              <Image
                src={ch}
                w="17px"
                h="17px"
                onClick={isOpenMenu1 ? onCloseMenu1 : onOpenMenu1}
                cursor="pointer"
              />
              <Menu isOpen={isOpenMenu1}>
                <MenuButton
                  w="51px"
                  bg="#181818"
                  color="#FFFFFF"
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  _hover={{ color: "grey" }}
                  onClick={isOpenMenu1 ? onCloseMenu1 : onOpenMenu1}
                >
                  Energy
                </MenuButton>
                <MenuList bg="#02AB6C" color="#FFFFFF" border="none">
                  <MenuItem bg="#02AB6C">Caterory 1</MenuItem>
                  <MenuItem bg="#02AB6C">Catergory 2</MenuItem>
                  <MenuItem bg="#02AB6C">Catergory 3</MenuItem>
                  <MenuItem bg="#02AB6C">Catergory 4</MenuItem>
                </MenuList>
              </Menu>
              <Image
                src={vector}
                w="24px"
                h="24px"
                onClick={isOpenMenu1 ? onCloseMenu1 : onOpenMenu1}
                cursor="pointer"
              />
            </Flex>
          </Box>
          <Box w="219px" h="44px" p="13px 10px 10px 20px">
            <Flex alignItems="center" gap='12px'>
              <Image
                src={drop}
                w="12px"
                h="16.46px"
                onClick={isOpenMenu1 ? onCloseMenu2 : onOpenMenu2}
                cursor="pointer"
              />
              <Menu isOpen={isOpenMenu2} w="219px">
                <MenuButton
                  bg="#181818"
                  color="#FFFFFF"
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  _hover={{ color: "grey" }}
                  onClick={isOpenMenu2 ? onCloseMenu2 : onOpenMenu2}
                >
                  Water and Effluents
                </MenuButton>
                <MenuList bg="#02AB6C" color="#FFFFFF" border="none">
                  <MenuItem bg="#02AB6C">Caterory 1</MenuItem>
                  <MenuItem bg="#02AB6C">Catergory 2</MenuItem>
                  <MenuItem bg="#02AB6C">Catergory 3</MenuItem>
                  <MenuItem bg="#02AB6C">Catergory 4</MenuItem>
                </MenuList>
              </Menu>
              

              {/* <Image src={vector} w="14px" h="8px"  onClick={isOpenMenu1 ? onCloseMenu1 : onOpenMenu1} cursor='pointer'/> */}
            </Flex>
          </Box>
        </VStack>
      </Box>

      {/* section 3 */}
      <Box p="10px 15px 15px 15px" w="249px" borderY="1px">
        <VStack h="178px" spacing="10px" align="stretch">
          <Box w="219px" h="44px" p="13px 10px 10px 20px">
            <Text
              color="#5C5C5C"
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
            >
              ANALYZE
            </Text>
          </Box>
          <Box w="219px" h="44px" p="13px 10px 10px 20px">
            <Flex alignItems="center" justifyContent="left" gap='12px'>
              <Image
                src={ch}
                w="17px"
                h="17px"
                onClick={isOpenMenu1 ? onCloseMenu1 : onOpenMenu1}
                cursor="pointer"
              />
              <Menu>
                <MenuButton
                  bg="#181818"
                  m="0px"
                  p="0px"
                  color="#FFFFFF"
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  _hover={{ color: "grey" }}
                >
                  Energy
                </MenuButton>
              </Menu>
            </Flex>
          </Box>
          <Box w="219px" h="44px" p="13px 10px 10px 20px">
            <Flex alignItems="center" gap="12px">
              <Image
                src={bin}
                w="12px"
                h="16.46px"
                onClick={isOpenMenu1 ? onCloseMenu2 : onOpenMenu2}
                cursor="pointer"
              />
              <Menu>
                <Flex alignItems='center'>
                <MenuButton
                  bg="#181818"
                  color="#FFFFFF"
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  _hover={{ color: "grey" }}
                  onClick={isOpenMenu2 ? onCloseMenu2 : onOpenMenu2}
                >
                  Waste
                </MenuButton>
                <Text color="#02AB6C" fontSize='12px'>(βeta) </Text>
                </Flex>
              </Menu>
            </Flex>
          </Box>
        </VStack>
      </Box>

      {/* Section 4 */}
      <Box w="249px" h="177px">
        <Center h="100%">
          <Button bg="#02AB6C" w="187px" h="50px" color="white" fontSize="12px">
            Open Help Centre
          </Button>
        </Center>
      </Box>



      {/* section 5 */}
 
     <Box
      position="fixed"
      bottom="0"
      left="0"
      width={{ base: "100%", md: "249px" }}
      height="48px"
      bg="#02AB6C"
      color="#FAFBFC"
      fontFamily="HelveticaNeue"
      fontSize="12px"
      fontWeight="400"
      zIndex="1000"

      
    >
      <Flex justifyContent="center" alignItems="center" gap="6px" py="8px">
        <Text fontSize="12px">Powered by</Text>
        <Text fontSize="22px">Longsight</Text>
      </Flex>
    </Box>
    </Box>
  );
};

export default LeftNav;
