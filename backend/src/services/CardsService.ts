import { ICards, addNewCard, getAllCards } from '../repositories/CardsRepository';

class CardService {
  findAllCards = (): ICards[] => getAllCards()

  save = (card: ICards): void => {
    addNewCard(card);
  }
}

export default CardService;
