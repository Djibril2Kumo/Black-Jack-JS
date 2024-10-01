const symbols = ["coeur", "carreau", "pique", "trèfle"];
const cartes = [
  { valeur: "as" },
  { valeur: "2" },
  { valeur: "3" },
  { valeur: "4" },
  { valeur: "5" },
  { valeur: "6" },
  { valeur: "7" },
  { valeur: "8" },
  { valeur: "9" },
  { valeur: "10" },
  { valeur: "valet" },
  { valeur: "dame" },
  { valeur: "roi" },
];

let deck = [];

const createDeck = () => {
  for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < cartes.length; j++) {
      deck.push({
        valeur: cartes[j].valeur,
        symbol: symbols[i],
      });
    }
  }
};

const shuffleDeck = () => {
    if (isEmpty(deck)) {
        return console.log("Il n'y a pas de deck à mélanger");
    }
    deck.sort(() => Math.random() - 0.5);
}

const isCardIndexExist = (cardIndex) => {
        return cardIndex !== -1;
}

const removeFromDeck = (cardToRemove) => {
    const indexToRemove = deck.indexOf(cardToRemove);
    if (isCardIndexExist(indexToRemove) === false) {
       return console.log("La carte n'est pas dans le deck");
    }
    return deck.splice(indexToRemove, 1);
}

const isEmpty = (deck) => {
    return deck.length === 0;
}

const pickCard = () => {
  if (isEmpty(deck)) {
    return console.log("Il n'y a plus de carte dans le deck, recréez un deck");
  }
  const pickedCard = deck[0];
  console.log(pickedCard);
  return removeFromDeck(pickedCard);
};


const start = () => {
    createDeck();
    shuffleDeck();
    while(deck.length > 0){
        pickCard();
    }
}

start();
