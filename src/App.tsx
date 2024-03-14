import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

const phrases = [
  "NÃO",
  "VC TEM CERTEZA?",
  "CERTEZA ABSOLUTA?",
  "AMOR... É SÉRIO?",
  "NÃO FAZ ISSO CMG...",
  "EU VOU CHORAR!!!!!!",
  "VC ESTÁ QUEBRANDO MEU CORAÇÃO.",
  "ESTOU INCRÉDULO...",
  "DESACREDITADO NO AMOR...",
  "DEPRESSÃO...",
  "DOR...",
  "TREVAS...",
  "CARA????...",
  "ISADORA??? VEY...",
  "EU NÃO ACREDITO QUE VC CHEGOU ATÉ AQUI.",
  "NEW ACHIEVEMENT UNLOCKED: DEPRESSÃO 2.O.",
  "CHEGAMOS AO FIM DO MUNDO...",
  "👈 CLICA ALI VEY!",
];

function App() {
  const [count, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = count * 20 + 13;

  const handleNoClick = () => {
    setCount(count + 1);
  };

  const handleYesClick = () => {
    Swal.fire({
      title: "EU TE AMO MUITO 😍",
      html: `
      <style>
          .swal2-title {
            font-family: "Gotham", sans-serif;
            font-size: 24px;
            color: #000000;
            font-weight: bold;
          }
        </style>
        <img alt="bears kissing" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"/>
        <br>
        <br>
        <div style="font-family: 'Gotham', sans-serif;">Eu te admiro e me orgulho muito por você, sou muito feliz contigo e espero retribuir muito mais! Espero aproveitar muito a vida ao seu lado. <3</div>
        <br>
        <div style="font-family: 'Gotham', sans-serif;">EU TE AMO MEU AMOR! 💖</div>
      `,
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      didRender: (modal) => {
        const b = modal.querySelector(".swal2-html-container b");
        if (b) {
          const timerInterval = setInterval(() => {
            if (b) b.textContent = Swal.getTimerLeft().toString();
          }, 5000);
          modal.addEventListener("hidden", () => {
            clearInterval(timerInterval);
          });
        }
      },
      willClose: () => {
        window.location.href =
          "https://youtu.be/OmKAn8rNbKg?si=8AuQTrjThtjFuU-2";
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("It was closed by the timer");
      }
    });
  };

  const getNoButtonText = () => {
    return phrases[Math.min(count, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {!yesPressed ? (
        <>
          <img
            id="gif"
            alt="cats with hearts"
            src="https://media.tenor.com/hYq-uxUwOG4AAAAj/mochi-mochimochi.gif"
          />
          <div className="ask">VOCÊ ACEITA SER MINHA NAMORADA?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              SIM
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
