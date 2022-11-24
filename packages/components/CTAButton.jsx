export default function CTAButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="max-w-fit bg-orange-700 p-2 font-black cursor-pointer text-zinc-900"
    >
      {children}
    </button>
  );
}
