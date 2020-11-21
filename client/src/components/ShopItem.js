import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function ShopItem() {
    let { id } = useParams();
    const url = "http://localhost:8000/api/shopItems/";
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const getItem = async () => {
        let result = await axios.get(url + `${id}/`);
        let apiItem = result.data;
        setItem(apiItem);
        setLoading(false);
    };
    useEffect(() => {
        getItem();
    }, [loading]);


    return (
        <div>
            <h1>This is shopItem page {id}</h1>
            <p>{!loading && item.name}</p>
            <p>{!loading && item.desc}</p>
        </div>
    )
}

export default ShopItem
