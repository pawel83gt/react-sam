import { useState, useEffect } from 'react';

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

function App() {
  const [data, setData] = useState<Track[] | null>(null);
  const [selectTrackId, setSelectTrackId] = useState<number>();
  const [selectTrack, setSelectTrack] = useState(null);

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

  if (!data) {
    return (
      <div className="center-block">
        <div className="gradient-loader"></div>
      </div>
    );
  }

  return (
    <div>
      <h1>Musicfun Player!</h1>
      <div className="wrapper">
        <ul>
          {data.map((track) => {
            return (
              <div
                key={track.id}
                onClick={() => {
                  setSelectTrackId(track.id);
                  fetch(
                    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
                      track.id,
                    {
                      headers: {
                        'api-key': 'bec399a0-ffa4-41d0-89c1-d7badc2ab952',
                      },
                    }
                  )
                    .then((response) => response.json())
                    .then((response) => {
                      setSelectTrack(response.data);
                    });
                }}
              >
                <li>
                  <div className={selectTrackId === track.id ? 'active' : ''}>
                    {track.attributes.title}
                  </div>
                  <audio
                    src={track.attributes.attachments[0].url}
                    controls
                  ></audio>
                </li>
              </div>
            );
          })}
        </ul>
        <div>
          <h3>Выбранный трек</h3>
          {selectTrack === null ? (
            'Трек не выбран'
          ) : (
            <div
              className={
                (selectTrackId && selectTrack === null) ||
                (selectTrackId && selectTrack.id !== selectTrackId)
                  ? 'gradient-loader'
                  : ''
              }
            >
              <div>{selectTrack.attributes.title}</div>
              <p>
                {selectTrack.attributes.lyrics === null
                  ? 'Текст отсутствует'
                  : selectTrack.attributes.lyrics}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
