import { Button, Form, Modal } from 'antd';
import MaskedInput from 'antd-mask-input';
import React, { useState } from 'react';
import Cards, { Focused, ReactCreditCardProps } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useCardsTable } from '../../hooks/CardTable';
import { cardNumberRules, cvvRules, expirationDateRules, userNameRules } from './ModalRules';
import { InputContainer, CardContainer } from './styles';
import { cardNumberMaxLength, cvvMaxLength, nameMinLength, nameMaxLength, cvvMinLength } from "./constants";

interface ModalCardProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const cardInitialState: ReactCreditCardProps = {
  cvc: '',
  expiry: '',
  name: '',
  number: ''
};

function ModalCard({ modalIsOpen, closeModal }: ModalCardProps) {
  const { createCard } = useCardsTable();
  const [form] = Form.useForm();
  const [btnState, setBtnState] = useState(false);
  const [ccInfo, setCCInfo] = useState<ReactCreditCardProps>(cardInitialState);

  function onFinish(values: any) {
    setBtnState(true);
    createCard(values).then(() => {
      setBtnState(false);
      onCancel();
    }).catch(() => setBtnState(false))
  };

  function onInputChange({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) {
    setCCInfo({ ...ccInfo, [name]: value })

  }
  function onFocusChange({ target: { name } }: React.ChangeEvent<HTMLInputElement>) {
    setCCInfo({ ...ccInfo, focused: name as Focused })
  }

  function onCancel() {
    setCCInfo(cardInitialState);
    form.resetFields();
    closeModal();
  }

  return (
    <Modal
      visible={modalIsOpen}
      onCancel={onCancel}
      onOk={onFinish}
      afterClose={onCancel}
      footer={null}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        form={form}
      >
        <CardContainer>
          <Cards
            {...ccInfo}
          />
        </CardContainer>

        <Form.Item
          name="cardNumber"
          rules={cardNumberRules}
        >
          <InputContainer
            placeholder={"Card Number"}
            name={"number"}
            maxLength={cardNumberMaxLength}
            onChange={onInputChange}
            onFocus={onFocusChange} />
        </Form.Item>

        <Form.Item
          name="name"
          rules={userNameRules}
        >
          <InputContainer
            placeholder="Name"
            name={"name"}
            maxLength={nameMaxLength}
            minLength={nameMinLength}
            onChange={onInputChange}
            onFocus={onFocusChange} />
        </Form.Item>

        <Form.Item
          name="expirationDate"
          rules={expirationDateRules}
        >
          <MaskedInput
            mask="11/11"
            name="expiry"
            placeholder="MM/YY"
            onChange={onInputChange}
            onFocus={onFocusChange} />
        </Form.Item>

        <Form.Item
          name="cvc"
          rules={cvvRules}
        >
          <InputContainer
            placeholder="CVV"
            name={"cvc"}
            maxLength={cvvMaxLength}
            minLength={cvvMinLength}
            onChange={onInputChange}
            onFocus={onFocusChange} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={btnState} >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalCard;