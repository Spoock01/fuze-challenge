import { Table } from "antd"

import 'antd/dist/antd.css';
import { useEffect, useState } from "react";

import api from '../../services/api';

interface ICards {
    name: string;
    cardNumber: string;
    expirationDate: string;
}

const CardTable = () => {
    const [cards, setCards] = useState<ICards[]>([]);

    useEffect(() => {
        api.get("/cards").then(response => {
            setCards(response.data);
        })
    }, [])

    const columns = [
        {
            title: "User Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Card Number",
            dataIndex: "cardNumber",
            key: "cardNumber"
        },
        {
            title: "Expiration Date",
            dataIndex: "expirationDate",
            key: "expirationDate"
        }
    ];

    return (
        <Table columns={columns} dataSource={cards} />
    )
}

export default CardTable;