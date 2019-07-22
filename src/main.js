import NumberGroupComponent from './components/NumberGroupComponent/NumberGroupComponent';
import './main.scss';

const props = {
    mask: '+7(985)0II-**-**',
};

const num = new NumberGroupComponent(props);

num.render(document.getElementById('application'));
// document.getElementById('application').appendChild(num.render());