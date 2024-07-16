let para = document.getElementsByTagName("p")




function displayCard(){
    let card = document.createElement("div")
    let cardHeader = document.createElement("div")
    const img = document.createElement('img');
    img.src = 'notes.png';
    img.alt = 'Card Image';
    img.className = 'card-header-image';

// Append the image to the card header
    cardHeader.appendChild(img);

    cardHeader.classList.add("card-header")
    let h4 = document.createElement("h4")
    h4.innerHTML = "Sticky Notes"
    cardHeader.appendChild(h4)

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    let p = document.createElement("p")
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus"
    cardBody.appendChild(p)
    card.appendChild(cardHeader)
    card.appendChild(cardBody)
    document.body.appendChild(card)
}
displayCard()