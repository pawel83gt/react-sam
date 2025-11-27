import { useSelectedTrack } from './bll/useSelectedTrack';
import { TrackList } from './ui/TrackList';
import { TrackDetail } from './ui/TrackDetail';



function App() {

  const { selectedTrack, handleTrackSelect } = useSelectedTrack();

  return (
    <div className="general-block">
      <TrackList
        onSelectTrack={handleTrackSelect}
        selectTrackId={selectedTrack}
      />
      <TrackDetail id={selectedTrack} />
    </div>
  );
}

export default App;
