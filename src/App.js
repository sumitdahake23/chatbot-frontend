import React from "react";
import Chatbot from "./components/Chatbot";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import InformationBox from "./components/InformationBox";


function App() {
  return (
    <div className="App  bg-dark">
      <Navbar />
      <InformationBox/>
      <Chatbot />



    </div>
  );
}

export default App;
