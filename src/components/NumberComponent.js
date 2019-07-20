export default class NumberComponent {
    constructor(type) {
        this._value = type.value;
        this._type = type.type;
        this._class = type.class;
        this._onRender = null;
        this._tag = null;
    }

    get value() {
        return this._value;
    }

    get domElement() {
        return this._tag;
    }

    set onRender(func) {
        this._onRender = func;
    }

    set class(newClass) {
        this._class = newClass;
    }

    render(container) {
        const domElement = document.createElement(this._type);
        
        if (this._type === 'input') {
            domElement.placeholder = '_';
            domElement.maxLength = 1;
        } else {
            domElement.textContent = (this._value === '*') ? '●' : this._value;
        }
        
        if (this._onRender) {
            this._onRender(domElement);
        }

        domElement.classList.add(this._class);
        this._tag = domElement;
        container.appendChild(domElement);
    }
}
