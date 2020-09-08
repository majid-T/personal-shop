import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

function AddItemPanel() {
  const [prompt, setPrompt] = useState(true);
  const [propmtMsg, setPropmtMsg] = useState("Test Msg");
  const [promptClass, setPromptClass] = useState("success");
  const [btnMsg, setBtnMsg] = useState("add");
  const [loading, setLoading] = useState(true);
  const [ietmName, setIetmName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemQ, setItemQ] = useState(0);
  const [itemPrice, setItemPrice] = useState(0.0);

  useEffect(() => {});
  return (
    <div className="addItemPanel">
      {prompt ? <Alert variant={promptClass}>{propmtMsg}</Alert> : <></>}

      <Form>
        <Form.Group controlId="itemName">
          <Form.Label>Item name</Form.Label>
          <Form.Control type="text" placeholder="Enter Item name" />
        </Form.Group>

        <Form.Group controlId="itemDesc">
          <Form.Label>Description to your Item</Form.Label>
          <Form.Control type="password" placeholder="What is it?" />
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Control type="number" placeholder="Quantity" />
          </Col>
          <Col>
            <Form.Control type="number" step="0.01" placeholder="price" />
          </Col>
        </Form.Row>
        <Button variant="primary" type="button" className="my-2">
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {btnMsg}
        </Button>
      </Form>
    </div>
  );
}

export default AddItemPanel;
//name,desc,price,quantity
