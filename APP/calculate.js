import {state} from "./calc_state.js";


export class Calculator {

     add() {
        state.result = Number(state.firstNumber) + Number(state.secondNumber)
     }
     subtract() {
        state.result = Number(state.firstNumber) - Number(state.secondNumber)
     }
     multiply() {
        state.result = Number(state.firstNumber) * Number(state.secondNumber)
     }
     divide() {
        state.result = Number(state.firstNumber) / Number(state.secondNumber)
     }
     changeSign() {
        state.result = (state.firstNumber *- 1)
        state.firstNumber = state.result
     }
     toSquare() {
        state.result = (state.firstNumber ** 2)
        state.firstNumber = state.result
     }

    calculate() {
         switch (state.operator){
             case '+':
                 this.add()
                 break;
             case '-':
                 this.subtract()
                 break;
             case 'x':
                 this.multiply()
                 break;
             case ':':
                 this.divide()
                 break;
         }
    }
}

export const calc = new Calculator()
