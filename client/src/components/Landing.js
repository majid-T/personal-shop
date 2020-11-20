import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import AddItemPanel from "./AddItemPanel";
import ItemsTable from './ItemsTable';
// refreshItems = {() => getItems()}
function Landing() {
  const url = "http://localhost:8000/api/shopItems/";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    let result = await axios.get(url);
    let apiItems = result.data;
    setItems(apiItems);
    setLoading(false);
  };
  useEffect(() => {
    getItems();
  }, [loading]);
  return (
    <Container fluid={true} className="my-3">
      <Row>
        <Col sm={3}>
          <AddItemPanel refreshItems={() => getItems()} />
        </Col>
        <Col sm={9}>{loading ? <Spinner /> : <ItemsTable items={items} />}</Col>
      </Row>
    </Container>
  );
}

export default Landing;
