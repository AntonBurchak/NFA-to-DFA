const transitionsTable = {};

Object.keys(OPTIONS).forEach(key => {
  transitionsTable[key] = OPTIONS[key]
});



function goNextState(string) {
  let current = convertFunction(NFA_TABLE)[0], log = [];
  
  for (let c in string) {
    for (let char in Object.entries(current.transitions)) {
        if (string[c] == char) {
            current = transitionsTable[current.transitions[char]];
            log.push(current);
        }
    }
    // if (current.isAcceptState === true) break;
  }
  return {
    state: current.isAcceptState,
    log: log
  };
}

function DFAValidate (string) {
  let bool
  string.split('').forEach(strElement => {
   bool = false;
    aplhabet.forEach(alpElement => {
      if (strElement == alpElement) {
        bool = true; 
        return true;
      }
    });
   if (bool == false){ 
     return false;
    }
  });
  return bool
} 

