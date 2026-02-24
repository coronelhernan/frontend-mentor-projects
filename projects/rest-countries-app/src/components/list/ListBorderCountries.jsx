import BorderItem from "../ui/BorderItem";

export default function ListBorderCountries({ array = []}) {
  return (
    <ul className="list-countries flex flex-wrap gap-4 mb-12">
      {array.map((item, index) => (
        <BorderItem key={index} item={item} />
      ))}
    </ul>
  );
}
