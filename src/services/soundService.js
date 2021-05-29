const sounds = [
    {
        _id: 1,
        name: 'Sound 1',
        fileName: '120_future_funk_beats_25.mp3',
        iconName: 'sound-bars',
        isPlaying: false,
    },
    {
        _id: 2,
        name: 'Sound 2',
        fileName: '120_stutter_breakbeats_16.mp3',
        iconName: 'music-notes',
        isPlaying: false,
    },
    {
        _id: 3,
        name: 'Sound 3',
        fileName: 'Bass_Warwick_heavy_funk_groove_on_E_120_BPM.mp3',
        iconName: 'bass-guitar',
        isPlaying: false,
    },
    {
        _id: 4,
        name: 'Sound 4',
        fileName: 'electric_guitar_coutry_slide_120bpm-B.mp3',
        iconName: 'electric-guitar',
        isPlaying: false,
    },
    {
        _id: 5,
        name: 'Sound 5',
        fileName: 'FUD_120_StompySlosh.mp3',
        iconName: 'drum-set',
        isPlaying: false,
    },
    {
        _id: 6,
        name: 'Sound 6',
        fileName: 'GrooveB_120bpm_Tanggu.mp3',
        iconName: 'bongo',
        isPlaying: false,
    },
    {
        _id: 7,
        name: 'Sound 7',
        fileName: 'MazePolitics_120_Perc.mp3',
        iconName: 'dj',
        isPlaying: false,
    },
    {
        _id: 8,
        name: 'Sound 8',
        fileName: 'PAS3GROOVE1.03B.mp3',
        iconName: 'conga',
        isPlaying: false,
    },
    {
        _id: 9,
        name: 'Sound 9',
        fileName: 'SilentStar_120_Em_OrganSynth.mp3',
        iconName: 'saxophone',
        isPlaying: false,
    },
]

function getSounds() {
    return sounds
}

export const soundService = {
    getSounds
}