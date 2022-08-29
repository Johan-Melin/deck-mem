const cardInfo = document.getElementById("card-info")
const cardArea = document.getElementById("card-area")

const baseUrl = 'https://www.deckofcardsapi.com/api/deck/'

let index = 0
let deckOfCards = []

axios.get(baseUrl + 'new/draw/?count=52').then(resp => {
  deckOfCards = resp.data.cards
})

function nextCard() {
  showCardImage(deckOfCards[index++])
}

function resetDeck() {
  index = 0
  showIndex()
  resetCard()
}

function shuffleDeck() {
  index = 0
  deckOfCards.sort(function(a, b){return 0.5 - Math.random()});
  showIndex()
  resetCard()
}

function showCardImage(card) {
  showIndex()
  cardArea.src = index === 0 ? '' : card.image
  cardArea.alt = index === 0 ? '' : card.code
}

function showIndex() {
  cardInfo.innerText = 'Card ' + index +' of 52'
}

function resetCard() {
  cardArea.src = ''
  cardArea.alt = ''
}