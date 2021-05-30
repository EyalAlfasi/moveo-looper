export const LOAD_SOUNDS = 'LOAD_SOUNDS';
export const QUEUE_SOUND = 'QUEUE_SOUND';
export const PLAY_SOUNDS_IN_QUEUE = 'PLAY_SOUNDS_IN_QUEUE';
export const TOGGLE_LOOP_PAUSE = 'TOGGLE_LOOP_PAUSE';
export const PLAY_ALL_SOUNDS = 'PLAY_ALL_SOUNDS';
export const STOP_ALL_SOUNDS = 'STOP_ALL_SOUNDS';
export const RESET_LOOPER = 'RESET_LOOPER';

const initialState = {
    isLooperRunning: false, // Boolean for looper running state
    sounds: [], // The array of sounds
    queue: {}, // an object representing the queue, it's an object because it's more efficiant 
    // to check from the PadPreview component if the sound is in queue or not, instead for running in a loop on every render
    activeSoundsCount: 0, // Counting how many sounds are active
}

export const soundsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SOUNDS:
            const { sounds } = action
            return { ...state, sounds }
        case QUEUE_SOUND:
            const currentSound = state.sounds.find(sound => sound._id === action.soundId) // Get's the sound by the 
            // id recieved in the action
            if (currentSound.isPlaying) { // If it's already playing, then make .isPlaying false
                return {
                    ...state,
                    sounds: state.sounds.map(sound => {
                        if (sound._id === action.soundId) sound.isPlaying = !sound.isPlaying
                        return sound
                    }),
                    activeSoundsCount: state.activeSoundsCount - 1
                }
            } else if (!state.activeSoundsCount && !Object.keys(state.queue).length) { // if it's the first sound clicked on, 
                // then don't queue it, activate it instantly
                return {
                    ...state,
                    sounds: state.sounds.map(sound => {
                        if (sound._id === action.soundId) sound.isPlaying = !sound.isPlaying
                        return sound
                    }),
                    activeSoundsCount: state.activeSoundsCount + 1
                }
            } else if (state.queue[action.soundId]) { // If it's already in queue, remove it
                const queueCopy = Object.assign({}, state.queue)
                delete queueCopy[action.soundId]
                return { ...state, queue: queueCopy }
            } else {
                return { ...state, queue: { ...state.queue, [action.soundId]: 1 } }
            }
        case PLAY_SOUNDS_IN_QUEUE:
            return {
                ...state,
                sounds: state.sounds.map(sound => {
                    if (state.queue[sound._id]) sound.isPlaying = true
                    return sound
                }),
                queue: {},
                activeSoundsCount: state.activeSoundsCount + Object.keys(state.queue).length
            }
        case TOGGLE_LOOP_PAUSE:
            return { ...state, isLooperRunning: !state.isLooperRunning }
        case PLAY_ALL_SOUNDS:
            return {
                ...state, sounds: state.sounds.map(sound => {
                    if (!sound.isPlaying) sound.isPlaying = true
                    return sound
                }),
                queue: {},
                activeSoundsCount: state.sounds.length
            }
        case STOP_ALL_SOUNDS:
            return {
                ...state, sounds: state.sounds.map(sound => {
                    if (sound.isPlaying) sound.isPlaying = false
                    return sound
                })
            }
        case RESET_LOOPER:
            return {
                ...state,
                sounds: state.sounds.map(sound => {
                    if (sound.isPlaying) sound.isPlaying = false
                    return sound
                }),
                queue: {},
                activeSoundsCount: 0,
            }
        default:
            return state
    }
}