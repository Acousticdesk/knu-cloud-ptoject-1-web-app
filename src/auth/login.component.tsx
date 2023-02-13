import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "./auth.context";
import { signIn } from "../api/mock";
import { AuthDTO } from "../api/auth/api-auth.interfaces";
import { useAsync } from "../async/hooks";

const { Consumer: AuthContextConsumer } = authContext;

export function Login({}) {
  const navigate = useNavigate();
  const { isLoading, asyncPerform } = useAsync();

  async function handleFormSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);

    await asyncPerform(() =>
      signIn(Object.fromEntries(formData.entries()) as unknown as AuthDTO)
    );

    navigate("/collections");
  }

  return (
    <AuthContextConsumer>
      {({ userId, setUserId }) => (
        <form onSubmit={handleFormSubmit}>
          <Box pt={8}>
            <FormControl>
              <FormLabel>User Id</FormLabel>
              <Input
                name="userId"
                value={userId}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUserId(e.target.value)
                }
              />
            </FormControl>
            <Button
              colorScheme="red"
              mt={6}
              type="submit"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </Box>
        </form>
      )}
    </AuthContextConsumer>
  );
}
