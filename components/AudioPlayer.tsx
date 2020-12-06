import React, { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';

interface PropsControls {
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const Controls = ({ isPlaying, setIsPlaying }: PropsControls) => {
    return (
        <main>
            <div className='controls'>
                {/* <button>Prev</button> */}
                <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
                {/* <button>Next</button> */}
            </div>
        </main>
    )
}
//const AudioDetails = () => {}

const AudioPlayer = () => {
    const audioTag = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => isPlaying ? audioTag.current.play() : audioTag.current.pause()  )

    return (
        <main className='player'>
            <audio ref={audioTag} itemType="audio/mpeg">
                <source src="/songs/40to1.mp3"/>
            </audio>
            <Controls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} />
            <p>{isPlaying.toString()}</p>
        </main>
    );
}
 
export default AudioPlayer;