import React from 'react'
import { PadPreview } from './PadPreview'

export const PadsList = ({ sounds, currentLoopTime }) => {

    return (
        <div className="pads-page-wrapper flex column space-between">
            <div className="pads-container">
                {sounds && sounds.map((sound) => {
                    return <PadPreview
                        key={sound._id}
                        sound={sound}
                        currentLoopTime={currentLoopTime}
                    />
                })}
            </div>
        </div>
    )
}
