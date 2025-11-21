import { useState, useEffect } from "react";

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

export const TrackList = ({ onSelectTrack }) => {

    const [data, setData] = useState<Track[] | null>(null);
    const [selectTrackId, setSelectTrackId] = useState<number>();

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
        <>
            <div className="wrapper">
                <h1>Musicfun Player!</h1>
                <ul>
                    {data.map((track) => {
                        return (
                            <li>
                                <div
                                    key={track.id}
                                    onClick={() => {
                                        setSelectTrackId(track.id);
                                        onSelectTrack(track.id);
                                    }}
                                >
                                    <div className={selectTrackId === track.id ? 'active' : ''}>
                                        {track.attributes.title}
                                    </div>
                                    <audio
                                        src={track.attributes.attachments[0].url}
                                        controls
                                    ></audio>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>

    )
}