import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const DataTable = ({ db }) => {
  const filteredData = db.slice(0, 6);

  return (
    <Box>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Monthly Data</TableCaption>
        <Thead>
          <Tr>
            <Th>Month</Th>
            <Th>Revenue</Th>
            <Th>Emmision</Th>
            <Th>RE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.month}</Td>
              <Td>{item.revenue}</Td>
              <Td>{item.emissions}</Td>
              <Td>{item.RE}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
