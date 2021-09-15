import { createContext, useState, ReactNode } from "react";

import { Country } from "types/country";

const countries: Country[] = [
  {
    country: "United Kingdom",
    icon: "../../icons/united-kingdom.svg",
    isoLocale: "en-GB",
  },
  {
    country: "Germany",
    icon: "../../icons/germany.svg",
    isoLocale: "de-DE",
  },
];

interface Props {
  children: ReactNode;
}

interface Countries {
  countries: Country[];
  selectedCountry: Country;
  selectedCountryItem: (country: Country) => void;
}
const getInitialLocale = () => {
  const previousLocale =
    typeof window !== "undefined" ? localStorage.getItem("locale") : null;
  return previousLocale ?? createInitialLocal();
};

const setPersistedLocale = (locale: string) => {
  localStorage.setItem("locale", locale);
};

const createInitialLocal = () => {
  const initialLocale = countries[0];
  if (typeof window !== "undefined") {
    setPersistedLocale(initialLocale.isoLocale);
  }
  return initialLocale;
};

export const Countries = createContext<Countries>({} as Countries);

const CountryProvider: React.FC<Props> = ({ children }) => {
  const initialLocale = getInitialLocale();
  const initialCountry = countries.filter(
    (c) => c.isoLocale === initialLocale
  )[0];

  const [selectedCountry, setSelectedCountry] =
    useState<Country>(initialCountry);

  const selectedCountryItem = (country: Country): void => {
    setPersistedLocale(country.isoLocale);
    setSelectedCountry(country);
  };

  return (
    <Countries.Provider
      value={{
        countries,
        selectedCountry,
        selectedCountryItem,
      }}
    >
      {children}
    </Countries.Provider>
  );
};

export default CountryProvider;
