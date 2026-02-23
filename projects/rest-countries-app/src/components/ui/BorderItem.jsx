export default function BorderItem( {item} ) {
  return (
    <button className="flex bg-dark-secondary py-1 px-4 text-dark-text gap-4 rounded-xs">
      {item}
    </button>
  );
}
