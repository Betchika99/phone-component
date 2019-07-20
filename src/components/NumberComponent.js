export default class NumberComponent {
    constructor(info) {
        this._value = info.value;
        this._type = info.type;
        this._class = info.class;
        this._onRender = null;
        this._tag = null;
    }

    get class() {
        return this._class;
    }

    get value() {
        return this._value;
    }

    get type() {
        return this._type;
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
