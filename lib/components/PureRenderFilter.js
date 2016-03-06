'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('../utils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureRenderFilter = function (_Component) {
  _inherits(PureRenderFilter, _Component);

  function PureRenderFilter(props) {
    _classCallCheck(this, PureRenderFilter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PureRenderFilter).call(this, props));
  }

  _createClass(PureRenderFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _shallowEqual2["default"])(nextProps, this.props)) {
        this.haveOwnPropsChanged = true;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.haveOwnPropsChanged;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCache();
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this.haveOwnPropsChanged = true;
      this.renderedElement = null;
    }
  }, {
    key: 'render',
    value: function render() {
      this.haveOwnPropsChanged = false;

      this.renderedElement = (0, _react.cloneElement)(this.props.children, this.props);

      return this.renderedElement;
    }
  }]);

  return PureRenderFilter;
}(_react.Component);

PureRenderFilter.displayName = 'PureRenderFilter';
PureRenderFilter.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = PureRenderFilter;