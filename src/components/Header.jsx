import React from 'react'
import { RecordingsList } from './RecordingsList'

const _Header = () => {
    return (
        <header className="app-header-wrapper main-header-layout">
            <div className="logo flex column">
                <span>Moveo</span>
                <span>Looper</span>
            </div>
            <RecordingsList />
        </header>
    )
}

export const Header = React.memo(_Header)