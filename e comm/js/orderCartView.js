class OrderCartView {
  parentEl = document.querySelector(".cartDiv");
  renderOrder(order, currProd) {
    const markup = `
    <div>
    <div>
    <img
        src="./images/image-product-${currProd}-thumbnail.jpg"
        alt=""
        class="cartImage"
    />
    <div>
        <p>Fall Limitied Edition Sneakers</p>
        <p>$125.00 x ${order} <span>$${order * 125}</span></p>
    </div>
    </div>
    <img src="./images/icon-delete.svg" alt="" class="closeCart"/>
    </div>
    <button>Checkout</button>
`;
    this.parentEl.innerHTML = "";
    this.parentEl.insertAdjacentHTML("beforeend", markup);
  }
}

export default new OrderCartView();
