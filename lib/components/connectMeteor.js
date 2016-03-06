'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = connectMeteor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureRenderFilter = require('./PureRenderFilter');

var _PureRenderFilter2 = _interopRequireDefault(_PureRenderFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var wrapWithConnectMeteor = function wrapWithConnectMeteor(WrappedComponent, subscribe, mapCollectionsToProps, pure) {
  var ConnectMeteor = _react2["default"].createClass({
    displayName: 'ConnectMeteor',

    mixins: [ReactMeteorData], // eslint-disable-line no-undef
    getMeteorData: function getMeteorData() {
      var subscriptions = subscribe(this.props);
      return mapCollectionsToProps(this.props, subscriptions);
    },
    render: function render() {
      return pure === true ? _react2["default"].createElement(
        _PureRenderFilter2["default"],
        null,
        _react2["default"].createElement(WrappedComponent, _extends({}, this.data, this.props))
      ) : _react2["default"].createElement(WrappedComponent, _extends({}, this.data, this.props));
    }
  });

  ConnectMeteor.displayName = 'ConnectMeteor(' + getDisplayName(WrappedComponent) + ')';
  ConnectMeteor.WrappedComponent = WrappedComponent;

  return ConnectMeteor;
};

function connectMeteor(subscribe, mapCollectionsToProps) {
  var pure = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  return function (WrappedComponent) {
    return wrapWithConnectMeteor(WrappedComponent, subscribe, mapCollectionsToProps, pure);
  };
}