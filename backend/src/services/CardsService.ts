import { ICards, addNewCo, getAllCards } from '../repositories/CardsRepository'

class CardService {
    findAllCards = (): ICards[] => {
        return getAllCards();
    }

    save = (card: ICards): void => {
        addNewCo(card);
    }
}

export default CardService;