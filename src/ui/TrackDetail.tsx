import { useTrackDetail } from "../bll/useTrackDetail";
import styles from './trackdetail.module.css'

export type Props = {
    id: string | null
}

export const TrackDetail = ({ id }: Props) => {

    const { selectTrack } = useTrackDetail({ id });

    return (
        <div>
            <h3>Выбранный трек</h3>
            {!id ? (
                'Трек не выбран'
            ) : (
                (id && selectTrack === null) || (id !== selectTrack?.id)
                    ? <div className={styles.gradient_loader}></div>
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