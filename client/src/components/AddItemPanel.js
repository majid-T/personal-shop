import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";


function AddItemPanel({ refreshItems }) {
  const [errors, setErrors] = useState([]);
  const [prompt, setPrompt] = useState(false);
  const [propmtMsg, setPropmtMsg] = useState("");
  const [promptClass, setPromptClass] = useState("");
  const [btnMsg, setBtnMsg] = useState("add");
  const [loading, setLoading] = useState(false);
  //form values
  const [formData, setFormData] = useState({
    itemName: "",
    itemDesc: "",
    itemQ: "",
    itemPrice: "",
  });
  const {
    itemName,
    itemDesc,
    itemQ,
    itemPrice,
  } = formData;

  const addShopItem = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = {
      "name": itemName,
      "desc": itemDesc,
      "quantity": itemQ,
      "price": itemPrice,
    };
    try {
      setLoading(true);

      const res = await axios.post(
        `http://localhost:8000/api/shopItems/`,
        body,
        config
      );

      if (res.status == 201) {
        setPrompt(true);
        setErrors([])
        setPropmtMsg(`New Item Added`);
        setPromptClass('success');
        setFormData({
          itemName: "",
          itemDesc: "",
          itemQ: "",
          itemPrice: "",
        });
        setLoading(false);
        refreshItems();
        setTimeout(() => setPrompt(false), 5000);

      } else {
        setPrompt(true);
        setPropmtMsg(`Something went wrong ... couldn't add Item`);
        setPromptClass('danger');
        console.log(res);
        setLoading(false);
      }
    } catch (err) {
      console.log("CATCH", err);
      const responseErrors = []
      if (err.response.data) {
        for (const [key, value] of Object.entries(err.response.data)) {
          responseErrors.push(`${key}: ${value}`)
        }
        setErrors(responseErrors)
      } else {
        setErrors([`There was an error ${err}`])
      }
      setLoading(false);

      setTimeout(() => setErrors([]), 5000);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addShopItem();
  };


  useEffect(() => { });
  return (
    <div className="addItemPanel">
      {prompt ? <Alert variant={promptClass}>{propmtMsg}</Alert> : <></>}
      {errors.length > 0 ? (errors.map(e => <Alert variant='danger'>{e}</Alert>)) : <></>}

      <h3>Add new Item</h3>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="itemName">
          <Form.Control type="text" placeholder="Enter Item name"
            name="itemName"
            value={itemName}
            onChange={(e) => onChange(e)} />
        </Form.Group>

        <Form.Group controlId="itemDesc">
          <Form.Control type="text" placeholder="What is it?" name="itemDesc"
            value={itemDesc}
            onChange={(e) => onChange(e)} />
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Control type="number" placeholder="Quantity" name="itemQ"
              value={itemQ}
              onChange={(e) => onChange(e)} />
          </Col>
          <Col>
            <Form.Control type="number" step="0.01" placeholder="price" name="itemPrice"
              value={itemPrice}
              onChange={(e) => onChange(e)} />
          </Col>
        </Form.Row>
        <Button variant="primary" type="submit" className="my-2" >
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