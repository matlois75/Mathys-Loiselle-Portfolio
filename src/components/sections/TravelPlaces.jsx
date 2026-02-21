import Flag from "../common/Flag";

const TravelPlaces = () => {
  const places = [
    {
      region: "Europe",
      countries: [
        { name: "Switzerland", iso: "ch" },
        { name: "France", iso: "fr" },
        { name: "Italy", iso: "it" },
        { name: "Spain", iso: "es" },
        { name: "United Kingdom", iso: "gb" },
      ],
    },
    {
      region: "North America",
      countries: [
        { name: "Canada", iso: "ca" },
        { name: "United States", iso: "us" },
        { name: "Mexico", iso: "mx" },
        { name: "Costa Rica", iso: "cr" },
      ],
    },
    {
      region: "Asia",
      countries: [{ name: "Vietnam", iso: "vn" }],
    },
    {
      region: "Africa",
      countries: [{ name: "Morocco", iso: "ma" }],
    },
  ];

  return (
    <div className="p-4 rounded-lg">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {places.map((region, index) => (
          <div key={index} className="space-y-2 md:w-1/4">
            <h5 className="text-h4 font-semibold pb-1">{region.region}</h5>
            <ul className="space-y-1">
              {region.countries.map((country, countryIndex) => (
                <li key={countryIndex} className="text-p flex items-center">
                  <Flag iso={country.iso} alt={`${country.name} flag`} />
                  <span>{country.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3">
        <p className="text-p text-center opacity-70">
          <span className="font-medium">
            {places.reduce(
              (total, region) => total + region.countries.length,
              0,
            )}
          </span>{" "}
          countries across <span className="font-medium">{places.length}</span>{" "}
          continents
        </p>
      </div>
    </div>
  );
};

export default TravelPlaces;
