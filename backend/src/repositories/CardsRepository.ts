import DataGenerator from '../utils/DataGenerator';

export interface ICards {
  name: string;
  cardNumber: string;
  expirationDate: string;
}

const cards: ICards[] = Array(5).fill(0).map((): ICards => ({
  cardNumber: DataGenerator.getCardNumber(),
  name: DataGenerator.getFirstName(),
  expirationDate: DataGenerator.getExpirationDate(),
}));

export const getAllCards = () => cards;

export const addNewCard = (info: ICards): void => {
  cards.push(info);
};
