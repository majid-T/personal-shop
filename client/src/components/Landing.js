import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import AddItemPanel from "./AddItemPanel";

function Landing() {
  const url = "http://localhost:8000/api/shopItems/";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    console.log("called...");
    let result = await axios.get(url);
    let apiItems = result.data;
    setItems(apiItems);
    setLoading(false);
  };
  useEffect(() => {
    getItems();
    console.log("items", items);
  }, [loading]);
  return (
    <Container fluid={true} className="my-3">
      <Row>
        <Col sm={4}>
          <AddItemPanel />
        </Col>
        <Col sm={8}>{loading ? <Spinner /> : <div>items</div>}</Col>
      </Row>
    </Container>
  );
}

export default Landing;
