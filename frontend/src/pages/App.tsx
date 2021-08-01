import React from "react";
import Main from "../components/Main";
import Header from "../components/Header/Header";
import CardTableProvider from "../hooks/CardTable";
import GlobalStyle from '../styles';

const App = () => {
  return (
    <CardTableProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </CardTableProvider>
  );
}

export default App;
