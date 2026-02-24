export default function CountryCard({ image, name, population, region, capital }) {
  return (
    <li className="w-4/5 bg-dark-secondary grid grid-rows-[150px_auto] rounded-md overflow-hidden">
      <img 
        src={image} 
        alt={`Flag of ${name}`} 
        className="w-full h-full object-cover"
      />

      <div className="px-8 py-6 space-y-2 lg:px-6 lg:py-12">
        <h3 className="text-dark-text font-bold text-xl">{name}</h3>
        <p className="text-dark-text text-base *:
        lg:text-sm
        ">
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p className="text-dark-text text-base
        lg:text-sm
        ">
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p className="text-dark-text text-base
        lg:text-sm
        ">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </li>
  )
}
