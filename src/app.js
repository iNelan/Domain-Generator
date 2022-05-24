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

  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        cadena1 = pronoun[i] + adj[x] + noun[y] + ".com";
        console.log(cadena1);
      }
    }
  }
};
