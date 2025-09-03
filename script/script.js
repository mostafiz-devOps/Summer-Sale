
let orderCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function () {
        const productName = card.querySelector("h3").innerText;

        const productPrice = parseFloat(card.querySelector("h4").innerText.split(" ")[0]);
        console.log(productPrice);

        const orderContainer = document.getElementById('order-summary');
        const p = document.createElement('p');
        p.innerText = orderCount + ". " + productName;
        orderContainer.appendChild(p);
        orderCount++;

        totalPrice += productPrice;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2) + " TK";
    })
}