import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queueSound, toggleLoopPause } from '../store/actions/soundsActions'

export const PadPreview = ({ sound, currentLoopTime }) => {

    const dispatch = useDispatch() //Redux dispatch hook
    const isLooperRunning = useSelector(state => state.soundsReducer.isLooperRunning) // Tells us if the looper is paused or not
    const queue = useSelector(state => state.soundsReducer.queue) // A queue of all sounds that were clicked before the cycle ended
    const activeSoundsCount = useSelector(state => state.soundsReducer.activeSoundsCount) // How many sounds are currently active
    const [Icon, setIcon] = useState('') // A state for the icon element import

    const audioRef = useRef(null) //Ref for the audio element

    const initializeIcon = useCallback(async () => {//Importing the icon in useCallback to keep referance to function for efficiancy
        const importedIcon = await import(`../assets/img/icons/${sound.iconName}.svg`);
        setIcon(importedIcon.default);
    }, [sound.iconName])

    useEffect(() => { // initialize the pad (audio and icon)
        const file = require(`../assets/sounds/${sound.fileName}`)
        audioRef.current = new Audio(file.default)
        audioRef.current.load()
        audioRef.current.loop = true
        initializeIcon()
    }, [initializeIcon, sound.fileName]);

    useEffect(() => {//Responsible for playing/pausing the audio based on the "isPlaying" state
        if (sound.isPlaying && isLooperRunning) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }
    }, [sound.isPlaying, isLooperRunning])

    useEffect(() => {//Making sure all sounds start and end together
        if (currentLoopTime === 0) {
            audioRef.current.currentTime = 0
        }
    }, [currentLoopTime])

    const onQueueSound = () => {
        if (!isLooperRunning) {//if the looper isn't running and are no active sounds, then activate it (first pad releases the pause basically)
            if (activeSoundsCount === 0) dispatch(toggleLoopPause())
            else return
        }
        dispatch(queueSound(sound._id)) // adds the clicked sound id to the queue object
    }

    const isPending = queue[sound._id]  // calculates if the sound is currently in queue

    const pendingBarHeight = Math.floor(100 - currentLoopTime * 100 / 8000) // height for background bar representing how much time is left for next cycle

    return (
        <div
            className={`pad-preview-wrapper ${isPending ? 'pending' : sound.isPlaying ? 'active' : ''} ${!isLooperRunning ? 'loop-is-paused' : ''}`}
            onClick={onQueueSound}
        >
            {isPending && <div className="pending-bar" style={{ height: `${pendingBarHeight}%` }}></div>}

            <img src={Icon} alt="Pad icon" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
