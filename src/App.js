import { Container } from "@mui/material";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <AddTodo/>
      </Container>
      
    </div>
  );
}

export default App;
