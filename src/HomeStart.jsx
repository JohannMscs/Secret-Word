import React from "react";

const HomeStart = () => {
  return (
    <div className="start">
      <h2>HomeStart</h2>

      <p>clique no botão avaixo para iniciar o jogo</p>
      <button
        onClick={(e) => {
          window.alert("O jogo vai comecar");
        }}
      >
        Iniciar o jogo
      </button>
    </div>
  );
};

export default HomeStart;
