const cardArea = document.getElementById("card-area")

const url = 'https://www.deckofcardsapi.com/api/deck/new/draw/?count=2'

axios.get(url).then(resp => {
    showCard(resp.data);
});

function showCard(card){
  let img = document.createElement("img");
  img.src = card.cards[0].image;
  img.alt = card.cards[0].code;
  document.body.appendChild(img);
}
