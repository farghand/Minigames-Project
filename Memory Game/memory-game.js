document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'Dark Magician Girl',
            img: 'Memory Game Images/dark-magician-girl.jpg'
        },
        {
            name: 'Dark Magician Girl',
            img: 'Memory Game Images/dark-magician-girl.jpg'
        },
        {
            name: 'Dark Magician Knight',
            img: 'Memory Game Images/dark-magician-knight.jpg'
        },
        {
            name: 'Dark Magician Knight',
            img: 'Memory Game Images/dark-magician-knight.jpg'
        },
        {
            name: 'Dark Magician of Chaos',
            img: 'Memory Game Images/dark-magician-of-chaos.jpg'
        },
        {
            name: 'Dark Magician of Chaos',
            img: 'Memory Game Images/dark-magician-of-chaos.jpg'
        },
        {
            name: 'Dark Magician',
            img: 'Memory Game Images/dark-magician.jpg'
        },
        {
            name: 'Dark Magician',
            img: 'Memory Game Images/dark-magician.jpg'
        },
        {
            name: 'Dark Paladin',
            img: 'Memory Game Images/dark-paladin.jpg'
        },
        {
            name: 'Dark Paladin',
            img: 'Memory Game Images/dark-paladin.jpg'
        },
        {
            name: 'Dark Sage',
            img: 'Memory Game Images/dark-sage.jpg'
        },
        {
            name: 'Dark Sage',
            img: 'Memory Game Images/dark-sage.jpg'
        },
        {
            name: 'Toon Dark Magician Girl',
            img: 'Memory Game Images/toon-dark-magician-girl.jpg'
        },
        {
            name: 'Toon Dark Magician Girl',
            img: 'Memory Game Images/toon-dark-magician-girl.jpg'
        },
        {
            name: 'Toon Dark Magician',
            img: 'Memory Game Images/toon-dark-magician.jpg'
        },
        {
            name: 'Toon Dark Magician',
            img: 'Memory Game Images/toon-dark-magician.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardChosen = [];
    let cardChosenId = [];
    let cardsWon = [];

    // Creates all cards on board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'Memory Game Images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Check for match sets two variables to the Id that was set in the createBoard function
    // Then it looks to see if they are the same object
    // If they are then the image turns white and the two cards are pushed as an array onto cardsWon
    // Score is measured by length of array
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const firstCardId = cardChosenId[0];
        const secondCardId = cardChosenId[1];
        console.log(cardsWon.length);
        
        if(cardChosen[0] === cardChosen[1]) {
            alert('You found a match!');
            cards[firstCardId].setAttribute('src', 'Memory Game Images/white.png');
            cards[secondCardId].setAttribute('src', 'Memory Game Images/white.png');
            cardsWon.push(cardChosen);
            console.log(cardsWon);
        } else {
            cards[firstCardId].setAttribute('src', 'Memory Game Images/blank.jpg');
            cards[secondCardId].setAttribute('src', 'Memory Game Images/blank.jpg');
            alert('Sorry Try Again');
        }

        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats! You won!'
        }
    }

    // Function pushes Id of card to cardChosen and cardChosenId arrays
    // Then calls for checkForMatch once two cards are chosen
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})