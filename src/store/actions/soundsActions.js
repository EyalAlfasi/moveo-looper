import { soundService } from "../../services/soundService"
import {
    LOAD_SOUNDS,
    PLAY_ALL_SOUNDS,
    STOP_ALL_SOUNDS,
    QUEUE_SOUND,
    PLAY_SOUNDS_IN_QUEUE,
    TOGGLE_LOOP_PAUSE,
    RESET_LOOPER
} from "../reducers/soundsReducer"

export function loadSounds() {
    const sounds = soundService.getSounds()
    const action = {
        type: LOAD_SOUNDS,
        sounds
    }
    return action
}

export function queueSound(soundId) {
    const action = {
        type: QUEUE_SOUND,
        soundId
    }
    return action
}

export function playSoundsInQueue() {
    const action = {
        type: PLAY_SOUNDS_IN_QUEUE
    }
    return action
}

export function toggleLoopPause() {
    const action = {
        type: TOGGLE_LOOP_PAUSE
    }
    return action
}

export function playAllSounds() {
    const action = {
        type: PLAY_ALL_SOUNDS
    }
    return action
}

export function stopAllSounds() {
    const action = {
        type: STOP_ALL_SOUNDS
    }
    return action
}

export function resetLooper() {
    const action = {
        type: RESET_LOOPER
    }
    return action
}