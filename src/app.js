/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  // let random1 = Math.floor(Math.random() * (pronoun.length - 0)) + 0;
  // let random2 = Math.floor(Math.random() * (adj.length - 0)) + 0;
  // let random3 = Math.floor(Math.random() * (noun.length - 0)) + 0;

  // document.querySelector(
  //   "#excuse"
  // ).innerHTML = `${pronoun[random1]}${adj[random2]}${noun[random3]}.com
  //   `;

  let cadena1;
  let cadena2;
  let cadena3;
  let cadena4;
  let cadena5;
  let cadena6;
  let cadena7;

  for (let i = 0; i < pronoun.length; i++) {
    for (let i = 0; i < adj.length; i++) {
      for (let i = 0; i < noun.length; i++) {
        cadena1 = pronoun[0] + adj[0] + noun[0];
        cadena2 = pronoun[0] + adj[0] + noun[1];
        cadena3 = pronoun[0] + adj[1] + noun[0];
        cadena4 = pronoun[1] + adj[0] + noun[0];
        cadena5 = pronoun[1] + adj[0] + noun[1];
        cadena6 = pronoun[1] + adj[1] + noun[0];
        cadena7 = pronoun[1] + adj[1] + noun[1];
      }
    }
  }

  console.log(cadena1);
  console.log(cadena2);
  console.log(cadena3);
  console.log(cadena4);
  console.log(cadena5);
  console.log(cadena6);
  console.log(cadena7);
};
