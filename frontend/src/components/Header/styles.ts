import styled from "styled-components";

export const Container = styled.header`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px 140px;
  background-color: var(--purple);

  a {
    color: var(--main-color);
    font-size: 20px;

    transition: 0.1s;
    &:hover {
      color: black;
    }
  }
`

export const ButtonContainer = styled.button`
    background-color: var(--purple-light);
    outline: none;
    border: none;
    color: white;
    border-radius: 12px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 0px 10px;

    &:hover {
      color: var(--purple-light);
      background-color: var(--main-color);
      cursor: pointer;
    }

    span {
      margin-right: 5px;
    }
`