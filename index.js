
const inpText = document.querySelector('.input__area input'),
btnTest = document.querySelector('.input__btn'),
testRes = document.querySelector('.result p'),
testList = document.querySelector('.result ul li');


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


})

