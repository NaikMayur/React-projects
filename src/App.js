import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const name = "Mayur";
  const x = true;
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
