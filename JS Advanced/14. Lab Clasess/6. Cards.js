let result = (function(){
    let Suits = {
        SPADES: "\u2660",
        HEARTS: "\u2665",
        DIAMONDS: "\u2666",
        CLUBS: "\u2663"
    };

    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(val) {
            if (!validFaces.includes(val)) {
                throw new Error("Invalid face");
            }

            this._face = val;
        }

        get suit() {
            return this._suit;
        }

        set suit(val) {
            if (!Object.values(Suits).includes(val)) {
                throw new Error("Invalid suit");
            }

            this._suit = val;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
console.log(card);
// card.face = "A";
// card.suit = Suits.DIAMONDS;
let card2 = new Card("1", Suits.DIAMONDS);
console.log(card2);