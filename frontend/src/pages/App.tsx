import React from "react";
import CardTable from "../components/CardTable";
import Header from "../components/Header";
import CardTableProvider from "../hooks/CardTable";
import GlobalStyle from '../styles';

const Context = React.createContext({ name: 'Default' });

const App = () => {
  return (
    <Context.Provider value={{ name: "Notification Context" }}>
      <CardTableProvider>
        <GlobalStyle />
        <Header />
        <CardTable />
      </CardTableProvider>
    </Context.Provider>
  );
}

export default App;
