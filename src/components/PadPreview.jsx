import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queueSound, toggleLoopPause } from '../store/actions/soundsActions'

export const PadPreview = ({ sound, currentLoopTime }) => {

    const dispatch = useDispatch()
    const isLooperRunning = useSelector(state => state.soundsReducer.isLooperRunning)
    const queue = useSelector(state => state.soundsReducer.queue)
    const activeSoundsCount = useSelector(state => state.soundsReducer.activeSoundsCount)
    const [Icon, setIcon] = useState('');

    const audioRef = useRef(null)

    const initializeIcon = useCallback(async () => {
        const importedIcon = await import(`../assets/img/icons/${sound.iconName}.svg`);
        setIcon(importedIcon.default);
    }, [sound.iconName])

    useEffect(() => {
        const file = require(`../assets/sounds/${sound.fileName}`)
        audioRef.current = new Audio(file.default)
        audioRef.current.load()
        audioRef.current.loop = true
        initializeIcon()
    }, [initializeIcon, sound.fileName]);

    useEffect(() => {
        if (sound.isPlaying && isLooperRunning) {
            audioRef.current.currentTime = currentLoopTime / 1000
            audioRef.current.play()
        } else {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }
    }, [sound.isPlaying, isLooperRunning])


    const onQueueSound = () => {
        if (!isLooperRunning) {
            console.log(activeSoundsCount);
            if (activeSoundsCount === 0) dispatch(toggleLoopPause())
            else return
        }
        dispatch(queueSound(sound._id))
    }

    const isPending = queue[sound._id] && !sound.isPlaying

    const pendingBarHeight = Math.floor(100 - currentLoopTime * 100 / 8000)

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
