// @ts-nocheck

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
import { useEntities } from "../api/hooks";
import { useEffect } from "react";
import { fetchRemark } from "../auth/api";
import { useParams } from "react-router-dom";
import { FullScreenLoader } from "../async/full-screen-loader.component";
import { formatDate } from "../date/formatters";

export function RemarkDetails() {
  const isHistory = false;

  const { entities, isLoadingEntities, obtainEntities } = useEntities();
  const { remarkId } = useParams();

  useEffect(() => {
    obtainEntities(() => fetchRemark(remarkId as string));
  }, []);

  if (isLoadingEntities) {
    return <FullScreenLoader />;
  }

  return (
    <Box pt={8}>
      <Heading size="lg" mb={8}>
        {entities.name}
      </Heading>
      <Text>Created on: {formatDate(entities.date)}</Text>
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
