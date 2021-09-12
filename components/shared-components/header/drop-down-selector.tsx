import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

import { Country } from "types/country";
import { useCountries } from "@/components/hooks/useCountries";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import { TypeComponentHeader } from "types/TypeComponentHeader";

const DropDownSelector: NextPage = (): JSX.Element => {
  const [countries, selectedCountry, setCountry] = useCountries();
  const MotionBox = motion(Box);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [data, isLoading] = useContentfulData<TypeComponentHeader>(
    "3L7ODj3p4laQiOOrWnScoZ"
  );
  const toggleSelect = (): void => {
    setIsListOpen((prevState) => !prevState);
  };

  const selectedCountryItem = (name: string): void => {
    const selectedCountry = countries.filter((c) => c.country === name)[0];

    console.warn(selectedCountry);
    setCountry(selectedCountry);
    setIsListOpen(false);
  };

  return (
    <Box
      position="relative"
      fontFamily="Raleway"
      tabIndex={0}
      onBlur={() => setIsListOpen(false)}
    >
      <Box cursor="pointer" d="flex" alignItems="center" onClick={toggleSelect}>
        <Text
          fontSize={{ base: "0px", md: "18px", lg: "18px" }}
          marginRight="25px"
        >
          {data.fields?.countrySelectorLabel}
        </Text>
        <Image
          src={selectedCountry?.icon}
          alt="country"
          height="34px"
          width="34px"
        />
        <Text fontSize="24px" marginLeft="5px">
          <FiChevronDown />
        </Text>
      </Box>
      {isListOpen && (
        <MotionBox position="absolute">
          {countries.map((country: Country, index: number) => {
            return (
              <Box
                d="flex"
                width="100%"
                cursor="pointer"
                marginBottom="5px"
                key={index}
                onClick={() => selectedCountryItem(country.country)}
              >
                <Image marginRight="10px" src={country.icon} alt="country" />
                <Text fontSize="18px">{country.country} </Text>
              </Box>
            );
          })}
        </MotionBox>
      )}
    </Box>
  );
};

export default DropDownSelector;
