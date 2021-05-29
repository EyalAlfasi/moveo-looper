export const SET_RECORDINGS = 'SET_RECORDINGS';
export const SAVE_RECORDING = 'SAVE_RECORDING';

const initialState = {
    recordings: []
}
export const recordingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECORDINGS:
            console.log(action.recordings);
            return { ...state, recordings: [...action.recordings] }
        case SAVE_RECORDING:
            return { ...state, recordings: [...state.recordings, action.recording] }
        default:
            return state
    }
}