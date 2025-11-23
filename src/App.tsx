import { useState, useEffect } from 'react';
import { TrackList } from './components/TrackList';
import { TrackDetail } from './components/TrackDetail';

function App() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackSelect = (id) => {
    setSelectedTrack(id);
  };
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
