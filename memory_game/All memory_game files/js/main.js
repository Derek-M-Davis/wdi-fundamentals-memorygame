console.log("Up and running!");
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match");
    } else {
        console.log("Sorry, try again");
    }
}
function flipcard(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId])
    checkForMatch();
}
flipcard(0)
flipcard(2)
if (length.cardsInPlay === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
        alert("You found a match!")}
    else alert("Sorry, try again.");
