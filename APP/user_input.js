import {handle} from "./handle_input.js";

export class GetUserInput {

    input = document.querySelectorAll('button')

    constructor() {
        this.input.forEach((btn) => {
            btn.addEventListener('click', (btn) => {
                    handle.handleInput(btn)
                })
            })
        }
}



