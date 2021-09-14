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

export const Countries = createContext<Countries>({} as Countries);

const CountryProvider: React.FC<Props> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const selectedCountryItem = (country: Country): void => {
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
