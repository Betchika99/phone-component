import NumberGroupComponent from './NumberGroupComponent';
import { getType } from '../helper';

test('is created correctly', () => {
    const props = {
        mask: '+7(900)III-**-**',
    }
    const component = new NumberGroupComponent(props);
    component.data.forEach((element, index) => {
        let info = getType(props.mask[index]); 
        expect(element.class).toBe(info.class);
        expect(element.type).toBe(info.type);
        expect(element.value).toBe(info.value);
    });
})

test('', () => {
    const props = {
        mask: '+7(900)III-**-**',
    }
    const component = new NumberGroupComponent(props);
    component.render(document.body);

    expect(document.getElementsByClassName('container')[0].childElementCount).toBe(props.mask.length);
    expect(document.getElementsByClassName('container')).not.toBeNull();

})