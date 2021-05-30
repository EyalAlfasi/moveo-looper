import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import microphone from '../assets/img/icons/microphone.svg'
import { loadRecordings } from '../store/actions/recordingsActions'
import { RecordingPreview } from './RecordingPreview'

export const RecordingsList = () => {
    const [isOpen, setIsOpen] = useState(false) // Boolean state for recordings list drawer

    const dispatch = useDispatch()

    const recordings = useSelector(state => state.recordingsReducer.recordings) // Importing the recordings from global state

    useEffect(() => {
        dispatch(loadRecordings()) // Load recordings from local storage to global state (Redux store)
    }, [dispatch])


    return (
        <>
            <span className="open-recordings-btn-container relative">
                {!!recordings.length &&
                    <span className="badge">
                        {recordings.length}
                    </span>}
                <button
                    className="open-recordings-btn"
                    onClick={() => setIsOpen(!isOpen)}>Recordings</button>
            </span>
            {isOpen && <div
                className="dark-overlay"
                onClick={() => setIsOpen(false)}
            ></div>}
            <div
                className={`recordings-wrapper`}
                style={{ transform: `translateX(${isOpen ? "0" : "100%"}` }}>
                <div className="close-recordings-section">
                    <i
                        className="fa fa-arrow-left"
                        onClick={() => setIsOpen(false)}
                    ></i>
                </div>
                <h2 className="recordings-list-title">My recordings</h2>
                {!recordings.length ?
                    <div className="no-recordings-section">
                        <img src={microphone} alt="microphon icon"/>
                        <h4>Nothing here... <br /> Record your first session!</h4>
                    </div>
                    : recordings.map((recording, idx) => {
                        return <RecordingPreview
                            key={recording._id}
                            recording={recording}
                            idx={idx + 1}
                        />
                    })}
            </div>
        </>
    )
}
