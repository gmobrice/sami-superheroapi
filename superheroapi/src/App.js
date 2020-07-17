import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Nav from "./components/organisms/nav/nav";
import Modal from "./components/organisms/modal/modal";
import Heroes from "./components/organisms/heroes/heroes";

function App() {
  return (
    <div className="container">
      <Modal />
      <Nav />
      <Heroes />
    </div>
  );
}
export default App;
