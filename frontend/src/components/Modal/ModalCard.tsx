import { Input, Modal, Form, Button, DatePicker } from 'antd';
import React, { useState } from 'react';
import { userNameRules, cardNumberRules, expirationDateRules } from './ModalRules';

function ModalCard() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onFinish = (values: any) => {
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
            label="Username"
            name="username"
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