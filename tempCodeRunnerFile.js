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

const checkFinalStates = () => {
    let array_main = []

    for (const key in NFA_TABLE) {
        array_main.push(NFA_TABLE[key]);
    }
    return array_main.filter(el => el.isAcceptState === true).map(el => el.name);

}

const convertFunction = (table) => {
    let array_main = [],
        steps = [],
        states = [];

    // Создаём дубликат и переводим в массив
    for (const key in table) {
        array_main.push(table[key]);
    }
    steps[0] = array_main[0];


    for (let k = 0; k < steps.length; k++) {
        const item = steps[k];
        for (const step in item.transitions) {

            item.transitions[step] = item.transitions[step].split(',').join('');

            const names = item.transitions[step].split('');

            const filtered_steps = [];
            array_main.forEach(el => {
                return names.forEach(name => {
                    if (el.name === name) {
                        return filtered_steps.push(el)
                    };
                })
            });

            states.push(steps[k].name);

            if (!steps.some(el => el.name == item.transitions[step]) && item.transitions[step] !== '') {

                // console.log(states);
                let next_keys = []
                filtered_steps.forEach(el => {
                    next_keys.push(el.transitions);
                });




                const temp_state = {
                    name: item.transitions[step],
                    transitions: {},
                    isAcceptState: false
                }

                const keys = Object.keys(array_main[0].transitions);


                for (let i = 0; i < summaryKeys(next_keys).length; i++) {
                    temp_state.transitions[keys[i]] = summaryKeys(next_keys)[i];
                }

                item.transitions[step].split('').forEach(el => {
                    checkFinalStates().forEach(item => {
                        if (el == item) temp_state.isAcceptState = true;
                    });
                });

                steps.push(temp_state);
            }
        }

    }
    return steps;
}
console.log(convertFunction(NFA_TABLE));

function summaryKeys(arr) {
    let summary = '',
        result = [];
    let keys = Object.keys(arr[0])

    for (let j = 0; j < keys.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            summary += arr[i][keys[j]];

        }
        result.push(summary);
        summary = '';
    }

    result = result.map(el => {
        if (el.indexOf(',') !== -1) {
            let tmp = [];
            el.split('').forEach(elem => {
                if (elem != ',') tmp.push(elem);
            });
            tmp = tmp.sort();
            return Array.from(new Set(tmp)).join('');
        } else {
            return Array.from(new Set(el.split('').sort())).join('');
        }
    })

    return result;
}

const formatToObject = (arr) => {
  const obj = {};
  arr.forEach(element => {
    obj[element.name] = element;
  })
  return obj;
}



console.log(formatToObject(convertFunction(NFA_TABLE)));