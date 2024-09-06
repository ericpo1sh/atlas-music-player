import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex self-center mt-12">
      <div>
        <CurrentlyPlaying/>
      </div>
      <div className="ml-4">
        <Playlist/>
      </div>
    </div>
  ) 
}
