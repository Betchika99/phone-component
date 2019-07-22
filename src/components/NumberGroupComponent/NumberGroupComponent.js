import NumberComponent from '../NumberComponent/NumberComponent';
import { getType, CLASSES, MESSAGES } from '../helper/helper';

export default class NumberGroupComponent {
    constructor(props) {
        this.data = [];
        props.mask.split('').forEach(symbol => {
            const type = getType(symbol);
            if (type) {
                const component = new NumberComponent(type);
                this.data.push(component);
            } else {
                // TODO: debug error
            }
        });
        this._tag = null;
    }

    get domElement() {
        return this._tag;
    }

    render(parent) {
        this._tag = document.createElement('div');
        this._tag.classList.add(CLASSES.CONTAINER);
        const wrapper = document.createElement('div');
        wrapper.classList.add(CLASSES.WRAPPER);

        this._inputs = this.data.filter(element => element.value === 'I');
        this._inputs.map((element, index) => {
            element.onRender = (domElement) => {
                domElement.addEventListener('input', () => this.check());
                if (index !== this._inputs.length - 1) {
                    domElement.addEventListener('input', () => { 
                        if (domElement.value) {
                            this._inputs[index + 1].domElement.focus();
                        }
                    });
                }
            };
        });

        this.data.forEach(symbol => {
            symbol.render(wrapper);
        });

        const errorMessage = document.createElement('div');
        errorMessage.classList.add(CLASSES.ERROR_MSG);
        this._tag.appendChild(wrapper);
        this._tag.appendChild(errorMessage);
        parent.appendChild(this._tag);
    }

    check() {
        let isEmpty = false;
        for (let input of this._inputs) {
            if (!input.domElement.value) {
                isEmpty = true;
                break;
            }
        }
        
        let isCorrect = true;
        let message = '';
        if (!isEmpty) {
            // TODO: add REAL checking
            for (let input of this._inputs ) {
                if (!Number.isInteger(+input.domElement.value || input.domElement.value === ' ')) {
                    isCorrect = false;
                    break;
                }
            }
        }
        if (!isCorrect) {
            message = MESSAGES.INCORRECT_NUMBER;
        }

        if (isCorrect || isEmpty) {
            this._tag.classList.remove(CLASSES.CONTAINER_ERROR);
        } else {
            this._tag.getElementsByClassName(CLASSES.ERROR_MSG)[0].textContent = message;
            this._tag.classList.add(CLASSES.CONTAINER_ERROR);
        }
    }
}