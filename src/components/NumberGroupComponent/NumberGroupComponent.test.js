import NumberGroupComponent from './NumberGroupComponent';
import { getType, CLASSES } from '../helper/helper';

const masks = [
    '+7(900)III-**-**',
    '+7(900)0II-**-**',  
    '+7(900)000-**-**',
    'IIIIIIIIIIIIIIII',
    '+7(900)000-**-XX',
];

test('is created correctly', () => {
    masks.forEach(mask => {
        let props = { mask };
        const component = new NumberGroupComponent(props);
        component.data.forEach((element, index) => {
            let info = getType(props.mask[index]); 
            expect(element.class).toBe(info.class);
            expect(element.type).toBe(info.type);
            expect(element.value).toBe(info.value);
        });
    });
});

test('DOM elements created correctly', () => {
    masks.forEach(mask => {
        let props = { mask }; 
        const component = new NumberGroupComponent(props);
        component.render(document.body);

        const container = document.getElementsByClassName('container')[0];
        const wrapper = container.getElementsByClassName('container__wrapper')[0];
        const msg = container.getElementsByClassName('container__message')[0];

        expect(container).not.toBeNull();
        expect(container.childElementCount).toBe(2);
        expect(wrapper.childElementCount).toBe(props.mask.length);
        expect(msg).not.toBeNull();
    });
});

test('Correct error processing', () => {
    masks.forEach(mask => {
        let props = { mask }; 
        const component = new NumberGroupComponent(props);
        component.render(document.body);

        let container = component.domElement;
        let wrapper = container.getElementsByClassName('container__wrapper')[0];
        let msg = container.getElementsByClassName('container__message')[0];
        let inputs = wrapper.getElementsByTagName('input');

        expect(container.classList).not.toContain(CLASSES.CONTAINER_ERROR);

        if (inputs.length > 0) {
            for (let index = 0; index < inputs.length; index++) {
                inputs[index].value = index;
            }
            expect(container.classList).not.toContain(CLASSES.CONTAINER_ERROR);
    
            inputs[0].value = 'a';
            component.check();
            expect(container.classList).toContain(CLASSES.CONTAINER_ERROR);
            expect(msg.innerHTML).not.toEqual('');
        }
    });
});
