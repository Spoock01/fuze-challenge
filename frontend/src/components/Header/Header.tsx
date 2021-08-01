import { useState } from "react";
import ModalCard from "../Modal/ModalAddCard";
import { Container, ButtonContainer } from './styles';
import { PlusCircleOutlined } from '@ant-design/icons'

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Container>
      <h1>
        <a href="https://fuze.cc/">
          Fuze Challenge
        </a>
      </h1>
      <ButtonContainer onClick={openModal}>
        <PlusCircleOutlined />
        Add Card
      </ButtonContainer>
      <ModalCard modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Container>
  )
}

export default Header;