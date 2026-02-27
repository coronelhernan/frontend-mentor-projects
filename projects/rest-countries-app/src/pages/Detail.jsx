import { useParams } from "react-router-dom";
import countries from "../../data/data.json";
import CountryDetail from "../components/ui/CountryDetail";

export default function Detail() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const country = countries.find(
    (c) => c.name === decodedName
  );

  if (!country) return <p>Country not found</p>;

  return (
		<div>
  		<CountryDetail country={country} />
		</div>
	);
}
