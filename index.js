
const inpText = document.querySelector('.input__area input'),
btnTest = document.querySelector('.input__btn'),
testRes = document.querySelector('.result p'),
testList = document.querySelector('.result ul li'),
getTable = document.querySelector('.get-table button');


btnTest.addEventListener('click', () => {
// alert('work');
if (DFAValidate(inpText.value)) {
  if (goNextState(inpText.value).state) testRes.style.color = 'green';
  else testRes.style.color = 'red';
  
  testRes.textContent = goNextState(inpText.value).state ? 'String is accepted by DFA' : 'String is not accepted by DFA';
  const list = goNextState(inpText.value).log;
  testList.innerHTML = ''
  list.forEach(element => {
      testList.innerHTML += `${element.name} &#8594; `;
  })
  testList.innerHTML = 'start  &#8594; ' + testList.textContent.slice(0, testList.textContent.length - 2);
} else {
  alert('Invalid entries data');
}
});

getTable.addEventListener('click', () => {
  //  const area = document.createElement('textarea');
  //  area.value = JSON.stringify(convertFunction(NFA_TABLE));
  //  getTable.parentNode.appendChild(area);
  //  var myCodeMirror = CodeMirror();
  //  var myCodeMirror = CodeMirror(document.querySelector('#p'), {
  //   value: JSON.stringify(convertFunction(NFA_TABLE)),
  //   mode:  "javascript"
  // });
  // document.body.innerHTML += myCodeMirror;
  console.log(convertFunction(NFA_TABLE));
  const area = document.createElement('pre');
  // area.textContent = JSON.stringify(convertFunction(NFA_TABLE));
  
  convertFunction(NFA_TABLE).forEach(element => {
    const trns = () => {
      let str = '';
      for(let key in element.transitions) {
        str += `${key}: ${element.transitions[key]}, `;
      }
      return str;
    }

    area.textContent += `
    {
      name: ${element.name},
      transitions: {
        ${trns()}
      },
      isAcceptState: ${element.isAcceptState}
    }
    `;
  });
  document.querySelector('.table-view').appendChild(area);
});



