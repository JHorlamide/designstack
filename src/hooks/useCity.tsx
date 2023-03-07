import { useState, useMemo } from "react";
import { City } from "country-state-city";

const useCity = (countryCode: string) => {
  const cities = City.getCitiesOfCountry(countryCode)?.map((city) => city.name);

  const [selectedCity, setSelectedCity] = useState(cities? cities[0] : []);
  const [queryCities, setQueryCities] = useState("");
  const regex = new RegExp(`${queryCities}`, "gi");

  const filteredCities = useMemo(() => {
    return queryCities === ""
      ? cities
      : cities?.filter((city) => city.match(regex));
  }, [queryCities, countryCode]);

  return {
    selectedCity,
    setSelectedCity,
    queryCities,
    setQueryCities,
    filteredCities,
  };
};

export default useCity;
