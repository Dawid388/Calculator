import {render} from "./render_input.js";


class Calc_state {
  operator = ''
  firstNumber = ''
  secondNumber = ''
  result = ''


  reset() {
    this.operator = ''
    this.firstNumber = ''
    this.secondNumber = ''
    this.result = ''
    render.setRender(this.firstNumber)
  }

  clearMemory() {
    state.firstNumber = state.result
    state.result = ''
    state.secondNumber = ''
  }
}

export const state = new Calc_state()