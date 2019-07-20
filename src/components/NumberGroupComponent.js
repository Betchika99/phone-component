import NumberComponent from './NumberComponent';
import { getType, CLASSES } from '../helper';

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
    }

    render(container) {
        const wrapper = document.createElement('div');
        wrapper.classList.add(CLASSES.WRAPPER);

        this.data.filter(element => element.value === 'I').map((element, index, inputs) => {
            element.onRender = (domElement) => {
                domElement.addEventListener('input', () => this.check(wrapper, inputs));
                if (index !== inputs.length - 1) {
                    domElement.addEventListener('input', () => { 
                        if (domElement.value) {
                            inputs[index + 1].domElement.focus();
                        }
                    });
                }
            };
        });

        this.data.forEach(symbol => {
            symbol.render(wrapper);
        });
        container.appendChild(wrapper);
    }

    check(parent, inputs) {
        let isEmpty = false;
        for (let input of inputs) {
            if (!input.domElement.value) {
                isEmpty = true;
                break;
            }
        };
        
        let isCorrect = false;
        // TODO: add REAL checking
            
        if (isCorrect || isEmpty) {
            parent.classList.remove(CLASSES.CONTAINER_ERROR);
        } else {
            parent.classList.add(CLASSES.CONTAINER_ERROR);
        }
    }
}