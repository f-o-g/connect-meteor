(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["meteor-connect"] = factory(require("react"));
	else
		root["meteor-connect"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PureRenderFilter = exports.connectMeteor = undefined;

	var _connectMeteor = __webpack_require__(3);

	var _connectMeteor2 = _interopRequireDefault(_connectMeteor);

	var _PureRenderFilter = __webpack_require__(1);

	var _PureRenderFilter2 = _interopRequireDefault(_PureRenderFilter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.connectMeteor = _connectMeteor2["default"];
	exports.PureRenderFilter = _PureRenderFilter2["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _shallowEqual = __webpack_require__(4);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connectMeteor;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _PureRenderFilter = __webpack_require__(1);

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }
/******/ ])
});
;