import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../services/api';

export interface ICards {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
}

interface CardTableProviderProps {
  children: ReactNode;
}

interface CardTableContextData {
  cards: ICards[];
  createCard: (card: ICards) => Promise<void>;
}

export const CardTableContext = createContext<CardTableContextData>({} as CardTableContextData);

const CardTableProvider = ({ children }: CardTableProviderProps) => {
  const [cards, setCards] = useState<ICards[]>([]);

  useEffect(() => {
    api.get("/cards").then(response => {
      setCards(response.data);
    })
  }, [])

  async function createCard(card: ICards): Promise<void> {
    try {
      await api.post("cards", card);
    } catch (err) {
      throw err?.response?.data;
    }
  }

  return (
    <CardTableContext.Provider value={{ cards, createCard }}>
      {children}
    </CardTableContext.Provider>
  )
}

export function useCardsTable() {
  return useContext(CardTableContext);
}


export default CardTableProvider;