import { TrackItem } from './TrackItem';
import { useTracks } from '../bll/useTracks';
import styles from './tracklist.module.css'

type Props = {
  onSelectTrack: (trackId: string) => void;
  selectTrackId: string | null;
}

export const TrackList = ({ onSelectTrack, selectTrackId }: Props) => {

  const { data } = useTracks();

  const handleClick = (trackId: string) => {
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
        <div className={styles.tracks}>
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
        </div>
      </div>
    </>
  );
};
