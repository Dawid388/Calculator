import {state} from './calc_state.js';
import {render} from './render_input.js';
import {calc} from './calculate.js';


class InputHandler {

    handleInput(input) {
        if (input.target.className === 'number' ) {
         this.handleNumber(input.target.innerHTML)
        } else
            this.handleOperator(input.target.innerHTML)
    }

    handleOperator(operator) {
        switch(operator) {
            case '.':
                if (state.secondNumber) {
                    if (state.secondNumber.includes('.')) return
                    if (state.secondNumber === '') {
                        state.secondNumber = '0.'
                    } else {
                        state.secondNumber += operator
                    }
                    render.setRender(state.secondNumber)
                } else {
                    if (state.firstNumber.includes('.')) return
                    if (state.firstNumber === '') {
                        state.firstNumber = '0.'
                    } else {
                        state.firstNumber += operator
                    }
                    render.setRender(state.firstNumber)
                }
                break
            case 'C':
                state.reset()
                break;
            case 'x²':
                calc.toSquare()
                render.setRender(state.result)
                break;
            case '+/-':
                calc.changeSign()
                render.setRender(state.result)
                break;
            case '=':
                if (state.firstNumber && state.secondNumber) {
                    calc.calculate()
                    render.setRender(state.result)
                    state.clearMemory()
                }
                break;
            default:
                if (state.firstNumber && state.secondNumber) {
                    calc.calculate()
                    render.setRender(state.result)
                    state.clearMemory()
                }
                state.operator = operator
        }
    }

    handleNumber(number) {
        if (state.firstNumber && state.operator) {
            state.secondNumber += number
            render.setRender(state.secondNumber)
        } else {
            state.firstNumber += number
            render.setRender(state.firstNumber)
        }
    }
}
export const handle = new InputHandler()