import "./App.css";
import Navbar from "./components/navBar";
import AddTask from "./components/addTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/tasksList";

function App() {
  return (
    <>
     <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col  lg="6">
          <AddTask />
          <TasksList/>
        </Col>
      </Row>
     </Container>
    </>
  );
}

export default App;