let orderCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    const productName = card.querySelector("h3").innerText;

    const productPrice = parseFloat(
      card.querySelector("h4").innerText.split(" ")[0]
    );
    console.log(productPrice);

    const orderContainer = document.getElementById("order-summary");
    const p = document.createElement("p");
    p.innerText = orderCount + ". " + productName;
    orderContainer.appendChild(p);
    orderCount++;

    totalPrice += productPrice;
    document.getElementById("total-price").innerText =
      totalPrice.toFixed(2) + " TK";
  });
}

const btn = document.getElementById("apply-coupon");
btn.addEventListener("click", function () {
  const couponInput = document.getElementById("coupon-code");
  const couponCode = couponInput.value;

  if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
      const discount = document.getElementById("discount-id");
      const discountAmount = totalPrice * 0.2; // 20% discount
      discount.innerText = discountAmount.toFixed(2) + " TK";

      const finalPrice = document.getElementById("final-price");
      finalPrice.innerText = (totalPrice - discountAmount).toFixed(2) + " TK";
      alert("Coupon applied successfully!");
      couponInput.value = "";
    } else {
      alert("Invalid coupon code.");
    }
  } else {
    alert("You need to order at least 200 TK to apply a coupon.");
  }
});
