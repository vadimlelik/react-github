import { TheHeader } from "components/TheHeader";
import React from "react";
import { Container } from "./components/Container";
import {Search} from "./components/Search";

function App() {
  return (
    <Container>
      <TheHeader />
        <Search hasError onSubmit={()=>{} } />
      <h1>hello world</h1>
    </Container>
  );
}

export default App;
