export default function TotalItems({ totalItem }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">{totalItem}</p>
      </div>
    </div>
  );
}
