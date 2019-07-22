import { document } from 'global';
import { storiesOf } from '@storybook/html';
import NumberGroupComponent from '../src/components/NumberGroupComponent/NumberGroupComponent';
import '../public/main.css';

storiesOf('Phone component', module)
    .add('normal', () => {
        const application = document.createElement('div');
        const phoneComponent = new NumberGroupComponent( {mask: '+7(800)9II-**-**'} );
        phoneComponent.render(application);
        return application;
    })
    .add('hover', () => {
        const application = document.createElement('div');
        const phoneComponent = new NumberGroupComponent( {mask: '+7(800)9II-**-**'} );
        phoneComponent.render(application);
        const firstInput = application.getElementsByTagName('input')[0];
        firstInput.classList.add('wrapper__input__hover');
        return application;
    })
    .add('active', () => {
        const application = document.createElement('div');

        let phoneComponent = new NumberGroupComponent( {mask: '+7(800)9II-**-**'} );
        phoneComponent.render(application);
        let input = application.getElementsByTagName('input')[0];
        input.classList.add('wrapper__input__focus');

        phoneComponent = new NumberGroupComponent( {mask: '+7(800)9II-**-**'} );
        phoneComponent.render(application);
        input = application.getElementsByTagName('input')[2];
        input.value = '9';
        input.classList.add('wrapper__input__focus');

        phoneComponent = new NumberGroupComponent( {mask: '+7(800)9II-**-**'} );
        phoneComponent.render(application);
        const inputs = application.getElementsByTagName('input');
        inputs[4].value = '9';
        inputs[5].classList.add('wrapper__input__focus');

        return application;
    })
    .add('error', () => {
        const application = document.createElement('div');
        const phoneComponent = new NumberGroupComponent( {mask: '+7(800)9II-**-**'} );
        phoneComponent.render(application);
        let inputs = application.getElementsByTagName('input');
        inputs[0].value = '1';
        inputs[1].value = 'a';
        phoneComponent.check();
        return application;
    });