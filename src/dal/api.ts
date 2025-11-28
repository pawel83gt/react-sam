type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}
export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    };
}
export const getTrack = (id: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
        id,
        {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY,
            },
        }
    ).then((response) => response.json())

    return promise
}



type AttachmentsDTO = { url: string;}

type TrackListItemOutputAttributes = {
  title: string;
  attachments: Array<AttachmentsDTO>;
}

export type Tracks = {
  id: string;
  attributes: TrackListItemOutputAttributes
}

type GetTrackListOutputData = {
    data: Array<Tracks>
}

//данная функция возвращает data типизированная массивом Tracks
export const getTraks = (): Promise<GetTrackListOutputData> => {
    return fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
        {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY,
            },
        }
    ).then((response) => response.json())
}