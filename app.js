let suits = ["♣", "♠", "♥", "♦"];
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createCard(suit, number) {
    let card = document.createElement("div");
    card.classList.add("Card");

    let suit1 = document.createElement("span");
    suit1.classList.add("Suit");
    suit1.textContent = suit;

    let numberElement = document.createElement("span");
    numberElement.classList.add("Number");
    numberElement.textContent = number;

    let suit2 = document.createElement("span");
    suit2.classList.add("Suit");
    suit2.setAttribute("id", "Reverse");
    suit2.textContent = suit;

    card.appendChild(suit1);
    card.appendChild(numberElement);
    card.appendChild(suit2);

    CardColor(card, suit);

    return card;
}

function CardColor(card, suit) {
    if (suit === "♥" || suit === "♦") {
        card.style.color = "red";
    } else {
        card.style.color = "black";
    }
}

function getRandomCard() {
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return { suit: randomSuit, number: randomNumber };
}

function generateRandomCards(cardCount) {
    let cards = [];
    for (let i = 0; i < cardCount; i++) {
        cards.push(getRandomCard());
    }
    return cards;
}

let draw = document.getElementById("Draw");
let sort = document.getElementById("Sort");

draw.addEventListener('click', () => {
    let cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = '';

    let cardCount = document.getElementById("cardCount").value;
    cardCount = Math.min(Math.max(cardCount, 1), 7);

    let cards = generateRandomCards(cardCount);
    cards.forEach(card => {
        let cardElement = createCard(card.suit, card.number);
        cardContainer.appendChild(cardElement);
    });
});

sort.addEventListener('click', () => {
    let cardCount = document.getElementById("cardCount").value;
    cardCount = Math.min(Math.max(cardCount, 1), 7);

    let bubbleLog = document.querySelector(".bubble-log");
    bubbleLog.classList.remove("hidden");

    bubbleLog.innerHTML = '';

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 4; i++) {
        let listItem = document.createElement("li");

        let letterSpan = document.createElement("span");
        letterSpan.textContent = letters[i] + ". ";
        listItem.appendChild(letterSpan);


        for (let j = 0; j < cardCount; j++) {
            let randomCard = getRandomCard();
            let cardElement = createCard(randomCard.suit, randomCard.number);
            listItem.appendChild(cardElement);
        }
        bubbleLog.appendChild(listItem);
    }
});