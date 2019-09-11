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

var createBoard = function(){
    for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click", flipcard);
    var board = document.getElementById("game-board");
    board.appendChild(cardElement);
    }
};

cardsInPlay = [];
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match");
    } else {
        console.log("Sorry, try again");
    }
}
var flipcard = function() {
    var cardId = this.getAttribute("data-id");
    var card = cards[cardId];
    this.setAttribute("src", card.cardImage);
    this.setAttribute("class", "clicked")
    Console.log(this);
    cardsInPlay.push(card.rank)
}

if (length.cardsInPlay === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
        alert("You found a match!")}
    else alert("Sorry, try again.");


createBoard();