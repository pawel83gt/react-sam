import { useState, useEffect } from 'react';
import { TrackList } from './components/TrackList';
import { TrackDetail } from './components/TrackDetail';

function App() {

  const [selectedTrack, setSelectedTrack] = useState(null);
  return (
    <div className="general-block">
      <TrackList onSelectTrack={setSelectedTrack} />
      <TrackDetail track={selectedTrack} />
    </div>
  );
}

export default App;
