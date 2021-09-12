import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { useCountries } from "./useCountries";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN as string,
});

function useContentfulData<T>(contentId: string): [T, boolean] {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const [countries, selectedCountry, setCountry] = useCountries();

  useEffect(() => {
    client
      .getEntry(contentId, { locale: selectedCountry.isoLocale })
      .then((entry) => {
        setData(entry as any);
        setLoading(false);
      });
  }, [contentId, selectedCountry]);
  return [data, loading];
}

export { useContentfulData };
