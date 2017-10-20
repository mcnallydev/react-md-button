'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTag = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: 10px 15px;\n  color: ', ';;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10,10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n\n  &:active:after {\n    transform: scale(0,0);\n    opacity: .2;\n    transition: 0s;\n  }\n'], ['\n  background-color: ', ';\n  padding: 10px 15px;\n  color: ', ';;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10,10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n\n  &:active:after {\n    transform: scale(0,0);\n    opacity: .2;\n    transition: 0s;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonTag = exports.ButtonTag = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? 'rgb(1,89,162)' : 'white';
}, function (props) {
  return props.primary ? 'white' : 'rgb(33,33,33)';
});