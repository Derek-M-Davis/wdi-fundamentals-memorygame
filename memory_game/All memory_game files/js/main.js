var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]
cardsInPlay = [];
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match");
    } else {
        console.log("Sorry, try again");
    }
}
function flipcard(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit)
    console.log(cards[cardId].cardImage)
    cardsInPlay.push(cards[cardId].rank)
    checkForMatch();
}
flipcard(0)
flipcard(2)
if (length.cardsInPlay === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
        alert("You found a match!")}
    else alert("Sorry, try again.");
