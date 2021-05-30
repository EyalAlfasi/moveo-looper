import { storageService } from "../../services/storageService";
import { SAVE_RECORDING, SET_RECORDINGS } from "../reducers/recordingsReducer";
const RECORDINGS_DB = 'RECORDINGS_DB'

export function loadRecordings() {
    const savedRecordings = storageService.query(RECORDINGS_DB) // Getting recordings from local storage and then updating store
    const action = {
        type: SET_RECORDINGS,
        recordings: savedRecordings
    }
    return action
}
export function saveRecording(recording) {
    const savedRecording = storageService.put(RECORDINGS_DB, recording) // Save to local storage before updating store
    const action = {
        type: SAVE_RECORDING,
        recording: savedRecording
    }
    return action
}