const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let firstFighterDisplay = document.querySelector('#fighter-one');
let secondFighterDisplay = document.querySelector('#fighter-two');

function draftSelection() {
    let firstFighterIndex = Math.floor(Math.random() * 17);
    let secondFighterIndex = Math.floor(Math.random() * 17);

    firstFighterDisplay.textContent = fighters[firstFighterIndex];
    secondFighterDisplay.textContent = fighters[secondFighterIndex];
}