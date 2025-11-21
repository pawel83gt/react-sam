import { useState, useEffect } from "react";

export const TrackDetail = (track) => {

    const [selectTrack, setSelectTrack] = useState(null);

    useEffect(() => {
        if (track.track) {

            fetch(
                'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
                track.track,
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
        }

    }, [track.track])

    return (
        <div>
            <h3>Выбранный трек</h3>
            {!track.track ? (
                'Трек не выбран'
            ) : (
                (track.track && selectTrack === null) || (track.track !== selectTrack.id)
                    ? <div className={'gradient-loader'}></div>
                    : (<div>
                        <div>{selectTrack.attributes.title}</div>
                        <p>
                            {selectTrack.attributes.lyrics === null
                                ? 'Текст отсутствует'
                                : selectTrack.attributes.lyrics}
                        </p>
                    </div>)
            )} 
        </div>
    )
}