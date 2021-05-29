import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PadsList } from '../components/PadsList'
import { useRecordAudio } from '../custom-hooks/useRecordAudio'
import {
    loadSounds,
    playAllSounds,
    playSoundsInQueue,
    resetLooper,
    toggleLoopPause
} from '../store/actions/soundsActions'

export const LooperApp = () => {

    const dispatch = useDispatch()
    
    const sounds = useSelector(state => state.soundsReducer.sounds)
    const isLooperRunning = useSelector(state => state.soundsReducer.isLooperRunning)

    const loopTimeIntervalRef = useRef(null)

    const [currentLoopTime, setCurrentLoopTime] = useState(0)
    const [startRecording, stopRecording] = useRecordAudio()

    useEffect(() => {
        dispatch(loadSounds())
    }, [dispatch])

    useEffect(() => {
        if (isLooperRunning) {
            loopTimeIntervalRef.current = setInterval(() => {
                setCurrentLoopTime((prevTime) => (prevTime + 10) % 8000)
            }, 10);
        } else {
            clearInterval(loopTimeIntervalRef.current)
        }
        return () => clearInterval(loopTimeIntervalRef.current)
    }, [isLooperRunning])

    useEffect(() => {
        if (currentLoopTime >= 7990) dispatch(playSoundsInQueue())
    }, [currentLoopTime, dispatch])

    const onPlayAllSounds = () => {
        if (!isLooperRunning) dispatch(toggleLoopPause())
        dispatch(playAllSounds())
    }

    const onToggleLoopPause = () => {
        clearInterval(loopTimeIntervalRef.current)
        dispatch(toggleLoopPause())
    }

    const onResetAll = () => {
        clearInterval(loopTimeIntervalRef.current)
        setCurrentLoopTime(0)
        dispatch(resetLooper())
    }

    return (
        <div className="looper-app-wrapper flex column space-between">
            <Header />
            <PadsList
                sounds={sounds}
                currentLoopTime={currentLoopTime}
            />
            <Footer
                onToggleLoopPause={onToggleLoopPause}
                onResetAll={onResetAll}
                onPlayAllSounds={onPlayAllSounds}
                onStartRecording={startRecording}
                onStopRecording={stopRecording}
            />
        </div>
    )
}
