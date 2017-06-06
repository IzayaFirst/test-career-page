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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\FirstZa\\Desktop\\next-career-page\\components\\Navbar.js';


var Navbar = function (_Component) {
    (0, _inherits3.default)(Navbar, _Component);

    function Navbar() {
        (0, _classCallCheck3.default)(this, Navbar);

        return (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).apply(this, arguments));
    }

    (0, _createClass3.default)(Navbar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('nav', { className: 'nav', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'nav-left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('a', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('img', { src: '/static/getlink.png', alt: 'Bulma logo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }))), _react2.default.createElement('div', { className: 'nav-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('a', { className: 'nav-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_link2.default, { href: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('a', { href: '/login', className: 'button is-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'Login')))));
        }
    }]);

    return Navbar;
}(_react.Component);

exports.default = Navbar;