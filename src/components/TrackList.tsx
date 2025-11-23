import { useState, useEffect } from 'react';
import { TrackItem } from './TrackItem';

interface Track {
  id: number;
  attributes: {
    title: string;
    attachments: [
      {
        url: string;
      }
    ];
  };
}

export const TrackList = ({ onSelectTrack, selectTrackId }) => {
  const [data, setData] = useState<Track[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
        {
          headers: {
            'api-key': 'bec399a0-ffa4-41d0-89c1-d7badc2ab952',
          },
        }
      ).then((response) => response.json());
      setData(response.data);
    };

    fetchData();
  }, []);

  const handleClick = (trackId) => {
    onSelectTrack?.(trackId);
  };

  if (!data) {
    return (
      <div className="center-block">
        <div className="gradient-loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <h1>Musicfun Player!</h1>
        <ul>
          {data.map((track) => {
            return (
              <TrackItem
                key={track.id}
                track={track}
                isSelectedTrack={track.id === selectTrackId}
                onSelect={handleClick}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
