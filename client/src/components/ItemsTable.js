import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";


function ItemsTable({ items, refreshItems }) {
    const [prompt, setPrompt] = useState(false);
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
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with",
                "Access-Control-Allow-Headers": "access-control-allow-credentials, access-control-allow-headers, access-control-allow-methods, access-control-allow-origin, access-control-max-age",
                "Access-Control-Max-Age": "86400"
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
                setPrompt(true);
                setPropmtMsg(`Item Deleted.`);
                setPromptClass('success');
                refreshItems();
                setTimeout(() => setPrompt(false), 5000);
            }
        } catch (err) {
            console.log("CATCH", err);
            setPrompt(true);
            setPropmtMsg(`there was a problem ${err}`);
            setPromptClass('danger');
            setTimeout(() => setPrompt(false), 5000);
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
            <td className='deleteItem centerd-text' onClick={() => promptDelete(item)}>x</td>
            <td className='centerd-text'>
                <Link to={`/shop-item/${item.id}`}>
                    <i className="fas fa-edit"></i>
                </Link>
            </td>
        </tr >)
    });


    return (
        <>
            {prompt ? <Alert variant={promptClass} onClose={() => setPrompt(false)} dismissible>{propmtMsg}</Alert> : <></>}
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
                        <th>Price</th>
                        <th>Quantity</th>
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
