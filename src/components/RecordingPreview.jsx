import React, { useEffect, useMemo, useRef, useState } from 'react'

export const RecordingPreview = ({ recording, idx }) => {// Gets recording item and item number (index in the array)


    const [isPlaying, setIsPlaying] = useState(false) // Boolean state for playing audio
    const [cycleIdx, setCycleIdx] = useState(0) // Every recording is an array of cycles, each cycle is an array of sounds
    const [cycleTime, setCycleTime] = useState(0) // A timer state running from 0 to 8 seconds (in milliseconds)
    const cycleIntervalRef = useRef(null) //Using ref for saving the cycleTime interval id so it wont get lost on re-render

    const currentCycleSounds = useMemo(() => { // returns a memoized array of the current cycle sounds by the cycle index
        return recording.orderOfSounds[cycleIdx]
    }, [cycleIdx, recording.orderOfSounds])

    useEffect(() => {
        if (isPlaying) { // If the recording is playing, then set an interval that updates 
            //the current time on the cycleTime state
            cycleIntervalRef.current = setInterval(() => {
                setCycleTime((prevTime) => (prevTime + 10) % 8000)
            }, 10);
        } else {
            clearInterval(cycleIntervalRef.current)
            setCycleTime(0)
            setCycleIdx(0)
        }
    }, [isPlaying])

    useEffect(() => { // When we reach to the last cycle of the recording, go back to the first cycle
        if (cycleTime >= 7990) {
            setCycleIdx((prev) => {
                return prev === recording.orderOfSounds.length - 1 ? 0 : prev + 1
            })
        }
    }, [cycleTime, recording.orderOfSounds.length])

    useEffect(() => {// Captures all audio elements that belong to this recording (and current cycle)
        // (there are also other recordings and audio elements in the dom so I gave a uniqe className)
        // and based on the "isPlaying" state, play or pause them
        const audioElements = document.querySelectorAll(`.audio_${recording._id}`)
        audioElements.forEach(audioEl => {
            if (isPlaying) {
                audioEl.load()
                audioEl.loop = true
                audioEl.play()
            } else {
                audioEl.pause()
                audioEl.currentTime = 0
            }
        })
    }, [isPlaying, cycleIdx, recording._id])

    return (
        <div className="recording-preview-wrapper flex align-center space-between">
            <h3>Recording {idx}</h3>
            <i
                onClick={() => setIsPlaying(prev => !prev)}
                className={`icon-button fa ${!isPlaying ? 'fa-play' : 'fa-pause'}`}
            ></i>
            {
                currentCycleSounds.map((sound, idx) => { // Render the current cycle's sounds
                    const file = require(`../assets/sounds/${sound.fileName}`)
                    return <audio className={`audio_${recording._id}`} key={idx}>
                        <source src={file.default} type="audio/mpeg" />
                    </audio>
                })
            }
        </div>
    )
}
