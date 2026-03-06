import { useParams } from "react-router-dom";
import Navbar from "../components/sections/Navbar";
import CountryDetail from "../components/ui/CountryDetail";
import { useCountry } from "../hooks/useCountry";

export default function Detail() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const { country, loading, error } = useCountry(decodedName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>Country not found</p>;

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Navbar />
      <CountryDetail country={country} />
    </div>
  );
}
