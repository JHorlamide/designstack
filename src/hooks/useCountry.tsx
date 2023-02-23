import { useState, useMemo } from "react";
import { Country } from "country-state-city";

const useCountry = () => {
  const countries = Country.getAllCountries().map((country) => {
    return {
      name: country.name,
      flag: country.flag,
      countryCode: country.isoCode,
    };
  });

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [queryCountry, setQueryCountry] = useState("");
  const regex = new RegExp(`${queryCountry}`, "gi");

  const filteredCountries = useMemo(() => {
    return queryCountry === ""
      ? countries
      : countries.filter((country) => country.name.match(regex));
  }, [queryCountry]);

  console.log("SelectedCountry: ", selectedCountry.name);

  return {
    queryCountry,
    selectedCountry,
    filteredCountries,
    setQueryCountry,
    setSelectedCountry,
  };
};

export default useCountry;
