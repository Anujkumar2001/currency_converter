import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./hook/useCurrencyInfo";
function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
