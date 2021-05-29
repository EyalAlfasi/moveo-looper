import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { saveRecording } from '../store/actions/recordingsActions'

export const useRecordAudio = () => {
    const rec = useRef(null)
    const dispatch = useDispatch()

    const startAudioRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                rec.current = new MediaRecorder(stream);
                const audioChunks = [];
                rec.current.ondataavailable = (ev) => {
                    audioChunks.push(ev.data);
                    if (rec.current.state === "inactive") {
                        let blob = new Blob(audioChunks, { type: 'audio/x-mpeg-3' });
                        const src = URL.createObjectURL(blob);
                        const newAudioItem = { src }
                        dispatch(saveRecording(newAudioItem))
                    }
                }
                rec.current.start();
            })
            .catch(e => console.log(e));
    }

    const stopAudioRecording = () => {
        rec.current.stop();
    }
    return [startAudioRecording, stopAudioRecording]

}
