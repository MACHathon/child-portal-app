import { Countries } from "context/country-context/country-context";
import { useContext } from "react";
import { Country } from "types/country";

export const useCountries = (): [
  Country[],
  Country,
  (country: Country) => void
] => {
  const context = useContext(Countries);
  return [
    context.countries,
    context.selectedCountry,
    (country: Country) => context.selectedCountryItem(country),
  ];
};
