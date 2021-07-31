import DataGenerator from "../utils/DataGenerator";

export interface ICards {
    name: string;
    cardNumber: string;
    expirationDate: string;
}

const cards: ICards[] = Array(5).fill(0).map((): ICards => {
    return {
        cardNumber: DataGenerator.getCardNumber(),
        name: DataGenerator.getFirstName(),
        expirationDate: DataGenerator.getExpirationDate()
    }
})

export const getAllCards = () => {
    return cards;
}

export const addNewCo = (info: ICards): void => {
    cards.push(info);
}