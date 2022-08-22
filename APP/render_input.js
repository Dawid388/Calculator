class render_input{
    input = document.querySelector('.displayNumber')

    setRender(value) {
        this.input.innerHTML = value;
    }

}
export const render = new render_input()