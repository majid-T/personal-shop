import React from 'react'
import Table from 'react-bootstrap/Table'

function ItemsTable(items) {
    console.log("PROPS", items)
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>

                </tr>
            </tbody>
        </Table>
    )
}

export default ItemsTable
