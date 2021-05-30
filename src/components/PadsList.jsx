import React from 'react'
import { PadPreview } from './PadPreview'

export const PadsList = ({ sounds, currentLoopTime }) => {

    //Just a list component that renders all pads

    return (
            <div className="pads-container">
                {sounds && sounds.map((sound) => {
                    return <PadPreview
                        key={sound._id}
                        sound={sound}
                        currentLoopTime={currentLoopTime}
                    />
                })}
        </div>
    )
}
