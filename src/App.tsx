import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";
import { User } from "./interfaces";

function App() {
  // const mensagem: string = "Minha mensagem";
  // const isChecked: boolean = true || false;
  // const age: number = 10;

  const user: User = {
    name: "Filipe",
    age: 28,
  };

  const handleUserAge = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Person user={user} handleUserAge={handleUserAge} />
      </header>
    </div>
  );
}

export default App;
