import { useState } from "react";
import AppHeader from "./components/AppHeader";
import ProductListAndSummery from "./components/ProductListAndSummery";
import data from "./api/data";

function App() {
  const [products, setProducts] = useState(data);
  const [cartProducts, setCartProducts] = useState([]);

  let totalPrice = cartProducts.reduce(
    (total, current) => total + current.price,
    0
  );

  const arr = cartProducts.map((item) => item.title);

  let individualItems = {};
  arr.forEach((item) => {
    if (!individualItems.hasOwnProperty(item)) {
      individualItems[item] = 1;
    } else {
      individualItems[item] = individualItems[item] + 1;
    }
  });
  console.log(individualItems);

  let totalItem = cartProducts.length;

  // add to cart
  const addToCart = (id) => {
    const updatedCartArray = cartProducts.map((item) => item);
    const itemToAdd = products.find((item) => item.id === id);

    updatedCartArray.splice(0, 0, itemToAdd);
    setCartProducts(updatedCartArray);

    // const updatedAllProducts = products.map((item) => {
    //   if (id === item.id) {
    //     return {
    //       ...item,
    //       left: item.left - 1,
    //     };
    //   }
    //   return item;
    // });
    // setProducts(updatedAllProducts);
  };

  // increase same Item
  const increaseCart = (id) => {
    console.log(id);
    addToCart(id);
  };

  // remove from cart
  const removeItem = (id) => {
    const updatedCartArray = cartProducts.map((item) => item);
    const itemToAdd = products.find((item) => item.id === id);
    const index = updatedCartArray.indexOf(itemToAdd);
    updatedCartArray.splice(index, 1);
    setCartProducts(updatedCartArray);

    // const updatedAllProducts = products.map((item) => {
    //   if (id === item.id) {
    //     return {
    //       ...item,
    //       left: item.left + 1,
    //     };
    //   }
    //   return item;
    // });
    // setProducts(updatedAllProducts);
  };

  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <AppHeader />
      <ProductListAndSummery
        products={products}
        cartProducts={cartProducts}
        addToCart={addToCart}
        totalPrice={totalPrice}
        totalItem={totalItem}
        increaseCart={increaseCart}
        removeItem={removeItem}
        individualItems={individualItems}
      />
    </div>
  );
}

export default App;
