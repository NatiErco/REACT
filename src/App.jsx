import { React } from "react";
import { Container } from "./Components/Container";

export function App() {

  return (
    <Container title={<h1>My title Aplication</h1>}>
      <Colors
        colors={[
          { id: 1, name: "Red" },
          { id: 2, name: "Yellow" },
          { id: 3, name: "White" },
        ]}
      />
       </Container>
  );
}
