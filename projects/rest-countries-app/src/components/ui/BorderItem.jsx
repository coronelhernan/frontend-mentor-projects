export default function BorderItem({ item }) {
  return (
    <button
      className="flex bg-[var(--color-surface)] text-[var(--color-text)]
      py-1 px-4 gap-4 rounded-xs
      hover:opacity-80 transition"
      style={{boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
    >
      {item.name}
    </button>
  );
}
