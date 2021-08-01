import React from "react";
import Main from "../components/Main";
import Header from "../components/Header/Header";
import CardTableProvider from "../hooks/CardTable";
import GlobalStyle from '../styles';

const Context = React.createContext({ name: 'Default' });

const App = () => {
  return (
    <Context.Provider value={{ name: "Notification Context" }}>
      <CardTableProvider>
        <GlobalStyle />
        <Header />
        <Main />
      </CardTableProvider>
    </Context.Provider>
  );
}

export default App;
