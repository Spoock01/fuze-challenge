import { Button, Form, Modal } from 'antd';
import MaskedInput from 'antd-mask-input';
import React, { useState } from 'react';
import Cards, { Focused, ReactCreditCardProps } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useCardsTable } from '../../hooks/CardTable';
import { cardNumberRules, cvvRules, expirationDateRules, userNameRules } from './ModalRules';
import { InputContainer, CardContainer } from './styles';

interface ModalCardProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}


function ModalCard({ modalIsOpen, closeModal }: ModalCardProps) {
  const { createCard } = useCardsTable();

  const [ccInfo, setCCInfo] = useState<ReactCreditCardProps>({ cvc: '', expiry: '', name: '', number: '' } as ReactCreditCardProps);

  function onFinish(values: any) {
    createCard(values).then(closeModal)
  };

  function onInputChange({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) {
    setCCInfo({ ...ccInfo, [name]: value })

  }
  function onFocusChange({ target: { name } }: React.ChangeEvent<HTMLInputElement>) {
    setCCInfo({ ...ccInfo, focused: name as Focused })
  }

  return (
    <>
      <Modal
        visible={modalIsOpen}
        onCancel={closeModal}
        onOk={onFinish}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
        >
          <label>Add Card</label>

          <CardContainer>
            <Cards
              cvc={ccInfo.cvc}
              expiry={ccInfo.expiry}
              focused={ccInfo.focused}
              name={ccInfo.name}
              number={ccInfo.number}
            />
          </CardContainer>

          <Form.Item
            name="cardNumber"
            rules={cardNumberRules}
          >
            <InputContainer placeholder={"Card Number"} name={"number"} maxLength={16} onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            name="name"
            rules={userNameRules}
          >
            <InputContainer placeholder="Name" name={"name"} maxLength={40} minLength={10} onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            name="expirationDate"
            rules={expirationDateRules}
          >
            <MaskedInput mask="11/11" name="expiry" placeholder="MM/YY" onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            name="cvc"
            rules={cvvRules}
          >
            <InputContainer placeholder="CVV" name={"cvc"} maxLength={3} minLength={3} onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ModalCard;