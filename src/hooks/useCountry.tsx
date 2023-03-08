import { useState, useMemo, useEffect } from "react";
import { Country } from "country-state-city";
import { fetchCountries } from "../api/user/user";
import { toast } from "react-hot-toast";

const useFetchCountries = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);

    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    fetchCountries({ signal })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setCountries([...response]);
      })
      .catch((error) => {
        setLoading(false);
        if (signal.aborted) return;
        toast.error(`Error fetching countries: ${error.message}`);
      });
  }, []);

  return { loading, countries };
};

const useCountry = () => {
  const countries = Country.getAllCountries().map((country) => {
    return {
      name: country.name,
      flag: country.flag,
      countryCode: country.isoCode,
    };
  });

  const [selectedCountry, setSelectedCountry] = useState(countries[150]);
  const [queryCountry, setQueryCountry] = useState("");
  const regex = new RegExp(`${queryCountry}`, "gi");

  const filteredCountries = useMemo(() => {
    return queryCountry === ""
      ? countries
      : countries.filter((country) => country.name.match(regex));
  }, [queryCountry]);

  return {
    queryCountry,
    selectedCountry,
    filteredCountries,
    setQueryCountry,
    setSelectedCountry,
  };
};

export default useCountry;
