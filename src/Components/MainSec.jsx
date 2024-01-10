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
import BarChart from "./BarChart";
import HorizontalBarCard from "./HorizontalBarCard";

const MainSec = () => {
  const [selectedOption, setSelectedOption] = useState("Jan'22 - Dec'23");
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Box bg="#EBEBEB">
      {/* topbar*/}
      <Box w="1010px" h="64px" p="20px">
        <Flex justifyContent="space-between" alignItems="center">
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
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "400",
                }}
              >
                Show Time:{" "}
                <span style={{ color: "#02AB6C" }}>
                  {" "}
                  &nbsp; {selectedOption} &nbsp; | &nbsp;
                </span>
                <Image w="7.21px" h="4.6px" src={dropdown} />
              </span>
            </MenuButton>
            <MenuList bg="#02AB6C" color="#FFFFFF">
              <MenuItem
                bg="#02AB6C"
                onClick={() => handleSelectChange("Mar'23 - Apr'23")}
              >
                Mar'23 - Apr'23
              </MenuItem>
              <MenuItem
                bg="#02AB6C"
                onClick={() => handleSelectChange("Feb'23 - Aug'23")}
              >
                Feb'23 - Aug'23
              </MenuItem>
              <MenuItem
                bg="#02AB6C"
                onClick={() => handleSelectChange("Apr'23 - Jun'23")}
              >
                Apr'23 - Jun'23
              </MenuItem>
              <MenuItem
                bg="#02AB6C"
                onClick={() => handleSelectChange("Jan'23 - Nov'23")}
              >
                Jan'23 - Nov'23
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      {/* Data Cards section */}

      <Box>
        <Flex justifyContent="space-around" gap="3px">
          <HorizontalBarCard
            heading="Current Year Emissions"
            text="contribution to Scope3"
            clr="red"
            value="38999"
          />
          <HorizontalBarCard
            heading="Revenue to emission ratio"
            text="Revenue"
            clr="orange"
            value="38999"
          />
          <HorizontalBarCard
            heading="Category-1"
            text="contribution to Scope3"
            clr="#3BB85E"
            value="38999"
          />
          {/* Reached Suppliers */}
          <Box
            p="20px"
            alignItems="center"
            w="156px"
            h="138px"
            bg="#02AB6C"
            textAlign="center"
            borderRadius="12px"
            background="linear-gradient(0deg, rgba(2, 171, 108, 0.67), rgba(2, 171, 108, 0.67)), linear-gradient(0deg, #EBEBEB, #EBEBEB)"
          >
            <Text
              fontSize="14px"
              fontWeight="400"
              fontFamily="HelveticaNeue"
              color="#fff"
              lineHeight="18px"
            >
              Total number of reached suppliers
            </Text>
            <Text
              fontFamily="HelveticaNeue"
              fontSize="46px"
              fontWeight="400"
              lineHeight="54px"
              color="#fff"
            >
              143
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Charts Section */}
      <Flex justifyContent='center' alignItems='center'>
        <Box
          w="905px"
          h="521px"
          borderRadius="12px"
          border="1px"
          mt="20px"
          padding="20px"
        >
          <Text>Emission/Revenue</Text>
          <BarChart />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainSec;
