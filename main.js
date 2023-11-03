
let sum = 0
let cards = []

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Sasi",
    chips: 150
}
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : $" + player.chips

function randomCard()
{
    let val = Math.floor(Math.random()*13)+1
    if(val>10)
    {
        val = 10
    }
    if(val==1)
    {
        val =11
    }
    return val
}

function startGame()
{
    isAlive = true

    let firstCard = randomCard()
    let secondCard = randomCard()

    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame()
{   
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++)
    {   
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw a new card♠️?"
    } else if(sum === 21){
        message = "You've got a BlackJack!!!"
        hasBlackJack = true
    } else 
    {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if(isAlive==true && hasBlackJack==false)
    {
        let card = randomCard()
        sum += card
        cards.push(card)

        renderGame()
        console.log("Drawing a new card from the deck")
    }
}