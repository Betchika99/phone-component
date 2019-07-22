import NumberGroupComponent from './components/NumberGroupComponent/NumberGroupComponent';
import './main.scss';

export function create(props, container) {
    const num = new NumberGroupComponent(props);
    num.render(container);
}
