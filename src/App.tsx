import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container h="100%">
      <Outlet />
    </Container>
  );
}

export default App;
