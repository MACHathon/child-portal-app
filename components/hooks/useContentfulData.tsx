import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CF_SPACE_ID as string,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN as string,
});

function useContentfulData<T>(contentId: string, region: string): [T, boolean] {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntry(contentId, { locale: region }).then((entry) => {
      setData(entry as any);
      console.log(process.env.CF_SPACE_ID);
      setLoading(false);
    });
  }, [contentId, region]);
  return [data, loading];
}

export { useContentfulData };
