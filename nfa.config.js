const alphabet = ['a', 'b']

const NFA_TABLE = {
    A: {
        name: 'A',
        transitions: {
            'a': 'A,B',
            'b': 'A,F'
        },
        isAcceptState: false
    },
    B: {
        name: 'B',
        transitions: {
            'a': '',
            'b': 'C'
        },
        isAcceptState: false
    },
    C: {
        name: 'C',
        transitions: {
            'a': '',
            'b': 'D'
        },
        isAcceptState: false
    },
    D: {
        name: 'D',
        transitions: {
            'a': 'E',
            'b': ''
        },
        isAcceptState: false
    },
    F: {
        name: 'F',
        transitions: {
            'a': 'G',
            'b': 'E'
        },
        isAcceptState: false
    },
    G: {
        name: 'G',
        transitions: {
            'a': '',
            'b': 'E'
        },
        isAcceptState: false
    },
    E: {
        name: 'E',
        transitions: {
            'a': '',
            'b': ''
        },
        isAcceptState: true
    }
}
