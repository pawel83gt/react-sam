export const TrackItem = ({ onSelect, isSelectedTrack, track }) => {
  const handleClick = () => onSelect?.(track.id);
  return (
    <li className={isSelectedTrack ? 'active' : ''}>
      <div onClick={handleClick}>
        <div>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
      </div>
    </li>
  );
};
