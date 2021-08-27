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

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'Memory Game Images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const firstCardId = cardChosen[0];
        const secondCardId = cardChosen[1];
        
        if(cardChosen[0] === cardChosen[1]) {
            alert('You found a match!');
            cards[firstCardId].setAttribute('src', 'Memory Game Images/white.png');
            cards[secondCardId].setAttribute('src', 'Memory Game Images/white.png');
            cardsWon.push(cardChosen);
        } else {
            cards[firstCardId].setAttribute('src', 'Memory Game Images/blank.jpg');
            cards[secondCardId].setAttribute('src', 'Memory Game Images/blank.jpg');
            alert('Sorry Try Again');
        }

        cardsChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats! You won!'
        }
    }

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