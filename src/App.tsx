import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
