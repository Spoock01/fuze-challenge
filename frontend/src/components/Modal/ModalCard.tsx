import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import Cards, { Focused, ReactCreditCardProps } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useCardsTable } from '../../hooks/CardTable';
import { cardNumberRules, expirationDateRules, userNameRules, cvvRules } from './ModalRules';
import MaskedInput from 'antd-mask-input'


function ModalCard() {
  const { createCard } = useCardsTable();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [ccInfo, setCCInfo] = useState<ReactCreditCardProps>({ cvc: '', expiry: '', name: '', number: '' } as ReactCreditCardProps);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function onFinish(values: any) {
    createCard(values).then(() => setIsOpen(false))
    console.log('Success:', values);
  };

  function onInputChange({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) {
    setCCInfo({ ...ccInfo, [name]: value })

  }
  function onFocusChange({ target: { name } }: React.ChangeEvent<HTMLInputElement>) {
    setCCInfo({ ...ccInfo, focused: name as Focused })
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
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
          <label> Formulário </label>
          <Cards
            cvc={ccInfo.cvc}
            expiry={ccInfo.expiry}
            focused={ccInfo.focused}
            name={ccInfo.name}
            number={ccInfo.number}
          />

          <Form.Item
            name="cardNumber"
            rules={cardNumberRules}
          >
            <Input placeholder={"Card Number"} name={"number"} maxLength={16} onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            name="name"
            rules={userNameRules}
          >
            <Input placeholder="Name" name={"name"} maxLength={40} minLength={10} onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            name="expirationDate"
            rules={expirationDateRules}
          >
            {/* <Input placeholder={"Expiration"} name={"expiry"} maxLength={4} onChange={onInputChange} /> */}
            <MaskedInput mask="11/11" name="expiry" placeholder="mm/yy" onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            name="cvc"
            rules={cvvRules}
          >
            <Input placeholder="cvc" name={"cvc"} maxLength={3} minLength={3} onChange={onInputChange} onFocus={onFocusChange} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
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