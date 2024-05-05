import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1> Welcome to my shop </h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
