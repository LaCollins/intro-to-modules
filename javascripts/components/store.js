import cart from './cart.js';
import utilities from '../helpers/utilities.js';

const bookInfo = {
    price: 24.99,
    title: "Fifty Shades of Chicken",
    image: "./assets/images/book.jpg"
  };
  
const addToCartEvent = () => {
    cart.setCart(bookInfo);
    cart.cartToDom();
};

const makeStore = () => {
    let domString = '<h2>Our only book:</h2>';
    domString += '<p>Buy it now:</p>';
    domString += `<h3>$${bookInfo.price}</h3>`;
    domString += `<img src="${bookInfo.image}" alt="book cover" />`;
    domString += '<button class="btn btn-danger col-12" id="cart-button">Add to Card</button>';
    utilities.printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

// export default { makeStore: makeStore };

export default { makeStore };