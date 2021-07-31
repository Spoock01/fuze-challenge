import { Router } from "express";
import bodyValidationMiddleware from "../middlewares/BodyValidationMiddleware";
import { ICards } from "../repositories/CardsRepository";
import CardService from "../services/CardsService";
import { CardValidator } from "../validators/CardValidator";

const cardsRouter = Router();

cardsRouter.get("/cards", async (request, response) => {
    const cardService = new CardService();
    return response.status(200).json(cardService.findAllCards());
})

cardsRouter.post("/cards", bodyValidationMiddleware(CardValidator), async (request, response) => {
    const card: ICards = request.body;
    const cardService = new CardService();

    cardService.save(card);
    return response.status(200).send();
})

export default cardsRouter;