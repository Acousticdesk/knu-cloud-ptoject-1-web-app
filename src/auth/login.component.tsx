import { Box, Input } from "@chakra-ui/react";
import { authContext } from "./auth.context";
import { ChangeEvent } from "react";

const { Consumer: AuthContextConsumer } = authContext;

export function Login({}) {
  return (
    <AuthContextConsumer>
      {({ userId, setUserId }) => (
        <Box>
          <Input
            placeholder="User ID"
            value={!userId ? undefined : userId}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserId(e.target.value)
            }
          />
        </Box>
      )}
    </AuthContextConsumer>
  );
}
