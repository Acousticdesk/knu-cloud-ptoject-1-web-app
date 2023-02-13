import {
  Heading,
  Thead,
  TableContainer,
  Table,
  Tr,
  Th,
  Text,
  Box,
} from "@chakra-ui/react";

export function RemarkDetails() {
  const isHistory = false;
  return (
    <Box pt={8}>
      <Heading size="lg" mb={8}>
        Remark Name
      </Heading>
      <Text>Remark Description</Text>
      {isHistory && (
        <>
          <Heading mt={8} size="md" mb={8}>
            Revision History
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
}
