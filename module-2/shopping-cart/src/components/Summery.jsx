import SummeryCard from "./SummeryCard";
import TotalItems from "./TotalItems";
import TotalPrice from "./TotalPrice";

export default function Summery({
  cartProducts,
  totalPrice,
  totalItem,
  increaseCart,
  removeItem,
  individualItems,
}) {
  const unique = [...new Set(cartProducts)];

  console.log("UNIQUE:IDS ", unique);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {unique.map((item, i) => (
          <SummeryCard
            key={i}
            product={item}
            increaseCart={increaseCart}
            removeItem={removeItem}
            individualItems={individualItems}
          />
        ))}
        <TotalItems totalItem={totalItem} />
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}
