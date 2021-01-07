/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello ExcuseGenerator!");
};

let generateExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoindx = Math.floor(Math.random() * who.length);
  let whatindx = Math.floor(Math.random() * what.length);
  let whenindx = Math.floor(Math.random() * when.length);

  return who[whoindx] + " " + what[whatindx] + " " + when[whenindx];
};
