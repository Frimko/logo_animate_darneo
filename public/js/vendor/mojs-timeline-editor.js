(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mojs-timeline-editor", [], factory);
	else if(typeof exports === 'object')
		exports["mojs-timeline-editor"] = factory();
	else
		root["mojs-timeline-editor"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _preactRedux = __webpack_require__(2);

	var _preact = __webpack_require__(3);

	var _moJs = __webpack_require__(20);

	var _moJs2 = _interopRequireDefault(_moJs);

	var _mojsPlayer = __webpack_require__(21);

	var _mojsPlayer2 = _interopRequireDefault(_mojsPlayer);

	var _store = __webpack_require__(22);

	var _store2 = _interopRequireDefault(_store);

	var _timelineEditor = __webpack_require__(95);

	var _timelineEditor2 = _interopRequireDefault(_timelineEditor);

	var _persist = __webpack_require__(228);

	var _persist2 = _interopRequireDefault(_persist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* TODO:
	    [x] test if `onClick` handler on components is optimized for mobiles
	*/

	(0, _preact.render)((0, _preact.h)(
	  _preactRedux.Provider,
	  { store: _store2.default },
	  (0, _preact.h)(_timelineEditor2.default, { isPlayerPassed: true })
	), document.body);

	(0, _persist2.default)(_store2.default);

	new _mojsPlayer2.default({ add: new _moJs2.default.Tween() });

	// /*
	//   API wrapper above the app itself.
	// */
	// class API {}
	// export default API;
	// window.MojsTimelineEditor = API;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(3), __webpack_require__(6)) :
		typeof define === 'function' && define.amd ? define(['exports', 'preact', 'redux'], factory) :
		(factory((global.preactRedux = global.preactRedux || {}),global.preact,global.redux));
	}(this, function (exports,preact,redux) { 'use strict';

		function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }


		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.extends = Object.assign || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var Children = {
			only: function (children) {
				return children && children[0] || null;
			}
		};

		function proptype() {}
		proptype.isRequired = proptype;

		var PropTypes = {
			element: proptype,
			func: proptype,
			shape: function () {
				return proptype;
			}
		};

		var storeShape = PropTypes.shape({
		  subscribe: PropTypes.func.isRequired,
		  dispatch: PropTypes.func.isRequired,
		  getState: PropTypes.func.isRequired
		});

		/**
		 * Prints a warning in the console if it exists.
		 *
		 * @param {String} message The warning message.
		 * @returns {void}
		 */
		function warning(message) {
		  /* eslint-disable no-console */
		  if (typeof console !== 'undefined' && typeof console.error === 'function') {
		    console.error(message);
		  }
		  /* eslint-enable no-console */
		  try {
		    // This error was thrown as a convenience so that you can use this stack
		    // to find the callsite that caused this warning to fire.
		    throw new Error(message);
		    /* eslint-disable no-empty */
		  } catch (e) {}
		  /* eslint-enable no-empty */
		}

		var didWarnAboutReceivingStore = false;
		function warnAboutReceivingStore() {
		  if (didWarnAboutReceivingStore) {
		    return;
		  }
		  didWarnAboutReceivingStore = true;

		  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
		}

		var Provider = function (_Component) {
		  babelHelpers.inherits(Provider, _Component);

		  Provider.prototype.getChildContext = function getChildContext() {
		    return { store: this.store };
		  };

		  function Provider(props, context) {
		    babelHelpers.classCallCheck(this, Provider);

		    var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props, context));

		    _this.store = props.store;
		    return _this;
		  }

		  Provider.prototype.render = function render() {
		    var children = this.props.children;

		    return Children.only(children);
		  };

		  return Provider;
		}(preact.Component);

		if (true) {
		  Provider.prototype.componentWillReceiveProps = function (nextProps) {
		    var store = this.store;
		    var nextStore = nextProps.store;


		    if (store !== nextStore) {
		      warnAboutReceivingStore();
		    }
		  };
		}

		Provider.childContextTypes = {
		  store: storeShape.isRequired
		};

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

		function wrapActionCreators(actionCreators) {
		  return function (dispatch) {
		    return redux.bindActionCreators(actionCreators, dispatch);
		  };
		}

		var isObjectLike = __commonjs(function (module) {
		  /**
		   * Checks if `value` is object-like. A value is object-like if it's not `null`
		   * and has a `typeof` result of "object".
		   *
		   * @static
		   * @memberOf _
		   * @since 4.0.0
		   * @category Lang
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		   * @example
		   *
		   * _.isObjectLike({});
		   * // => true
		   *
		   * _.isObjectLike([1, 2, 3]);
		   * // => true
		   *
		   * _.isObjectLike(_.noop);
		   * // => false
		   *
		   * _.isObjectLike(null);
		   * // => false
		   */
		  function isObjectLike(value) {
		    return !!value && typeof value == 'object';
		  }

		  module.exports = isObjectLike;
		});

		var require$$0 = isObjectLike && typeof isObjectLike === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike;

		var _isHostObject = __commonjs(function (module) {
		  /**
		   * Checks if `value` is a host object in IE < 9.
		   *
		   * @private
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		   */
		  function isHostObject(value) {
		    // Many host objects are `Object` objects that can coerce to strings
		    // despite having improperly defined `toString` methods.
		    var result = false;
		    if (value != null && typeof value.toString != 'function') {
		      try {
		        result = !!(value + '');
		      } catch (e) {}
		    }
		    return result;
		  }

		  module.exports = isHostObject;
		});

		var require$$1 = _isHostObject && typeof _isHostObject === 'object' && 'default' in _isHostObject ? _isHostObject['default'] : _isHostObject;

		var _getPrototype = __commonjs(function (module) {
		  /* Built-in method references for those with the same name as other `lodash` methods. */
		  var nativeGetPrototype = Object.getPrototypeOf;

		  /**
		   * Gets the `[[Prototype]]` of `value`.
		   *
		   * @private
		   * @param {*} value The value to query.
		   * @returns {null|Object} Returns the `[[Prototype]]`.
		   */
		  function getPrototype(value) {
		    return nativeGetPrototype(Object(value));
		  }

		  module.exports = getPrototype;
		});

		var require$$2 = _getPrototype && typeof _getPrototype === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype;

		var isPlainObject = __commonjs(function (module) {
		  var getPrototype = require$$2,
		      isHostObject = require$$1,
		      isObjectLike = require$$0;

		  /** `Object#toString` result references. */
		  var objectTag = '[object Object]';

		  /** Used for built-in method references. */
		  var objectProto = Object.prototype;

		  /** Used to resolve the decompiled source of functions. */
		  var funcToString = Function.prototype.toString;

		  /** Used to check objects for own properties. */
		  var hasOwnProperty = objectProto.hasOwnProperty;

		  /** Used to infer the `Object` constructor. */
		  var objectCtorString = funcToString.call(Object);

		  /**
		   * Used to resolve the
		   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		   * of values.
		   */
		  var objectToString = objectProto.toString;

		  /**
		   * Checks if `value` is a plain object, that is, an object created by the
		   * `Object` constructor or one with a `[[Prototype]]` of `null`.
		   *
		   * @static
		   * @memberOf _
		   * @since 0.8.0
		   * @category Lang
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is a plain object,
		   *  else `false`.
		   * @example
		   *
		   * function Foo() {
		   *   this.a = 1;
		   * }
		   *
		   * _.isPlainObject(new Foo);
		   * // => false
		   *
		   * _.isPlainObject([1, 2, 3]);
		   * // => false
		   *
		   * _.isPlainObject({ 'x': 0, 'y': 0 });
		   * // => true
		   *
		   * _.isPlainObject(Object.create(null));
		   * // => true
		   */
		  function isPlainObject(value) {
		    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
		      return false;
		    }
		    var proto = getPrototype(value);
		    if (proto === null) {
		      return true;
		    }
		    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
		  }

		  module.exports = isPlainObject;
		});

		var isPlainObject$1 = isPlainObject && typeof isPlainObject === 'object' && 'default' in isPlainObject ? isPlainObject['default'] : isPlainObject;

		var index = __commonjs(function (module) {
		    /**
		     * Copyright 2015, Yahoo! Inc.
		     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		     */
		    'use strict';

		    var REACT_STATICS = {
		        childContextTypes: true,
		        contextTypes: true,
		        defaultProps: true,
		        displayName: true,
		        getDefaultProps: true,
		        mixins: true,
		        propTypes: true,
		        type: true
		    };

		    var KNOWN_STATICS = {
		        name: true,
		        length: true,
		        prototype: true,
		        caller: true,
		        arguments: true,
		        arity: true
		    };

		    module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
		        if (typeof sourceComponent !== 'string') {
		            // don't hoist over string (html) components
		            var keys = Object.getOwnPropertyNames(sourceComponent);
		            for (var i = 0; i < keys.length; ++i) {
		                if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
		                    try {
		                        targetComponent[keys[i]] = sourceComponent[keys[i]];
		                    } catch (error) {}
		                }
		            }
		        }

		        return targetComponent;
		    };
		});

		var hoistStatics = index && typeof index === 'object' && 'default' in index ? index['default'] : index;

		var invariant = __commonjs(function (module) {
		  /**
		   * Copyright 2013-2015, Facebook, Inc.
		   * All rights reserved.
		   *
		   * This source code is licensed under the BSD-style license found in the
		   * LICENSE file in the root directory of this source tree. An additional grant
		   * of patent rights can be found in the PATENTS file in the same directory.
		   */

		  'use strict';

		  /**
		   * Use invariant() to assert state which your program assumes to be true.
		   *
		   * Provide sprintf-style format (only %s is supported) and arguments
		   * to provide information about what broke and what you were
		   * expecting.
		   *
		   * The invariant message will be stripped in production, but the invariant
		   * will remain to ensure logic does not differ in production.
		   */

		  var NODE_ENV = 'development';

		  var invariant = function (condition, format, a, b, c, d, e, f) {
		    if (NODE_ENV !== 'production') {
		      if (format === undefined) {
		        throw new Error('invariant requires an error message argument');
		      }
		    }

		    if (!condition) {
		      var error;
		      if (format === undefined) {
		        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
		      } else {
		        var args = [a, b, c, d, e, f];
		        var argIndex = 0;
		        error = new Error(format.replace(/%s/g, function () {
		          return args[argIndex++];
		        }));
		        error.name = 'Invariant Violation';
		      }

		      error.framesToPop = 1; // we don't care about invariant's own frame
		      throw error;
		    }
		  };

		  module.exports = invariant;
		});

		var invariant$1 = invariant && typeof invariant === 'object' && 'default' in invariant ? invariant['default'] : invariant;

		var defaultMapStateToProps = function (state) {
		  return {};
		}; // eslint-disable-line no-unused-vars
		var defaultMapDispatchToProps = function (dispatch) {
		  return { dispatch: dispatch };
		};
		var defaultMergeProps = function (stateProps, dispatchProps, parentProps) {
		  return babelHelpers.extends({}, parentProps, stateProps, dispatchProps);
		};

		function getDisplayName(WrappedComponent) {
		  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
		}

		var errorObject = { value: null };
		function tryCatch(fn, ctx) {
		  try {
		    return fn.apply(ctx);
		  } catch (e) {
		    errorObject.value = e;
		    return errorObject;
		  }
		}

		// Helps track hot reloading.
		var nextVersion = 0;

		function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
		  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

		  var shouldSubscribe = Boolean(mapStateToProps);
		  var mapState = mapStateToProps || defaultMapStateToProps;

		  var mapDispatch = void 0;
		  if (typeof mapDispatchToProps === 'function') {
		    mapDispatch = mapDispatchToProps;
		  } else if (!mapDispatchToProps) {
		    mapDispatch = defaultMapDispatchToProps;
		  } else {
		    mapDispatch = wrapActionCreators(mapDispatchToProps);
		  }

		  var finalMergeProps = mergeProps || defaultMergeProps;
		  var _options$pure = options.pure;
		  var pure = _options$pure === undefined ? true : _options$pure;
		  var _options$withRef = options.withRef;
		  var withRef = _options$withRef === undefined ? false : _options$withRef;

		  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

		  // Helps track hot reloading.
		  var version = nextVersion++;

		  return function wrapWithConnect(WrappedComponent) {
		    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

		    function checkStateShape(props, methodName) {
		      if (!isPlainObject$1(props)) {
		        warning(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
		      }
		    }

		    function computeMergedProps(stateProps, dispatchProps, parentProps) {
		      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
		      if (true) {
		        checkStateShape(mergedProps, 'mergeProps');
		      }
		      return mergedProps;
		    }

		    var Connect = function (_Component) {
		      babelHelpers.inherits(Connect, _Component);

		      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
		        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
		      };

		      function Connect(props, context) {
		        babelHelpers.classCallCheck(this, Connect);

		        var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props, context));

		        _this.version = version;
		        _this.store = props.store || context.store;

		        invariant$1(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

		        var storeState = _this.store.getState();
		        _this.state = { storeState: storeState };
		        _this.clearCache();
		        return _this;
		      }

		      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
		        if (!this.finalMapStateToProps) {
		          return this.configureFinalMapState(store, props);
		        }

		        var state = store.getState();
		        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

		        if (true) {
		          checkStateShape(stateProps, 'mapStateToProps');
		        }
		        return stateProps;
		      };

		      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
		        var mappedState = mapState(store.getState(), props);
		        var isFactory = typeof mappedState === 'function';

		        this.finalMapStateToProps = isFactory ? mappedState : mapState;
		        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

		        if (isFactory) {
		          return this.computeStateProps(store, props);
		        }

		        if (true) {
		          checkStateShape(mappedState, 'mapStateToProps');
		        }
		        return mappedState;
		      };

		      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
		        if (!this.finalMapDispatchToProps) {
		          return this.configureFinalMapDispatch(store, props);
		        }

		        var dispatch = store.dispatch;

		        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

		        if (true) {
		          checkStateShape(dispatchProps, 'mapDispatchToProps');
		        }
		        return dispatchProps;
		      };

		      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
		        var mappedDispatch = mapDispatch(store.dispatch, props);
		        var isFactory = typeof mappedDispatch === 'function';

		        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
		        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

		        if (isFactory) {
		          return this.computeDispatchProps(store, props);
		        }

		        if (true) {
		          checkStateShape(mappedDispatch, 'mapDispatchToProps');
		        }
		        return mappedDispatch;
		      };

		      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
		        var nextStateProps = this.computeStateProps(this.store, this.props);
		        if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
		          return false;
		        }

		        this.stateProps = nextStateProps;
		        return true;
		      };

		      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
		        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
		        if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
		          return false;
		        }

		        this.dispatchProps = nextDispatchProps;
		        return true;
		      };

		      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
		        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
		        if (this.mergedProps && checkMergedEquals && shallowEqual(nextMergedProps, this.mergedProps)) {
		          return false;
		        }

		        this.mergedProps = nextMergedProps;
		        return true;
		      };

		      Connect.prototype.isSubscribed = function isSubscribed() {
		        return typeof this.unsubscribe === 'function';
		      };

		      Connect.prototype.trySubscribe = function trySubscribe() {
		        if (shouldSubscribe && !this.unsubscribe) {
		          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
		          this.handleChange();
		        }
		      };

		      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
		        if (this.unsubscribe) {
		          this.unsubscribe();
		          this.unsubscribe = null;
		        }
		      };

		      Connect.prototype.componentDidMount = function componentDidMount() {
		        this.trySubscribe();
		      };

		      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		        if (!pure || !shallowEqual(nextProps, this.props)) {
		          this.haveOwnPropsChanged = true;
		        }
		      };

		      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
		        this.tryUnsubscribe();
		        this.clearCache();
		      };

		      Connect.prototype.clearCache = function clearCache() {
		        this.dispatchProps = null;
		        this.stateProps = null;
		        this.mergedProps = null;
		        this.haveOwnPropsChanged = true;
		        this.hasStoreStateChanged = true;
		        this.haveStatePropsBeenPrecalculated = false;
		        this.statePropsPrecalculationError = null;
		        this.renderedElement = null;
		        this.finalMapDispatchToProps = null;
		        this.finalMapStateToProps = null;
		      };

		      Connect.prototype.handleChange = function handleChange() {
		        if (!this.unsubscribe) {
		          return;
		        }

		        var storeState = this.store.getState();
		        var prevStoreState = this.state.storeState;
		        if (pure && prevStoreState === storeState) {
		          return;
		        }

		        if (pure && !this.doStatePropsDependOnOwnProps) {
		          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
		          if (!haveStatePropsChanged) {
		            return;
		          }
		          if (haveStatePropsChanged === errorObject) {
		            this.statePropsPrecalculationError = errorObject.value;
		          }
		          this.haveStatePropsBeenPrecalculated = true;
		        }

		        this.hasStoreStateChanged = true;
		        this.setState({ storeState: storeState });
		      };

		      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
		        invariant$1(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

		        return this.refs.wrappedInstance;
		      };

		      Connect.prototype.render = function render() {
		        var haveOwnPropsChanged = this.haveOwnPropsChanged;
		        var hasStoreStateChanged = this.hasStoreStateChanged;
		        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
		        var statePropsPrecalculationError = this.statePropsPrecalculationError;
		        var renderedElement = this.renderedElement;


		        this.haveOwnPropsChanged = false;
		        this.hasStoreStateChanged = false;
		        this.haveStatePropsBeenPrecalculated = false;
		        this.statePropsPrecalculationError = null;

		        if (statePropsPrecalculationError) {
		          throw statePropsPrecalculationError;
		        }

		        var shouldUpdateStateProps = true;
		        var shouldUpdateDispatchProps = true;
		        if (pure && renderedElement) {
		          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
		          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
		        }

		        var haveStatePropsChanged = false;
		        var haveDispatchPropsChanged = false;
		        if (haveStatePropsBeenPrecalculated) {
		          haveStatePropsChanged = true;
		        } else if (shouldUpdateStateProps) {
		          haveStatePropsChanged = this.updateStatePropsIfNeeded();
		        }
		        if (shouldUpdateDispatchProps) {
		          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
		        }

		        var haveMergedPropsChanged = true;
		        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
		          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
		        } else {
		          haveMergedPropsChanged = false;
		        }

		        if (!haveMergedPropsChanged && renderedElement) {
		          return renderedElement;
		        }

		        if (withRef) {
		          this.renderedElement = preact.h(WrappedComponent, babelHelpers.extends({}, this.mergedProps, {
		            ref: 'wrappedInstance'
		          }));
		        } else {
		          this.renderedElement = preact.h(WrappedComponent, this.mergedProps);
		        }

		        return this.renderedElement;
		      };

		      return Connect;
		    }(preact.Component);

		    Connect.displayName = connectDisplayName;
		    Connect.WrappedComponent = WrappedComponent;
		    Connect.contextTypes = {
		      store: storeShape
		    };


		    if (true) {
		      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
		        if (this.version === version) {
		          return;
		        }

		        // We are hot reloading!
		        this.version = version;
		        this.trySubscribe();
		        this.clearCache();
		      };
		    }

		    return hoistStatics(Connect, WrappedComponent);
		  };
		}

		exports.Provider = Provider;
		exports.connect = connect;

	}));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) if (void 0 !== props[i]) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj, offset) {
	        return [].slice.call(obj, offset);
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function empty(x) {
	        return void 0 === x || null === x;
	    }
	    function falsey(value) {
	        return value === !1 || empty(value);
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function h(nodeName, attributes, firstChild) {
	        var children, arr, lastSimple, len = arguments.length;
	        if (len > 2) {
	            var type = typeof firstChild;
	            if (3 === len && 'object' !== type && 'function' !== type) {
	                if (!falsey(firstChild)) children = [ String(firstChild) ];
	            } else {
	                children = [];
	                for (var i = 2; i < len; i++) {
	                    var _p = arguments[i];
	                    if (!falsey(_p)) {
	                        if (_p.join) arr = _p; else (arr = SHARED_TEMP_ARRAY)[0] = _p;
	                        for (var j = 0; j < arr.length; j++) {
	                            var child = arr[j], simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
	                            if (simple && !isString(child)) child = String(child);
	                            if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) {
	                                children.push(child);
	                                lastSimple = simple;
	                            }
	                        }
	                    } else ;
	                }
	            }
	        } else if (attributes && attributes.children) return h(nodeName, attributes, attributes.children);
	        if (attributes) {
	            if (attributes.children) delete attributes.children;
	            if (!isFunction(nodeName)) {
	                if ('className' in attributes) {
	                    attributes.class = attributes.className;
	                    delete attributes.className;
	                }
	                lastSimple = attributes.class;
	                if (lastSimple && !isString(lastSimple)) attributes.class = hashToClassName(lastSimple);
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? toArray(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0];
	        return function(e) {
	            var _component$setState;
	            var v, i, t = e && e.currentTarget || this, s = component.state, obj = s;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = t.nodeName ? (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value : e;
	            if (isFunction(v)) v = v.call(t);
	            if (path.length > 1) {
	                for (i = 0; i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || setImmediate)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var p, currentItems = items;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            while (p = currentItems.pop()) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function ensureNodeData(node, data) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
	    }
	    function getNodeType(node) {
	        if (node instanceof Text) return 3;
	        if (node instanceof Element) return 1; else return 0;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, value, old, isSvg) {
	        ensureNodeData(node)[name] = value;
	        if ('key' !== name && 'children' !== name) if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if ('o' === name[0] && 'n' === name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy);
	            } else if (l[name]) node.removeEventListener(name, eventProxy);
	            l[name] = value;
	        } else if ('type' !== name && !isSvg && name in node) {
	            setProperty(node, name, empty(value) ? '' : value);
	            if (falsey(value)) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (falsey(value)) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function getRawNodeAttributes(node) {
	        var attrs = {};
	        for (var i = node.attributes.length; i--; ) attrs[node.attributes[i].name] = node.attributes[i].value;
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return 3 === getNodeType(node);
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var defaultProps = vnode.nodeName.defaultProps, props = clone(defaultProps || vnode.attributes);
	        if (defaultProps) extend(props, vnode.attributes);
	        if (vnode.children) props.children = vnode.children;
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = toLowerCase(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        ensureNodeData(node);
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (1 === getNodeType(node)) {
	            ensureNodeData(node, getRawNodeAttributes(node));
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) if (c.componentDidMount) c.componentDidMount();
	    }
	    function diff(dom, vnode, context, mountAll, parent) {
	        diffLevel++;
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (empty(vnode)) return document.createComment('');
	        if (isString(vnode)) {
	            if (dom) {
	                if (3 === getNodeType(dom) && dom.parentNode) {
	                    if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	                    return dom;
	                }
	                collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var svgMode, out = dom, nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        svgMode = 'svg' === toLowerCase(nodeName);
	        if (svgMode) isSvgMode = !0;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vnode.children && 1 === vnode.children.length && 'string' == typeof vnode.children[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) out.firstChild.nodeValue = vnode.children[0]; else if (vnode.children || out.firstChild) innerDiffNode(out, vnode.children, context, mountAll);
	        diffAttributes(out, vnode.attributes);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        if (svgMode) isSvgMode = !1;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            if (keyedLen && vchild.attributes) {
	                var key = vchild.key;
	                if (!empty(key) && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            }
	            if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs) {
	        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
	        for (var _name in old) if (!(attrs && _name in attrs)) setAccessor(dom, _name, null, old[_name], isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!(_name2 in old) || attrs[_name2] != ('value' === _name2 || 'selected' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2])) setAccessor(dom, _name2, attrs[_name2], old[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        var b = component.base;
	        if (!component._disableRendering) {
	            component._disableRendering = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (empty(b) || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disableRendering = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !b) renderComponent(component, 1, mountAll); else triggerComponentRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll) {
	        if (!component._disableRendering) {
	            var skip, rendered, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase, nextSibling = initialBase && initialBase.nextSibling, baseParent = initialBase && initialBase.parentNode, initialComponent = initialBase && initialBase._component, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = initialChildComponent, childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1);
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate);
	                    }
	                }
	                if (initialBase && base !== initialBase) {
	                    if (baseParent && base !== baseParent) baseParent.insertBefore(base, nextSibling || null);
	                    if (!toUnmount && initialComponent === component && !initialChildComponent && initialBase.parentNode) {
	                        initialBase._component = null;
	                        recollectNodeTree(initialBase);
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) {
	                mounts.unshift(component);
	                if (!diffLevel) flushMounts();
	            } else if (!skip && component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) c.nextBase = dom;
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        var base = component.base;
	        component._disableRendering = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context || {};
	        this.props = props;
	        this.state = this.getInitialState && this.getInitialState() || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var setImmediate = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var options = {
	        vnode: empty
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var items = [];
	    var itemsOffline = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + eventPath;
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(5).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate, __webpack_require__(4).clearImmediate))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(7);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(15);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(17);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(18);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(19);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(16);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(8);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(13);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(9),
	    isHostObject = __webpack_require__(11),
	    isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(10);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	module.exports = getPrototype;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(14)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(7);

	var _isPlainObject = __webpack_require__(8);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(16);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(19);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["mojs"] = factory();
		else
			root["mojs"] = factory();
	})(this, function() {
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
	/******/ 	__webpack_require__.p = "build/";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(53);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(59);
		__webpack_require__(58);
		module.exports = __webpack_require__(63)('iterator');

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		var _tweenable = __webpack_require__(11);

		var _tweenable2 = _interopRequireDefault(_tweenable);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var h = __webpack_require__(19);
		var Bit = __webpack_require__(26);
		var shapesMap = __webpack_require__(20);


		// TODO
		//  - refactor
		//    - add setIfChanged to Module
		//  --
		//  - tween for every prop

		var Shape = function (_Tunable) {
		  (0, _inherits3.default)(Shape, _Tunable);

		  function Shape() {
		    (0, _classCallCheck3.default)(this, Shape);
		    return (0, _possibleConstructorReturn3.default)(this, _Tunable.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		  */

		  Shape.prototype._declareDefaults = function _declareDefaults() {
		    // DEFAULTS / APIs
		    this._defaults = {
		      // where to append the module to [selector, HTMLElement]
		      parent: document.body,
		      // class name for the `el`
		      className: '',
		      // Possible values: [circle, line, zigzag, rect, polygon, cross, equal ]
		      shape: 'circle',
		      // ∆ :: Possible values: [color name, rgb, rgba, hex]
		      stroke: 'transparent',
		      // ∆ :: Possible values: [ 0..1 ]
		      strokeOpacity: 1,
		      // Possible values: ['butt' | 'round' | 'square']
		      strokeLinecap: '',
		      // ∆ :: Possible values: [ number ]
		      strokeWidth: 2,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      strokeDasharray: 0,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      strokeDashoffset: 0,
		      // ∆ :: Possible values: [color name, rgb, rgba, hex]
		      fill: 'deeppink',
		      // ∆ :: Possible values: [ 0..1 ]
		      fillOpacity: 1,
		      // {Boolean} - if should hide module with `opacity` instead of `display`
		      isSoftHide: true,
		      // {Boolean} - if should trigger composite layer for the `el`
		      isForce3d: false,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      left: '50%',
		      // ∆ :: Units :: Possible values: [ number, string ]
		      top: '50%',
		      // ∆ :: Units :: Possible values: [ number, string ]
		      x: 0,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      y: 0,
		      // ∆ :: Possible values: [ number ]
		      angle: 0,
		      // ∆ :: Possible values: [ number ]
		      scale: 1,
		      // ∆ :: Possible values: [ number ] Fallbacks to `scale`.
		      scaleX: null,
		      // ∆ :: Possible values: [ number ] Fallbacks to `scale`.
		      scaleY: null,
		      // ∆ :: Possible values: [ number, string ]
		      origin: '50% 50%',
		      // ∆ :: Possible values: [ 0..1 ]
		      opacity: 1,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      rx: 0,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      ry: 0,
		      // ∆ :: Possible values: [ number ]
		      points: 3,
		      // ∆ :: Possible values: [ number ]
		      radius: 50,
		      // ∆ :: Possible values: [ number ]
		      radiusX: null,
		      // ∆ :: Possible values: [ number ]
		      radiusY: null,
		      // Possible values: [ boolean ]
		      isShowStart: false,
		      // Possible values: [ boolean ]
		      isShowEnd: true,
		      // Possible values: [ boolean ]
		      isRefreshState: true,
		      // Possible values: [ number > 0 ]
		      duration: 400,
		      // Possible values: [ number ]

		      /* technical ones: */
		      // explicit width of the module canvas
		      width: null,
		      // explicit height of the module canvas
		      height: null,
		      // Possible values: [ number ]
		      // sizeGap:          0,
		      /* [boolean] :: If should have child shape. */
		      isWithShape: true,
		      // context for all the callbacks
		      callbacksContext: this
		    };
		  };
		  /*
		    Method to start the animation with optional new options.
		    @public
		    @overrides @ Tunable
		    @param {Object} New options to set on the run.
		    @returns {Object} this.
		  */


		  Shape.prototype.tune = function tune(o) {
		    _Tunable.prototype.tune.call(this, o);
		    // update shapeModule's size to the max in `then` chain
		    this._getMaxSizeInChain();
		    return this;
		  };
		  /*
		    Method to create a then record for the module.
		    @public
		    @overrides @ Thenable
		    @param    {Object} Options for the next animation.
		    @returns  {Object} this.
		  */


		  Shape.prototype.then = function then(o) {
		    // this._makeTimeline()
		    _Tunable.prototype.then.call(this, o);
		    // update shapeModule's size to the max in `then` chain
		    this._getMaxSizeInChain();
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to declare variables.
		    @overrides Thenable
		  */


		  Shape.prototype._vars = function _vars() {
		    // call _vars method on Thenable
		    _Tunable.prototype._vars.call(this);
		    this._lastSet = {};
		    // save _master module
		    this._masterModule = this._o.masterModule;
		    // save previous module in the chain
		    this._prevChainModule = this._o.prevChainModule;
		    // set isChained flag based on prevChainModule option
		    this._isChained = !!this._masterModule;
		    // should draw on foreign svg canvas
		    this.isForeign = !!this._o.ctx;
		    // this._o.isTimelineLess = true;
		    // should take an svg element as self bit
		    return this.isForeignBit = !!this._o.shape;
		  };
		  /*
		    Method to initialize modules presentation.
		    @private
		    @overrides Module
		  */


		  Shape.prototype._render = function _render() {
		    if (!this._isRendered && !this._isChained) {
		      // create `mojs` shape element
		      this.el = document.createElement('div');
		      // set name on the `el`
		      this.el.setAttribute('data-name', 'mojs-shape');
		      // set class on the `el`
		      this.el.setAttribute('class', this._props.className);
		      // create shape module
		      this._createShape();
		      // append `el` to parent
		      this._props.parent.appendChild(this.el);
		      // set position styles on the el
		      this._setElStyles();
		      // set initial position for the first module in the chain
		      this._setProgress(0, 0);
		      // show at start if `isShowStart`
		      if (this._props.isShowStart) {
		        this._show();
		      } else {
		        this._hide();
		      }
		      // set `_isRendered` hatch
		      this._isRendered = true;
		    } else if (this._isChained) {
		      // save elements from master module
		      this.el = this._masterModule.el;
		      this.shapeModule = this._masterModule.shapeModule;
		    }

		    return this;
		  };
		  /*
		    Method to set el styles on initialization.
		    @private
		  */


		  Shape.prototype._setElStyles = function _setElStyles() {
		    if (!this.el) {
		      return;
		    }
		    // if (!this.isForeign) {
		    var p = this._props,
		        style = this.el.style,
		        width = p.shapeWidth,
		        height = p.shapeHeight;

		    style.position = 'absolute';
		    this._setElSizeStyles(width, height);

		    if (p.isForce3d) {
		      var name = 'backface-visibility';
		      style['' + name] = 'hidden';
		      style['' + h.prefix.css + name] = 'hidden';
		    }
		    // }
		  };
		  /*
		    Method to set `width`/`height`/`margins` to the `el` styles.
		    @param {Number} Width.
		    @param {height} Height.
		  */


		  Shape.prototype._setElSizeStyles = function _setElSizeStyles(width, height) {
		    var style = this.el.style;
		    style.width = width + 'px';
		    style.height = height + 'px';
		    style['margin-left'] = -width / 2 + 'px';
		    style['margin-top'] = -height / 2 + 'px';
		  };
		  /*
		    Method to draw shape.
		    @private
		  */


		  Shape.prototype._draw = function _draw() {
		    if (!this.shapeModule) {
		      return;
		    }

		    var p = this._props,
		        bP = this.shapeModule._props;
		    // set props on bit
		    // bP.x                    = this._origin.x;
		    // bP.y                    = this._origin.y;
		    bP.rx = p.rx;
		    bP.ry = p.ry;
		    bP.stroke = p.stroke;
		    bP['stroke-width'] = p.strokeWidth;
		    bP['stroke-opacity'] = p.strokeOpacity;
		    bP['stroke-dasharray'] = p.strokeDasharray;
		    bP['stroke-dashoffset'] = p.strokeDashoffset;
		    bP['stroke-linecap'] = p.strokeLinecap;
		    bP['fill'] = p.fill;
		    bP['fill-opacity'] = p.fillOpacity;
		    bP.radius = p.radius;
		    bP.radiusX = p.radiusX;
		    bP.radiusY = p.radiusY;
		    bP.points = p.points;

		    this.shapeModule._draw();
		    this._drawEl();
		  };
		  /*
		    Method to set current modules props to main div el.
		    @private
		  */


		  Shape.prototype._drawEl = function _drawEl() {
		    // return;
		    if (this.el == null) {
		      return true;
		    }
		    var p = this._props;
		    var style = this.el.style;

		    // style.opacity = p.opacity;
		    this._isPropChanged('opacity') && (style.opacity = p.opacity);
		    if (!this.isForeign) {
		      this._isPropChanged('left') && (style.left = p.left);
		      this._isPropChanged('top') && (style.top = p.top);

		      var isX = this._isPropChanged('x'),
		          isY = this._isPropChanged('y'),
		          isTranslate = isX || isY,
		          isScaleX = this._isPropChanged('scaleX'),
		          isScaleY = this._isPropChanged('scaleY'),
		          isScale = this._isPropChanged('scale'),
		          isScale = isScale || isScaleX || isScaleY,
		          isRotate = this._isPropChanged('angle');

		      if (isTranslate || isScale || isRotate) {
		        var transform = this._fillTransform();
		        style[h.prefix.css + 'transform'] = transform;
		        style['transform'] = transform;
		      }

		      if (this._isPropChanged('origin') || this._deltas['origin']) {
		        var origin = this._fillOrigin();
		        style[h.prefix.css + 'transform-origin'] = origin;
		        style['transform-origin'] = origin;
		      }
		    }
		  };
		  /*
		    Method to check if property changed after the latest check.
		    @private
		    @param {String} Name of the property to check.
		    @returns {Boolean}
		  */


		  Shape.prototype._isPropChanged = function _isPropChanged(name) {
		    // if there is no recod for the property - create it
		    if (this._lastSet[name] == null) {
		      this._lastSet[name] = {};
		    }
		    if (this._lastSet[name].value !== this._props[name]) {
		      this._lastSet[name].value = this._props[name];
		      return true;
		    } else {
		      return false;
		    }
		  };
		  /*
		    Method to tune new option on run.
		    @private
		    @override @ Module
		    @param {Object}  Option to tune on run.
		  */


		  Shape.prototype._tuneNewOptions = function _tuneNewOptions(o) {
		    // call super on Module
		    _Tunable.prototype._tuneNewOptions.call(this, o);
		    // return if empty object
		    if (!(o != null && (0, _keys2.default)(o).length)) {
		      return 1;
		    }

		    // this._calcSize();
		    this._setElStyles();
		  };
		  /*
		    Method to get max radiusX value.
		    @private
		    @param {String} Radius name.
		  */


		  Shape.prototype._getMaxRadius = function _getMaxRadius(name) {
		    var selfSize, selfSizeX;
		    selfSize = this._getRadiusSize('radius');
		    return this._getRadiusSize(name, selfSize);
		  };
		  /*
		    Method to increase calculated size based on easing.
		    @private
		  */


		  Shape.prototype._increaseSizeWithEasing = function _increaseSizeWithEasing() {
		    var p = this._props,
		        easing = this._o.easing,
		        isStringEasing = easing && typeof easing === 'string';

		    switch (isStringEasing && easing.toLowerCase()) {
		      case 'elastic.out':
		      case 'elastic.inout':
		        p.size *= 1.25;
		        break;
		      case 'back.out':
		      case 'back.inout':
		        p.size *= 1.1;
		    }
		  };
		  /*
		    Method to increase calculated size based on bit ratio.
		    @private
		  */
		  // _increaseSizeWithBitRatio () {
		  //   var p   = this._props;
		  //   // p.size *= this.shape._props.ratio;
		  //   p.size += 2 * p.sizeGap;
		  // }
		  /*
		    Method to get maximum radius size with optional fallback.
		    @private
		    @param {Object}
		      @param key {String} Name of the radius - [radius|radiusX|radiusY].
		      @param @optional fallback {Number}  Optional number to set if there
		                                          is no value for the key.
		  */


		  Shape.prototype._getRadiusSize = function _getRadiusSize(name) {
		    var fallback = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		    var delta = this._deltas[name];
		    // if value is delta value
		    if (delta != null) {
		      // get maximum number between start and end values of the delta
		      return Math.max(Math.abs(delta.end), Math.abs(delta.start));
		    } else if (this._props[name] != null) {
		      // else get the value from props object
		      return parseFloat(this._props[name]);
		    } else {
		      return fallback;
		    }
		  };
		  /*
		    Method to get max shape canvas size and save it to _props.
		    @private
		  */


		  Shape.prototype._getShapeSize = function _getShapeSize() {
		    var p = this._props,

		    // get maximum stroke value
		    stroke = this._getMaxStroke();
		    // save shape `width` and `height` to `_props`
		    p.shapeWidth = p.width != null ? p.width : 2 * this._getMaxRadius('radiusX') + stroke;

		    p.shapeHeight = p.height != null ? p.height : 2 * this._getMaxRadius('radiusY') + stroke;
		  };
		  /*
		    Method to create shape.
		    @private
		  */


		  Shape.prototype._createShape = function _createShape() {
		    // calculate max shape canvas size and set to _props
		    this._getShapeSize();
		    // don't create actual shape if !`isWithShape`
		    if (!this._props.isWithShape) {
		      return;
		    }

		    var p = this._props;
		    // get shape's class
		    var Shape = shapesMap.getShape(this._props.shape);
		    // create `_shape` module
		    this.shapeModule = new Shape({
		      width: p.shapeWidth,
		      height: p.shapeHeight,
		      parent: this.el
		    });
		  };
		  /*
		    Method to get max size in `then` chain
		    @private
		  */


		  Shape.prototype._getMaxSizeInChain = function _getMaxSizeInChain() {
		    var p = this._props,
		        maxW = 0,
		        maxH = 0;

		    for (var i = 0; i < this._modules.length; i++) {
		      this._modules[i]._getShapeSize();
		      maxW = Math.max(maxW, this._modules[i]._props.shapeWidth);
		      maxH = Math.max(maxH, this._modules[i]._props.shapeHeight);
		    }

		    this.shapeModule && this.shapeModule._setSize(maxW, maxH);
		    this._setElSizeStyles(maxW, maxH);
		  };
		  /*
		    Method to get max value of the strokeWidth.
		    @private
		  */


		  Shape.prototype._getMaxStroke = function _getMaxStroke() {
		    var p = this._props;
		    var dStroke = this._deltas['strokeWidth'];
		    return dStroke != null ? Math.max(dStroke.start, dStroke.end) : p.strokeWidth;
		  };
		  /*
		    Method to draw current progress of the deltas.
		    @private
		    @override @ Module
		    @param   {Number}  EasedProgress to set - [0..1].
		    @param   {Number}  Progress to set - [0..1].
		  */


		  Shape.prototype._setProgress = function _setProgress(easedProgress, progress) {
		    // call the super on Module
		    _module2.default.prototype._setProgress.call(this, easedProgress, progress);
		    // draw current progress
		    this._draw(easedProgress);
		  };
		  /*
		    Method to add callback overrides to passed object.
		    @private
		    @param {Object} Object to add the overrides to.
		  */


		  Shape.prototype._applyCallbackOverrides = function _applyCallbackOverrides(obj) {
		    var it = this,
		        p = this._props;
		    // specify control functions for the module
		    obj.callbackOverrides = {
		      onUpdate: function onUpdate(ep, p) {
		        return it._setProgress(ep, p);
		      },
		      onStart: function onStart(isFwd) {
		        // don't touch main `el` onStart in chained elements
		        if (it._isChained) {
		          return;
		        };
		        if (isFwd) {
		          it._show();
		        } else {
		          if (!p.isShowStart) {
		            it._hide();
		          }
		        }
		      },
		      onComplete: function onComplete(isFwd) {
		        // don't touch main `el` if not the last in `then` chain
		        if (!it._isLastInChain()) {
		          return;
		        }
		        if (isFwd) {
		          if (!p.isShowEnd) {
		            it._hide();
		          }
		        } else {
		          it._show();
		        }
		      },
		      onRefresh: function onRefresh(isBefore) {
		        p.isRefreshState && isBefore && it._refreshBefore();
		      }
		    };
		  };
		  /*
		    Method to setup tween and timeline options before creating them.
		    @override @ Tweenable
		    @private
		  */


		  Shape.prototype._transformTweenOptions = function _transformTweenOptions() {
		    this._applyCallbackOverrides(this._o);
		  };
		  /*
		    Method to create transform string.
		    @private
		    @returns {String} Transform string.
		  */


		  Shape.prototype._fillTransform = function _fillTransform() {
		    var p = this._props,
		        scaleX = p.scaleX != null ? p.scaleX : p.scale,
		        scaleY = p.scaleY != null ? p.scaleY : p.scale,
		        scale = scaleX + ', ' + scaleY;
		    return 'translate(' + p.x + ', ' + p.y + ') rotate(' + p.angle + 'deg) scale(' + scale + ')';
		  };
		  /*
		    Method to create transform-origin string.
		    @private
		    @returns {String} Transform string.
		  */


		  Shape.prototype._fillOrigin = function _fillOrigin() {
		    var p = this._props,
		        str = '';
		    for (var i = 0; i < p.origin.length; i++) {
		      str += p.origin[i].string + ' ';
		    }
		    return str;
		  };
		  /*
		    Method to refresh state befor startTime.
		    @private
		  */


		  Shape.prototype._refreshBefore = function _refreshBefore() {
		    // call setProgress with eased and normal progress
		    this._setProgress(this.tween._props.easing(0), 0);

		    if (this._props.isShowStart) {
		      this._show();
		    } else {
		      this._hide();
		    }
		  };

		  return Shape;
		}(_tunable2.default);

		exports.default = Shape;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _shape = __webpack_require__(2);

		var _shape2 = _interopRequireDefault(_shape);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  *TODO:*
		  ---
		  - tweak then chains
		*/

		var ShapeSwirl = function (_Shape) {
		  (0, _inherits3.default)(ShapeSwirl, _Shape);

		  function ShapeSwirl() {
		    (0, _classCallCheck3.default)(this, ShapeSwirl);
		    return (0, _possibleConstructorReturn3.default)(this, _Shape.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults and other default objects.
		    @private
		    @override @ Shape
		  */

		  ShapeSwirl.prototype._declareDefaults = function _declareDefaults() {
		    _Shape.prototype._declareDefaults.call(this);

		    /* _DEFAULTS ARE - Shape DEFAULTS + THESE: */

		    /* [boolean] :: If shape should follow sinusoidal path. */
		    this._defaults.isSwirl = true;
		    /* ∆ :: [number > 0] :: Degree size of the sinusoidal path. */
		    this._defaults.swirlSize = 10;
		    /* ∆ :: [number > 0] :: Frequency of the sinusoidal path. */
		    this._defaults.swirlFrequency = 3;
		    /* ∆ :: [number > 0] :: Sinusoidal path length scale. */
		    this._defaults.pathScale = 1;
		    /* ∆ :: [number] :: Degree shift for the sinusoidal path. */
		    this._defaults.degreeShift = 0;
		    /* ∆ :: [number] :: Radius of the shape. */
		    this._defaults.radius = 5;
		    // ∆ :: Units :: Possible values: [ number, string ]
		    this._defaults.x = 0;
		    // ∆ :: Units :: Possible values: [ number, string ]
		    this._defaults.y = 0;
		    // ∆ :: Possible values: [ number ]
		    this._defaults.scale = { 1: 0 };
		    /* [number: -1, 1] :: Directon of Swirl. */
		    this._defaults.direction = 1;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to copy _o options to _props with
		    fallback to _defaults.
		    @private
		    @override @ Module
		  */


		  ShapeSwirl.prototype._extendDefaults = function _extendDefaults() {
		    _Shape.prototype._extendDefaults.call(this);
		    this._calcPosData();
		  };
		  /*
		    Method to tune new oprions to _o and _props object.
		    @private
		    @overrides @ Module
		    @param {Object} Options object to tune to.
		  */


		  ShapeSwirl.prototype._tuneNewOptions = function _tuneNewOptions(o) {
		    if (o == null) {
		      return;
		    }

		    _Shape.prototype._tuneNewOptions.call(this, o);
		    if (o.x != null || o.y != null) {
		      this._calcPosData();
		    }
		  };
		  /*
		    Method to calculate Swirl's position data.
		    @private
		  */


		  ShapeSwirl.prototype._calcPosData = function _calcPosData() {
		    var x = this._getPosValue('x'),
		        y = this._getPosValue('y'),
		        angle = 90 + Math.atan(y.delta / x.delta || 0) * _h2.default.RAD_TO_DEG;

		    // console.log('x:', x);
		    // console.log('y:', y);

		    this._posData = {
		      radius: Math.sqrt(x.delta * x.delta + y.delta * y.delta),
		      angle: x.delta < 0 ? angle + 180 : angle,
		      x: x, y: y
		    };
		    // set the last position to _props
		    // this._calcSwirlXY( 1 );
		  };
		  /*
		    Gets `x` or `y` position value.
		    @private
		    @param {String} Name of the property.
		  */


		  ShapeSwirl.prototype._getPosValue = function _getPosValue(name) {
		    var delta = this._deltas[name];
		    if (delta) {
		      // delete from deltas to prevent normal
		      delete this._deltas[name];
		      return {
		        start: delta.start.value,
		        end: delta.end.value,
		        delta: delta.delta,
		        units: delta.end.unit
		      };
		    } else {
		      var pos = _h2.default.parseUnit(this._props[name]);
		      return { start: pos.value, end: pos.value, delta: 0, units: pos.unit };
		    }
		  };
		  /*
		    Method to calculate the progress of the Swirl.
		    @private
		    @overrides @ Shape
		    @param {Numer} Eased progress of the Swirl in range of [0..1]
		    @param {Numer} Progress of the Swirl in range of [0..1]
		  */


		  ShapeSwirl.prototype._setProgress = function _setProgress(easedProgress, progress) {
		    this._progress = easedProgress;
		    this._calcCurrentProps(easedProgress, progress);
		    this._calcSwirlXY(easedProgress);
		    // this._calcOrigin();
		    this._draw(easedProgress);
		  };
		  /*
		    Method to calculate x/y for Swirl's progress
		    @private
		    @mutates _props
		    @param {Number} Current progress in [0...1]
		  */


		  ShapeSwirl.prototype._calcSwirlXY = function _calcSwirlXY(proc) {
		    var p = this._props,
		        angle = this._posData.angle + p.degreeShift,
		        point = _h2.default.getRadialPoint({
		      angle: p.isSwirl ? angle + this._getSwirl(proc) : angle,
		      radius: proc * this._posData.radius * p.pathScale,
		      center: {
		        x: this._posData.x.start,
		        y: this._posData.y.start
		      }
		    });
		    // if foreign svg canvas - set position without units
		    var x = point.x,
		        y = point.y,
		        smallNumber = 0.000001;

		    // remove very small numbers to prevent exponential forms
		    if (x > 0 && x < smallNumber) {
		      x = smallNumber;
		    }
		    if (y > 0 && y < smallNumber) {
		      y = smallNumber;
		    }
		    if (x < 0 && x > -smallNumber) {
		      x = -smallNumber;
		    }
		    if (y < 0 && y > -smallNumber) {
		      y = -smallNumber;
		    }

		    p.x = this._o.ctx ? x : '' + x + this._posData.x.units;
		    p.y = this._o.ctx ? y : '' + y + this._posData.y.units;
		  };
		  /*
		    Method to get progress of the swirl.
		    @private
		    @param {Number} Progress of the Swirl.
		    @returns {Number} Progress of the swirl.
		  */


		  ShapeSwirl.prototype._getSwirl = function _getSwirl(proc) {
		    var p = this._props;
		    return p.direction * p.swirlSize * Math.sin(p.swirlFrequency * proc);
		  };
		  /*
		    Method to draw shape.
		    If !isWithShape - draw self el only, but not shape.
		    @private
		    @overrides @ Shape.
		  */


		  ShapeSwirl.prototype._draw = function _draw() {
		    // call _draw or just _drawEl @ Shape depending if there is `shape`
		    var methodName = this._props.isWithShape ? '_draw' : '_drawEl';
		    _shape2.default.prototype[methodName].call(this);
		  };

		  return ShapeSwirl;
		}(_shape2.default);

		exports.default = ShapeSwirl;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _shapeSwirl = __webpack_require__(3);

		var _shapeSwirl2 = _interopRequireDefault(_shapeSwirl);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// import Shape    from './shape';

		var Burst = function (_Tunable) {
		  (0, _inherits3.default)(Burst, _Tunable);

		  function Burst() {
		    (0, _classCallCheck3.default)(this, Burst);
		    return (0, _possibleConstructorReturn3.default)(this, _Tunable.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults.
		    @override @ ShapeSwirl.
		  */

		  Burst.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      /* [number > 0] :: Quantity of Burst particles. */
		      count: 5,
		      /* [0 < number < 360] :: Degree of the Burst. */
		      degree: 360,
		      /* ∆ :: [number > 0] :: Radius of the Burst. */
		      radius: { 0: 50 },
		      /* ∆ :: [number > 0] :: X radius of the Burst. */
		      radiusX: null,
		      /* ∆ :: [number > 0] :: Y radius of the Burst. */
		      radiusY: null,
		      /* [number >= 0] :: width of the main swirl. */
		      width: 0,
		      /* [number >= 0] :: height of the main swirl. */
		      height: 0
		    };
		  };
		  /*
		    Method to create a then record for the module.
		    @public
		    overrides @ Thenable
		    @param    {Object} Options for the next animation.
		    @returns  {Object} this.
		  */


		  Burst.prototype.then = function then(o) {
		    // remove tween properties (not callbacks)
		    this._removeTweenProperties(o);

		    var newMaster = this._masterThen(o),
		        newSwirls = this._childThen(o);

		    this._setSwirlDuration(newMaster, this._calcPackTime(newSwirls));

		    this.timeline._recalcTotalDuration();
		    return this;
		  };
		  /*
		    Method to start the animation with optional new options.
		    @public
		    @param {Object} New options to set on the run.
		    @returns {Object} this.
		  */


		  Burst.prototype.tune = function tune(o) {
		    if (o == null) {
		      return this;
		    }
		    // save timeline options to _timelineOptions
		    // and delete the timeline options on o
		    // cuz masterSwirl should not get them
		    this._saveTimelineOptions(o);

		    // add new timeline properties to timeline
		    this.timeline._setProp(this._timelineOptions);

		    // remove tween options (not callbacks)
		    this._removeTweenProperties(o);

		    // tune _props
		    this._tuneNewOptions(o);

		    // tune master swirl
		    this.masterSwirl.tune(o);

		    // tune child swirls
		    this._tuneSwirls(o);

		    // recalc time for modules
		    this._recalcModulesTime();
		    return this;
		  };

		  // ^ PUBLIC  METHODS ^
		  // v PRIVATE METHODS v

		  /*
		    Method to copy `_o` options to `_props` object
		    with fallback to `_defaults`.
		    @private
		    @overrides @ Module
		  */


		  Burst.prototype._extendDefaults = function _extendDefaults() {
		    // remove tween properties (not callbacks)
		    this._removeTweenProperties(this._o);
		    _Tunable.prototype._extendDefaults.call(this);
		  };
		  /*
		    Method to remove all tween (excluding
		    callbacks) props from object.
		    @private
		    @param {Object} Object which should be cleaned
		                    up from tween properties.
		  */


		  Burst.prototype._removeTweenProperties = function _removeTweenProperties(o) {
		    for (var key in _h2.default.tweenOptionMap) {
		      // remove all items that are not declared in _defaults
		      if (this._defaults[key] == null) {
		        delete o[key];
		      }
		    }
		  };
		  /*
		    Method to recalc modules chain tween
		    times after tuning new options.
		    @private
		  */


		  Burst.prototype._recalcModulesTime = function _recalcModulesTime() {
		    var modules = this.masterSwirl._modules,
		        swirls = this._swirls,
		        shiftTime = 0;

		    for (var i = 0; i < modules.length; i++) {
		      var tween = modules[i].tween,
		          packTime = this._calcPackTime(swirls[i]);
		      tween._setProp({ 'duration': packTime, 'shiftTime': shiftTime });
		      shiftTime += packTime;
		    }

		    this.timeline._recalcTotalDuration();
		  };
		  /*
		    Method to tune Swirls with new options.
		    @private
		    @param {Object} New options.
		  */


		  Burst.prototype._tuneSwirls = function _tuneSwirls(o) {
		    // get swirls in first pack
		    var pack0 = this._swirls[0];
		    for (var i = 0; i < pack0.length; i++) {
		      var swirl = pack0[i],
		          option = this._getChildOption(o || {}, i);

		      // since the `degreeShift` participate in
		      // children position calculations, we need to keep
		      // the old `degreeShift` value if new not set
		      var isDegreeShift = option.degreeShift != null;
		      if (!isDegreeShift) {
		        option.degreeShift = this._swirls[0][i]._props.degreeShift;
		      }

		      this._addBurstProperties(option, i);

		      // after burst position calculation - delete the old `degreeShift`
		      // from the options, since anyways we have copied it from the swirl
		      if (!isDegreeShift) {
		        delete option.degreeShift;
		      }

		      swirl.tune(option);
		      this._refreshBurstOptions(swirl._modules, i);
		    }
		  };
		  /*
		    Method to refresh burst x/y/angle options on further chained
		    swirls, because they will be overriden after `tune` call on
		    very first swirl.
		    @param {Array} Chained modules array
		    param {Number} Index of the first swirl in the chain.
		  */


		  Burst.prototype._refreshBurstOptions = function _refreshBurstOptions(modules, i) {
		    for (var j = 1; j < modules.length; j++) {
		      var module = modules[j],
		          options = {};
		      this._addBurstProperties(options, i, j);
		      module._tuneNewOptions(options);
		    }
		  };
		  /*
		    Method to call then on masterSwirl.
		    @param {Object} Then options.
		    @returns {Object} New master swirl.
		  */


		  Burst.prototype._masterThen = function _masterThen(o) {
		    this.masterSwirl.then(o);
		    // get the latest master swirl in then chain
		    var newMasterSwirl = _h2.default.getLastItem(this.masterSwirl._modules);
		    // save to masterSwirls
		    this._masterSwirls.push(newMasterSwirl);
		    return newMasterSwirl;
		  };
		  /*
		    Method to call then on child swilrs.
		    @param {Object} Then options.
		    @return {Array} Array of new Swirls.
		  */


		  Burst.prototype._childThen = function _childThen(o) {
		    var pack = this._swirls[0],
		        newPack = [];

		    for (var i = 0; i < pack.length; i++) {
		      // get option by modulus
		      var options = this._getChildOption(o, i);
		      var swirl = pack[i];
		      var lastSwirl = _h2.default.getLastItem(swirl._modules);
		      // add new Master Swirl as parent of new childswirl
		      options.parent = this.el;

		      this._addBurstProperties(options, i, this._masterSwirls.length - 1);

		      swirl.then(options);

		      // save the new item in `then` chain
		      newPack.push(_h2.default.getLastItem(swirl._modules));
		    }
		    // save the pack to _swirls object
		    this._swirls[this._masterSwirls.length - 1] = newPack;
		    return newPack;
		  };
		  /*
		    Method to initialize properties.
		    @private
		    @overrides @ Thenable
		  */


		  Burst.prototype._vars = function _vars() {
		    _Tunable.prototype._vars.call(this);
		    // just buffer timeline for calculations
		    this._bufferTimeline = new _timeline2.default();
		  };
		  /*
		    Method for initial render of the module.
		  */


		  Burst.prototype._render = function _render() {
		    this._o.isWithShape = false;
		    this._o.isSwirl = this._props.isSwirl;
		    this._o.callbacksContext = this;
		    // save timeline options and remove from _o
		    // cuz the master swirl should not get them
		    this._saveTimelineOptions(this._o);

		    this.masterSwirl = new MainSwirl(this._o);
		    this._masterSwirls = [this.masterSwirl];
		    this.el = this.masterSwirl.el;

		    this._renderSwirls();
		  };
		  /*
		    Method for initial render of swirls.
		    @private
		  */


		  Burst.prototype._renderSwirls = function _renderSwirls() {
		    var p = this._props,
		        pack = [];

		    for (var i = 0; i < p.count; i++) {
		      var option = this._getChildOption(this._o, i);
		      pack.push(new ChildSwirl(this._addOptionalProps(option, i)));
		    }
		    this._swirls = { 0: pack };
		    this._setSwirlDuration(this.masterSwirl, this._calcPackTime(pack));
		  };
		  /*
		    Method to save timeline options to _timelineOptions
		    and delete the property on the object.
		    @private
		    @param {Object} The object to save the timeline options from.
		  */


		  Burst.prototype._saveTimelineOptions = function _saveTimelineOptions(o) {
		    this._timelineOptions = o.timeline;
		    delete o.timeline;
		  };
		  /*
		    Method to calculate total time of array of
		    concurrent tweens.
		    @param   {Array}  Pack to calculate the total time for.
		    @returns {Number} Total pack duration.
		  */


		  Burst.prototype._calcPackTime = function _calcPackTime(pack) {
		    var maxTime = 0;
		    for (var i = 0; i < pack.length; i++) {
		      var tween = pack[i].tween,
		          p = tween._props;

		      maxTime = Math.max(p.repeatTime / p.speed, maxTime);
		    }

		    return maxTime;
		  };
		  /*
		    Method to set duration for Swirl.
		    @param {Object} Swirl instance to set the duration to.
		    @param {Number} Duration to set.
		  */


		  Burst.prototype._setSwirlDuration = function _setSwirlDuration(swirl, duration) {
		    swirl.tween._setProp('duration', duration);
		    var isRecalc = swirl.timeline && swirl.timeline._recalcTotalDuration;
		    isRecalc && swirl.timeline._recalcTotalDuration();
		  };
		  /*
		    Method to get childOption form object call by modulus.
		    @private
		    @param   {Object} Object to look in.
		    @param   {Number} Index of the current Swirl.
		    @returns {Object} Options for the current swirl.
		  */


		  Burst.prototype._getChildOption = function _getChildOption(obj, i) {
		    var options = {};
		    for (var key in obj.children) {
		      options[key] = this._getPropByMod(key, i, obj.children);
		    }
		    return options;
		  };
		  /*
		    Method to get property by modulus.
		    @private
		    @param {String} Name of the property.
		    @param {Number} Index for the modulus.
		    @param {Object} Source object to check in.
		    @returns {Any} Property.
		  */


		  Burst.prototype._getPropByMod = function _getPropByMod(name, index) {
		    var sourceObj = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		    var prop = sourceObj[name];
		    return _h2.default.isArray(prop) ? prop[index % prop.length] : prop;
		  };
		  /*
		    Method to add optional Swirls' properties to passed object.
		    @private
		    @param {Object} Object to add the properties to.
		    @param {Number} Index of the property.
		  */


		  Burst.prototype._addOptionalProps = function _addOptionalProps(options, index) {
		    options.index = index;
		    options.parent = this.masterSwirl.el;

		    this._addBurstProperties(options, index);

		    return options;
		  };
		  /*
		    Method to add Burst options to object.
		    @private
		    @param {Object} Options to add the properties to.
		    @param {Number} Index of the Swirl.
		    @param {Number} Index of the main swirl.
		  */


		  Burst.prototype._addBurstProperties = function _addBurstProperties(options, index, i) {
		    // save index of the module
		    var mainIndex = this._index;
		    // temporary change the index to parse index based properties like stagger
		    this._index = index;
		    // parse degree shift for the bit
		    var degreeShift = this._parseProperty('degreeShift', options.degreeShift || 0);
		    // put the index of the module back
		    this._index = mainIndex;

		    var p = this._props,
		        degreeCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
		        step = p.degree / degreeCnt,
		        pointStart = this._getSidePoint('start', index * step + degreeShift, i),
		        pointEnd = this._getSidePoint('end', index * step + degreeShift, i);

		    options.x = this._getDeltaFromPoints('x', pointStart, pointEnd);
		    options.y = this._getDeltaFromPoints('y', pointStart, pointEnd);

		    options.angle = this._getBitAngle(options.angle || 0, degreeShift, index);
		  };
		  /*
		    Method to get shapes angle in burstRainbowEnd so
		    it will follow circular shape.

		     @param    {Number, Object} Base angle.
		     @param    {Number}         Angle shift for the bit
		     @param    {Number}         Shape's index in burstRainbowEnd.
		     @returns  {Number}         Angle in burstRainbowEnd.
		  */


		  Burst.prototype._getBitAngle = function _getBitAngle() {
		    var angleProperty = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		    var angleShift = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		    var i = arguments[2];

		    var p = this._props,
		        degCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
		        step = p.degree / degCnt,
		        angle = i * step + 90;

		    angle += angleShift;
		    // if not delta option
		    if (!this._isDelta(angleProperty)) {
		      angleProperty += angle;
		    } else {
		      var delta = {},
		          keys = (0, _keys2.default)(angleProperty),
		          start = keys[0],
		          end = angleProperty[start];

		      start = _h2.default.parseStringOption(start, i);
		      end = _h2.default.parseStringOption(end, i);
		      // new start = newEnd
		      delta[parseFloat(start) + angle] = parseFloat(end) + angle;

		      angleProperty = delta;
		    }
		    return angleProperty;
		  };
		  /*
		    Method to get radial point on `start` or `end`.
		    @private
		    @param {String} Name of the side - [start, end].
		    @param {Number} Angle of the radial point.
		    @param {Number} Index of the main swirl.
		    @returns radial point.
		  */


		  Burst.prototype._getSidePoint = function _getSidePoint(side, angle, i) {
		    var p = this._props,
		        sideRadius = this._getSideRadius(side, i);

		    return _h2.default.getRadialPoint({
		      radius: sideRadius.radius,
		      radiusX: sideRadius.radiusX,
		      radiusY: sideRadius.radiusY,
		      angle: angle,
		      // center:  { x: p.center, y: p.center }
		      center: { x: 0, y: 0 }
		    });
		  };
		  /*
		    Method to get radius of the side.
		    @private
		    @param {String} Name of the side - [start, end].
		    @param {Number} Index of the main swirl.
		    @returns {Object} Radius.
		  */


		  Burst.prototype._getSideRadius = function _getSideRadius(side, i) {
		    return {
		      radius: this._getRadiusByKey('radius', side, i),
		      radiusX: this._getRadiusByKey('radiusX', side, i),
		      radiusY: this._getRadiusByKey('radiusY', side, i)
		    };
		  };
		  /*
		    Method to get radius from ∆ or plain property.
		    @private
		    @param {String} Key name.
		    @param {String} Side name - [start, end].
		    @param {Number} Index of the main swirl.
		    @returns {Number} Radius value.
		  */


		  Burst.prototype._getRadiusByKey = function _getRadiusByKey(key, side) {
		    var i = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		    var swirl = this._masterSwirls[i],
		        deltas = swirl._deltas,
		        props = swirl._props;

		    if (deltas[key] != null) {
		      return deltas[key][side];
		    } else if (props[key] != null) {
		      return props[key];
		    }
		  };
		  /*
		    Method to get delta from start and end position points.
		    @private
		    @param {String} Key name.
		    @param {Object} Start position point.
		    @param {Object} End position point.
		    @returns {Object} Delta of the end/start.
		  */


		  Burst.prototype._getDeltaFromPoints = function _getDeltaFromPoints(key, pointStart, pointEnd) {
		    var delta = {};
		    if (pointStart[key] === pointEnd[key]) {
		      delta = pointStart[key];
		    } else {
		      delta[pointStart[key]] = pointEnd[key];
		    }
		    return delta;
		  };
		  /*
		    Method to create timeline.
		    @private
		    @override @ Tweenable
		  */


		  Burst.prototype._makeTimeline = function _makeTimeline() {
		    // restore timeline options that were deleted in _render method
		    this._o.timeline = this._timelineOptions;
		    _Tunable.prototype._makeTimeline.call(this);
		    this.timeline.add(this.masterSwirl, this._swirls[0]);
		  };
		  /*
		    Method to make Tween for the module.
		    @private
		    @override @ Tweenable
		  */


		  Burst.prototype._makeTween = function _makeTween() {} /* don't create any tween */
		  /*
		    Override `_hide` and `_show` methods on module
		    since we don't have to hide nor show on the module.
		  */
		  ;

		  Burst.prototype._hide = function _hide() {/* do nothing */};

		  Burst.prototype._show = function _show() {/* do nothing */};

		  return Burst;
		}(_tunable2.default);

		var ChildSwirl = function (_ShapeSwirl) {
		  (0, _inherits3.default)(ChildSwirl, _ShapeSwirl);

		  function ChildSwirl() {
		    (0, _classCallCheck3.default)(this, ChildSwirl);
		    return (0, _possibleConstructorReturn3.default)(this, _ShapeSwirl.apply(this, arguments));
		  }

		  ChildSwirl.prototype._declareDefaults = function _declareDefaults() {
		    _ShapeSwirl.prototype._declareDefaults.call(this);
		    this._defaults.isSwirl = false;
		    this._o.duration = this._o.duration != null ? this._o.duration : 700;
		  };
		  // disable degreeshift calculations


		  ChildSwirl.prototype._calcSwirlXY = function _calcSwirlXY(proc) {
		    var degreeShift = this._props.degreeShift;

		    this._props.degreeShift = 0;
		    _ShapeSwirl.prototype._calcSwirlXY.call(this, proc);
		    this._props.degreeShift = degreeShift;
		  };

		  return ChildSwirl;
		}(_shapeSwirl2.default);

		var MainSwirl = function (_ChildSwirl) {
		  (0, _inherits3.default)(MainSwirl, _ChildSwirl);

		  function MainSwirl() {
		    (0, _classCallCheck3.default)(this, MainSwirl);
		    return (0, _possibleConstructorReturn3.default)(this, _ChildSwirl.apply(this, arguments));
		  }

		  MainSwirl.prototype._declareDefaults = function _declareDefaults() {
		    _ChildSwirl.prototype._declareDefaults.call(this);
		    this._defaults.scale = 1;
		    this._defaults.width = 0;
		    this._defaults.height = 0;
		    this._defaults.radius = { 25: 75 };
		    // this._defaults.duration = 2000;
		  };

		  return MainSwirl;
		}(ChildSwirl);

		Burst.ChildSwirl = ChildSwirl;
		Burst.MainSwirl = MainSwirl;

		exports.default = Burst;

	/***/ },
	/* 5 */,
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Stagger = function () {
		  function Stagger(options, Module) {
		    (0, _classCallCheck3.default)(this, Stagger);

		    return this.init(options, Module);
		  }
		  /*
		    Method to get an option by modulo and name.
		    @param {String} Name of the property to get.
		    @param {Number} Index for the modulo calculation.
		    @param {Object} Options hash to look in.
		    @return {Any} Property.
		  */


		  Stagger.prototype._getOptionByMod = function _getOptionByMod(name, i, store) {
		    var props = store[name];
		    // if not dom list then clone it to array
		    if (props + '' === '[object NodeList]' || props + '' === '[object HTMLCollection]') props = Array.prototype.slice.call(props, 0);
		    // get the value in array or return the value itself
		    var value = _h2.default.isArray(props) ? props[i % props.length] : props;
		    // check if value has the stagger expression, if so parse it
		    return _h2.default.parseIfStagger(value, i);
		  };
		  /*
		    Method to get option by modulo of index.
		    @param {Number} Index for modulo calculations.
		    @param {Object} Options hash to look in.
		  */


		  Stagger.prototype._getOptionByIndex = function _getOptionByIndex(i, store) {
		    var _this = this;

		    var options = {};
		    (0, _keys2.default)(store).forEach(function (key) {
		      return options[key] = _this._getOptionByMod(key, i, store);
		    });
		    return options;
		  };
		  /*
		    Method to get total child modules quantity.
		    @param  {String} Name of quantifier in options hash.
		    @param  {Object} Options hash object.
		    @return {Number} Number of child object that should be defined.
		  */


		  Stagger.prototype._getChildQuantity = function _getChildQuantity(name, store) {
		    // if number was set
		    if (typeof name === 'number') {
		      return name;
		    }

		    var quantifier = store[name];
		    if (_h2.default.isArray(quantifier)) {
		      return quantifier.length;
		    } else if (quantifier + '' === '[object NodeList]') {
		      return quantifier.length;
		    } else if (quantifier + '' === '[object HTMLCollection]') {
		      return Array.prototype.slice.call(quantifier, 0).length;
		    } else if (quantifier instanceof HTMLElement) {
		      return 1;
		    } else if (typeof quantifier == 'string') {
		      return 1;
		    }
		  };

		  /*
		    Method to create timeline.
		    @param {Object} Options. ** default ** empty object.
		  */


		  Stagger.prototype._createTimeline = function _createTimeline() {
		    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    this.timeline = new _timeline2.default({
		      onStart: options.onStaggerStart,
		      onUpdate: options.onStaggerUpdate,
		      onComplete: options.onStaggerComplete,
		      onReverseComplete: options.onStaggerReverseComplete,
		      delay: options.moduleDelay
		    });
		  };

		  /*
		    Method to make stagger form options
		    @param {Object} Options.
		    @param {Object} Child class.
		  */


		  Stagger.prototype.init = function init(options, Module) {
		    var count = this._getChildQuantity(options.quantifier || 'el', options);
		    this._createTimeline(options);this.childModules = [];
		    for (var i = 0; i < count; i++) {
		      // get child module's option
		      var option = this._getOptionByIndex(i, options);option.isRunLess = true;
		      // create child module
		      var module = new Module(option);this.childModules.push(module);
		      // add child module's timeline to the self timeline
		      this.timeline.add(module);
		    }
		    return this;
		  };
		  /*
		    Method to start timeline.
		  */


		  Stagger.prototype.run = function run() {
		    this.timeline.play();
		  };

		  return Stagger;
		}();

		module.exports = function (Module) {
		  return function (options) {
		    return new Stagger(options, Module);
		  };
		};

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Class for toggling opacity on bunch of elements
		  @class Spriter
		  @todo
		    - add isForce3d option
		    - add run new option merging
		    - add then chains
		*/

		var Spriter = function () {
		  /*
		    Defaults/APIs
		  */

		  Spriter.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      /*
		        Duration
		        @property duration
		        @type     {Number}
		      */
		      duration: 500,
		      /*
		        Delay
		        @property delay
		        @type     {Number}
		      */
		      delay: 0,
		      /*
		        Easing. Please see the
		        [timeline module parseEasing function](timeline.coffee.html#parseEasing)
		        for all avaliable options.
		          @property easing
		        @type     {String, Function}
		      */
		      easing: 'linear.none',
		      /*
		        Repeat times count

		        @property repeat
		        @type     {Number}
		      */
		      repeat: 0,
		      /*
		        Yoyo option defines if animation should be altered on repeat.

		        @property yoyo
		        @type     {Boolean}
		      */
		      yoyo: false,
		      /*
		        isRunLess option prevents animation from running immediately after
		        initialization.

		        @property isRunLess
		        @type     {Boolean}
		      */
		      isRunLess: false,
		      /*
		        isShowEnd option defines if the last frame should be shown when
		        animation completed.

		        @property isShowEnd
		        @type     {Boolean}
		      */
		      isShowEnd: false,
		      /*
		        onStart callback will be called once on animation start.

		        @property onStart
		        @type     {Function}
		      */
		      onStart: null,
		      /*
		        onUpdate callback will be called on every frame of the animation.
		        The current progress in range **[0,1]** will be passed to the callback.

		        @property onUpdate
		        @type     {Function}
		      */
		      onUpdate: null,
		      /*
		        onComplete callback will be called once on animation complete.

		        @property onComplete
		        @type     {Function}
		      */
		      onComplete: null
		    };
		  };

		  function Spriter() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Spriter);

		    this.o = o;
		    if (!this.o.el) {
		      return _h2.default.error('No "el" option specified, aborting');
		    }
		    this._vars();this._declareDefaults();this._extendDefaults();this._parseFrames();
		    if (this._frames.length <= 2) _h2.default.warn('Spriter: only ' + this._frames.length + ' frames found');
		    if (this._frames.length < 1) _h2.default.error("Spriter: there is no frames to animate, aborting");
		    this._createTween();
		    return this;
		  }
		  /*
		    Method to declare some variables.

		    @method run
		    @param  {Object} New options
		    @todo   Implement new object merging
		  */


		  Spriter.prototype._vars = function _vars() {
		    this._props = _h2.default.cloneObj(this.o);
		    this.el = this.o.el;
		    this._frames = [];
		  };
		  /*
		    Method to run the spriter on demand.

		    @method run
		    @param  {Object} New options
		    @todo   Implement new object merging
		  */


		  Spriter.prototype.run = function run(o) {
		    return this.timeline.play();
		  };
		  /*
		    Method to extend _props by options(this.o)

		    @method _extendDefaults
		  */


		  Spriter.prototype._extendDefaults = function _extendDefaults() {
		    return _h2.default.extend(this._props, this._defaults);
		  };
		  /*
		    Method to parse frames as child nodes of el.

		    @method _parseFrames
		  */


		  Spriter.prototype._parseFrames = function _parseFrames() {
		    this._frames = Array.prototype.slice.call(this.el.children, 0);
		    this._frames.forEach(function (frame, i) {
		      return frame.style.opacity = 0;
		    });
		    this._frameStep = 1 / this._frames.length;
		  };

		  /*
		    Method to create tween and timeline and supply callbacks.

		    @method _createTween
		  */


		  Spriter.prototype._createTween = function _createTween() {
		    var _this = this;

		    this._tween = new _tween2.default({
		      duration: this._props.duration,
		      delay: this._props.delay,
		      yoyo: this._props.yoyo,
		      repeat: this._props.repeat,
		      easing: this._props.easing,
		      onStart: function onStart() {
		        return _this._props.onStart && _this._props.onStart();
		      },
		      onComplete: function onComplete() {
		        return _this._props.onComplete && _this._props.onComplete();
		      },
		      onUpdate: function onUpdate(p) {
		        return _this._setProgress(p);
		      }
		    });
		    this.timeline = new _timeline2.default();this.timeline.add(this._tween);
		    if (!this._props.isRunLess) this._startTween();
		  };

		  /*
		    Method to start tween

		    @method _startTween
		  */


		  Spriter.prototype._startTween = function _startTween() {
		    var _this2 = this;

		    setTimeout(function () {
		      return _this2.timeline.play();
		    }, 1);
		  };
		  /*
		    Method to set progress of the sprite

		    @method _setProgress
		    @param  {Number} Progress in range **[0,1]**
		  */


		  Spriter.prototype._setProgress = function _setProgress(p) {
		    // get the frame number
		    var proc = Math.floor(p / this._frameStep);
		    // react only if frame changes
		    if (this._prevFrame != this._frames[proc]) {
		      // if previous frame isnt current one, hide it
		      if (this._prevFrame) {
		        this._prevFrame.style.opacity = 0;
		      }
		      // if end of animation and isShowEnd flag was specified
		      // then show the last frame else show current frame
		      var currentNum = p === 1 && this._props.isShowEnd ? proc - 1 : proc;
		      // show the current frame
		      if (this._frames[currentNum]) {
		        this._frames[currentNum].style.opacity = 1;
		      }
		      // set previous frame as current
		      this._prevFrame = this._frames[proc];
		    }
		    if (this._props.onUpdate) {
		      this._props.onUpdate(p);
		    }
		  };

		  return Spriter;
		}();

		exports.default = Spriter;

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _tweener = __webpack_require__(10);

		var _tweener2 = _interopRequireDefault(_tweener);

		var _easing = __webpack_require__(22);

		var _easing2 = _interopRequireDefault(_easing);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// import h from '../h';

		var Tween = function (_Module) {
		  (0, _inherits3.default)(Tween, _Module);

		  /*
		    Method do declare defaults with this._defaults object.
		    @private
		  */

		  Tween.prototype._declareDefaults = function _declareDefaults() {
		    // DEFAULTS
		    this._defaults = {
		      /* duration of the tween [0..∞] */
		      duration: 350,
		      /* delay of the tween [-∞..∞] */
		      delay: 0,
		      /* repeat of the tween [0..∞], means how much to
		         repeat the tween regardless first run,
		         for instance repeat: 2 will make the tween run 3 times */
		      repeat: 0,
		      /* speed of playback [0..∞], speed that is less then 1
		         will slowdown playback, for instance .5 will make tween
		         run 2x slower. Speed of 2 will speedup the tween to 2x. */
		      speed: 1,
		      /*  flip onUpdate's progress on each even period.
		          note that callbacks order won't flip at least
		          for now (under consideration). */
		      isYoyo: false,
		      /* easing for the tween, could be any easing type [link to easing-types.md] */
		      easing: 'Sin.Out',
		      /*
		        Easing for backward direction of the tweenthe tween,
		        if `null` - fallbacks to `easing` property.
		        forward direction in `yoyo` period is treated as backward for the easing.
		      */
		      backwardEasing: null,
		      /* custom tween's name */
		      name: null,
		      /* custom tween's base name */
		      nameBase: 'Tween',
		      /*
		        onProgress callback runs before any other callback.
		        @param {Number}   The entire, not eased, progress
		                          of the tween regarding repeat option.
		        @param {Boolean}  The direction of the tween.
		                          `true` for forward direction.
		                          `false` for backward direction(tween runs in reverse).
		      */
		      onProgress: null,
		      /*
		        onStart callback runs on very start of the tween just after onProgress
		        one. Runs on very end of the tween if tween is reversed.
		        @param {Boolean}  Direction of the tween.
		                          `true` for forward direction.
		                          `false` for backward direction(tween runs in reverse).
		      */
		      onStart: null,
		      onRefresh: null,
		      onComplete: null,
		      onRepeatStart: null,
		      onRepeatComplete: null,
		      onFirstUpdate: null,
		      onUpdate: null,
		      isChained: false,
		      // playback callbacks
		      onPlaybackStart: null,
		      onPlaybackPause: null,
		      onPlaybackStop: null,
		      onPlaybackComplete: null,
		      // context which all callbacks will be called with
		      callbacksContext: null
		    };
		  };
		  /*
		    API method to run the Tween.
		    @public
		    @param  {Number} Shift time in milliseconds.
		    @return {Object} Self.
		  */


		  Tween.prototype.play = function play() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    if (this._state === 'play' && this._isRunning) {
		      return this;
		    }
		    this._props.isReversed = false;
		    this._subPlay(shift, 'play');
		    this._setPlaybackState('play');
		    return this;
		  };
		  /*
		    API method to run the Tween in reverse.
		    @public
		    @param  {Number} Shift time in milliseconds.
		    @return {Object} Self.
		  */


		  Tween.prototype.playBackward = function playBackward() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    if (this._state === 'reverse' && this._isRunning) {
		      return this;
		    }
		    this._props.isReversed = true;
		    this._subPlay(shift, 'reverse');
		    this._setPlaybackState('reverse');
		    return this;
		  };
		  /*
		    API method to pause Tween.
		    @public
		    @returns {Object} Self.
		  */


		  Tween.prototype.pause = function pause() {
		    if (this._state === 'pause' || this._state === 'stop') {
		      return this;
		    }
		    this._removeFromTweener();
		    this._setPlaybackState('pause');
		    return this;
		  };
		  /*
		    API method to stop the Tween.
		    @public
		    @param   {Number} Progress [0..1] to set when stopped.
		    @returns {Object} Self.
		  */


		  Tween.prototype.stop = function stop(progress) {
		    if (this._state === 'stop') {
		      return this;
		    }

		    this._wasUknownUpdate = undefined;

		    var stopProc = progress != null ? progress
		    /* if no progress passsed - set 1 if tween
		       is playingBackward, otherwise set to 0 */
		    : this._state === 'reverse' ? 1 : 0;

		    this.setProgress(stopProc);

		    this.reset();
		    return this;
		  };
		  /*
		    API method to replay(restart) the Tween.
		    @public
		    @param   {Number} Shift time in milliseconds.
		    @returns {Object} Self.
		  */


		  Tween.prototype.replay = function replay() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    this.reset();
		    this.play(shift);
		    return this;
		  };
		  /*
		    API method to replay(restart) backward the Tween.
		    @public
		    @param   {Number} Shift time in milliseconds.
		    @returns {Object} Self.
		  */


		  Tween.prototype.replayBackward = function replayBackward() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    this.reset();
		    this.playBackward(shift);
		    return this;
		  };
		  /*
		    API method to set progress on tween.
		    @public
		    @param {Number} Progress to set.
		    @returns {Object} Self.
		  */


		  Tween.prototype.setProgress = function setProgress(progress) {
		    var p = this._props;
		    // set start time if there is no one yet.
		    !p.startTime && this._setStartTime();
		    // reset play time
		    this._playTime = null;
		    // progress should be in range of [0..1]
		    progress < 0 && (progress = 0);
		    progress > 1 && (progress = 1);
		    // update self with calculated time
		    this._update(p.startTime - p.delay + progress * p.repeatTime);
		    return this;
		  };
		  /*
		    Method to set tween's speed.
		    @public
		    @param {Number} Speed value.
		    @returns this.
		  */


		  Tween.prototype.setSpeed = function setSpeed(speed) {
		    this._props.speed = speed;
		    // if playing - normalize _startTime and _prevTime to the current point.
		    if (this._state === 'play' || this._state === 'reverse') {
		      this._setResumeTime(this._state);
		    }
		    return this;
		  };
		  /*
		    Method to reset tween's state and properties.
		    @public
		    @returns this.
		  */


		  Tween.prototype.reset = function reset() {
		    this._removeFromTweener();
		    this._setPlaybackState('stop');
		    this._progressTime = 0;
		    this._isCompleted = false;
		    this._isStarted = false;
		    this._isFirstUpdate = false;
		    this._wasUknownUpdate = undefined;
		    this._prevTime = undefined;
		    this._prevYoyo = undefined;
		    // this._props.startTime  = undefined;
		    this._props.isReversed = false;
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to launch play. Used as launch
		    method for bothplay and reverse methods.
		    @private
		    @param  {Number} Shift time in milliseconds.
		    @param  {String} Play or reverse state.
		    @return {Object} Self.
		  */


		  Tween.prototype._subPlay = function _subPlay() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		    var state = arguments[1];

		    var resumeTime,
		        startTime,
		        p = this._props,

		    // check if direction of playback changes,
		    // if so, the _progressTime needs to be flipped
		    _state = this._state,
		        _prevState = this._prevState,
		        isPause = _state === 'pause',
		        wasPlay = _state === 'play' || isPause && _prevState === 'play',
		        wasReverse = _state === 'reverse' || isPause && _prevState === 'reverse',
		        isFlip = wasPlay && state === 'reverse' || wasReverse && state === 'play';

		    // if tween was ended, set progress to 0 if not, set to elapsed progress
		    this._progressTime = this._progressTime >= p.repeatTime ? 0 : this._progressTime;
		    // flip the _progressTime if playback direction changed
		    if (isFlip) {
		      this._progressTime = p.repeatTime - this._progressTime;
		    }
		    // set resume time and normalize prev/start times
		    this._setResumeTime(state, shift);
		    // add self to tweener = play
		    _tweener2.default.add(this);
		    return this;
		  };
		  /*
		    Method to set _resumeTime, _startTime and _prevTime.
		    @private
		    @param {String} Current state. [play, reverse]
		    @param {Number} Time shift. *Default* is 0.
		  */


		  Tween.prototype._setResumeTime = function _setResumeTime(state) {
		    var shift = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		    // get current moment as resume time
		    this._resumeTime = performance.now();
		    // set start time regarding passed `shift` and `procTime`
		    var startTime = this._resumeTime - Math.abs(shift) - this._progressTime;
		    this._setStartTime(startTime, false);
		    // if we have prevTime - we need to normalize
		    // it for the current resume time
		    if (this._prevTime != null) {
		      this._prevTime = state === 'play' ? this._normPrevTimeForward() : this._props.endTime - this._progressTime;
		    }
		  };
		  /*
		    Method recalculate _prevTime for forward direction.
		    @private
		    @return {Number} Normalized prev time.
		  */


		  Tween.prototype._normPrevTimeForward = function _normPrevTimeForward() {
		    var p = this._props;
		    return p.startTime + this._progressTime - p.delay;
		  };
		  /*
		    Constructor of the class.
		    @private
		  */


		  function Tween() {
		    var _ret;

		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Tween);

		    var _this = (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));

		    _this._props.name == null && _this._setSelfName();
		    return _ret = _this, (0, _possibleConstructorReturn3.default)(_this, _ret);
		  }
		  /*
		    Method to set self name to generic one.
		    @private
		  */


		  Tween.prototype._setSelfName = function _setSelfName() {
		    var globalName = '_' + this._props.nameBase + 's';
		    // track amount of tweens globally
		    _tweener2.default[globalName] = _tweener2.default[globalName] == null ? 1 : ++_tweener2.default[globalName];
		    // and set generic tween's name  || Tween # ||
		    this._props.name = this._props.nameBase + ' ' + _tweener2.default[globalName];
		  };
		  /*
		    Method set playback state string.
		    @private
		    @param {String} State name
		  */


		  Tween.prototype._setPlaybackState = function _setPlaybackState(state) {
		    // save previous state
		    this._prevState = this._state;
		    this._state = state;

		    // callbacks
		    var wasPause = this._prevState === 'pause',
		        wasStop = this._prevState === 'stop',
		        wasPlay = this._prevState === 'play',
		        wasReverse = this._prevState === 'reverse',
		        wasPlaying = wasPlay || wasReverse,
		        wasStill = wasStop || wasPause;

		    if ((state === 'play' || state === 'reverse') && wasStill) {
		      this._playbackStart();
		    }
		    if (state === 'pause' && wasPlaying) {
		      this._playbackPause();
		    }
		    if (state === 'stop' && (wasPlaying || wasPause)) {
		      this._playbackStop();
		    }
		  };
		  /*
		    Method to declare some vars.
		    @private
		  */


		  Tween.prototype._vars = function _vars() {
		    this.progress = 0;
		    this._prevTime = undefined;
		    this._progressTime = 0;
		    this._negativeShift = 0;
		    this._state = 'stop';
		    // if negative delay was specified,
		    // save it to _negativeShift property and
		    // reset it back to 0
		    if (this._props.delay < 0) {
		      this._negativeShift = this._props.delay;
		      this._props.delay = 0;
		    }

		    return this._calcDimentions();
		  };
		  /*
		    Method to calculate tween's dimentions.
		    @private
		  */


		  Tween.prototype._calcDimentions = function _calcDimentions() {
		    this._props.time = this._props.duration + this._props.delay;
		    this._props.repeatTime = this._props.time * (this._props.repeat + 1);
		  };
		  /*
		    Method to extend defaults by options and put them in _props.
		    @private
		  */


		  Tween.prototype._extendDefaults = function _extendDefaults() {
		    // save callback overrides object with fallback to empty one
		    this._callbackOverrides = this._o.callbackOverrides || {};
		    delete this._o.callbackOverrides;
		    // call the _extendDefaults @ Module
		    _Module.prototype._extendDefaults.call(this);

		    var p = this._props;
		    p.easing = _easing2.default.parseEasing(p.easing);

		    // parse only present backward easing to prevent parsing as `linear.none`
		    // because we need to fallback to `easing` in `_setProgress` method
		    if (p.backwardEasing != null) {
		      p.backwardEasing = _easing2.default.parseEasing(p.backwardEasing);
		    }
		  };
		  /*
		    Method for setting start and end time to props.
		    @private
		    @param {Number(Timestamp)}, {Null} Start time.
		    @param {Boolean} Should reset flags.
		    @returns this
		  */


		  Tween.prototype._setStartTime = function _setStartTime(time) {
		    var isResetFlags = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    var p = this._props,
		        shiftTime = p.shiftTime || 0;
		    // reset flags
		    if (isResetFlags) {
		      this._isCompleted = false;this._isRepeatCompleted = false;
		      this._isStarted = false;
		    }
		    // set start time to passed time or to the current moment
		    var startTime = time == null ? performance.now() : time;
		    // calculate bounds
		    // - negativeShift is negative delay in options hash
		    // - shift time is shift of the parent
		    p.startTime = startTime + p.delay + this._negativeShift + shiftTime;
		    p.endTime = p.startTime + p.repeatTime - p.delay;
		    // set play time to the startTime
		    // if playback controls are used - use _resumeTime as play time,
		    // else use shifted startTime -- shift is needed for timelines append chains
		    this._playTime = this._resumeTime != null ? this._resumeTime : startTime + shiftTime;
		    this._resumeTime = null;

		    return this;
		  };
		  /*
		    Method to update tween's progress.
		    @private
		    @param {Number} Current update time.
		    -- next params only present when parent Timeline calls the method.
		    @param {Number} Previous Timeline's update time.
		    @param {Boolean} Was parent in yoyo period.
		    @param {Number} [-1, 0, 1] If update is on edge.
		                   -1 = edge jump in negative direction.
		                    0 = no edge jump.
		                    1 = edge jump in positive direction.
		  */


		  Tween.prototype._update = function _update(time, timelinePrevTime, wasYoyo, onEdge) {
		    var p = this._props;
		    // if we don't the _prevTime thus the direction we are heading to,
		    // but prevTime was passed thus we are child of a Timeline
		    // set _prevTime to passed one and pretent that there was unknown
		    // update to not to block start/complete callbacks
		    if (this._prevTime == null && timelinePrevTime != null) {

		      if (this._props.speed && this._playTime) {
		        // play point + ( speed * delta )
		        this._prevTime = this._playTime + this._props.speed * (timelinePrevTime - this._playTime);
		      }
		      // this._prevTime = timelinePrevTime;
		      this._wasUknownUpdate = true;
		    }

		    // var before = time;
		    // cache vars
		    var startPoint = p.startTime - p.delay;
		    // if speed param was defined - calculate
		    // new time regarding speed
		    if (p.speed && this._playTime) {
		      // play point + ( speed * delta )
		      time = this._playTime + p.speed * (time - this._playTime);
		    }

		    // due to javascript precision issues, after speed mapping
		    // we can get very close number that was made from progress of 1
		    // and in fact represents `endTime` if so, set the time to `endTime`
		    if (Math.abs(p.endTime - time) < 0.00000001) {
		      time = p.endTime;
		    }

		    // if parent is onEdge but not very start nor very end
		    if (onEdge && wasYoyo != null) {
		      var T = this._getPeriod(time),
		          isYoyo = !!(p.isYoyo && this._props.repeat && T % 2 === 1);

		      // for timeline
		      // notify children about edge jump
		      if (this._timelines) {
		        for (var i = 0; i < this._timelines.length; i++) {
		          this._timelines[i]._update(time, timelinePrevTime, wasYoyo, onEdge);
		        }
		      }
		      // forward edge direction
		      if (onEdge === 1) {
		        // jumped from yoyo period?
		        if (wasYoyo) {
		          this._prevTime = time + 1;
		          this._repeatStart(time, isYoyo);
		          this._start(time, isYoyo);
		        } else {
		          this._prevTime = time - 1;
		          this._repeatComplete(time, isYoyo);
		          this._complete(time, isYoyo);
		        }
		        // backward edge direction
		      } else if (onEdge === -1) {
		          // jumped from yoyo period?
		          if (wasYoyo) {
		            this._prevTime = time - 1;
		            this._repeatComplete(time, isYoyo);
		            this._complete(time, isYoyo);
		          } else {
		            // call _start callbacks only if prev time was in active area
		            // not always true for append chains
		            if (this._prevTime >= p.startTime && this._prevTime <= p.endTime) {
		              this._prevTime = time + 1;
		              this._repeatStart(time, isYoyo);
		              this._start(time, isYoyo);
		              // reset isCOmpleted immediately to prevent onComplete cb
		              this._isCompleted = true;
		            }
		          }
		        }
		      // reset the _prevTime - drop one frame to undestand
		      // where we are heading
		      this._prevTime = undefined;
		    }
		    // if in active area and not ended - save progress time
		    // for pause/play purposes.
		    if (time > startPoint && time < p.endTime) {
		      this._progressTime = time - startPoint;
		    }
		    // else if not started or ended set progress time to 0
		    else if (time <= startPoint) {
		        this._progressTime = 0;
		      } else if (time >= p.endTime) {
		        // set progress time to repeat time + tiny cofficient
		        // to make it extend further than the end time
		        this._progressTime = p.repeatTime + .00000000001;
		      }
		    // reverse time if _props.isReversed is set
		    if (p.isReversed) {
		      time = p.endTime - this._progressTime;
		    }
		    // We need to know what direction we are heading to,
		    // so if we don't have the previous update value - this is very first
		    // update, - skip it entirely and wait for the next value
		    if (this._prevTime == null) {
		      this._prevTime = time;
		      this._wasUknownUpdate = true;
		      return false;
		    }

		    // ====== AFTER SKIPPED FRAME ======

		    // handle onProgress callback
		    if (time >= startPoint && time <= p.endTime) {
		      this._progress((time - startPoint) / p.repeatTime, time);
		    }
		    /*
		      if time is inside the active area of the tween.
		      active area is the area from start time to end time,
		      with all the repeat and delays in it
		    */
		    if (time >= p.startTime && time <= p.endTime) {
		      this._updateInActiveArea(time);
		    } else {
		      // if was in active area - update in inactive area but just once -
		      // right after the active area
		      if (this._isInActiveArea) {
		        this._updateInInactiveArea(time);
		      } else if (!this._isRefreshed) {
		        // onRefresh callback
		        // before startTime
		        if (time < p.startTime && this.progress !== 0) {
		          this._refresh(true);
		          this._isRefreshed = true;
		          // after endTime
		        }
		        // else if ( time > p.endTime ) { }
		      }
		    }

		    this._prevTime = time;
		    return time >= p.endTime || time <= startPoint;
		  };
		  /*
		    Method to handle tween's progress in inactive area.
		    @private
		    @param {Number} Current update time.
		  */


		  Tween.prototype._updateInInactiveArea = function _updateInInactiveArea(time) {
		    if (!this._isInActiveArea) {
		      return;
		    }
		    var p = this._props;
		    // complete if time is larger then end time
		    if (time > p.endTime && !this._isCompleted) {
		      this._progress(1, time);
		      // get period number
		      var T = this._getPeriod(p.endTime),
		          isYoyo = p.isYoyo && T % 2 === 0;

		      this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
		      this._repeatComplete(time, isYoyo);
		      this._complete(time, isYoyo);
		    }
		    // if was active and went to - inactive area "-"
		    if (time < this._prevTime && time < p.startTime && !this._isStarted && !this._isCompleted) {
		      // if was in active area and didn't fire onStart callback
		      this._progress(0, time, false);
		      this._setProgress(0, time, false);
		      this._isRepeatStart = false;
		      this._repeatStart(time, false);
		      this._start(time, false);
		    }
		    this._isInActiveArea = false;
		  };
		  /*
		    Method to handle tween's progress in active area.
		    @private
		    @param {Number} Current update time.
		  */


		  Tween.prototype._updateInActiveArea = function _updateInActiveArea(time) {

		    var props = this._props,
		        delayDuration = props.delay + props.duration,
		        startPoint = props.startTime - props.delay,
		        elapsed = (time - props.startTime + props.delay) % delayDuration,
		        TCount = Math.round((props.endTime - props.startTime + props.delay) / delayDuration),
		        T = this._getPeriod(time),
		        TValue = this._delayT,
		        prevT = this._getPeriod(this._prevTime),
		        TPrevValue = this._delayT;

		    // "zero" and "one" value regarding yoyo and it's period
		    var isYoyo = props.isYoyo && T % 2 === 1,
		        isYoyoPrev = props.isYoyo && prevT % 2 === 1,
		        yoyoZero = isYoyo ? 1 : 0,
		        yoyoOne = 1 - yoyoZero;

		    if (time === props.endTime) {
		      this._wasUknownUpdate = false;
		      // if `time` is equal to `endTime`, T represents the next period,
		      // so we need to decrement T and calculate "one" value regarding yoyo
		      var isYoyo = props.isYoyo && (T - 1) % 2 === 1;
		      this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
		      if (time > this._prevTime) {
		        this._isRepeatCompleted = false;
		      }
		      this._repeatComplete(time, isYoyo);
		      return this._complete(time, isYoyo);
		    }

		    // reset callback flags
		    this._isCompleted = false;
		    this._isRefreshed = false;
		    // if time is inside the duration area of the tween
		    if (startPoint + elapsed >= props.startTime) {
		      this._isInActiveArea = true;this._isRepeatCompleted = false;
		      this._isRepeatStart = false;this._isStarted = false;
		      // active zone or larger then end
		      var elapsed2 = (time - props.startTime) % delayDuration,
		          proc = elapsed2 / props.duration;
		      // |=====|=====|=====| >>>
		      //      ^1^2
		      var isOnEdge = T > 0 && prevT < T;
		      // |=====|=====|=====| <<<
		      //      ^2^1
		      var isOnReverseEdge = prevT > T;

		      // for use in timeline
		      this._onEdge = 0;
		      isOnEdge && (this._onEdge = 1);
		      isOnReverseEdge && (this._onEdge = -1);

		      if (this._wasUknownUpdate) {
		        if (time > this._prevTime) {
		          this._start(time, isYoyo);
		          this._repeatStart(time, isYoyo);
		          this._firstUpdate(time, isYoyo);
		        }
		        // if backward direction and
		        // if ( time < this._prevTime && time !== this._props.startTime ) {
		        if (time < this._prevTime) {
		          this._complete(time, isYoyo);
		          this._repeatComplete(time, isYoyo);
		          this._firstUpdate(time, isYoyo);
		          // reset isCompleted immediately
		          this._isCompleted = false;
		        }
		      }

		      if (isOnEdge) {
		        // if not just after delay
		        // |---=====|---=====|---=====| >>>
		        //            ^1 ^2
		        // because we have already handled
		        // 1 and onRepeatComplete in delay gap
		        if (this.progress !== 1) {
		          // prevT
		          var isThisYoyo = props.isYoyo && (T - 1) % 2 === 1;
		          this._repeatComplete(time, isThisYoyo);
		        }
		        // if on edge but not at very start
		        // |=====|=====|=====| >>>
		        // ^!    ^here ^here
		        if (prevT >= 0) {
		          this._repeatStart(time, isYoyo);
		        }
		      }

		      if (time > this._prevTime) {
		        //  |=====|=====|=====| >>>
		        // ^1  ^2
		        if (!this._isStarted && this._prevTime <= props.startTime) {
		          this._start(time, isYoyo);
		          this._repeatStart(time, isYoyo);
		          // it was zero anyways

		          // restart flags immediately in case if we will
		          // return to '-' inactive area on the next step
		          this._isStarted = false;
		          this._isRepeatStart = false;
		        }
		        this._firstUpdate(time, isYoyo);
		      }

		      if (isOnReverseEdge) {
		        // if on edge but not at very end
		        // |=====|=====|=====| <<<
		        //       ^here ^here ^not here
		        if (this.progress !== 0 && this.progress !== 1 && prevT != TCount) {
		          this._repeatStart(time, isYoyoPrev);
		        }
		        // if on very end edge
		        // |=====|=====|=====| <<<
		        //       ^!    ^! ^2 ^1
		        // we have handled the case in this._wasUknownUpdate
		        // block so filter that
		        if (prevT === TCount && !this._wasUknownUpdate) {
		          this._complete(time, isYoyo);
		          this._repeatComplete(time, isYoyo);
		          this._firstUpdate(time, isYoyo);
		          // reset isComplete flag call
		          // cuz we returned to active area
		          // this._isRepeatCompleted = false;
		          this._isCompleted = false;
		        }
		        this._repeatComplete(time, isYoyo);
		      }

		      if (prevT === 'delay') {
		        // if just before delay gap
		        // |---=====|---=====|---=====| <<<
		        //               ^2    ^1
		        if (T < TPrevValue) {
		          this._repeatComplete(time, isYoyo);
		        }
		        // if just after delay gap
		        // |---=====|---=====|---=====| >>>
		        //            ^1  ^2
		        if (T === TPrevValue && T > 0) {
		          this._repeatStart(time, isYoyo);
		        }
		      }

		      // swap progress and repeatStart based on direction
		      if (time > this._prevTime) {
		        // if progress is equal 0 and progress grows
		        if (proc === 0) {
		          this._repeatStart(time, isYoyo);
		        }
		        if (time !== props.endTime) {
		          this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
		        }
		      } else {
		        if (time !== props.endTime) {
		          this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
		        }
		        // if progress is equal 0 and progress grows
		        if (proc === 0) {
		          this._repeatStart(time, isYoyo);
		        }
		      }

		      if (time === props.startTime) {
		        this._start(time, isYoyo);
		      }
		      // delay gap - react only once
		    } else if (this._isInActiveArea) {
		        // because T will be string of "delay" here,
		        // let's normalize it be setting to TValue
		        var t = T === 'delay' ? TValue : T,
		            isGrows = time > this._prevTime;
		        // decrement period if forward direction of update
		        isGrows && t--;
		        // calculate normalized yoyoZero value
		        yoyoZero = props.isYoyo && t % 2 === 1 ? 1 : 0;
		        // if was in active area and previous time was larger
		        // |---=====|---=====|---=====| <<<
		        //   ^2 ^1    ^2 ^1    ^2 ^1
		        if (time < this._prevTime) {
		          this._setProgress(yoyoZero, time, yoyoZero === 1);
		          this._repeatStart(time, yoyoZero === 1);
		        }
		        // set 1 or 0 regarding direction and yoyo
		        this._setProgress(isGrows ? 1 - yoyoZero : yoyoZero, time, yoyoZero === 1);
		        // if time grows
		        if (time > this._prevTime) {
		          // if reverse direction and in delay gap, then progress will be 0
		          // if so we don't need to call the onRepeatComplete callback
		          // |---=====|---=====|---=====| <<<
		          //   ^0       ^0       ^0
		          // OR we have flipped 0 to 1 regarding yoyo option
		          if (this.progress !== 0 || yoyoZero === 1) {
		            // since we repeatComplete for previous period
		            // invert isYoyo option
		            // is elapsed is 0 - count as previous period
		            this._repeatComplete(time, yoyoZero === 1);
		          }
		        }
		        // set flag to indicate inactive area
		        this._isInActiveArea = false;
		      }
		    // we've got the first update now
		    this._wasUknownUpdate = false;
		  };
		  /*
		    Method to remove the Tween from the tweener.
		    @private
		    @returns {Object} Self.
		  */


		  Tween.prototype._removeFromTweener = function _removeFromTweener() {
		    _tweener2.default.remove(this);return this;
		  };
		  /*
		    Method to get current period number.
		    @private
		    @param {Number} Time to get the period for.
		    @returns {Number} Current period number.
		  */


		  Tween.prototype._getPeriod = function _getPeriod(time) {
		    var p = this._props,
		        TTime = p.delay + p.duration,
		        dTime = p.delay + time - p.startTime,
		        T = dTime / TTime,

		    // if time if equal to endTime we need to set the elapsed
		    // time to 0 to fix the occasional precision js bug, which
		    // causes 0 to be something like 1e-12
		    elapsed = time < p.endTime ? dTime % TTime : 0;
		    // If the latest period, round the result, otherwise floor it.
		    // Basically we always can floor the result, but because of js
		    // precision issues, sometimes the result is 2.99999998 which
		    // will result in 2 instead of 3 after the floor operation.
		    T = time >= p.endTime ? Math.round(T) : Math.floor(T);
		    // if time is larger then the end time
		    if (time > p.endTime) {
		      // set equal to the periods count
		      T = Math.round((p.endTime - p.startTime + p.delay) / TTime);
		      // if in delay gap, set _delayT to current
		      // period number and return "delay"
		    } else if (elapsed > 0 && elapsed < p.delay) {
		        this._delayT = T;T = 'delay';
		      }
		    // if the end of period and there is a delay
		    return T;
		  };
		  /*
		    Method to set Tween's progress and call onUpdate callback.
		    @private
		    @override @ Module
		    @param {Number} Progress to set.
		    @param {Number} Current update time.
		    @param {Boolean} Is yoyo perido. Used in Timeline to pass to Tween.
		    @returns {Object} Self.
		  */


		  Tween.prototype._setProgress = function _setProgress(proc, time, isYoyo) {
		    var p = this._props,
		        isYoyoChanged = p.wasYoyo !== isYoyo,
		        isForward = time > this._prevTime;

		    this.progress = proc;
		    // get the current easing for `forward` direction regarding `yoyo`
		    if (isForward && !isYoyo || !isForward && isYoyo) {
		      this.easedProgress = p.easing(proc);
		      // get the current easing for `backward` direction regarding `yoyo`
		    } else if (!isForward && !isYoyo || isForward && isYoyo) {
		        var easing = p.backwardEasing != null ? p.backwardEasing : p.easing;

		        this.easedProgress = easing(proc);
		      }

		    if (p.prevEasedProgress !== this.easedProgress || isYoyoChanged) {
		      if (p.onUpdate != null && typeof p.onUpdate === 'function') {
		        p.onUpdate.call(p.callbacksContext || this, this.easedProgress, this.progress, isForward, isYoyo);
		      }
		    }
		    p.prevEasedProgress = this.easedProgress;
		    p.wasYoyo = isYoyo;
		    return this;
		  };
		  /*
		    Method to set tween's state to start and call onStart callback.
		    @method _start
		    @private
		    @param {Number} Progress to set.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._start = function _start(time, isYoyo) {
		    if (this._isStarted) {
		      return;
		    }
		    var p = this._props;
		    if (p.onStart != null && typeof p.onStart === 'function') {
		      p.onStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isCompleted = false;this._isStarted = true;
		    this._isFirstUpdate = false;
		  };
		  /*
		    Method to call onPlaybackStart callback
		    @private
		  */


		  Tween.prototype._playbackStart = function _playbackStart() {
		    var p = this._props;
		    if (p.onPlaybackStart != null && typeof p.onPlaybackStart === 'function') {
		      p.onPlaybackStart.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to call onPlaybackPause callback
		    @private
		  */


		  Tween.prototype._playbackPause = function _playbackPause() {
		    var p = this._props;
		    if (p.onPlaybackPause != null && typeof p.onPlaybackPause === 'function') {
		      p.onPlaybackPause.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to call onPlaybackStop callback
		    @private
		  */


		  Tween.prototype._playbackStop = function _playbackStop() {
		    var p = this._props;
		    if (p.onPlaybackStop != null && typeof p.onPlaybackStop === 'function') {
		      p.onPlaybackStop.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to call onPlaybackComplete callback
		    @private
		  */


		  Tween.prototype._playbackComplete = function _playbackComplete() {
		    var p = this._props;
		    if (p.onPlaybackComplete != null && typeof p.onPlaybackComplete === 'function') {
		      p.onPlaybackComplete.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to set tween's state to complete.
		    @method _complete
		    @private
		    @param {Number} Current time.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._complete = function _complete(time, isYoyo) {
		    if (this._isCompleted) {
		      return;
		    }
		    var p = this._props;
		    if (p.onComplete != null && typeof p.onComplete === 'function') {
		      p.onComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }

		    this._isCompleted = true;this._isStarted = false;
		    this._isFirstUpdate = false;
		    // reset _prevYoyo for timeline usage
		    this._prevYoyo = undefined;
		  };

		  /*
		    Method to run onFirstUpdate callback.
		    @method _firstUpdate
		    @private
		    @param {Number} Current update time.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._firstUpdate = function _firstUpdate(time, isYoyo) {
		    if (this._isFirstUpdate) {
		      return;
		    }
		    var p = this._props;
		    if (p.onFirstUpdate != null && typeof p.onFirstUpdate === 'function') {
		      // onFirstUpdate should have tween pointer
		      p.onFirstUpdate.tween = this;
		      p.onFirstUpdate.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isFirstUpdate = true;
		  };
		  /*
		    Method call onRepeatComplete calback and set flags.
		    @private
		    @param {Number} Current update time.
		    @param {Boolean} Is repeat period.
		  */


		  Tween.prototype._repeatComplete = function _repeatComplete(time, isYoyo) {
		    if (this._isRepeatCompleted) {
		      return;
		    }
		    var p = this._props;
		    if (p.onRepeatComplete != null && typeof p.onRepeatComplete === 'function') {
		      p.onRepeatComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isRepeatCompleted = true;
		    // this._prevYoyo = null;
		  };

		  /*
		    Method call onRepeatStart calback and set flags.
		    @private
		    @param {Number} Current update time.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._repeatStart = function _repeatStart(time, isYoyo) {
		    if (this._isRepeatStart) {
		      return;
		    }
		    var p = this._props;
		    if (p.onRepeatStart != null && typeof p.onRepeatStart === 'function') {
		      p.onRepeatStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isRepeatStart = true;
		  };
		  /*
		    Method to launch onProgress callback.
		    @method _progress
		    @private
		    @param {Number} Progress to set.
		  */


		  Tween.prototype._progress = function _progress(progress, time) {
		    var p = this._props;
		    if (p.onProgress != null && typeof p.onProgress === 'function') {
		      p.onProgress.call(p.callbacksContext || this, progress, time > this._prevTime);
		    }
		  };
		  /*
		    Method to launch onRefresh callback.
		    @method _refresh
		    @private
		    @param {Boolean} If refresh even before start time.
		  */


		  Tween.prototype._refresh = function _refresh(isBefore) {
		    var p = this._props;
		    if (p.onRefresh != null) {
		      p.onRefresh.call(p.callbacksContext || this, isBefore);
		    }
		  };
		  /*
		    Method which is called when the tween is removed from tweener.
		    @private
		  */


		  Tween.prototype._onTweenerRemove = function _onTweenerRemove() {};
		  /*
		    Method which is called when the tween is removed
		    from tweener when finished.
		    @private
		  */


		  Tween.prototype._onTweenerFinish = function _onTweenerFinish() {
		    this._setPlaybackState('stop');
		    this._playbackComplete();
		  };
		  /*
		    Method to set property[s] on Tween.
		    @private
		    @override @ Module
		    @param {Object, String} Hash object of key/value pairs, or property name.
		    @param {_} Property's value to set.
		  */


		  Tween.prototype._setProp = function _setProp(obj, value) {
		    _Module.prototype._setProp.call(this, obj, value);
		    this._calcDimentions();
		  };
		  /*
		    Method to set single property.
		    @private
		    @override @ Module
		    @param {String} Name of the property.
		    @param {Any} Value for the property.
		  */


		  Tween.prototype._assignProp = function _assignProp(key, value) {
		    // fallback to defaults
		    if (value == null) {
		      value = this._defaults[key];
		    }
		    // parse easing
		    key === 'easing' && (value = _easing2.default.parseEasing(value));
		    // handle control callbacks overrides
		    var control = this._callbackOverrides[key],
		        isntOverriden = !value || !value.isMojsCallbackOverride;
		    if (control && isntOverriden) {
		      value = this._overrideCallback(value, control);
		    }
		    // call super on Module
		    _Module.prototype._assignProp.call(this, key, value);
		  };
		  /*
		    Method to override callback for controll pupropes.
		    @private
		    @param {String}    Callback name.
		    @parma {Function}  Method to call
		  */


		  Tween.prototype._overrideCallback = function _overrideCallback(callback, fun) {
		    var isCallback = callback && typeof callback === 'function',
		        override = function callbackOverride() {
		      // call overriden callback if it exists
		      isCallback && callback.apply(this, arguments);
		      // call the passed cleanup function
		      fun.apply(this, arguments);
		    };
		    // add overridden flag
		    override.isMojsCallbackOverride = true;
		    return override;
		  };

		  // _visualizeProgress(time) {
		  //   var str = '|',
		  //       procStr = ' ',
		  //       p = this._props,
		  //       proc = p.startTime - p.delay;

		  //   while ( proc < p.endTime ) {
		  //     if (p.delay > 0 ) {
		  //       var newProc = proc + p.delay;
		  //       if ( time > proc && time < newProc ) {
		  //         procStr += ' ^ ';
		  //       } else {
		  //         procStr += '   ';
		  //       }
		  //       proc = newProc;
		  //       str  += '---';
		  //     }
		  //     var newProc = proc + p.duration;
		  //     if ( time > proc && time < newProc ) {
		  //       procStr += '  ^   ';
		  //     } else if (time === proc) {
		  //       procStr += '^     ';
		  //     } else if (time === newProc) {
		  //       procStr += '    ^ ';
		  //     } else {
		  //       procStr += '      ';
		  //     }
		  //     proc = newProc;
		  //     str += '=====|';
		  //   }

		  //   console.log(str);
		  //   console.log(procStr);
		  // }


		  return Tween;
		}(_module2.default);

		exports.default = Tween;

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _getIterator2 = __webpack_require__(29);

		var _getIterator3 = _interopRequireDefault(_getIterator2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _tweener = __webpack_require__(10);

		var _tweener2 = _interopRequireDefault(_tweener);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Timeline = function (_Tween) {
		  (0, _inherits3.default)(Timeline, _Tween);

		  /*
		    API method to add child tweens/timelines.
		    @public
		    @param {Object, Array} Tween/Timeline or an array of such.
		    @returns {Object} Self.
		  */

		  Timeline.prototype.add = function add() {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    this._pushTimelineArray(args);
		    this._calcDimentions();
		    return this;
		  };
		  /*
		    API method to append the Tween/Timeline to the end of the
		    timeline. Each argument is treated as a new append.
		    Array of tweens is treated as a parallel sequence.
		    @public
		    @param {Object, Array} Tween/Timeline to append or array of such.
		    @returns {Object} Self.
		  */


		  Timeline.prototype.append = function append() {
		    for (var _len2 = arguments.length, timeline = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      timeline[_key2] = arguments[_key2];
		    }

		    for (var _iterator = timeline, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
		      var _ref;

		      if (_isArray) {
		        if (_i >= _iterator.length) break;
		        _ref = _iterator[_i++];
		      } else {
		        _i = _iterator.next();
		        if (_i.done) break;
		        _ref = _i.value;
		      }

		      var tm = _ref;

		      if (_h2.default.isArray(tm)) {
		        this._appendTimelineArray(tm);
		      } else {
		        this._appendTimeline(tm, this._timelines.length);
		      }
		      this._calcDimentions();
		    }
		    return this;
		  };
		  /*
		    API method to stop the Tween.
		    @public
		    @param   {Number} Progress [0..1] to set when stopped.
		    @returns {Object} Self.
		  */


		  Timeline.prototype.stop = function stop(progress) {
		    _Tween.prototype.stop.call(this, progress);
		    this._stopChildren(progress);
		    return this;
		  };
		  /*
		    Method to reset tween's state and properties.
		    @public
		    @overrides @ Tween
		    @returns this.
		  */


		  Timeline.prototype.reset = function reset() {
		    _Tween.prototype.reset.call(this);
		    this._resetChildren();
		    return this;
		  };
		  /*
		    Method to call `reset` method on all children.
		    @private
		  */


		  Timeline.prototype._resetChildren = function _resetChildren() {
		    for (var i = 0; i < this._timelines.length; i++) {
		      this._timelines[i].reset();
		    }
		  };
		  /*
		    Method to call `stop` method on all children.
		    @private
		    @param   {Number} Progress [0..1] to set when stopped.
		  */


		  Timeline.prototype._stopChildren = function _stopChildren(progress) {
		    for (var i = this._timelines.length - 1; i >= 0; i--) {
		      this._timelines[i].stop(progress);
		    }
		  };
		  /*
		    Method to set tween's state to complete.
		    @private
		    @overrides @ Tween
		    @param {Number} Current time.
		    @param {Boolean} Is yoyo period.
		  */
		  // _complete ( time, isYoyo ) {
		  //   // this._updateChildren( 1, time, isYoyo );
		  //   // this._setProgress( 1, time, isYoyo );
		  //   super._complete( time, isYoyo );
		  //   // this._resetChildren();
		  // }

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to append Tween/Timeline array or mix of such.
		    @private
		    @param {Array} Array of Tweens/Timelines.
		  */


		  Timeline.prototype._appendTimelineArray = function _appendTimelineArray(timelineArray) {
		    var i = timelineArray.length,
		        time = this._props.repeatTime - this._props.delay,
		        len = this._timelines.length;

		    while (i--) {
		      this._appendTimeline(timelineArray[i], len, time);
		    }
		  };
		  /*
		    Method to append a single timeline to the Timeline.
		    @private
		    @param {Object} Tween/Timline to append.
		    @param {Number} Index of the append.
		    @param {Number} Shift time.
		  */


		  Timeline.prototype._appendTimeline = function _appendTimeline(timeline, index, time) {
		    // if timeline is a module with timeline property then extract it
		    if (timeline.timeline instanceof Timeline) {
		      timeline = timeline.timeline;
		    }
		    if (timeline.tween instanceof _tween2.default) {
		      timeline = timeline.tween;
		    }

		    var shift = time != null ? time : this._props.duration;
		    shift += timeline._props.shiftTime || 0;
		    timeline.index = index;this._pushTimeline(timeline, shift);
		  };
		  /*
		    PrivateMethod to push Tween/Timeline array.
		    @private
		    @param {Array} Array of Tweens/Timelines.
		  */


		  Timeline.prototype._pushTimelineArray = function _pushTimelineArray(array) {
		    for (var i = 0; i < array.length; i++) {
		      var tm = array[i];
		      // recursive push to handle arrays of arrays
		      if (_h2.default.isArray(tm)) {
		        this._pushTimelineArray(tm);
		      } else {
		        this._pushTimeline(tm);
		      }
		    };
		  };
		  /*
		    Method to push a single Tween/Timeline.
		    @private
		    @param {Object} Tween or Timeline to push.
		    @param {Number} Number of milliseconds to shift the start time
		                    of the Tween/Timeline.
		  */


		  Timeline.prototype._pushTimeline = function _pushTimeline(timeline, shift) {
		    // if timeline is a module with timeline property then extract it
		    if (timeline.timeline instanceof Timeline) {
		      timeline = timeline.timeline;
		    }
		    if (timeline.tween instanceof _tween2.default) {
		      timeline = timeline.tween;
		    }
		    // add self delay to the timeline
		    shift != null && timeline._setProp({ 'shiftTime': shift });
		    this._timelines.push(timeline);
		    this._recalcDuration(timeline);
		  };
		  /*
		    Method set progress on self and child Tweens/Timelines.
		    @private
		    @param {Number} Progress to set.
		    @param {Number} Current update time.
		  */


		  Timeline.prototype._setProgress = function _setProgress(p, time, isYoyo) {
		    _tween2.default.prototype._setProgress.call(this, p, time);
		    // we need to pass self previous time to children
		    // to prevent initial _wasUnknownUpdate nested waterfall
		    // if not yoyo option set, pass the previous time
		    // otherwise, pass previous or next time regarding yoyo period.
		    this._updateChildren(p, time, isYoyo);
		  };

		  Timeline.prototype._updateChildren = function _updateChildren(p, time, isYoyo) {
		    this._o.isIt && console.log(time, this._prevTime);
		    var coef = time > this._prevTime ? -1 : 1;
		    if (this._props.isYoyo && isYoyo) {
		      coef *= -1;
		    }
		    var timeToTimelines = this._props.startTime + p * this._props.duration,
		        prevTimeToTimelines = timeToTimelines + coef,
		        len = this._timelines.length;

		    this._o.isIt && console.log('update children', timeToTimelines, prevTimeToTimelines);
		    for (var i = 0; i < len; i++) {
		      // specify the children's array update loop direction
		      // if time > prevTime go from 0->length else from length->0
		      // var j = ( time > this._prevTime ) ? i : (len-1) - i ;
		      var j = timeToTimelines > prevTimeToTimelines ? i : len - 1 - i;
		      this._timelines[j]._update(timeToTimelines, prevTimeToTimelines, this._prevYoyo, this._onEdge);
		    }
		    this._prevYoyo = isYoyo;
		  };
		  /*
		    Method calculate self duration based on timeline's duration.
		    @private
		    @param {Object} Tween or Timeline to calculate.
		  */


		  Timeline.prototype._recalcDuration = function _recalcDuration(timeline) {
		    var p = timeline._props,
		        timelineTime = p.repeatTime / p.speed + (p.shiftTime || 0);

		    this._props.duration = Math.max(timelineTime, this._props.duration);
		  };
		  /*
		    Method calculate self duration from skretch.
		    @private
		  */


		  Timeline.prototype._recalcTotalDuration = function _recalcTotalDuration() {
		    var i = this._timelines.length;
		    this._props.duration = 0;
		    while (i--) {
		      var tm = this._timelines[i];
		      // recalc total duration on child timelines
		      tm._recalcTotalDuration && tm._recalcTotalDuration();
		      // add the timeline's duration to selft duration
		      this._recalcDuration(tm);
		    }
		    this._calcDimentions();
		  };
		  /*
		    Method set start and end times.
		    @private
		    @param {Number, Null} Time to start with.
		  */


		  Timeline.prototype._setStartTime = function _setStartTime(time) {
		    var isReset = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    _Tween.prototype._setStartTime.call(this, time);
		    this._startTimelines(this._props.startTime, isReset);
		  };
		  /*
		    Method calculate self duration based on timeline's duration.
		    @private
		    @param {Number, Null} Time to start with.
		  */


		  Timeline.prototype._startTimelines = function _startTimelines(time) {
		    var isReset = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    var p = this._props,
		        isStop = this._state === 'stop';

		    time == null && (time = this._props.startTime);

		    for (var i = 0; i < this._timelines.length; i++) {
		      var tm = this._timelines[i];
		      tm._setStartTime(time, isReset);
		      // if from `_subPlay` and `_prevTime` is set and state is `stop`
		      // prevTime normalizing is for play/pause functionality, so no
		      // need to normalize if the timeline is in `stop` state.
		      if (!isReset && tm._prevTime != null && !isStop) {
		        tm._prevTime = tm._normPrevTimeForward();
		      }
		    }
		  };
		  /*
		    Method to launch onRefresh callback.
		    @method _refresh
		    @private
		    @overrides @ Tween
		    @param {Boolean} If refresh even before start time.
		  */


		  Timeline.prototype._refresh = function _refresh(isBefore) {
		    _Tween.prototype._refresh.call(this, isBefore);
		    var len = this._timelines.length;
		    for (var i = 0; i < len; i++) {
		      this._timelines[i]._refresh(isBefore);
		    }
		  };
		  /*
		    Method do declare defaults by this._defaults object
		    @private
		  */


		  Timeline.prototype._declareDefaults = function _declareDefaults() {
		    // if duration was passed on initialization stage, warn user and reset it.
		    if (this._o.duration != null) {
		      _h2.default.error('Duration can not be declared on Timeline, but "' + this._o.duration + '" is. You probably want to use Tween instead.');
		      this._o.duration = 0;
		    }
		    _Tween.prototype._declareDefaults.call(this);
		    // remove default
		    this._defaults.duration = 0;
		    this._defaults.easing = 'Linear.None';
		    this._defaults.backwardEasing = 'Linear.None';
		    this._defaults.nameBase = 'Timeline';
		  };

		  function Timeline() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Timeline);
		    return (0, _possibleConstructorReturn3.default)(this, _Tween.call(this, o));
		  }
		  /*
		    Method to declare some vars.
		    @private
		  */


		  Timeline.prototype._vars = function _vars() {
		    this._timelines = [];
		    _Tween.prototype._vars.call(this);
		  };

		  return Timeline;
		}(_tween2.default);

		exports.default = Timeline;

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		__webpack_require__(30);

		__webpack_require__(31);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Tweener = function () {
		  function Tweener() {
		    (0, _classCallCheck3.default)(this, Tweener);
		    this._vars();return this;
		  }

		  Tweener.prototype._vars = function _vars() {
		    this.tweens = [];this._loop = this._loop.bind(this);
		  };
		  /*
		    Main animation loop. Should have only one concurrent loop.
		    @private
		    @returns this
		  */


		  Tweener.prototype._loop = function _loop() {
		    if (!this._isRunning) {
		      return false;
		    }
		    this._update(window.performance.now());
		    if (!this.tweens.length) {
		      return this._isRunning = false;
		    }
		    requestAnimationFrame(this._loop);
		    return this;
		  };
		  /*
		    Method to start animation loop.
		    @private
		  */


		  Tweener.prototype._startLoop = function _startLoop() {
		    if (this._isRunning) {
		      return;
		    };this._isRunning = true;
		    requestAnimationFrame(this._loop);
		  };
		  /*
		    Method to stop animation loop.
		    @private
		  */


		  Tweener.prototype._stopLoop = function _stopLoop() {
		    this._isRunning = false;
		  };
		  /*
		    Method to update every tween/timeline on animation frame.
		    @private
		  */


		  Tweener.prototype._update = function _update(time) {
		    var i = this.tweens.length;
		    while (i--) {
		      // cache the current tween
		      var tween = this.tweens[i];
		      if (tween && tween._update(time) === true) {
		        this.remove(tween);
		        tween._onTweenerFinish();
		        tween._prevTime = undefined;
		      }
		    }
		  };
		  /*
		    Method to add a Tween/Timeline to loop pool.
		    @param {Object} Tween/Timeline to add.
		  */


		  Tweener.prototype.add = function add(tween) {
		    // return if tween is already running
		    if (tween._isRunning) {
		      return;
		    }
		    tween._isRunning = true;
		    this.tweens.push(tween);
		    this._startLoop();
		  };
		  /*
		    Method stop updating all the child tweens/timelines.
		    @private
		  */


		  Tweener.prototype.removeAll = function removeAll() {
		    this.tweens.length = 0;
		  };
		  /*
		    Method to remove specific tween/timeline form updating.
		    @private
		  */


		  Tweener.prototype.remove = function remove(tween) {
		    var index = typeof tween === 'number' ? tween : this.tweens.indexOf(tween);

		    if (index !== -1) {
		      tween = this.tweens[index];
		      if (tween) {
		        tween._isRunning = false;
		        this.tweens.splice(index, 1);
		        tween._onTweenerRemove();
		      }
		    }
		  };

		  return Tweener;
		}();

		var t = new Tweener();
		exports.default = t;

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Class to define a module ancestor
		  with timeline and tween options and functionality.
		  All runable modules should inherit from this class.

		  @class Tweenable
		*/

		var Tweenable = function (_Module) {
		  (0, _inherits3.default)(Tweenable, _Module);

		  /*
		    `play` method for the timeline.
		    @public
		    @param {Number} Time shift.
		    @returns this.
		  */

		  Tweenable.prototype.play = function play() {
		    this.timeline.play.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `playBackward` method for the timeline.
		    @public
		    @param {Number} Time shift.
		    @returns this.
		  */


		  Tweenable.prototype.playBackward = function playBackward() {
		    this.timeline.playBackward.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `pause` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.pause = function pause() {
		    this.timeline.pause.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `stop` method for the timeline.
		    @public
		    @param {Number} [0...1] Progress to set on stop.
		                            *Default* is `0` if `play`
		                            and `1` if `playBAckward`.
		    @returns this.
		  */


		  Tweenable.prototype.stop = function stop() {
		    this.timeline.stop.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `reset` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.reset = function reset() {
		    this.timeline.reset.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `replay` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.replay = function replay() {
		    this.timeline.replay.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `replay` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.replayBackward = function replayBackward() {
		    this.timeline.replayBackward.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `setProgress` method for the timeline.
		    @public
		    @param {Number} [0...1] Progress value.
		    @returns this.
		  */


		  Tweenable.prototype.setProgress = function setProgress() {
		    this.timeline.setProgress.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    setSpeed method for the timeline.
		    @param {Number} Speed value.
		    @returns this.
		  */


		  Tweenable.prototype.setSpeed = function setSpeed(speed) {
		    this.timeline.setSpeed.apply(this.timeline, arguments);
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  function Tweenable() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Tweenable);

		    // pipe function for _o object
		    // before creating tween/timeline

		    var _this = (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));
		    // super of Module


		    _this._transformTweenOptions();
		    // make tween only if isTweenLess option is not set
		    !_this._o.isTweenLess && _this._makeTween();
		    // make timeline only if isTimelineLess option is not set
		    !_this._o.isTimelineLess && _this._makeTimeline();
		    return _this;
		  }
		  /*
		    Placeholder method that should be overrided
		    and will be called before tween/timeline creation.
		    @private
		  */


		  Tweenable.prototype._transformTweenOptions = function _transformTweenOptions() {};
		  /*
		    Method to create tween.
		    @private
		  */


		  Tweenable.prototype._makeTween = function _makeTween() {
		    // pass callbacks context
		    this._o.callbacksContext = this._o.callbacksContext || this;
		    this.tween = new _tween2.default(this._o);
		    // make timeline property point to tween one is "no timeline" mode
		    this._o.isTimelineLess && (this.timeline = this.tween);
		  };
		  /*
		    Method to create timeline.
		    @private
		    @param {Object} Timeline's options.
		                    An object which contains "timeline" property with
		                    timeline options.
		  */


		  Tweenable.prototype._makeTimeline = function _makeTimeline() {
		    // pass callbacks context
		    this._o.timeline = this._o.timeline || {};
		    this._o.timeline.callbacksContext = this._o.callbacksContext || this;
		    this.timeline = new _timeline2.default(this._o.timeline);
		    // set the flag to indicate that real timeline is present
		    this._isTimeline = true;
		    // if tween exist - add it to the timeline there is some
		    // modules like burst and stagger that have no tween
		    this.tween && this.timeline.add(this.tween);
		  };

		  return Tweenable;
		}(_module2.default);

		exports.default = Tweenable;

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _tweenable = __webpack_require__(11);

		var _tweenable2 = _interopRequireDefault(_tweenable);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  The Thenable class adds .then public method and
		  the ability to chain API calls.
		*/

		var Thenable = function (_Tweenable) {
		  (0, _inherits3.default)(Thenable, _Tweenable);

		  function Thenable() {
		    (0, _classCallCheck3.default)(this, Thenable);
		    return (0, _possibleConstructorReturn3.default)(this, _Tweenable.apply(this, arguments));
		  }

		  /*
		    Method to create a then record for the module.
		    @public
		    @param    {Object} Options for the next animation.
		    @returns  {Object} this.
		  */

		  Thenable.prototype.then = function then(o) {
		    // return if nothing was passed
		    if (o == null || !(0, _keys2.default)(o)) {
		      return 1;
		    }
		    // merge then options with the current ones
		    var prevRecord = this._history[this._history.length - 1],
		        prevModule = this._modules[this._modules.length - 1],
		        merged = this._mergeThenOptions(prevRecord, o);

		    // console.log(merged.angle);
		    this._resetMergedFlags(merged);
		    // reset isShowEnd flag on prev module
		    // prevModule._setProp && prevModule._setProp('isShowEnd', false);
		    // create a submodule of the same type as the master module
		    var module = new this.constructor(merged);
		    // set `this` as amster module of child module
		    module._masterModule = this;
		    // save the modules to the _modules array
		    this._modules.push(module);
		    // add module's tween into master timeline
		    this.timeline.append(module);
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to reset some flags on merged options object.
		    @private
		    @param   {Object} Options object.
		    @returns {Object} Options object.
		  */


		  Thenable.prototype._resetMergedFlags = function _resetMergedFlags(obj) {
		    // set the submodule to be without timeline for perf reasons
		    obj.isTimelineLess = true;
		    // reset isShowStart flag for the submodules
		    obj.isShowStart = false;
		    // reset isRefreshState flag for the submodules
		    obj.isRefreshState = false;
		    // set the submodule callbacks context
		    obj.callbacksContext = this._props.callbacksContext;
		    // set previous module
		    obj.prevChainModule = _h2.default.getLastItem(this._modules);
		    // pass the `this` as master module
		    obj.masterModule = this;
		    return obj;
		  };
		  /*
		    Method to initialize properties.
		    @private
		  */


		  Thenable.prototype._vars = function _vars() {
		    _Tweenable.prototype._vars.call(this);
		    // we are expect that the _o object
		    // have been already extended by defaults
		    var initialRecord = _h2.default.cloneObj(this._props);
		    for (var key in this._arrayPropertyMap) {
		      if (this._o[key]) {
		        var preParsed = this._parsePreArrayProperty(key, this._o[key]);
		        initialRecord[key] = preParsed;
		      }
		    }

		    this._history = [initialRecord];
		    // the array holds all modules in the then chain
		    this._modules = [this];
		    // the props that to exclude from then merge
		    this._nonMergeProps = { shape: 1 };
		  };
		  /*
		    Method to merge two options into one. Used in .then chains.
		    @private
		    @param {Object} Start options for the merge.
		    @param {Object} End options for the merge.
		    @returns {Object} Merged options.
		  */


		  Thenable.prototype._mergeThenOptions = function _mergeThenOptions(start, end) {
		    var o = {};
		    this._mergeStartLoop(o, start);
		    this._mergeEndLoop(o, start, end);
		    this._history.push(o);
		    return o;
		  };
		  /*
		    Originally part of the _mergeThenOptions.
		    Loops thru start object and copies all the props from it.
		    @param {Object} An object to copy in.
		    @parma {Object} Start options object.
		  */


		  Thenable.prototype._mergeStartLoop = function _mergeStartLoop(o, start) {
		    // loop thru start options object
		    for (var key in start) {
		      var value = start[key];
		      if (start[key] == null) {
		        continue;
		      };
		      // copy all values from start if not tween prop or duration
		      if (!_h2.default.isTweenProp(key) || key === 'duration') {
		        // if delta - copy only the end value
		        if (this._isDelta(value)) {
		          o[key] = _h2.default.getDeltaEnd(value);
		        } else {
		          o[key] = value;
		        }
		      }
		    }
		  };
		  /*
		    Originally part of the _mergeThenOptions.
		    Loops thru start object and merges all the props from it.
		    @param {Object} An object to copy in.
		    @parma {Object} Start options object.
		    @parma {Object} End options object.
		  */


		  Thenable.prototype._mergeEndLoop = function _mergeEndLoop(o, start, end) {
		    var endKeys = (0, _keys2.default)(end);

		    for (var key in end) {
		      // just copy parent option
		      if (key == 'parent') {
		        o[key] = end[key];continue;
		      };

		      // get key/value of the end object
		      // endKey - name of the property, endValue - value of the property
		      var endValue = end[key],
		          startValue = start[key] != null ? start[key] : this._defaults[key];

		      if (endValue == null) {
		        continue;
		      };
		      // make ∆ of start -> end
		      // if key name is radiusX/radiusY and
		      // the startValue is not set fallback to radius value
		      var isSubRadius = key === 'radiusX' || key === 'radiusY';
		      if (isSubRadius && startValue == null) {
		        startValue = start.radius;
		      }

		      var isSubRadius = key === 'scaleX' || key === 'scaleY';
		      if (isSubRadius && startValue == null) {
		        startValue = start.scale;
		      }

		      o[key] = this._mergeThenProperty(key, startValue, endValue);
		    }
		  };
		  /*
		    Method to merge `start` and `end` for a property in then record.
		    @private
		    @param {String} Property name.
		    @param {Any}    Start value of the property.
		    @param {Any}    End value of the property.
		  */


		  Thenable.prototype._mergeThenProperty = function _mergeThenProperty(key, startValue, endValue) {
		    // if isnt tween property
		    var isBoolean = typeof endValue === 'boolean',
		        curve,
		        easing;
		    if (!_h2.default.isTweenProp(key) && !this._nonMergeProps[key] && !isBoolean) {

		      if (_h2.default.isObject(endValue) && endValue.to != null) {
		        curve = endValue.curve;
		        easing = endValue.easing;
		        endValue = endValue.to;
		      }

		      // if end value is delta - just save it
		      if (this._isDelta(endValue)) {
		        return this._parseDeltaValues(key, endValue);
		      } else {
		        var parsedEndValue = this._parsePreArrayProperty(key, endValue);
		        // if end value is not delta - merge with start value
		        if (this._isDelta(startValue)) {
		          var _ref;

		          // if start value is delta - take the end value
		          // as start value of the new delta
		          return _ref = {}, _ref[_h2.default.getDeltaEnd(startValue)] = parsedEndValue, _ref.easing = easing, _ref.curve = curve, _ref;
		          // if both start and end value are not ∆ - make ∆
		        } else {
		            var _ref2;

		            return _ref2 = {}, _ref2[startValue] = parsedEndValue, _ref2.easing = easing, _ref2.curve = curve, _ref2;
		          }
		      }
		      // copy the tween values unattended
		    } else {
		        return endValue;
		      }
		  };
		  /*
		    Method to retreive array's length and return -1 for
		    all other types.
		    @private
		    @param {Array, Any} Array to get the width for.
		    @returns {Number} Array length or -1 if not array.
		  */


		  Thenable.prototype._getArrayLength = function _getArrayLength(arr) {
		    return _h2.default.isArray(arr) ? arr.length : -1;
		  };
		  /*
		    Method to check if the property is delta property.
		    @private
		    @param {Any} Parameter value to check.
		    @returns {Boolean}
		  */


		  Thenable.prototype._isDelta = function _isDelta(optionsValue) {
		    var isObject = _h2.default.isObject(optionsValue);
		    isObject = isObject && !optionsValue.unit;
		    return !(!isObject || _h2.default.isArray(optionsValue) || _h2.default.isDOM(optionsValue));
		  };
		  /*
		    Method to check if the module is first in `then` chain.
		    @private
		    @returns {Boolean} If the module is the first in module chain.
		  */


		  Thenable.prototype._isFirstInChain = function _isFirstInChain() {
		    return !this._masterModule;
		  };
		  /*
		    Method to check if the module is last in `then` chain.
		    @private
		    @returns {Boolean} If the module is the last in module chain.
		  */


		  Thenable.prototype._isLastInChain = function _isLastInChain() {
		    var master = this._masterModule;
		    // if there is no master field - check the modules length
		    // if module length is 1 thus there is no modules chain
		    // it is the last one, otherwise it isnt
		    if (!master) {
		      return this._modules.length === 1;
		    }
		    // if there is master - check if it is the last item in _modules chain
		    return this === _h2.default.getLastItem(master._modules);
		  };

		  return Thenable;
		}(_tweenable2.default);

		exports.default = Thenable;

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Tuneable = function (_Thenable) {
		  (0, _inherits3.default)(Tuneable, _Thenable);

		  function Tuneable() {
		    (0, _classCallCheck3.default)(this, Tuneable);
		    return (0, _possibleConstructorReturn3.default)(this, _Thenable.apply(this, arguments));
		  }

		  /*
		    Method to start the animation with optional new options.
		    @public
		    @param {Object} New options to set on the run.
		    @returns {Object} this.
		  */

		  Tuneable.prototype.tune = function tune(o) {
		    // if options object was passed
		    if (o && (0, _keys2.default)(o).length) {
		      this._transformHistory(o);
		      this._tuneNewOptions(o);
		      // restore array prop values because _props
		      // contain them as parsed arrays
		      // but we need the as strings to store in history
		      // and merge in history chains
		      this._history[0] = _h2.default.cloneObj(this._props);
		      for (var key in this._arrayPropertyMap) {
		        if (o[key] != null) {
		          this._history[0][key] = this._preparsePropValue(key, o[key]);
		        }
		      }

		      this._tuneSubModules();
		      this._resetTweens();
		    }
		    return this;
		  };
		  /*
		    Method to regenerate all the random properties form initial object.
		    @public
		    @returns this.
		  */


		  Tuneable.prototype.generate = function generate() {
		    return this.tune(this._o);
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to preparse options in object.
		    @private
		    @param {Object} Object to preparse properties on.
		    @returns {Object} Passed object with preparsed props.
		  */
		  // _preParseOptions ( o ) {
		  //   for (var key in o) {
		  //     o[key] = this._preparsePropValue( key, o[key] );
		  //   }
		  //   return o;
		  // }
		  /*
		    Method to transform history rewrite new options object chain on run.
		    @private
		    @param {Object} New options to tune for.
		  */


		  Tuneable.prototype._transformHistory = function _transformHistory(o) {
		    for (var key in o) {
		      var value = o[key];
		      // don't transform for childOptions
		      // if ( key === 'childOptions' ) { continue; }
		      this._transformHistoryFor(key, this._preparsePropValue(key, value));
		    }
		  };
		  /*
		    Method to transform history chain for specific key/value.
		    @param {String} Name of the property to transform history for.
		    @param {Any} The new property's value.
		  */


		  Tuneable.prototype._transformHistoryFor = function _transformHistoryFor(key, value) {
		    for (var i = 0; i < this._history.length; i++) {
		      if (value = this._transformHistoryRecord(i, key, value)) {
		        // break if no further history modifications needed
		        if (value == null) {
		          break;
		        }
		      }
		    }
		  };
		  /*
		    Method to transform history recod with key/value.
		    @param {Number} Index of the history record to transform.
		    @param {String} Property name to transform.
		    @param {Any} Property value to transform to.
		    @param {Object} Optional the current history record.
		    @param {Object} Optional the next history record.
		    @returns {Boolean} Returns true if no further
		                       history modifications is needed.
		  */


		  Tuneable.prototype._transformHistoryRecord = function _transformHistoryRecord(index, key, newVal, currRecord, nextRecord) {
		    // newVal = this._parseProperty( key, newVal );
		    if (newVal == null) {
		      return null;
		    }

		    // fallback to history records, if wasn't specified
		    currRecord = currRecord == null ? this._history[index] : currRecord;
		    nextRecord = nextRecord == null ? this._history[index + 1] : nextRecord;

		    var oldVal = currRecord[key],
		        nextVal = nextRecord == null ? null : nextRecord[key];

		    // if index is 0 - always save the newVal
		    // and return non-delta for subsequent modifications
		    if (index === 0) {
		      currRecord[key] = newVal;
		      // always return on tween properties
		      if (_h2.default.isTweenProp(key) && key !== 'duration') {
		        return null;
		      }
		      // nontween properties
		      var isRewriteNext = this._isRewriteNext(oldVal, nextVal),
		          returnVal = this._isDelta(newVal) ? _h2.default.getDeltaEnd(newVal) : newVal;
		      return isRewriteNext ? returnVal : null;
		    } else {
		      // if was delta and came none-deltta - rewrite
		      // the start of the delta and stop
		      if (this._isDelta(oldVal)) {
		        var _currRecord$key;

		        currRecord[key] = (_currRecord$key = {}, _currRecord$key[newVal] = _h2.default.getDeltaEnd(oldVal), _currRecord$key);
		        return null;
		      } else {
		        // if the old value is not delta and the new one is
		        currRecord[key] = newVal;
		        // if the next item has the same value - return the
		        // item for subsequent modifications or stop
		        return this._isRewriteNext(oldVal, nextVal) ? newVal : null;
		      }
		    }
		  };
		  /*
		    Method to check if the next item should
		    be rewrited in transform history operation.
		    @private
		    @param {Any} Current value.
		    @param {Any} Next value.
		    @returns {Boolean} If need to rewrite the next value.
		  */


		  Tuneable.prototype._isRewriteNext = function _isRewriteNext(currVal, nextVal) {
		    // return false if nothing to rewrite next
		    if (nextVal == null && currVal != null) {
		      return false;
		    }

		    var isEqual = currVal === nextVal,
		        isNextDelta = this._isDelta(nextVal),
		        isDelta = this._isDelta(currVal),
		        isValueDeltaChain = false,
		        isDeltaChain = false;

		    if (isDelta && isNextDelta) {
		      if (_h2.default.getDeltaEnd(currVal) == _h2.default.getDeltaStart(nextVal)) {
		        isDeltaChain = true;
		      }
		    } else if (isNextDelta) {
		      isValueDeltaChain = _h2.default.getDeltaStart(nextVal) === '' + currVal;
		    }

		    return isEqual || isValueDeltaChain || isDeltaChain;
		  };
		  /*
		    Method to tune new history options to all the submodules.
		    @private
		  */


		  Tuneable.prototype._tuneSubModules = function _tuneSubModules() {
		    for (var i = 1; i < this._modules.length; i++) {
		      this._modules[i]._tuneNewOptions(this._history[i]);
		    }
		  };
		  /*
		    Method to set new options on run.
		    @param {Boolean} If foreign context.
		    @private
		  */


		  Tuneable.prototype._resetTweens = function _resetTweens() {
		    var i = 0,
		        shift = 0,
		        tweens = this.timeline._timelines;

		    // if `isTimelineLess` return
		    if (tweens == null) {
		      return;
		    }

		    for (var i = 0; i < tweens.length; i++) {
		      var tween = tweens[i],
		          prevTween = tweens[i - 1];

		      shift += prevTween ? prevTween._props.repeatTime : 0;
		      this._resetTween(tween, this._history[i], shift);
		    }
		    this.timeline._setProp(this._props.timeline);
		    this.timeline._recalcTotalDuration();
		  };
		  /*
		    Method to reset tween with new options.
		    @param {Object} Tween to reset.
		    @param {Object} Tween's to reset tween with.
		    @param {Number} Optional number to shift tween start time.
		  */


		  Tuneable.prototype._resetTween = function _resetTween(tween, o) {
		    var shift = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		    o.shiftTime = shift;tween._setProp(o);
		  };

		  return Tuneable;
		}(_thenable2.default);

		exports.default = Tuneable;

	/***/ },
	/* 14 */,
	/* 15 */,
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Base class for module. Extends and parses defaults.
		*/

		var Module = function () {
		  function Module() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Module);

		    this._o = o;
		    this._index = this._o.index || 0;
		    // map of props that should be
		    // parsed to arrays of values
		    this._arrayPropertyMap = {
		      strokeDashoffset: 1,
		      strokeDasharray: 1,
		      origin: 1
		    };

		    this._skipPropsDelta = {
		      timeline: 1,
		      prevChainModule: 1,
		      callbacksContext: 1

		    };

		    this._declareDefaults();
		    this._extendDefaults();

		    this._vars();
		    this._render();
		  }
		  /*
		    Method to declare defaults.
		    @private
		  */


		  Module.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {};
		  };
		  /*
		    Method to declare module's variables.
		    @private
		  */


		  Module.prototype._vars = function _vars() {
		    this._progress = 0;
		    this._strokeDasharrayBuffer = [];
		  };
		  /*
		    Method to render on initialization.
		    @private
		  */


		  Module.prototype._render = function _render() {};
		  /*
		    Method to set property on the module.
		    @private
		    @param {String, Object} Name of the property to set
		                            or object with properties to set.
		    @param {Any} Value for the property to set. Could be
		                  undefined if the first param is object.
		  */


		  Module.prototype._setProp = function _setProp(attr, value) {
		    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
		      for (var key in attr) {
		        this._assignProp(key, attr[key]);
		      }
		    } else {
		      this._assignProp(attr, value);
		    }
		  };
		  /*
		    Method to assign single property's value.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		  */


		  Module.prototype._assignProp = function _assignProp(key, value) {
		    this._props[key] = value;
		  };
		  /*
		    Method to show element.
		    @private
		  */


		  Module.prototype._show = function _show() {
		    var p = this._props;
		    if (!this.el) {
		      return;
		    }

		    if (p.isSoftHide) {
		      this.el.style.opacity = p.opacity;
		      _h2.default.setPrefixedStyle(this.el, 'transform', this._fillTransform());
		    } else {
		      this.el.style.display = 'block';
		    }

		    this._isShown = true;
		  };
		  /*
		    Method to hide element.
		    @private
		  */


		  Module.prototype._hide = function _hide() {
		    if (!this.el) {
		      return;
		    }

		    if (this._props.isSoftHide) {
		      this.el.style.opacity = 0;
		      _h2.default.setPrefixedStyle(this.el, 'transform', 'scale(0)');
		    } else {
		      this.el.style.display = 'none';
		    }

		    this._isShown = false;
		  };
		  /*
		    Method to parse option string.
		    Searches for stagger and rand values and parses them.
		    Leaves the value unattended otherwise.
		    @param {Any} Option value to parse.
		    @returns {Number} Parsed options value.
		  */


		  Module.prototype._parseOptionString = function _parseOptionString(value) {
		    if (typeof value === 'string') {
		      if (value.match(/stagger/)) {
		        value = _h2.default.parseStagger(value, this._index);
		      }
		    }
		    if (typeof value === 'string') {
		      if (value.match(/rand/)) {
		        value = _h2.default.parseRand(value);
		      }
		    }
		    return value;
		  };
		  /*
		    Method to parse postion option.
		    @param {String} Property name.
		    @param {Any} Property Value.
		    @returns {String} Parsed options value.
		  */


		  Module.prototype._parsePositionOption = function _parsePositionOption(key, value) {
		    if (_h2.default.unitOptionMap[key]) {
		      value = _h2.default.parseUnit(value).string;
		    }
		    return value;
		  };
		  /*
		    Method to parse strokeDash.. option.
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {String} Parsed options value.
		  */


		  Module.prototype._parseStrokeDashOption = function _parseStrokeDashOption(key, value) {
		    var result = value;
		    // parse numeric/percent values for strokeDash.. properties
		    if (this._arrayPropertyMap[key]) {
		      var result = [];
		      switch (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) {
		        case 'number':
		          result.push(_h2.default.parseUnit(value));
		          break;
		        case 'string':
		          var array = value.split(' ');
		          for (var i = 0; i < array.length; i++) {
		            result.push(_h2.default.parseUnit(array[i]));
		          }
		          break;
		      }
		    }
		    return result;
		  };
		  /*
		    Method to check if the property is delta property.
		    @private
		    @param {Any} Parameter value to check.
		    @returns {Boolean}
		  */


		  Module.prototype._isDelta = function _isDelta(optionsValue) {
		    var isObject = _h2.default.isObject(optionsValue);
		    isObject = isObject && !optionsValue.unit;
		    return !(!isObject || _h2.default.isArray(optionsValue) || _h2.default.isDOM(optionsValue));
		  };
		  /*
		    Method to get delta from property and set
		    the property's start value to the props object.
		    @private
		    @param {String} Key name to get delta for.
		    @param {Object} Option value to get the delta for.
		  */


		  Module.prototype._getDelta = function _getDelta(key, optionsValue) {
		    var delta;
		    if ((key === 'left' || key === 'top') && !this._o.ctx) {
		      _h2.default.warn('Consider to animate x/y properties instead of left/top,\n        as it would be much more performant', optionsValue);
		    }
		    // skip delta calculation for a property if it is listed
		    // in skipPropsDelta object
		    if (this._skipPropsDelta && this._skipPropsDelta[key]) {
		      return;
		    }
		    // get delta
		    delta = _h2.default.parseDelta(key, optionsValue, this._index);
		    // if successfully parsed - save it
		    if (delta.type != null) {
		      this._deltas[key] = delta;
		    }

		    var deltaEnd = (0, _typeof3.default)(delta.end) === 'object' ? delta.end.value === 0 ? 0 : delta.end.string : delta.end;
		    // set props to end value of the delta
		    // 0 should be 0 regardless units
		    this._props[key] = deltaEnd;
		  };
		  /*
		    Method to copy `_o` options to `_props` object
		    with fallback to `_defaults`.
		    @private
		  */


		  Module.prototype._extendDefaults = function _extendDefaults() {
		    this._props = {};
		    this._deltas = {};
		    for (var key in this._defaults) {
		      // skip property if it is listed in _skipProps
		      // if (this._skipProps && this._skipProps[key]) { continue; }
		      // copy the properties to the _o object
		      var value = this._o[key] != null ? this._o[key] : this._defaults[key];
		      // parse option
		      this._parseOption(key, value);
		    }
		  };
		  /*
		    Method to tune new oprions to _o and _props object.
		    @private
		    @param {Object} Options object to tune to.
		  */


		  Module.prototype._tuneNewOptions = function _tuneNewOptions(o) {
		    // hide the module before tuning it's options
		    // cuz the user could see the change
		    this._hide();
		    for (var key in o) {
		      // skip property if it is listed in _skipProps
		      // if (this._skipProps && this._skipProps[key]) { continue; }
		      // copy the properties to the _o object
		      // delete the key from deltas
		      o && delete this._deltas[key];
		      // rewrite _o record
		      this._o[key] = o[key];
		      // save the options to _props
		      this._parseOption(key, o[key]);
		    }
		  };
		  /*
		    Method to parse option value.
		    @param {String} Option name.
		    @param {Any} Option value.
		  */


		  Module.prototype._parseOption = function _parseOption(name, value) {
		    // if delta property
		    if (this._isDelta(value) && !this._skipPropsDelta[name]) {
		      this._getDelta(name, value);
		      var deltaEnd = _h2.default.getDeltaEnd(value);
		      return this._assignProp(name, this._parseProperty(name, deltaEnd));
		    }

		    this._assignProp(name, this._parseProperty(name, value));
		  };
		  /*
		    Method to parse postion and string props.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {Any}  Parsed property value.
		  */


		  Module.prototype._parsePreArrayProperty = function _parsePreArrayProperty(name, value) {
		    // parse stagger and rand values
		    value = this._parseOptionString(value);
		    // parse units for position properties
		    return this._parsePositionOption(name, value);
		  };
		  /*
		    Method to parse property value.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {Any}  Parsed property value.
		  */


		  Module.prototype._parseProperty = function _parseProperty(name, value) {
		    // parse `HTML` element in `parent` option
		    if (name === 'parent') {
		      return _h2.default.parseEl(value);
		    }
		    // parse `stagger`, `rand` and `position`
		    value = this._parsePreArrayProperty(name, value);
		    // parse numeric/percent values for strokeDash.. properties
		    return this._parseStrokeDashOption(name, value);
		  };
		  /*
		    Method to parse values inside ∆.
		    @private
		    @param {String} Key name.
		    @param {Object} Delta.
		    @returns {Object} Delta with parsed parameters.
		  */


		  Module.prototype._parseDeltaValues = function _parseDeltaValues(name, delta) {
		    // return h.parseDelta( name, delta, this._index );

		    var d = {};
		    for (var key in delta) {
		      var value = delta[key];

		      // delete delta[key];
		      // add parsed properties
		      var newEnd = this._parsePreArrayProperty(name, value);
		      d[this._parsePreArrayProperty(name, key)] = newEnd;
		    }
		    return d;
		  };
		  /*
		    Method to parse delta and nondelta properties.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {Any}  Parsed property value.
		  */


		  Module.prototype._preparsePropValue = function _preparsePropValue(key, value) {
		    return this._isDelta(value) ? this._parseDeltaValues(key, value) : this._parsePreArrayProperty(key, value);
		  };
		  /*
		    Method to calculate current progress of the deltas.
		    @private
		    @param {Number} Eased progress to calculate - [0..1].
		    @param {Number} Progress to calculate - [0..1].
		  */


		  Module.prototype._calcCurrentProps = function _calcCurrentProps(easedProgress, p) {

		    for (var key in this._deltas) {

		      var value = this._deltas[key];

		      // get eased progress from delta easing if defined and not curve
		      var isCurve = !!value.curve;
		      var ep = value.easing != null && !isCurve ? value.easing(p) : easedProgress;

		      if (value.type === 'array') {
		        var arr;
		        // if prop property is array - reuse it else - create an array
		        if (_h2.default.isArray(this._props[key])) {
		          arr = this._props[key];
		          arr.length = 0;
		        } else {
		          arr = [];
		        }

		        // just optimization to prevent curve
		        // calculations on every array item
		        var proc = isCurve ? value.curve(p) : null;

		        for (var i = 0; i < value.delta.length; i++) {
		          var item = value.delta[i],
		              dash = !isCurve ? value.start[i].value + ep * item.value : proc * (value.start[i].value + p * item.value);
		          arr.push({
		            string: '' + dash + item.unit,
		            value: dash,
		            unit: item.unit
		          });
		        }

		        this._props[key] = arr;
		      } else if (value.type === 'number') {
		        this._props[key] = !isCurve ? value.start + ep * value.delta : value.curve(p) * (value.start + p * value.delta);
		      } else if (value.type === 'unit') {
		        var currentValue = !isCurve ? value.start.value + ep * value.delta : value.curve(p) * (value.start.value + p * value.delta);

		        this._props[key] = '' + currentValue + value.end.unit;
		      } else if (value.type === 'color') {
		        var r, g, b, a;
		        if (!isCurve) {
		          r = parseInt(value.start.r + ep * value.delta.r, 10);
		          g = parseInt(value.start.g + ep * value.delta.g, 10);
		          b = parseInt(value.start.b + ep * value.delta.b, 10);
		          a = parseFloat(value.start.a + ep * value.delta.a);
		        } else {
		          r = parseInt(value.curve(p) * (value.start.r + p * value.delta.r), 10);
		          g = parseInt(value.curve(p) * (value.start.g + p * value.delta.g), 10);
		          b = parseInt(value.curve(p) * (value.start.b + p * value.delta.b), 10);
		          a = parseFloat(value.curve(p) * (value.start.a + p * value.delta.a));
		        }
		        this._props[key] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		      }
		    }
		  };
		  /*
		    Method to calculate current progress and probably draw it in children.
		    @private
		    @param {Number} Eased progress to set - [0..1].
		    @param {Number} Progress to set - [0..1].
		  */


		  Module.prototype._setProgress = function _setProgress(easedProgress, progress) {
		    this._progress = easedProgress;
		    this._calcCurrentProps(easedProgress, progress);
		  };

		  return Module;
		}();

		exports.default = Module;

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };

		exports.__esModule = true;

		var _iterator = __webpack_require__(32);

		var _iterator2 = _interopRequireDefault(_iterator);

		var _symbol = __webpack_require__(33);

		var _symbol2 = _interopRequireDefault(_symbol);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
		  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
		} : function (obj) {
		  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		};

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var Helpers, h;

		Helpers = (function() {
		  Helpers.prototype.NS = 'http://www.w3.org/2000/svg';

		  Helpers.prototype.logBadgeCss = 'background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;';

		  Helpers.prototype.shortColors = {
		    transparent: 'rgba(0,0,0,0)',
		    none: 'rgba(0,0,0,0)',
		    aqua: 'rgb(0,255,255)',
		    black: 'rgb(0,0,0)',
		    blue: 'rgb(0,0,255)',
		    fuchsia: 'rgb(255,0,255)',
		    gray: 'rgb(128,128,128)',
		    green: 'rgb(0,128,0)',
		    lime: 'rgb(0,255,0)',
		    maroon: 'rgb(128,0,0)',
		    navy: 'rgb(0,0,128)',
		    olive: 'rgb(128,128,0)',
		    purple: 'rgb(128,0,128)',
		    red: 'rgb(255,0,0)',
		    silver: 'rgb(192,192,192)',
		    teal: 'rgb(0,128,128)',
		    white: 'rgb(255,255,255)',
		    yellow: 'rgb(255,255,0)',
		    orange: 'rgb(255,128,0)'
		  };

		  Helpers.prototype.chainOptionMap = {};

		  Helpers.prototype.callbacksMap = {
		    onStart: 1,
		    onComplete: 1,
		    onFirstUpdate: 1,
		    onUpdate: 1,
		    onProgress: 1,
		    onRepeatStart: 1,
		    onRepeatComplete: 1
		  };

		  Helpers.prototype.tweenOptionMap = {
		    duration: 1,
		    delay: 1,
		    speed: 1,
		    repeat: 1,
		    easing: 1,
		    yoyo: 1,
		    shiftTime: 1,
		    isReversed: 1
		  };

		  Helpers.prototype.unitOptionMap = {
		    left: 1,
		    top: 1,
		    x: 1,
		    y: 1,
		    rx: 1,
		    ry: 1
		  };

		  Helpers.prototype.RAD_TO_DEG = 180 / Math.PI;

		  function Helpers() {
		    this.vars();
		  }

		  Helpers.prototype.vars = function() {
		    var ua;
		    this.prefix = this.getPrefix();
		    this.getRemBase();
		    this.isFF = this.prefix.lowercase === 'moz';
		    this.isIE = this.prefix.lowercase === 'ms';
		    ua = navigator.userAgent;
		    this.isOldOpera = ua.match(/presto/gim);
		    this.isSafari = ua.indexOf('Safari') > -1;
		    this.isChrome = ua.indexOf('Chrome') > -1;
		    this.isOpera = ua.toLowerCase().indexOf("op") > -1;
		    this.isChrome && this.isSafari && (this.isSafari = false);
		    (ua.match(/PhantomJS/gim)) && (this.isSafari = false);
		    this.isChrome && this.isOpera && (this.isChrome = false);
		    this.is3d = this.checkIf3d();
		    this.uniqIDs = -1;
		    this.div = document.createElement('div');
		    return document.body.appendChild(this.div);
		  };

		  Helpers.prototype.cloneObj = function(obj, exclude) {
		    var i, key, keys, newObj;
		    keys = Object.keys(obj);
		    newObj = {};
		    i = keys.length;
		    while (i--) {
		      key = keys[i];
		      if (exclude != null) {
		        if (!exclude[key]) {
		          newObj[key] = obj[key];
		        }
		      } else {
		        newObj[key] = obj[key];
		      }
		    }
		    return newObj;
		  };

		  Helpers.prototype.extend = function(objTo, objFrom) {
		    var key, value;
		    for (key in objFrom) {
		      value = objFrom[key];
		      if (objTo[key] == null) {
		        objTo[key] = objFrom[key];
		      }
		    }
		    return objTo;
		  };

		  Helpers.prototype.getRemBase = function() {
		    var html, style;
		    html = document.querySelector('html');
		    style = getComputedStyle(html);
		    return this.remBase = parseFloat(style.fontSize);
		  };

		  Helpers.prototype.clamp = function(value, min, max) {
		    if (value < min) {
		      return min;
		    } else if (value > max) {
		      return max;
		    } else {
		      return value;
		    }
		  };

		  Helpers.prototype.setPrefixedStyle = function(el, name, value) {
		    (name === 'transform') && (el.style["" + this.prefix.css + name] = value);
		    return el.style[name] = value;
		  };

		  Helpers.prototype.style = function(el, name, value) {
		    var key, keys, len, results;
		    if (typeof name === 'object') {
		      keys = Object.keys(name);
		      len = keys.length;
		      results = [];
		      while (len--) {
		        key = keys[len];
		        value = name[key];
		        results.push(this.setPrefixedStyle(el, key, value));
		      }
		      return results;
		    } else {
		      return this.setPrefixedStyle(el, name, value);
		    }
		  };

		  Helpers.prototype.prepareForLog = function(args) {
		    args = Array.prototype.slice.apply(args);
		    args.unshift('::');
		    args.unshift(this.logBadgeCss);
		    args.unshift('%cmo·js%c');
		    return args;
		  };

		  Helpers.prototype.log = function() {
		    if (mojs.isDebug === false) {
		      return;
		    }
		    return console.log.apply(console, this.prepareForLog(arguments));
		  };

		  Helpers.prototype.warn = function() {
		    if (mojs.isDebug === false) {
		      return;
		    }
		    return console.warn.apply(console, this.prepareForLog(arguments));
		  };

		  Helpers.prototype.error = function() {
		    if (mojs.isDebug === false) {
		      return;
		    }
		    return console.error.apply(console, this.prepareForLog(arguments));
		  };

		  Helpers.prototype.parseUnit = function(value) {
		    var amount, isStrict, ref, regex, returnVal, unit;
		    if (typeof value === 'number') {
		      return returnVal = {
		        unit: 'px',
		        isStrict: false,
		        value: value,
		        string: value === 0 ? "" + value : value + "px"
		      };
		    } else if (typeof value === 'string') {
		      regex = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin/gim;
		      unit = (ref = value.match(regex)) != null ? ref[0] : void 0;
		      isStrict = true;
		      if (!unit) {
		        unit = 'px';
		        isStrict = false;
		      }
		      amount = parseFloat(value);
		      return returnVal = {
		        unit: unit,
		        isStrict: isStrict,
		        value: amount,
		        string: amount === 0 ? "" + amount : "" + amount + unit
		      };
		    }
		    return value;
		  };

		  Helpers.prototype.bind = function(func, context) {
		    var bindArgs, wrapper;
		    wrapper = function() {
		      var args, unshiftArgs;
		      args = Array.prototype.slice.call(arguments);
		      unshiftArgs = bindArgs.concat(args);
		      return func.apply(context, unshiftArgs);
		    };
		    bindArgs = Array.prototype.slice.call(arguments, 2);
		    return wrapper;
		  };

		  Helpers.prototype.getRadialPoint = function(o) {
		    var point, radAngle, radiusX, radiusY;
		    if (o == null) {
		      o = {};
		    }
		    radAngle = (o.angle - 90) * 0.017453292519943295;
		    radiusX = o.radiusX != null ? o.radiusX : o.radius;
		    radiusY = o.radiusY != null ? o.radiusY : o.radius;
		    return point = {
		      x: o.center.x + (Math.cos(radAngle) * radiusX),
		      y: o.center.y + (Math.sin(radAngle) * radiusY)
		    };
		  };

		  Helpers.prototype.getPrefix = function() {
		    var dom, pre, styles, v;
		    styles = window.getComputedStyle(document.documentElement, "");
		    v = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/);
		    pre = (v || (styles.OLink === "" && ["", "o"]))[1];
		    dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
		    return {
		      dom: dom,
		      lowercase: pre,
		      css: "-" + pre + "-",
		      js: pre[0].toUpperCase() + pre.substr(1)
		    };
		  };

		  Helpers.prototype.strToArr = function(string) {
		    var arr;
		    arr = [];
		    if (typeof string === 'number' && !isNaN(string)) {
		      arr.push(this.parseUnit(string));
		      return arr;
		    }
		    string.trim().split(/\s+/gim).forEach((function(_this) {
		      return function(str) {
		        return arr.push(_this.parseUnit(_this.parseIfRand(str)));
		      };
		    })(this));
		    return arr;
		  };

		  Helpers.prototype.calcArrDelta = function(arr1, arr2) {
		    var delta, i, j, len1, num;
		    delta = [];
		    for (i = j = 0, len1 = arr1.length; j < len1; i = ++j) {
		      num = arr1[i];
		      delta[i] = this.parseUnit("" + (arr2[i].value - arr1[i].value) + arr2[i].unit);
		    }
		    return delta;
		  };

		  Helpers.prototype.isArray = function(variable) {
		    return variable instanceof Array;
		  };

		  Helpers.prototype.normDashArrays = function(arr1, arr2) {
		    var arr1Len, arr2Len, currItem, i, j, k, lenDiff, ref, ref1, startI;
		    arr1Len = arr1.length;
		    arr2Len = arr2.length;
		    if (arr1Len > arr2Len) {
		      lenDiff = arr1Len - arr2Len;
		      startI = arr2.length;
		      for (i = j = 0, ref = lenDiff; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		        currItem = i + startI;
		        arr2.push(this.parseUnit("0" + arr1[currItem].unit));
		      }
		    } else if (arr2Len > arr1Len) {
		      lenDiff = arr2Len - arr1Len;
		      startI = arr1.length;
		      for (i = k = 0, ref1 = lenDiff; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
		        currItem = i + startI;
		        arr1.push(this.parseUnit("0" + arr2[currItem].unit));
		      }
		    }
		    return [arr1, arr2];
		  };

		  Helpers.prototype.makeColorObj = function(color) {
		    var alpha, b, colorObj, g, isRgb, r, regexString1, regexString2, result, rgbColor;
		    if (color[0] === '#') {
		      result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
		      colorObj = {};
		      if (result) {
		        r = result[1].length === 2 ? result[1] : result[1] + result[1];
		        g = result[2].length === 2 ? result[2] : result[2] + result[2];
		        b = result[3].length === 2 ? result[3] : result[3] + result[3];
		        colorObj = {
		          r: parseInt(r, 16),
		          g: parseInt(g, 16),
		          b: parseInt(b, 16),
		          a: 1
		        };
		      }
		    }
		    if (color[0] !== '#') {
		      isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
		      if (isRgb) {
		        rgbColor = color;
		      }
		      if (!isRgb) {
		        rgbColor = !this.shortColors[color] ? (this.div.style.color = color, this.computedStyle(this.div).color) : this.shortColors[color];
		      }
		      regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
		      regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
		      result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor);
		      colorObj = {};
		      alpha = parseFloat(result[4] || 1);
		      if (result) {
		        colorObj = {
		          r: parseInt(result[1], 10),
		          g: parseInt(result[2], 10),
		          b: parseInt(result[3], 10),
		          a: (alpha != null) && !isNaN(alpha) ? alpha : 1
		        };
		      }
		    }
		    return colorObj;
		  };

		  Helpers.prototype.computedStyle = function(el) {
		    return getComputedStyle(el);
		  };

		  Helpers.prototype.capitalize = function(str) {
		    if (typeof str !== 'string') {
		      throw Error('String expected - nothing to capitalize');
		    }
		    return str.charAt(0).toUpperCase() + str.substring(1);
		  };

		  Helpers.prototype.parseRand = function(string) {
		    var rand, randArr, units;
		    randArr = string.split(/rand\(|\,|\)/);
		    units = this.parseUnit(randArr[2]);
		    rand = this.rand(parseFloat(randArr[1]), parseFloat(randArr[2]));
		    if (units.unit && randArr[2].match(units.unit)) {
		      return rand + units.unit;
		    } else {
		      return rand;
		    }
		  };

		  Helpers.prototype.parseStagger = function(string, index) {
		    var base, number, splittedValue, unit, unitValue, value;
		    value = string.split(/stagger\(|\)$/)[1].toLowerCase();
		    splittedValue = value.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim);
		    value = splittedValue.length > 3 ? (base = this.parseUnit(this.parseIfRand(splittedValue[1])), splittedValue[3]) : (base = this.parseUnit(0), splittedValue[1]);
		    value = this.parseIfRand(value);
		    unitValue = this.parseUnit(value);
		    number = index * unitValue.value + base.value;
		    unit = base.isStrict ? base.unit : unitValue.isStrict ? unitValue.unit : '';
		    if (unit) {
		      return "" + number + unit;
		    } else {
		      return number;
		    }
		  };

		  Helpers.prototype.parseIfStagger = function(value, i) {
		    if (!(typeof value === 'string' && value.match(/stagger/g))) {
		      return value;
		    } else {
		      return this.parseStagger(value, i);
		    }
		  };

		  Helpers.prototype.parseIfRand = function(str) {
		    if (typeof str === 'string' && str.match(/rand\(/)) {
		      return this.parseRand(str);
		    } else {
		      return str;
		    }
		  };

		  Helpers.prototype.parseDelta = function(key, value, index) {
		    var curve, delta, easing, end, endArr, endColorObj, i, j, len1, start, startArr, startColorObj;
		    value = this.cloneObj(value);
		    easing = value.easing;
		    if (easing != null) {
		      easing = mojs.easing.parseEasing(easing);
		    }
		    delete value.easing;
		    curve = value.curve;
		    if (curve != null) {
		      curve = mojs.easing.parseEasing(curve);
		    }
		    delete value.curve;
		    start = Object.keys(value)[0];
		    end = value[start];
		    delta = {
		      start: start
		    };
		    if (isNaN(parseFloat(start)) && !start.match(/rand\(/) && !start.match(/stagger\(/)) {
		      if (key === 'strokeLinecap') {
		        this.warn("Sorry, stroke-linecap property is not animatable yet, using the start(" + start + ") value instead", value);
		        return delta;
		      }
		      startColorObj = this.makeColorObj(start);
		      endColorObj = this.makeColorObj(end);
		      delta = {
		        type: 'color',
		        start: startColorObj,
		        end: endColorObj,
		        easing: easing,
		        curve: curve,
		        delta: {
		          r: endColorObj.r - startColorObj.r,
		          g: endColorObj.g - startColorObj.g,
		          b: endColorObj.b - startColorObj.b,
		          a: endColorObj.a - startColorObj.a
		        }
		      };
		    } else if (key === 'strokeDasharray' || key === 'strokeDashoffset' || key === 'origin') {
		      startArr = this.strToArr(start);
		      endArr = this.strToArr(end);
		      this.normDashArrays(startArr, endArr);
		      for (i = j = 0, len1 = startArr.length; j < len1; i = ++j) {
		        start = startArr[i];
		        end = endArr[i];
		        this.mergeUnits(start, end, key);
		      }
		      delta = {
		        type: 'array',
		        start: startArr,
		        end: endArr,
		        delta: this.calcArrDelta(startArr, endArr),
		        easing: easing,
		        curve: curve
		      };
		    } else {
		      if (!this.callbacksMap[key] && !this.tweenOptionMap[key]) {
		        if (this.unitOptionMap[key]) {
		          end = this.parseUnit(this.parseStringOption(end, index));
		          start = this.parseUnit(this.parseStringOption(start, index));
		          this.mergeUnits(start, end, key);
		          delta = {
		            type: 'unit',
		            start: start,
		            end: end,
		            delta: end.value - start.value,
		            easing: easing,
		            curve: curve
		          };
		        } else {
		          end = parseFloat(this.parseStringOption(end, index));
		          start = parseFloat(this.parseStringOption(start, index));
		          delta = {
		            type: 'number',
		            start: start,
		            end: end,
		            delta: end - start,
		            easing: easing,
		            curve: curve
		          };
		        }
		      }
		    }
		    return delta;
		  };

		  Helpers.prototype.mergeUnits = function(start, end, key) {
		    if (!end.isStrict && start.isStrict) {
		      end.unit = start.unit;
		      return end.string = "" + end.value + end.unit;
		    } else if (end.isStrict && !start.isStrict) {
		      start.unit = end.unit;
		      return start.string = "" + start.value + start.unit;
		    } else if (end.isStrict && start.isStrict) {
		      if (end.unit !== start.unit) {
		        start.unit = end.unit;
		        start.string = "" + start.value + start.unit;
		        return this.warn("Two different units were specified on \"" + key + "\" delta property, mo · js will fallback to end \"" + end.unit + "\" unit ");
		      }
		    }
		  };

		  Helpers.prototype.rand = function(min, max) {
		    return (Math.random() * (max - min)) + min;
		  };

		  Helpers.prototype.isDOM = function(o) {
		    var isNode;
		    if (o == null) {
		      return false;
		    }
		    isNode = typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
		    return typeof o === 'object' && isNode;
		  };

		  Helpers.prototype.getChildElements = function(element) {
		    var childNodes, children, i;
		    childNodes = element.childNodes;
		    children = [];
		    i = childNodes.length;
		    while (i--) {
		      if (childNodes[i].nodeType === 1) {
		        children.unshift(childNodes[i]);
		      }
		    }
		    return children;
		  };

		  Helpers.prototype.delta = function(start, end) {
		    var isType1, isType2, obj, type1, type2;
		    type1 = typeof start;
		    type2 = typeof end;
		    isType1 = type1 === 'string' || type1 === 'number' && !isNaN(start);
		    isType2 = type2 === 'string' || type2 === 'number' && !isNaN(end);
		    if (!isType1 || !isType2) {
		      this.error("delta method expects Strings or Numbers at input but got - " + start + ", " + end);
		      return;
		    }
		    obj = {};
		    obj[start] = end;
		    return obj;
		  };

		  Helpers.prototype.getUniqID = function() {
		    return ++this.uniqIDs;
		  };

		  Helpers.prototype.parsePath = function(path) {
		    var domPath;
		    if (typeof path === 'string') {
		      if (path.charAt(0).toLowerCase() === 'm') {
		        domPath = document.createElementNS(this.NS, 'path');
		        domPath.setAttributeNS(null, 'd', path);
		        return domPath;
		      } else {
		        return document.querySelector(path);
		      }
		    }
		    if (path.style) {
		      return path;
		    }
		  };

		  Helpers.prototype.closeEnough = function(num1, num2, eps) {
		    return Math.abs(num1 - num2) < eps;
		  };

		  Helpers.prototype.checkIf3d = function() {
		    var div, prefixed, style, tr;
		    div = document.createElement('div');
		    this.style(div, 'transform', 'translateZ(0)');
		    style = div.style;
		    prefixed = this.prefix.css + "transform";
		    tr = style[prefixed] != null ? style[prefixed] : style.transform;
		    return tr !== '';
		  };


		  /*
		    Method to check if variable holds pointer to an object.
		    @param {Any} Variable to test
		    @returns {Boolean} If variable is object.
		   */

		  Helpers.prototype.isObject = function(variable) {
		    return variable !== null && typeof variable === 'object';
		  };


		  /*
		    Method to get first value of the object.
		    Used to get end value on ∆s.
		    @param {Object} Object to get the value of.
		    @returns {Any} The value of the first object' property.
		   */

		  Helpers.prototype.getDeltaEnd = function(obj) {
		    var key;
		    key = Object.keys(obj)[0];
		    return obj[key];
		  };


		  /*
		    Method to get first key of the object.
		    Used to get start value on ∆s.
		    @param {Object} Object to get the value of.
		    @returns {String} The key of the first object' property.
		   */

		  Helpers.prototype.getDeltaStart = function(obj) {
		    var key;
		    key = Object.keys(obj)[0];
		    return key;
		  };


		  /*
		    Method to check if propery exists in callbacksMap or tweenOptionMap.
		    @param {String} Property name to check for
		    @returns {Boolean} If property is tween property.
		   */

		  Helpers.prototype.isTweenProp = function(keyName) {
		    return this.tweenOptionMap[keyName] || this.callbacksMap[keyName];
		  };


		  /*
		    Method to parse string property value
		    which can include both `rand` and `stagger `
		    value in various positions.
		    @param {String} Property name to check for.
		    @param {Number} Optional index for stagger.
		    @returns {Number} Parsed option value.
		   */

		  Helpers.prototype.parseStringOption = function(value, index) {
		    if (index == null) {
		      index = 0;
		    }
		    if (typeof value === 'string') {
		      value = this.parseIfStagger(value, index);
		      value = this.parseIfRand(value);
		    }
		    return value;
		  };


		  /*
		    Method to get the last item of array.
		    @private
		    @param {Array} Array to get the last item in.
		    @returns {Any} The last item of array.
		   */

		  Helpers.prototype.getLastItem = function(arr) {
		    return arr[arr.length - 1];
		  };


		  /*
		    Method parse HTMLElement.
		    @private
		    @param {String, Object} Selector string or HTMLElement.
		    @returns {Object} HTMLElement.
		   */

		  Helpers.prototype.parseEl = function(el) {
		    if (h.isDOM(el)) {
		      return el;
		    } else if (typeof el === 'string') {
		      el = document.querySelector(el);
		    }
		    if (el === null) {
		      h.error("Can't parse HTML element: ", el);
		    }
		    return el;
		  };


		  /*
		    Method force compositor layer on HTMLElement.
		    @private
		    @param {Object} HTMLElement.
		    @returns {Object} HTMLElement.
		   */

		  Helpers.prototype.force3d = function(el) {
		    this.setPrefixedStyle(el, 'backface-visibility', 'hidden');
		    return el;
		  };

		  return Helpers;

		})();

		h = new Helpers;

		module.exports = h;


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var Bit, BitsMap, Circle, Cross, Curve, Custom, Equal, Line, Polygon, Rect, Zigzag, h;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Custom = __webpack_require__(35)["default"] || __webpack_require__(35);

		Circle = __webpack_require__(36);

		Line = __webpack_require__(37);

		Zigzag = __webpack_require__(38);

		Rect = __webpack_require__(34);

		Polygon = __webpack_require__(39);

		Cross = __webpack_require__(40);

		Curve = __webpack_require__(41)["default"] || __webpack_require__(41);

		Equal = __webpack_require__(42);

		h = __webpack_require__(19);

		BitsMap = (function() {
		  function BitsMap() {
		    this.addShape = h.bind(this.addShape, this);
		  }

		  BitsMap.prototype.bit = Bit;

		  BitsMap.prototype.custom = Custom;

		  BitsMap.prototype.circle = Circle;

		  BitsMap.prototype.line = Line;

		  BitsMap.prototype.zigzag = Zigzag;

		  BitsMap.prototype.rect = Rect;

		  BitsMap.prototype.polygon = Polygon;

		  BitsMap.prototype.cross = Cross;

		  BitsMap.prototype.equal = Equal;

		  BitsMap.prototype.curve = Curve;

		  BitsMap.prototype.getShape = function(name) {
		    return this[name] || h.error("no \"" + name + "\" shape available yet, please choose from this list:", ['circle', 'line', 'zigzag', 'rect', 'polygon', 'cross', 'equal', 'curve']);
		  };


		  /*
		    Method to add shape to the map.
		    @public
		    @param {String} Name of the shape module.
		    @param {Object} Shape module class.
		   */

		  BitsMap.prototype.addShape = function(name, Module) {
		    return this[name] = Module;
		  };

		  return BitsMap;

		})();

		module.exports = new BitsMap;


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var MotionPath, Timeline, Tween, h, resize,
		  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

		h = __webpack_require__(19);

		resize = __webpack_require__(43);

		Tween = __webpack_require__(8)["default"];

		Timeline = __webpack_require__(9)["default"];

		MotionPath = (function() {
		  MotionPath.prototype.defaults = {
		    path: null,
		    curvature: {
		      x: '75%',
		      y: '50%'
		    },
		    isCompositeLayer: true,
		    delay: 0,
		    duration: 1000,
		    easing: null,
		    repeat: 0,
		    yoyo: false,
		    onStart: null,
		    onComplete: null,
		    onUpdate: null,
		    offsetX: 0,
		    offsetY: 0,
		    angleOffset: null,
		    pathStart: 0,
		    pathEnd: 1,
		    motionBlur: 0,
		    transformOrigin: null,
		    isAngle: false,
		    isReverse: false,
		    isRunLess: false,
		    isPresetPosition: true
		  };

		  function MotionPath(o1) {
		    this.o = o1 != null ? o1 : {};
		    this.calcHeight = bind(this.calcHeight, this);
		    if (this.vars()) {
		      return;
		    }
		    this.createTween();
		    this;
		  }

		  MotionPath.prototype.vars = function() {
		    this.getScaler = h.bind(this.getScaler, this);
		    this.resize = resize;
		    this.props = h.cloneObj(this.defaults);
		    this.extendOptions(this.o);
		    this.isMotionBlurReset = h.isSafari || h.isIE;
		    this.isMotionBlurReset && (this.props.motionBlur = 0);
		    this.history = [h.cloneObj(this.props)];
		    return this.postVars();
		  };

		  MotionPath.prototype.curveToPath = function(o) {
		    var angle, curvature, curvatureX, curvatureY, curvePoint, curveXPoint, dX, dY, endPoint, path, percent, radius, start;
		    path = document.createElementNS(h.NS, 'path');
		    start = o.start;
		    endPoint = {
		      x: start.x + o.shift.x,
		      y: start.x + o.shift.y
		    };
		    curvature = o.curvature;
		    dX = o.shift.x;
		    dY = o.shift.y;
		    radius = Math.sqrt(dX * dX + dY * dY);
		    percent = radius / 100;
		    angle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
		    if (o.shift.x < 0) {
		      angle = angle + 180;
		    }
		    curvatureX = h.parseUnit(curvature.x);
		    curvatureX = curvatureX.unit === '%' ? curvatureX.value * percent : curvatureX.value;
		    curveXPoint = h.getRadialPoint({
		      center: {
		        x: start.x,
		        y: start.y
		      },
		      radius: curvatureX,
		      angle: angle
		    });
		    curvatureY = h.parseUnit(curvature.y);
		    curvatureY = curvatureY.unit === '%' ? curvatureY.value * percent : curvatureY.value;
		    curvePoint = h.getRadialPoint({
		      center: {
		        x: curveXPoint.x,
		        y: curveXPoint.y
		      },
		      radius: curvatureY,
		      angle: angle + 90
		    });
		    path.setAttribute('d', "M" + start.x + "," + start.y + " Q" + curvePoint.x + "," + curvePoint.y + " " + endPoint.x + "," + endPoint.y);
		    return path;
		  };

		  MotionPath.prototype.postVars = function() {
		    this.props.pathStart = h.clamp(this.props.pathStart, 0, 1);
		    this.props.pathEnd = h.clamp(this.props.pathEnd, this.props.pathStart, 1);
		    this.angle = 0;
		    this.speedX = 0;
		    this.speedY = 0;
		    this.blurX = 0;
		    this.blurY = 0;
		    this.prevCoords = {};
		    this.blurAmount = 20;
		    this.props.motionBlur = h.clamp(this.props.motionBlur, 0, 1);
		    this.onUpdate = this.props.onUpdate;
		    if (!this.o.el) {
		      h.error('Missed "el" option. It could be a selector, DOMNode or another module.');
		      return true;
		    }
		    this.el = this.parseEl(this.props.el);
		    this.props.motionBlur > 0 && this.createFilter();
		    this.path = this.getPath();
		    if (!this.path.getAttribute('d')) {
		      h.error('Path has no coordinates to work with, aborting');
		      return true;
		    }
		    this.len = this.path.getTotalLength();
		    this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart);
		    this.startLen = this.props.pathStart * this.len;
		    this.fill = this.props.fill;
		    if (this.fill != null) {
		      this.container = this.parseEl(this.props.fill.container);
		      this.fillRule = this.props.fill.fillRule || 'all';
		      this.getScaler();
		      if (this.container != null) {
		        this.removeEvent(this.container, 'onresize', this.getScaler);
		        return this.addEvent(this.container, 'onresize', this.getScaler);
		      }
		    }
		  };

		  MotionPath.prototype.addEvent = function(el, type, handler) {
		    return el.addEventListener(type, handler, false);
		  };

		  MotionPath.prototype.removeEvent = function(el, type, handler) {
		    return el.removeEventListener(type, handler, false);
		  };

		  MotionPath.prototype.createFilter = function() {
		    var div, svg;
		    div = document.createElement('div');
		    this.filterID = "filter-" + (h.getUniqID());
		    div.innerHTML = "<svg id=\"svg-" + this.filterID + "\"\n    style=\"visibility:hidden; width:0px; height:0px\">\n  <filter id=\"" + this.filterID + "\" y=\"-20\" x=\"-20\" width=\"40\" height=\"40\">\n    <feOffset\n      id=\"blur-offset\" in=\"SourceGraphic\"\n      dx=\"0\" dy=\"0\" result=\"offset2\"></feOffset>\n    <feGaussianblur\n      id=\"blur\" in=\"offset2\"\n      stdDeviation=\"0,0\" result=\"blur2\"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n      <feMergeNode in=\"blur2\"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>";
		    svg = div.querySelector("#svg-" + this.filterID);
		    this.filter = svg.querySelector('#blur');
		    this.filterOffset = svg.querySelector('#blur-offset');
		    document.body.insertBefore(svg, document.body.firstChild);
		    this.el.style['filter'] = "url(#" + this.filterID + ")";
		    return this.el.style[h.prefix.css + "filter"] = "url(#" + this.filterID + ")";
		  };

		  MotionPath.prototype.parseEl = function(el) {
		    if (typeof el === 'string') {
		      return document.querySelector(el);
		    }
		    if (el instanceof HTMLElement) {
		      return el;
		    }
		    if (el._setProp != null) {
		      this.isModule = true;
		      return el;
		    }
		  };

		  MotionPath.prototype.getPath = function() {
		    var path;
		    path = h.parsePath(this.props.path);
		    if (path) {
		      return path;
		    }
		    if (this.props.path.x || this.props.path.y) {
		      return this.curveToPath({
		        start: {
		          x: 0,
		          y: 0
		        },
		        shift: {
		          x: this.props.path.x || 0,
		          y: this.props.path.y || 0
		        },
		        curvature: {
		          x: this.props.curvature.x || this.defaults.curvature.x,
		          y: this.props.curvature.y || this.defaults.curvature.y
		        }
		      });
		    }
		  };

		  MotionPath.prototype.getScaler = function() {
		    var end, size, start;
		    this.cSize = {
		      width: this.container.offsetWidth || 0,
		      height: this.container.offsetHeight || 0
		    };
		    start = this.path.getPointAtLength(0);
		    end = this.path.getPointAtLength(this.len);
		    size = {};
		    this.scaler = {};
		    size.width = end.x >= start.x ? end.x - start.x : start.x - end.x;
		    size.height = end.y >= start.y ? end.y - start.y : start.y - end.y;
		    switch (this.fillRule) {
		      case 'all':
		        this.calcWidth(size);
		        return this.calcHeight(size);
		      case 'width':
		        this.calcWidth(size);
		        return this.scaler.y = this.scaler.x;
		      case 'height':
		        this.calcHeight(size);
		        return this.scaler.x = this.scaler.y;
		    }
		  };

		  MotionPath.prototype.calcWidth = function(size) {
		    this.scaler.x = this.cSize.width / size.width;
		    return !isFinite(this.scaler.x) && (this.scaler.x = 1);
		  };

		  MotionPath.prototype.calcHeight = function(size) {
		    this.scaler.y = this.cSize.height / size.height;
		    return !isFinite(this.scaler.y) && (this.scaler.y = 1);
		  };

		  MotionPath.prototype.run = function(o) {
		    var fistItem, key, value;
		    if (o) {
		      fistItem = this.history[0];
		      for (key in o) {
		        value = o[key];
		        if (h.callbacksMap[key] || h.tweenOptionMap[key]) {
		          h.warn("the property \"" + key + "\" property can not be overridden on run yet");
		          delete o[key];
		        } else {
		          this.history[0][key] = value;
		        }
		      }
		      this.tuneOptions(o);
		    }
		    return this.startTween();
		  };

		  MotionPath.prototype.createTween = function() {
		    this.tween = new Tween({
		      duration: this.props.duration,
		      delay: this.props.delay,
		      yoyo: this.props.yoyo,
		      repeat: this.props.repeat,
		      easing: this.props.easing,
		      onStart: (function(_this) {
		        return function() {
		          var ref;
		          return (ref = _this.props.onStart) != null ? ref.apply(_this) : void 0;
		        };
		      })(this),
		      onComplete: (function(_this) {
		        return function() {
		          var ref;
		          _this.props.motionBlur && _this.setBlur({
		            blur: {
		              x: 0,
		              y: 0
		            },
		            offset: {
		              x: 0,
		              y: 0
		            }
		          });
		          return (ref = _this.props.onComplete) != null ? ref.apply(_this) : void 0;
		        };
		      })(this),
		      onUpdate: (function(_this) {
		        return function(p) {
		          return _this.setProgress(p);
		        };
		      })(this),
		      onFirstUpdate: (function(_this) {
		        return function(isForward, isYoyo) {
		          if (!isForward) {
		            return _this.history.length > 1 && _this.tuneOptions(_this.history[0]);
		          }
		        };
		      })(this)
		    });
		    this.timeline = new Timeline;
		    this.timeline.add(this.tween);
		    !this.props.isRunLess && this.startTween();
		    return this.props.isPresetPosition && this.setProgress(0, true);
		  };

		  MotionPath.prototype.startTween = function() {
		    return setTimeout(((function(_this) {
		      return function() {
		        var ref;
		        return (ref = _this.timeline) != null ? ref.play() : void 0;
		      };
		    })(this)), 1);
		  };

		  MotionPath.prototype.setProgress = function(p, isInit) {
		    var len, point, x, y;
		    len = this.startLen + (!this.props.isReverse ? p * this.slicedLen : (1 - p) * this.slicedLen);
		    point = this.path.getPointAtLength(len);
		    x = point.x + this.props.offsetX;
		    y = point.y + this.props.offsetY;
		    this._getCurrentAngle(point, len, p);
		    this._setTransformOrigin(p);
		    this._setTransform(x, y, p, isInit);
		    return this.props.motionBlur && this.makeMotionBlur(x, y);
		  };

		  MotionPath.prototype.setElPosition = function(x, y, p) {
		    var composite, isComposite, rotate, transform;
		    rotate = this.angle !== 0 ? "rotate(" + this.angle + "deg)" : '';
		    isComposite = this.props.isCompositeLayer && h.is3d;
		    composite = isComposite ? 'translateZ(0)' : '';
		    transform = "translate(" + x + "px," + y + "px) " + rotate + " " + composite;
		    return h.setPrefixedStyle(this.el, 'transform', transform);
		  };

		  MotionPath.prototype.setModulePosition = function(x, y) {
		    this.el._setProp({
		      shiftX: x + "px",
		      shiftY: y + "px",
		      angle: this.angle
		    });
		    return this.el._draw();
		  };

		  MotionPath.prototype._getCurrentAngle = function(point, len, p) {
		    var atan, isTransformFunOrigin, prevPoint, x1, x2;
		    isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
		    if (this.props.isAngle || (this.props.angleOffset != null) || isTransformFunOrigin) {
		      prevPoint = this.path.getPointAtLength(len - 1);
		      x1 = point.y - prevPoint.y;
		      x2 = point.x - prevPoint.x;
		      atan = Math.atan(x1 / x2);
		      !isFinite(atan) && (atan = 0);
		      this.angle = atan * h.RAD_TO_DEG;
		      if ((typeof this.props.angleOffset) !== 'function') {
		        return this.angle += this.props.angleOffset || 0;
		      } else {
		        return this.angle = this.props.angleOffset.call(this, this.angle, p);
		      }
		    } else {
		      return this.angle = 0;
		    }
		  };

		  MotionPath.prototype._setTransform = function(x, y, p, isInit) {
		    var transform;
		    if (this.scaler) {
		      x *= this.scaler.x;
		      y *= this.scaler.y;
		    }
		    transform = null;
		    if (!isInit) {
		      transform = typeof this.onUpdate === "function" ? this.onUpdate(p, {
		        x: x,
		        y: y,
		        angle: this.angle
		      }) : void 0;
		    }
		    if (this.isModule) {
		      return this.setModulePosition(x, y);
		    } else {
		      if (typeof transform !== 'string') {
		        return this.setElPosition(x, y, p);
		      } else {
		        return h.setPrefixedStyle(this.el, 'transform', transform);
		      }
		    }
		  };

		  MotionPath.prototype._setTransformOrigin = function(p) {
		    var isTransformFunOrigin, tOrigin;
		    if (this.props.transformOrigin) {
		      isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
		      tOrigin = !isTransformFunOrigin ? this.props.transformOrigin : this.props.transformOrigin(this.angle, p);
		      return h.setPrefixedStyle(this.el, 'transform-origin', tOrigin);
		    }
		  };

		  MotionPath.prototype.makeMotionBlur = function(x, y) {
		    var absoluteAngle, coords, dX, dY, signX, signY, tailAngle;
		    tailAngle = 0;
		    signX = 1;
		    signY = 1;
		    if ((this.prevCoords.x == null) || (this.prevCoords.y == null)) {
		      this.speedX = 0;
		      this.speedY = 0;
		    } else {
		      dX = x - this.prevCoords.x;
		      dY = y - this.prevCoords.y;
		      if (dX > 0) {
		        signX = -1;
		      }
		      if (signX < 0) {
		        signY = -1;
		      }
		      this.speedX = Math.abs(dX);
		      this.speedY = Math.abs(dY);
		      tailAngle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
		    }
		    absoluteAngle = tailAngle - this.angle;
		    coords = this.angToCoords(absoluteAngle);
		    this.blurX = h.clamp((this.speedX / 16) * this.props.motionBlur, 0, 1);
		    this.blurY = h.clamp((this.speedY / 16) * this.props.motionBlur, 0, 1);
		    this.setBlur({
		      blur: {
		        x: 3 * this.blurX * this.blurAmount * Math.abs(coords.x),
		        y: 3 * this.blurY * this.blurAmount * Math.abs(coords.y)
		      },
		      offset: {
		        x: 3 * signX * this.blurX * coords.x * this.blurAmount,
		        y: 3 * signY * this.blurY * coords.y * this.blurAmount
		      }
		    });
		    this.prevCoords.x = x;
		    return this.prevCoords.y = y;
		  };

		  MotionPath.prototype.setBlur = function(o) {
		    if (!this.isMotionBlurReset) {
		      this.filter.setAttribute('stdDeviation', o.blur.x + "," + o.blur.y);
		      this.filterOffset.setAttribute('dx', o.offset.x);
		      return this.filterOffset.setAttribute('dy', o.offset.y);
		    }
		  };

		  MotionPath.prototype.extendDefaults = function(o) {
		    var key, results, value;
		    results = [];
		    for (key in o) {
		      value = o[key];
		      results.push(this[key] = value);
		    }
		    return results;
		  };

		  MotionPath.prototype.extendOptions = function(o) {
		    var key, results, value;
		    results = [];
		    for (key in o) {
		      value = o[key];
		      results.push(this.props[key] = value);
		    }
		    return results;
		  };

		  MotionPath.prototype.then = function(o) {
		    var it, key, opts, prevOptions, value;
		    prevOptions = this.history[this.history.length - 1];
		    opts = {};
		    for (key in prevOptions) {
		      value = prevOptions[key];
		      if (!h.callbacksMap[key] && !h.tweenOptionMap[key] || key === 'duration') {
		        if (o[key] == null) {
		          o[key] = value;
		        }
		      } else {
		        if (o[key] == null) {
		          o[key] = void 0;
		        }
		      }
		      if (h.tweenOptionMap[key]) {
		        opts[key] = key !== 'duration' ? o[key] : o[key] != null ? o[key] : prevOptions[key];
		      }
		    }
		    this.history.push(o);
		    it = this;
		    opts.onUpdate = (function(_this) {
		      return function(p) {
		        return _this.setProgress(p);
		      };
		    })(this);
		    opts.onStart = (function(_this) {
		      return function() {
		        var ref;
		        return (ref = _this.props.onStart) != null ? ref.apply(_this) : void 0;
		      };
		    })(this);
		    opts.onComplete = (function(_this) {
		      return function() {
		        var ref;
		        return (ref = _this.props.onComplete) != null ? ref.apply(_this) : void 0;
		      };
		    })(this);
		    opts.onFirstUpdate = function() {
		      return it.tuneOptions(it.history[this.index]);
		    };
		    opts.isChained = !o.delay;
		    this.timeline.append(new Tween(opts));
		    return this;
		  };

		  MotionPath.prototype.tuneOptions = function(o) {
		    this.extendOptions(o);
		    return this.postVars();
		  };

		  MotionPath.prototype.angToCoords = function(angle) {
		    var radAngle, x, y;
		    angle = angle % 360;
		    radAngle = ((angle - 90) * Math.PI) / 180;
		    x = Math.cos(radAngle);
		    y = Math.sin(radAngle);
		    x = x < 0 ? Math.max(x, -0.7) : Math.min(x, .7);
		    y = y < 0 ? Math.max(y, -0.7) : Math.min(y, .7);
		    return {
		      x: x * 1.428571429,
		      y: y * 1.428571429
		    };
		  };

		  return MotionPath;

		})();

		module.exports = MotionPath;


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var Easing, PI, PathEasing, approximate, bezier, easing, h, mix, sin;

		bezier = __webpack_require__(44);

		PathEasing = __webpack_require__(45);

		mix = __webpack_require__(46);

		h = __webpack_require__(19);

		approximate = __webpack_require__(47)["default"] || __webpack_require__(47);

		sin = Math.sin;

		PI = Math.PI;

		Easing = (function() {
		  function Easing() {}

		  Easing.prototype.bezier = bezier;

		  Easing.prototype.PathEasing = PathEasing;

		  Easing.prototype.path = (new PathEasing('creator')).create;

		  Easing.prototype.approximate = approximate;

		  Easing.prototype.inverse = function(p) {
		    return 1 - p;
		  };

		  Easing.prototype.linear = {
		    none: function(k) {
		      return k;
		    }
		  };

		  Easing.prototype.ease = {
		    "in": bezier.apply(Easing, [0.42, 0, 1, 1]),
		    out: bezier.apply(Easing, [0, 0, 0.58, 1]),
		    inout: bezier.apply(Easing, [0.42, 0, 0.58, 1])
		  };

		  Easing.prototype.sin = {
		    "in": function(k) {
		      return 1 - Math.cos(k * PI / 2);
		    },
		    out: function(k) {
		      return sin(k * PI / 2);
		    },
		    inout: function(k) {
		      return 0.5 * (1 - Math.cos(PI * k));
		    }
		  };

		  Easing.prototype.quad = {
		    "in": function(k) {
		      return k * k;
		    },
		    out: function(k) {
		      return k * (2 - k);
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k;
		      }
		      return -0.5 * (--k * (k - 2) - 1);
		    }
		  };

		  Easing.prototype.cubic = {
		    "in": function(k) {
		      return k * k * k;
		    },
		    out: function(k) {
		      return --k * k * k + 1;
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k * k;
		      }
		      return 0.5 * ((k -= 2) * k * k + 2);
		    }
		  };

		  Easing.prototype.quart = {
		    "in": function(k) {
		      return k * k * k * k;
		    },
		    out: function(k) {
		      return 1 - (--k * k * k * k);
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k * k * k;
		      }
		      return -0.5 * ((k -= 2) * k * k * k - 2);
		    }
		  };

		  Easing.prototype.quint = {
		    "in": function(k) {
		      return k * k * k * k * k;
		    },
		    out: function(k) {
		      return --k * k * k * k * k + 1;
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k * k * k * k;
		      }
		      return 0.5 * ((k -= 2) * k * k * k * k + 2);
		    }
		  };

		  Easing.prototype.expo = {
		    "in": function(k) {
		      if (k === 0) {
		        return 0;
		      } else {
		        return Math.pow(1024, k - 1);
		      }
		    },
		    out: function(k) {
		      if (k === 1) {
		        return 1;
		      } else {
		        return 1 - Math.pow(2, -10 * k);
		      }
		    },
		    inout: function(k) {
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      if ((k *= 2) < 1) {
		        return 0.5 * Math.pow(1024, k - 1);
		      }
		      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
		    }
		  };

		  Easing.prototype.circ = {
		    "in": function(k) {
		      return 1 - Math.sqrt(1 - k * k);
		    },
		    out: function(k) {
		      return Math.sqrt(1 - (--k * k));
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return -0.5 * (Math.sqrt(1 - k * k) - 1);
		      }
		      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
		    }
		  };

		  Easing.prototype.back = {
		    "in": function(k) {
		      var s;
		      s = 1.70158;
		      return k * k * ((s + 1) * k - s);
		    },
		    out: function(k) {
		      var s;
		      s = 1.70158;
		      return --k * k * ((s + 1) * k + s) + 1;
		    },
		    inout: function(k) {
		      var s;
		      s = 1.70158 * 1.525;
		      if ((k *= 2) < 1) {
		        return 0.5 * (k * k * ((s + 1) * k - s));
		      }
		      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
		    }
		  };

		  Easing.prototype.elastic = {
		    "in": function(k) {
		      var a, p, s;
		      s = void 0;
		      p = 0.4;
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      a = 1;
		      s = p / 4;
		      return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		    },
		    out: function(k) {
		      var a, p, s;
		      s = void 0;
		      p = 0.4;
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      a = 1;
		      s = p / 4;
		      return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
		    },
		    inout: function(k) {
		      var a, p, s;
		      s = void 0;
		      p = 0.4;
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      a = 1;
		      s = p / 4;
		      if ((k *= 2) < 1) {
		        return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		      }
		      return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
		    }
		  };

		  Easing.prototype.bounce = {
		    "in": function(k) {
		      return 1 - easing.bounce.out(1 - k);
		    },
		    out: function(k) {
		      if (k < (1 / 2.75)) {
		        return 7.5625 * k * k;
		      } else if (k < (2 / 2.75)) {
		        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
		      } else if (k < (2.5 / 2.75)) {
		        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
		      } else {
		        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
		      }
		    },
		    inout: function(k) {
		      if (k < 0.5) {
		        return easing.bounce["in"](k * 2) * 0.5;
		      }
		      return easing.bounce.out(k * 2 - 1) * 0.5 + 0.5;
		    }
		  };

		  Easing.prototype.parseEasing = function(easing) {
		    var easingParent, type;
		    if (easing == null) {
		      easing = 'linear.none';
		    }
		    type = typeof easing;
		    if (type === 'string') {
		      if (easing.charAt(0).toLowerCase() === 'm') {
		        return this.path(easing);
		      } else {
		        easing = this._splitEasing(easing);
		        easingParent = this[easing[0]];
		        if (!easingParent) {
		          h.error("Easing with name \"" + easing[0] + "\" was not found, fallback to \"linear.none\" instead");
		          return this['linear']['none'];
		        }
		        return easingParent[easing[1]];
		      }
		    }
		    if (h.isArray(easing)) {
		      return this.bezier.apply(this, easing);
		    }
		    if ('function') {
		      return easing;
		    }
		  };

		  Easing.prototype._splitEasing = function(string) {
		    var firstPart, secondPart, split;
		    if (typeof string === 'function') {
		      return string;
		    }
		    if (typeof string === 'string' && string.length) {
		      split = string.split('.');
		      firstPart = split[0].toLowerCase() || 'linear';
		      secondPart = split[1].toLowerCase() || 'none';
		      return [firstPart, secondPart];
		    } else {
		      return ['linear', 'none'];
		    }
		  };

		  return Easing;

		})();

		easing = new Easing;

		easing.mix = mix(easing);

		module.exports = easing;


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
		};

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _setPrototypeOf = __webpack_require__(48);

		var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

		var _create = __webpack_require__(49);

		var _create2 = _interopRequireDefault(_create);

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
		  }

		  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
		};

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Bit = function (_Module) {
		  (0, _inherits3.default)(Bit, _Module);

		  function Bit() {
		    (0, _classCallCheck3.default)(this, Bit);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		  */

		  Bit.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      'ns': 'http://www.w3.org/2000/svg',
		      'tag': 'ellipse',
		      'parent': document.body,
		      'ratio': 1,
		      'radius': 50,
		      'radiusX': null,
		      'radiusY': null,
		      'stroke': 'hotpink',
		      'stroke-dasharray': '',
		      'stroke-dashoffset': '',
		      'stroke-linecap': '',
		      'stroke-width': 2,
		      'stroke-opacity': 1,
		      'fill': 'transparent',
		      'fill-opacity': 1,
		      'width': 0,
		      'height': 0
		    };
		    this._drawMap = ['stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'fill', 'stroke-dashoffset', 'stroke-linecap', 'fill-opacity', 'transform'];
		  };

		  Bit.prototype._vars = function _vars() {
		    this._state = {};
		    this._drawMapLength = this._drawMap.length;
		  };
		  /*
		    Method for initial render of the shape.
		    @private
		  */


		  Bit.prototype._render = function _render() {
		    if (this._isRendered) {
		      return;
		    }
		    // set `_isRendered` hatch
		    this._isRendered = true;
		    // create `SVG` canvas to draw in
		    this._createSVGCanvas();
		    // set canvas size
		    this._setCanvasSize();
		    // draw the initial state
		    // this._draw();
		    // append the canvas to the parent from props
		    this._props.parent.appendChild(this._canvas);
		  };
		  /*
		    Method to create `SVG` canvas to draw in.
		    @private
		  */


		  Bit.prototype._createSVGCanvas = function _createSVGCanvas() {
		    var p = this._props;
		    // create canvas - `svg` element to draw in
		    this._canvas = document.createElementNS(p.ns, 'svg');
		    // create the element shape element and add it to the canvas
		    this.el = document.createElementNS(p.ns, p.tag);
		    this._canvas.appendChild(this.el);
		  };
		  /*
		    Method to set size of the _canvas.
		    @private
		  */


		  Bit.prototype._setCanvasSize = function _setCanvasSize() {
		    var p = this._props,
		        style = this._canvas.style;

		    style.display = 'block';
		    style.width = '100%';
		    style.height = '100%';
		    style.left = '0px';
		    style.top = '0px';
		  };
		  /*
		    Method to draw the shape.
		    Called on every frame.
		    @private
		  */


		  Bit.prototype._draw = function _draw() {
		    this._props.length = this._getLength();

		    var state = this._state,
		        props = this._props;

		    var len = this._drawMapLength;
		    while (len--) {
		      var name = this._drawMap[len];
		      switch (name) {
		        case 'stroke-dasharray':
		        case 'stroke-dashoffset':
		          this.castStrokeDash(name);
		      }
		      this._setAttrIfChanged(name, this._props[name]);
		    }
		    this._state.radius = this._props.radius;
		  };

		  Bit.prototype.castStrokeDash = function castStrokeDash(name) {
		    // # if array of values
		    var p = this._props;
		    if (_h2.default.isArray(p[name])) {
		      var stroke = '';
		      for (var i = 0; i < p[name].length; i++) {
		        var dash = p[name][i],
		            cast = dash.unit === '%' ? this.castPercent(dash.value) : dash.value;
		        stroke += cast + ' ';
		      }
		      p[name] = stroke === '0 ' ? stroke = '' : stroke;
		      return p[name] = stroke;
		    }
		    // # if single value
		    if ((0, _typeof3.default)(p[name]) === 'object') {
		      stroke = p[name].unit === '%' ? this.castPercent(p[name].value) : p[name].value;
		      p[name] = stroke === 0 ? stroke = '' : stroke;
		    }
		  };

		  Bit.prototype.castPercent = function castPercent(percent) {
		    return percent * (this._props.length / 100);
		  };

		  /*
		    Method to set props to attributes and cache the values.
		    @private
		  */


		  Bit.prototype._setAttrIfChanged = function _setAttrIfChanged(name, value) {
		    if (this._state[name] !== value) {
		      // this.el.style[name] = value;
		      this.el.setAttribute(name, value);
		      this._state[name] = value;
		    }
		  };
		  /*
		    Method to length of the shape.
		    @private
		    @returns {Number} Length of the shape.
		  */


		  Bit.prototype._getLength = function _getLength() {
		    var p = this._props,
		        len = 0,
		        isGetLength = !!(this.el && this.el.getTotalLength);

		    if (isGetLength && this.el.getAttribute('d')) {
		      len = this.el.getTotalLength();
		    } else {
		      len = 2 * (p.radiusX != null ? p.radiusX : p.radius);
		    }
		    return len;
		  };
		  /*
		    Method to calculate total sum between points.
		    @private
		    @param {Array} Array of points.
		    @returns {Number} Distance bewtween all points.
		  */


		  Bit.prototype._getPointsPerimiter = function _getPointsPerimiter(points) {
		    var sum = 0;

		    for (var i = 1; i < points.length; i++) {
		      sum += this._pointsDelta(points[i - 1], points[i]);
		    }

		    sum += this._pointsDelta(points[0], _h2.default.getLastItem(points));
		    return sum;
		  };
		  /*
		    Method to get delta from two points.
		    @private
		    @param {Object} Point 1.
		    @param {Object} Point 2.
		    @returns {Number} Distance between the pooints.
		  */


		  Bit.prototype._pointsDelta = function _pointsDelta(point1, point2) {
		    var dx = Math.abs(point1.x - point2.x),
		        dy = Math.abs(point1.y - point2.y);
		    return Math.sqrt(dx * dx + dy * dy);
		  };
		  /*
		    Method to set module's size.
		    @private
		    @param {Number} Module width.
		    @param {Number} Module height.
		  */


		  Bit.prototype._setSize = function _setSize(width, height) {
		    var p = this._props;
		    p.width = width;
		    p.height = height;
		    this._draw();
		  };

		  return Bit;
		}(_module2.default);

		exports.default = Bit;

	/***/ },
	/* 27 */,
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(52), __esModule: true };

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(51), __esModule: true };

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		(function() {
		  'use strict';
		  var cancel, i, isOldBrowser, lastTime, vendors, vp, w;
		  vendors = ['webkit', 'moz'];
		  i = 0;
		  w = window;
		  while (i < vendors.length && !w.requestAnimationFrame) {
		    vp = vendors[i];
		    w.requestAnimationFrame = w[vp + 'RequestAnimationFrame'];
		    cancel = w[vp + 'CancelAnimationFrame'];
		    w.cancelAnimationFrame = cancel || w[vp + 'CancelRequestAnimationFrame'];
		    ++i;
		  }
		  isOldBrowser = !w.requestAnimationFrame || !w.cancelAnimationFrame;
		  if (/iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent) || isOldBrowser) {
		    lastTime = 0;
		    w.requestAnimationFrame = function(callback) {
		      var nextTime, now;
		      now = Date.now();
		      nextTime = Math.max(lastTime + 16, now);
		      return setTimeout((function() {
		        callback(lastTime = nextTime);
		      }), nextTime - now);
		    };
		    w.cancelAnimationFrame = clearTimeout;
		  }
		})();


	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		(function(root) {
		  var offset, ref, ref1;
		  if (root.performance == null) {
		    root.performance = {};
		  }
		  Date.now = Date.now || function() {
		    return (new Date).getTime();
		  };
		  if (root.performance.now == null) {
		    offset = ((ref = root.performance) != null ? (ref1 = ref.timing) != null ? ref1.navigationStart : void 0 : void 0) ? performance.timing.navigationStart : Date.now();
		    return root.performance.now = function() {
		      return Date.now() - offset;
		    };
		  }
		})(window);


	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(1), __esModule: true };

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(54), __esModule: true };

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Rect,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Rect = (function(superClass) {
		  extend(Rect, superClass);

		  function Rect() {
		    return Rect.__super__.constructor.apply(this, arguments);
		  }

		  Rect.prototype._declareDefaults = function() {
		    Rect.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'rect';
		    this._defaults.rx = 0;
		    return this._defaults.ry = 0;
		  };

		  Rect.prototype._draw = function() {
		    var p, radiusX, radiusY;
		    Rect.__super__._draw.apply(this, arguments);
		    p = this._props;
		    radiusX = p.radiusX != null ? p.radiusX : p.radius;
		    radiusY = p.radiusY != null ? p.radiusY : p.radius;
		    this._setAttrIfChanged('width', 2 * radiusX);
		    this._setAttrIfChanged('height', 2 * radiusY);
		    this._setAttrIfChanged('x', (p.width / 2) - radiusX);
		    this._setAttrIfChanged('y', (p.height / 2) - radiusY);
		    this._setAttrIfChanged('rx', p.rx);
		    return this._setAttrIfChanged('ry', p.ry);
		  };

		  Rect.prototype._getLength = function() {
		    var radiusX, radiusY;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    return 2 * (2 * radiusX + 2 * radiusY);
		  };

		  return Rect;

		})(Bit);

		module.exports = Rect;


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _bit = __webpack_require__(26);

		var _bit2 = _interopRequireDefault(_bit);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Custom = function (_Bit) {
		  (0, _inherits3.default)(Custom, _Bit);

		  function Custom() {
		    (0, _classCallCheck3.default)(this, Custom);
		    return (0, _possibleConstructorReturn3.default)(this, _Bit.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		    @overrides @ Bit
		  */

		  Custom.prototype._declareDefaults = function _declareDefaults() {
		    _Bit.prototype._declareDefaults.call(this);

		    this._defaults.tag = 'path';
		    this._defaults.parent = null;

		    // remove `stroke-width` from `_drawMap`
		    // because we need to recal strokeWidth size regarding scale
		    for (var i = 0; i < this._drawMap.length; i++) {
		      if (this._drawMap[i] === 'stroke-width') {
		        this._drawMap.splice(i, 1);
		      }
		    }
		  };
		  /*
		    Method to get shape to set on module's path.
		    @public
		    @returns {String} Empty string.
		  */


		  Custom.prototype.getShape = function getShape() {
		    return '';
		  };
		  /*
		    Method to get shape perimeter length.
		    @public
		    @returns {Number} Default length string.
		  */


		  Custom.prototype.getLength = function getLength() {
		    return 100;
		  };
		  /*
		    Method to draw the shape.
		    Called on every frame.
		    @private
		    @overrides @ Bit
		  */


		  Custom.prototype._draw = function _draw() {
		    var p = this._props,
		        state = this._state,
		        radiusXChange = state['radiusX'] !== p.radiusX,
		        radiusYChange = state['radiusY'] !== p.radiusY,
		        radiusChange = state['radius'] !== p.radius;

		    // update transform only if one of radiuses changed
		    if (radiusXChange || radiusYChange || radiusChange) {
		      this.el.setAttribute('transform', this._getScale());
		      state['radiusX'] = p.radiusX;
		      state['radiusY'] = p.radiusY;
		      state['radius'] = p.radius;
		    }

		    this._setAttrIfChanged('stroke-width', p['stroke-width'] / p.maxScale);

		    _Bit.prototype._draw.call(this);
		  };
		  /*
		    Method for initial render of the shape.
		    @private
		    @overrides @ Bit
		  */


		  Custom.prototype._render = function _render() {
		    if (this._isRendered) {
		      return;
		    }
		    this._isRendered = true;

		    this._length = this.getLength();

		    var p = this._props;
		    p.parent.innerHTML = '<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">' + this.getShape() + '</g></svg>';

		    this._canvas = p.parent.querySelector('#js-mojs-shape-canvas');
		    this.el = p.parent.querySelector('#js-mojs-shape-el');
		    this._setCanvasSize();
		  };
		  /*
		    Method to get scales for the shape.
		    @private
		    @mutates @props
		  */


		  Custom.prototype._getScale = function _getScale() {
		    var p = this._props,
		        radiusX = p.radiusX ? p.radiusX : p.radius,
		        radiusY = p.radiusY ? p.radiusY : p.radius;

		    p.scaleX = 2 * radiusX / 100;
		    p.scaleY = 2 * radiusY / 100;
		    p.maxScale = Math.max(p.scaleX, p.scaleY);

		    p.shiftX = p.width / 2 - 50 * p.scaleX;
		    p.shiftY = p.height / 2 - 50 * p.scaleY;

		    var translate = 'translate(' + p.shiftX + ', ' + p.shiftY + ')';
		    return translate + ' scale(' + p.scaleX + ', ' + p.scaleY + ')';
		  };
		  /*
		    Method to length of the shape.
		    @private
		    @returns {Number} Length of the shape.
		  */


		  Custom.prototype._getLength = function _getLength() {
		    return this._length;
		  };

		  return Custom;
		}(_bit2.default);

		exports.default = Custom;

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Circle,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Circle = (function(superClass) {
		  extend(Circle, superClass);

		  function Circle() {
		    return Circle.__super__.constructor.apply(this, arguments);
		  }

		  Circle.prototype._declareDefaults = function() {
		    Circle.__super__._declareDefaults.apply(this, arguments);
		    return this._defaults.shape = 'ellipse';
		  };

		  Circle.prototype._draw = function() {
		    var rx, ry;
		    rx = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    ry = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    this._setAttrIfChanged('rx', rx);
		    this._setAttrIfChanged('ry', ry);
		    this._setAttrIfChanged('cx', this._props.width / 2);
		    this._setAttrIfChanged('cy', this._props.height / 2);
		    return Circle.__super__._draw.apply(this, arguments);
		  };

		  Circle.prototype._getLength = function() {
		    var radiusX, radiusY;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    return 2 * Math.PI * Math.sqrt((radiusX * radiusX + radiusY * radiusY) / 2);
		  };

		  return Circle;

		})(Bit);

		module.exports = Circle;


	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Line,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Line = (function(superClass) {
		  extend(Line, superClass);

		  function Line() {
		    return Line.__super__.constructor.apply(this, arguments);
		  }

		  Line.prototype._declareDefaults = function() {
		    Line.__super__._declareDefaults.apply(this, arguments);
		    return this._defaults.tag = 'line';
		  };

		  Line.prototype._draw = function() {
		    var radiusX, x, y;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    x = this._props.width / 2;
		    y = this._props.height / 2;
		    this._setAttrIfChanged('x1', x - radiusX);
		    this._setAttrIfChanged('x2', x + radiusX);
		    this._setAttrIfChanged('y1', y);
		    this._setAttrIfChanged('y2', y);
		    return Line.__super__._draw.apply(this, arguments);
		  };

		  return Line;

		})(Bit);

		module.exports = Line;


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Zigzag,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Zigzag = (function(superClass) {
		  extend(Zigzag, superClass);

		  function Zigzag() {
		    return Zigzag.__super__.constructor.apply(this, arguments);
		  }

		  Zigzag.prototype._declareDefaults = function() {
		    Zigzag.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'path';
		    return this._defaults.points = 3;
		  };

		  Zigzag.prototype._draw = function() {
		    var currentX, currentY, delta, i, isPoints, isRadiusX, isRadiusY, j, length, p, points, radiusX, radiusY, ref, stepX, x, y, yFlip;
		    Zigzag.__super__._draw.apply(this, arguments);
		    p = this._props;
		    if (!this._props.points) {
		      return;
		    }
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    isPoints = p.points === this._prevPoints;
		    if (isRadiusX && isRadiusY && isPoints) {
		      return;
		    }
		    x = p.width / 2;
		    y = p.height / 2;
		    currentX = x - radiusX;
		    currentY = y;
		    stepX = (2 * radiusX) / (p.points - 1);
		    yFlip = -1;
		    delta = Math.sqrt(stepX * stepX + radiusY * radiusY);
		    length = -delta;
		    points = "M" + currentX + ", " + y + " ";
		    for (i = j = 0, ref = p.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		      points += "L" + currentX + ", " + currentY + " ";
		      currentX += stepX;
		      length += delta;
		      currentY = yFlip === -1 ? y - radiusY : y;
		      yFlip = -yFlip;
		    }
		    this._length = length;
		    this.el.setAttribute('d', points);
		    this._prevPoints = p.points;
		    this._prevRadiusX = radiusX;
		    return this._prevRadiusY = radiusY;
		  };

		  Zigzag.prototype._getLength = function() {
		    return this._length;
		  };

		  return Zigzag;

		})(Bit);

		module.exports = Zigzag;


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Polygon, h,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		h = __webpack_require__(19);

		Polygon = (function(superClass) {
		  extend(Polygon, superClass);

		  function Polygon() {
		    return Polygon.__super__.constructor.apply(this, arguments);
		  }


		  /*
		    Method to declare defaults.
		    @overrides @ Bit
		   */

		  Polygon.prototype._declareDefaults = function() {
		    Polygon.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'path';
		    return this._defaults.points = 3;
		  };


		  /*
		    Method to draw the shape.
		    @overrides @ Bit
		   */

		  Polygon.prototype._draw = function() {
		    var char, d, i, isPoints, isRadiusX, isRadiusY, j, k, len, p, point, radiusX, radiusY, ref, ref1, step;
		    p = this._props;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    isPoints = p.points === this._prevPoints;
		    if (!(isRadiusX && isRadiusY && isPoints)) {
		      step = 360 / this._props.points;
		      if (this._radialPoints == null) {
		        this._radialPoints = [];
		      } else {
		        this._radialPoints.length = 0;
		      }
		      for (i = j = 0, ref = this._props.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		        this._radialPoints.push(h.getRadialPoint({
		          radius: this._props.radius,
		          radiusX: this._props.radiusX,
		          radiusY: this._props.radiusY,
		          angle: i * step,
		          center: {
		            x: p.width / 2,
		            y: p.height / 2
		          }
		        }));
		      }
		      d = '';
		      ref1 = this._radialPoints;
		      for (i = k = 0, len = ref1.length; k < len; i = ++k) {
		        point = ref1[i];
		        char = i === 0 ? 'M' : 'L';
		        d += "" + char + (point.x.toFixed(4)) + "," + (point.y.toFixed(4)) + " ";
		      }
		      this._prevPoints = p.points;
		      this._prevRadiusX = radiusX;
		      this._prevRadiusY = radiusY;
		      this.el.setAttribute('d', (d += 'z'));
		    }
		    return Polygon.__super__._draw.apply(this, arguments);
		  };


		  /*
		    Method to get length of the shape.
		    @overrides @ Bit
		   */

		  Polygon.prototype._getLength = function() {
		    return this._getPointsPerimiter(this._radialPoints);
		  };

		  return Polygon;

		})(Bit);

		module.exports = Polygon;


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Cross,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Cross = (function(superClass) {
		  extend(Cross, superClass);

		  function Cross() {
		    return Cross.__super__.constructor.apply(this, arguments);
		  }

		  Cross.prototype._declareDefaults = function() {
		    Cross.__super__._declareDefaults.apply(this, arguments);
		    return this._defaults.tag = 'path';
		  };

		  Cross.prototype._draw = function() {
		    var d, isRadiusX, isRadiusY, line1, line2, p, radiusX, radiusY, x, x1, x2, y, y1, y2;
		    Cross.__super__._draw.apply(this, arguments);
		    p = this._props;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    if (isRadiusX && isRadiusY) {
		      return;
		    }
		    x = this._props.width / 2;
		    y = this._props.height / 2;
		    x1 = x - radiusX;
		    x2 = x + radiusX;
		    line1 = "M" + x1 + "," + y + " L" + x2 + "," + y;
		    y1 = y - radiusY;
		    y2 = y + radiusY;
		    line2 = "M" + x + "," + y1 + " L" + x + "," + y2;
		    d = line1 + " " + line2;
		    this.el.setAttribute('d', d);
		    this._prevRadiusX = radiusX;
		    return this._prevRadiusY = radiusY;
		  };

		  Cross.prototype._getLength = function() {
		    var radiusX, radiusY;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    return 2 * (radiusX + radiusY);
		  };

		  return Cross;

		})(Bit);

		module.exports = Cross;


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _bit = __webpack_require__(26);

		var _bit2 = _interopRequireDefault(_bit);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Curve = function (_Bit) {
		  (0, _inherits3.default)(Curve, _Bit);

		  function Curve() {
		    (0, _classCallCheck3.default)(this, Curve);
		    return (0, _possibleConstructorReturn3.default)(this, _Bit.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		    @overrides @ Bit
		  */

		  Curve.prototype._declareDefaults = function _declareDefaults() {
		    _Bit.prototype._declareDefaults.call(this);
		    this._defaults.tag = 'path';
		  };
		  /*
		    Method to draw the module.
		    @private
		    @overrides @ Bit
		  */


		  Curve.prototype._draw = function _draw() {
		    _Bit.prototype._draw.call(this);
		    var p = this._props;

		    var radiusX = p.radiusX != null ? p.radiusX : p.radius;
		    var radiusY = p.radiusY != null ? p.radiusY : p.radius;

		    var isRadiusX = radiusX === this._prevRadiusX;
		    var isRadiusY = radiusY === this._prevRadiusY;
		    var isPoints = p.points === this._prevPoints;
		    // skip if nothing changed
		    if (isRadiusX && isRadiusY && isPoints) {
		      return;
		    }

		    var x = p.width / 2;
		    var y = p.height / 2;
		    var x1 = x - radiusX;
		    var x2 = x + radiusX;

		    var d = 'M' + x1 + ' ' + y + ' Q ' + x + ' ' + (y - 2 * radiusY) + ' ' + x2 + ' ' + y;

		    // set the `d` attribute and save it to `_prevD`
		    this.el.setAttribute('d', d);
		    // save the properties
		    this._prevPoints = p.points;
		    this._prevRadiusX = radiusX;
		    this._prevRadiusY = radiusY;
		  };

		  Curve.prototype._getLength = function _getLength() {
		    var p = this._props;

		    var radiusX = p.radiusX != null ? p.radiusX : p.radius;
		    var radiusY = p.radiusY != null ? p.radiusY : p.radius;

		    var dRadius = radiusX + radiusY;
		    var sqrt = Math.sqrt((3 * radiusX + radiusY) * (radiusX + 3 * radiusY));

		    return .5 * Math.PI * (3 * dRadius - sqrt);
		  };

		  return Curve;
		}(_bit2.default); // istanbul ignore next


		exports.default = Curve;

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {


		/* istanbul ignore next */
		var Bit, Equal,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Equal = (function(superClass) {
		  extend(Equal, superClass);

		  function Equal() {
		    return Equal.__super__.constructor.apply(this, arguments);
		  }

		  Equal.prototype._declareDefaults = function() {
		    Equal.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'path';
		    return this._defaults.points = 2;
		  };

		  Equal.prototype._draw = function() {
		    var d, i, isPoints, isRadiusX, isRadiusY, j, p, radiusX, radiusY, ref, x, x1, x2, y, yStart, yStep;
		    Equal.__super__._draw.apply(this, arguments);
		    p = this._props;
		    if (!this._props.points) {
		      return;
		    }
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    isPoints = p.points === this._prevPoints;
		    if (isRadiusX && isRadiusY && isPoints) {
		      return;
		    }
		    x = this._props.width / 2;
		    y = this._props.height / 2;
		    x1 = x - radiusX;
		    x2 = x + radiusX;
		    d = '';
		    yStep = 2 * radiusY / (this._props.points - 1);
		    yStart = y - radiusY;
		    for (i = j = 0, ref = this._props.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		      y = "" + (i * yStep + yStart);
		      d += "M" + x1 + ", " + y + " L" + x2 + ", " + y + " ";
		    }
		    this.el.setAttribute('d', d);
		    this._prevPoints = p.points;
		    this._prevRadiusX = radiusX;
		    return this._prevRadiusY = radiusY;
		  };

		  Equal.prototype._getLength = function() {
		    return 2 * (this._props.radiusX != null ? this._props.radiusX : this._props.radius);
		  };

		  return Equal;

		})(Bit);

		module.exports = Equal;


	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
		/*!
		  LegoMushroom @legomushroom http://legomushroom.com
		  MIT License 2014
		 */

		/* istanbul ignore next */
		(function() {
		  var Main;
		  Main = (function() {
		    function Main(o) {
		      this.o = o != null ? o : {};
		      if (window.isAnyResizeEventInited) {
		        return;
		      }
		      this.vars();
		      this.redefineProto();
		    }

		    Main.prototype.vars = function() {
		      window.isAnyResizeEventInited = true;
		      this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement];
		      return this.timerElements = {
		        img: 1,
		        textarea: 1,
		        input: 1,
		        embed: 1,
		        object: 1,
		        svg: 1,
		        canvas: 1,
		        tr: 1,
		        tbody: 1,
		        thead: 1,
		        tfoot: 1,
		        a: 1,
		        select: 1,
		        option: 1,
		        optgroup: 1,
		        dl: 1,
		        dt: 1,
		        br: 1,
		        basefont: 1,
		        font: 1,
		        col: 1,
		        iframe: 1
		      };
		    };

		    Main.prototype.redefineProto = function() {
		      var i, it, proto, t;
		      it = this;
		      return t = (function() {
		        var j, len, ref, results;
		        ref = this.allowedProtos;
		        results = [];
		        for (i = j = 0, len = ref.length; j < len; i = ++j) {
		          proto = ref[i];
		          if (proto.prototype == null) {
		            continue;
		          }
		          results.push((function(proto) {
		            var listener, remover;
		            listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
		            (function(listener) {
		              var wrappedListener;
		              wrappedListener = function() {
		                var option;
		                if (this !== window || this !== document) {
		                  option = arguments[0] === 'onresize' && !this.isAnyResizeEventInited;
		                  option && it.handleResize({
		                    args: arguments,
		                    that: this
		                  });
		                }
		                return listener.apply(this, arguments);
		              };
		              if (proto.prototype.addEventListener) {
		                return proto.prototype.addEventListener = wrappedListener;
		              } else if (proto.prototype.attachEvent) {
		                return proto.prototype.attachEvent = wrappedListener;
		              }
		            })(listener);
		            remover = proto.prototype.removeEventListener || proto.prototype.detachEvent;
		            return (function(remover) {
		              var wrappedRemover;
		              wrappedRemover = function() {
		                this.isAnyResizeEventInited = false;
		                this.iframe && this.removeChild(this.iframe);
		                return remover.apply(this, arguments);
		              };
		              if (proto.prototype.removeEventListener) {
		                return proto.prototype.removeEventListener = wrappedRemover;
		              } else if (proto.prototype.detachEvent) {
		                return proto.prototype.detachEvent = wrappedListener;
		              }
		            })(remover);
		          })(proto));
		        }
		        return results;
		      }).call(this);
		    };

		    Main.prototype.handleResize = function(args) {
		      var computedStyle, el, iframe, isEmpty, isNoPos, isStatic, ref;
		      el = args.that;
		      if (!this.timerElements[el.tagName.toLowerCase()]) {
		        iframe = document.createElement('iframe');
		        el.appendChild(iframe);
		        iframe.style.width = '100%';
		        iframe.style.height = '100%';
		        iframe.style.position = 'absolute';
		        iframe.style.zIndex = -999;
		        iframe.style.opacity = 0;
		        iframe.style.top = 0;
		        iframe.style.left = 0;
		        computedStyle = window.getComputedStyle ? getComputedStyle(el) : el.currentStyle;
		        isNoPos = el.style.position === '';
		        isStatic = computedStyle.position === 'static' && isNoPos;
		        isEmpty = computedStyle.position === '' && el.style.position === '';
		        if (isStatic || isEmpty) {
		          el.style.position = 'relative';
		        }
		        if ((ref = iframe.contentWindow) != null) {
		          ref.onresize = (function(_this) {
		            return function(e) {
		              return _this.dispatchEvent(el);
		            };
		          })(this);
		        }
		        el.iframe = iframe;
		      } else {
		        this.initTimer(el);
		      }
		      return el.isAnyResizeEventInited = true;
		    };

		    Main.prototype.initTimer = function(el) {
		      var height, width;
		      width = 0;
		      height = 0;
		      return this.interval = setInterval((function(_this) {
		        return function() {
		          var newHeight, newWidth;
		          newWidth = el.offsetWidth;
		          newHeight = el.offsetHeight;
		          if (newWidth !== width || newHeight !== height) {
		            _this.dispatchEvent(el);
		            width = newWidth;
		            return height = newHeight;
		          }
		        };
		      })(this), this.o.interval || 62.5);
		    };

		    Main.prototype.dispatchEvent = function(el) {
		      var e;
		      if (document.createEvent) {
		        e = document.createEvent('HTMLEvents');
		        e.initEvent('onresize', false, false);
		        return el.dispatchEvent(e);
		      } else if (document.createEventObject) {
		        e = document.createEventObject();
		        return el.fireEvent('onresize', e);
		      } else {
		        return false;
		      }
		    };

		    Main.prototype.destroy = function() {
		      var i, it, j, len, proto, ref, results;
		      clearInterval(this.interval);
		      this.interval = null;
		      window.isAnyResizeEventInited = false;
		      it = this;
		      ref = this.allowedProtos;
		      results = [];
		      for (i = j = 0, len = ref.length; j < len; i = ++j) {
		        proto = ref[i];
		        if (proto.prototype == null) {
		          continue;
		        }
		        results.push((function(proto) {
		          var listener;
		          listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
		          if (proto.prototype.addEventListener) {
		            proto.prototype.addEventListener = Element.prototype.addEventListener;
		          } else if (proto.prototype.attachEvent) {
		            proto.prototype.attachEvent = Element.prototype.attachEvent;
		          }
		          if (proto.prototype.removeEventListener) {
		            return proto.prototype.removeEventListener = Element.prototype.removeEventListener;
		          } else if (proto.prototype.detachEvent) {
		            return proto.prototype.detachEvent = Element.prototype.detachEvent;
		          }
		        })(proto));
		      }
		      return results;
		    };

		    return Main;

		  })();
		  if (true) {
		    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		      return new Main;
		    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if ((typeof module === "object") && (typeof module.exports === "object")) {
		    return module.exports = new Main;
		  } else {
		    if (typeof window !== "undefined" && window !== null) {
		      window.AnyResizeEvent = Main;
		    }
		    return typeof window !== "undefined" && window !== null ? window.anyResizeEvent = new Main : void 0;
		  }
		})();


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var BezierEasing, bezierEasing, h,
		  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

		h = __webpack_require__(19);


		/**
		 * Copyright (c) 2014 Gaëtan Renaudeau http://goo.gl/El3k7u
		 * Adopted from https://github.com/gre/bezier-easing
		 */

		BezierEasing = (function() {
		  function BezierEasing(o) {
		    this.vars();
		    return this.generate;
		  }

		  BezierEasing.prototype.vars = function() {
		    return this.generate = h.bind(this.generate, this);
		  };

		  BezierEasing.prototype.generate = function(mX1, mY1, mX2, mY2) {
		    var A, B, C, NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_MAX_ITERATIONS, SUBDIVISION_PRECISION, _precomputed, arg, binarySubdivide, calcBezier, calcSampleValues, f, float32ArraySupported, getSlope, getTForX, i, j, kSampleStepSize, kSplineTableSize, mSampleValues, newtonRaphsonIterate, precompute, str;
		    if (arguments.length < 4) {
		      return this.error('Bezier function expects 4 arguments');
		    }
		    for (i = j = 0; j < 4; i = ++j) {
		      arg = arguments[i];
		      if (typeof arg !== "number" || isNaN(arg) || !isFinite(arg)) {
		        return this.error('Bezier function expects 4 arguments');
		      }
		    }
		    if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
		      return this.error('Bezier x values should be > 0 and < 1');
		    }
		    NEWTON_ITERATIONS = 4;
		    NEWTON_MIN_SLOPE = 0.001;
		    SUBDIVISION_PRECISION = 0.0000001;
		    SUBDIVISION_MAX_ITERATIONS = 10;
		    kSplineTableSize = 11;
		    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
		    float32ArraySupported = indexOf.call(global, 'Float32Array') >= 0;
		    A = function(aA1, aA2) {
		      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
		    };
		    B = function(aA1, aA2) {
		      return 3.0 * aA2 - 6.0 * aA1;
		    };
		    C = function(aA1) {
		      return 3.0 * aA1;
		    };
		    calcBezier = function(aT, aA1, aA2) {
		      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
		    };
		    getSlope = function(aT, aA1, aA2) {
		      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
		    };
		    newtonRaphsonIterate = function(aX, aGuessT) {
		      var currentSlope, currentX;
		      i = 0;
		      while (i < NEWTON_ITERATIONS) {
		        currentSlope = getSlope(aGuessT, mX1, mX2);

		        /* istanbul ignore if */
		        if (currentSlope === 0.0) {
		          return aGuessT;
		        }
		        currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		        aGuessT -= currentX / currentSlope;
		        ++i;
		      }
		      return aGuessT;
		    };
		    calcSampleValues = function() {
		      i = 0;
		      while (i < kSplineTableSize) {
		        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
		        ++i;
		      }
		    };

		    /* istanbul ignore next */
		    binarySubdivide = function(aX, aA, aB) {
		      var currentT, currentX, isBig;
		      currentX = void 0;
		      currentT = void 0;
		      i = 0;
		      while (true) {
		        currentT = aA + (aB - aA) / 2.0;
		        currentX = calcBezier(currentT, mX1, mX2) - aX;
		        if (currentX > 0.0) {
		          aB = currentT;
		        } else {
		          aA = currentT;
		        }
		        isBig = Math.abs(currentX) > SUBDIVISION_PRECISION;
		        if (!(isBig && ++i < SUBDIVISION_MAX_ITERATIONS)) {
		          break;
		        }
		      }
		      return currentT;
		    };
		    getTForX = function(aX) {
		      var currentSample, delta, dist, guessForT, initialSlope, intervalStart, lastSample;
		      intervalStart = 0.0;
		      currentSample = 1;
		      lastSample = kSplineTableSize - 1;
		      while (currentSample !== lastSample && mSampleValues[currentSample] <= aX) {
		        intervalStart += kSampleStepSize;
		        ++currentSample;
		      }
		      --currentSample;
		      delta = mSampleValues[currentSample + 1] - mSampleValues[currentSample];
		      dist = (aX - mSampleValues[currentSample]) / delta;
		      guessForT = intervalStart + dist * kSampleStepSize;
		      initialSlope = getSlope(guessForT, mX1, mX2);
		      if (initialSlope >= NEWTON_MIN_SLOPE) {
		        return newtonRaphsonIterate(aX, guessForT);
		      } else {

		        /* istanbul ignore next */
		        if (initialSlope === 0.0) {
		          return guessForT;
		        } else {
		          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
		        }
		      }
		    };
		    precompute = function() {
		      var _precomputed;
		      _precomputed = true;
		      if (mX1 !== mY1 || mX2 !== mY2) {
		        return calcSampleValues();
		      }
		    };
		    mSampleValues = !float32ArraySupported ? new Array(kSplineTableSize) : new Float32Array(kSplineTableSize);
		    _precomputed = false;
		    f = function(aX) {
		      if (!_precomputed) {
		        precompute();
		      }
		      if (mX1 === mY1 && mX2 === mY2) {
		        return aX;
		      }
		      if (aX === 0) {
		        return 0;
		      }
		      if (aX === 1) {
		        return 1;
		      }
		      return calcBezier(getTForX(aX), mY1, mY2);
		    };
		    str = "bezier(" + [mX1, mY1, mX2, mY2] + ")";
		    f.toStr = function() {
		      return str;
		    };
		    return f;
		  };

		  BezierEasing.prototype.error = function(msg) {
		    return h.error(msg);
		  };

		  return BezierEasing;

		})();

		bezierEasing = new BezierEasing;

		module.exports = bezierEasing;

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var PathEasing, h;

		h = __webpack_require__(19);

		PathEasing = (function() {
		  PathEasing.prototype._vars = function() {
		    this._precompute = h.clamp(this.o.precompute || 1450, 100, 10000);
		    this._step = 1 / this._precompute;
		    this._rect = this.o.rect || 100;
		    this._approximateMax = this.o.approximateMax || 5;
		    this._eps = this.o.eps || 0.001;
		    return this._boundsPrevProgress = -1;
		  };

		  function PathEasing(path, o1) {
		    this.o = o1 != null ? o1 : {};
		    if (path === 'creator') {
		      return;
		    }
		    this.path = h.parsePath(path);
		    if (this.path == null) {
		      return h.error('Error while parsing the path');
		    }
		    this._vars();
		    this.path.setAttribute('d', this._normalizePath(this.path.getAttribute('d')));
		    this.pathLength = this.path.getTotalLength();
		    this.sample = h.bind(this.sample, this);
		    this._hardSample = h.bind(this._hardSample, this);
		    this._preSample();
		    this;
		  }

		  PathEasing.prototype._preSample = function() {
		    var i, j, length, point, progress, ref, results;
		    this._samples = [];
		    results = [];
		    for (i = j = 0, ref = this._precompute; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
		      progress = i * this._step;
		      length = this.pathLength * progress;
		      point = this.path.getPointAtLength(length);
		      results.push(this._samples[i] = {
		        point: point,
		        length: length,
		        progress: progress
		      });
		    }
		    return results;
		  };

		  PathEasing.prototype._findBounds = function(array, p) {
		    var buffer, direction, end, i, j, len, loopEnd, pointP, pointX, ref, ref1, start, value;
		    if (p === this._boundsPrevProgress) {
		      return this._prevBounds;
		    }
		    if (this._boundsStartIndex == null) {
		      this._boundsStartIndex = 0;
		    }
		    len = array.length;
		    if (this._boundsPrevProgress > p) {
		      loopEnd = 0;
		      direction = 'reverse';
		    } else {
		      loopEnd = len;
		      direction = 'forward';
		    }
		    if (direction === 'forward') {
		      start = array[0];
		      end = array[array.length - 1];
		    } else {
		      start = array[array.length - 1];
		      end = array[0];
		    }
		    for (i = j = ref = this._boundsStartIndex, ref1 = loopEnd; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
		      value = array[i];
		      pointX = value.point.x / this._rect;
		      pointP = p;
		      if (direction === 'reverse') {
		        buffer = pointX;
		        pointX = pointP;
		        pointP = buffer;
		      }
		      if (pointX < pointP) {
		        start = value;
		        this._boundsStartIndex = i;
		      } else {
		        end = value;
		        break;
		      }
		    }
		    this._boundsPrevProgress = p;
		    return this._prevBounds = {
		      start: start,
		      end: end
		    };
		  };

		  PathEasing.prototype.sample = function(p) {
		    var bounds, res;
		    p = h.clamp(p, 0, 1);
		    bounds = this._findBounds(this._samples, p);
		    res = this._checkIfBoundsCloseEnough(p, bounds);
		    if (res != null) {
		      return res;
		    }
		    return this._findApproximate(p, bounds.start, bounds.end);
		  };

		  PathEasing.prototype._checkIfBoundsCloseEnough = function(p, bounds) {
		    var point, y;
		    point = void 0;
		    y = this._checkIfPointCloseEnough(p, bounds.start.point);
		    if (y != null) {
		      return y;
		    }
		    return this._checkIfPointCloseEnough(p, bounds.end.point);
		  };

		  PathEasing.prototype._checkIfPointCloseEnough = function(p, point) {
		    if (h.closeEnough(p, point.x / this._rect, this._eps)) {
		      return this._resolveY(point);
		    }
		  };

		  PathEasing.prototype._approximate = function(start, end, p) {
		    var deltaP, percentP;
		    deltaP = end.point.x - start.point.x;
		    percentP = (p - (start.point.x / this._rect)) / (deltaP / this._rect);
		    return start.length + percentP * (end.length - start.length);
		  };

		  PathEasing.prototype._findApproximate = function(p, start, end, approximateMax) {
		    var approximation, args, newPoint, point, x;
		    if (approximateMax == null) {
		      approximateMax = this._approximateMax;
		    }
		    approximation = this._approximate(start, end, p);
		    point = this.path.getPointAtLength(approximation);
		    x = point.x / this._rect;
		    if (h.closeEnough(p, x, this._eps)) {
		      return this._resolveY(point);
		    } else {
		      if (--approximateMax < 1) {
		        return this._resolveY(point);
		      }
		      newPoint = {
		        point: point,
		        length: approximation
		      };
		      args = p < x ? [p, start, newPoint, approximateMax] : [p, newPoint, end, approximateMax];
		      return this._findApproximate.apply(this, args);
		    }
		  };

		  PathEasing.prototype._resolveY = function(point) {
		    return 1 - (point.y / this._rect);
		  };

		  PathEasing.prototype._normalizePath = function(path) {
		    var commands, endIndex, normalizedPath, points, startIndex, svgCommandsRegexp;
		    svgCommandsRegexp = /[M|L|H|V|C|S|Q|T|A]/gim;
		    points = path.split(svgCommandsRegexp);
		    points.shift();
		    commands = path.match(svgCommandsRegexp);
		    startIndex = 0;
		    points[startIndex] = this._normalizeSegment(points[startIndex]);
		    endIndex = points.length - 1;
		    points[endIndex] = this._normalizeSegment(points[endIndex], this._rect || 100);
		    return normalizedPath = this._joinNormalizedPath(commands, points);
		  };

		  PathEasing.prototype._joinNormalizedPath = function(commands, points) {
		    var command, i, j, len1, normalizedPath, space;
		    normalizedPath = '';
		    for (i = j = 0, len1 = commands.length; j < len1; i = ++j) {
		      command = commands[i];
		      space = i === 0 ? '' : ' ';
		      normalizedPath += "" + space + command + (points[i].trim());
		    }
		    return normalizedPath;
		  };

		  PathEasing.prototype._normalizeSegment = function(segment, value) {
		    var i, j, lastPoint, len1, nRgx, pairs, parsedX, point, space, x;
		    if (value == null) {
		      value = 0;
		    }
		    segment = segment.trim();
		    nRgx = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim;
		    pairs = this._getSegmentPairs(segment.match(nRgx));
		    lastPoint = pairs[pairs.length - 1];
		    x = lastPoint[0];
		    parsedX = Number(x);
		    if (parsedX !== value) {
		      segment = '';
		      lastPoint[0] = value;
		      for (i = j = 0, len1 = pairs.length; j < len1; i = ++j) {
		        point = pairs[i];
		        space = i === 0 ? '' : ' ';
		        segment += "" + space + point[0] + "," + point[1];
		      }
		    }
		    return segment;
		  };

		  PathEasing.prototype._getSegmentPairs = function(array) {
		    var i, j, len1, newArray, pair, value;
		    if (array.length % 2 !== 0) {
		      h.error('Failed to parse the path - segment pairs are not even.', array);
		    }
		    newArray = [];
		    for (i = j = 0, len1 = array.length; j < len1; i = j += 2) {
		      value = array[i];
		      pair = [array[i], array[i + 1]];
		      newArray.push(pair);
		    }
		    return newArray;
		  };

		  PathEasing.prototype.create = function(path, o) {
		    var handler;
		    handler = new PathEasing(path, o);
		    handler.sample.path = handler.path;
		    return handler.sample;
		  };

		  return PathEasing;

		})();

		module.exports = PathEasing;


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var create, easing, getNearest, mix, parseIfEasing, sort,
		  slice = [].slice;

		easing = null;

		parseIfEasing = function(item) {
		  if (typeof item.value === 'number') {
		    return item.value;
		  } else {
		    return easing.parseEasing(item.value);
		  }
		};

		sort = function(a, b) {
		  var returnValue;
		  a.value = parseIfEasing(a);
		  b.value = parseIfEasing(b);
		  returnValue = 0;
		  a.to < b.to && (returnValue = -1);
		  a.to > b.to && (returnValue = 1);
		  return returnValue;
		};

		getNearest = function(array, progress) {
		  var i, index, j, len, value;
		  index = 0;
		  for (i = j = 0, len = array.length; j < len; i = ++j) {
		    value = array[i];
		    index = i;
		    if (value.to > progress) {
		      break;
		    }
		  }
		  return index;
		};

		mix = function() {
		  var args;
		  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		  if (args.length > 1) {
		    args = args.sort(sort);
		  } else {
		    args[0].value = parseIfEasing(args[0]);
		  }
		  return function(progress) {
		    var index, value;
		    index = getNearest(args, progress);
		    if (index !== -1) {
		      value = args[index].value;
		      if (index === args.length - 1 && progress > args[index].to) {
		        return 1;
		      }
		      if (typeof value === 'function') {
		        return value(progress);
		      } else {
		        return value;
		      }
		    }
		  };
		};

		create = function(e) {
		  easing = e;
		  return mix;
		};

		module.exports = create;


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Method to bootstrap approximation function.
		  @private
		  @param   {Object} Samples Object.
		  @returns {Function} Approximate function.
		*/
		var _proximate = function _proximate(samples) {
		  var n = samples.base,
		      samplesAmount = Math.pow(10, n),
		      samplesStep = 1 / samplesAmount;

		  function RoundNumber(input, numberDecimals) {
		    numberDecimals = +numberDecimals || 0; // +var magic!

		    var multiplyer = Math.pow(10.0, numberDecimals);

		    return Math.round(input * multiplyer) / multiplyer;
		  }

		  var cached = function cached(p) {
		    var newKey = RoundNumber(p, n),
		        sample = samples[newKey.toString()];

		    if (Math.abs(p - newKey) < samplesStep) {
		      return sample;
		    }

		    if (p > newKey) {
		      var nextIndex = newKey + samplesStep;
		      var nextValue = samples[nextIndex];
		    } else {
		      var nextIndex = newKey - samplesStep;
		      var nextValue = samples[nextIndex];
		    }

		    var dLength = nextIndex - newKey;
		    var dValue = nextValue - sample;
		    if (dValue < samplesStep) {
		      return sample;
		    }

		    var progressScale = (p - newKey) / dLength;
		    var coef = nextValue > sample ? -1 : 1;
		    var scaledDifference = coef * progressScale * dValue;

		    return sample + scaledDifference;
		  };

		  cached.getSamples = function () {
		    return samples;
		  };

		  return cached;
		};
		/*
		    Method to take samples of the function and call the _proximate
		    method with the dunction and samples. Or if samples passed - pipe
		    them to the _proximate method without sampling.
		    @private
		    @param {Function} Function to sample.
		    @param {Number, Object, String} Precision or precomputed samples.
		  */
		var _sample = function _sample(fn) {
		  var n = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];


		  var nType = typeof n === 'undefined' ? 'undefined' : (0, _typeof3.default)(n);

		  var samples = {};
		  if (nType === 'number') {
		    var p = 0,
		        samplesCount = Math.pow(10, n),
		        step = 1 / samplesCount;

		    samples[0] = fn(0);
		    for (var i = 0; i < samplesCount - 1; i++) {
		      p += step;

		      var index = parseFloat(p.toFixed(n));
		      samples[index] = fn(p);
		    }
		    samples[1] = fn(1);

		    samples.base = n;
		  } else if (nType === 'object') {
		    samples = n;
		  } else if (nType === 'string') {
		    samples = JSON.parse(n);
		  }

		  return Approximate._sample._proximate(samples);
		};

		var Approximate = { _sample: _sample, _proximate: _proximate };
		Approximate._sample._proximate = Approximate._proximate;

		exports.default = Approximate._sample;

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(56), __esModule: true };

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(55), __esModule: true };

	/***/ },
	/* 50 */,
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(58);
		__webpack_require__(59);
		module.exports = __webpack_require__(60);

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(61);
		module.exports = __webpack_require__(62).Object.keys;

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _shapesMap = __webpack_require__(20);

		var _shapesMap2 = _interopRequireDefault(_shapesMap);

		var _burst = __webpack_require__(4);

		var _burst2 = _interopRequireDefault(_burst);

		var _shape = __webpack_require__(2);

		var _shape2 = _interopRequireDefault(_shape);

		var _shapeSwirl = __webpack_require__(3);

		var _shapeSwirl2 = _interopRequireDefault(_shapeSwirl);

		var _stagger = __webpack_require__(6);

		var _stagger2 = _interopRequireDefault(_stagger);

		var _spriter = __webpack_require__(7);

		var _spriter2 = _interopRequireDefault(_spriter);

		var _motionPath = __webpack_require__(21);

		var _motionPath2 = _interopRequireDefault(_motionPath);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _tweener = __webpack_require__(10);

		var _tweener2 = _interopRequireDefault(_tweener);

		var _tweenable = __webpack_require__(11);

		var _tweenable2 = _interopRequireDefault(_tweenable);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		var _easing = __webpack_require__(22);

		var _easing2 = _interopRequireDefault(_easing);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var mojs = {
		  revision: '0.265.9', isDebug: true, helpers: _h2.default,
		  Shape: _shape2.default, ShapeSwirl: _shapeSwirl2.default, Burst: _burst2.default, stagger: _stagger2.default, Spriter: _spriter2.default, MotionPath: _motionPath2.default,
		  Tween: _tween2.default, Timeline: _timeline2.default, Tweenable: _tweenable2.default, Thenable: _thenable2.default, Tunable: _tunable2.default, Module: _module2.default,
		  tweener: _tweener2.default, easing: _easing2.default, shapesMap: _shapesMap2.default
		};

		// functions alias
		mojs.h = mojs.helpers;
		mojs.delta = mojs.h.delta;
		// custom shape add function and class
		mojs.addShape = mojs.shapesMap.addShape;
		mojs.CustomShape = mojs.shapesMap.custom;
		// module alias
		mojs.Transit = mojs.Shape;
		mojs.Swirl = mojs.ShapeSwirl;

		// TODO:
		/*
		  performance

		  rand for direction
		  burstRainbowEnd children angle after tune
		  burstRainbowEnd pathScale after tune
		  swirl then issue
		  'rand' angle flick with `then`
		  not able to `play()` in `onComplete` callback
		  ---
		  module names
		  swirls in then chains for x/y
		  parse rand(stagger(20, 10), 20) values
		  percentage for radius
		*/

		// istanbul ignore next
		if (true) {
		  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
		    return mojs;
		  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		// istanbul ignore next
		if ((false ? 'undefined' : (0, _typeof3.default)(module)) === "object" && (0, _typeof3.default)(module.exports) === "object") {
		  module.exports = mojs;
		}

		exports.default = mojs;


		typeof window !== 'undefined' && (window.mojs = mojs);
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(64);
		__webpack_require__(65);
		module.exports = __webpack_require__(62).Symbol;

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(66);
		module.exports = function create(P, D){
		  return $.create(P, D);
		};

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(67);
		module.exports = __webpack_require__(62).Object.setPrototypeOf;

	/***/ },
	/* 57 */,
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(69);
		var Iterators = __webpack_require__(70);
		Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $at  = __webpack_require__(71)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(72)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var anObject = __webpack_require__(73)
		  , get      = __webpack_require__(74);
		module.exports = __webpack_require__(62).getIterator = function(it){
		  var iterFn = get(it);
		  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
		  return anObject(iterFn.call(it));
		};

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.14 Object.keys(O)
		var toObject = __webpack_require__(75);

		__webpack_require__(76)('keys', function($keys){
		  return function keys(it){
		    return $keys(toObject(it));
		  };
		});

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		var core = module.exports = {version: '1.2.6'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var store  = __webpack_require__(77)('wks')
		  , uid    = __webpack_require__(78)
		  , Symbol = __webpack_require__(79).Symbol;
		module.exports = function(name){
		  return store[name] || (store[name] =
		    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
		};

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// ECMAScript 6 symbols shim
		var $              = __webpack_require__(66)
		  , global         = __webpack_require__(79)
		  , has            = __webpack_require__(80)
		  , DESCRIPTORS    = __webpack_require__(81)
		  , $export        = __webpack_require__(82)
		  , redefine       = __webpack_require__(83)
		  , $fails         = __webpack_require__(84)
		  , shared         = __webpack_require__(77)
		  , setToStringTag = __webpack_require__(85)
		  , uid            = __webpack_require__(78)
		  , wks            = __webpack_require__(63)
		  , keyOf          = __webpack_require__(86)
		  , $names         = __webpack_require__(87)
		  , enumKeys       = __webpack_require__(88)
		  , isArray        = __webpack_require__(89)
		  , anObject       = __webpack_require__(73)
		  , toIObject      = __webpack_require__(90)
		  , createDesc     = __webpack_require__(91)
		  , getDesc        = $.getDesc
		  , setDesc        = $.setDesc
		  , _create        = $.create
		  , getNames       = $names.get
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , setter         = false
		  , HIDDEN         = wks('_hidden')
		  , isEnum         = $.isEnum
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , useNative      = typeof $Symbol == 'function'
		  , ObjectProto    = Object.prototype;

		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(setDesc({}, 'a', {
		    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = getDesc(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  setDesc(it, key, D);
		  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
		} : setDesc;

		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol.prototype);
		  sym._k = tag;
		  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
		    configurable: true,
		    set: function(value){
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    }
		  });
		  return sym;
		};

		var isSymbol = function(it){
		  return typeof it == 'symbol';
		};

		var $defineProperty = function defineProperty(it, key, D){
		  if(D && has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return setDesc(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key);
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
		    ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  var D = getDesc(it = toIObject(it), key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = getNames(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
		  return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var names  = getNames(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
		  return result;
		};
		var $stringify = function stringify(it){
		  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		  var args = [it]
		    , i    = 1
		    , $$   = arguments
		    , replacer, $replacer;
		  while($$.length > i)args.push($$[i++]);
		  replacer = args[1];
		  if(typeof replacer == 'function')$replacer = replacer;
		  if($replacer || !isArray(replacer))replacer = function(key, value){
		    if($replacer)value = $replacer.call(this, key, value);
		    if(!isSymbol(value))return value;
		  };
		  args[1] = replacer;
		  return _stringify.apply($JSON, args);
		};
		var buggyJSON = $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		});

		// 19.4.1.1 Symbol([description])
		if(!useNative){
		  $Symbol = function Symbol(){
		    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
		    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
		  };
		  redefine($Symbol.prototype, 'toString', function toString(){
		    return this._k;
		  });

		  isSymbol = function(it){
		    return it instanceof $Symbol;
		  };

		  $.create     = $create;
		  $.isEnum     = $propertyIsEnumerable;
		  $.getDesc    = $getOwnPropertyDescriptor;
		  $.setDesc    = $defineProperty;
		  $.setDescs   = $defineProperties;
		  $.getNames   = $names.get = $getOwnPropertyNames;
		  $.getSymbols = $getOwnPropertySymbols;

		  if(DESCRIPTORS && !__webpack_require__(92)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }
		}

		var symbolStatics = {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    return keyOf(SymbolRegistry, key);
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		};
		// 19.4.2.2 Symbol.hasInstance
		// 19.4.2.3 Symbol.isConcatSpreadable
		// 19.4.2.4 Symbol.iterator
		// 19.4.2.6 Symbol.match
		// 19.4.2.8 Symbol.replace
		// 19.4.2.9 Symbol.search
		// 19.4.2.10 Symbol.species
		// 19.4.2.11 Symbol.split
		// 19.4.2.12 Symbol.toPrimitive
		// 19.4.2.13 Symbol.toStringTag
		// 19.4.2.14 Symbol.unscopables
		$.each.call((
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
		  'species,split,toPrimitive,toStringTag,unscopables'
		).split(','), function(it){
		  var sym = wks(it);
		  symbolStatics[it] = useNative ? sym : wrap(sym);
		});

		setter = true;

		$export($export.G + $export.W, {Symbol: $Symbol});

		$export($export.S, 'Symbol', symbolStatics);

		$export($export.S + $export.F * !useNative, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});

		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {



	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var $Object = Object;
		module.exports = {
		  create:     $Object.create,
		  getProto:   $Object.getPrototypeOf,
		  isEnum:     {}.propertyIsEnumerable,
		  getDesc:    $Object.getOwnPropertyDescriptor,
		  setDesc:    $Object.defineProperty,
		  setDescs:   $Object.defineProperties,
		  getKeys:    $Object.keys,
		  getNames:   $Object.getOwnPropertyNames,
		  getSymbols: $Object.getOwnPropertySymbols,
		  each:       [].forEach
		};

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.3.19 Object.setPrototypeOf(O, proto)
		var $export = __webpack_require__(82);
		$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(93).set});

	/***/ },
	/* 68 */,
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var addToUnscopables = __webpack_require__(95)
		  , step             = __webpack_require__(96)
		  , Iterators        = __webpack_require__(70)
		  , toIObject        = __webpack_require__(90);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(72)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {};

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(97)
		  , defined   = __webpack_require__(98);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY        = __webpack_require__(92)
		  , $export        = __webpack_require__(82)
		  , redefine       = __webpack_require__(83)
		  , hide           = __webpack_require__(99)
		  , has            = __webpack_require__(80)
		  , Iterators      = __webpack_require__(70)
		  , $iterCreate    = __webpack_require__(100)
		  , setToStringTag = __webpack_require__(85)
		  , getProto       = __webpack_require__(66).getProto
		  , ITERATOR       = __webpack_require__(63)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';

		var returnThis = function(){ return this; };

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , methods, key;
		  // Fix native
		  if($native){
		    var IteratorPrototype = getProto($default.call(new Base));
		    // Set @@toStringTag to native iterators
		    setToStringTag(IteratorPrototype, TAG, true);
		    // FF fix
		    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    // fix Array#{values, @@iterator}.name in V8 / FF
		    if(DEF_VALUES && $native.name !== VALUES){
		      VALUES_BUG = true;
		      $default = function values(){ return $native.call(this); };
		    }
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES  ? $default : getMethod(VALUES),
		      keys:    IS_SET      ? $default : getMethod(KEYS),
		      entries: !DEF_VALUES ? $default : getMethod('entries')
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(101);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		var classof   = __webpack_require__(102)
		  , ITERATOR  = __webpack_require__(63)('iterator')
		  , Iterators = __webpack_require__(70);
		module.exports = __webpack_require__(62).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};

	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(98);
		module.exports = function(it){
		  return Object(defined(it));
		};

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__(82)
		  , core    = __webpack_require__(62)
		  , fails   = __webpack_require__(84);
		module.exports = function(KEY, exec){
		  var fn  = (core.Object || {})[KEY] || Object[KEY]
		    , exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
		};

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(79)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ },
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(84)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(79)
		  , core      = __webpack_require__(62)
		  , ctx       = __webpack_require__(103)
		  , PROTOTYPE = 'prototype';

		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && key in target;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(param){
		        return this instanceof C ? new C(param) : C(param);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
		  }
		};
		// type bitmap
		$export.F = 1;  // forced
		$export.G = 2;  // global
		$export.S = 4;  // static
		$export.P = 8;  // proto
		$export.B = 16; // bind
		$export.W = 32; // wrap
		module.exports = $export;

	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(99);

	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		var def = __webpack_require__(66).setDesc
		  , has = __webpack_require__(80)
		  , TAG = __webpack_require__(63)('toStringTag');

		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {

		var $         = __webpack_require__(66)
		  , toIObject = __webpack_require__(90);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = $.getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};

	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(90)
		  , getNames  = __webpack_require__(66).getNames
		  , toString  = {}.toString;

		var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];

		var getWindowNames = function(it){
		  try {
		    return getNames(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};

		module.exports.get = function getOwnPropertyNames(it){
		  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
		  return getNames(toIObject(it));
		};

	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {

		// all enumerable object keys, includes symbols
		var $ = __webpack_require__(66);
		module.exports = function(it){
		  var keys       = $.getKeys(it)
		    , getSymbols = $.getSymbols;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = $.isEnum
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
		  }
		  return keys;
		};

	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(104);
		module.exports = Array.isArray || function(arg){
		  return cof(arg) == 'Array';
		};

	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(105)
		  , defined = __webpack_require__(98);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = true;

	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var getDesc  = __webpack_require__(66).getDesc
		  , isObject = __webpack_require__(101)
		  , anObject = __webpack_require__(73);
		var check = function(O, proto){
		  anObject(O);
		  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
		};
		module.exports = {
		  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		    function(test, buggy, set){
		      try {
		        set = __webpack_require__(103)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
		        set(test, []);
		        buggy = !(test instanceof Array);
		      } catch(e){ buggy = true; }
		      return function setPrototypeOf(O, proto){
		        check(O, proto);
		        if(buggy)O.__proto__ = proto;
		        else set(O, proto);
		        return O;
		      };
		    }({}, false) : undefined),
		  check: check
		};

	/***/ },
	/* 94 */,
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(){ /* empty */ };

	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};

	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};

	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {

		var $          = __webpack_require__(66)
		  , createDesc = __webpack_require__(91);
		module.exports = __webpack_require__(81) ? function(object, key, value){
		  return $.setDesc(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $              = __webpack_require__(66)
		  , descriptor     = __webpack_require__(91)
		  , setToStringTag = __webpack_require__(85)
		  , IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(99)(IteratorPrototype, __webpack_require__(63)('iterator'), function(){ return this; });

		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};

	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {

		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(104)
		  , TAG = __webpack_require__(63)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};

	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(106);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = {}.toString;

		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(104);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*!
		:: MojsPlayer :: Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences.
		Oleg Solomka @LegoMushroom 2016 MIT
		0.43.15
	*/

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("mojs-player", [], factory);
		else if(typeof exports === 'object')
			exports["mojs-player"] = factory();
		else
			root["mojs-player"] = factory();
	})(this, function() {
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
	/******/ 	__webpack_require__.p = "build/";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(3);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _stringify = __webpack_require__(71);

		var _stringify2 = _interopRequireDefault(_stringify);

		var _extends2 = __webpack_require__(73);

		var _extends3 = _interopRequireDefault(_extends2);

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _classlistPolyfill = __webpack_require__(88);

		var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

		var _icons = __webpack_require__(89);

		var _icons2 = _interopRequireDefault(_icons);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		var _playerSlider = __webpack_require__(91);

		var _playerSlider2 = _interopRequireDefault(_playerSlider);

		var _iconButton = __webpack_require__(111);

		var _iconButton2 = _interopRequireDefault(_iconButton);

		var _speedControl = __webpack_require__(123);

		var _speedControl2 = _interopRequireDefault(_speedControl);

		var _playButton = __webpack_require__(135);

		var _playButton2 = _interopRequireDefault(_playButton);

		var _stopButton = __webpack_require__(143);

		var _stopButton2 = _interopRequireDefault(_stopButton);

		var _repeatButton = __webpack_require__(147);

		var _repeatButton2 = _interopRequireDefault(_repeatButton);

		var _boundsButton = __webpack_require__(155);

		var _boundsButton2 = _interopRequireDefault(_boundsButton);

		var _hideButton = __webpack_require__(156);

		var _hideButton2 = _interopRequireDefault(_hideButton);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// TODO
		// fix timeline reset if progress === 1

		__webpack_require__(160);
		var CLASSES = __webpack_require__(162);

		var MojsPlayer = function (_Module) {
		  (0, _inherits3.default)(MojsPlayer, _Module);

		  function MojsPlayer(o) {
		    (0, _classCallCheck3.default)(this, MojsPlayer);

		    if (typeof mojs === 'undefined') {
		      throw new Error('MojsPlayer relies on mojs^0.225.2, please include it before player initialization. [ https://github.com/legomushroom/mojs ] ');
		    }
		    return (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));
		  }
		  /*
		    Method to declare defaults.
		    @private
		    @overrides @ Module
		  */


		  MojsPlayer.prototype._declareDefaults = function _declareDefaults() {
		    _Module.prototype._declareDefaults.call(this);

		    this._defaults.isSaveState = true;
		    this._defaults.isPlaying = false;
		    this._defaults.progress = 0;
		    this._defaults.isRepeat = false;
		    this._defaults.isBounds = false;
		    this._defaults.leftBound = 0;
		    this._defaults.rightBound = 1;
		    this._defaults.isSpeed = false;
		    this._defaults.speed = 1;
		    this._defaults.isHidden = false;
		    this._defaults.precision = 0.1;
		    this._defaults.name = 'mojs-player';

		    this.revision = '0.43.15';

		    var str = this._fallbackTo(this._o.name, this._defaults.name);
		    str += str === this._defaults.name ? '' : '__' + this._defaults.name;
		    this._localStorage = str + '__' + this._hashCode(str);
		  };
		  /*
		    Method to copy `_o` options to `_props` object
		    with fallback to `localStorage` and `_defaults`.
		    @private
		  */


		  MojsPlayer.prototype._extendDefaults = function _extendDefaults() {
		    this._props = {};
		    var p = this._props,
		        o = this._o,
		        defs = this._defaults;

		    // get localstorage regarding isSaveState option
		    p.isSaveState = this._fallbackTo(o.isSaveState, defs.isSaveState);
		    var m = p.isSaveState ? JSON.parse(localStorage.getItem(this._localStorage)) || {} : {};

		    for (var key in defs) {
		      var value = this._fallbackTo(m[key], o[key]);
		      this._assignProp(key, this._fallbackTo(value, defs[key]));
		    }
		    // get raw-speed option
		    this._props['raw-speed'] = this._fallbackTo(m['raw-speed'], .5);
		  };
		  /*
		    Callback for keyup on document.
		    @private
		    @param {Object} Original event object.
		  */


		  MojsPlayer.prototype._keyUp = function _keyUp(e) {
		    if (e.altKey) {
		      switch (e.keyCode) {
		        case 80:
		          // alt + P => PLAY/PAUSE TOGGLE
		          this._props.isPlaying = !this._props.isPlaying;
		          this._onPlayStateChange(this._props.isPlaying);
		          break;
		        case 189:
		          // alt + - => DECREASE PROGRESS
		          this.playButton.off();
		          this.playerSlider.decreaseProgress(e.shiftKey ? .1 : .01);
		          break;
		        case 187:
		          // alt + + => INCREASE PROGRESS
		          this.playButton.off();
		          this.playerSlider.increaseProgress(e.shiftKey ? .1 : .01);
		          break;
		        case 83:
		          // alt + S => STOP
		          this._onStop();
		          break;
		        case 82:
		          // alt + R => REPEAT TOGGLE
		          this._props.isRepeat = !this._props.isRepeat;
		          var method = this._props.isRepeat ? 'on' : 'off';
		          this.repeatButton[method]();
		          break;
		        case 66:
		          // alt + B => BOUNDS TOGGLE
		          this._props.isBounds = !this._props.isBounds;
		          var method = this._props.isBounds ? 'on' : 'off';
		          this.boundsButton[method]();
		          break;
		        case 72:
		          // alt + H => HIDE PLAYER TOGGLE
		          this._props.isHidden = !this._props.isHidden;
		          this._onHideStateChange(this._props.isHidden);
		          var method = this._props.isHidden ? 'on' : 'off';
		          this.hideButton[method]();
		          break;
		        // case 49: // alt + 1 => RESET SPEED TO 1x
		        case 81:
		          // alt + q => RESET SPEED TO 1x
		          this.speedControl.reset();
		          break;
		        case 50:
		          // alt + 2 => DECREASE SPEEED by .05
		          this.speedControl.decreaseSpeed(e.shiftKey ? .05 : .01);
		          break;
		        case 51:
		          // alt + 3 => INCREASE SPEED by .05
		          this.speedControl.increaseSpeed(e.shiftKey ? .05 : .01);
		          break;
		      }
		    }
		  };
		  /*
		    Method to declare properties.
		    @private
		    @overrides @ Module
		  */


		  MojsPlayer.prototype._vars = function _vars() {
		    this._hideCount = 0;
		  };
		  /*
		    Method to render the module.
		    @private
		    @overrides @ Module
		  */


		  MojsPlayer.prototype._render = function _render() {
		    this._initTimeline();
		    var p = this._props,
		        className = 'mojs-player',
		        icons = new _icons2.default({ prefix: this._props.prefix });
		    _Module.prototype._render.call(this);
		    // this.el.classList.add(p.classNAme );
		    this.el.classList.add(CLASSES[className]);
		    this.el.setAttribute('id', 'js-mojs-player');

		    var left = this._createChild('div', CLASSES[className + '__left']),
		        mid = this._createChild('div', CLASSES[className + '__mid']),
		        right = this._createChild('div', CLASSES[className + '__right']);

		    this.repeatButton = new _repeatButton2.default({
		      parent: left,
		      isOn: p.isRepeat,
		      onStateChange: this._onRepeatStateChange.bind(this),
		      prefix: this._props.prefix
		    });

		    this.playerSlider = new _playerSlider2.default({
		      parent: mid,
		      isBounds: p.isBounds,
		      leftProgress: p.leftBound,
		      rightProgress: p.rightBound,
		      progress: p.progress,
		      onLeftProgress: this._onLeftProgress.bind(this),
		      onProgress: this._onProgress.bind(this),
		      onRightProgress: this._onRightProgress.bind(this),
		      onSeekStart: this._onSeekStart.bind(this),
		      onSeekEnd: this._onSeekEnd.bind(this)
		    });

		    this.boundsButton = new _boundsButton2.default({
		      isOn: p.isBounds,
		      parent: left,
		      onStateChange: this._boundsStateChange.bind(this),
		      prefix: this._props.prefix
		    });

		    this.speedControl = new _speedControl2.default({
		      parent: left,
		      // progress:       p.speed,
		      speed: p.speed,
		      isOn: p.isSpeed,
		      onSpeedChange: this._onSpeedChange.bind(this),
		      onIsSpeed: this._onIsSpeed.bind(this),
		      prefix: this._props.prefix
		    });

		    var proc = 0,
		        progress = [],
		        procToSpeed = [],
		        speedToProc = [];

		    this.stopButton = new _stopButton2.default({
		      parent: left,
		      isPrepend: true,
		      onPointerUp: this._onStop.bind(this),
		      prefix: this._props.prefix
		    });

		    this.playButton = new _playButton2.default({
		      parent: left,
		      isOn: p.isPlaying,
		      isPrepend: true,
		      onStateChange: this._onPlayStateChange.bind(this),
		      prefix: this._props.prefix
		    });

		    this.mojsButton = new _iconButton2.default({
		      parent: right,
		      icon: 'mojs',
		      target: '_blank',
		      link: 'https://github.com/legomushroom/mojs-player',
		      title: 'mo • js',
		      prefix: this._props.prefix
		    });

		    this.hideButton = new _hideButton2.default({
		      parent: this.el,
		      className: CLASSES[className + '__hide-button'],
		      isOn: p.isHidden,
		      onStateChange: this._onHideStateChange.bind(this),
		      prefix: this._props.prefix
		    });

		    this._listen();
		  };
		  /*
		    Method to initialize event listeners.
		    @private
		  */


		  MojsPlayer.prototype._listen = function _listen() {
		    var unloadEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
		    window.addEventListener(unloadEvent, this._onUnload.bind(this));
		    document.addEventListener('keyup', this._keyUp.bind(this));
		  };
		  /*
		    Method that is invoked when user touches the track.
		    @private
		    @param {Object} Original event object.
		  */


		  MojsPlayer.prototype._onSeekStart = function _onSeekStart(e) {
		    this._sysTween.pause();
		  };
		  /*
		    Method that is invoked when user touches the track.
		    @private
		    @param {Object} Original event object.
		  */


		  MojsPlayer.prototype._onSeekEnd = function _onSeekEnd(e) {
		    var _this2 = this;

		    clearTimeout(this._endTimer);
		    this._endTimer = setTimeout(function () {
		      _this2._props.isPlaying && _this2._play();
		    }, 20);
		  };
		  /*
		    Method to init timeline.
		    @private
		  */


		  MojsPlayer.prototype._initTimeline = function _initTimeline() {
		    var _this3 = this;

		    this.timeline = new mojs.Timeline({});

		    var add = this._o.add;
		    // check whether the `add` option meets the next criterias:
		    var isUndefined = typeof add === 'undefined';

		    if (!isUndefined) {
		      add = add.timeline || add;
		    }

		    var isTween = add instanceof mojs.Tween;
		    var isTimeline = add instanceof mojs.Timeline;

		    if (isUndefined || !(isTween || isTimeline)) {
		      throw new Error('MojsPlayer expects Tween/Timeline/Module as `add` option in constructor call. [ new MojsPlayer({ add: new mojs.Tween }); ]');
		      return;
		    }

		    this.timeline.add(this._o.add);

		    this._sysTween = new mojs.Tween({
		      easing: 'linear.none',
		      duration: this.timeline._props.repeatTime,
		      onProgress: this._onSysProgress.bind(this),
		      onComplete: this._onSysTweenComplete.bind(this),
		      onPlaybackStop: function onPlaybackStop() {
		        _this3._setPlayState('off');
		      },
		      onPlaybackPause: function onPlaybackPause() {
		        _this3._setPlayState('off');
		      },
		      onPlaybackStart: function onPlaybackStart() {
		        _this3._setPlayState('on');
		      }
		    });
		  };
		  /*
		    Method that is invoked on system tween progress.
		    @private
		    @param {Number} Progress value [0...1].
		  */


		  MojsPlayer.prototype._onSysProgress = function _onSysProgress(p) {
		    this.playerSlider.setTrackProgress(p);

		    var rightBound = this._props.isBounds ? this._props.rightBound : 1,
		        leftBound = this._props.isBounds ? this._props.leftBound : -1;

		    // since js is really bed in numbers precision,
		    // if we set a progress in the `_play` method it returns slighly
		    // different when piped thru tween, so add `0.01` gap to soften that
		    if (p < leftBound - 0.01 && p !== 0) {
		      this._reset();
		      requestAnimationFrame(this._play.bind(this));
		    }

		    if (p >= rightBound) {

		      this._reset(rightBound === 1);

		      // if ( rightBound === 1 ) { this._sysTween.stop( ); }
		      // else { this._reset() }

		      if (this._props.isRepeat) {
		        requestAnimationFrame(this._play.bind(this));
		      } else {
		        this._props.isPlaying = false;
		      }
		    }
		  };
		  /*
		    Method to play system tween from progress.
		    @private
		  */


		  MojsPlayer.prototype._play = function _play() {
		    var p = this._props,
		        leftBound = p.isBounds ? p.leftBound : p.progress,
		        progress = p.progress >= this._getBound('right') ? leftBound : p.progress;

		    if (progress === 1) {
		      progress = p.isBounds ? p.leftBound : 0;
		    };
		    if (progress !== 0) {
		      this._sysTween.setProgress(progress);
		    };

		    this._sysTween.play();
		  };
		  /*
		    Method to reset sysTween and timeline.
		    @param {Boolean} If should not set progress to 0.
		    @private
		  */


		  MojsPlayer.prototype._reset = function _reset(isPause) {
		    this._sysTween.reset();

		    if (!isPause) {
		      // this.timeline.pause();
		      var p = this._props,
		          progress = p.progress;

		      var start = progress,
		          leftBound = p.isBounds ? p.leftBound : 0;

		      while (start - p.precision >= leftBound) {
		        start -= p.precision;
		        this.timeline.setProgress(start);
		      }
		    }

		    this.timeline.reset();
		  };
		  /*
		    Method to set play button state.
		    @private
		    @param {String} Method name to call it on playButton.
		  */


		  MojsPlayer.prototype._setPlayState = function _setPlayState(method) {
		    var _this4 = this;

		    clearTimeout(this._playTimeout);
		    this._playTimeout = setTimeout(function () {
		      _this4.playButton && _this4.playButton[method](false);
		    }, 20);
		  };
		  /*
		    Method that is invoked on system tween completion.
		    @private
		    @param {Boolean} If forward direction.
		  */


		  MojsPlayer.prototype._onSysTweenComplete = function _onSysTweenComplete(isForward) {}
		  // console.log(' complete ', this._props.isPlaying, isForward, this._props.isRepeat);
		  // if ( this._props.isPlaying && isForward ) {
		  //   if ( this._props.isRepeat ) {
		  //     console.log('reset 2')
		  //     // this._sysTween.reset();
		  //     // this._play();
		  //   }
		  // }

		  /*
		    Method that is invoked play button state change.
		    @private
		    @param {Boolean} Repeat button state.
		  */
		  ;

		  MojsPlayer.prototype._onPlayStateChange = function _onPlayStateChange(isPlay) {
		    this._props.isPlaying = isPlay;
		    if (isPlay) {
		      this._play();
		    } else {
		      this._sysTween.pause();
		    }
		  };
		  /*
		    Callback for hide button change state.
		    @private
		    @param {Boolean}
		  */


		  MojsPlayer.prototype._onHideStateChange = function _onHideStateChange(isHidden) {
		    this._props.isHidden = isHidden;
		    var method = isHidden ? 'add' : 'remove';
		    this.el.classList[method](CLASSES['is-hidden']);
		    // enable CSS transition on subsequent calls
		    if (this._hideCount++ === 1) {
		      this.el.classList.add(CLASSES['is-transition']);
		    }
		  };
		  /*
		    Method that is invoked on stop button tap.
		    @private
		  */


		  MojsPlayer.prototype._onStop = function _onStop() {
		    var p = this._props;
		    p.isPlaying = false;

		    var leftBound = p.isBounds ? p.leftBound : 0;
		    // set sysTween progress twice because it could be _reset already
		    this._sysTween.setProgress(leftBound + 0.01);
		    this._sysTween.setProgress(leftBound);

		    this._reset();
		  };
		  /*
		    Method that is invoked on repeat switch state change.
		    @private
		    @param {Boolean} Repeat button state.
		  */


		  MojsPlayer.prototype._onRepeatStateChange = function _onRepeatStateChange(isOn) {
		    this._props.isRepeat = isOn;
		  };
		  /*
		    Method that is invoked on bounds switch state change.
		    @private
		    @param {Boolean} Bounds state.
		  */


		  MojsPlayer.prototype._boundsStateChange = function _boundsStateChange(isOn) {
		    this.playerSlider._props.isBounds = isOn;
		    this.playerSlider[(isOn ? 'enable' : 'disable') + 'Bounds']();
		    this._props.isBounds = isOn;
		  };
		  /*
		    Method that is invoked on speed value change.
		    @private
		    @param {Number} Speed value.
		    @param {Number} Slider progress.
		  */


		  MojsPlayer.prototype._onSpeedChange = function _onSpeedChange(speed, progress) {
		    this._props['raw-speed'] = progress;
		    this._props.speed = speed;
		    this._sysTween.setSpeed(speed);
		  };
		  /*
		    Method that is invoked on speed state change.
		    @private
		    @param {Boolean} Speed control state.
		  */


		  MojsPlayer.prototype._onIsSpeed = function _onIsSpeed(isOn) {
		    this._props.isSpeed = isOn;
		  };
		  /*
		    Method that is invoked on timeline's left bound progress.
		    @private
		    @param {Number} Progress value [0...1].
		  */


		  MojsPlayer.prototype._onLeftProgress = function _onLeftProgress(progress) {
		    this._props.leftBound = progress;
		  };
		  /*
		    Method that is invoked on timeline progress.
		    @private
		    @param {Number} Progress value [0...1].
		  */


		  MojsPlayer.prototype._onProgress = function _onProgress(progress) {
		    this._props.progress = progress;
		    // if timeline was reset - refresh it's state
		    // by incremental updates until progress (0 always)
		    if (!this.timeline._prevTime && progress > 0) {
		      var start = 0;
		      do {
		        this.timeline.setProgress(start);
		        start += this._props.precision;
		      } while (start + this._props.precision < progress);
		    }
		    this.timeline.setProgress(progress);
		  };
		  /*
		    Method that is invoked on timeline's right bound progress.
		    @private
		    @param {Number} Progress value [0...1].
		  */


		  MojsPlayer.prototype._onRightProgress = function _onRightProgress(progress) {
		    this._props.rightBound = progress;
		  };
		  /*
		    Method that is invoked on window unload.
		    @private
		    @param {Object} Original even object.
		  */


		  MojsPlayer.prototype._onUnload = function _onUnload(e) {
		    if (!this._props.isSaveState) {
		      return localStorage.removeItem(this._localStorage);
		    }

		    var props = (0, _extends3.default)({}, this._props);
		    delete props.parent;
		    delete props.className;
		    delete props.isSaveState;
		    delete props.precision;

		    localStorage.setItem(this._localStorage, (0, _stringify2.default)(props));
		  };
		  /*
		    Method that returns the second argument if the first one isn't set.
		    @private
		    @param {Any} Property to set.
		    @param {Any} Property to return as fallback.
		    @returns {Any} If set - the first property, if not - the second.
		  */


		  MojsPlayer.prototype._fallbackTo = function _fallbackTo(prop, fallback) {
		    return prop != null ? prop : fallback;
		  };
		  /*
		    Method to get bound regarding isBound option.
		    @private
		    @param {String} Bound name.
		  */


		  MojsPlayer.prototype._getBound = function _getBound(boundName) {
		    var p = this._props,
		        fallback = boundName === 'left' ? 0 : 1;

		    return p.isBounds ? p[boundName + 'Bound'] : fallback;
		  };
		  /*
		    Method to defer a method.
		    @private
		    @param {Function} Function that should be defered.
		  */


		  MojsPlayer.prototype._defer = function _defer(fn) {
		    setTimeout(fn.bind(this), 1);
		  };
		  /*
		    Method to generate hash code.
		    @private
		    @return {String} Hash code.
		  */


		  MojsPlayer.prototype._hashCode = function _hashCode(str) {
		    var hash = 0,
		        i,
		        chr,
		        len;
		    if (str.length === 0) return hash;
		    for (i = 0, len = str.length; i < len; i++) {
		      chr = str.charCodeAt(i);
		      hash = (hash << 5) - hash + chr;
		      hash |= 0; // Convert to 32bit integer
		    }
		    return Math.abs(hash);
		  };

		  return MojsPlayer;
		}(_module2.default);

		if (true) {
		  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		    return MojsPlayer;
		  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		if (( false ? 'undefined' : (0, _typeof3.default)(module)) === "object" && (0, _typeof3.default)(module.exports) === "object") {
		  module.exports = MojsPlayer;
		}

		var _global = typeof global !== 'undefined' ? global : window;
		_global.MojsPlayer = MojsPlayer;

		exports.default = MojsPlayer;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module), (function() { return this; }())))

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _iterator = __webpack_require__(4);

		var _iterator2 = _interopRequireDefault(_iterator);

		var _symbol = __webpack_require__(55);

		var _symbol2 = _interopRequireDefault(_symbol);

		var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
		  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
		} : function (obj) {
		  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(5), __esModule: true };

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(6);
		__webpack_require__(50);
		module.exports = __webpack_require__(54).f('iterator');

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $at  = __webpack_require__(7)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(10)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(8)
		  , defined   = __webpack_require__(9);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY        = __webpack_require__(11)
		  , $export        = __webpack_require__(12)
		  , redefine       = __webpack_require__(27)
		  , hide           = __webpack_require__(17)
		  , has            = __webpack_require__(28)
		  , Iterators      = __webpack_require__(29)
		  , $iterCreate    = __webpack_require__(30)
		  , setToStringTag = __webpack_require__(46)
		  , getPrototypeOf = __webpack_require__(48)
		  , ITERATOR       = __webpack_require__(47)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';

		var returnThis = function(){ return this; };

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		module.exports = true;

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(13)
		  , core      = __webpack_require__(14)
		  , ctx       = __webpack_require__(15)
		  , hide      = __webpack_require__(17)
		  , PROTOTYPE = 'prototype';

		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library`
		module.exports = $export;

	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(16);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var dP         = __webpack_require__(18)
		  , createDesc = __webpack_require__(26);
		module.exports = __webpack_require__(22) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var anObject       = __webpack_require__(19)
		  , IE8_DOM_DEFINE = __webpack_require__(21)
		  , toPrimitive    = __webpack_require__(25)
		  , dP             = Object.defineProperty;

		exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(20);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function(){
		  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(23)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(20)
		  , document = __webpack_require__(13).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(20);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};

	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(17);

	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		module.exports = {};

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var create         = __webpack_require__(31)
		  , descriptor     = __webpack_require__(26)
		  , setToStringTag = __webpack_require__(46)
		  , IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(17)(IteratorPrototype, __webpack_require__(47)('iterator'), function(){ return this; });

		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(19)
		  , dPs         = __webpack_require__(32)
		  , enumBugKeys = __webpack_require__(44)
		  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(24)('iframe')
		    , i      = enumBugKeys.length
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(45).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write('<script>document.F=Object</script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};

		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var dP       = __webpack_require__(18)
		  , anObject = __webpack_require__(19)
		  , getKeys  = __webpack_require__(33);

		module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(34)
		  , enumBugKeys = __webpack_require__(44);

		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		var has          = __webpack_require__(28)
		  , toIObject    = __webpack_require__(35)
		  , arrayIndexOf = __webpack_require__(38)(false)
		  , IE_PROTO     = __webpack_require__(41)('IE_PROTO');

		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(36)
		  , defined = __webpack_require__(9);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(37);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports) {

		var toString = {}.toString;

		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(35)
		  , toLength  = __webpack_require__(39)
		  , toIndex   = __webpack_require__(40);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.15 ToLength
		var toInteger = __webpack_require__(8)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(8)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var shared = __webpack_require__(42)('keys')
		  , uid    = __webpack_require__(43);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(13)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 43 */
	/***/ function(module, exports) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ },
	/* 44 */
	/***/ function(module, exports) {

		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(13).document && document.documentElement;

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var def = __webpack_require__(18).f
		  , has = __webpack_require__(28)
		  , TAG = __webpack_require__(47)('toStringTag');

		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		var store      = __webpack_require__(42)('wks')
		  , uid        = __webpack_require__(43)
		  , Symbol     = __webpack_require__(13).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';

		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(28)
		  , toObject    = __webpack_require__(49)
		  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
		  , ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(9);
		module.exports = function(it){
		  return Object(defined(it));
		};

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(51);
		var global        = __webpack_require__(13)
		  , hide          = __webpack_require__(17)
		  , Iterators     = __webpack_require__(29)
		  , TO_STRING_TAG = __webpack_require__(47)('toStringTag');

		for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
		  var NAME       = collections[i]
		    , Collection = global[NAME]
		    , proto      = Collection && Collection.prototype;
		  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
		  Iterators[NAME] = Iterators.Array;
		}

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var addToUnscopables = __webpack_require__(52)
		  , step             = __webpack_require__(53)
		  , Iterators        = __webpack_require__(29)
		  , toIObject        = __webpack_require__(35);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(10)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');

	/***/ },
	/* 52 */
	/***/ function(module, exports) {

		module.exports = function(){ /* empty */ };

	/***/ },
	/* 53 */
	/***/ function(module, exports) {

		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		exports.f = __webpack_require__(47);

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(56), __esModule: true };

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(57);
		__webpack_require__(68);
		__webpack_require__(69);
		__webpack_require__(70);
		module.exports = __webpack_require__(14).Symbol;

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// ECMAScript 6 symbols shim
		var global         = __webpack_require__(13)
		  , has            = __webpack_require__(28)
		  , DESCRIPTORS    = __webpack_require__(22)
		  , $export        = __webpack_require__(12)
		  , redefine       = __webpack_require__(27)
		  , META           = __webpack_require__(58).KEY
		  , $fails         = __webpack_require__(23)
		  , shared         = __webpack_require__(42)
		  , setToStringTag = __webpack_require__(46)
		  , uid            = __webpack_require__(43)
		  , wks            = __webpack_require__(47)
		  , wksExt         = __webpack_require__(54)
		  , wksDefine      = __webpack_require__(59)
		  , keyOf          = __webpack_require__(60)
		  , enumKeys       = __webpack_require__(61)
		  , isArray        = __webpack_require__(64)
		  , anObject       = __webpack_require__(19)
		  , toIObject      = __webpack_require__(35)
		  , toPrimitive    = __webpack_require__(25)
		  , createDesc     = __webpack_require__(26)
		  , _create        = __webpack_require__(31)
		  , gOPNExt        = __webpack_require__(65)
		  , $GOPD          = __webpack_require__(67)
		  , $DP            = __webpack_require__(18)
		  , $keys          = __webpack_require__(33)
		  , gOPD           = $GOPD.f
		  , dP             = $DP.f
		  , gOPN           = gOPNExt.f
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , PROTOTYPE      = 'prototype'
		  , HIDDEN         = wks('_hidden')
		  , TO_PRIMITIVE   = wks('toPrimitive')
		  , isEnum         = {}.propertyIsEnumerable
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , OPSymbols      = shared('op-symbols')
		  , ObjectProto    = Object[PROTOTYPE]
		  , USE_NATIVE     = typeof $Symbol == 'function'
		  , QObject        = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(dP({}, 'a', {
		    get: function(){ return dP(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = gOPD(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  dP(it, key, D);
		  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
		} : dP;

		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
		  sym._k = tag;
		  return sym;
		};

		var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
		  return typeof it == 'symbol';
		} : function(it){
		  return it instanceof $Symbol;
		};

		var $defineProperty = function defineProperty(it, key, D){
		  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
		  anObject(it);
		  key = toPrimitive(key, true);
		  anObject(D);
		  if(has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return dP(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key = toPrimitive(key, true));
		  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  it  = toIObject(it);
		  key = toPrimitive(key, true);
		  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
		  var D = gOPD(it, key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = gOPN(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
		  } return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var IS_OP  = it === ObjectProto
		    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
		  } return result;
		};

		// 19.4.1.1 Symbol([description])
		if(!USE_NATIVE){
		  $Symbol = function Symbol(){
		    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
		    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
		    var $set = function(value){
		      if(this === ObjectProto)$set.call(OPSymbols, value);
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    };
		    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
		    return wrap(tag);
		  };
		  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
		    return this._k;
		  });

		  $GOPD.f = $getOwnPropertyDescriptor;
		  $DP.f   = $defineProperty;
		  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
		  __webpack_require__(63).f  = $propertyIsEnumerable;
		  __webpack_require__(62).f = $getOwnPropertySymbols;

		  if(DESCRIPTORS && !__webpack_require__(11)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }

		  wksExt.f = function(name){
		    return wrap(wks(name));
		  }
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

		for(var symbols = (
		  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
		).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

		for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

		$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    if(isSymbol(key))return keyOf(SymbolRegistry, key);
		    throw TypeError(key + ' is not a symbol!');
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		});

		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});

		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
		  stringify: function stringify(it){
		    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		    var args = [it]
		      , i    = 1
		      , replacer, $replacer;
		    while(arguments.length > i)args.push(arguments[i++]);
		    replacer = args[1];
		    if(typeof replacer == 'function')$replacer = replacer;
		    if($replacer || !isArray(replacer))replacer = function(key, value){
		      if($replacer)value = $replacer.call(this, key, value);
		      if(!isSymbol(value))return value;
		    };
		    args[1] = replacer;
		    return _stringify.apply($JSON, args);
		  }
		});

		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var META     = __webpack_require__(43)('meta')
		  , isObject = __webpack_require__(20)
		  , has      = __webpack_require__(28)
		  , setDesc  = __webpack_require__(18).f
		  , id       = 0;
		var isExtensible = Object.isExtensible || function(){
		  return true;
		};
		var FREEZE = !__webpack_require__(23)(function(){
		  return isExtensible(Object.preventExtensions({}));
		});
		var setMeta = function(it){
		  setDesc(it, META, {value: {
		    i: 'O' + ++id, // object ID
		    w: {}          // weak collections IDs
		  }});
		};
		var fastKey = function(it, create){
		  // return primitive with prefix
		  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return 'F';
		    // not necessary to add metadata
		    if(!create)return 'E';
		    // add missing metadata
		    setMeta(it);
		  // return object ID
		  } return it[META].i;
		};
		var getWeak = function(it, create){
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return true;
		    // not necessary to add metadata
		    if(!create)return false;
		    // add missing metadata
		    setMeta(it);
		  // return hash weak collections IDs
		  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		var onFreeze = function(it){
		  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
		  return it;
		};
		var meta = module.exports = {
		  KEY:      META,
		  NEED:     false,
		  fastKey:  fastKey,
		  getWeak:  getWeak,
		  onFreeze: onFreeze
		};

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		var global         = __webpack_require__(13)
		  , core           = __webpack_require__(14)
		  , LIBRARY        = __webpack_require__(11)
		  , wksExt         = __webpack_require__(54)
		  , defineProperty = __webpack_require__(18).f;
		module.exports = function(name){
		  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
		  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
		};

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var getKeys   = __webpack_require__(33)
		  , toIObject = __webpack_require__(35);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		// all enumerable object keys, includes symbols
		var getKeys = __webpack_require__(33)
		  , gOPS    = __webpack_require__(62)
		  , pIE     = __webpack_require__(63);
		module.exports = function(it){
		  var result     = getKeys(it)
		    , getSymbols = gOPS.f;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = pIE.f
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
		  } return result;
		};

	/***/ },
	/* 62 */
	/***/ function(module, exports) {

		exports.f = Object.getOwnPropertySymbols;

	/***/ },
	/* 63 */
	/***/ function(module, exports) {

		exports.f = {}.propertyIsEnumerable;

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(37);
		module.exports = Array.isArray || function isArray(arg){
		  return cof(arg) == 'Array';
		};

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(35)
		  , gOPN      = __webpack_require__(66).f
		  , toString  = {}.toString;

		var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];

		var getWindowNames = function(it){
		  try {
		    return gOPN(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};

		module.exports.f = function getOwnPropertyNames(it){
		  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};


	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		var $keys      = __webpack_require__(34)
		  , hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
		  return $keys(O, hiddenKeys);
		};

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		var pIE            = __webpack_require__(63)
		  , createDesc     = __webpack_require__(26)
		  , toIObject      = __webpack_require__(35)
		  , toPrimitive    = __webpack_require__(25)
		  , has            = __webpack_require__(28)
		  , IE8_DOM_DEFINE = __webpack_require__(21)
		  , gOPD           = Object.getOwnPropertyDescriptor;

		exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P){
		  O = toIObject(O);
		  P = toPrimitive(P, true);
		  if(IE8_DOM_DEFINE)try {
		    return gOPD(O, P);
		  } catch(e){ /* empty */ }
		  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
		};

	/***/ },
	/* 68 */
	/***/ function(module, exports) {



	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(59)('asyncIterator');

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(59)('observable');

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(72), __esModule: true };

	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		var core  = __webpack_require__(14)
		  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
		module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
		  return $JSON.stringify.apply($JSON, arguments);
		};

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _assign = __webpack_require__(74);

		var _assign2 = _interopRequireDefault(_assign);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = _assign2.default || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(75), __esModule: true };

	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(76);
		module.exports = __webpack_require__(14).Object.assign;

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.3.1 Object.assign(target, source)
		var $export = __webpack_require__(12);

		$export($export.S + $export.F, 'Object', {assign: __webpack_require__(77)});

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// 19.1.2.1 Object.assign(target, source, ...)
		var getKeys  = __webpack_require__(33)
		  , gOPS     = __webpack_require__(62)
		  , pIE      = __webpack_require__(63)
		  , toObject = __webpack_require__(49)
		  , IObject  = __webpack_require__(36)
		  , $assign  = Object.assign;

		// should work with symbols and should have deterministic property order (V8 bug)
		module.exports = !$assign || __webpack_require__(23)(function(){
		  var A = {}
		    , B = {}
		    , S = Symbol()
		    , K = 'abcdefghijklmnopqrst';
		  A[S] = 7;
		  K.split('').forEach(function(k){ B[k] = k; });
		  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
		}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
		  var T     = toObject(target)
		    , aLen  = arguments.length
		    , index = 1
		    , getSymbols = gOPS.f
		    , isEnum     = pIE.f;
		  while(aLen > index){
		    var S      = IObject(arguments[index++])
		      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
		      , length = keys.length
		      , j      = 0
		      , key;
		    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
		  } return T;
		} : $assign;

	/***/ },
	/* 78 */
	/***/ function(module, exports) {

		"use strict";

		exports.__esModule = true;

		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

	/***/ },
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(3);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
		};

	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _setPrototypeOf = __webpack_require__(81);

		var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

		var _create = __webpack_require__(85);

		var _create2 = _interopRequireDefault(_create);

		var _typeof2 = __webpack_require__(3);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
		  }

		  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
		};

	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(82), __esModule: true };

	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(83);
		module.exports = __webpack_require__(14).Object.setPrototypeOf;

	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.3.19 Object.setPrototypeOf(O, proto)
		var $export = __webpack_require__(12);
		$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(84).set});

	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var isObject = __webpack_require__(20)
		  , anObject = __webpack_require__(19);
		var check = function(O, proto){
		  anObject(O);
		  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
		};
		module.exports = {
		  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		    function(test, buggy, set){
		      try {
		        set = __webpack_require__(15)(Function.call, __webpack_require__(67).f(Object.prototype, '__proto__').set, 2);
		        set(test, []);
		        buggy = !(test instanceof Array);
		      } catch(e){ buggy = true; }
		      return function setPrototypeOf(O, proto){
		        check(O, proto);
		        if(buggy)O.__proto__ = proto;
		        else set(O, proto);
		        return O;
		      };
		    }({}, false) : undefined),
		  check: check
		};

	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(86), __esModule: true };

	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(87);
		var $Object = __webpack_require__(14).Object;
		module.exports = function create(P, D){
		  return $Object.create(P, D);
		};

	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {

		var $export = __webpack_require__(12)
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		$export($export.S, 'Object', {create: __webpack_require__(31)});

	/***/ },
	/* 88 */
	/***/ function(module, exports) {

		/*
		 * classList.js: Cross-browser full element.classList implementation.
		 * 2014-07-23
		 *
		 * By Eli Grey, http://eligrey.com
		 * Public Domain.
		 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
		 */

		/*global self, document, DOMException */

		/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

		/* Copied from MDN:
		 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
		 */

		if ("document" in window.self) {

		  // Full polyfill for browsers with no classList support
		  // Including IE < Edge missing SVGElement.classList
		  if (!("classList" in document.createElement("_"))
		    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

		  (function (view) {

		    "use strict";

		    if (!('Element' in view)) return;

		    var
		        classListProp = "classList"
		      , protoProp = "prototype"
		      , elemCtrProto = view.Element[protoProp]
		      , objCtr = Object
		      , strTrim = String[protoProp].trim || function () {
		        return this.replace(/^\s+|\s+$/g, "");
		      }
		      , arrIndexOf = Array[protoProp].indexOf || function (item) {
		        var
		            i = 0
		          , len = this.length
		        ;
		        for (; i < len; i++) {
		          if (i in this && this[i] === item) {
		            return i;
		          }
		        }
		        return -1;
		      }
		      // Vendors: please allow content code to instantiate DOMExceptions
		      , DOMEx = function (type, message) {
		        this.name = type;
		        this.code = DOMException[type];
		        this.message = message;
		      }
		      , checkTokenAndGetIndex = function (classList, token) {
		        if (token === "") {
		          throw new DOMEx(
		              "SYNTAX_ERR"
		            , "An invalid or illegal string was specified"
		          );
		        }
		        if (/\s/.test(token)) {
		          throw new DOMEx(
		              "INVALID_CHARACTER_ERR"
		            , "String contains an invalid character"
		          );
		        }
		        return arrIndexOf.call(classList, token);
		      }
		      , ClassList = function (elem) {
		        var
		            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
		          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
		          , i = 0
		          , len = classes.length
		        ;
		        for (; i < len; i++) {
		          this.push(classes[i]);
		        }
		        this._updateClassName = function () {
		          elem.setAttribute("class", this.toString());
		        };
		      }
		      , classListProto = ClassList[protoProp] = []
		      , classListGetter = function () {
		        return new ClassList(this);
		      }
		    ;
		    // Most DOMException implementations don't allow calling DOMException's toString()
		    // on non-DOMExceptions. Error's toString() is sufficient here.
		    DOMEx[protoProp] = Error[protoProp];
		    classListProto.item = function (i) {
		      return this[i] || null;
		    };
		    classListProto.contains = function (token) {
		      token += "";
		      return checkTokenAndGetIndex(this, token) !== -1;
		    };
		    classListProto.add = function () {
		      var
		          tokens = arguments
		        , i = 0
		        , l = tokens.length
		        , token
		        , updated = false
		      ;
		      do {
		        token = tokens[i] + "";
		        if (checkTokenAndGetIndex(this, token) === -1) {
		          this.push(token);
		          updated = true;
		        }
		      }
		      while (++i < l);

		      if (updated) {
		        this._updateClassName();
		      }
		    };
		    classListProto.remove = function () {
		      var
		          tokens = arguments
		        , i = 0
		        , l = tokens.length
		        , token
		        , updated = false
		        , index
		      ;
		      do {
		        token = tokens[i] + "";
		        index = checkTokenAndGetIndex(this, token);
		        while (index !== -1) {
		          this.splice(index, 1);
		          updated = true;
		          index = checkTokenAndGetIndex(this, token);
		        }
		      }
		      while (++i < l);

		      if (updated) {
		        this._updateClassName();
		      }
		    };
		    classListProto.toggle = function (token, force) {
		      token += "";

		      var
		          result = this.contains(token)
		        , method = result ?
		          force !== true && "remove"
		        :
		          force !== false && "add"
		      ;

		      if (method) {
		        this[method](token);
		      }

		      if (force === true || force === false) {
		        return force;
		      } else {
		        return !result;
		      }
		    };
		    classListProto.toString = function () {
		      return this.join(" ");
		    };

		    if (objCtr.defineProperty) {
		      var classListPropDesc = {
		          get: classListGetter
		        , enumerable: true
		        , configurable: true
		      };
		      try {
		        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		      } catch (ex) { // IE 8 doesn't support enumerable:true
		        if (ex.number === -0x7FF5EC54) {
		          classListPropDesc.enumerable = false;
		          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		        }
		      }
		    } else if (objCtr[protoProp].__defineGetter__) {
		      elemCtrProto.__defineGetter__(classListProp, classListGetter);
		    }

		    }(window.self));

		    } else {
		    // There is full or partial native classList support, so just check if we need
		    // to normalize the add/remove and toggle APIs.

		    (function () {
		      "use strict";

		      var testElement = document.createElement("_");

		      testElement.classList.add("c1", "c2");

		      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
		      // classList.remove exist but support only one argument at a time.
		      if (!testElement.classList.contains("c2")) {
		        var createMethod = function(method) {
		          var original = DOMTokenList.prototype[method];

		          DOMTokenList.prototype[method] = function(token) {
		            var i, len = arguments.length;

		            for (i = 0; i < len; i++) {
		              token = arguments[i];
		              original.call(this, token);
		            }
		          };
		        };
		        createMethod('add');
		        createMethod('remove');
		      }

		      testElement.classList.toggle("c3", false);

		      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		      // support the second argument.
		      if (testElement.classList.contains("c3")) {
		        var _toggle = DOMTokenList.prototype.toggle;

		        DOMTokenList.prototype.toggle = function(token, force) {
		          if (1 in arguments && !this.contains(token) === !force) {
		            return force;
		          } else {
		            return _toggle.call(this, token);
		          }
		        };

		      }

		      testElement = null;
		    }());
		  }
		}


	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Icons = function (_Module) {
		  (0, _inherits3.default)(Icons, _Module);

		  function Icons() {
		    (0, _classCallCheck3.default)(this, Icons);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Initial render method.
		    @private
		    @overrides @ Module
		  */

		  Icons.prototype._render = function _render() {
		    this.el = this._createElement('div');
		    this.el.innerHTML = this.getIcons();
		    this.el.setAttribute('id', this._props.prefix + 'icons');
		    this._prependChild(document.body, this.el);
		  };
		  /*
		    Method to get icons shapes.
		    @private
		  */


		  Icons.prototype.getIcons = function getIcons() {
		    var prefix = this._props.prefix;
		    return '<svg height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" style="position:absolute; margin-left: -100%; width:0; height:0;" xmlns:xlink="http://www.w3.org/1999/xlink">\n              <path id="' + prefix + 'play-icon-shape" d="M0.000549111126,31.9982154 C-0.000686388908,21.3321436 0.000549111126,10.6660718 0.000549111126,1.77635684e-15 C10.6678564,5.33118265 21.3339282,10.6648363 32,15.9984899 C21.3339282,21.3321436 10.6678564,26.6657972 0.000549111126,31.9982154 L0.000549111126,31.9982154 Z"></path>\n              <g id="' + prefix + 'pause-icon-shape">\n                <path d="M-8.8817842e-16,0 C3.55529197,-0.000248559134 7.11058393,-0.000248559134 10.6666667,0 C10.6669303,10.6669152 10.6669303,21.3330848 10.6666667,32 C7.11058393,32.0002486 3.55529197,32.0002486 -8.8817842e-16,32 L-8.8817842e-16,0 L-8.8817842e-16,0 Z"></path>\n                <path d="M21.3333333,0 C24.8894161,-0.000248559134 28.444708,-0.000248559134 32,0 L32,32 C28.444708,32.0002486 24.8894161,32.0002486 21.3333333,32 C21.3330697,21.3330848 21.3330697,10.6669152 21.3333333,0 L21.3333333,0 Z"></path>\n              </g>\n              <rect id="' + prefix + 'stop-icon-shape" x="0" y="0" width="32" height="32"></rect>\n              <path id="' + prefix + 'repeat-icon-shape" d="M9.871,1.48 C12.322,0.209 15.176,-0.247 17.906,0.137 C20.914,0.556 23.762,2.041 25.823,4.274 C27.359,5.896 28.452,7.916 29.033,10.069 C29.472,9.674 29.825,9.123 30.422,8.955 C31.003,8.779 31.696,9.094 31.909,9.67 C32.106,10.155 31.972,10.736 31.6,11.1 C30.713,12.013 29.808,12.908 28.91,13.811 C28.709,14.011 28.506,14.231 28.23,14.323 C27.772,14.498 27.224,14.379 26.881,14.03 C25.918,13.021 24.913,12.052 23.938,11.055 C23.542,10.656 23.511,9.982 23.82,9.523 C24.104,9.072 24.681,8.844 25.196,8.988 C25.679,9.098 25.966,9.536 26.31,9.852 C25.345,7.149 23.302,4.829 20.694,3.611 C18.713,2.653 16.434,2.344 14.264,2.689 C10.576,3.238 7.291,5.853 5.897,9.306 C5.697,9.872 5.1,10.301 4.488,10.184 C3.863,10.113 3.366,9.501 3.399,8.878 C3.413,8.644 3.512,8.429 3.601,8.216 C4.804,5.321 7.089,2.911 9.871,1.48 Z M3.374,12.873 C3.855,12.401 4.7,12.476 5.151,12.952 C6.038,13.863 6.935,14.765 7.839,15.659 C8.049,15.864 8.261,16.088 8.343,16.379 C8.605,17.177 7.852,18.12 7.004,17.996 C6.43,17.963 6.069,17.47 5.692,17.101 C6.657,19.849 8.766,22.168 11.406,23.395 C14.249,24.712 17.666,24.737 20.514,23.423 C22.848,22.38 24.775,20.47 25.864,18.16 C26.072,17.753 26.185,17.255 26.588,16.987 C27.062,16.635 27.776,16.687 28.195,17.101 C28.527,17.419 28.687,17.926 28.541,18.369 C27.351,21.477 24.943,24.088 21.961,25.559 C18.251,27.421 13.67,27.405 9.973,25.52 C6.545,23.823 3.931,20.588 2.96,16.892 C2.624,17.217 2.319,17.58 1.935,17.85 C1.405,18.183 0.615,18.077 0.239,17.56 C-0.143,17.042 -0.048,16.254 0.431,15.828 C1.415,14.846 2.374,13.838 3.374,12.873 Z"></path>\n              <path id="' + prefix + 'bounds-icon-shape" d="M16,6 L16,-1.13686838e-13 L18,-1.13686838e-13 L18,6 L21.9941413,6 C23.1019465,6 24,6.89821238 24,7.99079514 L24,24.0092049 C24,25.1086907 23.1029399,26 21.9941413,26 L18,26 L18,32 L16,32 L16,26 L12.0058587,26 C10.8980535,26 10,25.1017876 10,24.0092049 L10,7.99079514 C10,6.89130934 10.8970601,6 12.0058587,6 L16,6 Z"></path>\n              <path id="' + prefix + 'mojs-icon-shape" d="M18.4678907,2.67700048 C19.488586,3.25758625 20.2789227,4.18421651 20.87823,5.1973579 C24.0807788,10.501451 27.2777091,15.8113116 30.480258,21.1154047 C31.1320047,22.1612281 31.7706417,23.2647256 31.9354512,24.5162532 C32.188284,26.0619186 31.6919826,27.7363895 30.5589171,28.80336 C29.4501984,29.8857103 27.8807622,30.3182659 26.3806209,30.3048086 C19.4511293,30.3086535 12.5235106,30.3086535 5.59401901,30.3048086 C3.71556494,30.343258 1.69852104,29.5723478 0.683444165,27.8709623 C-0.406546132,26.1099803 -0.0975282643,23.7914822 0.940022637,22.0843293 C4.34296485,16.4130445 7.76650826,10.7532945 11.1825603,5.08969961 C11.9747698,3.74781595 13.1846215,2.60202418 14.6847628,2.18292584 C15.9451812,1.81573418 17.3348251,2.01182606 18.4678907,2.67700048 Z M15.3334668,9.51526849 C15.6146238,9.03779476 16.0791597,9.02250655 16.3785679,9.4929547 L25.2763555,23.4736913 C25.5723919,23.9388414 25.3568433,24.3159201 24.8074398,24.3159202 L7.62314647,24.3159205 C7.06813505,24.3159206 6.84622798,23.9286889 7.12728913,23.4513779 L15.3334668,9.51526849 Z" fill-rule="evenodd"></path>\n              <path id="' + prefix + 'hide-icon-shape" d="M18.0297509,24.5024819 C18.1157323,24.4325886 18.1989631,24.3576024 18.2790422,24.2775233 L31.0556518,11.5009137 C32.3147827,10.2417828 32.3147827,8.20347913 31.0556518,6.9443482 C29.7965209,5.68521727 27.7582172,5.68521727 26.4990863,6.9443482 L15.9992406,17.4441939 L5.50091369,6.94586705 C4.24330161,5.68825498 2.20347913,5.68673612 0.944348198,6.94586705 C-0.314782733,8.20499798 -0.314782733,10.2433016 0.944348198,11.5024325 L13.7209578,24.2790422 C14.9005165,25.4586008 16.7638781,25.5331444 18.0298642,24.5026731 L18.0297509,24.5024819 Z"></path>\n            </svg>';
		  };

		  return Icons;
		}(_module2.default);

		exports.default = Icons;

	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(3);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Base class for all modules.
		  Extends _defaults to _props
		*/

		var Module = function () {
		  /*
		    constructor method calls scaffolding methods.
		  */

		  function Module() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Module);

		    this._o = o;
		    this._index = this._o.index || 0;
		    this._declareDefaults();
		    this._extendDefaults();
		    this._vars();
		    this._render();
		  }
		  /*
		    Method to declare defaults.
		    @private
		  */


		  Module.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      className: '',
		      parent: document.body,
		      isPrepend: false,
		      isRipple: false,
		      prefix: ''
		    };
		  };
		  /*
		    Method to add pointer down even listener to el.
		    @param {Object}   HTMLElement to add event listener on.
		    @param {Function} Event listener callback.
		  */


		  Module.prototype._addPointerDownEvent = function _addPointerDownEvent(el, fn) {
		    if (window.navigator.msPointerEnabled) {
		      el.addEventListener('MSPointerDown', fn);
		    } else if (window.ontouchstart !== undefined) {
		      el.addEventListener('touchstart', fn);
		      el.addEventListener('mousedown', fn);
		    } else {
		      el.addEventListener('mousedown', fn);
		    }
		  };
		  /*
		    Method to add pointer up even listener to el.
		    @param {Object}   HTMLElement to add event listener on.
		    @param {Function} Event listener callback.
		  */


		  Module.prototype._addPointerUpEvent = function _addPointerUpEvent(el, fn) {
		    if (window.navigator.msPointerEnabled) {
		      el.addEventListener('MSPointerUp', fn);
		    } else if (window.ontouchstart !== undefined) {
		      el.addEventListener('touchend', fn);
		      el.addEventListener('mouseup', fn);
		    } else {
		      el.addEventListener('mouseup', fn);
		    }
		  };
		  /*
		    Method to check if variable holds link to a function.
		    @param {Function?} A variable to check.
		    @returns {Boolean} If passed variable is a function.
		  */


		  Module.prototype._isFunction = function _isFunction(fn) {
		    return typeof fn === 'function';
		  };
		  /*
		    Method to a function or silently fail.
		    @param {Function?} A variable to check.
		    @param {Array like} Arguments.
		  */


		  Module.prototype._callIfFunction = function _callIfFunction(fn) {
		    Array.prototype.shift.call(arguments);
		    this._isFunction(fn) && fn.apply(this, arguments);
		  };
		  /*
		    Method to declare module's variables.
		    @private
		  */


		  Module.prototype._vars = function _vars() {};
		  /*
		    Method to render on initialization.
		    @private
		  */


		  Module.prototype._render = function _render() {
		    this._addMainElement();
		  };
		  /*
		    Method to add `this.el` on the module.
		    @private
		    @param {String} Tag name of the element.
		  */


		  Module.prototype._addMainElement = function _addMainElement() {
		    var tagName = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];

		    var p = this._props;

		    this.el = this._createElement(tagName);
		    this._addMainClasses();

		    var method = p.isPrepend ? 'prepend' : 'append';
		    this['_' + method + 'Child'](p.parent, this.el);
		  };
		  /*
		    Method to classes on `this.el`.
		    @private
		  */


		  Module.prototype._addMainClasses = function _addMainClasses() {
		    var p = this._props;
		    if (p.className instanceof Array) {
		      for (var i = 0; i < p.className.length; i++) {
		        this._addClass(this.el, p.className[i]);
		      }
		    } else {
		      this._addClass(this.el, p.className);
		    }
		  };
		  /*
		    Method to add a class on el.
		    @private
		    @param {Object} HTML element to add the class on.
		    @param {String} Class name to add.
		  */


		  Module.prototype._addClass = function _addClass(el, className) {
		    className && el.classList.add(className);
		  };
		  /*
		    Method to set property on the module.
		    @private
		    @param {String, Object} Name of the property to set
		                            or object with properties to set.
		    @param {Any} Value for the property to set. Could be
		                  undefined if the first param is object.
		  */


		  Module.prototype._setProp = function _setProp(attr, value) {
		    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
		      for (var key in attr) {
		        this._assignProp(key, attr[key]);
		      }
		    } else {
		      this._assignProp(attr, value);
		    }
		  };
		  /*
		    Method to assign single property's value.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		  */


		  Module.prototype._assignProp = function _assignProp(key, value) {
		    this._props[key] = value;
		  };
		  /*
		    Method to copy `_o` options to `_props` object
		    with fallback to `_defaults`.
		    @private
		  */


		  Module.prototype._extendDefaults = function _extendDefaults() {
		    this._props = {};
		    // this._deltas = {};
		    for (var key in this._defaults) {
		      var value = this._o[key];
		      this.isIt && console.log(key);
		      // copy the properties to the _o object
		      this._assignProp(key, value != null ? value : this._defaults[key]);
		    }
		  };
		  /*
		    Method to create HTMLElement from tag name.
		    @private
		    @param {String} Name of the tag to create `HTML` element.
		    @returns {Object} HtmlElement.
		  */


		  Module.prototype._createElement = function _createElement(tagName) {
		    return document.createElement(tagName);
		  };
		  /*
		    Method to create HTMLElement and append it to the `el` with a className.
		    @private
		    @param {String} The tagname for the HTMLElement.
		    @param {String} Optional class name to add to the new child.
		    @returns {Object} The newely created HTMLElement.
		  */


		  Module.prototype._createChild = function _createChild(tagName, className) {
		    var child = this._createElement('div');
		    className && child.classList.add(className);
		    this.el.appendChild(child);
		    return child;
		  };
		  /*
		    Method to prepend child to the el.
		    @private
		    @param {Object} Parent HTMLElement.
		    @param {Object} Child HTMLElement.
		  */


		  Module.prototype._appendChild = function _appendChild(el, childEl) {
		    el.appendChild(childEl);
		  };
		  /*
		    Method to prepend child to the el.
		    @private
		    @param {Object} Parent HTMLElement.
		    @param {Object} Child HTMLElement.
		  */


		  Module.prototype._prependChild = function _prependChild(el, childEl) {
		    el.insertBefore(childEl, el.firstChild);
		  };

		  return Module;
		}();

		exports.default = Module;

	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _slider = __webpack_require__(92);

		var _slider2 = _interopRequireDefault(_slider);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(108);
		var CLASSES = __webpack_require__(110);
		var SLIDER_CLASSES = __webpack_require__(107);

		var PlayerSlider = function (_Module) {
		  (0, _inherits3.default)(PlayerSlider, _Module);

		  function PlayerSlider() {
		    (0, _classCallCheck3.default)(this, PlayerSlider);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Module
		  */

		  PlayerSlider.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      className: CLASSES['player-slider'],
		      parent: document.body,
		      progress: 0,
		      leftProgress: 0,
		      rightProgress: 1,
		      isBounds: false,
		      onLeftProgress: null,
		      onProgress: null,
		      onRightProgress: null,
		      onSeekStart: null,
		      onSeekEnd: null
		    };
		  };
		  /*
		    Method to disable bounds.
		    @public
		    @returns this.
		  */


		  PlayerSlider.prototype.disableBounds = function disableBounds() {
		    this.track.setBounds(0, 1);
		    this.rightBound.hide();
		    this.leftBound.hide();
		    return this;
		  };
		  /*
		    Method to enable bounds.
		    @public
		    @returns this.
		  */


		  PlayerSlider.prototype.enableBounds = function enableBounds() {
		    var p = this._props;
		    this.track.setBounds(p.leftProgress, p.rightProgress);
		    this.rightBound.show();
		    this.leftBound.show();
		    return this;
		  };
		  /*
		    Method to set progress of the track.
		    @public
		    @param {Number} Progress to set [0...1].
		    @returns this.
		  */


		  PlayerSlider.prototype.setTrackProgress = function setTrackProgress(p) {
		    this.track.setProgress(p);
		    return this;
		  };
		  /*
		    Method to decrease progress value.
		    @public
		    @param {Number} Value that the slider should be decreased by.
		    @returns this.
		  */


		  PlayerSlider.prototype.decreaseProgress = function decreaseProgress() {
		    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

		    var progress = this.track._progress;
		    progress -= amount;
		    progress = progress < 0 ? 0 : progress;
		    this.setTrackProgress(progress);
		    return this;
		  };
		  /*
		    Method to inclease progress value.
		    @public
		    @param {Number} Value that the slider should be increased by.
		    @returns this.
		  */


		  PlayerSlider.prototype.increaseProgress = function increaseProgress() {
		    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

		    var progress = this.track._progress;
		    progress += amount;
		    progress = progress > 1 ? 1 : progress;
		    this.setTrackProgress(progress);
		    return this;
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Module
		    @returns this
		  */


		  PlayerSlider.prototype._render = function _render() {
		    var p = this._props;

		    this._addMainElement();
		    this.el.classList.add(SLIDER_CLASSES.slider);

		    this.leftBound = new _slider2.default({
		      isBound: true,
		      parent: this.el,
		      isRipple: false,
		      onProgress: this._onLeftBoundProgress.bind(this),
		      onSeekStart: p.onSeekStart,
		      onSeekEnd: p.onSeekEnd
		    });

		    this.track = new _slider2.default({
		      parent: this.el,
		      className: CLASSES.slider,
		      onProgress: this._onTrackProgress.bind(this),
		      onSeekStart: p.onSeekStart,
		      onSeekEnd: p.onSeekEnd
		    });
		    this.rightBound = new _slider2.default({
		      isBound: true,
		      parent: this.el,
		      isRipple: false,
		      isInversed: true,
		      onProgress: this._onRightBoundProgress.bind(this),
		      onSeekStart: p.onSeekStart,
		      onSeekEnd: p.onSeekEnd
		    });

		    this.rightBound.setProgress(p.rightProgress);
		    this.track.setProgress(p.progress);
		    this.leftBound.setProgress(p.leftProgress);

		    p.parent.appendChild(this.el);
		  };
		  /*
		    Method that should be called on track update.
		    @private
		    @param {Number} Track progress value [0...1].
		  */


		  PlayerSlider.prototype._onTrackProgress = function _onTrackProgress(p) {
		    this._callIfFunction(this._props.onProgress, p);
		  };
		  /*
		    Method that should be called on left bound update.
		    @private
		    @param {Number} Track progress value [0...1].
		  */


		  PlayerSlider.prototype._onLeftBoundProgress = function _onLeftBoundProgress(p) {
		    if (!this._props.isBounds) {
		      return;
		    }
		    this._props.leftProgress = p;
		    this.track.setMinBound(p);
		    this.rightBound.setMinBound(p);
		    this._callIfFunction(this._props.onLeftProgress, p);
		  };
		  /*
		    Method that should be called on right bound update.
		    @private
		    @param {Number} Track progress value [0...1].
		  */


		  PlayerSlider.prototype._onRightBoundProgress = function _onRightBoundProgress(p) {
		    if (!this._props.isBounds) {
		      return;
		    }
		    this._props.rightProgress = p;
		    this.track.setMaxBound(p);
		    this.leftBound.setMaxBound(p);
		    this._callIfFunction(this._props.onRightProgress, p);
		  };

		  return PlayerSlider;
		}(_module2.default);

		exports.default = PlayerSlider;

	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		var _handle = __webpack_require__(93);

		var _handle2 = _interopRequireDefault(_handle);

		var _track = __webpack_require__(100);

		var _track2 = _interopRequireDefault(_track);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(105);
		var CLASSES = __webpack_require__(107);

		var Slider = function (_Module) {
		  (0, _inherits3.default)(Slider, _Module);

		  function Slider() {
		    (0, _classCallCheck3.default)(this, Slider);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Module
		  */

		  Slider.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      className: '',
		      parent: document.body,
		      isBound: false,
		      isInversed: false,
		      isRipple: true,
		      isProgress: true,
		      onProgress: null,
		      onSeekStart: null,
		      onSeekEnd: null,
		      direction: 'x',
		      snapPoint: 0,
		      snapStrength: 0
		    };
		  };
		  /*
		    Method to set slider progress.
		    @public
		    @param {Number} Progress to set.
		    @returns this.
		  */


		  Slider.prototype.setProgress = function setProgress(progress) {
		    this.handle.setProgress(progress);
		    this.track.setProgress(progress);
		    return this;
		  };
		  /*
		    Method to set bounds of progress.
		    @public
		    @param {Number} Min bound to set [0...1].
		    @param {Number} Max bound to set [0...1].
		    @returns this.
		  */


		  Slider.prototype.setBounds = function setBounds(min, max) {
		    this.handle.setBounds(min, max);
		    this.track.setBounds(min, max);
		    return this;
		  };
		  /*
		    Method to set min bound of progress.
		    @public
		    @param {Number} Min bound to set [0...1].
		    @returns this.
		  */


		  Slider.prototype.setMinBound = function setMinBound(min) {
		    this.handle.setMinBound(min);
		    this.track.setMinBound(min);
		    return this;
		  };
		  /*
		    Method to set max bound of progress.
		    @public
		    @param {Number} Max bound to set [0...1].
		    @returns this.
		  */


		  Slider.prototype.setMaxBound = function setMaxBound(max) {
		    this.handle.setMaxBound(max);
		    this.track.setMaxBound(max);
		    return this;
		  };
		  /*
		    Method to hide elements.
		    @public
		  */


		  Slider.prototype.show = function show() {
		    this.track.el.style.display = 'block';
		    this.handle.el.style.display = 'block';
		  };
		  /*
		    Method to hide elements.
		    @public
		  */


		  Slider.prototype.hide = function hide() {
		    this.track.el.style.display = 'none';
		    this.handle.el.style.display = 'none';
		  };
		  /*
		    Method to render the component.
		    @private
		    @overrides @ Module
		  */


		  Slider.prototype._render = function _render() {
		    var p = this._props;

		    if (!p.isBound) {
		      var el = this._createElement('div'),
		          classList = el.classList;
		      this.el = el;

		      this.inner = this._createElement('div');
		      this.inner.classList.add(CLASSES['slider__inner']);
		      this.el.appendChild(this.inner);

		      classList.add(CLASSES.slider);
		      p.direction === 'y' && classList.add(CLASSES['is-y']);
		      p.className && classList.add(p.className);
		      p.parent.appendChild(el);
		    }

		    var rootEl = !p.isBound ? this.inner : p.parent;

		    this.track = new _track2.default({
		      className: CLASSES.track,
		      onProgress: this._onTrackProgress.bind(this),
		      onSeekStart: p.onSeekStart,
		      onSeekEnd: p.onSeekEnd,
		      isBound: p.isBound,
		      isInversed: p.isInversed,
		      isRipple: p.isRipple,
		      isProgress: p.isProgress,
		      parent: rootEl,
		      direction: p.direction,
		      snapPoint: p.snapPoint,
		      snapStrength: p.snapStrength
		    });
		    rootEl.appendChild(this.track.el);

		    var handleClass = [CLASSES.handle];
		    if (!p.isBound) {
		      handleClass.push(CLASSES['progress-handle']);
		    }

		    this.handle = new _handle2.default({
		      className: handleClass,
		      onProgress: this._onHandleProgress.bind(this),
		      onSeekStart: p.onSeekStart,
		      onSeekEnd: p.onSeekEnd,
		      isBound: p.isBound,
		      isInversed: p.isInversed,
		      parent: rootEl,
		      direction: p.direction,
		      snapPoint: p.snapPoint,
		      snapStrength: p.snapStrength
		    });
		    rootEl.appendChild(this.handle.el);
		  };
		  /*
		    Method that is invoked on handle progress change.
		    @private
		    @param {Number} Progress [0...1].
		  */


		  Slider.prototype._onHandleProgress = function _onHandleProgress(p) {
		    this.track.setProgress(p, false);
		    this._onProgress(p);
		  };
		  /*
		    Method that is invoked on track progress change.
		    @private
		    @param {Number} Progress [0...1].
		  */


		  Slider.prototype._onTrackProgress = function _onTrackProgress(p) {
		    this.handle.setProgress(p, false);
		    this._onProgress(p);
		  };
		  /*
		    Method to call onProgress callback.
		    @private
		    @param {Number} Progress value [0...1].
		  */


		  Slider.prototype._onProgress = function _onProgress(progress) {
		    var p = this._props;
		    if (typeof p.onProgress === 'function' && this._progress !== progress) {
		      this._progress = progress;
		      p.onProgress.call(this, progress);
		    }
		  };

		  return Slider;
		}(_module2.default);

		exports.default = Slider;

	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		var _hammerjs = __webpack_require__(94);

		var _hammerjs2 = _interopRequireDefault(_hammerjs);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(95);
		var CLASSES = __webpack_require__(99);

		var Handle = function (_Module) {
		  (0, _inherits3.default)(Handle, _Module);

		  function Handle() {
		    (0, _classCallCheck3.default)(this, Handle);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Module
		  */

		  Handle.prototype._declareDefaults = function _declareDefaults() {
		    _Module.prototype._declareDefaults.call(this);
		    this._defaults.minBound = 0;
		    this._defaults.maxBound = 1;
		    this._defaults.isBound = false;
		    this._defaults.isInversed = false;
		    this._defaults.direction = 'x';
		    this._defaults.onSeekStart = null;
		    this._defaults.onSeekEnd = null;
		    this._defaults.onProgress = null;
		    this._defaults.snapPoint = 0;
		    this._defaults.snapStrength = 0;
		  };
		  /*
		    Method to set handle progress.
		    @public
		    @param {Number} Progress [0...1].
		    @param {Boolean} If should invoke onProgress callback.
		    @returns this.
		  */


		  Handle.prototype.setProgress = function setProgress(progress) {
		    var isCallback = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    var shift = this._progressToShift(progress);
		    this._setShift(shift, isCallback);
		    // calc delta and save it
		    this._delta = shift - this._shift;
		    this._saveDelta();
		    return this;
		  };
		  /*
		    Method to set bounds of progress.
		    @public
		    @param {Number} Min bound to set [0...1].
		    @param {Number} Max bound to set [0...1].
		    @returns this.
		  */


		  Handle.prototype.setBounds = function setBounds(min, max) {
		    this.setMinBound(min);
		    this.setMaxBound(max);
		    return this;
		  };
		  /*
		    Method to set min bound of progress.
		    @public
		    @param {Number} Min bound to set [0...1].
		    @returns this.
		  */


		  Handle.prototype.setMinBound = function setMinBound(min) {
		    this._props.minBound = Math.max(min, 0);
		    if (this._progress < min) {
		      this.setProgress(min);
		    }
		    return this;
		  };
		  /*
		    Method to set max bound of progress.
		    @public
		    @param {Number} Max bound to set [0...1].
		    @returns this.
		  */


		  Handle.prototype.setMaxBound = function setMaxBound(max) {
		    this._props.maxBound = Math.min(max, 1);
		    if (this._progress > max) {
		      this.setProgress(max);
		    }
		    return this;
		  };
		  /*
		    Method to declare properties.
		    @private
		    @overrides @ Module.
		  */


		  Handle.prototype._vars = function _vars() {
		    // `progress` of the handle [0..1]
		    this._progress = 0;
		    // `shift` of the handle ( position in `px` )
		    this._shift = 0;
		    // `delta` deviation from the current `shift`
		    this._delta = 0;
		  };
		  /*
		    Method to set handle shift.
		    @private
		    @param {Number} Shift in `px`.
		    @param {Boolean} If should invoke onProgress callback.
		    @returns {Number}.
		  */


		  Handle.prototype._setShift = function _setShift(shift) {
		    var isCallback = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    var p = this._props,
		        minBound = p.minBound * this._maxWidth,
		        maxBound = p.maxBound * this._maxWidth;

		    shift = mojs.h.clamp(shift, minBound, maxBound);
		    this._applyShift(shift);
		    if (isCallback) {
		      this._onProgress(shift);
		    } else {
		      this._progress = this._shiftToProgress(shift);
		    }
		    return shift;
		  };
		  /*
		    Method to apply shift to the DOMElement.
		    @private
		    @param {Number} Shift in pixels.
		  */


		  Handle.prototype._applyShift = function _applyShift(shift) {
		    var p = this._props;
		    // translateZ(0)
		    this.el.style.transform = p.direction === 'x' ? 'translateX( ' + shift + 'px )' : 'translateY( ' + -shift + 'px )';
		  };
		  /*
		    Method to get max width of the parent.
		    @private
		  */


		  Handle.prototype._getMaxWidth = function _getMaxWidth() {
		    var p = this._props,
		        parent = p.parent;

		    this._maxWidth = p.direction === 'x' ? parent.clientWidth : parent.clientHeight;
		  };
		  /*
		    Method to render the component.
		    @private
		    @overrides @ Module
		  */


		  Handle.prototype._render = function _render() {
		    _Module.prototype._render.call(this);
		    this._addElements();
		    this._getMaxWidth();
		    this._hammerTime();
		  };
		  /*
		    Method to classes on `this.el`.
		    @private
		    @overrides @ Module
		  */


		  Handle.prototype._addMainClasses = function _addMainClasses() {
		    _Module.prototype._addMainClasses.call(this);

		    var p = this._props,
		        classList = this.el.classList;

		    classList.add(CLASSES.handle);
		    if (p.isBound) {
		      classList.add(CLASSES['is-bound']);
		    }
		    if (p.isInversed) {
		      classList.add(CLASSES['is-inversed']);
		    }
		  };
		  /*
		    Method to add DOM elements on render.
		    @private
		  */


		  Handle.prototype._addElements = function _addElements() {
		    var inner = this._createElement('div'),
		        shadow = this._createElement('div');

		    inner.classList.add('' + CLASSES.handle__inner);
		    shadow.classList.add('' + CLASSES.handle__shadow);
		    this.el.appendChild(shadow);
		    this.el.appendChild(inner);
		  };
		  /*
		    Method to initialize HammerJS an set up all even listeners.
		    @private
		  */


		  Handle.prototype._hammerTime = function _hammerTime() {
		    var p = this._props,
		        direction = p.direction === 'x' ? 'HORIZONTAL' : 'VERTICAL',
		        hm = new _hammerjs2.default.Manager(this.el, {
		      recognizers: [[_hammerjs2.default.Pan, { direction: _hammerjs2.default['DIRECTION_' + direction] }]]
		    });

		    hm.on('pan', this._pan.bind(this));
		    hm.on('panend', this._panEnd.bind(this));
		    this._addPointerDownEvent(this.el, this._pointerDown.bind(this));
		    this._addPointerUpEvent(this.el, this._pointerUp.bind(this));
		    // add listener on document to cover edge cases
		    // like when you press -> leave the element -> release
		    this._addPointerUpEvent(document, this._pointerUpDoc.bind(this));

		    window.addEventListener('resize', this._onWindowResize.bind(this));
		  };
		  /*
		    Callback for pan end on main el.
		    @private
		    @param {Object} Original event object.
		  */


		  Handle.prototype._pan = function _pan(e) {
		    var p = this._props;
		    this._delta = p.direction === 'x' ? e.deltaX : -e.deltaY;
		    // get progress from the shift to undestand how far is the snapPoint
		    var shift = this._shift + this._delta,
		        proc = this._shiftToProgress(shift);
		    // if progress is around snapPoint set it to the snap point
		    proc = Math.abs(proc - p.snapPoint) < p.snapStrength ? p.snapPoint : proc;
		    // recalculate the progress to shift and set it
		    this._setShift(this._progressToShift(proc));
		  };
		  /*
		    Callback for pan end on main el.
		    @private
		    @param {Object} Original event object.
		  */


		  Handle.prototype._panEnd = function _panEnd(e) {
		    this._saveDelta();
		    this._callIfFunction(this._props.onSeekEnd, e);
		  };
		  /*
		    Callback for pointer down on main el.
		    @private
		    @param {Object} Original event object.
		  */


		  Handle.prototype._pointerDown = function _pointerDown(e) {
		    var p = this._props;
		    this._isPointerDown = true;
		    this._callIfFunction(p.onSeekStart, e);
		  };
		  /*
		    Callback for pointer up on main el.
		    @private
		    @param {Object} Original event object.
		  */


		  Handle.prototype._pointerUp = function _pointerUp(e) {
		    this._callIfFunction(this._props.onSeekEnd, e);
		    e.preventDefault();
		    return false;
		  };
		  /*
		    Callback for pointer up on document.
		    @private
		    @param {Object} Original event object.
		  */


		  Handle.prototype._pointerUpDoc = function _pointerUpDoc(e) {
		    if (!this._isPointerDown) {
		      return;
		    }
		    this._callIfFunction(this._props.onSeekEnd, e);
		    this._isPointerDown = false;
		  };
		  /*
		    Method to add _delta to _shift.
		    @private
		  */


		  Handle.prototype._saveDelta = function _saveDelta() {
		    this._shift += this._delta;
		  };
		  /*
		    Method to call onProgress callback.
		    @private
		    @param {Number} Shift in `px`.
		  */


		  Handle.prototype._onProgress = function _onProgress(shift) {
		    var p = this._props,
		        progress = this._shiftToProgress(shift);

		    if (this._progress !== progress) {
		      this._progress = progress;
		      if (this._isFunction(p.onProgress)) {
		        p.onProgress.call(this, progress);
		      }
		    }
		  };
		  /*
		    Method to recalc shift to progress.
		    @private
		    @param {Number} Shift in `px`.
		    @returns {Number} Progress [0...1].
		  */


		  Handle.prototype._shiftToProgress = function _shiftToProgress(shift) {
		    return shift / this._maxWidth;
		  };
		  /*
		    Method to progress shift to shift.
		    @private
		    @param   {Number} Progress [0...1].
		    @returns {Number} Shift in `px`.
		   */


		  Handle.prototype._progressToShift = function _progressToShift(progress) {
		    return progress * this._maxWidth;
		  };
		  /*
		    Callback for window resize event.
		    @private
		    @param {Object} Original event object.
		  */


		  Handle.prototype._onWindowResize = function _onWindowResize(e) {
		    this._getMaxWidth();
		    this.setProgress(this._progress);
		  };

		  return Handle;
		}(_module2.default);

		exports.default = Handle;

	/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
		 * http://hammerjs.github.io/
		 *
		 * Copyright (c) 2016 Jorik Tangelder;
		 * Licensed under the MIT license */
		(function(window, document, exportName, undefined) {
		  'use strict';

		var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
		var TEST_ELEMENT = document.createElement('div');

		var TYPE_FUNCTION = 'function';

		var round = Math.round;
		var abs = Math.abs;
		var now = Date.now;

		/**
		 * set a timeout with a given scope
		 * @param {Function} fn
		 * @param {Number} timeout
		 * @param {Object} context
		 * @returns {number}
		 */
		function setTimeoutContext(fn, timeout, context) {
		    return setTimeout(bindFn(fn, context), timeout);
		}

		/**
		 * if the argument is an array, we want to execute the fn on each entry
		 * if it aint an array we don't want to do a thing.
		 * this is used by all the methods that accept a single and array argument.
		 * @param {*|Array} arg
		 * @param {String} fn
		 * @param {Object} [context]
		 * @returns {Boolean}
		 */
		function invokeArrayArg(arg, fn, context) {
		    if (Array.isArray(arg)) {
		        each(arg, context[fn], context);
		        return true;
		    }
		    return false;
		}

		/**
		 * walk objects and arrays
		 * @param {Object} obj
		 * @param {Function} iterator
		 * @param {Object} context
		 */
		function each(obj, iterator, context) {
		    var i;

		    if (!obj) {
		        return;
		    }

		    if (obj.forEach) {
		        obj.forEach(iterator, context);
		    } else if (obj.length !== undefined) {
		        i = 0;
		        while (i < obj.length) {
		            iterator.call(context, obj[i], i, obj);
		            i++;
		        }
		    } else {
		        for (i in obj) {
		            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
		        }
		    }
		}

		/**
		 * wrap a method with a deprecation warning and stack trace
		 * @param {Function} method
		 * @param {String} name
		 * @param {String} message
		 * @returns {Function} A new function wrapping the supplied method.
		 */
		function deprecate(method, name, message) {
		    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
		    return function() {
		        var e = new Error('get-stack-trace');
		        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
		            .replace(/^\s+at\s+/gm, '')
		            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

		        var log = window.console && (window.console.warn || window.console.log);
		        if (log) {
		            log.call(window.console, deprecationMessage, stack);
		        }
		        return method.apply(this, arguments);
		    };
		}

		/**
		 * extend object.
		 * means that properties in dest will be overwritten by the ones in src.
		 * @param {Object} target
		 * @param {...Object} objects_to_assign
		 * @returns {Object} target
		 */
		var assign;
		if (typeof Object.assign !== 'function') {
		    assign = function assign(target) {
		        if (target === undefined || target === null) {
		            throw new TypeError('Cannot convert undefined or null to object');
		        }

		        var output = Object(target);
		        for (var index = 1; index < arguments.length; index++) {
		            var source = arguments[index];
		            if (source !== undefined && source !== null) {
		                for (var nextKey in source) {
		                    if (source.hasOwnProperty(nextKey)) {
		                        output[nextKey] = source[nextKey];
		                    }
		                }
		            }
		        }
		        return output;
		    };
		} else {
		    assign = Object.assign;
		}

		/**
		 * extend object.
		 * means that properties in dest will be overwritten by the ones in src.
		 * @param {Object} dest
		 * @param {Object} src
		 * @param {Boolean} [merge=false]
		 * @returns {Object} dest
		 */
		var extend = deprecate(function extend(dest, src, merge) {
		    var keys = Object.keys(src);
		    var i = 0;
		    while (i < keys.length) {
		        if (!merge || (merge && dest[keys[i]] === undefined)) {
		            dest[keys[i]] = src[keys[i]];
		        }
		        i++;
		    }
		    return dest;
		}, 'extend', 'Use `assign`.');

		/**
		 * merge the values from src in the dest.
		 * means that properties that exist in dest will not be overwritten by src
		 * @param {Object} dest
		 * @param {Object} src
		 * @returns {Object} dest
		 */
		var merge = deprecate(function merge(dest, src) {
		    return extend(dest, src, true);
		}, 'merge', 'Use `assign`.');

		/**
		 * simple class inheritance
		 * @param {Function} child
		 * @param {Function} base
		 * @param {Object} [properties]
		 */
		function inherit(child, base, properties) {
		    var baseP = base.prototype,
		        childP;

		    childP = child.prototype = Object.create(baseP);
		    childP.constructor = child;
		    childP._super = baseP;

		    if (properties) {
		        assign(childP, properties);
		    }
		}

		/**
		 * simple function bind
		 * @param {Function} fn
		 * @param {Object} context
		 * @returns {Function}
		 */
		function bindFn(fn, context) {
		    return function boundFn() {
		        return fn.apply(context, arguments);
		    };
		}

		/**
		 * let a boolean value also be a function that must return a boolean
		 * this first item in args will be used as the context
		 * @param {Boolean|Function} val
		 * @param {Array} [args]
		 * @returns {Boolean}
		 */
		function boolOrFn(val, args) {
		    if (typeof val == TYPE_FUNCTION) {
		        return val.apply(args ? args[0] || undefined : undefined, args);
		    }
		    return val;
		}

		/**
		 * use the val2 when val1 is undefined
		 * @param {*} val1
		 * @param {*} val2
		 * @returns {*}
		 */
		function ifUndefined(val1, val2) {
		    return (val1 === undefined) ? val2 : val1;
		}

		/**
		 * addEventListener with multiple events at once
		 * @param {EventTarget} target
		 * @param {String} types
		 * @param {Function} handler
		 */
		function addEventListeners(target, types, handler) {
		    each(splitStr(types), function(type) {
		        target.addEventListener(type, handler, false);
		    });
		}

		/**
		 * removeEventListener with multiple events at once
		 * @param {EventTarget} target
		 * @param {String} types
		 * @param {Function} handler
		 */
		function removeEventListeners(target, types, handler) {
		    each(splitStr(types), function(type) {
		        target.removeEventListener(type, handler, false);
		    });
		}

		/**
		 * find if a node is in the given parent
		 * @method hasParent
		 * @param {HTMLElement} node
		 * @param {HTMLElement} parent
		 * @return {Boolean} found
		 */
		function hasParent(node, parent) {
		    while (node) {
		        if (node == parent) {
		            return true;
		        }
		        node = node.parentNode;
		    }
		    return false;
		}

		/**
		 * small indexOf wrapper
		 * @param {String} str
		 * @param {String} find
		 * @returns {Boolean} found
		 */
		function inStr(str, find) {
		    return str.indexOf(find) > -1;
		}

		/**
		 * split string on whitespace
		 * @param {String} str
		 * @returns {Array} words
		 */
		function splitStr(str) {
		    return str.trim().split(/\s+/g);
		}

		/**
		 * find if a array contains the object using indexOf or a simple polyFill
		 * @param {Array} src
		 * @param {String} find
		 * @param {String} [findByKey]
		 * @return {Boolean|Number} false when not found, or the index
		 */
		function inArray(src, find, findByKey) {
		    if (src.indexOf && !findByKey) {
		        return src.indexOf(find);
		    } else {
		        var i = 0;
		        while (i < src.length) {
		            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
		                return i;
		            }
		            i++;
		        }
		        return -1;
		    }
		}

		/**
		 * convert array-like objects to real arrays
		 * @param {Object} obj
		 * @returns {Array}
		 */
		function toArray(obj) {
		    return Array.prototype.slice.call(obj, 0);
		}

		/**
		 * unique array with objects based on a key (like 'id') or just by the array's value
		 * @param {Array} src [{id:1},{id:2},{id:1}]
		 * @param {String} [key]
		 * @param {Boolean} [sort=False]
		 * @returns {Array} [{id:1},{id:2}]
		 */
		function uniqueArray(src, key, sort) {
		    var results = [];
		    var values = [];
		    var i = 0;

		    while (i < src.length) {
		        var val = key ? src[i][key] : src[i];
		        if (inArray(values, val) < 0) {
		            results.push(src[i]);
		        }
		        values[i] = val;
		        i++;
		    }

		    if (sort) {
		        if (!key) {
		            results = results.sort();
		        } else {
		            results = results.sort(function sortUniqueArray(a, b) {
		                return a[key] > b[key];
		            });
		        }
		    }

		    return results;
		}

		/**
		 * get the prefixed property
		 * @param {Object} obj
		 * @param {String} property
		 * @returns {String|Undefined} prefixed
		 */
		function prefixed(obj, property) {
		    var prefix, prop;
		    var camelProp = property[0].toUpperCase() + property.slice(1);

		    var i = 0;
		    while (i < VENDOR_PREFIXES.length) {
		        prefix = VENDOR_PREFIXES[i];
		        prop = (prefix) ? prefix + camelProp : property;

		        if (prop in obj) {
		            return prop;
		        }
		        i++;
		    }
		    return undefined;
		}

		/**
		 * get a unique id
		 * @returns {number} uniqueId
		 */
		var _uniqueId = 1;
		function uniqueId() {
		    return _uniqueId++;
		}

		/**
		 * get the window object of an element
		 * @param {HTMLElement} element
		 * @returns {DocumentView|Window}
		 */
		function getWindowForElement(element) {
		    var doc = element.ownerDocument || element;
		    return (doc.defaultView || doc.parentWindow || window);
		}

		var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

		var SUPPORT_TOUCH = ('ontouchstart' in window);
		var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
		var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

		var INPUT_TYPE_TOUCH = 'touch';
		var INPUT_TYPE_PEN = 'pen';
		var INPUT_TYPE_MOUSE = 'mouse';
		var INPUT_TYPE_KINECT = 'kinect';

		var COMPUTE_INTERVAL = 25;

		var INPUT_START = 1;
		var INPUT_MOVE = 2;
		var INPUT_END = 4;
		var INPUT_CANCEL = 8;

		var DIRECTION_NONE = 1;
		var DIRECTION_LEFT = 2;
		var DIRECTION_RIGHT = 4;
		var DIRECTION_UP = 8;
		var DIRECTION_DOWN = 16;

		var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
		var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
		var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

		var PROPS_XY = ['x', 'y'];
		var PROPS_CLIENT_XY = ['clientX', 'clientY'];

		/**
		 * create new input type manager
		 * @param {Manager} manager
		 * @param {Function} callback
		 * @returns {Input}
		 * @constructor
		 */
		function Input(manager, callback) {
		    var self = this;
		    this.manager = manager;
		    this.callback = callback;
		    this.element = manager.element;
		    this.target = manager.options.inputTarget;

		    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
		    // so when disabled the input events are completely bypassed.
		    this.domHandler = function(ev) {
		        if (boolOrFn(manager.options.enable, [manager])) {
		            self.handler(ev);
		        }
		    };

		    this.init();

		}

		Input.prototype = {
		    /**
		     * should handle the inputEvent data and trigger the callback
		     * @virtual
		     */
		    handler: function() { },

		    /**
		     * bind the events
		     */
		    init: function() {
		        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
		        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
		        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
		    },

		    /**
		     * unbind the events
		     */
		    destroy: function() {
		        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
		        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
		        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
		    }
		};

		/**
		 * create new input type manager
		 * called by the Manager constructor
		 * @param {Hammer} manager
		 * @returns {Input}
		 */
		function createInputInstance(manager) {
		    var Type;
		    var inputClass = manager.options.inputClass;

		    if (inputClass) {
		        Type = inputClass;
		    } else if (SUPPORT_POINTER_EVENTS) {
		        Type = PointerEventInput;
		    } else if (SUPPORT_ONLY_TOUCH) {
		        Type = TouchInput;
		    } else if (!SUPPORT_TOUCH) {
		        Type = MouseInput;
		    } else {
		        Type = TouchMouseInput;
		    }
		    return new (Type)(manager, inputHandler);
		}

		/**
		 * handle input events
		 * @param {Manager} manager
		 * @param {String} eventType
		 * @param {Object} input
		 */
		function inputHandler(manager, eventType, input) {
		    var pointersLen = input.pointers.length;
		    var changedPointersLen = input.changedPointers.length;
		    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
		    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

		    input.isFirst = !!isFirst;
		    input.isFinal = !!isFinal;

		    if (isFirst) {
		        manager.session = {};
		    }

		    // source event is the normalized value of the domEvents
		    // like 'touchstart, mouseup, pointerdown'
		    input.eventType = eventType;

		    // compute scale, rotation etc
		    computeInputData(manager, input);

		    // emit secret event
		    manager.emit('hammer.input', input);

		    manager.recognize(input);
		    manager.session.prevInput = input;
		}

		/**
		 * extend the data with some usable properties like scale, rotate, velocity etc
		 * @param {Object} manager
		 * @param {Object} input
		 */
		function computeInputData(manager, input) {
		    var session = manager.session;
		    var pointers = input.pointers;
		    var pointersLength = pointers.length;

		    // store the first input to calculate the distance and direction
		    if (!session.firstInput) {
		        session.firstInput = simpleCloneInputData(input);
		    }

		    // to compute scale and rotation we need to store the multiple touches
		    if (pointersLength > 1 && !session.firstMultiple) {
		        session.firstMultiple = simpleCloneInputData(input);
		    } else if (pointersLength === 1) {
		        session.firstMultiple = false;
		    }

		    var firstInput = session.firstInput;
		    var firstMultiple = session.firstMultiple;
		    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

		    var center = input.center = getCenter(pointers);
		    input.timeStamp = now();
		    input.deltaTime = input.timeStamp - firstInput.timeStamp;

		    input.angle = getAngle(offsetCenter, center);
		    input.distance = getDistance(offsetCenter, center);

		    computeDeltaXY(session, input);
		    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

		    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
		    input.overallVelocityX = overallVelocity.x;
		    input.overallVelocityY = overallVelocity.y;
		    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

		    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
		    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

		    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
		        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

		    computeIntervalInputData(session, input);

		    // find the correct target
		    var target = manager.element;
		    if (hasParent(input.srcEvent.target, target)) {
		        target = input.srcEvent.target;
		    }
		    input.target = target;
		}

		function computeDeltaXY(session, input) {
		    var center = input.center;
		    var offset = session.offsetDelta || {};
		    var prevDelta = session.prevDelta || {};
		    var prevInput = session.prevInput || {};

		    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
		        prevDelta = session.prevDelta = {
		            x: prevInput.deltaX || 0,
		            y: prevInput.deltaY || 0
		        };

		        offset = session.offsetDelta = {
		            x: center.x,
		            y: center.y
		        };
		    }

		    input.deltaX = prevDelta.x + (center.x - offset.x);
		    input.deltaY = prevDelta.y + (center.y - offset.y);
		}

		/**
		 * velocity is calculated every x ms
		 * @param {Object} session
		 * @param {Object} input
		 */
		function computeIntervalInputData(session, input) {
		    var last = session.lastInterval || input,
		        deltaTime = input.timeStamp - last.timeStamp,
		        velocity, velocityX, velocityY, direction;

		    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
		        var deltaX = input.deltaX - last.deltaX;
		        var deltaY = input.deltaY - last.deltaY;

		        var v = getVelocity(deltaTime, deltaX, deltaY);
		        velocityX = v.x;
		        velocityY = v.y;
		        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
		        direction = getDirection(deltaX, deltaY);

		        session.lastInterval = input;
		    } else {
		        // use latest velocity info if it doesn't overtake a minimum period
		        velocity = last.velocity;
		        velocityX = last.velocityX;
		        velocityY = last.velocityY;
		        direction = last.direction;
		    }

		    input.velocity = velocity;
		    input.velocityX = velocityX;
		    input.velocityY = velocityY;
		    input.direction = direction;
		}

		/**
		 * create a simple clone from the input used for storage of firstInput and firstMultiple
		 * @param {Object} input
		 * @returns {Object} clonedInputData
		 */
		function simpleCloneInputData(input) {
		    // make a simple copy of the pointers because we will get a reference if we don't
		    // we only need clientXY for the calculations
		    var pointers = [];
		    var i = 0;
		    while (i < input.pointers.length) {
		        pointers[i] = {
		            clientX: round(input.pointers[i].clientX),
		            clientY: round(input.pointers[i].clientY)
		        };
		        i++;
		    }

		    return {
		        timeStamp: now(),
		        pointers: pointers,
		        center: getCenter(pointers),
		        deltaX: input.deltaX,
		        deltaY: input.deltaY
		    };
		}

		/**
		 * get the center of all the pointers
		 * @param {Array} pointers
		 * @return {Object} center contains `x` and `y` properties
		 */
		function getCenter(pointers) {
		    var pointersLength = pointers.length;

		    // no need to loop when only one touch
		    if (pointersLength === 1) {
		        return {
		            x: round(pointers[0].clientX),
		            y: round(pointers[0].clientY)
		        };
		    }

		    var x = 0, y = 0, i = 0;
		    while (i < pointersLength) {
		        x += pointers[i].clientX;
		        y += pointers[i].clientY;
		        i++;
		    }

		    return {
		        x: round(x / pointersLength),
		        y: round(y / pointersLength)
		    };
		}

		/**
		 * calculate the velocity between two points. unit is in px per ms.
		 * @param {Number} deltaTime
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Object} velocity `x` and `y`
		 */
		function getVelocity(deltaTime, x, y) {
		    return {
		        x: x / deltaTime || 0,
		        y: y / deltaTime || 0
		    };
		}

		/**
		 * get the direction between two points
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Number} direction
		 */
		function getDirection(x, y) {
		    if (x === y) {
		        return DIRECTION_NONE;
		    }

		    if (abs(x) >= abs(y)) {
		        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
		    }
		    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
		}

		/**
		 * calculate the absolute distance between two points
		 * @param {Object} p1 {x, y}
		 * @param {Object} p2 {x, y}
		 * @param {Array} [props] containing x and y keys
		 * @return {Number} distance
		 */
		function getDistance(p1, p2, props) {
		    if (!props) {
		        props = PROPS_XY;
		    }
		    var x = p2[props[0]] - p1[props[0]],
		        y = p2[props[1]] - p1[props[1]];

		    return Math.sqrt((x * x) + (y * y));
		}

		/**
		 * calculate the angle between two coordinates
		 * @param {Object} p1
		 * @param {Object} p2
		 * @param {Array} [props] containing x and y keys
		 * @return {Number} angle
		 */
		function getAngle(p1, p2, props) {
		    if (!props) {
		        props = PROPS_XY;
		    }
		    var x = p2[props[0]] - p1[props[0]],
		        y = p2[props[1]] - p1[props[1]];
		    return Math.atan2(y, x) * 180 / Math.PI;
		}

		/**
		 * calculate the rotation degrees between two pointersets
		 * @param {Array} start array of pointers
		 * @param {Array} end array of pointers
		 * @return {Number} rotation
		 */
		function getRotation(start, end) {
		    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
		}

		/**
		 * calculate the scale factor between two pointersets
		 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
		 * @param {Array} start array of pointers
		 * @param {Array} end array of pointers
		 * @return {Number} scale
		 */
		function getScale(start, end) {
		    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
		}

		var MOUSE_INPUT_MAP = {
		    mousedown: INPUT_START,
		    mousemove: INPUT_MOVE,
		    mouseup: INPUT_END
		};

		var MOUSE_ELEMENT_EVENTS = 'mousedown';
		var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

		/**
		 * Mouse events input
		 * @constructor
		 * @extends Input
		 */
		function MouseInput() {
		    this.evEl = MOUSE_ELEMENT_EVENTS;
		    this.evWin = MOUSE_WINDOW_EVENTS;

		    this.pressed = false; // mousedown state

		    Input.apply(this, arguments);
		}

		inherit(MouseInput, Input, {
		    /**
		     * handle mouse events
		     * @param {Object} ev
		     */
		    handler: function MEhandler(ev) {
		        var eventType = MOUSE_INPUT_MAP[ev.type];

		        // on start we want to have the left mouse button down
		        if (eventType & INPUT_START && ev.button === 0) {
		            this.pressed = true;
		        }

		        if (eventType & INPUT_MOVE && ev.which !== 1) {
		            eventType = INPUT_END;
		        }

		        // mouse must be down
		        if (!this.pressed) {
		            return;
		        }

		        if (eventType & INPUT_END) {
		            this.pressed = false;
		        }

		        this.callback(this.manager, eventType, {
		            pointers: [ev],
		            changedPointers: [ev],
		            pointerType: INPUT_TYPE_MOUSE,
		            srcEvent: ev
		        });
		    }
		});

		var POINTER_INPUT_MAP = {
		    pointerdown: INPUT_START,
		    pointermove: INPUT_MOVE,
		    pointerup: INPUT_END,
		    pointercancel: INPUT_CANCEL,
		    pointerout: INPUT_CANCEL
		};

		// in IE10 the pointer types is defined as an enum
		var IE10_POINTER_TYPE_ENUM = {
		    2: INPUT_TYPE_TOUCH,
		    3: INPUT_TYPE_PEN,
		    4: INPUT_TYPE_MOUSE,
		    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
		};

		var POINTER_ELEMENT_EVENTS = 'pointerdown';
		var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

		// IE10 has prefixed support, and case-sensitive
		if (window.MSPointerEvent && !window.PointerEvent) {
		    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
		    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
		}

		/**
		 * Pointer events input
		 * @constructor
		 * @extends Input
		 */
		function PointerEventInput() {
		    this.evEl = POINTER_ELEMENT_EVENTS;
		    this.evWin = POINTER_WINDOW_EVENTS;

		    Input.apply(this, arguments);

		    this.store = (this.manager.session.pointerEvents = []);
		}

		inherit(PointerEventInput, Input, {
		    /**
		     * handle mouse events
		     * @param {Object} ev
		     */
		    handler: function PEhandler(ev) {
		        var store = this.store;
		        var removePointer = false;

		        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
		        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
		        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

		        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

		        // get index of the event in the store
		        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

		        // start and mouse must be down
		        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
		            if (storeIndex < 0) {
		                store.push(ev);
		                storeIndex = store.length - 1;
		            }
		        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
		            removePointer = true;
		        }

		        // it not found, so the pointer hasn't been down (so it's probably a hover)
		        if (storeIndex < 0) {
		            return;
		        }

		        // update the event in the store
		        store[storeIndex] = ev;

		        this.callback(this.manager, eventType, {
		            pointers: store,
		            changedPointers: [ev],
		            pointerType: pointerType,
		            srcEvent: ev
		        });

		        if (removePointer) {
		            // remove from the store
		            store.splice(storeIndex, 1);
		        }
		    }
		});

		var SINGLE_TOUCH_INPUT_MAP = {
		    touchstart: INPUT_START,
		    touchmove: INPUT_MOVE,
		    touchend: INPUT_END,
		    touchcancel: INPUT_CANCEL
		};

		var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
		var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

		/**
		 * Touch events input
		 * @constructor
		 * @extends Input
		 */
		function SingleTouchInput() {
		    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
		    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
		    this.started = false;

		    Input.apply(this, arguments);
		}

		inherit(SingleTouchInput, Input, {
		    handler: function TEhandler(ev) {
		        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

		        // should we handle the touch events?
		        if (type === INPUT_START) {
		            this.started = true;
		        }

		        if (!this.started) {
		            return;
		        }

		        var touches = normalizeSingleTouches.call(this, ev, type);

		        // when done, reset the started state
		        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
		            this.started = false;
		        }

		        this.callback(this.manager, type, {
		            pointers: touches[0],
		            changedPointers: touches[1],
		            pointerType: INPUT_TYPE_TOUCH,
		            srcEvent: ev
		        });
		    }
		});

		/**
		 * @this {TouchInput}
		 * @param {Object} ev
		 * @param {Number} type flag
		 * @returns {undefined|Array} [all, changed]
		 */
		function normalizeSingleTouches(ev, type) {
		    var all = toArray(ev.touches);
		    var changed = toArray(ev.changedTouches);

		    if (type & (INPUT_END | INPUT_CANCEL)) {
		        all = uniqueArray(all.concat(changed), 'identifier', true);
		    }

		    return [all, changed];
		}

		var TOUCH_INPUT_MAP = {
		    touchstart: INPUT_START,
		    touchmove: INPUT_MOVE,
		    touchend: INPUT_END,
		    touchcancel: INPUT_CANCEL
		};

		var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

		/**
		 * Multi-user touch events input
		 * @constructor
		 * @extends Input
		 */
		function TouchInput() {
		    this.evTarget = TOUCH_TARGET_EVENTS;
		    this.targetIds = {};

		    Input.apply(this, arguments);
		}

		inherit(TouchInput, Input, {
		    handler: function MTEhandler(ev) {
		        var type = TOUCH_INPUT_MAP[ev.type];
		        var touches = getTouches.call(this, ev, type);
		        if (!touches) {
		            return;
		        }

		        this.callback(this.manager, type, {
		            pointers: touches[0],
		            changedPointers: touches[1],
		            pointerType: INPUT_TYPE_TOUCH,
		            srcEvent: ev
		        });
		    }
		});

		/**
		 * @this {TouchInput}
		 * @param {Object} ev
		 * @param {Number} type flag
		 * @returns {undefined|Array} [all, changed]
		 */
		function getTouches(ev, type) {
		    var allTouches = toArray(ev.touches);
		    var targetIds = this.targetIds;

		    // when there is only one touch, the process can be simplified
		    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
		        targetIds[allTouches[0].identifier] = true;
		        return [allTouches, allTouches];
		    }

		    var i,
		        targetTouches,
		        changedTouches = toArray(ev.changedTouches),
		        changedTargetTouches = [],
		        target = this.target;

		    // get target touches from touches
		    targetTouches = allTouches.filter(function(touch) {
		        return hasParent(touch.target, target);
		    });

		    // collect touches
		    if (type === INPUT_START) {
		        i = 0;
		        while (i < targetTouches.length) {
		            targetIds[targetTouches[i].identifier] = true;
		            i++;
		        }
		    }

		    // filter changed touches to only contain touches that exist in the collected target ids
		    i = 0;
		    while (i < changedTouches.length) {
		        if (targetIds[changedTouches[i].identifier]) {
		            changedTargetTouches.push(changedTouches[i]);
		        }

		        // cleanup removed touches
		        if (type & (INPUT_END | INPUT_CANCEL)) {
		            delete targetIds[changedTouches[i].identifier];
		        }
		        i++;
		    }

		    if (!changedTargetTouches.length) {
		        return;
		    }

		    return [
		        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
		        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
		        changedTargetTouches
		    ];
		}

		/**
		 * Combined touch and mouse input
		 *
		 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
		 * This because touch devices also emit mouse events while doing a touch.
		 *
		 * @constructor
		 * @extends Input
		 */

		var DEDUP_TIMEOUT = 2500;
		var DEDUP_DISTANCE = 25;

		function TouchMouseInput() {
		    Input.apply(this, arguments);

		    var handler = bindFn(this.handler, this);
		    this.touch = new TouchInput(this.manager, handler);
		    this.mouse = new MouseInput(this.manager, handler);

		    this.primaryTouch = null;
		    this.lastTouches = [];
		}

		inherit(TouchMouseInput, Input, {
		    /**
		     * handle mouse and touch events
		     * @param {Hammer} manager
		     * @param {String} inputEvent
		     * @param {Object} inputData
		     */
		    handler: function TMEhandler(manager, inputEvent, inputData) {
		        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
		            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

		        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
		            return;
		        }

		        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
		        if (isTouch) {
		            recordTouches.call(this, inputEvent, inputData);
		        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
		            return;
		        }

		        this.callback(manager, inputEvent, inputData);
		    },

		    /**
		     * remove the event listeners
		     */
		    destroy: function destroy() {
		        this.touch.destroy();
		        this.mouse.destroy();
		    }
		});

		function recordTouches(eventType, eventData) {
		    if (eventType & INPUT_START) {
		        this.primaryTouch = eventData.changedPointers[0].identifier;
		        setLastTouch.call(this, eventData);
		    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
		        setLastTouch.call(this, eventData);
		    }
		}

		function setLastTouch(eventData) {
		    var touch = eventData.changedPointers[0];

		    if (touch.identifier === this.primaryTouch) {
		        var lastTouch = {x: touch.clientX, y: touch.clientY};
		        this.lastTouches.push(lastTouch);
		        var lts = this.lastTouches;
		        var removeLastTouch = function() {
		            var i = lts.indexOf(lastTouch);
		            if (i > -1) {
		                lts.splice(i, 1);
		            }
		        };
		        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
		    }
		}

		function isSyntheticEvent(eventData) {
		    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
		    for (var i = 0; i < this.lastTouches.length; i++) {
		        var t = this.lastTouches[i];
		        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
		        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
		            return true;
		        }
		    }
		    return false;
		}

		var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
		var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

		// magical touchAction value
		var TOUCH_ACTION_COMPUTE = 'compute';
		var TOUCH_ACTION_AUTO = 'auto';
		var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
		var TOUCH_ACTION_NONE = 'none';
		var TOUCH_ACTION_PAN_X = 'pan-x';
		var TOUCH_ACTION_PAN_Y = 'pan-y';
		var TOUCH_ACTION_MAP = getTouchActionProps();

		/**
		 * Touch Action
		 * sets the touchAction property or uses the js alternative
		 * @param {Manager} manager
		 * @param {String} value
		 * @constructor
		 */
		function TouchAction(manager, value) {
		    this.manager = manager;
		    this.set(value);
		}

		TouchAction.prototype = {
		    /**
		     * set the touchAction value on the element or enable the polyfill
		     * @param {String} value
		     */
		    set: function(value) {
		        // find out the touch-action by the event handlers
		        if (value == TOUCH_ACTION_COMPUTE) {
		            value = this.compute();
		        }

		        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
		            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
		        }
		        this.actions = value.toLowerCase().trim();
		    },

		    /**
		     * just re-set the touchAction value
		     */
		    update: function() {
		        this.set(this.manager.options.touchAction);
		    },

		    /**
		     * compute the value for the touchAction property based on the recognizer's settings
		     * @returns {String} value
		     */
		    compute: function() {
		        var actions = [];
		        each(this.manager.recognizers, function(recognizer) {
		            if (boolOrFn(recognizer.options.enable, [recognizer])) {
		                actions = actions.concat(recognizer.getTouchAction());
		            }
		        });
		        return cleanTouchActions(actions.join(' '));
		    },

		    /**
		     * this method is called on each input cycle and provides the preventing of the browser behavior
		     * @param {Object} input
		     */
		    preventDefaults: function(input) {
		        var srcEvent = input.srcEvent;
		        var direction = input.offsetDirection;

		        // if the touch action did prevented once this session
		        if (this.manager.session.prevented) {
		            srcEvent.preventDefault();
		            return;
		        }

		        var actions = this.actions;
		        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
		        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
		        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

		        if (hasNone) {
		            //do not prevent defaults if this is a tap gesture

		            var isTapPointer = input.pointers.length === 1;
		            var isTapMovement = input.distance < 2;
		            var isTapTouchTime = input.deltaTime < 250;

		            if (isTapPointer && isTapMovement && isTapTouchTime) {
		                return;
		            }
		        }

		        if (hasPanX && hasPanY) {
		            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
		            return;
		        }

		        if (hasNone ||
		            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
		            (hasPanX && direction & DIRECTION_VERTICAL)) {
		            return this.preventSrc(srcEvent);
		        }
		    },

		    /**
		     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
		     * @param {Object} srcEvent
		     */
		    preventSrc: function(srcEvent) {
		        this.manager.session.prevented = true;
		        srcEvent.preventDefault();
		    }
		};

		/**
		 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
		 * @param {String} actions
		 * @returns {*}
		 */
		function cleanTouchActions(actions) {
		    // none
		    if (inStr(actions, TOUCH_ACTION_NONE)) {
		        return TOUCH_ACTION_NONE;
		    }

		    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
		    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

		    // if both pan-x and pan-y are set (different recognizers
		    // for different directions, e.g. horizontal pan but vertical swipe?)
		    // we need none (as otherwise with pan-x pan-y combined none of these
		    // recognizers will work, since the browser would handle all panning
		    if (hasPanX && hasPanY) {
		        return TOUCH_ACTION_NONE;
		    }

		    // pan-x OR pan-y
		    if (hasPanX || hasPanY) {
		        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
		    }

		    // manipulation
		    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
		        return TOUCH_ACTION_MANIPULATION;
		    }

		    return TOUCH_ACTION_AUTO;
		}

		function getTouchActionProps() {
		    if (!NATIVE_TOUCH_ACTION) {
		        return false;
		    }
		    var touchMap = {};
		    var cssSupports = window.CSS && window.CSS.supports;
		    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

		        // If css.supports is not supported but there is native touch-action assume it supports
		        // all values. This is the case for IE 10 and 11.
		        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
		    });
		    return touchMap;
		}

		/**
		 * Recognizer flow explained; *
		 * All recognizers have the initial state of POSSIBLE when a input session starts.
		 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
		 * Example session for mouse-input: mousedown -> mousemove -> mouseup
		 *
		 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
		 * which determines with state it should be.
		 *
		 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
		 * POSSIBLE to give it another change on the next cycle.
		 *
		 *               Possible
		 *                  |
		 *            +-----+---------------+
		 *            |                     |
		 *      +-----+-----+               |
		 *      |           |               |
		 *   Failed      Cancelled          |
		 *                          +-------+------+
		 *                          |              |
		 *                      Recognized       Began
		 *                                         |
		 *                                      Changed
		 *                                         |
		 *                                  Ended/Recognized
		 */
		var STATE_POSSIBLE = 1;
		var STATE_BEGAN = 2;
		var STATE_CHANGED = 4;
		var STATE_ENDED = 8;
		var STATE_RECOGNIZED = STATE_ENDED;
		var STATE_CANCELLED = 16;
		var STATE_FAILED = 32;

		/**
		 * Recognizer
		 * Every recognizer needs to extend from this class.
		 * @constructor
		 * @param {Object} options
		 */
		function Recognizer(options) {
		    this.options = assign({}, this.defaults, options || {});

		    this.id = uniqueId();

		    this.manager = null;

		    // default is enable true
		    this.options.enable = ifUndefined(this.options.enable, true);

		    this.state = STATE_POSSIBLE;

		    this.simultaneous = {};
		    this.requireFail = [];
		}

		Recognizer.prototype = {
		    /**
		     * @virtual
		     * @type {Object}
		     */
		    defaults: {},

		    /**
		     * set options
		     * @param {Object} options
		     * @return {Recognizer}
		     */
		    set: function(options) {
		        assign(this.options, options);

		        // also update the touchAction, in case something changed about the directions/enabled state
		        this.manager && this.manager.touchAction.update();
		        return this;
		    },

		    /**
		     * recognize simultaneous with an other recognizer.
		     * @param {Recognizer} otherRecognizer
		     * @returns {Recognizer} this
		     */
		    recognizeWith: function(otherRecognizer) {
		        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
		            return this;
		        }

		        var simultaneous = this.simultaneous;
		        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		        if (!simultaneous[otherRecognizer.id]) {
		            simultaneous[otherRecognizer.id] = otherRecognizer;
		            otherRecognizer.recognizeWith(this);
		        }
		        return this;
		    },

		    /**
		     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
		     * @param {Recognizer} otherRecognizer
		     * @returns {Recognizer} this
		     */
		    dropRecognizeWith: function(otherRecognizer) {
		        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
		            return this;
		        }

		        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		        delete this.simultaneous[otherRecognizer.id];
		        return this;
		    },

		    /**
		     * recognizer can only run when an other is failing
		     * @param {Recognizer} otherRecognizer
		     * @returns {Recognizer} this
		     */
		    requireFailure: function(otherRecognizer) {
		        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
		            return this;
		        }

		        var requireFail = this.requireFail;
		        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		        if (inArray(requireFail, otherRecognizer) === -1) {
		            requireFail.push(otherRecognizer);
		            otherRecognizer.requireFailure(this);
		        }
		        return this;
		    },

		    /**
		     * drop the requireFailure link. it does not remove the link on the other recognizer.
		     * @param {Recognizer} otherRecognizer
		     * @returns {Recognizer} this
		     */
		    dropRequireFailure: function(otherRecognizer) {
		        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
		            return this;
		        }

		        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
		        var index = inArray(this.requireFail, otherRecognizer);
		        if (index > -1) {
		            this.requireFail.splice(index, 1);
		        }
		        return this;
		    },

		    /**
		     * has require failures boolean
		     * @returns {boolean}
		     */
		    hasRequireFailures: function() {
		        return this.requireFail.length > 0;
		    },

		    /**
		     * if the recognizer can recognize simultaneous with an other recognizer
		     * @param {Recognizer} otherRecognizer
		     * @returns {Boolean}
		     */
		    canRecognizeWith: function(otherRecognizer) {
		        return !!this.simultaneous[otherRecognizer.id];
		    },

		    /**
		     * You should use `tryEmit` instead of `emit` directly to check
		     * that all the needed recognizers has failed before emitting.
		     * @param {Object} input
		     */
		    emit: function(input) {
		        var self = this;
		        var state = this.state;

		        function emit(event) {
		            self.manager.emit(event, input);
		        }

		        // 'panstart' and 'panmove'
		        if (state < STATE_ENDED) {
		            emit(self.options.event + stateStr(state));
		        }

		        emit(self.options.event); // simple 'eventName' events

		        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
		            emit(input.additionalEvent);
		        }

		        // panend and pancancel
		        if (state >= STATE_ENDED) {
		            emit(self.options.event + stateStr(state));
		        }
		    },

		    /**
		     * Check that all the require failure recognizers has failed,
		     * if true, it emits a gesture event,
		     * otherwise, setup the state to FAILED.
		     * @param {Object} input
		     */
		    tryEmit: function(input) {
		        if (this.canEmit()) {
		            return this.emit(input);
		        }
		        // it's failing anyway
		        this.state = STATE_FAILED;
		    },

		    /**
		     * can we emit?
		     * @returns {boolean}
		     */
		    canEmit: function() {
		        var i = 0;
		        while (i < this.requireFail.length) {
		            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
		                return false;
		            }
		            i++;
		        }
		        return true;
		    },

		    /**
		     * update the recognizer
		     * @param {Object} inputData
		     */
		    recognize: function(inputData) {
		        // make a new copy of the inputData
		        // so we can change the inputData without messing up the other recognizers
		        var inputDataClone = assign({}, inputData);

		        // is is enabled and allow recognizing?
		        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
		            this.reset();
		            this.state = STATE_FAILED;
		            return;
		        }

		        // reset when we've reached the end
		        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
		            this.state = STATE_POSSIBLE;
		        }

		        this.state = this.process(inputDataClone);

		        // the recognizer has recognized a gesture
		        // so trigger an event
		        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
		            this.tryEmit(inputDataClone);
		        }
		    },

		    /**
		     * return the state of the recognizer
		     * the actual recognizing happens in this method
		     * @virtual
		     * @param {Object} inputData
		     * @returns {Const} STATE
		     */
		    process: function(inputData) { }, // jshint ignore:line

		    /**
		     * return the preferred touch-action
		     * @virtual
		     * @returns {Array}
		     */
		    getTouchAction: function() { },

		    /**
		     * called when the gesture isn't allowed to recognize
		     * like when another is being recognized or it is disabled
		     * @virtual
		     */
		    reset: function() { }
		};

		/**
		 * get a usable string, used as event postfix
		 * @param {Const} state
		 * @returns {String} state
		 */
		function stateStr(state) {
		    if (state & STATE_CANCELLED) {
		        return 'cancel';
		    } else if (state & STATE_ENDED) {
		        return 'end';
		    } else if (state & STATE_CHANGED) {
		        return 'move';
		    } else if (state & STATE_BEGAN) {
		        return 'start';
		    }
		    return '';
		}

		/**
		 * direction cons to string
		 * @param {Const} direction
		 * @returns {String}
		 */
		function directionStr(direction) {
		    if (direction == DIRECTION_DOWN) {
		        return 'down';
		    } else if (direction == DIRECTION_UP) {
		        return 'up';
		    } else if (direction == DIRECTION_LEFT) {
		        return 'left';
		    } else if (direction == DIRECTION_RIGHT) {
		        return 'right';
		    }
		    return '';
		}

		/**
		 * get a recognizer by name if it is bound to a manager
		 * @param {Recognizer|String} otherRecognizer
		 * @param {Recognizer} recognizer
		 * @returns {Recognizer}
		 */
		function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
		    var manager = recognizer.manager;
		    if (manager) {
		        return manager.get(otherRecognizer);
		    }
		    return otherRecognizer;
		}

		/**
		 * This recognizer is just used as a base for the simple attribute recognizers.
		 * @constructor
		 * @extends Recognizer
		 */
		function AttrRecognizer() {
		    Recognizer.apply(this, arguments);
		}

		inherit(AttrRecognizer, Recognizer, {
		    /**
		     * @namespace
		     * @memberof AttrRecognizer
		     */
		    defaults: {
		        /**
		         * @type {Number}
		         * @default 1
		         */
		        pointers: 1
		    },

		    /**
		     * Used to check if it the recognizer receives valid input, like input.distance > 10.
		     * @memberof AttrRecognizer
		     * @param {Object} input
		     * @returns {Boolean} recognized
		     */
		    attrTest: function(input) {
		        var optionPointers = this.options.pointers;
		        return optionPointers === 0 || input.pointers.length === optionPointers;
		    },

		    /**
		     * Process the input and return the state for the recognizer
		     * @memberof AttrRecognizer
		     * @param {Object} input
		     * @returns {*} State
		     */
		    process: function(input) {
		        var state = this.state;
		        var eventType = input.eventType;

		        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
		        var isValid = this.attrTest(input);

		        // on cancel input and we've recognized before, return STATE_CANCELLED
		        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
		            return state | STATE_CANCELLED;
		        } else if (isRecognized || isValid) {
		            if (eventType & INPUT_END) {
		                return state | STATE_ENDED;
		            } else if (!(state & STATE_BEGAN)) {
		                return STATE_BEGAN;
		            }
		            return state | STATE_CHANGED;
		        }
		        return STATE_FAILED;
		    }
		});

		/**
		 * Pan
		 * Recognized when the pointer is down and moved in the allowed direction.
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function PanRecognizer() {
		    AttrRecognizer.apply(this, arguments);

		    this.pX = null;
		    this.pY = null;
		}

		inherit(PanRecognizer, AttrRecognizer, {
		    /**
		     * @namespace
		     * @memberof PanRecognizer
		     */
		    defaults: {
		        event: 'pan',
		        threshold: 10,
		        pointers: 1,
		        direction: DIRECTION_ALL
		    },

		    getTouchAction: function() {
		        var direction = this.options.direction;
		        var actions = [];
		        if (direction & DIRECTION_HORIZONTAL) {
		            actions.push(TOUCH_ACTION_PAN_Y);
		        }
		        if (direction & DIRECTION_VERTICAL) {
		            actions.push(TOUCH_ACTION_PAN_X);
		        }
		        return actions;
		    },

		    directionTest: function(input) {
		        var options = this.options;
		        var hasMoved = true;
		        var distance = input.distance;
		        var direction = input.direction;
		        var x = input.deltaX;
		        var y = input.deltaY;

		        // lock to axis?
		        if (!(direction & options.direction)) {
		            if (options.direction & DIRECTION_HORIZONTAL) {
		                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
		                hasMoved = x != this.pX;
		                distance = Math.abs(input.deltaX);
		            } else {
		                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
		                hasMoved = y != this.pY;
		                distance = Math.abs(input.deltaY);
		            }
		        }
		        input.direction = direction;
		        return hasMoved && distance > options.threshold && direction & options.direction;
		    },

		    attrTest: function(input) {
		        return AttrRecognizer.prototype.attrTest.call(this, input) &&
		            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
		    },

		    emit: function(input) {

		        this.pX = input.deltaX;
		        this.pY = input.deltaY;

		        var direction = directionStr(input.direction);

		        if (direction) {
		            input.additionalEvent = this.options.event + direction;
		        }
		        this._super.emit.call(this, input);
		    }
		});

		/**
		 * Pinch
		 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function PinchRecognizer() {
		    AttrRecognizer.apply(this, arguments);
		}

		inherit(PinchRecognizer, AttrRecognizer, {
		    /**
		     * @namespace
		     * @memberof PinchRecognizer
		     */
		    defaults: {
		        event: 'pinch',
		        threshold: 0,
		        pointers: 2
		    },

		    getTouchAction: function() {
		        return [TOUCH_ACTION_NONE];
		    },

		    attrTest: function(input) {
		        return this._super.attrTest.call(this, input) &&
		            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
		    },

		    emit: function(input) {
		        if (input.scale !== 1) {
		            var inOut = input.scale < 1 ? 'in' : 'out';
		            input.additionalEvent = this.options.event + inOut;
		        }
		        this._super.emit.call(this, input);
		    }
		});

		/**
		 * Press
		 * Recognized when the pointer is down for x ms without any movement.
		 * @constructor
		 * @extends Recognizer
		 */
		function PressRecognizer() {
		    Recognizer.apply(this, arguments);

		    this._timer = null;
		    this._input = null;
		}

		inherit(PressRecognizer, Recognizer, {
		    /**
		     * @namespace
		     * @memberof PressRecognizer
		     */
		    defaults: {
		        event: 'press',
		        pointers: 1,
		        time: 251, // minimal time of the pointer to be pressed
		        threshold: 9 // a minimal movement is ok, but keep it low
		    },

		    getTouchAction: function() {
		        return [TOUCH_ACTION_AUTO];
		    },

		    process: function(input) {
		        var options = this.options;
		        var validPointers = input.pointers.length === options.pointers;
		        var validMovement = input.distance < options.threshold;
		        var validTime = input.deltaTime > options.time;

		        this._input = input;

		        // we only allow little movement
		        // and we've reached an end event, so a tap is possible
		        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
		            this.reset();
		        } else if (input.eventType & INPUT_START) {
		            this.reset();
		            this._timer = setTimeoutContext(function() {
		                this.state = STATE_RECOGNIZED;
		                this.tryEmit();
		            }, options.time, this);
		        } else if (input.eventType & INPUT_END) {
		            return STATE_RECOGNIZED;
		        }
		        return STATE_FAILED;
		    },

		    reset: function() {
		        clearTimeout(this._timer);
		    },

		    emit: function(input) {
		        if (this.state !== STATE_RECOGNIZED) {
		            return;
		        }

		        if (input && (input.eventType & INPUT_END)) {
		            this.manager.emit(this.options.event + 'up', input);
		        } else {
		            this._input.timeStamp = now();
		            this.manager.emit(this.options.event, this._input);
		        }
		    }
		});

		/**
		 * Rotate
		 * Recognized when two or more pointer are moving in a circular motion.
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function RotateRecognizer() {
		    AttrRecognizer.apply(this, arguments);
		}

		inherit(RotateRecognizer, AttrRecognizer, {
		    /**
		     * @namespace
		     * @memberof RotateRecognizer
		     */
		    defaults: {
		        event: 'rotate',
		        threshold: 0,
		        pointers: 2
		    },

		    getTouchAction: function() {
		        return [TOUCH_ACTION_NONE];
		    },

		    attrTest: function(input) {
		        return this._super.attrTest.call(this, input) &&
		            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
		    }
		});

		/**
		 * Swipe
		 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
		 * @constructor
		 * @extends AttrRecognizer
		 */
		function SwipeRecognizer() {
		    AttrRecognizer.apply(this, arguments);
		}

		inherit(SwipeRecognizer, AttrRecognizer, {
		    /**
		     * @namespace
		     * @memberof SwipeRecognizer
		     */
		    defaults: {
		        event: 'swipe',
		        threshold: 10,
		        velocity: 0.3,
		        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
		        pointers: 1
		    },

		    getTouchAction: function() {
		        return PanRecognizer.prototype.getTouchAction.call(this);
		    },

		    attrTest: function(input) {
		        var direction = this.options.direction;
		        var velocity;

		        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
		            velocity = input.overallVelocity;
		        } else if (direction & DIRECTION_HORIZONTAL) {
		            velocity = input.overallVelocityX;
		        } else if (direction & DIRECTION_VERTICAL) {
		            velocity = input.overallVelocityY;
		        }

		        return this._super.attrTest.call(this, input) &&
		            direction & input.offsetDirection &&
		            input.distance > this.options.threshold &&
		            input.maxPointers == this.options.pointers &&
		            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
		    },

		    emit: function(input) {
		        var direction = directionStr(input.offsetDirection);
		        if (direction) {
		            this.manager.emit(this.options.event + direction, input);
		        }

		        this.manager.emit(this.options.event, input);
		    }
		});

		/**
		 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
		 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
		 * a single tap.
		 *
		 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
		 * multi-taps being recognized.
		 * @constructor
		 * @extends Recognizer
		 */
		function TapRecognizer() {
		    Recognizer.apply(this, arguments);

		    // previous time and center,
		    // used for tap counting
		    this.pTime = false;
		    this.pCenter = false;

		    this._timer = null;
		    this._input = null;
		    this.count = 0;
		}

		inherit(TapRecognizer, Recognizer, {
		    /**
		     * @namespace
		     * @memberof PinchRecognizer
		     */
		    defaults: {
		        event: 'tap',
		        pointers: 1,
		        taps: 1,
		        interval: 300, // max time between the multi-tap taps
		        time: 250, // max time of the pointer to be down (like finger on the screen)
		        threshold: 9, // a minimal movement is ok, but keep it low
		        posThreshold: 10 // a multi-tap can be a bit off the initial position
		    },

		    getTouchAction: function() {
		        return [TOUCH_ACTION_MANIPULATION];
		    },

		    process: function(input) {
		        var options = this.options;

		        var validPointers = input.pointers.length === options.pointers;
		        var validMovement = input.distance < options.threshold;
		        var validTouchTime = input.deltaTime < options.time;

		        this.reset();

		        if ((input.eventType & INPUT_START) && (this.count === 0)) {
		            return this.failTimeout();
		        }

		        // we only allow little movement
		        // and we've reached an end event, so a tap is possible
		        if (validMovement && validTouchTime && validPointers) {
		            if (input.eventType != INPUT_END) {
		                return this.failTimeout();
		            }

		            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
		            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

		            this.pTime = input.timeStamp;
		            this.pCenter = input.center;

		            if (!validMultiTap || !validInterval) {
		                this.count = 1;
		            } else {
		                this.count += 1;
		            }

		            this._input = input;

		            // if tap count matches we have recognized it,
		            // else it has began recognizing...
		            var tapCount = this.count % options.taps;
		            if (tapCount === 0) {
		                // no failing requirements, immediately trigger the tap event
		                // or wait as long as the multitap interval to trigger
		                if (!this.hasRequireFailures()) {
		                    return STATE_RECOGNIZED;
		                } else {
		                    this._timer = setTimeoutContext(function() {
		                        this.state = STATE_RECOGNIZED;
		                        this.tryEmit();
		                    }, options.interval, this);
		                    return STATE_BEGAN;
		                }
		            }
		        }
		        return STATE_FAILED;
		    },

		    failTimeout: function() {
		        this._timer = setTimeoutContext(function() {
		            this.state = STATE_FAILED;
		        }, this.options.interval, this);
		        return STATE_FAILED;
		    },

		    reset: function() {
		        clearTimeout(this._timer);
		    },

		    emit: function() {
		        if (this.state == STATE_RECOGNIZED) {
		            this._input.tapCount = this.count;
		            this.manager.emit(this.options.event, this._input);
		        }
		    }
		});

		/**
		 * Simple way to create a manager with a default set of recognizers.
		 * @param {HTMLElement} element
		 * @param {Object} [options]
		 * @constructor
		 */
		function Hammer(element, options) {
		    options = options || {};
		    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
		    return new Manager(element, options);
		}

		/**
		 * @const {string}
		 */
		Hammer.VERSION = '2.0.7';

		/**
		 * default settings
		 * @namespace
		 */
		Hammer.defaults = {
		    /**
		     * set if DOM events are being triggered.
		     * But this is slower and unused by simple implementations, so disabled by default.
		     * @type {Boolean}
		     * @default false
		     */
		    domEvents: false,

		    /**
		     * The value for the touchAction property/fallback.
		     * When set to `compute` it will magically set the correct value based on the added recognizers.
		     * @type {String}
		     * @default compute
		     */
		    touchAction: TOUCH_ACTION_COMPUTE,

		    /**
		     * @type {Boolean}
		     * @default true
		     */
		    enable: true,

		    /**
		     * EXPERIMENTAL FEATURE -- can be removed/changed
		     * Change the parent input target element.
		     * If Null, then it is being set the to main element.
		     * @type {Null|EventTarget}
		     * @default null
		     */
		    inputTarget: null,

		    /**
		     * force an input class
		     * @type {Null|Function}
		     * @default null
		     */
		    inputClass: null,

		    /**
		     * Default recognizer setup when calling `Hammer()`
		     * When creating a new Manager these will be skipped.
		     * @type {Array}
		     */
		    preset: [
		        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
		        [RotateRecognizer, {enable: false}],
		        [PinchRecognizer, {enable: false}, ['rotate']],
		        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
		        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
		        [TapRecognizer],
		        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
		        [PressRecognizer]
		    ],

		    /**
		     * Some CSS properties can be used to improve the working of Hammer.
		     * Add them to this method and they will be set when creating a new Manager.
		     * @namespace
		     */
		    cssProps: {
		        /**
		         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
		         * @type {String}
		         * @default 'none'
		         */
		        userSelect: 'none',

		        /**
		         * Disable the Windows Phone grippers when pressing an element.
		         * @type {String}
		         * @default 'none'
		         */
		        touchSelect: 'none',

		        /**
		         * Disables the default callout shown when you touch and hold a touch target.
		         * On iOS, when you touch and hold a touch target such as a link, Safari displays
		         * a callout containing information about the link. This property allows you to disable that callout.
		         * @type {String}
		         * @default 'none'
		         */
		        touchCallout: 'none',

		        /**
		         * Specifies whether zooming is enabled. Used by IE10>
		         * @type {String}
		         * @default 'none'
		         */
		        contentZooming: 'none',

		        /**
		         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
		         * @type {String}
		         * @default 'none'
		         */
		        userDrag: 'none',

		        /**
		         * Overrides the highlight color shown when the user taps a link or a JavaScript
		         * clickable element in iOS. This property obeys the alpha value, if specified.
		         * @type {String}
		         * @default 'rgba(0,0,0,0)'
		         */
		        tapHighlightColor: 'rgba(0,0,0,0)'
		    }
		};

		var STOP = 1;
		var FORCED_STOP = 2;

		/**
		 * Manager
		 * @param {HTMLElement} element
		 * @param {Object} [options]
		 * @constructor
		 */
		function Manager(element, options) {
		    this.options = assign({}, Hammer.defaults, options || {});

		    this.options.inputTarget = this.options.inputTarget || element;

		    this.handlers = {};
		    this.session = {};
		    this.recognizers = [];
		    this.oldCssProps = {};

		    this.element = element;
		    this.input = createInputInstance(this);
		    this.touchAction = new TouchAction(this, this.options.touchAction);

		    toggleCssProps(this, true);

		    each(this.options.recognizers, function(item) {
		        var recognizer = this.add(new (item[0])(item[1]));
		        item[2] && recognizer.recognizeWith(item[2]);
		        item[3] && recognizer.requireFailure(item[3]);
		    }, this);
		}

		Manager.prototype = {
		    /**
		     * set options
		     * @param {Object} options
		     * @returns {Manager}
		     */
		    set: function(options) {
		        assign(this.options, options);

		        // Options that need a little more setup
		        if (options.touchAction) {
		            this.touchAction.update();
		        }
		        if (options.inputTarget) {
		            // Clean up existing event listeners and reinitialize
		            this.input.destroy();
		            this.input.target = options.inputTarget;
		            this.input.init();
		        }
		        return this;
		    },

		    /**
		     * stop recognizing for this session.
		     * This session will be discarded, when a new [input]start event is fired.
		     * When forced, the recognizer cycle is stopped immediately.
		     * @param {Boolean} [force]
		     */
		    stop: function(force) {
		        this.session.stopped = force ? FORCED_STOP : STOP;
		    },

		    /**
		     * run the recognizers!
		     * called by the inputHandler function on every movement of the pointers (touches)
		     * it walks through all the recognizers and tries to detect the gesture that is being made
		     * @param {Object} inputData
		     */
		    recognize: function(inputData) {
		        var session = this.session;
		        if (session.stopped) {
		            return;
		        }

		        // run the touch-action polyfill
		        this.touchAction.preventDefaults(inputData);

		        var recognizer;
		        var recognizers = this.recognizers;

		        // this holds the recognizer that is being recognized.
		        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
		        // if no recognizer is detecting a thing, it is set to `null`
		        var curRecognizer = session.curRecognizer;

		        // reset when the last recognizer is recognized
		        // or when we're in a new session
		        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
		            curRecognizer = session.curRecognizer = null;
		        }

		        var i = 0;
		        while (i < recognizers.length) {
		            recognizer = recognizers[i];

		            // find out if we are allowed try to recognize the input for this one.
		            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
		            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
		            //      that is being recognized.
		            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
		            //      this can be setup with the `recognizeWith()` method on the recognizer.
		            if (session.stopped !== FORCED_STOP && ( // 1
		                    !curRecognizer || recognizer == curRecognizer || // 2
		                    recognizer.canRecognizeWith(curRecognizer))) { // 3
		                recognizer.recognize(inputData);
		            } else {
		                recognizer.reset();
		            }

		            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
		            // current active recognizer. but only if we don't already have an active recognizer
		            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
		                curRecognizer = session.curRecognizer = recognizer;
		            }
		            i++;
		        }
		    },

		    /**
		     * get a recognizer by its event name.
		     * @param {Recognizer|String} recognizer
		     * @returns {Recognizer|Null}
		     */
		    get: function(recognizer) {
		        if (recognizer instanceof Recognizer) {
		            return recognizer;
		        }

		        var recognizers = this.recognizers;
		        for (var i = 0; i < recognizers.length; i++) {
		            if (recognizers[i].options.event == recognizer) {
		                return recognizers[i];
		            }
		        }
		        return null;
		    },

		    /**
		     * add a recognizer to the manager
		     * existing recognizers with the same event name will be removed
		     * @param {Recognizer} recognizer
		     * @returns {Recognizer|Manager}
		     */
		    add: function(recognizer) {
		        if (invokeArrayArg(recognizer, 'add', this)) {
		            return this;
		        }

		        // remove existing
		        var existing = this.get(recognizer.options.event);
		        if (existing) {
		            this.remove(existing);
		        }

		        this.recognizers.push(recognizer);
		        recognizer.manager = this;

		        this.touchAction.update();
		        return recognizer;
		    },

		    /**
		     * remove a recognizer by name or instance
		     * @param {Recognizer|String} recognizer
		     * @returns {Manager}
		     */
		    remove: function(recognizer) {
		        if (invokeArrayArg(recognizer, 'remove', this)) {
		            return this;
		        }

		        recognizer = this.get(recognizer);

		        // let's make sure this recognizer exists
		        if (recognizer) {
		            var recognizers = this.recognizers;
		            var index = inArray(recognizers, recognizer);

		            if (index !== -1) {
		                recognizers.splice(index, 1);
		                this.touchAction.update();
		            }
		        }

		        return this;
		    },

		    /**
		     * bind event
		     * @param {String} events
		     * @param {Function} handler
		     * @returns {EventEmitter} this
		     */
		    on: function(events, handler) {
		        if (events === undefined) {
		            return;
		        }
		        if (handler === undefined) {
		            return;
		        }

		        var handlers = this.handlers;
		        each(splitStr(events), function(event) {
		            handlers[event] = handlers[event] || [];
		            handlers[event].push(handler);
		        });
		        return this;
		    },

		    /**
		     * unbind event, leave emit blank to remove all handlers
		     * @param {String} events
		     * @param {Function} [handler]
		     * @returns {EventEmitter} this
		     */
		    off: function(events, handler) {
		        if (events === undefined) {
		            return;
		        }

		        var handlers = this.handlers;
		        each(splitStr(events), function(event) {
		            if (!handler) {
		                delete handlers[event];
		            } else {
		                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
		            }
		        });
		        return this;
		    },

		    /**
		     * emit event to the listeners
		     * @param {String} event
		     * @param {Object} data
		     */
		    emit: function(event, data) {
		        // we also want to trigger dom events
		        if (this.options.domEvents) {
		            triggerDomEvent(event, data);
		        }

		        // no handlers, so skip it all
		        var handlers = this.handlers[event] && this.handlers[event].slice();
		        if (!handlers || !handlers.length) {
		            return;
		        }

		        data.type = event;
		        data.preventDefault = function() {
		            data.srcEvent.preventDefault();
		        };

		        var i = 0;
		        while (i < handlers.length) {
		            handlers[i](data);
		            i++;
		        }
		    },

		    /**
		     * destroy the manager and unbinds all events
		     * it doesn't unbind dom events, that is the user own responsibility
		     */
		    destroy: function() {
		        this.element && toggleCssProps(this, false);

		        this.handlers = {};
		        this.session = {};
		        this.input.destroy();
		        this.element = null;
		    }
		};

		/**
		 * add/remove the css properties as defined in manager.options.cssProps
		 * @param {Manager} manager
		 * @param {Boolean} add
		 */
		function toggleCssProps(manager, add) {
		    var element = manager.element;
		    if (!element.style) {
		        return;
		    }
		    var prop;
		    each(manager.options.cssProps, function(value, name) {
		        prop = prefixed(element.style, name);
		        if (add) {
		            manager.oldCssProps[prop] = element.style[prop];
		            element.style[prop] = value;
		        } else {
		            element.style[prop] = manager.oldCssProps[prop] || '';
		        }
		    });
		    if (!add) {
		        manager.oldCssProps = {};
		    }
		}

		/**
		 * trigger dom event
		 * @param {String} event
		 * @param {Object} data
		 */
		function triggerDomEvent(event, data) {
		    var gestureEvent = document.createEvent('Event');
		    gestureEvent.initEvent(event, true, true);
		    gestureEvent.gesture = data;
		    data.target.dispatchEvent(gestureEvent);
		}

		assign(Hammer, {
		    INPUT_START: INPUT_START,
		    INPUT_MOVE: INPUT_MOVE,
		    INPUT_END: INPUT_END,
		    INPUT_CANCEL: INPUT_CANCEL,

		    STATE_POSSIBLE: STATE_POSSIBLE,
		    STATE_BEGAN: STATE_BEGAN,
		    STATE_CHANGED: STATE_CHANGED,
		    STATE_ENDED: STATE_ENDED,
		    STATE_RECOGNIZED: STATE_RECOGNIZED,
		    STATE_CANCELLED: STATE_CANCELLED,
		    STATE_FAILED: STATE_FAILED,

		    DIRECTION_NONE: DIRECTION_NONE,
		    DIRECTION_LEFT: DIRECTION_LEFT,
		    DIRECTION_RIGHT: DIRECTION_RIGHT,
		    DIRECTION_UP: DIRECTION_UP,
		    DIRECTION_DOWN: DIRECTION_DOWN,
		    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
		    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
		    DIRECTION_ALL: DIRECTION_ALL,

		    Manager: Manager,
		    Input: Input,
		    TouchAction: TouchAction,

		    TouchInput: TouchInput,
		    MouseInput: MouseInput,
		    PointerEventInput: PointerEventInput,
		    TouchMouseInput: TouchMouseInput,
		    SingleTouchInput: SingleTouchInput,

		    Recognizer: Recognizer,
		    AttrRecognizer: AttrRecognizer,
		    Tap: TapRecognizer,
		    Pan: PanRecognizer,
		    Swipe: SwipeRecognizer,
		    Pinch: PinchRecognizer,
		    Rotate: RotateRecognizer,
		    Press: PressRecognizer,

		    on: addEventListeners,
		    off: removeEventListeners,
		    each: each,
		    merge: merge,
		    extend: extend,
		    assign: assign,
		    inherit: inherit,
		    bindFn: bindFn,
		    prefixed: prefixed
		});

		// this prevents errors when Hammer is loaded in the presence of an AMD
		//  style loader but by script tag, not by the loader.
		var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
		freeGlobal.Hammer = Hammer;

		if (true) {
		    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		        return Hammer;
		    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module != 'undefined' && module.exports) {
		    module.exports = Hammer;
		} else {
		    window[exportName] = Hammer;
		}

		})(window, document, 'Hammer');


	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(96);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./handle.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./handle.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._handle_q1som_5 {\n  width:          13px;\n  width:          13px;\n  width:          0.8125rem;\n  height:          13px;\n  height:          13px;\n  height:         0.8125rem;\n  \n  cursor:         pointer;\n  -webkit-transform:      translateX(0);\n          transform:      translateX(0)\n  /*backface-visibility: hidden;*/\n}\n._handle__inner_q1som_1, ._handle__shadow_q1som_1 {\n  position:          absolute;\n  left:          0;\n  top:          0;\n  z-index:          1;\n  width:          100%;\n  height:          100%;\n  border-radius:          50%;\n  cursor:          pointer;\n  /*transform:      translateZ(0);*/\n  -webkit-backface-visibility:          hidden;\n          backface-visibility:          hidden\n}\n._handle__inner_q1som_1 {\n  background:          #FFF\n}\n._handle__shadow_q1som_1 {\n  box-shadow:          0.0625rem 0.0625rem 0.125rem black;\n  opacity:          .35;\n  z-index:          0\n}\n._handle_q1som_5:hover ._handle__inner_q1som_1, ._handle_q1som_5:hover ._handle__shadow_q1som_1 {\n  -webkit-transform:          scale(1.1);\n          transform:          scale(1.1)\n}\n._handle_q1som_5:active ._handle__inner_q1som_1 {\n  -webkit-transform:          scale(1.2);\n          transform:          scale(1.2)\n  /*box-shadow:     calc( $PX ) calc( $PX ) calc( 1*$PX ) rgba(0,0,0,.35);*/\n}\n._handle_q1som_5:active ._handle__shadow_q1som_1 {\n  opacity:          .85;\n  -webkit-transform:          scale(1);\n          transform:          scale(1)\n}\n._handle_q1som_5._is-bound_q1som_54 {\n  width:          9px;\n  width:          9px;\n  width:          0.5625rem;\n  height:          20px;\n  height:          20px;\n  height:          1.25rem;\n  margin-left:          -9px;\n  margin-left:          -9px;\n  margin-left:          -0.5625rem;\n  margin-top:          -10px;\n  margin-top:          -10px;\n  margin-top:          -0.625rem\n}\n._handle_q1som_5._is-bound_q1som_54 ._handle__inner_q1som_1 {\n  background:          #FF512F\n}\n._handle_q1som_5._is-bound_q1som_54 ._handle__inner_q1som_1:after {\n  content:          '';\n  position:          absolute;\n  right:          0;\n  top:          50%;\n  margin-top:          -20px;\n  margin-top:          -20px;\n  margin-top:          -1.25rem;\n  width:          1px;\n  width:          1px;\n  width:          0.0625rem;\n  height:          40px;\n  height:          40px;\n  height:          2.5rem;\n  background:          #FF512F\n}\n._handle_q1som_5._is-bound_q1som_54 ._handle__inner_q1som_1, ._handle_q1som_5._is-bound_q1som_54 ._handle__shadow_q1som_1 {\n  border-top-left-radius:          3px;\n  border-top-left-radius:          3px;\n  border-top-left-radius:          0.1875rem;\n  border-bottom-left-radius:          3px;\n  border-bottom-left-radius:          3px;\n  border-bottom-left-radius:          0.1875rem;\n  border-top-right-radius:          0;\n  border-bottom-right-radius:          0\n}\n._handle_q1som_5._is-inversed_q1som_82 {\n  margin-left:          0\n}\n._handle_q1som_5._is-inversed_q1som_82 ._handle__shadow_q1som_1 {\n  box-shadow:          -0.0625rem 0.0625rem 0.125rem black\n}\n._handle_q1som_5._is-inversed_q1som_82 ._handle__inner_q1som_1 {\n  border-top-left-radius:          0;\n  border-bottom-left-radius:          0;\n  border-top-right-radius:          3px;\n  border-top-right-radius:          3px;\n  border-top-right-radius:          0.1875rem;\n  border-bottom-right-radius:          3px;\n  border-bottom-right-radius:          3px;\n  border-bottom-right-radius:          0.1875rem\n}\n._handle_q1som_5._is-inversed_q1som_82 ._handle__inner_q1som_1:after {\n  right:          auto;\n  left:          0\n}\n\n", ""]);

		// exports


	/***/ },
	/* 97 */
	/***/ function(module, exports) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];

			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};

			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if(typeof modules === "string")
					modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for(var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if(typeof id === "number")
						alreadyImportedModules[id] = true;
				}
				for(i = 0; i < modules.length; i++) {
					var item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if(mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if(mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};


	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];

		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}

			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();

			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

			var styles = listToStyles(list);
			addStylesToDom(styles, options);

			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}

		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}

		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}

		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}

		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if(idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}

		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}

		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
		}

		function addStyle(obj, options) {
			var styleElement, update, remove;

			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if(obj.sourceMap &&
				typeof URL === "function" &&
				typeof URL.createObjectURL === "function" &&
				typeof URL.revokeObjectURL === "function" &&
				typeof Blob === "function" &&
				typeof btoa === "function") {
				styleElement = createLinkElement(options);
				update = updateLink.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
					if(styleElement.href)
						URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}

			update(obj);

			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}

		var replaceText = (function () {
			var textStore = [];

			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();

		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;

			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}

		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;

			if(media) {
				styleElement.setAttribute("media", media)
			}

			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}

		function updateLink(linkElement, obj) {
			var css = obj.css;
			var sourceMap = obj.sourceMap;

			if(sourceMap) {
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}

			var blob = new Blob([css], { type: "text/css" });

			var oldSrc = linkElement.href;

			linkElement.href = URL.createObjectURL(blob);

			if(oldSrc)
				URL.revokeObjectURL(oldSrc);
		}


	/***/ },
	/* 99 */
	/***/ function(module, exports) {

		module.exports = {
			"handle": "_handle_q1som_5",
			"handle__inner": "_handle__inner_q1som_1",
			"handle__shadow": "_handle__shadow_q1som_1",
			"is-bound": "_is-bound_q1som_54",
			"is-inversed": "_is-inversed_q1som_82"
		};

	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _handle = __webpack_require__(93);

		var _handle2 = _interopRequireDefault(_handle);

		var _hammerjs = __webpack_require__(94);

		var _hammerjs2 = _interopRequireDefault(_hammerjs);

		var _ripple = __webpack_require__(101);

		var _ripple2 = _interopRequireDefault(_ripple);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(102);
		var CLASSES = __webpack_require__(104);

		var Track = function (_Handle) {
		  (0, _inherits3.default)(Track, _Handle);

		  function Track() {
		    (0, _classCallCheck3.default)(this, Track);
		    return (0, _possibleConstructorReturn3.default)(this, _Handle.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Handle
		  */

		  Track.prototype._declareDefaults = function _declareDefaults() {
		    _Handle.prototype._declareDefaults.call(this);
		    this._defaults.isProgress = true;
		    this._defaults.isRipple = true;
		  };
		  /*
		    Method to render the component.
		    @private
		    @overrides @ Handle
		  */


		  Track.prototype._render = function _render() {
		    _Handle.prototype._render.call(this);
		    if (!this._props.isRipple) {
		      return;
		    }
		    this.ripple = new _ripple2.default({
		      withHold: false,
		      className: CLASSES['track__ripple'],
		      parent: this.el
		    });
		  };
		  /*
		    Method to apply shift to the DOMElement.
		    @private
		    @overrides @ Handle.
		    @param {Number} Shift in pixels.
		  */


		  Track.prototype._applyShift = function _applyShift(shift) {
		    if (!this._props.isProgress) {
		      return;
		    }
		    if (this._props.isInversed) {
		      shift = this._maxWidth - shift;
		    }
		    var transform = 'scaleX( ' + shift + ' )';
		    this.trackProgressEl.style.transform = transform;
		  };
		  /*
		    Method to add classes on `this.el`.
		    @private
		    @overrides @ Handle.
		  */


		  Track.prototype._addMainClasses = function _addMainClasses() {
		    var p = this._props,
		        classList = this.el.classList;

		    classList.add(CLASSES.track);
		    if (p.isInversed) {
		      classList.add(CLASSES['is-inversed']);
		    }
		    if (p.isBound) {
		      classList.add(CLASSES['is-bound']);
		    }
		    if (p.direction === 'y') {
		      classList.add(CLASSES['is-y']);
		    }
		  };
		  /*
		    Method to add DOM elements on render.
		    @private
		  */


		  Track.prototype._addElements = function _addElements() {
		    var p = this._props;

		    if (p.isProgress) {
		      // progress track
		      var trackP = document.createElement('div');
		      trackP.classList.add('' + CLASSES['track__track-progress']);
		      this.trackProgressEl = trackP;
		      this.el.appendChild(trackP);
		    }
		    // track
		    if (!p.isBound) {
		      var track = document.createElement('div');
		      track.classList.add('' + CLASSES.track__track);
		      this.el.appendChild(track);
		    }
		  };
		  /*
		    Callback for pointer down on main el.
		    @private
		    @param {Object} Original event object.
		    @overrides @ Handle
		  */


		  Track.prototype._pointerDown = function _pointerDown(e) {
		    var p = this._props,
		        x = p.direction === 'x' ? e.layerX : e.layerY;
		    this._isPointerDown = true;

		    if (p.direction === 'y') {
		      x = this._maxWidth - e.layerY;
		    }
		    x = this._props.isInversed && x < 0 ? this._maxWidth + x : x;

		    // if near the snap point - set it to the snap point
		    var progress = this._shiftToProgress(x);
		    progress = Math.abs(p.snapPoint - progress) < p.snapStrength ? p.snapPoint : progress;
		    this.setProgress(progress);

		    p.isRipple && this.ripple._hold(e);
		    this._callIfFunction(p.onSeekStart, e);
		  };

		  return Track;
		}(_handle2.default);

		exports.default = Track;

	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// require('css/blocks/handle.postcss.css');
		// let CLASSES = require('css/blocks/handle.postcss.css.json');

		var Ripple = function (_Module) {
		  (0, _inherits3.default)(Ripple, _Module);

		  function Ripple() {
		    (0, _classCallCheck3.default)(this, Ripple);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults.
		    @private
		    @overrides @ Module.
		  */

		  Ripple.prototype._declareDefaults = function _declareDefaults() {
		    _Module.prototype._declareDefaults.call(this);
		    this._defaults.withHold = true;
		  };
		  /*
		    Method to render the component.
		    @private
		    @overrides @ Module
		  */


		  Ripple.prototype._render = function _render() {
		    _Module.prototype._render.call(this);
		    this._addRipple();
		  };
		  /*
		    Method to construct ripple object.
		    @private
		  */


		  Ripple.prototype._addRipple = function _addRipple() {
		    var _this2 = this,
		        _ref;

		    this.transit = new mojs.Transit((_ref = {
		      parent: this.el,
		      left: 0, top: 0,
		      // strokeWidth:  10,
		      strokeWidth: { 10: 0 },
		      fill: 'none',
		      stroke: 'hotpink'
		    }, _ref['fill'] = 'hotpink', _ref.fillOpacity = .75, _ref.opacity = { .85: 0 }, _ref.radius = 40, _ref.scale = { 0: 1 }, _ref.isShowEnd = false, _ref.onStart = function onStart() {
		      _this2.isStart = true;
		    }, _ref.onUpdate = this._onUpdate.bind(this), _ref.onComplete = function onComplete() {
		      _this2.isStart = false;
		    }, _ref));
		  };
		  /*
		    Method that is invoked on ripple update.
		    @private
		    @param {Number} Curret progress [0...1].
		  */


		  Ripple.prototype._onUpdate = function _onUpdate(p) {
		    if (!this._props.withHold) {
		      return;
		    }
		    if (p >= .15 && this.isStart && !this.isRelease) {
		      this.isStart = false;
		      this.transit.setSpeed(.02);
		    }
		  };
		  /*
		    Method that should be run on touch serface release.
		    @private
		  */


		  Ripple.prototype._release = function _release() {
		    if (!this._props.withHold) {
		      return;
		    }
		    this.isRelease = true;
		    this.transit.setSpeed(1).play();
		  };
		  /*
		    Method that should be run on touch serface hold.
		    @private
		    @param {Object} Origin event object.
		  */


		  Ripple.prototype._hold = function _hold(e) {
		    var x = e.offsetX != null ? e.offsetX : e.layerX,
		        y = e.offsetY != null ? e.offsetY : e.layerY;

		    this.isRelease = false;
		    this.transit.tune({ x: x, y: y }).replay();
		  };
		  /*
		    Method that should be run on touch serface cancel.
		    @private
		  */


		  Ripple.prototype._cancel = function _cancel() {
		    if (!this._props.withHold) {
		      return;
		    }
		    this.isRelease = true;
		    this.transit.pause().setSpeed(1).playBackward();
		  };

		  return Ripple;
		}(_module2.default);

		exports.default = Ripple;

	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(103);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./track.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./track.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._track_1inlw_5 {\n  position:           relative;\n  height:             100%\n\n\n}\n._track__track_1inlw_1 {\n  position:           absolute;\n  top:           50%;\n  left:           0;\n  width:           100%;\n  height:           1px;\n  height:           1px;\n  height:           0.0625rem;\n  background:           #FFF;\n  box-shadow:           0.0625rem 0.0625rem 0.0625rem rgba(0,0,0,.5)\n\n\n}\n._track__track_1inlw_1:after {\n  content:           '';\n  position:           absolute;\n  left:           0;\n  top:           -20px;\n  top:           -20px;\n  top:           -1.25rem;\n  width:           100%;\n  height:           40px;\n  height:           40px;\n  height:           2.5rem;\n  cursor:           pointer\n  /*background-color: yellow;*/\n\n\n}\n._track__track-progress_1inlw_1 {\n  position:           absolute;\n  left:           0;\n  top:           50%;\n  margin-top:           -1px;\n  margin-top:           -1px;\n  margin-top:           -0.0625rem;\n  height:           3px;\n  height:           3px;\n  height:           0.1875rem;\n  width:           1px;\n  /*background:       $c-orange;*/\n  background:           #FFFFFF;\n  z-index:           1;\n  -webkit-transform-origin:           left center;\n          transform-origin:           left center\n\n\n}\n._track__track-progress_1inlw_1:after {\n  content:           '';\n  position:           absolute;\n  left:           0;\n  top:           -20px;\n  top:           -20px;\n  top:           -1.25rem;\n  width:           100%;\n  height:           40px;\n  height:           40px;\n  height:           2.5rem;\n  cursor:           pointer\n  /*background-color: yellow;*/\n\n\n}\n._track__ripple_1inlw_1 {\n  position:           absolute;\n  left:           0;\n  top:           0;\n  right:           0;\n  bottom:           0;\n  overflow:           hidden;\n  z-index:           1\n\n\n}\n._track_1inlw_5._is-inversed_1inlw_65 {\n  left:           auto;\n  right:           0\n\n\n}\n._track_1inlw_5._is-inversed_1inlw_65 ._track__track-progress_1inlw_1 {\n  -webkit-transform-origin:           right center;\n          transform-origin:           right center\n\n\n}\n._track_1inlw_5._is-bound_1inlw_74 ._track__track-progress_1inlw_1 {\n  background:           #FF512F\n\n\n}\n._track_1inlw_5._is-y_1inlw_78 ._track__track_1inlw_1 {\n  top:           0;\n  left:           50%;\n  height:           100%;\n  width:           1px;\n  width:           1px;\n  width:           0.0625rem\n  /*box-shadow:       calc( $PX ) calc( $PX ) calc( $PX ) rgba(0,0,0,.5); */\n\n\n}\n\n", ""]);

		// exports


	/***/ },
	/* 104 */
	/***/ function(module, exports) {

		module.exports = {
			"track": "_track_1inlw_5",
			"track__track": "_track__track_1inlw_1",
			"track__track-progress": "_track__track-progress_1inlw_1",
			"track__ripple": "_track__ripple_1inlw_1",
			"is-inversed": "_is-inversed_1inlw_65",
			"is-bound": "_is-bound_1inlw_74",
			"is-y": "_is-y_1inlw_78"
		};

	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(106);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./slider.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./slider.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "/*@import './handle.postcss.css';*/\n._slider_14t9x_6 {\n  position:           relative;\n  width:              100%;\n  height:           30px;\n  height:           30px;\n  height:             1.875rem\n}\n._slider__inner_14t9x_1 {\n  width:           100%;\n  height:           100%;\n  position:           relative\n}\n._slider_14t9x_6 ._handle_14t9x_17, ._slider_14t9x_6 ._progress-handle_14t9x_18 {\n  z-index:           3;\n  position:           absolute;\n  top:           50%\n}\n._slider_14t9x_6 ._progress-handle_14t9x_18 {\n  left:           0;\n  margin-left:           -6.5px;\n  margin-left:           -6.5px;\n  margin-left:           -0.40625rem;\n  margin-top:           -6.5px;\n  margin-top:           -6.5px;\n  margin-top:           -0.40625rem\n}\n._slider_14t9x_6 ._track_14t9x_30 {\n  z-index:           2\n}\n._slider_14t9x_6._is-y_14t9x_34 {\n  width:           30px;\n  width:           30px;\n  width:           1.875rem;\n  height:           100%;\n}\n._slider_14t9x_6._is-y_14t9x_34 ._handle_14t9x_17 {\n  left:           50%;\n  top:           auto;\n  bottom:           0;\n  margin-top:           0;\n  margin-bottom:           -6.5px;\n  margin-bottom:           -6.5px;\n  margin-bottom:           -0.40625rem\n}\n\n", ""]);

		// exports


	/***/ },
	/* 107 */
	/***/ function(module, exports) {

		module.exports = {
			"slider": "_slider_14t9x_6",
			"slider__inner": "_slider__inner_14t9x_1",
			"handle": "_handle_14t9x_17",
			"progress-handle": "_progress-handle_14t9x_18",
			"track": "_track_14t9x_30",
			"is-y": "_is-y_14t9x_34"
		};

	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(109);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./player-slider.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./player-slider.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "/*@import './handle.postcss.css';*/\n._player-slider_1t00q_6 {\n  /*overflow:     hidden;*/\n  height:       40px;\n  height:       40px;\n  height:       2.5rem\n\n}\n._player-slider_1t00q_6 > div {\n  position:       absolute;\n  left:       0;\n  top:       0;\n  z-index:       2\n\n}\n._player-slider_1t00q_6 ._slider_1t00q_15 {\n  z-index:       1;\n  height:       100%\n\n}\n\n", ""]);

		// exports


	/***/ },
	/* 110 */
	/***/ function(module, exports) {

		module.exports = {
			"player-slider": "_player-slider_1t00q_6",
			"slider": "_slider_1t00q_15"
		};

	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _icon = __webpack_require__(112);

		var _icon2 = _interopRequireDefault(_icon);

		var _button = __webpack_require__(116);

		var _button2 = _interopRequireDefault(_button);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(120);
		var CLASSES = __webpack_require__(122);

		var IconButton = function (_Button) {
		  (0, _inherits3.default)(IconButton, _Button);

		  function IconButton() {
		    (0, _classCallCheck3.default)(this, IconButton);
		    return (0, _possibleConstructorReturn3.default)(this, _Button.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Button
		  */

		  IconButton.prototype._declareDefaults = function _declareDefaults() {
		    _Button.prototype._declareDefaults.call(this);
		    this._defaults.icon = '';
		    this._defaults.iconClass = '';
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Button
		    @returns this
		  */


		  IconButton.prototype._render = function _render() {
		    _Button.prototype._render.call(this);
		    var p = this._props,
		        className = 'icon-button';
		    this.el.classList.add(CLASSES[className]);

		    var icon = new _icon2.default({
		      shape: p.icon,
		      parent: this.el,
		      className: [CLASSES['icon'], p.iconClass],
		      prefix: p.prefix
		    });
		  };

		  return IconButton;
		}(_button2.default);

		exports.default = IconButton;

	/***/ },
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		var _hammerjs = __webpack_require__(94);

		var _hammerjs2 = _interopRequireDefault(_hammerjs);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(113);
		var CLASSES = __webpack_require__(115);

		var Icon = function (_Module) {
		  (0, _inherits3.default)(Icon, _Module);

		  function Icon() {
		    (0, _classCallCheck3.default)(this, Icon);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Module
		  */

		  Icon.prototype._declareDefaults = function _declareDefaults() {
		    _Module.prototype._declareDefaults.call(this);
		    this._defaults.shape = '';
		    this._defaults.size = 'x1';
		    this.NS = 'http://www.w3.org/2000/svg';
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Module
		    @returns this
		  */


		  Icon.prototype._render = function _render() {
		    this._addMainElement();
		    this.el.classList.add(CLASSES.icon);
		    this.el.classList.add(CLASSES['is-' + this._props.size]);
		    this._renderIcon();
		  };
		  /*
		    Method to render svg icon into the el.
		    @private
		  */


		  Icon.prototype._renderIcon = function _renderIcon() {
		    var p = this._props,
		        svg = document.createElementNS(this.NS, 'svg'),
		        content = '<use xlink:href="#' + p.prefix + p.shape + '-icon-shape" />';
		    svg.setAttribute('viewBox', '0 0 32 32');
		    this._addSVGHtml(svg, content);
		    this.el.appendChild(svg);
		  };
		  /*
		    Add HTML to SVG element.
		    @private
		    @param {Object} SVG node.
		    @param {String} SVG content to add.
		  */


		  Icon.prototype._addSVGHtml = function _addSVGHtml(svg, content) {
		    var receptacle = this._createElement('div'),
		        svgfragment = '<svg> ' + content + ' </svg>';
		    receptacle.innerHTML = svgfragment;
		    var nodes = Array.prototype.slice.call(receptacle.childNodes[0].childNodes);
		    for (var i = 0; i < nodes.length; i++) {
		      svg.appendChild(nodes[i]);
		    }
		  };

		  return Icon;
		}(_module2.default);

		exports.default = Icon;

	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(114);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./icon.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./icon.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._icon_y498a_5 {\n  position:     relative;\n  width:     12px;\n  width:     12px;\n  width:        0.75rem;\n  height:     12px;\n  height:     12px;\n  height:       0.75rem;\n  cursor:       pointer\n}\n._icon_y498a_5 > svg {\n  position:     absolute;\n  left:     0;\n  top:     0;\n  width:     100%;\n  height:     100%;\n  fill:     inherit\n}\n._icon_y498a_5 > svg > use {\n  fill:     inherit\n}\n._icon_y498a_5:after {\n  content:     '';\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  z-index:     1\n}\n._icon_y498a_5._is-x2_y498a_33 {\n  width:     16px;\n  width:     16px;\n  width:     1rem;\n  height:     16px;\n  height:     16px;\n  height:     1rem\n}\n\n", ""]);

		// exports


	/***/ },
	/* 115 */
	/***/ function(module, exports) {

		module.exports = {
			"icon": "_icon_y498a_5",
			"is-x2": "_is-x2_y498a_33"
		};

	/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		var _hammerjs = __webpack_require__(94);

		var _hammerjs2 = _interopRequireDefault(_hammerjs);

		var _ripple = __webpack_require__(101);

		var _ripple2 = _interopRequireDefault(_ripple);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(117);
		var CLASSES = __webpack_require__(119);

		var Button = function (_Module) {
		  (0, _inherits3.default)(Button, _Module);

		  function Button() {
		    (0, _classCallCheck3.default)(this, Button);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults for the module.
		    @private
		    @overrides @ Module
		  */

		  Button.prototype._declareDefaults = function _declareDefaults() {
		    _Module.prototype._declareDefaults.call(this);
		    this._defaults.link = null;
		    this._defaults.title = '';
		    this._defaults.target = null;
		    this._defaults.onPointerDown = null;
		    this._defaults.onPointerUp = null;
		    this._defaults.onDoubleTap = null;
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Module
		  */


		  Button.prototype._render = function _render() {
		    var p = this._props,
		        className = 'button',
		        tagName = p.link != null ? 'a' : 'div';

		    this._addMainElement(tagName);
		    this.el.classList.add(CLASSES[className]);
		    this.el.setAttribute('title', p.title);
		    p.link && this.el.setAttribute('href', p.link);
		    p.link && p.target && this.el.setAttribute('target', p.target);
		    this._addListeners();

		    this._createRipple();
		  };
		  /*
		    Method to create ripple.
		    @private
		  */


		  Button.prototype._createRipple = function _createRipple() {
		    this.ripple = new _ripple2.default({
		      className: CLASSES['button__ripple'],
		      parent: this.el
		    });
		  };
		  /*
		    Method to add event listeners to the icon.
		    @private
		  */


		  Button.prototype._addListeners = function _addListeners() {
		    this._addPointerDownEvent(this.el, this._pointerDown.bind(this));
		    this._addPointerUpEvent(this.el, this._pointerUp.bind(this));
		    this._addPointerUpEvent(document, this._pointerCancel.bind(this));
		    (0, _hammerjs2.default)(this.el).on('doubletap', this._doubleTap.bind(this));
		  };
		  /*
		    Method to invoke onPointerDown callback if exist.
		    @private
		    @param {Object} Original event object.
		  */


		  Button.prototype._pointerDown = function _pointerDown(e) {
		    this.wasTouched = true;
		    this._callIfFunction(this._props.onPointerDown);
		    this.ripple._hold(e);
		  };
		  /*
		    Method to invoke onPointerUp callback if exist.
		    @private
		    @param {Object} Original event object.
		  */


		  Button.prototype._pointerUp = function _pointerUp(e) {
		    if (!this.wasTouched) {
		      e.stopPropagation();return;
		    }

		    this.wasTouched = false;
		    this._callIfFunction(this._props.onPointerUp);
		    this.ripple._release();
		    e.preventDefault();
		    return false;
		  };
		  /*
		    Method to invoke onPointerCancel callback if exist.
		    @private
		    @param {Object} Original event object.
		  */


		  Button.prototype._pointerCancel = function _pointerCancel(e) {
		    if (!this.wasTouched) {
		      return;
		    };
		    this.wasTouched = false;
		    this.ripple._cancel();
		  };
		  /*
		    Method to invoke onDoubleTap callback if exist.
		    @private
		    @param {Object} Original event object.
		  */


		  Button.prototype._doubleTap = function _doubleTap(e) {
		    this._callIfFunction(this._props.onDoubleTap);
		  };

		  return Button;
		}(_module2.default);

		exports.default = Button;

	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(118);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._button_r3ni6_4 {\n  position:   relative;\n  width:   35px;\n  width:   35px;\n  width:      2.1875rem;\n  height:   40px;\n  height:   40px;\n  height:     2.5rem;\n  cursor:     pointer;\n  fill:       #FFF;\n  display:    inline-block\n}\n._button__ripple_r3ni6_1 {\n  position:   absolute;\n  left:   0;\n  right:   0;\n  top:   0;\n  bottom:   0;\n  z-index:   5;\n  overflow:   hidden\n}\n._button__ripple_r3ni6_1:after {\n  content:   \"\";\n  position:   absolute;\n  left:   0;\n  right:   0;\n  top:   0;\n  bottom:   0;\n  z-index:   1;\n  cursor:   pointer\n}\n._button_r3ni6_4:hover {\n  opacity:   .85\n}\n._button_r3ni6_4:active {\n  opacity:   1\n}\n\n", ""]);

		// exports


	/***/ },
	/* 119 */
	/***/ function(module, exports) {

		module.exports = {
			"button": "_button_r3ni6_4",
			"button__ripple": "_button__ripple_r3ni6_1"
		};

	/***/ },
	/* 120 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(121);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./icon-button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./icon-button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._icon-button_1yshr_4 {\n  /* styles */\n}\n._icon-button_1yshr_4 ._icon_1yshr_4 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate( -50%, -50% );\n          transform: translate( -50%, -50% )\n}\n\n", ""]);

		// exports


	/***/ },
	/* 122 */
	/***/ function(module, exports) {

		module.exports = {
			"icon-button": "_icon-button_1yshr_4",
			"icon": "_icon_1yshr_4"
		};

	/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(90);

		var _module2 = _interopRequireDefault(_module);

		var _labelButton = __webpack_require__(124);

		var _labelButton2 = _interopRequireDefault(_labelButton);

		var _slider = __webpack_require__(92);

		var _slider2 = _interopRequireDefault(_slider);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(132);
		var CLASSES = __webpack_require__(134);

		var SpeedControl = function (_Module) {
		  (0, _inherits3.default)(SpeedControl, _Module);

		  function SpeedControl() {
		    (0, _classCallCheck3.default)(this, SpeedControl);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults for the module.
		    @private
		    @overrides @ Module
		  */

		  SpeedControl.prototype._declareDefaults = function _declareDefaults() {
		    _Module.prototype._declareDefaults.call(this);
		    this._defaults.isOn = false;
		    this._defaults.speed = 1;
		    this._defaults.progress = .5;
		    this._defaults.onSpeedChange = null;
		    this._defaults.onIsSpeed = null;
		  };
		  /*
		    Method to reset speed to 1x.
		    @public
		    @returns this
		  */


		  SpeedControl.prototype.reset = function reset() {
		    this._onDoubleTap();
		  };
		  /*
		    Method to decrease speed value.
		    @public
		    @param {Number} Value that the slider should be decreased by.
		    @returns this.
		  */


		  SpeedControl.prototype.decreaseSpeed = function decreaseSpeed() {
		    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

		    var p = this._props;
		    p.progress -= amount;
		    p.progress = p.progress < 0 ? 0 : p.progress;
		    this.slider.setProgress(p.progress);
		    return this;
		  };
		  /*
		    Method to inclease speed value.
		    @public
		    @param {Number} Value that the slider should be increased by.
		    @returns this.
		  */


		  SpeedControl.prototype.increaseSpeed = function increaseSpeed() {
		    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

		    var p = this._props;
		    p.progress += amount;
		    p.progress = p.progress > 1 ? 1 : p.progress;
		    this.slider.setProgress(p.progress);
		    return this;
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Module
		  */


		  SpeedControl.prototype._render = function _render() {
		    var p = this._props,
		        className = 'speed-control',
		        slider = this._createElement('div'),
		        sliderIn = this._createElement('div'),
		        icon = this._createElement('div');

		    this._addMainElement();
		    this.el.classList.add(CLASSES[className]);
		    // places for child components
		    slider.classList.add(CLASSES[className + '__slider']);
		    // sliderIn.classList.add( CLASSES[ `${ className }__slider-inner` ] );
		    // slider.appendChild( sliderIn );
		    this.el.appendChild(slider);
		    // child components
		    this.labelButton = new _labelButton2.default({
		      parent: this.el,
		      isOn: p.isOn,
		      className: CLASSES[className + '__icon'],
		      onStateChange: this._onButtonStateChange.bind(this),
		      onDoubleTap: this._onDoubleTap.bind(this)
		    });
		    this.slider = new _slider2.default({
		      parent: slider,
		      isProgress: false,
		      direction: 'y',
		      onProgress: this._onSliderProgress.bind(this),
		      snapPoint: .5,
		      snapStrength: .05
		    });

		    this.slider.setProgress(this._speedToProgress(this._props.speed));
		  };
		  /*
		    Method that is invoked on slider progress.
		    @private
		    @param {Number} Progress of the slider.
		  */


		  SpeedControl.prototype._onSliderProgress = function _onSliderProgress(p) {
		    // progress should be at least 0.01
		    p = Math.max(p, 0.0001);

		    var props = this._props,
		        args = [];

		    this._callIfFunction(props.onSpeedChange, this._progressToSpeed(p), p);
		    this.labelButton.setLabelText(this._progressToLabel(props.progress = p));
		  };
		  /*
		    Method that is invoked on button state change.
		    @private
		    @param {Boolean} State of the button switch.
		  */


		  SpeedControl.prototype._onButtonStateChange = function _onButtonStateChange(isOn) {
		    var method = isOn ? 'add' : 'remove';
		    this.el.classList[method](CLASSES['is-on']);
		    this._callIfFunction(this._props.onIsSpeed, isOn);
		  };
		  /*
		    Method to recalc progress to label string.
		    @private
		    @param {Number} Progress [0...1].
		    @returns {String} String for a label to set.
		  */


		  SpeedControl.prototype._progressToLabel = function _progressToLabel(progress) {
		    var text = this._progressToSpeed(progress).toFixed(2),
		        zeros = /\.+00$/;

		    if (text.match(zeros)) {
		      text = text.replace(zeros, '');
		    }

		    return text + 'x';
		  };
		  /*
		    Method to recalc progress to speed.
		    @private
		    @param   {Number} Progress [0...1].
		    @returns {Number} Speed [0...10].
		  */


		  SpeedControl.prototype._progressToSpeed = function _progressToSpeed(progress) {
		    var speed = progress;
		    if (progress < .5) {
		      speed = 2 * progress;
		    }
		    if (progress === .5) {
		      speed = 1;
		    }
		    if (progress > .5) {
		      progress -= .5;
		      speed = 1 + progress * 18;
		      // console.log( speed/10, mojs.easing.cubic.out( speed/10 ) );
		      // console.log( .5 + ( speed - 1 ) / 18 );
		    }
		    return speed;
		  };
		  /*
		    Method to recalc progress to speed.
		    @private
		    @param   {Number} Progress [0...1].
		    @returns {Number} Speed [0...10].
		  */


		  SpeedControl.prototype._speedToProgress = function _speedToProgress(speed) {
		    var progress = speed;
		    if (speed < 1) {
		      progress = speed / 2;
		    }
		    if (speed === 1) {
		      progress = .5;
		    }
		    if (speed > 1) {
		      progress = .5 + (speed - 1) / 18;
		    }
		    return progress;
		  };
		  /*
		    Method that is invoked on double button tap.
		    @private
		  */


		  SpeedControl.prototype._onDoubleTap = function _onDoubleTap() {
		    this.slider.setProgress(.5);
		    this.labelButton.off();
		  };

		  return SpeedControl;
		}(_module2.default);

		exports.default = SpeedControl;

	/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _buttonSwitch = __webpack_require__(125);

		var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(129);
		var CLASSES = __webpack_require__(131);

		var LabelButton = function (_ButtonSwitch) {
		  (0, _inherits3.default)(LabelButton, _ButtonSwitch);

		  function LabelButton() {
		    (0, _classCallCheck3.default)(this, LabelButton);
		    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults.
		    @private
		    @overrides @ OpacitySwitch
		  */

		  LabelButton.prototype._declareDefaults = function _declareDefaults() {
		    _ButtonSwitch.prototype._declareDefaults.call(this);
		    this._defaults.title = 'speed (reset: alt + 1)';
		  };
		  /*
		    Method to populate the label with progress text.
		    @public
		    @param {String} Text to set.
		  */


		  LabelButton.prototype.setLabelText = function setLabelText(text) {
		    this.label.innerHTML = text;
		  };

		  /*
		    ^  PUBLIC  ^
		    v PPRIVATE v
		  */

		  /*
		    Initial render method.
		    @private
		    @overrides @ Button
		    @returns this
		  */


		  LabelButton.prototype._render = function _render() {
		    _ButtonSwitch.prototype._render.call(this);
		    this._addClass(this.el, CLASSES['label-button']);
		    this._addLabel();
		    // this.setLabelText( this._props.progress );
		  };
		  /*
		    Method to add label to the `el`.
		    @private
		  */


		  LabelButton.prototype._addLabel = function _addLabel() {
		    this.label = this._createElement('div');
		    this.label.classList.add(CLASSES['label-button__label']);
		    this.el.appendChild(this.label);
		  };

		  return LabelButton;
		}(_buttonSwitch2.default);

		exports.default = LabelButton;

	/***/ },
	/* 125 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _button = __webpack_require__(116);

		var _button2 = _interopRequireDefault(_button);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(126);
		var CLASSES = __webpack_require__(128);

		var ButtonSwitch = function (_Button) {
		  (0, _inherits3.default)(ButtonSwitch, _Button);

		  function ButtonSwitch() {
		    (0, _classCallCheck3.default)(this, ButtonSwitch);
		    return (0, _possibleConstructorReturn3.default)(this, _Button.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults.
		    @private
		    @overrides @ Button
		  */

		  ButtonSwitch.prototype._declareDefaults = function _declareDefaults() {
		    _Button.prototype._declareDefaults.call(this);
		    this._defaults.isOn = false;
		    this._defaults.onStateChange = null;
		  };
		  /*
		    Method to set the state to `true`.
		    @public
		    @param {Boolean} If should invoke callback.
		  */


		  ButtonSwitch.prototype.on = function on() {
		    var isCallback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

		    // set to true because the next step is toggle
		    this._props.isOn = true;
		    this._reactOnStateChange(isCallback);
		  };
		  /*
		    Method to set the state to `false`.
		    @public
		    @param {Boolean} If should invoke callback.
		  */


		  ButtonSwitch.prototype.off = function off() {
		    var isCallback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

		    // set to true because the next step is toggle
		    this._props.isOn = false;
		    this._reactOnStateChange(isCallback);
		  };

		  // ---

		  /*
		    Initial render method.
		    @private
		    @overrides @ Button
		    @returns this
		  */


		  ButtonSwitch.prototype._render = function _render() {
		    _Button.prototype._render.call(this);
		    this.el.classList.add(CLASSES['button-switch']);
		    this._setState();
		    this._reactOnStateChange();
		  };
		  /*
		    Method to invoke onPointerUp callback if excist.
		    @private
		    @overrides @ Button
		    @param {Object} Original event object.
		  */


		  ButtonSwitch.prototype._pointerUp = function _pointerUp(e) {
		    if (!this.wasTouched) {
		      this.wasTouched = false;
		      e.stopPropagation();
		      return;
		    }
		    this._changeState();
		    _Button.prototype._pointerUp.call(this, e);
		  };
		  /*
		    Method to switch icons.
		    @private
		  */


		  ButtonSwitch.prototype._changeState = function _changeState() {
		    this._props.isOn = !this._props.isOn;
		    this._reactOnStateChange();
		  };
		  /*
		    Method to react on state change.
		    @private
		    @param {Boolean} If should invoke callback.
		  */


		  ButtonSwitch.prototype._reactOnStateChange = function _reactOnStateChange() {
		    var isCallback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

		    if (isCallback) {
		      this._callIfFunction(this._props.onStateChange, this._props.isOn);
		    }
		    this._setState();
		  };
		  /*
		    Method that have been called on switch state change.
		    @private
		  */


		  ButtonSwitch.prototype._setState = function _setState() {
		    // console.log('change');
		  };

		  return ButtonSwitch;
		}(_button2.default);

		exports.default = ButtonSwitch;

	/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(127);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./button-switch.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./button-switch.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._button-switch_1g5lg_4 {\n  position:     relative;\n  display:      inline-block\n}\n._button-switch_1g5lg_4 > ._icon_1g5lg_8 {\n  position:     absolute\n}\n._button-switch_1g5lg_4:after {\n  content:     \"\";\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  z-index:     1\n}\n\n", ""]);

		// exports


	/***/ },
	/* 128 */
	/***/ function(module, exports) {

		module.exports = {
			"button-switch": "_button-switch_1g5lg_4",
			"icon": "_icon_1g5lg_8"
		};

	/***/ },
	/* 129 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(130);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./label-button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./label-button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 130 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._label-button_1cxps_4 {\n  font-family:        Arial, sans-serif;\n  font-size:        9px;\n  font-size:        9px;\n  font-size:          0.5625rem;\n  letter-spacing:        0.5px;\n  letter-spacing:        0.5px;\n  letter-spacing:     0.03125rem;\n  color:              white\n}\n._label-button__label_1cxps_1 {\n  position:        absolute;\n  left:        50%;\n  top:        50%;\n  -webkit-transform:        translate( -50%, -50% );\n          transform:        translate( -50%, -50% )\n}\n", ""]);

		// exports


	/***/ },
	/* 131 */
	/***/ function(module, exports) {

		module.exports = {
			"label-button": "_label-button_1cxps_4",
			"label-button__label": "_label-button__label_1cxps_1"
		};

	/***/ },
	/* 132 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(133);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./speed-control.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./speed-control.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 133 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._speed-control_1svrw_4 {\n  position:       relative;\n  display:        inline-block;\n  height:       40px;\n  height:       40px;\n  height:         2.5rem\n}\n._speed-control__slider_1svrw_1 {\n  position:       absolute;\n  bottom:       100%;\n  left:       3px;\n  left:       3px;\n  left:       0.1875rem;\n  width:       30px;\n  width:       30px;\n  width:       1.875rem;\n  height:       80px;\n  height:       80px;\n  height:       5rem;\n  padding-top:       20px;\n  padding-top:       20px;\n  padding-top:       1.25rem;\n  padding-bottom:       20px;\n  padding-bottom:       20px;\n  padding-bottom:       1.25rem;\n  border-top-right-radius:       3px;\n  border-top-right-radius:       3px;\n  border-top-right-radius:       0.1875rem;\n  border-top-left-radius:       3px;\n  border-top-left-radius:       3px;\n  border-top-left-radius:       0.1875rem;\n  background:       #3A0839;\n  -webkit-transform:       translate(-6249999.9375rem, -6249999.9375rem);\n          transform:       translate(-6249999.9375rem, -6249999.9375rem);\n  -webkit-backface-visibility:       hidden;\n          backface-visibility:       hidden\n}\n._speed-control__slider_1svrw_1:before, ._speed-control__slider_1svrw_1:after {\n  content:       '';\n  position:       absolute;\n  top:       50%;\n  width:       3px;\n  width:       3px;\n  width:       0.1875rem;\n  height:       1px;\n  height:       1px;\n  height:       0.0625rem;\n  background:       #FFF\n}\n._speed-control__slider_1svrw_1:before {\n  left:       5px;\n  left:       5px;\n  left:       0.3125rem\n}\n._speed-control__slider_1svrw_1:after {\n  right:       5px;\n  right:       5px;\n  right:       0.3125rem\n}\n._speed-control__button_1svrw_1 {\n  border:       1px solid cyan\n}\n._speed-control_1svrw_4._is-on_1svrw_48 ._speed-control__slider_1svrw_1 {\n  -webkit-transform:       translate(0, 0);\n          transform:       translate(0, 0)\n}\n\n", ""]);

		// exports


	/***/ },
	/* 134 */
	/***/ function(module, exports) {

		module.exports = {
			"speed-control": "_speed-control_1svrw_4",
			"speed-control__slider": "_speed-control__slider_1svrw_1",
			"speed-control__button": "_speed-control__button_1svrw_1",
			"is-on": "_is-on_1svrw_48"
		};

	/***/ },
	/* 135 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _iconFork = __webpack_require__(136);

		var _iconFork2 = _interopRequireDefault(_iconFork);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(140);
		var CLASSES = __webpack_require__(142);
		// PLAYER_BTN_CLASSES = require('css/blocks/player-button.postcss.css.json');

		var PlayButton = function (_IconFork) {
		  (0, _inherits3.default)(PlayButton, _IconFork);

		  function PlayButton() {
		    (0, _classCallCheck3.default)(this, PlayButton);
		    return (0, _possibleConstructorReturn3.default)(this, _IconFork.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults on the module.
		    @private
		    @overrides @ ButtonSwitch
		  */

		  PlayButton.prototype._declareDefaults = function _declareDefaults() {
		    _IconFork.prototype._declareDefaults.call(this);
		    this._defaults.icon1 = 'pause';
		    this._defaults.icon2 = 'play';
		    this._defaults.title = 'play/pause (alt + p)';
		  };
		  /*
		    Method to render the module.
		    @private
		  */


		  PlayButton.prototype._render = function _render() {
		    _IconFork.prototype._render.call(this);
		    this._addClass(this.el, CLASSES['play-button']);
		  };

		  return PlayButton;
		}(_iconFork2.default);

		exports.default = PlayButton;

	/***/ },
	/* 136 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _buttonSwitch = __webpack_require__(125);

		var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

		var _icon = __webpack_require__(112);

		var _icon2 = _interopRequireDefault(_icon);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// import HammerJS from 'hammerjs'

		__webpack_require__(137);
		var CLASSES = __webpack_require__(139);

		var IconFork = function (_ButtonSwitch) {
		  (0, _inherits3.default)(IconFork, _ButtonSwitch);

		  function IconFork() {
		    (0, _classCallCheck3.default)(this, IconFork);
		    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
		  }

		  /*
		    Initial render method.
		    @private
		    @overrides @ Icon
		    @returns this
		  */

		  IconFork.prototype._render = function _render() {
		    _ButtonSwitch.prototype._render.call(this);
		    this.el.classList.add(CLASSES['icon-fork']);
		    var p = this._props,
		        prefix = p.prefix,
		        parent = this.el,
		        className = CLASSES.icon;

		    this.icon1 = new _icon2.default({ shape: p.icon1, prefix: prefix, parent: parent, className: className });
		    this.icon2 = new _icon2.default({ shape: p.icon2, prefix: prefix, parent: parent, className: className });
		  };
		  /*
		    Method that should be called on state change.
		    @private
		    @override @ IconSwitch
		  */


		  IconFork.prototype._setState = function _setState() {
		    var p = this._props,
		        classList = this.el.classList,
		        method = p.isOn ? 'add' : 'remove';

		    classList[method](CLASSES['is-on']);
		  };

		  return IconFork;
		}(_buttonSwitch2.default);

		exports.default = IconFork;

	/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(138);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./icon-fork.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./icon-fork.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 138 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._icon-fork_csg7t_4 {\n}\n._icon-fork_csg7t_4 > ._icon_csg7t_4 {\n    /*position:   absolute;*/\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate( -50%, -50% );\n            transform: translate( -50%, -50% )\n}\n._icon-fork_csg7t_4 > ._icon_csg7t_4:nth-of-type(3) {\n    position: absolute;\n    opacity: 1\n}\n._icon-fork_csg7t_4._is-on_csg7t_18 > ._icon_csg7t_4:nth-of-type(2) {\n    opacity: 1\n}\n._icon-fork_csg7t_4._is-on_csg7t_18 > ._icon_csg7t_4:nth-of-type(3) {\n    opacity: 0\n}\n\n", ""]);

		// exports


	/***/ },
	/* 139 */
	/***/ function(module, exports) {

		module.exports = {
			"icon-fork": "_icon-fork_csg7t_4",
			"icon": "_icon_csg7t_4",
			"is-on": "_is-on_csg7t_18"
		};

	/***/ },
	/* 140 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(141);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./play-button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./play-button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 141 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._play-button_16uj5_4 {\n  /* styles */\n}\n", ""]);

		// exports


	/***/ },
	/* 142 */
	/***/ function(module, exports) {

		module.exports = {
			"play-button": "_play-button_16uj5_4"
		};

	/***/ },
	/* 143 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _iconButton = __webpack_require__(111);

		var _iconButton2 = _interopRequireDefault(_iconButton);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(144);
		var CLASSES = __webpack_require__(146);

		var StopButton = function (_IconButton) {
		  (0, _inherits3.default)(StopButton, _IconButton);

		  function StopButton() {
		    (0, _classCallCheck3.default)(this, StopButton);
		    return (0, _possibleConstructorReturn3.default)(this, _IconButton.apply(this, arguments));
		  }

		  StopButton.prototype._declareDefaults = function _declareDefaults() {
		    _IconButton.prototype._declareDefaults.call(this);
		    this._defaults.icon = 'stop';
		    this._defaults.title = 'stop (alt + s)';
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Button
		    @returns this
		  */


		  StopButton.prototype._render = function _render() {
		    _IconButton.prototype._render.call(this);
		    this._addClass(this.el, CLASSES['stop-button']);
		  };

		  return StopButton;
		}(_iconButton2.default);

		exports.default = StopButton;

	/***/ },
	/* 144 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(145);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./stop-button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./stop-button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 145 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._stop-button_lpa7l_4 {\n  /* styles */\n}\n", ""]);

		// exports


	/***/ },
	/* 146 */
	/***/ function(module, exports) {

		module.exports = {
			"stop-button": "_stop-button_lpa7l_4"
		};

	/***/ },
	/* 147 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _opacitySwitch = __webpack_require__(148);

		var _opacitySwitch2 = _interopRequireDefault(_opacitySwitch);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(152);
		var CLASSES = __webpack_require__(154);

		var RepeatButton = function (_OpacitySwitch) {
		  (0, _inherits3.default)(RepeatButton, _OpacitySwitch);

		  function RepeatButton() {
		    (0, _classCallCheck3.default)(this, RepeatButton);
		    return (0, _possibleConstructorReturn3.default)(this, _OpacitySwitch.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults.
		    @private
		    @overrides @ OpacitySwitch
		  */

		  RepeatButton.prototype._declareDefaults = function _declareDefaults() {
		    _OpacitySwitch.prototype._declareDefaults.call(this);
		    this._defaults.icon = 'repeat';
		    this._defaults.iconSize = 'x2';
		    this._defaults.title = 'repeat (alt + r)';
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Button
		    @returns this
		  */


		  RepeatButton.prototype._render = function _render() {
		    _OpacitySwitch.prototype._render.call(this);
		    this._addClass(this.el, CLASSES['repeat-button']);
		  };

		  return RepeatButton;
		}(_opacitySwitch2.default);

		exports.default = RepeatButton;

	/***/ },
	/* 148 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _icon = __webpack_require__(112);

		var _icon2 = _interopRequireDefault(_icon);

		var _buttonSwitch = __webpack_require__(125);

		var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(149);
		var CLASSES = __webpack_require__(151);

		var OpacitySwitch = function (_ButtonSwitch) {
		  (0, _inherits3.default)(OpacitySwitch, _ButtonSwitch);

		  function OpacitySwitch() {
		    (0, _classCallCheck3.default)(this, OpacitySwitch);
		    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
		  }

		  /*
		    Method to decalre defaults.
		    @private
		    @overrides @ ButtonSwitch
		  */

		  OpacitySwitch.prototype._declareDefaults = function _declareDefaults() {
		    _ButtonSwitch.prototype._declareDefaults.call(this);
		    this._defaults.icon = '';
		    this._defaults.iconSize = '';
		  };
		  /*
		    Method to render the module.
		    @private
		    @overrides @ ButtonSwitch
		  */


		  OpacitySwitch.prototype._render = function _render() {
		    _ButtonSwitch.prototype._render.call(this);
		    this.el.classList.add(CLASSES['opacity-switch']);

		    var p = this._props,
		        icon = new _icon2.default({
		      parent: this.el,
		      shape: p.icon,
		      size: p.iconSize,
		      className: CLASSES['icon'],
		      prefix: p.prefix
		    });
		    this.el.appendChild(icon.el);
		  };
		  /*
		    Method to react to switch state change.
		    @private
		    @overrides @ ButtonSwitch
		  */


		  OpacitySwitch.prototype._setState = function _setState() {
		    var method = this._props.isOn ? 'add' : 'remove';
		    this.el.classList[method](CLASSES['is-on']);
		  };

		  return OpacitySwitch;
		}(_buttonSwitch2.default);

		exports.default = OpacitySwitch;

	/***/ },
	/* 149 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(150);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./opacity-switch.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./opacity-switch.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 150 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._opacity-switch_17z5s_4 {\n  opacity:      .5;\n\n\n\n\n}\n._opacity-switch_17z5s_4 ._icon_17z5s_6 {\n  position:   absolute;\n  left:       50%;\n  top:        50%;\n  -webkit-transform:  translate(-50%, -50%);\n          transform:  translate(-50%, -50%);\n\n\n\n\n}\n._opacity-switch_17z5s_4:hover {\n  opacity:      .4;\n\n\n\n\n}\n._opacity-switch_17z5s_4._is-on_17z5s_15 {\n  opacity:      1;\n\n\n\n\n}\n._opacity-switch_17z5s_4._is-on_17z5s_15:hover {\n  opacity:      .85;\n\n\n\n\n}\n", ""]);

		// exports


	/***/ },
	/* 151 */
	/***/ function(module, exports) {

		module.exports = {
			"opacity-switch": "_opacity-switch_17z5s_4",
			"icon": "_icon_17z5s_6",
			"is-on": "_is-on_17z5s_15"
		};

	/***/ },
	/* 152 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(153);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./repeat-button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./repeat-button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 153 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._repeat-button_1ce74_4 {\n  /* styles */\n}\n\n", ""]);

		// exports


	/***/ },
	/* 154 */
	/***/ function(module, exports) {

		module.exports = {
			"repeat-button": "_repeat-button_1ce74_4"
		};

	/***/ },
	/* 155 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _repeatButton = __webpack_require__(147);

		var _repeatButton2 = _interopRequireDefault(_repeatButton);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// require('css/blocks/repeat-button.postcss.css');
		// let CLASSES = require('css/blocks/repeat-button.postcss.css.json');

		var BoundsButton = function (_RepeatButton) {
		  (0, _inherits3.default)(BoundsButton, _RepeatButton);

		  function BoundsButton() {
		    (0, _classCallCheck3.default)(this, BoundsButton);
		    return (0, _possibleConstructorReturn3.default)(this, _RepeatButton.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults.
		    @private
		    @overrides @ RepeatButton
		  */

		  BoundsButton.prototype._declareDefaults = function _declareDefaults() {
		    _RepeatButton.prototype._declareDefaults.call(this);
		    this._defaults.icon = 'bounds';
		    this._defaults.title = 'progress bounds (alt + b)';
		  };

		  return BoundsButton;
		}(_repeatButton2.default);

		exports.default = BoundsButton;

	/***/ },
	/* 156 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(78);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(79);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(80);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _buttonSwitch = __webpack_require__(125);

		var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

		var _icon = __webpack_require__(112);

		var _icon2 = _interopRequireDefault(_icon);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		__webpack_require__(157);
		var CLASSES = __webpack_require__(159),
		    className = 'hide-button';

		var HideButton = function (_ButtonSwitch) {
		  (0, _inherits3.default)(HideButton, _ButtonSwitch);

		  function HideButton() {
		    (0, _classCallCheck3.default)(this, HideButton);
		    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
		  }

		  HideButton.prototype._declareDefaults = function _declareDefaults() {
		    _ButtonSwitch.prototype._declareDefaults.call(this);
		    this._defaults.title = 'hide (alt + h)';
		  };
		  /*
		    Initial render method.
		    @private
		    @overrides @ Button
		    @returns this
		  */


		  HideButton.prototype._render = function _render() {
		    _ButtonSwitch.prototype._render.call(this);
		    this.el.classList.add(CLASSES[className]);
		    this._addIcon();
		  };
		  /*
		    Method to add icon.
		    @private
		  */


		  HideButton.prototype._addIcon = function _addIcon() {
		    this.icon = new _icon2.default({
		      parent: this.el,
		      className: CLASSES[className + '__icon'],
		      shape: 'hide',
		      prefix: this._props.prefix
		    });
		  };
		  /*
		    Method that have been called on switch state change.
		    @private
		    @override @ ButtonSwitch
		  */


		  HideButton.prototype._setState = function _setState() {
		    var method = this._props.isOn ? 'add' : 'remove';
		    this.el.classList[method](CLASSES['is-hidden']);
		  };

		  return HideButton;
		}(_buttonSwitch2.default);

		exports.default = HideButton;

	/***/ },
	/* 157 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(158);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./hide-button.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./hide-button.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 158 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._hide-button_1hqr2_4 {\n  \n  width:        22px;\n  \n  width:        22px;\n  \n  width:        1.375rem;\n  height:        16px;\n  height:        16px;\n  height:       1rem;\n  \n  background:   #3A0839;\n\n  border-top-left-radius:        3px;\n  border-top-left-radius:        3px;\n  border-top-left-radius:  0.1875rem;\n  border-top-right-radius:        3px;\n  border-top-right-radius:        3px;\n  border-top-right-radius: 0.1875rem\n}\n._hide-button__icon_1hqr2_1 {\n  \n  position:        absolute;\n  \n  left:        50%;\n  \n  top:        50%;\n  \n  width:        8px;\n  \n  width:        8px;\n  \n  width:        0.5rem;\n  \n  height:        8px;\n  \n  height:        8px;\n  \n  height:        0.5rem;\n  \n  margin-top:        1px;\n  \n  margin-top:        1px;\n  \n  margin-top:        0.0625rem;\n  \n  -webkit-transform:        translate( -50%, -50% );\n  \n          transform:        translate( -50%, -50% )\n}\n._hide-button_1hqr2_4._is-hidden_1hqr2_24 ._hide-button__icon_1hqr2_1 {\n  \n  -webkit-transform:        translate( -50%, -65% ) rotate( 180deg );\n  \n          transform:        translate( -50%, -65% ) rotate( 180deg )\n}\n\n", ""]);

		// exports


	/***/ },
	/* 159 */
	/***/ function(module, exports) {

		module.exports = {
			"hide-button": "_hide-button_1hqr2_4",
			"hide-button__icon": "_hide-button__icon_1hqr2_1",
			"is-hidden": "_is-hidden_1hqr2_24"
		};

	/***/ },
	/* 160 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(161);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(98)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./mojs-player.postcss.css", function() {
					var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./mojs-player.postcss.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 161 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(97)();
		// imports


		// module
		exports.push([module.id, "._mojs-player_tes6w_4 {\n  position:       fixed;\n  left:           0;\n  bottom:         0;\n  width:          100%;\n  height:       40px;\n  height:       40px;\n  height:         2.5rem;\n  background:     rgba( 58, 8, 57, .85 );\n  z-index:        100\n}\n._mojs-player__left_tes6w_1 {\n  position:       absolute;\n  left:       0;\n  width:       175px;\n  width:       175px;\n  width:       10.9375rem\n}\n._mojs-player__mid_tes6w_1 {\n  position:       absolute;\n  left:       175px;\n  left:       175px;\n  left:       10.9375rem;\n  right:       35px;\n  right:       35px;\n  right:       2.1875rem;\n  overflow:       hidden;\n  padding:       0 20px;\n  padding:       0 20px;\n  padding:       0 1.25rem\n}\n._mojs-player__right_tes6w_1 {\n  position:       absolute;\n  right:       0\n}\n._mojs-player__hide-button_tes6w_1 {\n  position:       absolute;\n  right:       6px;\n  right:       6px;\n  right:       0.375rem;\n  bottom:       100%\n}\n._mojs-player_tes6w_4._is-hidden_tes6w_41 {\n  -webkit-transform:       translateY(100%);\n          transform:       translateY(100%)\n}\n._mojs-player_tes6w_4._is-transition_tes6w_44 {\n  -webkit-transition:       all .15s ease-out;\n  transition:       all .15s ease-out\n}\n\n", ""]);

		// exports


	/***/ },
	/* 162 */
	/***/ function(module, exports) {

		module.exports = {
			"mojs-player": "_mojs-player_tes6w_4",
			"mojs-player__left": "_mojs-player__left_tes6w_1",
			"mojs-player__mid": "_mojs-player__mid_tes6w_1",
			"mojs-player__right": "_mojs-player__right_tes6w_1",
			"mojs-player__hide-button": "_mojs-player__hide-button_tes6w_1",
			"is-hidden": "_is-hidden_tes6w_41",
			"is-transition": "_is-transition_tes6w_44"
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(6);

	var _indexReducer = __webpack_require__(23);

	var _indexReducer2 = _interopRequireDefault(_indexReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.createStore)(_indexReducer2.default);

	exports.default = store;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(6);

	var _reduxRecycle = __webpack_require__(24);

	var _reduxRecycle2 = _interopRequireDefault(_reduxRecycle);

	var _mainPanelReducer = __webpack_require__(25);

	var _mainPanelReducer2 = _interopRequireDefault(_mainPanelReducer);

	var _controlsReducer = __webpack_require__(65);

	var _controlsReducer2 = _interopRequireDefault(_controlsReducer);

	var _pointsReducer = __webpack_require__(66);

	var _pointsReducer2 = _interopRequireDefault(_pointsReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducer = (0, _reduxRecycle2.default)((0, _redux.combineReducers)({
	  mainPanel: _mainPanelReducer2.default,
	  controls: _controlsReducer2.default,
	  points: _pointsReducer2.default
	}), ['SET_APP_STATE'], function (state, action) {
	  return action.data;
	});

	exports.default = reducer;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = recycleState;
	// redux-recycle higher order reducer
	function recycleState(reducer) {
	  var actions = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var initialState = arguments[2];

	  var getInitialState = typeof initialState === 'function' ? initialState : function () {
	    return initialState;
	  };

	  return function (state, action) {
	    if (actions.indexOf(action.type) >= 0) {
	      return reducer(getInitialState(state, action), { type: '@@redux-recycle/INIT' });
	    }
	    return reducer(state, action);
	  };
	}
	// /redux-recycle

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(26);

	var _extends3 = _interopRequireDefault(_extends2);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INITIAL_STATE = {
	  prevHeight: 100,
	  ySize: 100,
	  isHidden: false,
	  isTransition: false
	};

	var mainPanel = function mainPanel() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'MAIN_PANEL_HIDE_TOGGLE':
	      {
	        var isHidden = !state.isHidden;
	        var ySize = isHidden ? _constants2.default.PLAYER_HEIGHT : state.prevHeight;
	        var prevHeight = isHidden ? state.ySize : _constants2.default.PLAYER_HEIGHT;
	        var isTransition = true;

	        return (0, _extends3.default)({}, state, { isHidden: isHidden, ySize: ySize, prevHeight: prevHeight, isTransition: isTransition });
	      }
	    case 'MAIN_PANEL_SET_YSIZE':
	      {
	        return (0, _extends3.default)({}, state, { ySize: state.ySize - action.data });
	      }
	    case 'MAIN_PANEL_RESET_TRANSITION':
	      {
	        return (0, _extends3.default)({}, state, { isTransition: false });
	      }
	    case 'MAIN_PANEL_SAVE_YPREV':
	      {
	        return (0, _extends3.default)({}, state, { prevHeight: state.ySize });
	      }
	    case 'MAIN_PANEL_SET_HIDDEN':
	      {
	        return (0, _extends3.default)({}, state, { isHidden: action.data });
	      }
	  }
	  return state;
	};

	exports.default = mainPanel;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(27);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29);
	module.exports = __webpack_require__(32).Object.assign;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(30);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(45)});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(31)
	  , core      = __webpack_require__(32)
	  , ctx       = __webpack_require__(33)
	  , hide      = __webpack_require__(35)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;

/***/ },
/* 31 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 32 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(34);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(36)
	  , createDesc = __webpack_require__(44);
	module.exports = __webpack_require__(40) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(37)
	  , IE8_DOM_DEFINE = __webpack_require__(39)
	  , toPrimitive    = __webpack_require__(43)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(40) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(40) && !__webpack_require__(41)(function(){
	  return Object.defineProperty(__webpack_require__(42)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(41)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38)
	  , document = __webpack_require__(31).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(38);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(46)
	  , gOPS     = __webpack_require__(61)
	  , pIE      = __webpack_require__(62)
	  , toObject = __webpack_require__(63)
	  , IObject  = __webpack_require__(50)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(41)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(60);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(48)
	  , toIObject    = __webpack_require__(49)
	  , arrayIndexOf = __webpack_require__(53)(false)
	  , IE_PROTO     = __webpack_require__(57)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50)
	  , defined = __webpack_require__(52);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(51);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(49)
	  , toLength  = __webpack_require__(54)
	  , toIndex   = __webpack_require__(56);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(55)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(55)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(58)('keys')
	  , uid    = __webpack_require__(59);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(31)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 61 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 62 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(52);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	  Global constants.
	*/
	exports.default = {
	  NAME: 'MOJS_TIMLINE_EDITOR_Hjs891ksPP',
	  IS_PERSIST_STATE: true,
	  PLAYER_HEIGHT: 40,
	  TIMELINE_HEIGHT: 22
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(26);

	var _extends3 = _interopRequireDefault(_extends2);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INITIAL_STATE = {
	  selected: null,
	  isMouseInside: false
	};

	var controls = function controls() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];
	  var data = action.data;


	  switch (action.type) {

	    case 'TOOLS_SET_SELECTED':
	      {
	        var selected = data === state.selected ? null : data;
	        return (0, _extends3.default)({}, state, { selected: selected });
	      }
	    case 'TOOLS_RESET_SELECTED':
	    case 'ADD_POINT':
	      {
	        return (0, _extends3.default)({}, state, { selected: null });
	      }

	    case 'CONTROLS_SET_MOUSE_INSIDE':
	      {
	        return (0, _extends3.default)({}, state, { isMouseInside: data });
	      }

	  }
	  return state;
	};

	exports.default = controls;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(67);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(26);

	var _extends3 = _interopRequireDefault(_extends2);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	var _createPoint = __webpack_require__(90);

	var _createPoint2 = _interopRequireDefault(_createPoint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INITIAL_STATE = [];

	var resetSelected = function resetSelected(state) {
	  var newState = [];
	  for (var i = 0; i < state.length; i++) {
	    newState[i] = (0, _extends3.default)({}, state[i], { isSelected: false });
	  }
	  return newState;
	};

	var togglePoint = function togglePoint(state, id) {
	  var newState = [];
	  for (var i = 0; i < state.length; i++) {
	    var newPoint = (0, _extends3.default)({}, state[i]);
	    if (newPoint.id === id) {
	      newPoint.isOpen = !newPoint.isOpen;
	    }
	    newState[i] = newPoint;
	  }
	  return newState;
	};

	var selectPoint = function selectPoint(state, id) {
	  var newState = [];
	  for (var i = 0; i < state.length; i++) {
	    var newPoint = (0, _extends3.default)({}, state[i]);
	    if (newPoint.id === id) {
	      newPoint.isSelected = !newPoint.isSelected;
	    } else {
	      newPoint.isSelected = false;
	    }
	    newState[i] = newPoint;
	  }

	  return newState;
	};

	var shiftSpot = function shiftSpot(state, data) {
	  var newState = [];
	  for (var i = 0; i < state.length; i++) {
	    var newPoint = (0, _extends3.default)({}, state[i]);
	    newState[i] = newPoint;
	    if (newPoint.id === data.id) {
	      var prop = (0, _extends3.default)({}, newPoint.props[data.prop]);
	      newPoint.props[data.prop] = prop;
	      var spots = [].concat((0, _toConsumableArray3.default)(prop.spots));
	      prop.spots = spots;
	      var _i = data.spotIndex;
	      spots[_i].duration += data.duration || 0;
	      spots[_i].delay += data.delay || 0;
	      spots[_i].duration = Math.max(spots[_i].duration, 40);
	      spots[_i].delay = Math.max(spots[_i].delay, 0);
	    }
	  }
	  return newState;
	};

	var insertPoint = function insertPoint() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];
	  var data = action.data;


	  switch (action.type) {

	    case 'ADD_POINT':
	      {
	        var newState = resetSelected(state);
	        newState.push((0, _createPoint2.default)(data, newState.length));
	        return newState;
	      }

	    case 'TOGGLE_OPEN_POINT':
	      {
	        return togglePoint(state, data);
	      }

	    case 'SELECT_POINT':
	      {
	        return selectPoint(state, data);
	      }

	    case 'SHIFT_SPOT':
	      {
	        return shiftSpot(state, data);
	      }

	  }

	  return state;
	};

	exports.default = insertPoint;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(68);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(83);
	module.exports = __webpack_require__(32).Array.from;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(71)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(72)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(52);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(73)
	  , $export        = __webpack_require__(30)
	  , redefine       = __webpack_require__(74)
	  , hide           = __webpack_require__(35)
	  , has            = __webpack_require__(48)
	  , Iterators      = __webpack_require__(75)
	  , $iterCreate    = __webpack_require__(76)
	  , setToStringTag = __webpack_require__(80)
	  , getPrototypeOf = __webpack_require__(82)
	  , ITERATOR       = __webpack_require__(81)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(77)
	  , descriptor     = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(80)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(35)(IteratorPrototype, __webpack_require__(81)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(37)
	  , dPs         = __webpack_require__(78)
	  , enumBugKeys = __webpack_require__(60)
	  , IE_PROTO    = __webpack_require__(57)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(42)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(79).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(36)
	  , anObject = __webpack_require__(37)
	  , getKeys  = __webpack_require__(46);

	module.exports = __webpack_require__(40) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31).document && document.documentElement;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(36).f
	  , has = __webpack_require__(48)
	  , TAG = __webpack_require__(81)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(58)('wks')
	  , uid        = __webpack_require__(59)
	  , Symbol     = __webpack_require__(31).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(48)
	  , toObject    = __webpack_require__(63)
	  , IE_PROTO    = __webpack_require__(57)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(33)
	  , $export        = __webpack_require__(30)
	  , toObject       = __webpack_require__(63)
	  , call           = __webpack_require__(84)
	  , isArrayIter    = __webpack_require__(85)
	  , toLength       = __webpack_require__(54)
	  , createProperty = __webpack_require__(86)
	  , getIterFn      = __webpack_require__(87);

	$export($export.S + $export.F * !__webpack_require__(89)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(37);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(75)
	  , ITERATOR   = __webpack_require__(81)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(36)
	  , createDesc      = __webpack_require__(44);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(88)
	  , ITERATOR  = __webpack_require__(81)('iterator')
	  , Iterators = __webpack_require__(75);
	module.exports = __webpack_require__(32).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(51)
	  , TAG = __webpack_require__(81)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(81)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _md = __webpack_require__(91);

	var _md2 = _interopRequireDefault(_md);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createSpot = function createSpot() {
	  var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return {
	    currentValue: o.currentValue || 0,
	    startValue: o.startValue || 0,
	    endValue: o.endValue || 0,
	    delay: o.delay || parseInt(Math.random() * 500, 10),
	    duration: o.duration || 500 + parseInt(Math.random() * 2000, 10),
	    isSelected: o.isSelected || false,
	    connected: o.connected || null
	  };
	};

	exports.default = function (data) {
	  var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var x = data.x;
	  var y = data.y;
	  var name = data.name;


	  return {
	    id: (0, _md2.default)('' + Math.random() + Math.random()),
	    name: name || 'point' + (i + 1),
	    isOpen: true,
	    isSelected: true,
	    currentProps: { x: x, y: y },
	    props: {
	      x: {
	        currentSpot: 0,
	        spots: [createSpot({ startValue: x }), createSpot(), createSpot()]
	      },
	      y: {
	        currentSpot: 0,
	        spots: [createSpot({ startValue: y }), createSpot(), createSpot()]
	      }
	    }
	  };
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(92),
	      utf8 = __webpack_require__(93).utf8,
	      isBuffer = __webpack_require__(94),
	      bin = __webpack_require__(93).bin,

	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already

	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;

	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }

	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;

	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;

	    for (var i = 0; i < m.length; i += 16) {

	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;

	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }

	    return crypt.endian([a, b, c, d]);
	  };

	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };

	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;

	  module.exports = function (message, options) {
	    if (message === undefined || message === null)
	      throw new Error('Illegal argument ' + message);

	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt.bytesToHex(digestbytes);
	  };

	})();


/***/ },
/* 92 */
/***/ function(module, exports) {

	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },

	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },

	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }

	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },

	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },

	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },

	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },

	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },

	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },

	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };

	  module.exports = crypt;
	})();


/***/ },
/* 93 */
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },

	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};

	module.exports = charenc;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * Determine if an object is Buffer
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install is-buffer`
	 */

	module.exports = function (obj) {
	  return !!(obj != null &&
	    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
	      (obj.constructor &&
	      typeof obj.constructor.isBuffer === 'function' &&
	      obj.constructor.isBuffer(obj))
	    ))
	}


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _mainPanel = __webpack_require__(140);

	var _mainPanel2 = _interopRequireDefault(_mainPanel);

	var _icons = __webpack_require__(209);

	var _icons2 = _interopRequireDefault(_icons);

	var _insertPoint = __webpack_require__(210);

	var _insertPoint2 = _interopRequireDefault(_insertPoint);

	var _point = __webpack_require__(214);

	var _point2 = _interopRequireDefault(_point);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(225);
	__webpack_require__(226);

	var TimelineEditor = (_class = function (_Component) {
	  (0, _inherits3.default)(TimelineEditor, _Component);

	  function TimelineEditor() {
	    (0, _classCallCheck3.default)(this, TimelineEditor);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TimelineEditor).apply(this, arguments));
	  }

	  (0, _createClass3.default)(TimelineEditor, [{
	    key: 'render',
	    value: function render() {
	      var store = this.context.store;

	      var state = store.getState();
	      this._state = state;

	      return (0, _preact.h)(
	        'div',
	        null,
	        (0, _preact.h)(_insertPoint2.default, { state: state }),
	        this._renderPoints(),
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['timeline-editor'],
	            onMouseMove: this._mouseMove },
	          (0, _preact.h)(_icons2.default, null),
	          (0, _preact.h)(_mainPanel2.default, {
	            state: state.mainPanel,
	            entireState: state,
	            isPlayerPassed: true })
	        )
	      );
	    }
	  }, {
	    key: '_renderPoints',
	    value: function _renderPoints() {
	      var results = [];
	      var points = this._state.points;


	      for (var i = 0; i < points.length; i++) {
	        results.push((0, _preact.h)(_point2.default, { state: points[i] }));
	      }

	      return results;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.context.store;

	      store.subscribe(this.forceUpdate.bind(this));
	      document.addEventListener('mousemove', this._docMouseMove);
	    }
	  }, {
	    key: '_mouseMove',
	    value: function _mouseMove(e) {
	      /* we cannot `stopPropagation` the event, because `hammerjs`
	         will not be able to work properly on `resize-handle`, so we
	         set the `isTimelinePanel` flag instead indicating that we are
	         inside the `timeline-editor` panel
	      */
	      e.isTimelinePanel = true;
	      var store = this.context.store;
	      var controls = this._state.controls;

	      if (controls.isMouseInside) {
	        return;
	      }

	      store.dispatch({ type: 'CONTROLS_SET_MOUSE_INSIDE', data: true });
	    }
	  }, {
	    key: '_docMouseMove',
	    value: function _docMouseMove(e) {
	      if (e.isTimelinePanel) {
	        return;
	      }
	      var store = this.context.store;
	      var controls = this._state.controls;


	      if (controls.isMouseInside) {
	        store.dispatch({ type: 'CONTROLS_SET_MOUSE_INSIDE', data: false });
	      }
	    }
	  }]);
	  return TimelineEditor;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_mouseMove', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_mouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_docMouseMove', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_docMouseMove'), _class.prototype)), _class);
	exports.default = TimelineEditor;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	var $Object = __webpack_require__(32).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(49)
	  , $getOwnPropertyDescriptor = __webpack_require__(99).f;

	__webpack_require__(100)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(62)
	  , createDesc     = __webpack_require__(44)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(43)
	  , has            = __webpack_require__(48)
	  , IE8_DOM_DEFINE = __webpack_require__(39)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(40) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(30)
	  , core    = __webpack_require__(32)
	  , fails   = __webpack_require__(41);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	module.exports = __webpack_require__(32).Object.getPrototypeOf;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(63)
	  , $getPrototypeOf = __webpack_require__(82);

	__webpack_require__(100)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(106);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	var $Object = __webpack_require__(32).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(30);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(40), 'Object', {defineProperty: __webpack_require__(36).f});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(110);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(111);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(118);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(113);
	module.exports = __webpack_require__(117).f('iterator');

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114);
	var global        = __webpack_require__(31)
	  , hide          = __webpack_require__(35)
	  , Iterators     = __webpack_require__(75)
	  , TO_STRING_TAG = __webpack_require__(81)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(115)
	  , step             = __webpack_require__(116)
	  , Iterators        = __webpack_require__(75)
	  , toIObject        = __webpack_require__(49);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(72)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(81);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(120);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	module.exports = __webpack_require__(32).Symbol;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(31)
	  , has            = __webpack_require__(48)
	  , DESCRIPTORS    = __webpack_require__(40)
	  , $export        = __webpack_require__(30)
	  , redefine       = __webpack_require__(74)
	  , META           = __webpack_require__(121).KEY
	  , $fails         = __webpack_require__(41)
	  , shared         = __webpack_require__(58)
	  , setToStringTag = __webpack_require__(80)
	  , uid            = __webpack_require__(59)
	  , wks            = __webpack_require__(81)
	  , wksExt         = __webpack_require__(117)
	  , wksDefine      = __webpack_require__(122)
	  , keyOf          = __webpack_require__(123)
	  , enumKeys       = __webpack_require__(124)
	  , isArray        = __webpack_require__(125)
	  , anObject       = __webpack_require__(37)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(43)
	  , createDesc     = __webpack_require__(44)
	  , _create        = __webpack_require__(77)
	  , gOPNExt        = __webpack_require__(126)
	  , $GOPD          = __webpack_require__(99)
	  , $DP            = __webpack_require__(36)
	  , $keys          = __webpack_require__(46)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(127).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(62).f  = $propertyIsEnumerable;
	  __webpack_require__(61).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(73)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(35)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(59)('meta')
	  , isObject = __webpack_require__(38)
	  , has      = __webpack_require__(48)
	  , setDesc  = __webpack_require__(36).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(41)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(31)
	  , core           = __webpack_require__(32)
	  , LIBRARY        = __webpack_require__(73)
	  , wksExt         = __webpack_require__(117)
	  , defineProperty = __webpack_require__(36).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(46)
	  , toIObject = __webpack_require__(49);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(46)
	  , gOPS    = __webpack_require__(61)
	  , pIE     = __webpack_require__(62);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(51);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49)
	  , gOPN      = __webpack_require__(127).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(47)
	  , hiddenKeys = __webpack_require__(60).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 128 */
/***/ function(module, exports) {



/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(122)('asyncIterator');

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(122)('observable');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(132);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(136);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(110);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	module.exports = __webpack_require__(32).Object.setPrototypeOf;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(30);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(135).set});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(38)
	  , anObject = __webpack_require__(37);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(33)(Function.call, __webpack_require__(99).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(138);
	var $Object = __webpack_require__(32).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(30)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(77)});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports !== 'undefined'){factory(exports);}else {var mod={exports:{}};factory(mod.exports);global.decko = mod.exports;}})(this,function(exports){'use strict';exports.__esModule = true;var EMPTY={};var HOP=Object.prototype.hasOwnProperty;var fns={memoize:function memoize(fn){var opt=arguments.length <= 1 || arguments[1] === undefined?EMPTY:arguments[1];var cache=opt.cache || {};return function(){for(var _len=arguments.length,a=Array(_len),_key=0;_key < _len;_key++) {a[_key] = arguments[_key];}var k=String(a[0]);if(opt.caseSensitive === false)k = k.toLowerCase();return HOP.call(cache,k)?cache[k]:cache[k] = fn.apply(this,a);};},debounce:function debounce(fn,opts){if(typeof opts === 'function'){var p=fn;fn = opts;opts = p;}var delay=opts && opts.delay || opts || 0,args=undefined,context=undefined,timer=undefined;return function(){for(var _len2=arguments.length,a=Array(_len2),_key2=0;_key2 < _len2;_key2++) {a[_key2] = arguments[_key2];}args = a;context = this;if(!timer)timer = setTimeout(function(){fn.apply(context,args);args = context = timer = null;},delay);};},bind:function bind(target,key,_ref){var fn=_ref.value;return {configurable:true,get:function get(){var value=fn.bind(this);Object.defineProperty(this,key,{value:value,configurable:true,writable:true});return value;}};}};var memoize=multiMethod(fns.memoize),debounce=multiMethod(fns.debounce),bind=multiMethod(function(f,c){return f.bind(c);},function(){return fns.bind;});exports.memoize = memoize;exports.debounce = debounce;exports.bind = bind;exports['default'] = {memoize:memoize,debounce:debounce,bind:bind};function multiMethod(inner,deco){deco = deco || inner.decorate || decorator(inner);var d=deco();return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}var l=args.length;return (l < 2?deco:l > 2?d:inner).apply(undefined,args);};}function decorator(fn){return function(opt){return typeof opt === 'function'?fn(opt):function(target,key,desc){desc.value = fn(desc.value,opt,target,key,desc);};};}});



/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _leftPanel = __webpack_require__(141);

	var _leftPanel2 = _interopRequireDefault(_leftPanel);

	var _bodyPanel = __webpack_require__(157);

	var _bodyPanel2 = _interopRequireDefault(_bodyPanel);

	var _rightPanel = __webpack_require__(189);

	var _rightPanel2 = _interopRequireDefault(_rightPanel);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(206);
	__webpack_require__(207);

	var MainPanel = (_class = function (_Component) {
	  (0, _inherits3.default)(MainPanel, _Component);

	  function MainPanel() {
	    (0, _classCallCheck3.default)(this, MainPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MainPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MainPanel, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return { deltaY: 0 };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var state = props.state;
	      var entireState = props.entireState;


	      var height = this._clampHeight(state.ySize - this.state.deltaY);
	      // check state of `hide button` regarding current height
	      this._checkHideButton(height);

	      return (0, _preact.h)(
	        'section',
	        { style: { height: height },
	          className: this._getClassNames(),
	          'data-component': 'main-panel' },
	        (0, _preact.h)(_leftPanel2.default, { state: entireState }),
	        (0, _preact.h)(_rightPanel2.default, { state: entireState,
	          onResize: this._resizeHeight,
	          onResizeEnd: this._resizeHeightEnd,
	          onResizeStart: this._resizeHeightStart }),
	        (0, _preact.h)(_bodyPanel2.default, { state: entireState })
	      );
	    }
	  }, {
	    key: '_resizeHeight',
	    value: function _resizeHeight(deltaY) {
	      var state = this.props.state;
	      var store = this.context.store;

	      // reset `isTransition` state that is responsible
	      // for applying a className with transition enabled

	      if (state.isTransition) {
	        store.dispatch({ type: 'MAIN_PANEL_RESET_TRANSITION' });
	      }

	      this.setState({ deltaY: this._clampDeltaY(deltaY) });
	    }
	  }, {
	    key: '_resizeHeightEnd',
	    value: function _resizeHeightEnd() {
	      var store = this.context.store;
	      var deltaY = this.state.deltaY;


	      var data = this._clampDeltaY(deltaY);
	      store.dispatch({ type: 'MAIN_PANEL_SET_YSIZE', data: data });
	      this.setState({ deltaY: 0 });
	    }
	  }, {
	    key: '_resizeHeightStart',
	    value: function _resizeHeightStart() {
	      var state = this.props.state;


	      if (state.ySize !== this._getMinHeight()) {
	        var store = this.context.store;

	        store.dispatch({ type: 'MAIN_PANEL_SAVE_YPREV' });
	      }
	    }

	    // HELPERS

	  }, {
	    key: '_getClassNames',
	    value: function _getClassNames() {
	      var store = this.context.store;
	      var state = this.props.state;


	      var className = CLASSES['main-panel'];
	      var transitionClass = state.isTransition ? CLASSES['main-panel--transition'] : '';

	      return className + ' ' + transitionClass;
	    }
	  }, {
	    key: '_clampHeight',
	    value: function _clampHeight(height) {
	      return Math.max(this._getMinHeight(), height);
	    }
	  }, {
	    key: '_clampDeltaY',
	    value: function _clampDeltaY(deltaY) {
	      var ySize = this.props.ySize;

	      var minSize = this._getMinHeight();
	      return ySize - deltaY <= minSize ? ySize - minSize : deltaY;
	    }
	  }, {
	    key: '_checkHideButton',
	    value: function _checkHideButton(height) {
	      var state = this.props.state;
	      var store = this.context.store;

	      // if we drag the panel and it is in `isHidden` state, reset that state

	      if (height > this._getMinHeight() && state.isHidden) {
	        store.dispatch({ type: 'MAIN_PANEL_SET_HIDDEN', data: false });
	      }
	      // if we drag the panel and it is not in `isHidden` state, set that state
	      // and reset prevHeight to add user the ability to expand the panel,
	      // otherwise it will stick at the bottom
	      if (height === this._getMinHeight() && !state.isHidden) {
	        store.dispatch({ type: 'MAIN_PANEL_SET_HIDDEN', data: true });
	      }
	    }
	  }, {
	    key: '_getMinHeight',
	    value: function _getMinHeight() {
	      return this.props.isPlayerPassed ? _constants2.default.PLAYER_HEIGHT : 0;
	    }
	  }]);
	  return MainPanel;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_resizeHeight', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_resizeHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_resizeHeightEnd', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_resizeHeightEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_resizeHeightStart', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_resizeHeightStart'), _class.prototype)), _class);
	exports.default = MainPanel;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _index = __webpack_require__(142);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(154);
	__webpack_require__(155);

	var LeftPanel = function (_Component) {
	  (0, _inherits3.default)(LeftPanel, _Component);

	  function LeftPanel() {
	    (0, _classCallCheck3.default)(this, LeftPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LeftPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(LeftPanel, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;


	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['left-panel'] },
	        (0, _preact.h)(_index2.default, { state: state.controls })
	      );
	    }
	  }]);
	  return LeftPanel;
	}(_preact.Component);

	exports.default = LeftPanel;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _point = __webpack_require__(143);

	var _point2 = _interopRequireDefault(_point);

	var _button = __webpack_require__(149);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(150);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	// import setSelected from '../../actions/set-selected';
	// import ResizeHandle from '../resize-handle';
	// import TimelinePanel from '../timeline-panel';

	var CLASSES = __webpack_require__(144);
	__webpack_require__(145);

	/* TODO:
	    [x] refactor to emit `action creators` in event handlers;
	*/
	var ToolsPanel = (_class = function (_Component) {
	  (0, _inherits3.default)(ToolsPanel, _Component);

	  function ToolsPanel() {
	    (0, _classCallCheck3.default)(this, ToolsPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ToolsPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ToolsPanel, [{
	    key: 'render',
	    value: function render() {
	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['tools-panel'] },
	        (0, _preact.h)(_point2.default, null),
	        (0, _preact.h)(
	          _button2.default,
	          { className: this._getClassFor('plus'), onClick: this._setPlus },
	          (0, _preact.h)(_icon2.default, { shape: 'plus' })
	        ),
	        (0, _preact.h)(
	          _button2.default,
	          { className: this._getClassFor('html'), onClick: this._setHtml },
	          'HTML'
	        ),
	        (0, _preact.h)(
	          'a',
	          { className: CLASSES['button'] + ' ' + CLASSES['is-logo'],
	            href: 'https://github.com/legomushroom/mojs-timeline-editor/',
	            target: '_blank' },
	          (0, _preact.h)(_icon2.default, { shape: 'mojs-logo' })
	        ),
	        (0, _preact.h)(
	          _button2.default,
	          { className: CLASSES['button'] + ' ' + CLASSES['is-link'] },
	          (0, _preact.h)(_icon2.default, { shape: 'link' })
	        )
	      );
	    }
	  }, {
	    key: '_getClassFor',
	    value: function _getClassFor(type) {
	      var state = this.props.state;
	      var selected = state.selected;


	      return selected === type ? CLASSES['is-active'] : '';
	    }
	  }, {
	    key: '_setPlus',
	    value: function _setPlus(e) {
	      var store = this.context.store;

	      store.dispatch({ type: 'TOOLS_SET_SELECTED', data: 'plus' });
	      // store.dispatch(setSelected('OBJECT'));
	    }
	  }, {
	    key: '_setHtml',
	    value: function _setHtml(e) {
	      var store = this.context.store;

	      store.dispatch({ type: 'TOOLS_SET_SELECTED', data: 'html' });
	      // store.dispatch(setSelected('HTML'));
	    }
	  }]);
	  return ToolsPanel;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_setPlus', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_setPlus'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_setHtml', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_setHtml'), _class.prototype)), _class);
	exports.default = ToolsPanel;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(144);
	__webpack_require__(145);

	var InsertPoint = function (_Component) {
	  (0, _inherits3.default)(InsertPoint, _Component);

	  function InsertPoint() {
	    (0, _classCallCheck3.default)(this, InsertPoint);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InsertPoint).apply(this, arguments));
	  }

	  (0, _createClass3.default)(InsertPoint, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;
	      var className = CLASSES['point'] + ' ' + (p.className || '');

	      return (0, _preact.h)('div', { className: className });
	    }
	  }]);
	  return InsertPoint;
	}(_preact.Component);

	exports.default = InsertPoint;

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = {
		"tools-panel": "_tools-panel_1ys7p_4",
		"button": "_button_1ys7p_13",
		"is-active": "_is-active_1ys7p_29",
		"is-logo": "_is-logo_1ys7p_35",
		"is-link": "_is-link_1ys7p_44"
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./tools-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./tools-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n._tools-panel_1ys7p_4 {\n  height:         22px;\n  background:     #3A0839;\n  box-shadow:     0 2px 4px rgba(0, 0, 0, 0.5);\n  padding-right:  5px;\n  position:       relative;\n  z-index:        1;\n}\n\n._button_1ys7p_13 {\n  position:     relative;\n  height:       22px;\n  line-height:  23px;\n  float:        left;\n  font-size:    7px;\n  font-weight:  bold;\n  letter-spacing: 0.5px;\n  padding:      0 7px;\n  fill:         white;\n  -webkit-user-select:  none;\n     -moz-user-select:  none;\n      -ms-user-select:  none;\n          user-select:  none;\n}\n\n._button_1ys7p_13 [data-component=\"icon\"] {\n  fill:       inherit;\n  display:    inline-block;\n  vertical-align: middle;\n  position:   relative;\n  top:         -1px;\n  width:       6px;\n  height:      6px;\n}\n\n._button_1ys7p_13:hover {\n  cursor:         pointer;\n  background:         #512750;\n}\n\n._button_1ys7p_13:active, ._button_1ys7p_13._is-active_1ys7p_29 {\n  background:         white;\n  color:         #3A0839;\n  fill:         #3A0839;\n}\n\n._button_1ys7p_13._is-logo_1ys7p_35 {\n  float:         right;\n  fill:         #FF512F;\n}\n\n._button_1ys7p_13._is-logo_1ys7p_35 [data-component=\"icon\"] {\n  width:         8px;\n  height:         8px;\n}\n\n._button_1ys7p_13._is-link_1ys7p_44 {\n  float:         right;\n  fill:         #FFFFFF;\n}\n\n._button_1ys7p_13._is-link_1ys7p_44 [data-component=\"icon\"] {\n  width:         8px;\n  height:         8px;\n}\n", ""]);

	// exports


/***/ },
/* 147 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(144);
	__webpack_require__(145);

	var ToolsPanelButton = function (_Component) {
	  (0, _inherits3.default)(ToolsPanelButton, _Component);

	  function ToolsPanelButton() {
	    (0, _classCallCheck3.default)(this, ToolsPanelButton);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ToolsPanelButton).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ToolsPanelButton, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;
	      var className = CLASSES['button'] + ' ' + (p.className || '');
	      return (0, _preact.h)(
	        'div',
	        { className: className, onClick: p.onClick },
	        p.children
	      );
	    }
	  }]);
	  return ToolsPanelButton;
	}(_preact.Component);

	exports.default = ToolsPanelButton;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(151);
	__webpack_require__(152);

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var shape = this.props.shape;

	      var markup = '\n      <svg viewBox="0 0 32 32">\n        <use xlink:href="#' + shape + '-shape" />\n      </svg>\n    ';

	      return (0, _preact.h)('div', { className: CLASSES['icon'],
	        'data-component': 'icon',
	        dangerouslySetInnerHTML: { __html: markup } });
	    }
	  }]);
	  return Icon;
	}(_preact.Component);

	exports.default = Icon;

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = {
		"icon": "_icon_1h4ls_6"
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./icon.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./icon.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._icon_1h4ls_6 {\n  position:     relative;\n  width:        8px;\n  height:       8px;\n  cursor:       pointer;\n  fill:         #FFFFFF;\n  display:      block\n}\n\n._icon_1h4ls_6 > svg {\n  position:     absolute;\n  left:     0;\n  top:     0;\n  width:     100%;\n  height:     100%;\n  fill:     inherit\n}\n\n._icon_1h4ls_6 > svg > use {\n  fill:     inherit\n}\n\n._icon_1h4ls_6:after {\n  content:     '';\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  z-index:     1\n}\n", ""]);

	// exports


/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = {
		"left-panel": "_left-panel_1w42h_4"
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(156);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./left-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./left-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n._left-panel_1w42h_4 {\n  position: absolute;\n  right: 195px;\n  top: 0;\n  left: 0;\n  width: 195px;\n  /*height: 100%;*/\n\n  background: #3A0839;\n}\n", ""]);

	// exports


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _pointsPanel = __webpack_require__(158);

	var _pointsPanel2 = _interopRequireDefault(_pointsPanel);

	var _timelinesPanel = __webpack_require__(173);

	var _timelinesPanel2 = _interopRequireDefault(_timelinesPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(186);
	__webpack_require__(187);

	var BodyPanel = function (_Component) {
	  (0, _inherits3.default)(BodyPanel, _Component);

	  function BodyPanel() {
	    (0, _classCallCheck3.default)(this, BodyPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BodyPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(BodyPanel, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;


	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['body-panel'] },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['body-panel__left'] },
	          (0, _preact.h)(_pointsPanel2.default, { state: state.points })
	        ),
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['body-panel__right'] },
	          (0, _preact.h)(_timelinesPanel2.default, { state: state.points })
	        )
	      );
	    }
	  }]);
	  return BodyPanel;
	}(_preact.Component);

	exports.default = BodyPanel;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _pointLine = __webpack_require__(159);

	var _pointLine2 = _interopRequireDefault(_pointLine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(170);
	__webpack_require__(171);

	var PointsPanel = function (_Component) {
	  (0, _inherits3.default)(PointsPanel, _Component);

	  function PointsPanel() {
	    (0, _classCallCheck3.default)(this, PointsPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PointsPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(PointsPanel, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;


	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['points-panel'] },
	        this._renderPoints(state)
	      );
	    }
	  }, {
	    key: '_renderPoints',
	    value: function _renderPoints(state) {
	      var points = [];
	      for (var i = 0; i < state.length; i++) {
	        points.push((0, _preact.h)(_pointLine2.default, { state: state[i] }));
	      }
	      return points;
	    }
	  }]);
	  return PointsPanel;
	}(_preact.Component);

	exports.default = PointsPanel;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(160);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _propertyLine = __webpack_require__(163);

	var _propertyLine2 = _interopRequireDefault(_propertyLine);

	var _icon = __webpack_require__(150);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(167);
	__webpack_require__(168);

	var PointLine = (_class = function (_Component) {
	  (0, _inherits3.default)(PointLine, _Component);

	  function PointLine() {
	    (0, _classCallCheck3.default)(this, PointLine);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PointLine).apply(this, arguments));
	  }

	  (0, _createClass3.default)(PointLine, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;


	      return (0, _preact.h)(
	        'div',
	        { className: this._getClassName(state) },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['label'], onClick: this._onCheck },
	          state.name
	        ),
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['open-toggle'], onClick: this._onOpen },
	          (0, _preact.h)(
	            'div',
	            { className: CLASSES['open-toggle__inner'] },
	            (0, _preact.h)(_icon2.default, { shape: 'dropdown' })
	          )
	        ),
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['body'] },
	          this._renderProperties(state)
	        )
	      );
	    }
	  }, {
	    key: '_getClassName',
	    value: function _getClassName(state) {
	      var openClass = state.isOpen ? CLASSES['is-open'] : '';
	      var checkClass = state.isSelected ? CLASSES['is-check'] : '';
	      return CLASSES['point-line'] + ' ' + openClass + ' ' + checkClass;
	    }
	  }, {
	    key: '_renderProperties',
	    value: function _renderProperties(state) {
	      var props = state.props;

	      var names = (0, _keys2.default)(props);
	      var results = [];

	      for (var i = 0; i < names.length; i++) {
	        var name = names[i];
	        results.push((0, _preact.h)(_propertyLine2.default, { id: state.id, name: name, state: state }));
	      }

	      return results;
	    }
	  }, {
	    key: '_onCheck',
	    value: function _onCheck() {
	      var state = this.props.state;
	      var store = this.context.store;


	      store.dispatch({ type: 'SELECT_POINT', data: state.id });
	    }
	  }, {
	    key: '_onOpen',
	    value: function _onOpen(e) {
	      e.stopPropagation();
	      var state = this.props.state;
	      var store = this.context.store;

	      store.dispatch({ type: 'TOGGLE_OPEN_POINT', data: state.id });
	    }
	  }]);
	  return PointLine;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_onCheck', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_onCheck'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_onOpen', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_onOpen'), _class.prototype)), _class);
	exports.default = PointLine;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	module.exports = __webpack_require__(32).Object.keys;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(63)
	  , $keys    = __webpack_require__(46);

	__webpack_require__(100)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(164);
	__webpack_require__(165);

	var PropertyLine = function (_Component) {
	  (0, _inherits3.default)(PropertyLine, _Component);

	  function PropertyLine() {
	    (0, _classCallCheck3.default)(this, PropertyLine);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PropertyLine).apply(this, arguments));
	  }

	  (0, _createClass3.default)(PropertyLine, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['property-line'] },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['label'] },
	          p.name
	        ),
	        (0, _preact.h)('input', { className: CLASSES['input'], value: this._getValue(p) })
	      );
	    }
	  }, {
	    key: '_getValue',
	    value: function _getValue(p) {
	      var name = p.name;
	      var state = p.state;
	      var currentProps = state.currentProps;


	      return currentProps[name];
	    }
	  }]);
	  return PropertyLine;
	}(_preact.Component);

	exports.default = PropertyLine;

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = {
		"property-line": "_property-line_odndb_3",
		"is-check": "_is-check_odndb_1",
		"label": "_label_odndb_9",
		"input": "_input_odndb_18"
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./property-line.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./property-line.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._property-line_odndb_3 {\n  position:       relative;\n  min-height:       24px;\n  cursor:       pointer;\n  color:       white;\n  font-size:       9px;\n  letter-spacing:       0.5px;\n  line-height:       24px;\n  background:       #3A0839;\n  border-top:       1px solid #512750;\n  width:       100%;\n}\n\n._property-line_odndb_3._is-check_odndb_1 {\n  background:       #FFFFFF;\n  color:       #3A0839;\n}\n._label_odndb_9 {\n  position: absolute;\n  left: 0;\n  width: 20%;\n  padding-left: 10px;\n  line-height: 23px;\n  /*padding-left: 15*$PX;*/\n}\n\n._input_odndb_18 {\n  display:      block;\n  color:        white;\n  background:   transparent;\n  border:       none;\n  height:       100%;\n  position:     absolute;\n  right:        0;\n  width:        80%;\n  /*left:         $width*$PX;*/\n  text-align:   center;\n  outline:      0;\n  font-size:    10px;\n  padding-top:  0;\n  /*outline: 1px solid cyan;*/\n}\n", ""]);

	// exports


/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = {
		"point-line": "_point-line_1tafp_4",
		"label": "_label_1tafp_9",
		"is-check": "_is-check_1tafp_16",
		"open-toggle": "_open-toggle_1tafp_17",
		"open-toggle__inner": "_open-toggle__inner_1tafp_31",
		"body": "_body_1tafp_25",
		"is-open": "_is-open_1tafp_30"
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point-line.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point-line.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n\n/*$PX:      1/16rem;*/\n\n/* old was 165px */\n\n/*$padding-left: 5*$PX;*/\n._point-line_1tafp_4 {\n  margin-top: 10px;\n  position: relative;\n  min-height: 24px;\n  cursor: pointer;\n  color: white;\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  line-height: 24px;\n  background: #3A0839;\n  border-top: 1px solid #512750;\n  border-bottom: 1px solid #512750;\n}\n._point-line_1tafp_4 ._label_1tafp_9 {\n  position: absolute;\n  left:     0;\n  right:    24px;\n  line-height: 21px;\n}\n._point-line_1tafp_4._is-check_1tafp_16 {\n  background: #FFFFFF;\n  color: #3A0839;\n}\n._point-line_1tafp_4._is-check_1tafp_16 ._open-toggle_1tafp_17 {}\n._point-line_1tafp_4._is-check_1tafp_16 ._open-toggle_1tafp_17:hover {\n  background: rgba(61,12,59,.2);\n}\n._point-line_1tafp_4._is-check_1tafp_16 ._open-toggle__inner_1tafp_31 {\n  fill: #3A0839;\n}\n._point-line_1tafp_4._is-check_1tafp_16 ._body_1tafp_25, ._point-line_1tafp_4._is-check_1tafp_16 ._label_1tafp_9 {\n  background: inherit;\n}\n._point-line_1tafp_4._is-open_1tafp_30 ._open-toggle__inner_1tafp_31 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._point-line_1tafp_4._is-open_1tafp_30 ._body_1tafp_25 {\n  display: block;\n}\n\n._label_1tafp_9 {\n  padding-left: 10px;\n  background: #3A0839;\n  height: 22px\n}\n\n._label_1tafp_9:hover {\n  background: #512750;\n}\n\n._body_1tafp_25 {\n  padding-left: 5px;\n  /*padding-bottom: 1*$PX;*/\n  background: #512750;\n  height: auto;\n  padding-top: 22px;\n  display: none;\n}\n\n._open-toggle_1tafp_17 {\n  position:      absolute;\n  top:           0;\n  right:         0;\n  width:         24px;\n  height:        22px;\n  background:    inherit;\n  border-left:   1px solid #512750;\n}\n\n._open-toggle_1tafp_17 [data-component=\"icon\"] {\n  fill:     inherit;\n  position: absolute;\n  left:     50%;\n  top:      50%;\n  width:    5px;\n  height:   5px;\n  margin-top:  -2.5px;\n  margin-left: -2.5px;\n}\n\n._open-toggle__inner_1tafp_31 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  fill: white;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n}\n\n._open-toggle_1tafp_17:hover {\n  background: #512750;\n}\n", ""]);

	// exports


/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = {
		"points-panel": "_points-panel_xkznz_3"
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./points-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./points-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._points-panel_xkznz_3 {\n  background:     rgba(0,0,0,.1);\n}\n", ""]);

	// exports


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _pointTimelineLine = __webpack_require__(174);

	var _pointTimelineLine2 = _interopRequireDefault(_pointTimelineLine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(183);
	__webpack_require__(184);

	var TimelinePanel = function (_Component) {
	  (0, _inherits3.default)(TimelinePanel, _Component);

	  function TimelinePanel() {
	    (0, _classCallCheck3.default)(this, TimelinePanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TimelinePanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(TimelinePanel, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['timelines-panel'] },
	        this._renderTimelines(state)
	      );
	    }
	  }, {
	    key: '_renderTimelines',
	    value: function _renderTimelines(state) {
	      var results = [];
	      for (var i = 0; i < state.length; i++) {
	        results.push((0, _preact.h)(_pointTimelineLine2.default, { state: state[i] }));
	      }

	      return results;
	    }
	  }]);
	  return TimelinePanel;
	}(_preact.Component);

	exports.default = TimelinePanel;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(160);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _pointTimeline = __webpack_require__(175);

	var _pointTimeline2 = _interopRequireDefault(_pointTimeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(180);
	__webpack_require__(181);

	var PointTimelineLine = function (_Component) {
	  (0, _inherits3.default)(PointTimelineLine, _Component);

	  function PointTimelineLine() {
	    (0, _classCallCheck3.default)(this, PointTimelineLine);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PointTimelineLine).apply(this, arguments));
	  }

	  (0, _createClass3.default)(PointTimelineLine, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;


	      return (0, _preact.h)(
	        'div',
	        { className: this._getClassName(state),
	          'data-component': 'point-timeline-line' },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['point-timeline-line__inner'] },
	          (0, _preact.h)('div', { className: CLASSES['point-timeline-line__header'] }),
	          (0, _preact.h)(
	            'div',
	            { className: CLASSES['point-timeline-line__body'] },
	            this._renderProperties(state)
	          )
	        )
	      );
	    }
	  }, {
	    key: '_renderProperties',
	    value: function _renderProperties(state) {
	      var props = state.props;

	      var results = [];

	      var keys = (0, _keys2.default)(props);
	      for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        results.push(this._renderProperty(key, props[key]));
	      }
	      return results;
	    }
	  }, {
	    key: '_renderProperty',
	    value: function _renderProperty(key, prop) {
	      var state = this.props.state;
	      var spots = prop.spots;

	      var results = [];

	      var prevSpot = spots[0];
	      for (var i = 0; i < spots.length; i++) {
	        var spot = spots[i];
	        var meta = { id: state.id, prop: key, spotIndex: i };
	        results.push((0, _preact.h)(_pointTimeline2.default, { duration: spot.duration, delay: spot.delay, meta: meta }));
	        prevSpot = spot;
	      }

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['point-timeline-line__property'] },
	        results
	      );
	    }
	  }, {
	    key: '_getClassName',
	    value: function _getClassName(state) {
	      var selectClass = state.isSelected ? CLASSES['is-selected'] : '';
	      var openClass = state.isOpen ? CLASSES['is-open'] : '';

	      return CLASSES['point-timeline-line'] + ' ' + selectClass + ' ' + openClass;
	    }
	  }]);
	  return PointTimelineLine;
	}(_preact.Component);

	exports.default = PointTimelineLine;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(26);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _hammerjs = __webpack_require__(176);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(177);
	__webpack_require__(178);

	var PointTimeline = function (_Component) {
	  (0, _inherits3.default)(PointTimeline, _Component);

	  function PointTimeline() {
	    (0, _classCallCheck3.default)(this, PointTimeline);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PointTimeline).apply(this, arguments));
	  }

	  (0, _createClass3.default)(PointTimeline, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return {
	        dDuration: 0,
	        dDelay: 0
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var duration = _props.duration;
	      var meta = _props.meta;
	      var delay = _props.delay;


	      delay /= 10;
	      delay += this.state.dDelay;
	      delay = Math.max(delay, 0);

	      duration /= 10;
	      duration += this.state.dDuration;
	      // duration = Math.max(duration, 40/10);

	      var style = { width: duration + delay + 'em' };
	      var delayStyle = { width: delay + 'em' };
	      var spotStyle = { transform: 'translate(' + delay + 'em, 0) rotate(45deg)' };
	      var spotClass = CLASSES['point-timeline__spot'];

	      return (0, _preact.h)(
	        'div',
	        { style: style,
	          className: this._getClassName(this.props),
	          'data-component': 'point-timeline' },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES['point-timeline__bar'] },
	          (0, _preact.h)('div', { style: delayStyle,
	            className: CLASSES['point-timeline__delay'] }),
	          (0, _preact.h)('div', { ref: function ref(el) {
	              _this2._leftSpot = el;
	            },
	            style: spotStyle,
	            className: this._getSpotClassName() }),
	          (0, _preact.h)('div', { ref: function ref(el) {
	              _this2._rightSpot = el;
	            },
	            className: this._getSpotClassName(true),
	            style: { zIndex: 50 - meta.spotIndex }
	          })
	        )
	      );
	    }
	  }, {
	    key: '_getSpotClassName',
	    value: function _getSpotClassName(isRight) {
	      var spotClass = CLASSES['point-timeline__spot'];
	      var rightClass = isRight ? CLASSES['point-timeline__spot--right'] : '';
	      return spotClass + ' ' + rightClass;
	    }
	  }, {
	    key: '_getClassName',
	    value: function _getClassName(props) {
	      return '' + CLASSES['point-timeline'];
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;

	      var mcLeft = new _hammerjs2.default.Manager(this._leftSpot);
	      var mcRight = new _hammerjs2.default.Manager(this._rightSpot);
	      mcLeft.add(new _hammerjs2.default.Pan());
	      mcRight.add(new _hammerjs2.default.Pan());
	      mcLeft.get('pan').set({ direction: _hammerjs2.default.DIRECTION_HORIZONTAL });
	      mcRight.get('pan').set({ direction: _hammerjs2.default.DIRECTION_HORIZONTAL });

	      mcRight.on('pan', function (e) {
	        _this3._pan(e, 'right');
	      });
	      mcRight.on('panend', function (e) {
	        _this3._panEnd(e, 'right');
	      });

	      mcLeft.on('pan', function (e) {
	        _this3._pan(e, 'left');
	      });
	      mcLeft.on('panend', function (e) {
	        _this3._panEnd(e, 'left');
	      });
	    }
	  }, {
	    key: '_pan',
	    value: function _pan(e, direction) {
	      if (direction === 'right') {
	        this.setState({ dDuration: e.deltaX });
	      }
	      if (direction === 'left') {
	        this.setState({ dDelay: e.deltaX });
	      }
	    }
	  }, {
	    key: '_panEnd',
	    value: function _panEnd(e, direction) {
	      var meta = this.props.meta;
	      var store = this.context.store;


	      if (direction === 'right') {
	        store.dispatch({
	          type: 'SHIFT_SPOT',
	          data: (0, _extends3.default)({
	            duration: this.state.dDuration * 10
	          }, meta, {
	            spotIndex: meta.spotIndex
	          })
	        });
	      }

	      if (direction === 'left') {
	        store.dispatch({
	          type: 'SHIFT_SPOT',
	          data: (0, _extends3.default)({
	            delay: this.state.dDelay * 10
	          }, meta, {
	            spotIndex: meta.spotIndex
	          })
	        });
	      }

	      this.setState({ dDuration: 0, dDelay: 0 });
	    }
	  }]);
	  return PointTimeline;
	}(_preact.Component);

	exports.default = PointTimeline;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }

	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}

	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}

	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event); // simple 'eventName' events

	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');


/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = {
		"point-timeline": "_point-timeline_449hi_4",
		"point-timeline__bar": "_point-timeline__bar_449hi_1",
		"point-timeline__delay": "_point-timeline__delay_449hi_1",
		"point-timeline__spot": "_point-timeline__spot_449hi_96",
		"point-timeline__spot--right": "_point-timeline__spot--right_449hi_1",
		"is-select": "_is-select_449hi_90"
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point-timeline.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point-timeline.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n\n/*$PX:      1/16rem;*/\n\n/* old was 165px */\n._point-timeline_449hi_4 {\n  height:     100%;\n  display:    inline-block;\n  vertical-align: top;\n  position:   relative;\n  font-size:  1px\n\n  /*&:first-child {\n    .point-timeline__spot {\n      display: block;\n    }\n  }*/\n}\n._point-timeline__bar_449hi_1 {\n  width:     100%;\n  height:     80%;\n  background:     #FFF5E3;\n  border-radius:     3px;\n  position:     relative;\n  top:     10%;\n  box-shadow:     2px 3px 0 rgba(0, 0, 0, 0.5);\n  overflow:     hidden\n}\n._point-timeline__delay_449hi_1 {\n\n  /*background: rgba(87,45,86,.4);*/\n  background:     #BCA5AA;\n  height:     100%;\n  position:     absolute;\n  left:     0;\n  z-index:     1;\n  border-top-left-radius:     3px;\n  border-bottom-left-radius:     3px\n}\n._point-timeline__spot_449hi_96 {\n  width:     6px;\n  height:     6px;\n  background:     #3A0839;\n  position:     absolute;\n  top:     50%;\n  margin-top:     -3px;\n  margin-left:     -3px;\n  cursor:     pointer;\n  -webkit-transform:     rotate(45deg);\n          transform:     rotate(45deg)\n\n  /*display: none;*/\n\n  /*&:before {\n      content: '';\n      position: absolute;\n      width: 200%;\n      height: 200%;\n      background: $c-orange;\n      z-index: -1;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      cursor: pointer;\n      opacity: 0;\n    }*/\n}\n._point-timeline__spot--right_449hi_1 {\n  right:     -3px;\n  display:     block\n}\n._point-timeline__spot_449hi_96:hover, ._point-timeline__spot_449hi_96:active {\n  background:     #512750;\n  outline:     1px solid #FF512F;\n  outline:     2px solid #BCA5AA\n\n  /*&:before {\n        opacity: 1;\n      }*/\n}\n._point-timeline__spot_449hi_96:after {\n  content:     '';\n  position:     absolute;\n  width:     300%;\n  height:     300%;\n  margin-left:     -100%;\n  margin-top:     -100%;\n  -webkit-transform:     rotate(45deg);\n          transform:     rotate(45deg);\n  -webkit-user-select:     none;\n     -moz-user-select:     none;\n      -ms-user-select:     none;\n          user-select:     none\n}\n._point-timeline__spot_449hi_96._is-select_449hi_90 {\n  background:     #FF512F\n}\n", ""]);

	// exports


/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = {
		"point-timeline-line": "_point-timeline-line_1hrq6_3",
		"point-timeline-line__inner": "_point-timeline-line__inner_1hrq6_1",
		"point-timeline-line__header": "_point-timeline-line__header_1hrq6_1",
		"point-timeline-line__body": "_point-timeline-line__body_1hrq6_1",
		"point-timeline-line__property": "_point-timeline-line__property_1hrq6_1",
		"is-open": "_is-open_1hrq6_36"
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point-timeline-line.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point-timeline-line.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._point-timeline-line_1hrq6_3 {\n  min-height:   24px;\n  margin-top:   10px;\n  position:     relative\n}\n\n._point-timeline-line__inner_1hrq6_1 {\n  display:   inline-block;\n  vertical-align:   top\n}\n\n._point-timeline-line__header_1hrq6_1 {\n  width:   100%;\n  height:   24px;\n  background:   #FFF5E3;\n  border-radius:   3px;\n  border-top-left-radius:   0;\n  border-bottom-left-radius:   0;\n  opacity:   .2\n}\n\n._point-timeline-line__body_1hrq6_1 {\n  height:   0;\n  overflow:   hidden\n}\n\n._point-timeline-line__property_1hrq6_1 {\n  height:   24px\n}\n\n._point-timeline-line_1hrq6_3:last-child {\n  padding-bottom:   0\n}\n\n._point-timeline-line_1hrq6_3._is-open_1hrq6_36 ._point-timeline-line_1hrq6_3 {}\n\n._point-timeline-line_1hrq6_3._is-open_1hrq6_36 ._point-timeline-line__body_1hrq6_1 {\n  height:   auto;\n  overflow:   visible\n}\n", ""]);

	// exports


/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = {
		"timelines-panel": "_timelines-panel_12eku_3"
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./timelines-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./timelines-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._timelines-panel_12eku_3 {\n  display:     inline-block;\n  /*min-width:   100%;*/\n  min-width:   1600px;\n  min-height:  100%;\n}\n", ""]);

	// exports


/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = {
		"body-panel": "_body-panel_1plp0_3",
		"body-panel__left": "_body-panel__left_1plp0_1",
		"body-panel__right": "_body-panel__right_1plp0_1"
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./body-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./body-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._body-panel_1plp0_3 {\n  position: absolute;\n  top: 22px;\n  left: 0;\n  right: 0;\n  bottom: 40px;\n  z-index: 0;\n  overflow: auto\n}\n\n._body-panel__left_1plp0_1, ._body-panel__right_1plp0_1 {\n  min-height: 100%;\n  padding-top: 1px\n}\n\n._body-panel__left_1plp0_1 {\n  float: left;\n  width: 195px;\n  background: #3A0839\n}\n\n._body-panel__right_1plp0_1 {\n  margin-left: 195px;\n  background: #512750;\n  min-height: 100%;\n  overflow: auto\n  /*min-width: 1600*$PX*/\n}\n", ""]);

	// exports


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _hideButton = __webpack_require__(190);

	var _hideButton2 = _interopRequireDefault(_hideButton);

	var _resizeHandle = __webpack_require__(194);

	var _resizeHandle2 = _interopRequireDefault(_resizeHandle);

	var _timelinePanel = __webpack_require__(199);

	var _timelinePanel2 = _interopRequireDefault(_timelinePanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(203);
	__webpack_require__(204);

	var RightPanel = (_class = function (_Component) {
	  (0, _inherits3.default)(RightPanel, _Component);

	  function RightPanel() {
	    (0, _classCallCheck3.default)(this, RightPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RightPanel).apply(this, arguments));
	  }

	  (0, _createClass3.default)(RightPanel, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;
	      var mainPanel = state.mainPanel;
	      var points = state.points;


	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['right-panel'] },
	        (0, _preact.h)(_hideButton2.default, { isHidden: mainPanel.isHidden, onTap: this._onHideButton }),
	        (0, _preact.h)(_resizeHandle2.default, this.props),
	        (0, _preact.h)(_timelinePanel2.default, { time: 15 })
	      );
	    }
	  }, {
	    key: '_onHideButton',
	    value: function _onHideButton() {
	      var store = this.context.store;


	      store.dispatch({ type: 'MAIN_PANEL_HIDE_TOGGLE' });
	    }
	  }]);
	  return RightPanel;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_onHideButton', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_onHideButton'), _class.prototype)), _class);
	exports.default = RightPanel;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _hammerjs = __webpack_require__(176);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _icon = __webpack_require__(150);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(191);
	__webpack_require__(192);

	var HideButton = function (_Component) {
	  (0, _inherits3.default)(HideButton, _Component);

	  function HideButton() {
	    (0, _classCallCheck3.default)(this, HideButton);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HideButton).apply(this, arguments));
	  }

	  (0, _createClass3.default)(HideButton, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;
	      var hideClassName = p.isHidden ? CLASSES['hide-button--is-hidden'] : '';
	      var className = CLASSES['hide-button'] + ' ' + hideClassName;

	      return (0, _preact.h)(
	        'div',
	        { className: className, 'data-component': 'hide-button' },
	        (0, _preact.h)('div', { className: CLASSES['hide-button__icon-container'] }),
	        (0, _preact.h)(_icon2.default, { shape: 'hide-icon' })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var mc = new _hammerjs2.default.Manager(this.base);
	      mc.add(new _hammerjs2.default.Tap());

	      mc.on('tap', function (e) {
	        _this2.props.onTap && _this2.props.onTap(e);
	      });
	    }
	  }]);
	  return HideButton;
	}(_preact.Component);

	exports.default = HideButton;

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = {
		"hide-button": "_hide-button_1thvy_7",
		"hide-button__icon-container": "_hide-button__icon-container_1thvy_1",
		"hide-button--is-hidden": "_hide-button--is-hidden_1thvy_1"
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(193);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./hide-button.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./hide-button.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._hide-button_1thvy_7 {\n  position: relative;;\n  top: -16px;\n  left: 50%;\n\n  display: inline-block;\n  width: 22px;\n  height: 16px;\n  cursor: pointer\n}\n\n._hide-button__icon-container_1thvy_1 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  background: #3A0839\n}\n\n._hide-button_1thvy_7 [data-component=\"icon\"] {\n  position: absolute;\n  top: 4px;\n  left: 7px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  margin-top: 1px;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s\n}\n\n._hide-button--is-hidden_1thvy_1 [data-component=\"icon\"] {\n  margin-top: 0;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  -webkit-transform: rotate( 180deg );\n          transform: rotate( 180deg )\n}\n\n._hide-button_1thvy_7:hover {\n  opacity: .85\n}\n\n._hide-button_1thvy_7:active {\n  opacity: 1\n}\n", ""]);

	// exports


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(3);

	var _hammerjs = __webpack_require__(176);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _propagatingHammerjs = __webpack_require__(195);

	var _propagatingHammerjs2 = _interopRequireDefault(_propagatingHammerjs);

	var _icon = __webpack_require__(150);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(196);
	__webpack_require__(197);

	var ResizeHandle = function (_Component) {
	  (0, _inherits3.default)(ResizeHandle, _Component);

	  function ResizeHandle() {
	    (0, _classCallCheck3.default)(this, ResizeHandle);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ResizeHandle).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ResizeHandle, [{
	    key: 'render',
	    value: function render() {
	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['resize-handle'],
	          'data-component': 'resize-handle' },
	        (0, _preact.h)(_icon2.default, { shape: 'ellipsis' })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var mc = (0, _propagatingHammerjs2.default)(new _hammerjs2.default.Manager(this.base));
	      var p = this.props;
	      var store = this.context.store;


	      mc.add(new _hammerjs2.default.Pan({ threshold: 0 }));
	      mc.on('pan', function (e) {
	        p.onResize(e.deltaY);
	        e.stopPropagation();
	      }).on('panstart', function (e) {
	        p.onResizeStart && p.onResizeStart(e);
	        e.stopPropagation();
	      }).on('panend', function (e) {
	        p.onResizeEnd(e);
	        e.stopPropagation();
	      });
	    }
	  }]);
	  return ResizeHandle;
	}(_preact.Component);

	exports.default = ResizeHandle;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	(function (factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    window.propagating = factory();
	  }
	}(function () {
	  var _firstTarget = null; // singleton, will contain the target element where the touch event started

	  /**
	   * Extend an Hammer.js instance with event propagation.
	   *
	   * Features:
	   * - Events emitted by hammer will propagate in order from child to parent
	   *   elements.
	   * - Events are extended with a function `event.stopPropagation()` to stop
	   *   propagation to parent elements.
	   * - An option `preventDefault` to stop all default browser behavior.
	   *
	   * Usage:
	   *   var hammer = propagatingHammer(new Hammer(element));
	   *   var hammer = propagatingHammer(new Hammer(element), {preventDefault: true});
	   *
	   * @param {Hammer.Manager} hammer   An hammer instance.
	   * @param {Object} [options]        Available options:
	   *                                  - `preventDefault: true | false | 'mouse' | 'touch' | 'pen'`.
	   *                                    Enforce preventing the default browser behavior.
	   *                                    Cannot be set to `false`.
	   * @return {Hammer.Manager} Returns the same hammer instance with extended
	   *                          functionality
	   */
	  return function propagating(hammer, options) {
	    var _options = options || {
	      preventDefault: false
	    };

	    if (hammer.Manager) {
	      // This looks like the Hammer constructor.
	      // Overload the constructors with our own.
	      var Hammer = hammer;

	      var PropagatingHammer = function(element, options) {
	        var o = Object.create(_options);
	        if (options) Hammer.assign(o, options);
	        return propagating(new Hammer(element, o), o);
	      };
	      Hammer.assign(PropagatingHammer, Hammer);

	      PropagatingHammer.Manager = function (element, options) {
	        var o = Object.create(_options);
	        if (options) Hammer.assign(o, options);
	        return propagating(new Hammer.Manager(element, o), o);
	      };

	      return PropagatingHammer;
	    }

	    // create a wrapper object which will override the functions
	    // `on`, `off`, `destroy`, and `emit` of the hammer instance
	    var wrapper = Object.create(hammer);

	    // attach to DOM element
	    var element = hammer.element;

	    if(!element.hammer) element.hammer = [];
	    element.hammer.push(wrapper);

	    // register an event to catch the start of a gesture and store the
	    // target in a singleton
	    hammer.on('hammer.input', function (event) {
	      if (_options.preventDefault === true || (_options.preventDefault === event.pointerType)) {
	        event.preventDefault();
	      }
	      if (event.isFirst) {
	        _firstTarget = event.target;
	      }
	    });

	    /** @type {Object.<String, Array.<function>>} */
	    wrapper._handlers = {};

	    /**
	     * Register a handler for one or multiple events
	     * @param {String} events    A space separated string with events
	     * @param {function} handler A callback function, called as handler(event)
	     * @returns {Hammer.Manager} Returns the hammer instance
	     */
	    wrapper.on = function (events, handler) {
	      // register the handler
	      split(events).forEach(function (event) {
	        var _handlers = wrapper._handlers[event];
	        if (!_handlers) {
	          wrapper._handlers[event] = _handlers = [];

	          // register the static, propagated handler
	          hammer.on(event, propagatedHandler);
	        }
	        _handlers.push(handler);
	      });

	      return wrapper;
	    };

	    /**
	     * Unregister a handler for one or multiple events
	     * @param {String} events      A space separated string with events
	     * @param {function} [handler] Optional. The registered handler. If not
	     *                             provided, all handlers for given events
	     *                             are removed.
	     * @returns {Hammer.Manager}   Returns the hammer instance
	     */
	    wrapper.off = function (events, handler) {
	      // unregister the handler
	      split(events).forEach(function (event) {
	        var _handlers = wrapper._handlers[event];
	        if (_handlers) {
	          _handlers = handler ? _handlers.filter(function (h) {
	            return h !== handler;
	          }) : [];

	          if (_handlers.length > 0) {
	            wrapper._handlers[event] = _handlers;
	          }
	          else {
	            // remove static, propagated handler
	            hammer.off(event, propagatedHandler);
	            delete wrapper._handlers[event];
	          }
	        }
	      });

	      return wrapper;
	    };

	    /**
	     * Emit to the event listeners
	     * @param {string} eventType
	     * @param {Event} event
	     */
	    wrapper.emit = function(eventType, event) {
	      _firstTarget = _firstTarget || event.target;
	      hammer.emit(eventType, event);
	    };

	    wrapper.destroy = function () {
	      // Detach from DOM element
	      var hammers = hammer.element.hammer;
	      var idx = hammers.indexOf(wrapper);
	      if(idx !== -1) hammers.splice(idx,1);
	      if(!hammers.length) delete hammer.element.hammer;

	      // clear all handlers
	      wrapper._handlers = {};

	      // call original hammer destroy
	      hammer.destroy();
	    };

	    // split a string with space separated words
	    function split(events) {
	      return events.match(/[^ ]+/g);
	    }

	    /**
	     * A static event handler, applying event propagation.
	     * @param {Object} event
	     */
	    function propagatedHandler(event) {
	      // let only a single hammer instance handle this event
	      if (event.type !== 'hammer.input') {
	        // it is possible that the same srcEvent is used with multiple hammer events,
	        // we keep track on which events are handled in an object _handled
	        if (!event.srcEvent._handled) {
	          event.srcEvent._handled = {};
	        }

	        if (event.srcEvent._handled[event.type]) {
	          return;
	        }
	        else {
	          event.srcEvent._handled[event.type] = true;
	        }
	      }

	      // attach a stopPropagation function to the event
	      var stopped = false;
	      event.stopPropagation = function () {
	        stopped = true;
	      };

	      //wrap the srcEvent's stopPropagation to also stop hammer propagation:
	      var srcStop = event.srcEvent.stopPropagation.bind(event.srcEvent);
	      if(typeof srcStop == "function") {
	        event.srcEvent.stopPropagation = function(){
	          srcStop();
	          event.stopPropagation();
	        }
	      }

	      // attach firstTarget property to the event
	      event.firstTarget = _firstTarget;

	      // propagate over all elements (until stopped)
	      var elem = _firstTarget;
	      while (elem && !stopped) {
	        var elemHammer = elem.hammer;
	        if(elemHammer){
	          var _handlers;
	          for(var k = 0; k < elemHammer.length; k++){
	            _handlers = elemHammer[k]._handlers[event.type];
	            if(_handlers) for (var i = 0; i < _handlers.length && !stopped; i++) {
	              _handlers[i](event);
	            }
	          }
	        }
	        elem = elem.parentNode;
	      }
	    }

	    return wrapper;
	  };
	}));


/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = {
		"resize-handle": "_resize-handle_qa5s6_7"
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(198);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./resize-handle.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./resize-handle.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._resize-handle_qa5s6_7 {\n  position: relative;\n  top: -16px;\n  left: 50%;\n  display: inline-block;\n  width: 32px;\n  height: 16px;\n  margin-left: 5px;\n  cursor: n-resize;\n  overflow: hidden;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n  background: #3A0839;\n  box-shadow: inset 0 0 0 1px #512750\n}\n\n._resize-handle_qa5s6_7:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2\n}\n\n._resize-handle_qa5s6_7 [data-component=\"icon\"] {\n  position: absolute;\n  top: -8px;\n  left: 0px;\n  width: 32px;\n  height: 32px;\n  display: inline-block\n}\n\n._resize-handle_qa5s6_7:hover {\n  opacity: .85\n}\n", ""]);

	// exports


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(200);
	__webpack_require__(201);

	var TimelinePanel = (_class = function (_Component) {
	  (0, _inherits3.default)(TimelinePanel, _Component);

	  function TimelinePanel(props) {
	    (0, _classCallCheck3.default)(this, TimelinePanel);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TimelinePanel).call(this, props));

	    var DASHES_PER_SEC = 20;
	    _this.state = {
	      scale: props.scale || 1,
	      dashesPerSec: DASHES_PER_SEC,
	      DASH_STEP: 100 * (1 / DASHES_PER_SEC)
	    };

	    _this._dashesCnt = props.time * _this.state.dashesPerSec;
	    return _this;
	  }

	  (0, _createClass3.default)(TimelinePanel, [{
	    key: 'render',
	    value: function render() {
	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['timeline-panel'] },
	        this._timeline
	      );
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._timeline = this._createTimeline();
	    }

	    // will be removed when `preact` issue with nested `svg` will be fixed

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._svg.classList.add(CLASSES['main-svg']);
	    }
	  }, {
	    key: '_createTimeline',
	    value: function _createTimeline() {
	      var _this2 = this;

	      var dashes = this._compileDashes();
	      var pointerValues = this._compileLabels();
	      var scale = this.state.scale;


	      var timeline = (0, _preact.h)(
	        'svg',
	        { ref: function ref(el) {
	            _this2._svg = el;
	          } },
	        (0, _preact.h)(
	          'g',
	          { style: { 'font-size': scale + 'px' } },
	          dashes,
	          pointerValues
	        )
	      );
	      return timeline;
	    }
	  }, {
	    key: '_createDash',
	    value: function _createDash(dashNumber) {
	      var _state = this.state;
	      var dashesPerSec = _state.dashesPerSec;
	      var scale = _state.scale;
	      var DASH_STEP = _state.DASH_STEP;

	      var dashType = this._getDashType(dashNumber, dashesPerSec);

	      var color = dashType === 'large' ? '#fff' : '#ae9bae';
	      var height = dashType === 'large' ? 7 : dashType === 'middle' ? 6 : 4;
	      var x = DASH_STEP * dashNumber;
	      var y = _constants2.default.TIMELINE_HEIGHT - height;

	      return (0, _preact.h)('rect', { width: '1', height: height, x: x + 'em', y: y, fill: color });
	    }
	  }, {
	    key: '_getDashType',
	    value: function _getDashType(dashNumber, dashesPerSec) {
	      var isLarge = !(dashNumber % (dashesPerSec / 2)) || dashNumber === 0;
	      var isMiddle = !(dashNumber % (dashesPerSec / 4));
	      return isLarge ? 'large' : isMiddle ? 'middle' : 'small';
	    }
	  }, {
	    key: '_compileDashes',
	    value: function _compileDashes() {
	      var dashes = [];
	      for (var j = 0; j <= this._dashesCnt; j++) {
	        dashes.push(this._createDash(j));
	      }

	      return dashes;
	    }
	  }, {
	    key: '_compileLabels',
	    value: function _compileLabels() {
	      var labels = [];
	      var _state2 = this.state;
	      var dashesPerSec = _state2.dashesPerSec;
	      var scale = _state2.scale;
	      var DASH_STEP = _state2.DASH_STEP;


	      for (var j = 0, value = 0; j <= this._dashesCnt; j += dashesPerSec / 2, value += 500) {
	        var textAnchor = j === 0 ? 'start' : 'middle';
	        var x = DASH_STEP * j;
	        var y = _constants2.default.TIMELINE_HEIGHT / 2;

	        labels.push((0, _preact.h)(
	          'svg',
	          { x: x + 'em', style: { overflow: 'visible' } },
	          (0, _preact.h)(
	            'text',
	            { y: y, className: CLASSES['label'], 'text-anchor': textAnchor },
	            value
	          )
	        ));
	      }

	      return labels;
	    }
	  }]);
	  return TimelinePanel;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_createTimeline', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_createTimeline'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_createDash', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_createDash'), _class.prototype)), _class);
	exports.default = TimelinePanel;

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = {
		"timeline-panel": "_timeline-panel_1hab5_3",
		"label": "_label_1hab5_11",
		"main-svg": "_main-svg_1hab5_16"
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./timeline-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./timeline-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._timeline-panel_1hab5_3 {\n  position:     relative;\n  top:         -20px;\n  height:       22px;\n  background:   #512750;\n  box-shadow:   0 2px 4px black;\n}\n\n._label_1hab5_11 {\n  fill:         #FFFFFF;\n  font-size:    7px;\n}\n\n._main-svg_1hab5_16 {\n  width:        100%;\n  height:       100%;\n}\n", ""]);

	// exports


/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = {
		"right-panel": "_right-panel_1rm1g_3"
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./right-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./right-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._right-panel_1rm1g_3 {\n  position: absolute;\n  right: 0;\n  top: 0;\n  left:   195px;\n  z-index: 1;\n  height: 24px;\n  /*height: 100%;*/\n\n  color: #FFFFFF;\n}\n", ""]);

	// exports


/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = {
		"main-panel": "_main-panel_cbnjb_5",
		"main-panel--transition": "_main-panel--transition_cbnjb_1"
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(208);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./main-panel.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./main-panel.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._main-panel_cbnjb_5 {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100px;\n  color: white;\n  background: #3A0839\n}\n\n._main-panel--transition_cbnjb_1 {\n  -webkit-transition: height 0.4s;\n  transition: height 0.4s\n}\n", ""]);

	// exports


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _preact = __webpack_require__(3);

	var Icons = function Icons() {
	  return (0, _preact.h)('div', { dangerouslySetInnerHTML: { __html: '\n    <svg height="0" version="1.1" xmlns="http://www.w3.org/2000/svg"\n        style="position:absolute; margin-left: -100%; width:0; height:0;"\n        xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="ellipsis-shape">\n        <circle cx="11" cy="16" r="1"></circle>\n        <circle cx="16" cy="16" r="1"></circle>\n        <circle cx="21" cy="16" r="1"></circle>\n      </g>\n      <path id="mojs-logo-shape" d="M18.4678907,2.67700048 C19.488586,3.25758625 20.2789227,4.18421651 20.87823,5.1973579 C24.0807788,10.501451 27.2777091,15.8113116 30.480258,21.1154047 C31.1320047,22.1612281 31.7706417,23.2647256 31.9354512,24.5162532 C32.188284,26.0619186 31.6919826,27.7363895 30.5589171,28.80336 C29.4501984,29.8857103 27.8807622,30.3182659 26.3806209,30.3048086 C19.4511293,30.3086535 12.5235106,30.3086535 5.59401901,30.3048086 C3.71556494,30.343258 1.69852104,29.5723478 0.683444165,27.8709623 C-0.406546132,26.1099803 -0.0975282643,23.7914822 0.940022637,22.0843293 C4.34296485,16.4130445 7.76650826,10.7532945 11.1825603,5.08969961 C11.9747698,3.74781595 13.1846215,2.60202418 14.6847628,2.18292584 C15.9451812,1.81573418 17.3348251,2.01182606 18.4678907,2.67700048 Z M15.3334668,9.51526849 C15.6146238,9.03779476 16.0791597,9.02250655 16.3785679,9.4929547 L25.2763555,23.4736913 C25.5723919,23.9388414 25.3568433,24.3159201 24.8074398,24.3159202 L7.62314647,24.3159205 C7.06813505,24.3159206 6.84622798,23.9286889 7.12728913,23.4513779 L15.3334668,9.51526849 Z" fill-rule="evenodd"></path>\n      <path id="hide-icon-shape" d="M18.0297509,24.5024819 C18.1157323,24.4325886 18.1989631,24.3576024 18.2790422,24.2775233 L31.0556518,11.5009137 C32.3147827,10.2417828 32.3147827,8.20347913 31.0556518,6.9443482 C29.7965209,5.68521727 27.7582172,5.68521727 26.4990863,6.9443482 L15.9992406,17.4441939 L5.50091369,6.94586705 C4.24330161,5.68825498 2.20347913,5.68673612 0.944348198,6.94586705 C-0.314782733,8.20499798 -0.314782733,10.2433016 0.944348198,11.5024325 L13.7209578,24.2790422 C14.9005165,25.4586008 16.7638781,25.5331444 18.0298642,24.5026731 L18.0297509,24.5024819 Z"></path>\n      <path id="plus-shape" d="M19.2,19.2 L28.7999796,19.2 C30.5628602,19.2 32,17.7673112 32,16 C32,14.2362849 30.5673021,12.8 28.7999796,12.8 L19.2,12.8 L19.2,3.20002043 C19.2,1.43713981 17.7673112,-1.17239551e-13 16,-1.17239551e-13 C14.2362849,-1.13686838e-13 12.8,1.43269795 12.8,3.20002043 L12.8,12.8 L3.20002043,12.8 C1.43713981,12.8 0,14.2326888 0,16 C0,17.7637151 1.43269795,19.2 3.20002043,19.2 L12.8,19.2 L12.8,28.7999796 C12.8,30.5628602 14.2326888,32 16,32 C17.7637151,32 19.2,30.5673021 19.2,28.7999796 L19.2,19.2 Z"></path>\n      <path id="dropdown-shape" d="M16,25 L0,9 L32,9 L16,25 Z"></path>\n      <path id="link-shape" d="M16.5676741,23.5590551 L12.8672799,27.2545932 C11.9421813,28.1784777 10.7227332,28.6824147 9.41918528,28.6824147 C8.11563732,28.6824147 6.89618922,28.1784777 5.97109067,27.2545932 L4.79369251,26.0787402 C3.86859396,25.1548556 3.36399474,23.9370079 3.36399474,22.6351706 C3.36399474,21.3333333 3.86859396,20.1154856 4.79369251,19.191601 L9.71353482,14.2782152 C11.6057819,12.3884514 14.717477,12.3884514 16.609724,14.2782152 L18.3758213,16.0419948 C19.0486202,16.7139108 20.0998686,16.7139108 20.7726675,16.0419948 C21.4454665,15.3700787 21.4454665,14.32021 20.7726675,13.648294 L19.0065703,11.8845144 C15.8107753,8.69291339 10.5545335,8.69291339 7.3587385,11.8845144 L2.39684625,16.7979003 C0.840998686,18.351706 0,20.4094488 0,22.6351706 C0,24.8608924 0.840998686,26.8766404 2.39684625,28.4304462 L3.57424442,29.6062992 C5.13009198,31.160105 7.19053876,32 9.37713535,32 C11.5637319,32 13.6241787,31.160105 15.1800263,29.6062992 L18.8804205,25.9107612 C19.5532194,25.2388451 19.5532194,24.1889764 18.8804205,23.5170604 C18.2917214,22.8871391 17.2404731,22.8871391 16.5676741,23.5590551 Z M28.4678055,2.39370079 C26.911958,0.839895013 24.8515112,0 22.6649146,0 C20.478318,0 18.4178712,0.839895013 16.8620237,2.39370079 L13.7503285,5.50131234 C13.0775296,6.17322835 13.0775296,7.22309711 13.7503285,7.89501312 C14.4231275,8.56692913 15.4743758,8.56692913 16.1471748,7.89501312 L19.2588699,4.78740157 C20.1839685,3.86351706 21.4034166,3.35958005 22.7069645,3.35958005 C24.0105125,3.35958005 25.2299606,3.86351706 26.1550591,4.78740157 L27.3324573,5.96325459 C28.2575558,6.88713911 28.7621551,8.10498688 28.7621551,9.40682415 C28.7621551,10.7086614 28.2575558,11.9265092 27.3324573,12.8503937 L23.0013141,17.1338583 C22.0762155,18.0577428 20.8567674,18.5616798 19.5532194,18.5616798 C18.2496715,18.5616798 17.0302234,18.0577428 16.1051248,17.1338583 L14.3390276,15.3700787 C13.6662286,14.6981627 12.6149803,14.6981627 11.9421813,15.3700787 C11.2693824,16.0419948 11.2693824,17.0918635 11.9421813,17.7637795 L13.7082786,19.5275591 C15.2641261,21.0813648 17.3245729,21.9212598 19.5111695,21.9212598 C21.6977661,21.9212598 23.7582129,21.0813648 25.3140604,19.5275591 L29.6031537,15.2440945 C31.1590013,13.6902887 32,11.6325459 32,9.4488189 C32,7.26509186 31.1590013,5.20734908 29.6031537,3.65354331 L28.4678055,2.39370079 Z"></path>\n      <polygon id="spot-shape" points="16 0.443650814 31.5563492 16 16 31.5563492 0.443650814 16"></polygon>\n    </svg>' } });
	};

	exports.default = Icons;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _extends2 = __webpack_require__(26);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(211);
	__webpack_require__(212);

	var Point = (_class = function (_Component) {
	  (0, _inherits3.default)(Point, _Component);

	  function Point() {
	    (0, _classCallCheck3.default)(this, Point);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Point).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Point, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return { x: 0, y: 0 };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;

	      var style = {
	        display: this._isVisible() ? 'block' : 'none',
	        transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)'
	      };

	      return (0, _preact.h)('div', { style: style,
	        onClick: this._addPoint,
	        className: CLASSES['insert-point'], 'data-component': 'insert-point' });
	    }

	    /* Method to find out if the insert point should be visible. */

	  }, {
	    key: '_isVisible',
	    value: function _isVisible() {
	      var controls = this.props.state.controls;
	      var selected = controls.selected;

	      var isPlus = selected === 'plus';
	      var isOut = !controls.isMouseInside;
	      return isOut && isPlus;
	    }
	  }, {
	    key: '_addPoint',
	    value: function _addPoint() {
	      var store = this.context.store;

	      store.dispatch({ type: 'ADD_POINT', data: (0, _extends3.default)({}, this.state) });
	    }
	  }, {
	    key: '_mouseMove',
	    value: function _mouseMove(e) {
	      if (!this._isVisible()) {
	        return;
	      }
	      var x = e.pageX;
	      var y = e.pageY;

	      this.setState({ x: x, y: y });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('mousemove', this._mouseMove);
	    }
	  }]);
	  return Point;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_addPoint', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_addPoint'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_mouseMove', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_mouseMove'), _class.prototype)), _class);
	exports.default = Point;

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = {
		"insert-point": "_insert-point_wch35_3"
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(213);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./insert-point.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./insert-point.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._insert-point_wch35_3 {\n  position:   absolute;\n  width:      6px;\n  height:     6px;\n  border-radius: 50%;\n  background: #FF512F;\n  margin-left: -3px;\n  margin-top:  -3px;\n}\n", ""]);

	// exports


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(96);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _slicedToArray2 = __webpack_require__(215);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _getPrototypeOf = __webpack_require__(101);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(104);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(105);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(109);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(131);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(3);

	var _decko = __webpack_require__(139);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(222);
	__webpack_require__(223);

	var Point = (_class = function (_Component) {
	  (0, _inherits3.default)(Point, _Component);

	  function Point() {
	    (0, _classCallCheck3.default)(this, Point);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Point).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Point, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;
	      // const {props} = state;

	      var _getCoords2 = this._getCoords(state);

	      var _getCoords3 = (0, _slicedToArray3.default)(_getCoords2, 2);

	      var x = _getCoords3[0];
	      var y = _getCoords3[1];


	      var style = {
	        transform: 'translate(' + x + 'px, ' + y + 'px)'
	      };

	      return (0, _preact.h)('div', { style: style,
	        className: this._getClassName(state),
	        onClick: this._onClick,
	        title: state.name,
	        'data-component': 'point' });
	    }
	  }, {
	    key: '_getCoords',
	    value: function _getCoords(state) {
	      var _state$currentProps = state.currentProps;
	      var x = _state$currentProps.x;
	      var y = _state$currentProps.y;


	      return [x, y];
	    }
	  }, {
	    key: '_getClassName',
	    value: function _getClassName(state) {
	      var selectClass = state.isSelected ? CLASSES['is-selected'] : '';
	      return CLASSES['point'] + ' ' + selectClass;
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(e) {
	      var state = this.props.state;
	      var store = this.context.store;


	      store.dispatch({ type: 'SELECT_POINT', data: state.id });
	    }
	  }]);
	  return Point;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_onClick', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_onClick'), _class.prototype)), _class);
	exports.default = Point;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(216);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(219);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(217), __esModule: true };

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	__webpack_require__(70);
	module.exports = __webpack_require__(218);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(88)
	  , ITERATOR  = __webpack_require__(81)('iterator')
	  , Iterators = __webpack_require__(75);
	module.exports = __webpack_require__(32).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(220), __esModule: true };

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	__webpack_require__(70);
	module.exports = __webpack_require__(221);

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(37)
	  , get      = __webpack_require__(87);
	module.exports = __webpack_require__(32).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = {
		"point": "_point_mlokt_3",
		"is-selected": "_is-selected_mlokt_28"
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(224);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./point.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._point_mlokt_3 {\n  position:   absolute;\n  width:      6px;\n  height:     6px;\n  border-radius: 50%;\n  background: #FF512F;\n  margin-left: -3px;\n  margin-top:  -3px\n}\n\n._point_mlokt_3:after {\n  content:   '';\n  position:   absolute;\n  left:   50%;\n  top:   50%;\n  width:   150%;\n  height:   150%;\n  border:   1px solid #FF512F;\n  -webkit-transform:   translate(-50%, -50%);\n          transform:   translate(-50%, -50%);\n  /*margin-left: -($size - 100%);*/\n  /*margin-top: -($size - 100%);*/\n  border-radius:   50%;\n  opacity:   0\n}\n\n._point_mlokt_3._is-selected_mlokt_28 {}\n\n._point_mlokt_3._is-selected_mlokt_28:after {\n  opacity:   1\n}\n", ""]);

	// exports


/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = {
		"timeline-editor": "_timeline-editor_uvnru_4"
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(227);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(148)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./timeline-editor.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./timeline-editor.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(147)();
	// imports


	// module
	exports.push([module.id, "/*613760*/\n/*$PX:      1/16rem;*/\n/* old was 165px */\n\n._timeline-editor_uvnru_4 {\n  font-family:  Arial, sans-serif\n}\n\n._timeline-editor_uvnru_4 * {\n  box-sizing:  border-box\n}\n", ""]);

	// exports


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(229);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _constants = __webpack_require__(64);

	var _constants2 = _interopRequireDefault(_constants);

	var _addUnload = __webpack_require__(231);

	var _addUnload2 = _interopRequireDefault(_addUnload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Function to store state into localStorage on page `unload`
	  and restore it on page `load`.
	  @param {Object} Redux store.
	*/
	exports.default = function (store) {
	  if (_constants2.default.IS_PERSIST_STATE) {
	    // save to localstorage
	    (0, _addUnload2.default)(function () {
	      var preState = store.getState();
	      try {
	        localStorage.setItem(_constants2.default.NAME, (0, _stringify2.default)(preState));
	      } catch (e) {
	        console.error(e);
	      }
	    });
	    // load from localstorage
	    try {
	      var stored = localStorage.getItem(_constants2.default.NAME);
	      if (stored) {
	        store.dispatch({ type: 'SET_APP_STATE', data: JSON.parse(stored) });
	      }
	    } catch (e) {
	      console.error(e);
	    }
	  } else {
	    try {
	      localStorage.removeItem(_constants2.default.NAME);
	    } catch (e) {
	      console.error(e);
	    }
	  }
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(230), __esModule: true };

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(32)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 231 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/*
	  Function to add cross-browser `unload` event.
	  @param {Function} Callback for the event.
	*/
	exports.default = function (fn) {
	  var unloadEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
	  window.addEventListener(unloadEvent, fn);
	};

/***/ }
/******/ ])
});
;