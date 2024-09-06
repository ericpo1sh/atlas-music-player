import CoverArt from "./components/CoverArt";
import SongTitle from "./components/SongTitle";
import PlayControls from "./components/PlayControls"
import VolumeControls from "./components/VolumeControls";
import PlayListItem from "./components/PlayListItem";

export default function MusicPlayer() {
  return (
    <div className="flex self-center mt-12">
      <div>
        <CoverArt/>
        <SongTitle/>
        <PlayControls/>
        <VolumeControls/>
      </div>
      <div className="ml-4">
        <PlayListItem/>
      </div>
    </div>
  ) 
}
