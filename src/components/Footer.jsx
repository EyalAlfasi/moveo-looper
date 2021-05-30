import React from 'react'
import { useSelector } from 'react-redux'

const _Footer = ({ onToggleLoopPause, onResetAll, onPlayAllSounds, onStartRecording, onStopRecording }) => {
    //All footer controlles come from the parent component

    const isLooperRunning = useSelector(state => state.soundsReducer.isLooperRunning)

    return (
        <div className="footer-wrapper flex column justify-center align-center">
            <span
                onClick={onPlayAllSounds}
            > Play all sounds</span>
            <div >
                <i
                    onClick={onToggleLoopPause}
                    className={`icon-button fa ${!isLooperRunning ? 'fa-play' : 'fa-pause'}`}
                ></i>
                <i
                    onClick={onResetAll}
                    className="icon-button fa fa-square"
                ></i>

                <i
                    onClick={onStartRecording}
                    className="icon-button fa fa-microphone"
                ></i>
                <i
                    onClick={onStopRecording}
                    className="icon-button fa fa-microphone-slash"
                ></i>
            </div>
        </div>
    )
}

export const Footer = React.memo(_Footer)