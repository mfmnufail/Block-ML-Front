import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Menubar from "./Components/Menubar";
import AppRouter from "./Routes/index";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
      <Container style={{"marginTop":"10px","width":"96%"}}>
        <Menubar />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
