import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";



function ItemsTable({ items }) {
    const [prompt, setPrompt] = useState(false);
    const [errors, setErrors] = useState([]);
    const [propmtMsg, setPropmtMsg] = useState("");
    const [promptClass, setPromptClass] = useState("");
    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState({})
    const handleClose = () => setShow(false);
    const promptDelete = (item) => {
        setCurrentItem(item);
        setShow(true)
    }

    const deleteItem = async () => {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            },
        };

        console.log(`Deleting ${currentItem.name}`)

        try {
            const res = await axios.delete(
                `http://localhost:8000/api/shopItems/${currentItem.id}/`,
                config
            );

            console.log(res)
            if (res.status == 204) {
                console.log("Succesfully delete and Item")
            }
        } catch (err) {
            console.log("CATCH", err);
            const responseErrors = []
            for (const [key, value] of Object.entries(err.response.data)) {
                responseErrors.push(`${key}:${value}`)
            }
            setErrors(responseErrors)
        }


        setShow(false);
    }

    const rows = items.map((item) => {
        return (<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td className='deleteItem' onClick={() => promptDelete(item)}>x</td>
            <td>Edit</td>
        </tr>)
    });


    return (
        <>
            {prompt ? <Alert variant={promptClass}>{propmtMsg}</Alert> : <></>}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                item={currentItem}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deleteing an Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this item. {currentItem.name}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteItem}>Delete</Button>
                </Modal.Footer>
            </Modal>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th colSpan='2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </>
    )
}

export default ItemsTable
