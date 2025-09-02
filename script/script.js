
let orderCount = 1;
const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function () {
        const productName = card.querySelector('h3').innerText;

        const productPrice = card.querySelector('p').innerTex;

        const orderContainer = document.getElementById('order-summary');
        const p = document.createElement('p');
        p.innerText = orderCount + ". " + productName;
        orderContainer.appendChild(p);
        orderCount++;

    })
}