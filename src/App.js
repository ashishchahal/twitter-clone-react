import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Home */}
      <Home />
      {/* Widgets */}
    </div>
  );
}

export default App;
