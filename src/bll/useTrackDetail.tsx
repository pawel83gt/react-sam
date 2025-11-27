import { useState, useEffect } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";

export type Props = {
    id: string | null
}

export function useTrackDetail({ id }: Props) {
    const [selectTrack, setSelectTrack] = useState<GetTrackDetailsOutputData | null>(null);

    useEffect(() => {
        if (id) {
            getTrack(id).then((response) => {
                setSelectTrack(response.data);
            });
        }
    }, [id])

    return { selectTrack };
}

