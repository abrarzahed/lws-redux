export default function Button({ label, action, bgColor }) {
  return (
    <button
      onClick={action}
      className={`bg-${bgColor}-400 text-white px-3 py-2 rounded shadow`}
    >
      {label}
    </button>
  );
}
