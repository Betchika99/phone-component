const NumberGroupComponent = require('./components/NumberGroupComponent/NumberGroupComponent');
require('./main.scss');

module.exports.create = (props, container) => {
    const num = new NumberGroupComponent(props);
    num.render(container);
};
