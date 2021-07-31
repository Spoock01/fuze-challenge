import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useCardsTable } from '../../hooks/CardTable';
import { cardNumberRules, expirationDateRules, userNameRules } from './ModalRules';

function ModalCard() {
  const { createCard } = useCardsTable();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

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

          <Form.Item
            label="Name"
            name="name"
            rules={userNameRules}
          >
            <Input maxLength={40} minLength={1} />
          </Form.Item>

          <Form.Item
            label="Card Number"
            name="cardNumber"
            rules={cardNumberRules}
          >
            <Input maxLength={16} />
          </Form.Item>

          <Form.Item
            label="Expiration Date"
            name="expirationDate"
            rules={expirationDateRules}
          >
            <DatePicker />
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