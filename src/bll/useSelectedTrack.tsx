import { useState } from "react";
export const useSelectedTrack = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null): void => {
    setSelectedTrack(id);
  };

  return { selectedTrack, handleTrackSelect };
};