import { Router } from 'express';
import bodyValidationMiddleware from '../middlewares/BodyValidationMiddleware';
import { ICards } from '../repositories/CardsRepository';
import CardService from '../services/CardsService';
import { CardValidator } from '../validators/CardValidator';

const cardsRouter = Router();
const cardService = new CardService();

cardsRouter.get('/cards', async (request, response) => response.status(200).json(cardService.findAllCards()));

cardsRouter.post('/cards', bodyValidationMiddleware(CardValidator), async (request, response) => {
  const card: ICards = request.body;

  cardService.save(card);

  return response.status(200).send();
});

export default cardsRouter;
