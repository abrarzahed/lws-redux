import ProductCard from "./ProductCard";
import Summery from "./Summery";

export default function ProductListAndSummery({
  products,
  cartProducts,
  addToCart,
  increaseCart,
  totalPrice,
  totalItem,
  removeItem,
  individualItems,
}) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
      <Summery
        cartProducts={cartProducts}
        totalPrice={totalPrice}
        totalItem={totalItem}
        increaseCart={increaseCart}
        removeItem={removeItem}
        individualItems={individualItems}
      />
    </div>
  );
}
