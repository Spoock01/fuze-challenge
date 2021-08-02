import { notification } from 'antd';
import axios from 'axios';
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
  const [apiNotification, contextHolder] = notification.useNotification();

  useEffect(() => {
    (async function getCards() {
      try {
        const { data } = await api.get("cards");
        setCards(data);
      } catch (err) {
        apiNotification.error({
          message: err.message,
          placement: 'topRight'
        })
      }
    })()
  }, [apiNotification])

  async function createCard(card: ICards): Promise<void> {
    try {
      await api.post("cards", card);
      apiNotification.success({ message: "Success!" });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status) {
        apiNotification.error({
          message: "It was not possible to register the card.",
          placement: 'topRight'
        });
      } else {
        apiNotification.error({
          message: err.message,
          placement: 'topRight'
        });
      }
      throw err;
    }
  }

  return (
    <>
      {contextHolder}
      <CardTableContext.Provider value={{ cards, createCard }}>
        {children}
      </CardTableContext.Provider>
    </>
  )
}

export function useCardsTable() {
  return useContext(CardTableContext);
}

export default CardTableProvider;