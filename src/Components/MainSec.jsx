import { React, useState } from "react";
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

import category from "../Icons/category.png";
import profilepic from "../Icons/profilepic.png";
import dropdown from "../Icons/dropdown.png";
import bell from "../Icons/bell.png";
import { color } from "framer-motion";

const MainSec = () => {
  const [selectedOption, setSelectedOption] = useState("Jan'22 - Dec'23");
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Box bg='#EBEBEB'>
      {/* topbar*/}
      <Box w="1010px" h="64px" p="20px">
        <Flex justifyContent="space-between" alignItems="center" gap="12px">
          {/* category */}
          <Box w="127px" h="64px">
            <Flex alignItems="center" gap="12px">
              <Image w="20px" h="20px" src={category} />
              <Text>Category-1</Text>
            </Flex>
          </Box>

          {/* profile and notification */}
          <Box w="148px" h="56px">
            <Flex alignItems="center" justifyContent="flex-end" gap="10px">
              <Image w="32px" h="32px" src={profilepic} />
              <Image w="14px" h="8px" src={dropdown} />
              <Image w="40px" h="40px" src={bell} />
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Date */}
      <Box my="30px">
        <Flex justifyContent="flex-end">
          <Menu w="226.21px">
            <MenuButton
              as="div"
              className="inp"
              style={{
                display: "flex",
                height: "32px",
                padding: "10px 12px",
                justifyContent: "flex-end",
                alignItems: "center",
                background: "white",
                gap: "10px",
                marginRight: "40px",
                border: "1px solid rgba(2, 171, 108, 0.67)",
                borderRadius: "10px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", fontWeight: '400'}}>
                Show Time: <span style={{color: '#02AB6C'}}> &nbsp; {selectedOption} &nbsp; | &nbsp;</span>
                <Image w="7.21px" h="4.6px" src={dropdown} />
              </span>
            </MenuButton>
            <MenuList bg="#02AB6C" color="#FFFFFF">
              <MenuItem  bg="#02AB6C" onClick={() => handleSelectChange("Mar'23 - Apr'23")}>
                Mar'23 - Apr'23
              </MenuItem>
              <MenuItem  bg="#02AB6C" onClick={() => handleSelectChange("Feb'23 - Aug'23")}>
                Feb'23 - Aug'23
              </MenuItem>
              <MenuItem  bg="#02AB6C" onClick={() => handleSelectChange("Apr'23 - Jun'23")}>
                Apr'23 - Jun'23
              </MenuItem>
              <MenuItem  bg="#02AB6C" onClick={() => handleSelectChange("Jan'23 - Nov'23")}>
                Jan'23 - Nov'23
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainSec;
