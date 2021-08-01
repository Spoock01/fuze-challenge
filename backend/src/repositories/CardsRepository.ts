import DataGenerator from '../utils/DataGenerator';

export interface ICards {
  name: string;
  cardNumber: string;
  expirationDate: string;
}

const cards: ICards[] = Array(10).fill(0).map(() => ({
  cardNumber: DataGenerator.getCardNumber(),
  name: DataGenerator.getFirstName(),
  expirationDate: DataGenerator.getExpirationDate(),
  cvc: DataGenerator.getExpirationCVC(),
}));

export const getAllCards = () => cards;

export const addNewCard = (info: ICards): void => {
  cards.push(info);
};
