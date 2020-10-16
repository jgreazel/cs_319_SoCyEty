'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            netID: '',
            password: '',
            error: ''
        };

        _this.dismissError = _this.dismissError.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handlePassChange = _this.handlePassChange.bind(_this);
        _this.handlenetIDChange = _this.handlenetIDChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'dismissError',
        value: function dismissError() {
            this.setState({ error: '' });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            if (!this.state.netID) {
                return this.setState({ error: 'ISU netID is required' });
            }

            if (!this.state.password) {
                return this.setState({ error: 'Please enter password' });
            }

            return this.setState({ error: '' });
        }
    }, {
        key: 'handlenetIDChange',
        value: function handlenetIDChange(event) {
            this.setState({
                netID: event.target.value
            });
        }
    }, {
        key: 'handlePassChange',
        value: function handlePassChange(event) {
            this.setState({
                password: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'Login' },
                React.createElement(
                    'h1',
                    null,
                    React.createElement(
                        'logo',
                        null,
                        'SoCYety'
                    )
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        'label',
                        null,
                        'Net ID'
                    ),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'text', 'data-test': 'netid', value: this.state.netID, onChange: this.handlenetIDChange }),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        null,
                        'Password'
                    ),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'password', 'data-test': 'password', value: this.state.password, onChange: this.handlePassChange }),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'submit', value: 'Log in', 'data-test': 'submit' }),
                    React.createElement('input', { type: 'button', value: 'Sign up' }),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    this.state.error && React.createElement(
                        'p',
                        { 'data-test': 'error', onClick: this.dismissError },
                        '\u2716 ',
                        this.state.error
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
