# NFA-to-DFA
Implementing the convertion of an NFA table into a DFA table on JavaScript.
Просмотреть готовое решение можно [здесь](https://github.com/AntonBurchak/Deterministic-finite-automata).

Условие задачи: реализовать программу которая будет переводить таблицу NFA  в таблицу DFA для дальнейшего построения детерминированного конечного автомата.

В отличии от [прошлой части](https://github.com/AntonBurchak/Deterministic-finite-automata), мы не будем разбирать алгоритм построения и перевода NFA и DFA таблиц, а сразу перейдем к программе.
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

Результат перевода можно увидеть на следующей иллюстрации:

![Иллюстрация к проекту](https://github.com/AntonBurchak/NFA-to-DFA/blob/master/dist/images/NFADFA.jpg)


Перевод совершен корректно - задача выполнена.

Выполнил студент Днепровского Государственного Университета им. Олеся Гончара - Антон Бурчак.
