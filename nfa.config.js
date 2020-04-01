const alphabet = [0, 1]

const NFA_TABLE = {
    A: {
        name: 'A',
        transitions: {
            0: 'A,B',
            1: 'A'
        },
        isAcceptState: false
    },
    B: {
        name: 'B',
        transitions: {
            0: '',
            1: 'C'
        },
        isAcceptState: false
    },
    C: {
        name: 'C',
        transitions: {
            0: '',
            1: ''
        },
        isAcceptState: true
    }
}
