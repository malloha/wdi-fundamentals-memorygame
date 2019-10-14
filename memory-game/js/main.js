console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay=[];
var cardOne = cards[0];
var cardTwo = cards[1];


cardsInPlay.push(cardOne);
console.log("USER flipped " + cardsInPlay[0]);

cardsInPlay.push(cardTwo);
console.log("USER flipped " + cardsInPlay[1]);

if(cardsInPlay.length === 2)
{
	if(cardsInPlay[0] === cardsInPlay[1])
		{alert("you found a match!");}
	else
		{alert("Sorry try again");}
}
