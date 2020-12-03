import React from 'react'
import Card from 'react-bootstrap/Card'

const ItemCard = (props) => {
    const { item } = props;
    return (
        <Card
            key={item.id}
            // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            // style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
                <Card.Title>Price: {item.price} | Q: {item.quantity} </Card.Title>
                <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemCard
