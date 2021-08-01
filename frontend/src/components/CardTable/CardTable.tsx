import { Table } from "antd"

import 'antd/dist/antd.css';
import { ICards, useCardsTable } from "../../hooks/CardTable";
import { v4 as uuidv4 } from 'uuid';

const CardTable = () => {
    const { cards } = useCardsTable();

    const columns = [
        {
            title: "User Name",
            dataIndex: "name",
            key: "name",
            sorter: (a: ICards, b: ICards) => a.name.localeCompare(b.name)
        },
        {
            title: "Card Number",
            dataIndex: "cardNumber",
            key: "cardNumber"
        },
        {
            title: "Expiration Date",
            dataIndex: "expirationDate",
            key: "expirationDate",
            sorter: (a: ICards, b: ICards) => a.expirationDate.localeCompare(b.expirationDate)
        },
        {
            title: "CVC",
            dataIndex: "cvc",
            key: "cvc"
        }
    ];

    return (
        <Table pagination={false} columns={columns} dataSource={cards.map(item => {
            return {
                ...item,
                key: uuidv4()
            }
        })} />
    )
}

export default CardTable;