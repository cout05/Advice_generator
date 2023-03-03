const title = document.getElementById('title');
const txt  = document.getElementById('quote');
const button = document.getElementById("button");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
const res = await fetch(url);
const {slip: {id, advice } } = await res.json();
title.innerText = id;
txt.innerText = advice;
}

getAdvice()

button.addEventListener('click', getAdvice)