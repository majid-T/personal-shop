import React from 'react'
import Table from 'react-bootstrap/Table'

function ItemsTable({ items }) {
    const rows = items.map((item) => {
        return (<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
        </tr>)
    });
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    )
}

export default ItemsTable
