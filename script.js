const cardInfo = document.getElementById("card-info")
const cardArea = document.getElementById("card-area")

const baseUrl = 'https://www.deckofcardsapi.com/api/deck/'


let deckId = ''

function shuffleDeck() {
  const action = 'new/shuffle/?deck_count=1'
  axios.get(baseUrl + action).then(resp => {
    deckId = resp.data.deck_id
  });
  cardArea.src = ''
  cardArea.alt = ''
  cardInfo.innerText = "Cards remaining 52"
}
shuffleDeck()

function nextCard() {
  const action = deckId + '/draw/?count=1'
  axios.get(baseUrl + action).then(resp => {
    showCardImage(resp.data)
  });
}

function showCardImage(card) {
  cardInfo.innerText = "Cards remaining: " + card.remaining
  cardArea.src = card.cards[0].image
  cardArea.alt = card.cards[0].code
}
