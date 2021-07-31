import { Table } from "antd"

import 'antd/dist/antd.css';
import { useCardsTable } from "../../hooks/CardTable";
import { v4 as uuidv4 } from 'uuid';


const CardTable = () => {
    const { cards } = useCardsTable();

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

    return (<Table columns={columns} dataSource={cards.map(item => {
        return {
            ...item,
            key: uuidv4()
        }
    })} />)
}

export default CardTable;