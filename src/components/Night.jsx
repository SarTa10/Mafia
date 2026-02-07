import { useRef, useState } from "react";
import nightSound from '../assets/night_sound.mp3';

const Night = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const nightSoundRef = useRef(new Audio(nightSound));
    
    nightSoundRef.current.onended = () => {
        nightSoundRef.current.play();
    };

    const toggleMusic = () => {
        setIsPlaying(prev => !prev);

        if (!isPlaying) {
            nightSoundRef.current.play();
        } else {
            nightSoundRef.current.pause();
            nightSoundRef.current.currentTime = 0;
        }
    }

    return (
        <>
            <button onClick={toggleMusic} >{isPlaying ? "Stop" : "Play"}</button>
        </>
    )
}

export default Night;