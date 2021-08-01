import React from "react";
import CardTable from "../components/CardTable/CardTable";
import Header from "../components/Header/Header";
import CardTableProvider from "../hooks/CardTable";
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #f0f2f5;
    --purple-light: #6933ff;
    --purple: #5429cc;

  }

  body {
    background-color: var(--main-color);
  }

  * {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }

  .ant-modal-content {
    //max-width: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    text-align: center;
    
    label {
      font-size: 25px;
      font-weight: bold;
    }

    .rccs {
      margin: 5px 0px 20px 0px;
    }

    .ant-btn-primary {
      border-radius: 7px;
      transition: filter 0.3s;
      cursor: pointer;
      background-color: var(--purple-light);
      border: none;

      &:hover {
        filter: brightness(0.5);
      }
    }
  }

  
`;

const App = () => {
  return (

    <CardTableProvider>
      <GlobalStyle />
      <Header />
      <CardTable />
    </CardTableProvider>


  );
}

export default App;
