import { useState, useEffect } from 'react';
import { getTraks, type Tracks } from "../dal/api";
export function useTracks() {
  const [data, setData] = useState<Array<Tracks> | null>(null);

  useEffect(() => {
    getTraks().then((response) => {
      setData(response.data);
    })
  }, []);

  return { data }
}