import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Modal from 'react-bootstrap/Modal';


function ShopItem(props) {
    let { id } = useParams();
    const url = "http://localhost:8000/api/shopItems/";
    const [errors, setErrors] = useState([]);
    const [prompt, setPrompt] = useState(false);
    const [propmtMsg, setPropmtMsg] = useState("");
    const [promptClass, setPromptClass] = useState("");
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [show, setShow] = useState(false)

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

    const handleClose = () => setShow(false);

    const editShopItem = async () => {
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

            const res = await axios.put(
                url + `${id}/`,
                body,
                config
            );

            if (res.status === 200) {
                setPrompt(true);
                setErrors([])
                setPropmtMsg(`Item Modified`);
                setPromptClass('success');
                setLoading(false);
                setEditMode(false);
                setTimeout(() => setPrompt(false), 5000);

            } else {
                setPrompt(true);
                setPropmtMsg(`Something went wrong ... couldn't edit Item`);
                setPromptClass('danger');
                console.log("RESPONSE", res);
                setLoading(false);
                setEditMode(false);
            }
        } catch (err) {
            console.log("CATCH", err);
            const responseErrors = []
            if (err.response && err.response.data) {
                for (const [key, value] of Object.entries(err.response.data)) {
                    responseErrors.push(`${key}: ${value}`)
                }
                setErrors(responseErrors)
            } else {
                setErrors([`There was an error ${err}`])
            }
            setLoading(false);
            setEditMode(false);
            setTimeout(() => setErrors([]), 5000);
        }
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        editShopItem();
    };

    const getItem = async () => {
        let result = await axios.get(url + `${id}/`);
        let apiItem = result.data;
        setFormData({
            itemName: apiItem.name,
            itemDesc: apiItem.desc,
            itemQ: apiItem.quantity,
            itemPrice: apiItem.price
        })
        setLoading(false);
    };

    const deleteItem = async () => {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with",
                "Access-Control-Allow-Headers": "access-control-allow-credentials, access-control-allow-headers, access-control-allow-methods, access-control-allow-origin, access-control-max-age",
                "Access-Control-Max-Age": "86400"
            },
        };

        console.log(`Deleting ${itemName}`)

        try {
            const res = await axios.delete(
                `http://localhost:8000/api/shopItems/${id}/`,
                config
            );

            console.log(res)
            if (res.status == 204) {
                console.log("Deleted successfuly")
                props.history.push("/");
            }
        } catch (err) {
            console.log("CATCH", err);
        }

        setShow(false);
    };
    useEffect(() => {
        getItem();
    }, [loading]);


    return (
        <div className="editItemPanel m-5 p-5">
            {prompt ? <Alert variant={promptClass}>{propmtMsg}</Alert> : <></>}
            {errors.length > 0 ? (errors.map(e => <Alert variant='danger'>{e}</Alert>)) : <></>}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deleteing an Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this item.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteItem}>Delete</Button>
                </Modal.Footer>
            </Modal>
            {!loading && (
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group controlId="itemName">
                        <Form.Label>Item name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Item name" disabled={!editMode}
                            name="itemName"
                            value={itemName}
                            onChange={(e) => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="itemDesc">
                        <Form.Label>Description to your Item</Form.Label>
                        <Form.Control type="text" placeholder="What is it?" name="itemDesc" disabled={!editMode}
                            value={itemDesc}
                            onChange={(e) => onChange(e)} />
                    </Form.Group>

                    <Form.Row>
                        <Col>
                            <Form.Label>Quantity</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>Pirce CAD</Form.Label>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type="number" placeholder="Quantity" name="itemQ" disabled={!editMode}
                                value={itemQ}
                                onChange={(e) => onChange(e)} />
                        </Col>
                        <Col>
                            <Form.Control type="number" step="0.01" placeholder="price" name="itemPrice" disabled={!editMode}
                                value={itemPrice}
                                onChange={(e) => onChange(e)} />
                        </Col>
                    </Form.Row>
                    {editMode && <Button variant="success" type="submit" className="my-2" >
                        {loading && (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        )}
                        Save
                    </Button>}
                    <Button variant="warning" className="my-2 mx-2" onClick={() => setEditMode(!editMode)} >
                        {loading && (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        )}
                        {!editMode ? "EDIT" : "Cancel"}
                    </Button>
                    <Button variant="danger" className="my-2 mx-2" onClick={() => setShow(true)} >
                        {loading && (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        )}
                        DELETE
                    </Button>
                </Form>

            )}
        </div>
    )
}

export default ShopItem
