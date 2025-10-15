import React from "react";
import Flag from "../common/Flag";

const TravelPlaces = () => {
  const places = [
    {
      region: "Europe",
      countries: [
        { name: "Switzerland", iso: "ch", years: "2025" },
        { name: "France", iso: "fr", years: "2015, 2017, 2024" },
        { name: "Italy", iso: "it", years: "2017" },
        { name: "Spain", iso: "es", years: "2017" },
        { name: "United Kingdom", iso: "gb", years: "2017" },
      ],
    },
    {
      region: "North America",
      countries: [
        { name: "Canada", iso: "ca", years: "2004-2013,\u00A02022-present", nowrap: true },
        { name: "United States", iso: "us", years: "2013-2022" },
        { name: "Mexico", iso: "mx", years: "2019" },
        { name: "Costa Rica", iso: "cr", years: "2007, 2011" },
      ],
    },
    {
      region: "Asia",
      countries: [{ name: "Vietnam", iso: "vn", years: "2018" }],
    },
    {
      region: "Africa",
      countries: [{ name: "Morocco", iso: "ma", years: "2025" }],
    },
  ];

  // Render years with lighter numbers and more visible hyphens
  const renderYears = (years) => {
    // Split by comma first to preserve separate year groups
    const groups = years.split(/,\s*/);
    return (
      <>
        (
        {groups.map((group, gi) => {
          if (group.includes("-")) {
            const parts = group.split("-");
            return (
              <React.Fragment key={gi}>
                {parts.map((p, pi) => (
                  <React.Fragment key={pi}>
                    <span className="opacity-50">{p}</span>
                    {pi < parts.length - 1 && (
                      <span className="opacity-80">-</span>
                    )}
                  </React.Fragment>
                ))}
                {gi < groups.length - 1 && ", "}
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={gi}>
              <span className="opacity-50">{group}</span>
              {gi < groups.length - 1 && ", "}
            </React.Fragment>
          );
        })}
        )
      </>
    );
  };

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
                  <span className={country.nowrap ? "whitespace-nowrap" : undefined}>
                    {country.name} {renderYears(country.years)}
                  </span>
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
              0
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
