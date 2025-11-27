import { type Tracks } from "../dal/api";
import clsx from 'clsx'
import styles from './trackitem.module.css'

type Props = {
  onSelect: (trackId: string) => void;
  isSelectedTrack: boolean;
  track: Tracks
}
export const TrackItem = ({ onSelect, isSelectedTrack, track }: Props) => {
  const handleClick = () => onSelect?.(track.id);

  const className = clsx({[styles.default]:true, [styles.active]: isSelectedTrack})

  return (
    <div className={className}>
      <div onClick={handleClick}>
        <div>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
      </div>
    </div>
  );
};
