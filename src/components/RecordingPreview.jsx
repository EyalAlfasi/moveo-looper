import React, { useEffect, useRef, useState } from 'react'

export const RecordingPreview = ({ recording, idx }) => {

    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current = new Audio(recording.src)
        audioRef.current.load()
        audioRef.current.loop = true
    }, [])

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }, [isPlaying])

    return (
        <div className="recording-preview-wrapper flex align-center space-between">
            <h3>Recording {idx}</h3>
            <i
                onClick={() => setIsPlaying(prev => !prev)}
                className={`icon-button fa ${!isPlaying ? 'fa-play' : 'fa-pause'}`}
            ></i>
        </div>
    )
}
