# NFA-to-DFA
Implementing the convertion of an NFA table into a DFA table on JavaScript

Условие задачи: реализовать программу которая будет переводить таблицу NFA  в таблицу DFA для дальнейшего построения детерминированного конечного автомата.

В отличии от [прошлой части](http://example.com), мы не будем разбирать алгоритм построения и перевода NFA и DFA таблиц, а сразу перейдем к программе.
### Как это использовать?
Пользователь должен ввести свою NFA таблицу в файл ```nfa.config.js```, пример такой таблицы ниже:
```javascript
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
```
Прошу заметить, что если в состоянии нет перехода в следующее состояние, такой переход мы должны обозначить пустой строкой `''`

После того как таблица была внесена, необходимо открыть `index.html`. Далее у нас 2 варианта работы с программой:
* Мы можем сразу проверить входящую строку на соответствие с требованиями автомата DFA
* Мы можем получить таблицу DFA


#### Let's analyze the metamatic model of this automaton:
**"0101"**
(Mathematical Model) M = {Q, Eps, δ, q0, F} consisting of:
* a finite set of states Q
* a finite set of input symbols called the alphabet (Eps)
* a transition function δ
* an initial or start state q0 => Q
* a set of accept states F

We form a mathematical model specifically for our example
----------------------------
* Q: 
  * q0 = initial state;
  * q1 = 0;
  * q2 = 01;
  * q3 = 010;
  * q4 = 0101;
* Eps = {0,1};
* q0 = {q0};
* F = q4.

Build the transition table:
-----------
![Иллюстрация к проекту](https://github.com/AntonBurchak/Deterministic-finite-automata/blob/master/dist/images/transition-table.jpg)

We build the transition diagram and check it from the original:
![Иллюстрация к проекту](https://github.com/AntonBurchak/Deterministic-finite-automata/blob/master/dist/images/automat.png)
They are identical - the task is completed.

Prepared by a student of Dnipro National University n. Olesya Honchara - Anton Burchak.
