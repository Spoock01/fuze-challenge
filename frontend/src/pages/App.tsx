import React from "react";
import CardTable from "../components/CardTable/CardTable";
import Header from "../components/Header/Header";
import CardTableProvider from "../hooks/CardTable";


const App = () => {
  return (
    <CardTableProvider>
      <Header />
      <CardTable />
    </CardTableProvider>
  );
}

export default App;
