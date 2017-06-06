'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\FirstZa\\Desktop\\next-career-page\\components\\Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/bulma.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }), _react2.default.createElement('script', { src: 'https://use.fontawesome.com/12e462bd5f.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;