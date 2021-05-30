import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PadsList } from '../components/PadsList'
import { utilService } from '../services/utilService'
import { saveRecording } from '../store/actions/recordingsActions'
import {
    loadSounds,
    playAllSounds,
    playSoundsInQueue,
    resetLooper,
    toggleLoopPause
} from '../store/actions/soundsActions'

export const LooperApp = () => {

    const dispatch = useDispatch() //Redux dispatch hook

    const sounds = useSelector(state => state.soundsReducer.sounds) //All of the sounds imported from the
    // global state (Redux store)
    const isLooperRunning = useSelector(state => state.soundsReducer.isLooperRunning) // Tells us if the looper
    // is paused or not

    const loopTimeIntervalRef = useRef(null) //Using ref for saving the looper time cycle interval id
    // so it wont get lost on re-render

    const [currentLoopTime, setCurrentLoopTime] = useState(0) //A timer state running from 0 to 8 seconds (in milliseconds)
    const [isRecording, setIsRecording] = useState(false) //In recording mode or not
    const [recordedSession, setRecordedSession] = useState([]) // A state that captures the recorded user actions

    useEffect(() => {
        dispatch(loadSounds()) // load all sounds to global state
    }, [dispatch])

    useEffect(() => {
        if (isLooperRunning) {// If the looper is running, then set an interval that updates the 
            //current time on the currentLoopTime state
            loopTimeIntervalRef.current = setInterval(() => {
                setCurrentLoopTime((prevTime) => (prevTime + 10) % 8000)
            }, 10);
        } else {
            clearInterval(loopTimeIntervalRef.current) // If looper is paused, then clear the interval
        }
        return () => clearInterval(loopTimeIntervalRef.current)// Clearing interval on component unmount
    }, [isLooperRunning])

    useEffect(() => {
        if (currentLoopTime >= 7990) {
            dispatch(playSoundsInQueue()) // When a cycle ends, read all sounds collected in the queue and set
            // their .isPlaying to true

            if (isRecording) {// In recording mode, push every sound that was played 
                //in the current cycle to the recordedSession state
                const playedSounds = sounds.filter(sound => sound.isPlaying)
                setRecordedSession(prev => [...prev, playedSounds])
            }
        }
    }, [currentLoopTime, isRecording])

    const onPlayAllSounds = () => { // Triggers all sounds at once
        if (!isLooperRunning) dispatch(toggleLoopPause())
        dispatch(playAllSounds())
    }

    const onToggleLoopPause = () => { // Toggles the IsLoopRunning state and stops the timer interval
        clearInterval(loopTimeIntervalRef.current)
        dispatch(toggleLoopPause())
    }

    const onResetAll = () => { //Reseting all of the sounds settings in global state
        dispatch(resetLooper())
    }

    const onStopRecording = () => {
        setIsRecording(false)
        if (recordedSession.length) {//Only if actions were captured in state, then save the recording
            // and clear the recorded session
            dispatch(saveRecording({
                _id: utilService.makeId(),
                orderOfSounds: recordedSession
            }))
        }
        setRecordedSession([])
    }

    return (
        <div className="looper-app-wrapper flex column">
            <Header />
            <PadsList
                sounds={sounds}
                currentLoopTime={currentLoopTime}
            />
            <Footer
                onToggleLoopPause={onToggleLoopPause}
                onResetAll={onResetAll}
                onPlayAllSounds={onPlayAllSounds}
                onStartRecording={() => setIsRecording(true)}
                onStopRecording={onStopRecording}
            />
        </div>
    )
}
