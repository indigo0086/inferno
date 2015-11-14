(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Inferno"] = factory();
	else
		root["Inferno"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global __VERSION__ */
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _classComponent = __webpack_require__(41);
	
	var _classComponent2 = _interopRequireDefault(_classComponent);
	
	var _coreRender = __webpack_require__(22);
	
	var _coreRender2 = _interopRequireDefault(_coreRender);
	
	var _ssrRenderToString = __webpack_require__(65);
	
	var _ssrRenderToString2 = _interopRequireDefault(_ssrRenderToString);
	
	var _coreUnmountComponentAtNode = __webpack_require__(50);
	
	var _coreUnmountComponentAtNode2 = _interopRequireDefault(_coreUnmountComponentAtNode);
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	var _enumTemplateTypes = __webpack_require__(12);
	
	var _enumTemplateTypes2 = _interopRequireDefault(_enumTemplateTypes);
	
	var _coreCreateFragment = __webpack_require__(44);
	
	var _coreCreateFragment2 = _interopRequireDefault(_coreCreateFragment);
	
	var _coreCreateTemplate = __webpack_require__(20);
	
	var _coreCreateTemplate2 = _interopRequireDefault(_coreCreateTemplate);
	
	var _template = __webpack_require__(35);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _coreClearDomElement = __webpack_require__(43);
	
	var _coreClearDomElement2 = _interopRequireDefault(_coreClearDomElement);
	
	var _coreCreateRef = __webpack_require__(45);
	
	var _coreCreateRef2 = _interopRequireDefault(_coreCreateRef);
	
	exports['default'] = {
		Component: _classComponent2['default'],
		render: _coreRender2['default'],
		renderToString: _ssrRenderToString2['default'],
		createFragment: _coreCreateFragment2['default'],
		createTemplate: _coreCreateTemplate2['default'],
		unmountComponentAtNode: _coreUnmountComponentAtNode2['default'],
		FragmentValueTypes: _enumFragmentValueTypes2['default'],
		TemplateTypes: _enumTemplateTypes2['default'],
		template: _template2['default'],
		clearDomElement: _coreClearDomElement2['default'],
		createRef: _coreCreateRef2['default'],
		version: ("0.3.0")
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = {
		TEXT: 0,
		TEXT_DIRECT: 1,
		FRAGMENT: 2,
		LIST: 3,
		FRAGMENT_REPLACE: 4,
		LIST_REPLACE: 5,
		ATTR_CLASS: 6,
		ATTR_ID: 7,
		ATTR_LABEL: 8,
		ATTR_PLACEHOLDER: 9,
		ATTR_NAME: 10,
		ATTR_WIDTH: 11,
		ATTR_HEIGHT: 12,
		ATTR_REF: 13,
		ATTR_DESIGNMODE: 14,
		ATTR_HTMLFOR: 15,
		ATTR_PLAYBACKRATE: 16,
		ATTR_PRELOAD: 17,
		ATTR_SRCDOC: 18,
		ATTR_AUTOPLAY: 19,
		ATTR_CHECKED: 20,
		ATTR_ISMAP: 21,
		ATTR_LOOP: 22,
		ATTR_MUTED: 23,
		ATTR_READONLY: 24,
		ATTR_REVERSED: 25,
		ATTR_REQUIRED: 26,
		ATTR_SELECTED: 27,
		ATTR_SPELLCHECK: 28,
		ATTR_TRUESPEED: 29,
		ATTR_MULTIPLE: 30,
		ATTR_CONTROLS: 31,
		ATTR_DEFER: 32,
		ATTR_NOVALIDATE: 33,
		ATTR_SCOPED: 34,
		ATTR_NO_RESIZE: 35,
		//will contain other "custom" types, like rowspan etc or custom data-attributes
		ATTR_OTHER: {},
		COMPONENT_PROPS: {}
	};
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (x) {
	  return x.constructor === Array;
	};
	
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _removeFragment = __webpack_require__(6);
	
	var _removeFragment2 = _interopRequireDefault(_removeFragment);
	
	var _attachFragment = __webpack_require__(5);
	
	var _attachFragment2 = _interopRequireDefault(_attachFragment);
	
	var _updateFragmentValue = __webpack_require__(51);
	
	var _updateFragmentValue2 = _interopRequireDefault(_updateFragmentValue);
	
	var _updateFragmentValues = __webpack_require__(52);
	
	var _updateFragmentValues2 = _interopRequireDefault(_updateFragmentValues);
	
	var _unmountComponentAtFragment = __webpack_require__(23);
	
	var _unmountComponentAtFragment2 = _interopRequireDefault(_unmountComponentAtFragment);
	
	function updateFragment(context, oldFragment, fragment, parent, component) {
	
		if (fragment == null) {
			(0, _removeFragment2['default'])(context, parent, oldFragment);
			return;
		}
	
		if (oldFragment == null) {
			(0, _attachFragment2['default'])(context, fragment, parent, component);
			return;
		}
	
		if (oldFragment.template !== fragment.template) {
	
			if (oldFragment.component) {
				var oldComponentFragment = oldFragment.component.context.fragment;
	
				(0, _unmountComponentAtFragment2['default'])(oldFragment);
				(0, _attachFragment2['default'])(context, fragment, parent, component, oldComponentFragment, true);
				return;
			}
			(0, _attachFragment2['default'])(context, fragment, parent, component, oldFragment, true);
	
			return;
		}
		var fragmentComponent = oldFragment.component;
		//if this fragment is a component
		if (fragmentComponent) {
			fragmentComponent.props = fragment.props;
			fragmentComponent.forceUpdate();
			fragment.component = fragmentComponent;
			return;
		}
	
		//ensure we reference the new fragment with the old fragment's DOM node
		fragment.dom = oldFragment.dom;
	
		if (fragment.templateValue !== undefined) {
			//update a single value in the fragement (templateValue rather than templateValues)
			(0, _updateFragmentValue2['default'])(context, oldFragment, fragment, component);
		} else if (fragment.templateValues) {
			//updates all values within the fragment (templateValues is an array)
			(0, _updateFragmentValues2['default'])(context, oldFragment, fragment, component);
		}
	}
	
	exports['default'] = updateFragment;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// import Inferno from '../..';
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _getRecycledFragment = __webpack_require__(46);
	
	var _getRecycledFragment2 = _interopRequireDefault(_getRecycledFragment);
	
	var _updateFragment = __webpack_require__(4);
	
	var _updateFragment2 = _interopRequireDefault(_updateFragment);
	
	var _attachFragmentList = __webpack_require__(19);
	
	var _attachFragmentList2 = _interopRequireDefault(_attachFragmentList);
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	var _insertFragment = __webpack_require__(47);
	
	var _insertFragment2 = _interopRequireDefault(_insertFragment);
	
	var _render = __webpack_require__(22);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _enumTemplateTypes = __webpack_require__(12);
	
	var _enumTemplateTypes2 = _interopRequireDefault(_enumTemplateTypes);
	
	var _templateCreateElement = __webpack_require__(73);
	
	var _templateCreateElement2 = _interopRequireDefault(_templateCreateElement);
	
	var _utilBind = __webpack_require__(82);
	
	var _utilBind2 = _interopRequireDefault(_utilBind);
	
	function attachFragment(context, fragment, parentDom, component, nextFragment, replace) {
		var fragmentComponent = fragment.component;
	
		if (fragmentComponent) {
			if (typeof fragmentComponent === 'function') {
				fragmentComponent = fragment.component = new fragmentComponent(fragment.props);
				fragmentComponent.context = null;
				fragmentComponent.forceUpdate = _render2['default'].bind(null, (0, _utilBind2['default'])(fragmentComponent, fragmentComponent.render), parentDom, fragmentComponent);
				fragmentComponent.forceUpdate();
			}
			return;
		}
	
		var template = fragment.template;
		var templateKey = template.key;
	
		if (context.shouldRecycle === true) {
			var recycledFragment = (0, _getRecycledFragment2['default'])(templateKey);
			if (recycledFragment != null) {
				(0, _updateFragment2['default'])(context, recycledFragment, fragment, parentDom, component);
				(0, _insertFragment2['default'])(context, parentDom, fragment.dom, nextFragment, replace);
				return;
			}
		}
	
		//there are different things we need to check for now
		switch (template.type) {
			case _enumTemplateTypes2['default'].TEMPLATE_API:
				template(fragment);
				break;
			case _enumTemplateTypes2['default'].FUNCTIONAL_API:
				var createElement = (0, _utilBind2['default'])(fragment, _templateCreateElement2['default']);
				var params = [createElement],
				    length = fragment.templateValue != null && 1 || fragment.templateValues && fragment.templateValues.length || 0;
	
				//create our pointers, for example 0,1,2,3,4,5 as params to pass through
				for (var i = 0; i < length; i++) {
					params.push({ pointer: i });
				}
				fragment.dom = template.apply(null, params);
				break;
			default:
				template(fragment);
				break;
		}
		//if this fragment has a single value, we attach only that value
		if (fragment.templateValue) {
			switch (fragment.templateType) {
				case _enumFragmentValueTypes2['default'].LIST:
					(0, _attachFragmentList2['default'])(context, fragment.templateValue, fragment.templateElement);
					break;
				case _enumFragmentValueTypes2['default'].FRAGMENT:
				case _enumFragmentValueTypes2['default'].LIST_REPLACE:
					attachFragment(context, fragment.templateValue, fragment.templateElement, component);
					break;
				case _enumFragmentValueTypes2['default'].FRAGMENT_REPLACE:
					attachFragment(context, fragment.templateValue, parentDom, fragment.templateElement, true);
					fragment.templateElement = fragment.templateValue.dom.parentNode;
					break;
				case _enumFragmentValueTypes2['default'].ATTR_REF:
					fragment.templateValue.element = fragment.templateElement;
					break;
			}
		} else if (fragment.templateValues) {
			//if the fragment has multiple values, we must loop through them all and attach them
			//pulling this block of code out into its own function caused strange things to happen
			//with performance. it was faster in Gecko but far slower in v8
			for (var i = 0, _length = fragment.templateValues.length; i < _length; i++) {
				var element = fragment.templateElements[i],
				    value = fragment.templateValues[i];
	
				switch (fragment.templateTypes[i]) {
					case _enumFragmentValueTypes2['default'].LIST:
						(0, _attachFragmentList2['default'])(context, value, element);
						break;
					case _enumFragmentValueTypes2['default'].LIST_REPLACE:
						var nodeList = document.createDocumentFragment(),
						    placeholderNode = fragment.templateElements[i],
						    parentElem = placeholderNode.parentNode;
	
						(0, _attachFragmentList2['default'])(context, value, nodeList);
						parentElem.replaceChild(nodeList, placeholderNode);
						fragment.templateElements[i] = parentElem;
						break;
					case _enumFragmentValueTypes2['default'].FRAGMENT:
						attachFragment(context, fragment.templateValues[i], fragment.templateElements[i], component);
						break;
					case _enumFragmentValueTypes2['default'].FRAGMENT_REPLACE:
						attachFragment(context, value, parentDom, component, element, true);
						fragment.templateElements[i] = value.dom.parentNode;
						break;
					case _enumFragmentValueTypes2['default'].ATTR_REF:
						fragment.templateValues[i].element = fragment.templateElements[i];
						break;
				}
			}
		}
	
		(0, _insertFragment2['default'])(context, parentDom, fragment.dom, nextFragment, replace);
	}
	
	exports['default'] = attachFragment;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _destroyFragment = __webpack_require__(21);
	
	var _destroyFragment2 = _interopRequireDefault(_destroyFragment);
	
	exports['default'] = function (context, parentDom, item) {
		var domItem = item.dom;
	
		(0, _destroyFragment2['default'])(context, item);
		parentDom.removeChild(domItem);
	};
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  onAbort: 'abort',
	  onBlur: 'blur',
	  onCanPlay: 'canplay',
	  onCanPlayThrough: 'canplaythrough',
	  onChange: 'change',
	  onClick: 'click',
	  onCompositionEnd: 'compositionend',
	  onCompositionStart: 'compositionstart',
	  onCompositionUpdate: 'compositionupdate',
	  onContextMenu: 'contextmenu',
	  onCopy: 'copy',
	  onCut: 'cut',
	  onDoubleClick: 'dblclick',
	  onDrag: 'drag',
	  onDragEnd: 'dragend',
	  onDragEnter: 'dragenter',
	  onDragExit: 'dragexit',
	  onDragLeave: 'dragleave',
	  onDragOver: 'dragover',
	  onDragStart: 'dragstart',
	  onDrop: 'drop',
	  onDurationChange: 'durationchange',
	  onEmptied: 'emptied',
	  onEncrypted: 'encrypted',
	  onEnded: 'ended',
	  onError: 'error',
	  onFocus: 'focus',
	  onInput: 'input',
	  onKeyDown: 'keydown',
	  onKeyPress: 'keypress',
	  onKeyUp: 'keyup',
	  onLoadedData: 'loadeddata',
	  onLoadedMetadata: 'loadedmetadata',
	  onLoadStart: 'loadstart',
	  onMouseDown: 'mousedown',
	  onMouseMove: 'mousemove',
	  onMouseOut: 'mouseout',
	  onMouseOver: 'mouseover',
	  onMouseUp: 'mouseup',
	  onPaste: 'paste',
	  onPause: 'pause',
	  onPlay: 'play',
	  onPlaying: 'playing',
	  onProgress: 'progress',
	  onRateChange: 'ratechange',
	  onScroll: 'scroll',
	  onSeeked: 'seeked',
	  onSeeking: 'seeking',
	  onSelectionChange: 'selectionchange',
	  onStalled: 'stalled',
	  onSuspend: 'suspend',
	  onTextInput: 'textInput',
	  onTimeUpdate: 'timeupdate',
	  onTouchCancel: 'touchcancel',
	  onTouchEnd: 'touchend',
	  onTouchMove: 'touchmove',
	  onTouchStart: 'touchstart',
	  onVolumeChange: 'volumechange',
	  onWaiting: 'waiting',
	  onWheel: 'wheel'
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _varsDOMAttributeNamespaces = __webpack_require__(80);
	
	var _varsDOMAttributeNamespaces2 = _interopRequireDefault(_varsDOMAttributeNamespaces);
	
	var _propertyToAttributeMapping = __webpack_require__(16);
	
	var _propertyToAttributeMapping2 = _interopRequireDefault(_propertyToAttributeMapping);
	
	var _checkMask = __webpack_require__(72);
	
	var _checkMask2 = _interopRequireDefault(_checkMask);
	
	var _DOMMutationMethods = __webpack_require__(68);
	
	var _DOMMutationMethods2 = _interopRequireDefault(_DOMMutationMethods);
	
	var _utilIsSVG = __webpack_require__(17);
	
	var _utilIsSVG2 = _interopRequireDefault(_utilIsSVG);
	
	var MustUseAttribute = 0x1,
	    MustUseProperty = 0x2,
	    HasBooleanValue = 0x8,
	    HasNumericValue = 0x10,
	    HasPositiveNumber = 0x20 | 0x10,
	    HasOverloadedBooleanValue = 0x40,
	    Properties = {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MustUseAttribute | HasBooleanValue,
	    allowTransparency: MustUseAttribute,
	    alt: null,
	    async: HasBooleanValue,
	    autoComplete: null,
	    autoFocus: HasBooleanValue,
	    autoPlay: HasBooleanValue,
	    capture: MustUseAttribute | HasBooleanValue,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MustUseAttribute,
	    challenge: MustUseAttribute,
	    checked: MustUseProperty | HasBooleanValue,
	    classID: MustUseAttribute,
	    className: _utilIsSVG2['default'] ? MustUseAttribute : MustUseProperty,
	    cols: MustUseAttribute | HasPositiveNumber,
	    colSpan: null,
	    content: null,
	    contentEditable: MustUseAttribute,
	    contextMenu: MustUseAttribute,
	    controls: MustUseProperty | HasBooleanValue,
	    coords: null,
	    crossOrigin: null,
	    data: null,
	    dataset: MustUseProperty,
	    dateTime: MustUseAttribute,
	    'default': MustUseAttribute | HasBooleanValue,
	    defer: HasBooleanValue,
	    dir: null,
	    disabled: MustUseAttribute | HasBooleanValue,
	    download: MustUseAttribute,
	    draggable: null,
	    enabled: MustUseAttribute,
	    encType: null,
	    form: MustUseAttribute,
	    formAction: MustUseAttribute,
	    formEncType: MustUseAttribute,
	    formMethod: MustUseAttribute,
	    formNoValidate: HasBooleanValue,
	    formTarget: MustUseAttribute,
	    frameBorder: MustUseAttribute,
	    headers: null,
	    height: MustUseAttribute,
	    hidden: MustUseAttribute | HasBooleanValue,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: MustUseProperty,
	    icon: MustUseProperty,
	    id: MustUseProperty,
	    is: MustUseAttribute,
	    key: MustUseAttribute,
	    keyParams: MustUseAttribute,
	    keyType: MustUseAttribute,
	    kind: null,
	    label: null,
	    lang: null,
	    list: MustUseAttribute,
	    loop: MustUseProperty | HasBooleanValue,
	    low: null,
	    manifest: MustUseAttribute,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MustUseAttribute,
	    media: MustUseAttribute,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    minLength: MustUseAttribute,
	    multiple: MustUseAttribute | HasBooleanValue,
	    muted: MustUseProperty | HasBooleanValue,
	    name: MustUseAttribute,
	    noValidate: HasBooleanValue,
	    open: HasBooleanValue,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MustUseProperty | HasBooleanValue,
	    rel: null,
	    required: HasBooleanValue,
	    role: MustUseAttribute,
	    rows: MustUseAttribute | HasPositiveNumber,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HasBooleanValue,
	    scrolling: null,
	    seamless: MustUseAttribute | HasBooleanValue,
	    selected: MustUseProperty | HasBooleanValue,
	    shape: null,
	    size: MustUseAttribute | HasPositiveNumber,
	    sizes: MustUseAttribute,
	    span: HasPositiveNumber,
	    spellCheck: null,
	    src: MustUseAttribute,
	    srcDoc: MustUseProperty,
	    srcLang: null,
	    srcSet: MustUseAttribute,
	    start: MustUseAttribute | HasNumericValue,
	    step: null,
	    style: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: null,
	    version: MustUseAttribute,
	    volume: MustUseAttribute,
	    width: MustUseAttribute,
	    wmode: MustUseAttribute,
	    wrap: MustUseAttribute,
	    xmlns: MustUseAttribute,
	
	    /**
	     * RDFa Properties
	     */
	    about: MustUseAttribute,
	    datatype: MustUseAttribute,
	    inlist: MustUseAttribute,
	    prefix: MustUseAttribute,
	    // property is also supported for OpenGraph in meta tags.
	    property: MustUseAttribute,
	    resource: MustUseAttribute,
	    'typeof': MustUseAttribute,
	    vocab: MustUseAttribute,
	
	    /**
	     * Non-standard Properties
	     */
	
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: null,
	    autoCorrect: null,
	    autoSave: null,
	    // color is for Safari mask-icon link
	    color: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MustUseAttribute,
	    itemScope: MustUseAttribute | HasBooleanValue,
	    itemType: MustUseAttribute,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MustUseAttribute,
	    itemRef: MustUseAttribute,
	    // property is supported for OpenGraph in meta tags.
	    property: MustUseProperty,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: null,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: MustUseAttribute,
	    // IE-only attribute that controls focus behavior
	    unselectable: MustUseAttribute
	
	};
	
	exports['default'] = (function () {
	    var propInfoByAttributeName = {};
	
	    for (var propName in Properties) {
	
	        var propConfig = Properties[propName],
	            attributeName = _propertyToAttributeMapping2['default'][propName] || propName.toLowerCase(),
	            propertyInfo = {
	            attributeName: attributeName,
	            propertyName: propName,
	            attributeNamespace: null,
	            mustUseAttribute: (0, _checkMask2['default'])(propConfig, MustUseAttribute),
	            mustUseProperty: (0, _checkMask2['default'])(propConfig, MustUseProperty),
	            hasBooleanValue: (0, _checkMask2['default'])(propConfig, HasBooleanValue)
	        };
	
	        propInfoByAttributeName[attributeName] = propertyInfo;
	    }
	
	    return function (name) {
	        var lowerCased = name.toLowerCase();
	        var propInfo = undefined;
	
	        if (_varsDOMAttributeNamespaces2['default'][name]) {
	            propInfo = {
	                attributeName: name,
	                mustUseAttribute: true,
	                isCustomAttribute: true,
	                attributeNamespace: _varsDOMAttributeNamespaces2['default'][name]
	            };
	        } else if (propInfoByAttributeName[lowerCased]) {
	            propInfo = propInfoByAttributeName[lowerCased];
	        } else {
	            propInfo = {
	                attributeName: _propertyToAttributeMapping2['default'][name] || name,
	                mustUseAttribute: true,
	                isCustomAttribute: true
	            };
	        }
	
	        if (_DOMMutationMethods2['default'][lowerCased]) {
	            propInfo.mutationMethod = _DOMMutationMethods2['default'][lowerCased];
	        }
	
	        return propInfo;
	    };
	})();
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var DASH_REGEX = /([a-z])?([A-Z])/g;
	var DASHED_REPLACE = function DASHED_REPLACE($$, $1, $2) {
	  return ($1 || '') + '-' + $2.toLowerCase();
	};
	
	// Since prefix is expected to work on inline style objects, we must
	// translate the keys to dash case for rendering to CSS.	
	
	exports['default'] = function (str) {
	  return str.replace(DASH_REGEX, DASHED_REPLACE);
	};
	
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _varsContexts = __webpack_require__(18);
	
	var _varsContexts2 = _interopRequireDefault(_varsContexts);
	
	exports['default'] = function (dom) {
		for (var i = 0; i < _varsContexts2['default'].length; i++) {
			if (_varsContexts2['default'][i].dom === dom) {
				return _varsContexts2['default'][i];
			}
		}
		return null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _varsContexts = __webpack_require__(18);
	
	var _varsContexts2 = _interopRequireDefault(_varsContexts);
	
	exports['default'] = function (dom) {
		var idx = _varsContexts2['default'].length;
	
		while (idx--) {
			if (_varsContexts2['default'][idx].dom === dom) {
				_varsContexts2['default'].splice(idx, 1);
				return;
			}
		}
	};
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = {
		TEMPLATE_API: 1,
		FUNCTIONAL_API: 2
	};
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _sharedEvents = __webpack_require__(7);
	
	var _sharedEvents2 = _interopRequireDefault(_sharedEvents);
	
	var _sharedCapturedEvents = __webpack_require__(27);
	
	var _sharedCapturedEvents2 = _interopRequireDefault(_sharedCapturedEvents);
	
	var _getUniqueId = __webpack_require__(25);
	
	var _getUniqueId2 = _interopRequireDefault(_getUniqueId);
	
	var _root = __webpack_require__(26);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _varsRootListeners = __webpack_require__(29);
	
	var _varsRootListeners2 = _interopRequireDefault(_varsRootListeners);
	
	var _sharedEventsCfg = __webpack_require__(28);
	
	var _sharedEventsCfg2 = _interopRequireDefault(_sharedEventsCfg);
	
	/**
	 * Add event listeners
	 * @param {Object} element
	 * @param {String} type
	 * @param {String} listener
	 */
	function addListener(element, type, listener) {
	
	    type = _sharedEvents2['default'][type];
	
	    var config = _sharedEventsCfg2['default'][type];
	
	    if (config) {
	        if (!config.set) {
	            if (config.setup) {
	                config.setup();
	            } else if (config.bubbles) {
	                document.addEventListener(type, _root2['default'].addRootListener, false);
	            }
	            config.set = true;
	        }
	
	        var uniqueId = (0, _getUniqueId2['default'])(element),
	            listeners = _varsRootListeners2['default'][uniqueId] || (_varsRootListeners2['default'][uniqueId] = {});
	
	        if (!listeners[type]) {
	
	            if (config.bubbles) {
	                ++config.countListeners;
	            } else {
	                element.addEventListener(type, _root2['default'].eventHandler, false);
	            }
	        }
	
	        listeners[type] = listener;
	    }
	}
	
	/**
	 * Remove single listener
	 * @param {Object} element
	 * @param {String} type
	 */
	function removeListener(element, type) {
	    var uniqueID = (0, _getUniqueId2['default'])(element, true);
	
	    if (uniqueID) {
	        var listeners = _varsRootListeners2['default'][uniqueID];
	
	        type = _sharedEvents2['default'][type];
	
	        if (listeners && listeners[type]) {
	            listeners[type] = null;
	
	            var cfg = _sharedEventsCfg2['default'][type];
	
	            if (cfg) {
	                if (cfg.bubbles) {
	                    --cfg.countListeners;
	                } else {
	                    element.removeEventListener(type, _root2['default'].eventHandler);
	                }
	            }
	        }
	    }
	}
	
	exports['default'] = {
	    addListener: addListener,
	    removeListener: removeListener
	};
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;'
	};
	
	var ESCAPE_REGEX = /[&><]/g;
	
	var escaper = function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	};
	
	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text content value to escape.
	 * @return {string} An escaped string.
	 */
	
	exports['default'] = function (text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	};
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _DOMProperties = __webpack_require__(8);
	
	var _DOMProperties2 = _interopRequireDefault(_DOMProperties);
	
	var _setAttributes = __webpack_require__(36);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	var _setProperty = __webpack_require__(37);
	
	var _setProperty2 = _interopRequireDefault(_setProperty);
	
	/**
	 * Set HTML attributes / properties on a node
	 * @param {!Element} node
	 * @param {string} name
	 * @param {*} value
	 */
	
	exports['default'] = function (node, name, value) {
	
	  // Anything we don't set as an attribute is treated as a property
	  ((0, _DOMProperties2['default'])(name).mustUseAttribute ? _setAttributes2['default'] : _setProperty2['default'])(node, name, value);
	};
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
					value: true
	});
	exports['default'] = {
					acceptCharset: 'accept-charset',
					className: 'class',
					htmlFor: 'for',
					httpEquiv: 'http-equiv',
	
					// SVG
	
					accentHeight: 'accent-height',
					alignmentBaseline: 'alignment-baseline',
					arabicForm: 'arabic-form',
					autoStartReverse: 'auto-start-reverse',
					baselineShift: 'baseline-shift',
					bufferedRendering: 'buffered-rendering',
					colorRendering: 'color-rendering',
					colorInterpolation: 'color-interpolation',
					colorInterpolationFilters: 'color-interpolation-filters',
					colorProfile: 'color-profile',
					clipPath: 'clip-path',
					dominantBaseline: 'dominant-baseline',
					fillOpacity: 'fill-opacity',
					fillRule: 'fill-rule',
					filterRes: 'filterRes',
					filterUnits: 'filterUnits',
					floodColor: 'flood-color',
					floodOpacity: 'flood-opacity',
					fontFamily: 'font-family',
					fontSize: 'font-size',
					fontStyle: 'font-style',
					fontWeight: 'font-weight',
					glyphName: 'glyph-name',
					glyphRef: 'glyphRef',
					gradientTransform: 'gradientTransform',
					gradientUnits: 'gradientUnits',
					horizAdvX: 'horiz-adv-x',
					horizOriginX: 'horiz-origin-x',
					horizOriginY: 'horiz-origin-y',
					markerEnd: 'marker-end',
					markerMid: 'marker-mid',
					markerStart: 'marker-start',
					overlinePosition: 'overline-position',
					overlineThickness: 'overline-thickness',
					paintOrder: 'paint-order',
					patternContentUnits: 'patternContentUnits',
					patternUnits: 'patternUnits',
					pathLength: 'pathLength',
					patternTransform: 'patternTransform',
					pointsAtX: 'pointsAtX',
					pointsAtY: 'pointsAtY',
					pointsAtZ: 'pointsAtZ',
					preserveAlpha: 'preserveAlpha',
					preserveAspectRatio: 'preserveAspectRatio',
					primitiveUnits: 'primitiveUnits',
					shapeRendering: 'shape-rendering',
					spreadMethod: 'spreadMethod',
					stopColor: 'stop-color',
					stopOpacity: 'stop-opacity',
					strikethroughPosition: 'strikethrough-position',
					strikethroughThickness: 'strikethrough-thickness',
					strokeDashoffset: 'stroke-dashoffset',
					strokeDasharray: 'stroke-dasharray',
					strokeLinecap: 'stroke-linecap',
					strokeOpacity: 'stroke-opacity',
					strokeWidth: 'stroke-width',
					tableValues: 'tableValues',
					targetX: 'targetX',
					targetY: 'targetY',
					textLength: 'textLength',
					underlinePosition: 'underline-position',
					underlineThickness: 'underline-thickness',
					unicodeBidi: 'unicode-bidi',
					unicodeRange: 'unicode-range',
					unitsPerEm: 'units-per-em',
					solidColor: 'solid-color',
					solidOpacity: 'solid-opacity',
					strokeLinejoin: 'stroke-linejoin',
					textAnchor: 'text-anchor',
					textDecoration: 'text-decoration',
					textRendering: 'text-rendering',
					vAlphabetic: 'v-alphabetic',
					vectorEffect: 'vector-effect',
					vHanging: 'v-hanging',
					vIdeographic: 'v-ideographic',
					vMathematical: 'v-mathematical',
					vertAdvY: 'vert-adv-y',
					vertOriginX: 'vert-origin-x',
					vertOriginY: 'vert-origin-y',
					viewBox: 'viewBox'
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var isSVG = undefined;
	
	if (document) {
		var implementation = document.implementation;
	
		isSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}
	
	exports['default'] = isSVG;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = [];
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _attachFragment = __webpack_require__(5);
	
	var _attachFragment2 = _interopRequireDefault(_attachFragment);
	
	function attachFragmentList(context, list, parentDom, component) {
		for (var i = 0; i < list.length; i++) {
			(0, _attachFragment2['default'])(context, list[i], parentDom, component);
		}
	}
	
	exports['default'] = attachFragmentList;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = createTemplate;
	
	var _enumTemplateTypes = __webpack_require__(12);
	
	var _enumTemplateTypes2 = _interopRequireDefault(_enumTemplateTypes);
	
	var _utilUuid = __webpack_require__(84);
	
	var _utilUuid2 = _interopRequireDefault(_utilUuid);
	
	function createTemplate(templateFunction) {
		//give the function a random key
		templateFunction.key = (0, _utilUuid2['default'])();
		templateFunction.type = _enumTemplateTypes2['default'].FUNCTIONAL_API;
		return templateFunction;
	}
	
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _varsRecycledFragments = __webpack_require__(40);
	
	var _varsRecycledFragments2 = _interopRequireDefault(_varsRecycledFragments);
	
	/**
	 * Destroy fragment
	 */
	function destroyFragment(context, fragment) {
	
		var templateKey = undefined;
	
		//long winded approach, but components have their own context which is how we find their template keys
		if (fragment.component) {
			templateKey = fragment.component.context.fragment.template.key;
		} else {
			templateKey = fragment.template.key;
		}
	
		if (context.shouldRecycle === true) {
			var toRecycleForKey = _varsRecycledFragments2['default'][templateKey];
	
			if (!toRecycleForKey) {
				_varsRecycledFragments2['default'][templateKey] = toRecycleForKey = [];
			}
			toRecycleForKey.push(fragment);
		}
	}
	exports['default'] = destroyFragment;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _varsContexts = __webpack_require__(18);
	
	var _varsContexts2 = _interopRequireDefault(_varsContexts);
	
	var _getContext = __webpack_require__(10);
	
	var _getContext2 = _interopRequireDefault(_getContext);
	
	var _attachFragment = __webpack_require__(5);
	
	var _attachFragment2 = _interopRequireDefault(_attachFragment);
	
	var _updateFragment = __webpack_require__(4);
	
	var _updateFragment2 = _interopRequireDefault(_updateFragment);
	
	function render(fragment, dom, component) {
		var context = undefined,
		    generatedFragment = undefined;
	
		if (component) {
			if (component.context) {
				generatedFragment = fragment();
				context = component.context;
				(0, _updateFragment2['default'])(context, context.fragment, generatedFragment, dom, component, false);
				context.fragment = generatedFragment;
			} else {
				generatedFragment = fragment();
				context = component.context = {
					fragment: generatedFragment,
					dom: dom,
					shouldRecycle: true
				};
				component.componentWillMount();
				(0, _attachFragment2['default'])(context, generatedFragment, dom, component);
				component.componentDidMount();
			}
		} else {
	
			context = (0, _getContext2['default'])(dom);
	
			if (context) {
				(0, _updateFragment2['default'])(context, context.fragment, fragment, dom, component, false);
				context.fragment = fragment;
			} else {
				context = {
					fragment: fragment,
					dom: dom,
					shouldRecycle: true
				};
				(0, _attachFragment2['default'])(context, fragment, dom, component);
				_varsContexts2['default'].push(context);
			}
		}
	}
	
	exports['default'] = render;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _removeContext = __webpack_require__(11);
	
	var _removeContext2 = _interopRequireDefault(_removeContext);
	
	var _badUpdate = __webpack_require__(42);
	
	var _badUpdate2 = _interopRequireDefault(_badUpdate);
	
	exports['default'] = function (fragment) {
		var component = fragment.component;
	
		component.componentWillUnmount();
		(0, _removeContext2['default'])(component.context.dom);
		component.forceUpdate = _badUpdate2['default'];
		component.context = null;
		component = null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = updateFragmentList;
	
	var _removeFragments = __webpack_require__(49);
	
	var _removeFragments2 = _interopRequireDefault(_removeFragments);
	
	var _removeFragment = __webpack_require__(6);
	
	var _removeFragment2 = _interopRequireDefault(_removeFragment);
	
	var _attachFragmentList = __webpack_require__(19);
	
	var _attachFragmentList2 = _interopRequireDefault(_attachFragmentList);
	
	var _attachFragment = __webpack_require__(5);
	
	var _attachFragment2 = _interopRequireDefault(_attachFragment);
	
	var _updateFragment = __webpack_require__(4);
	
	var _updateFragment2 = _interopRequireDefault(_updateFragment);
	
	var _moveFragment = __webpack_require__(48);
	
	var _moveFragment2 = _interopRequireDefault(_moveFragment);
	
	function updateFragmentList(context, oldList, list, parentDom, component, outerNextFragment) {
	
		if (oldList === list) {
			return;
		}
	
		var oldListLength = oldList.length;
		var listLength = list.length;
	
		if (listLength === 0) {
			(0, _removeFragments2['default'])(context, parentDom, oldList, 0, oldListLength);
			return;
		} else if (oldListLength === 0) {
			(0, _attachFragmentList2['default'])(context, list, parentDom, component);
			return;
		}
	
		if (oldListLength === 1 && listLength === 1) {
			(0, _updateFragment2['default'])(context, oldList[0], list[0], parentDom);
			return;
		}
	
		var oldEndIndex = oldListLength - 1;
		var endIndex = listLength - 1;
		var oldStartIndex = 0,
		    startIndex = 0;
		var successful = true;
		var nextItem = undefined;
		var oldItem = undefined,
		    item = undefined;
	
		outer: while (successful && oldStartIndex <= oldEndIndex && startIndex <= endIndex) {
			var oldStartItem = undefined,
			    oldEndItem = undefined,
			    startItem = undefined,
			    endItem = undefined;
	
			successful = false;
			oldStartItem = oldList[oldStartIndex];
			startItem = list[startIndex];
			while (oldStartItem.key === startItem.key) {
				(0, _updateFragment2['default'])(context, oldStartItem, startItem, parentDom, component);
				oldStartIndex++;startIndex++;
				if (oldStartIndex > oldEndIndex || startIndex > endIndex) {
					break outer;
				}
				oldStartItem = oldList[oldStartIndex];
				startItem = list[startIndex];
				successful = true;
			}
			oldEndItem = oldList[oldEndIndex];
			endItem = list[endIndex];
			while (oldEndItem.key === endItem.key) {
				(0, _updateFragment2['default'])(context, oldEndItem, endItem, parentDom, component);
				oldEndIndex--;endIndex--;
				if (oldStartIndex > oldEndIndex || startIndex > endIndex) {
					break outer;
				}
				oldEndItem = oldList[oldEndIndex];
				endItem = list[endIndex];
				successful = true;
			}
			while (oldStartItem.key === endItem.key) {
				nextItem = endIndex + 1 < listLength ? list[endIndex + 1] : outerNextFragment;
				(0, _updateFragment2['default'])(context, oldStartItem, endItem, parentDom, component);
				(0, _moveFragment2['default'])(parentDom, endItem, nextItem);
				oldStartIndex++;endIndex--;
				if (oldStartIndex > oldEndIndex || startIndex > endIndex) {
					break outer;
				}
				oldStartItem = oldList[oldStartIndex];
				endItem = list[endIndex];
				successful = true;
			}
			while (oldEndItem.key === startItem.key) {
				nextItem = oldStartIndex < oldListLength ? oldList[oldStartIndex] : outerNextFragment;
				(0, _updateFragment2['default'])(context, oldEndItem, startItem, parentDom, component);
				(0, _moveFragment2['default'])(parentDom, startItem, nextItem);
				oldEndIndex--;startIndex++;
				if (oldStartIndex > oldEndIndex || startIndex > endIndex) {
					break outer;
				}
				oldEndItem = oldList[oldEndIndex];
				startItem = list[startIndex];
				successful = true;
			}
		}
		if (oldStartIndex > oldEndIndex) {
			nextItem = endIndex + 1 < listLength ? list[endIndex + 1] : outerNextFragment;
			for (var i = startIndex; i <= endIndex; i++) {
				item = list[i];
				(0, _attachFragment2['default'])(context, item, parentDom, component, nextItem);
			}
		} else if (startIndex > endIndex) {
			(0, _removeFragments2['default'])(context, parentDom, oldList, oldStartIndex, oldEndIndex + 1);
		} else {
			var oldNextItem = oldEndIndex + 1 >= oldListLength ? null : oldList[oldEndIndex + 1];
			var oldListMap = {};
	
			for (var i = oldEndIndex; i >= oldStartIndex; i--) {
				oldItem = oldList[i];
				oldItem.next = oldNextItem;
				oldListMap[oldItem.key] = oldItem;
				oldNextItem = oldItem;
			}
			nextItem = endIndex + 1 < listLength ? list[endIndex + 1] : outerNextFragment;
			for (var i = endIndex; i >= startIndex; i--) {
				item = list[i];
				var key = item.key;
				oldItem = oldListMap[key];
				if (oldItem) {
					oldListMap[key] = null;
					oldNextItem = oldItem.next;
					(0, _updateFragment2['default'])(context, oldItem, item, parentDom, component);
					if (parentDom.nextSibling !== (nextItem && nextItem.dom)) {
						(0, _moveFragment2['default'])(parentDom, item, nextItem);
					}
				} else {
					(0, _attachFragment2['default'])(context, item, parentDom, component, nextItem);
				}
				nextItem = item;
			}
			for (var i = oldStartIndex; i <= oldEndIndex; i++) {
				oldItem = oldList[i];
				if (oldListMap[oldItem.key] !== null) {
					(0, _removeFragment2['default'])(context, parentDom, oldItem);
				}
			}
		}
	}
	
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _varsInfernoID = __webpack_require__(57);
	
	var _varsInfernoID2 = _interopRequireDefault(_varsInfernoID);
	
	var counter = 1;
	
	exports['default'] = function (node, onlyGet) {
	  return node[_varsInfernoID2['default']] || (onlyGet ? null : node[_varsInfernoID2['default']] = counter++);
	};
	
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _sharedEventsCfg = __webpack_require__(28);
	
	var _sharedEventsCfg2 = _interopRequireDefault(_sharedEventsCfg);
	
	var _sharedCheckKeyboard = __webpack_require__(54);
	
	var _sharedCheckKeyboard2 = _interopRequireDefault(_sharedCheckKeyboard);
	
	var _getUniqueId = __webpack_require__(25);
	
	var _getUniqueId2 = _interopRequireDefault(_getUniqueId);
	
	var _varsRootListeners = __webpack_require__(29);
	
	var _varsRootListeners2 = _interopRequireDefault(_varsRootListeners);
	
	var stopImmediate = false;
	
	function normalizeEvents(ev, type) {
	
	    if (!ev) {
	        ev = window.event;
	        if (!ev.preventDefault) {
	            ev.preventDefault = function () {
	                this.defaultPrevented = true;
	                this.returnValue = false;
	            };
	            ev.stopPropagation = function () {
	                this.cancelBubble = true;
	            };
	            ev.defaultPrevented = ev.returnValue === false;
	        }
	    }
	
	    ev.stopImmediatePropagation = function () {
	        stopImmediate = true;
	        this.stopPropagation();
	    };
	
	    switch (type) {
	
	        case 'keydown':
	        case 'keyup':
	        case 'keypress':
	            // webkit key event issue workaround
	            ev = (0, _sharedCheckKeyboard2['default'])(ev, type);
	            break;
	        case 'wheel':
	            // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	            'deltaX' in ev ? ev.deltaX : -ev.wheelDeltaX;
	            // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	            'deltaY' in ev ? ev.deltaY : -ev.wheelDeltaY;
	            break;
	    }
	
	    return ev;
	}
	
	function eventHandler(e) {
	    _varsRootListeners2['default'][(0, _getUniqueId2['default'])(e.target)][e.type](normalizeEvents(e, e.type));
	}
	
	function addRootListener(e, type) {
	
	    type || (type = e.type);
	
	    var config = _sharedEventsCfg2['default'][type];
	
	    var target = e.target,
	        listenersState = config.countListeners,
	        listeners = undefined,
	        listener = undefined,
	        uniqueId = undefined,
	        ev = undefined;
	
	    while (listenersState > 0 && target !== document.body) {
	        if (uniqueId = (0, _getUniqueId2['default'])(target, true)) {
	            listeners = _varsRootListeners2['default'][uniqueId];
	            if (listeners && (listener = listeners[type])) {
	                listener(ev || (ev = normalizeEvents(e)));
	                if (stopImmediate) {
	                    stopImmediate = false;
	                    break;
	                }
	                --listenersState;
	            }
	        }
	
	        target = target.parentNode;
	    }
	};
	
	exports['default'] = { eventHandler: eventHandler, addRootListener: addRootListener };
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ['abort', 'mouseover', 'mousemove', 'mouseout', 'mousedown', 'mouseup', 'error', 'encrypted', 'emptied', 'ended', 'error', 'loadastart', 'compositionend', 'compositionstart', 'compositionupdate', 'durationchange', 'loadeddata', 'loadstart', 'pause', 'play', 'seeked', 'seeking', 'selectionchange', 'stalled', 'suspend', 'textInput', 'timeupdate', 'touchcancel', 'touchend', 'touchmove', 'touchstart', 'volumechange', 'waiting', 'loadedmetadata', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'change', 'input', 'submit', 'focus', 'blur', 'dragstart', 'drag', 'dragenter', 'dragover', 'dragleave', 'dragend', 'drop', 'contextmenu', 'wheel', 'copy', 'cut', 'paste'];
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _sharedCapturedEvents = __webpack_require__(27);
	
	var _sharedCapturedEvents2 = _interopRequireDefault(_sharedCapturedEvents);
	
	var _sharedNoCaptureEvents = __webpack_require__(56);
	
	var _sharedNoCaptureEvents2 = _interopRequireDefault(_sharedNoCaptureEvents);
	
	var _sharedFocusEvents = __webpack_require__(55);
	
	var _sharedFocusEvents2 = _interopRequireDefault(_sharedFocusEvents);
	
	var _root = __webpack_require__(26);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _isEventSupported = __webpack_require__(53);
	
	var _isEventSupported2 = _interopRequireDefault(_isEventSupported);
	
	var eventsCfg = {};
	
	// This will not work on server side
	if (document.body) {
	
	    var i = 0,
	        type = undefined;
	
	    while (i < _sharedCapturedEvents2['default'].length) {
	        type = _sharedCapturedEvents2['default'][i++];
	        eventsCfg[type] = {
	            type: type,
	            bubbles: true,
	            countListeners: 0,
	            set: false,
	            // firefox doesn't support focusin/focusout events
	            setup: _sharedFocusEvents2['default'] && (_sharedFocusEvents2['default'][type] && (0, _isEventSupported2['default'])(_sharedFocusEvents2['default'][type])) ? function () {
	                var type = this.type;
	                document.addEventListener(_sharedFocusEvents2['default'][type], function (e) {
	                    addEventListener(e, type);
	                });
	            } : function () {
	                document.addEventListener(this.type, _root2['default'].addRootListener, true);
	            }
	        };
	    }
	    i = 0;
	    while (i < _sharedNoCaptureEvents2['default'].length) {
	        eventsCfg[_sharedNoCaptureEvents2['default'][i++]] = {
	            type: type,
	            bubbles: false,
	            set: false
	        };
	    }
	}
	
	exports['default'] = eventsCfg;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {};
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _templateDOMProperties = __webpack_require__(8);
	
	var _templateDOMProperties2 = _interopRequireDefault(_templateDOMProperties);
	
	var _quoteAttributeValueForBrowser = __webpack_require__(64);
	
	var _quoteAttributeValueForBrowser2 = _interopRequireDefault(_quoteAttributeValueForBrowser);
	
	var _templatePropertyToAttributeMapping = __webpack_require__(16);
	
	var _templatePropertyToAttributeMapping2 = _interopRequireDefault(_templatePropertyToAttributeMapping);
	
	var _templateCamelCasePropsToDashCase = __webpack_require__(9);
	
	var _templateCamelCasePropsToDashCase2 = _interopRequireDefault(_templateCamelCasePropsToDashCase);
	
	/**
	 * Creates markup for HTML properties.
	 *
	 * @param {Object} propInfo
	 * @param {*} value
	 * @return {?string} Markup string, or null if the property was invalid.
	 */
	var renderMarkupForProperty = function renderMarkupForProperty(propInfo, value) {
	
	    if (propInfo.propertyName === 'dataset') {
	
	        var objectLiteral = '';
	        for (var objName in value) {
	            objectLiteral += value[objName] != null && 'data-' + objName + '="' + (0, _templateCamelCasePropsToDashCase2['default'])(value[objName]) + '" ';
	        }
	        return objectLiteral;
	    } else {
	        return propInfo.propertyName + '=' + (0, _quoteAttributeValueForBrowser2['default'])(propInfo.hasBooleanValue ? value === '' || value === propInfo.attributeName : value);
	    }
	};
	
	/**
	 * Creates markup for a HTML attributes.
	 *
	 * @param {Object} propInfo
	 * @param {*} value
	 * @return {?string} Markup string, or null if the property was invalid.
	 */
	var renderMarkupForAttribute = function renderMarkupForAttribute(propInfo, value) {
	    return (_templatePropertyToAttributeMapping2['default'][propInfo.attributeName] || propInfo.attributeName) + '=' + (0, _quoteAttributeValueForBrowser2['default'])(propInfo.hasBooleanValue ? value : value);
	};
	
	// Anything we don't set as an attribute is treated as a property
	var getPropertySetter = function getPropertySetter(propInfo) {
	    return propInfo.mustUseAttribute ? renderMarkupForAttribute : renderMarkupForProperty;
	};
	
	/**
	 * Creates markup for a property.
	 *
	 * @param {string} name
	 * @param {*} value
	 * @return {?string} Markup string, or null if the property was invalid.
	 */
	
	exports['default'] = function (name, value) {
	    return getPropertySetter((0, _templateDOMProperties2['default'])(name))((0, _templateDOMProperties2['default'])(name), value);
	};
	
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _templateAddPixelSuffixToValueIfNeeded = __webpack_require__(33);
	
	var _templateAddPixelSuffixToValueIfNeeded2 = _interopRequireDefault(_templateAddPixelSuffixToValueIfNeeded);
	
	var _templateCamelCasePropsToDashCase = __webpack_require__(9);
	
	var _templateCamelCasePropsToDashCase2 = _interopRequireDefault(_templateCamelCasePropsToDashCase);
	
	/**
	 * Serializes a mapping of style properties for use as inline styles:
	 *
	 *   > createMarkupForStyles({width: '200px', height: 0})
	 *   "width:200px;height:0;"
	 *
	 * Undefined values are ignored so that declarative programming is easier.
	 * The result should be HTML-escaped before insertion into the DOM.
	 *
	 * @param {object} styles
	 * @return {?string}
	 */
	
	exports['default'] = function (styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	        if (styles[styleName] != null) {
	            serialized += (0, _templateCamelCasePropsToDashCase2['default'])(styleName) + ':' + (0, _templateAddPixelSuffixToValueIfNeeded2['default'])(styleName, styles[styleName]) + ';';
	        }
	    }
	    return serialized || null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createMarkupForStyles = __webpack_require__(31);
	
	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);
	
	var _createMarkupForProperty = __webpack_require__(30);
	
	var _createMarkupForProperty2 = _interopRequireDefault(_createMarkupForProperty);
	
	var _templateCamelCasePropsToDashCase = __webpack_require__(9);
	
	var _templateCamelCasePropsToDashCase2 = _interopRequireDefault(_templateCamelCasePropsToDashCase);
	
	exports['default'] = function (props) {
	
	    var ret = '';
	
	    for (var _name in props) {
	        var value = props[_name];
	
	        if (_name === 'dataset') {
	
	            for (var objName in value) {
	                ret += value[objName] != null && 'data-' + objName + '="' + (0, _templateCamelCasePropsToDashCase2['default'])(value[objName]) + '" ';
	            }
	        } else {
	
	            if (value != null) {
	
	                ret += _name === 'style' ? ' ' + _name + '="' + (0, _createMarkupForStyles2['default'])(value) + '"' : ' ' + (0, _createMarkupForProperty2['default'])(_name, value);
	            }
	        }
	    }
	
	    return ret;
	};
	
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _unitlessProperties = __webpack_require__(79);
	
	var _unitlessProperties2 = _interopRequireDefault(_unitlessProperties);
	
	/**
	 * Normalize CSS properties for SSR
	 *
	 * @param {String} name The boolean attribute name to set.
	 * @param {String} value The boolean attribute value to set.
	 */
	
	exports['default'] = function (name, value) {
		if (value === null || value === '') {
			return '';
		}
		if (value === 0 || ((0, _unitlessProperties2['default'])(name) || isNaN(value))) {
			return '' + value; // cast to string
		}
		if (typeof value === 'string') {
			value = value.trim();
		}
		return value + 'px';
	};
	
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Supported SVG elements
	 *
	 * @type {Array}
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  'animate': true,
	  'animateColor': true,
	  'animateMotion': true,
	  'circle': true,
	  'clipPath': true,
	  'color-profile': true,
	  'cursor': true,
	  'defs': true,
	  'ellipse': true,
	  'filter': true,
	  'font': true,
	  'font-face': true,
	  'g': true,
	  'glyph': true,
	  'glyphRef': true,
	  'line': true,
	  'linearGradient': true,
	  'marker': true,
	  'mask': true,
	  'path': true,
	  'pattern': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'svg': true,
	  'switch': true,
	  'symbol': true,
	  'text': true,
	  'textPath': true,
	  'title': true,
	  'tref': true,
	  'tspan': true
	};
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _addAttributes = __webpack_require__(69);
	
	var _addAttributes2 = _interopRequireDefault(_addAttributes);
	
	var _setProperty = __webpack_require__(37);
	
	var _setProperty2 = _interopRequireDefault(_setProperty);
	
	var _setAttributes = __webpack_require__(36);
	
	var _setAttributes2 = _interopRequireDefault(_setAttributes);
	
	var _createElementWithoutIs = __webpack_require__(75);
	
	var _createElementWithoutIs2 = _interopRequireDefault(_createElementWithoutIs);
	
	var _createElementWithIs = __webpack_require__(74);
	
	var _createElementWithIs2 = _interopRequireDefault(_createElementWithIs);
	
	exports['default'] = {
	    addAttributes: _addAttributes2['default'],
	    setProperty: _setProperty2['default'],
	    setAttributes: _setAttributes2['default'],
	    createElement: function createElement(tag, xmlns, is) {
	        return is ? (0, _createElementWithIs2['default'])(tag, xmlns, is) : (0, _createElementWithoutIs2['default'])(tag, xmlns);
	    },
	    createTextNode: function createTextNode(text) {
	        return document.createTextNode(text);
	    },
	    createEmptyText: function createEmptyText() {
	        return document.createTextNode('');
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _DOMProperties = __webpack_require__(8);
	
	var _DOMProperties2 = _interopRequireDefault(_DOMProperties);
	
	var _propertyToAttributeMapping = __webpack_require__(16);
	
	var _propertyToAttributeMapping2 = _interopRequireDefault(_propertyToAttributeMapping);
	
	/**
	 * Apply a HTML attribute on a given Element
	 *
	 * @param {!Element} node  A DOM element.
	 * @param {string} name The attribute / property name
	 * @param {String} value The attribute / property value
	 */
	
	exports['default'] = function (node, name, value) {
	
	    var propInfo = (0, _DOMProperties2['default'])(name);
	
	    name = propInfo.attributeName;
	
	    // namespace attributes
	    if (propInfo.attributeNamespace) {
	        node.setAttributeNS(propInfo.attributeNamespace, name, '' + value);
	    } else if (propInfo.mutationMethod) {
	        propInfo.mutationMethod(node, name, value);
	    } else {
	
	        switch (name) {
	            case 'type':
	                if (node.tagName.toLowerCase() === 'input') {
	                    var val = node.value; // value will be lost in IE if type is changed
	                    node.setAttribute(name, '' + value);
	                    node.value = val;
	                    return;
	                }
	            default:
	                node.setAttribute(name, propInfo.hasBooleanValue ? value : value);
	        }
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _DOMProperties = __webpack_require__(8);
	
	var _DOMProperties2 = _interopRequireDefault(_DOMProperties);
	
	var _parseValues = __webpack_require__(76);
	
	var _parseValues2 = _interopRequireDefault(_parseValues);
	
	var _setStyles = __webpack_require__(78);
	
	var _setStyles2 = _interopRequireDefault(_setStyles);
	
	var _attributeToPropertyMapping = __webpack_require__(70);
	
	var _attributeToPropertyMapping2 = _interopRequireDefault(_attributeToPropertyMapping);
	
	/**
	 * Apply a HTML property on a given Element
	 *
	 * @param {!Element} node  A DOM element.
	 * @param {string} name The attribute / property name
	 * @param {String|Object} value The attribute / property value
	 */
	
	exports['default'] = function (node, name, value) {
	
	    var propInfo = (0, _DOMProperties2['default'])(name),
	        propName = propInfo.propertyName;
	
	    if (propInfo.hasBooleanValue) {
	        node[_attributeToPropertyMapping2['default'][propName] || propName] = value === '' || name.toLowerCase() === propInfo.attributeName ? true : false;
	    } else if (propInfo.mutationMethod) {
	        propInfo.mutationMethod(node, name, value);
	    } else {
	
	        switch (name) {
	
	            case 'style':
	                (0, _setStyles2['default'])(node, value);
	                return;
	            case 'value':
	                if (node.tagName.toLowerCase() === 'select') {
	                    (0, _parseValues2['default'])(node, value);
	                    return;
	                }
	            default:
	                node[_attributeToPropertyMapping2['default'][propName] || propName] = value;
	        }
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = 'http://www.w3.org/1998/Math/MathML';
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = 'http://www.w3.org/2000/svg';
	module.exports = exports['default'];

/***/ },
/* 40 */
29,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// TODO! Finish this
	
	"use strict";
	
	var _createClass = __webpack_require__(87)["default"];
	
	var _classCallCheck = __webpack_require__(86)["default"];
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var Component = (function () {
		function Component(props, context) {
			_classCallCheck(this, Component);
	
			this.props = props;
			this.attrs = attrs;
			this.context = context;
			// TODO this.state should not be defined by default
			this.state = {};
	
			this.domRefs = null;
			this.isMounted = false;
			this.isUpdating = false;
			this.onInit(this.attrs);
			this.rootNode = this.render();
		}
	
		_createClass(Component, [{
			key: "render",
			value: function render() {}
		}, {
			key: "forceUpdate",
			value: function forceUpdate() {}
		}, {
			key: "setState",
			value: function setState(newStateItems) {
				for (var stateItem in newStateItems) {
					this.state[stateItem] = newStateItems[stateItem];
				}
				this.forceUpdate();
			}
		}, {
			key: "replaceState",
			value: function replaceState(newState) {
				this.state = newState;
				this.forceUpdate();
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {}
		}]);
	
		return Component;
	})();
	
	exports["default"] = Component;
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	exports['default'] = function () {
		console.warn('Update called on a component that is no longer mounted!');
	};
	
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = clearDomElement;
	
	var _coreGetContext = __webpack_require__(10);
	
	var _coreGetContext2 = _interopRequireDefault(_coreGetContext);
	
	var _coreRemoveContext = __webpack_require__(11);
	
	var _coreRemoveContext2 = _interopRequireDefault(_coreRemoveContext);
	
	function clearDomElement(dom) {
		var context = (0, _coreGetContext2['default'])(dom);
		if (context != null) {
			(0, _coreRemoveContext2['default'])(dom);
		}
		dom.innerHTML = '';
	}
	
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = createFragment;
	
	var _utilIsArray = __webpack_require__(3);
	
	var _utilIsArray2 = _interopRequireDefault(_utilIsArray);
	
	var _createTemplate = __webpack_require__(20);
	
	var _createTemplate2 = _interopRequireDefault(_createTemplate);
	
	function createFragment(values, template) {
		var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
		if (template.key == null) {
			template = (0, _createTemplate2['default'])(template);
		}
	
		var fragmentObject = {
			dom: null,
			key: key,
			next: null,
			template: template
		};
	
		if (values != null && (0, _utilIsArray2['default'])(values)) {
			if (values.length === 1) {
				fragmentObject.templateElement = null;
				fragmentObject.templateType = null;
				fragmentObject.templateValue = values[0];
			} else {
				fragmentObject.templateElements = new Array(values.length);
				fragmentObject.templateTypes = new Array(values.length);
				fragmentObject.templateValues = values;
			}
		} else {
			fragmentObject.templateElement = null;
			fragmentObject.templateType = null;
			fragmentObject.templateValue = values;
		}
	
		return fragmentObject;
	}
	
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = createRef;
	
	function createRef() {
	    return {
	        element: null
	    };
	}
	
	;
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _varsRecycledFragments = __webpack_require__(40);
	
	var _varsRecycledFragments2 = _interopRequireDefault(_varsRecycledFragments);
	
	exports['default'] = function (templateKey) {
	
		var fragments = _varsRecycledFragments2['default'][templateKey];
		if (!fragments || fragments.length === 0) {
	
			return null;
		}
		return fragments.pop();
	};
	
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = insertFragment;
	
	var _destroyFragment = __webpack_require__(21);
	
	var _destroyFragment2 = _interopRequireDefault(_destroyFragment);
	
	function insertFragment(fragment, parent, container, nextFragment, replace) {
	
	    if (nextFragment) {
	
	        var noDestroy = false;
	        var domNextFragment = nextFragment.dom;
	
	        if (!domNextFragment) {
	            domNextFragment = nextFragment;
	            parent = domNextFragment.parentNode;
	            noDestroy = true;
	        }
	
	        if (replace) {
	
	            if (noDestroy === false) {
	                (0, _destroyFragment2['default'])(fragment, nextFragment);
	            }
	
	            parent.replaceChild(container, domNextFragment);
	
	            return;
	        }
	
	        parent.insertBefore(container, domNextFragment);
	    } else {
	
	        parent.appendChild(container);
	    }
	}
	
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports["default"] = function (parentDom, item, nextItem) {
		var domItem = item.dom,
		    domRefItem = nextItem && nextItem.dom;
	
		if (domItem !== domRefItem) {
			var activeFragment = document.activeElement;
	
			if (domRefItem) {
				parentDom.insertBefore(domItem, domRefItem);
			} else {
				parentDom.appendChild(domItem);
			}
			if (activeFragment !== document.body && document.activeElement !== activeFragment) {
				activeFragment.focus();
			}
		}
	};
	
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _removeFragment = __webpack_require__(6);
	
	var _removeFragment2 = _interopRequireDefault(_removeFragment);
	
	exports['default'] = function (context, parentDom, fragments, i, to) {
		for (; i < to; i++) {
			(0, _removeFragment2['default'])(context, parentDom, fragments[i]);
		}
	};
	
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _removeFragment = __webpack_require__(6);
	
	var _removeFragment2 = _interopRequireDefault(_removeFragment);
	
	var _removeContext = __webpack_require__(11);
	
	var _removeContext2 = _interopRequireDefault(_removeContext);
	
	var _getContext = __webpack_require__(10);
	
	var _getContext2 = _interopRequireDefault(_getContext);
	
	var _unmountComponentAtFragment = __webpack_require__(23);
	
	var _unmountComponentAtFragment2 = _interopRequireDefault(_unmountComponentAtFragment);
	
	exports['default'] = function (dom) {
		var context = (0, _getContext2['default'])(dom);
	
		if (context !== null) {
			var component = context.fragment.component;
	
			if (component) {
				(0, _removeFragment2['default'])(context, dom, component.fragment);
				(0, _unmountComponentAtFragment2['default'])(component.fragment);
			} else {
				(0, _removeFragment2['default'])(context, dom, context.fragment);
				(0, _removeContext2['default'])(dom);
			}
		}
	};
	
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _updateFragment = __webpack_require__(4);
	
	var _updateFragment2 = _interopRequireDefault(_updateFragment);
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	var _updateFragmentList = __webpack_require__(24);
	
	var _updateFragmentList2 = _interopRequireDefault(_updateFragmentList);
	
	var _eventsEventManager = __webpack_require__(13);
	
	var _eventsEventManager2 = _interopRequireDefault(_eventsEventManager);
	
	var _eventsSharedEvents = __webpack_require__(7);
	
	var _eventsSharedEvents2 = _interopRequireDefault(_eventsSharedEvents);
	
	var _utilIsSVG = __webpack_require__(17);
	
	var _utilIsSVG2 = _interopRequireDefault(_utilIsSVG);
	
	var _templateDOMPropertyOperations = __webpack_require__(15);
	
	var _templateDOMPropertyOperations2 = _interopRequireDefault(_templateDOMPropertyOperations);
	
	function updateFragmentValue(context, oldFragment, fragment, component) {
		var element = oldFragment.templateElement,
		    type = oldFragment.templateType;
	
		fragment.templateElement = element;
		fragment.templateType = type;
	
		if (fragment.templateValue !== oldFragment.templateValue) {
	
			switch (type) {
				case _enumFragmentValueTypes2['default'].LIST:
				case _enumFragmentValueTypes2['default'].LIST_REPLACE:
					(0, _updateFragmentList2['default'])(context, oldFragment.templateValue, fragment.templateValue, element, component);
					return;
				case _enumFragmentValueTypes2['default'].TEXT:
					element.firstChild.nodeValue = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].TEXT_DIRECT:
					element.nodeValue = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].FRAGMENT:
				case _enumFragmentValueTypes2['default'].FRAGMENT_REPLACE:
					(0, _updateFragment2['default'])(context, oldFragment.templateValue, fragment.templateValue, element, component);
					return;
				case _enumFragmentValueTypes2['default'].ATTR_CLASS:
					// To set className on SVG elements, it's necessary to use .setAttribute;
					// this works on HTML elements too in all browsers.
					// If this kills the performance, we have to consider not to support SVG
					if (_utilIsSVG2['default']) {
						element.setAttribute('class', fragment.templateValue);
					} else {
						element.className = fragment.templateValue;
					}
					return;
				case _enumFragmentValueTypes2['default'].ATTR_ID:
					element.id = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_NAME:
					element.name = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_LABEL:
					element.label = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_PLACEHOLDER:
					element.placeholder = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_DESIGNMODE:
					element.designMode = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_HTMLFOR:
					element.htmlFor = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_PLAYBACKRATE:
					element.playbackRate = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_PRELOAD:
					element.preload = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_SRCDOC:
					element.srcDoc = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_AUTOPLAY:
					element.autoPlay = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_CHECKED:
					element.checked = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_ISMAP:
					element.isMap = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_LOOP:
					element.loop = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_MUTED:
					element.muted = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_READONLY:
					element.readOnly = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_REVERSED:
					element.reversed = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_REQUIRED:
					element.required = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_SELECTED:
					element.selected = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_SPELLCHECK:
					element.spellCheck = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_TRUESPEED:
					element.truespeed = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_MULTIPLE:
					element.multiple = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_CONTROLS:
					element.controls = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_DEFER:
					element.defer = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_NOVALIDATE:
					element.noValidate = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_SCOPED:
					element.scoped = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_NO_RESIZE:
					element.noResize = fragment.templateValue;
					return;
				case _enumFragmentValueTypes2['default'].ATTR_WIDTH:
					if (_utilIsSVG2['default']) {
						element.setAttribute('width', fragment.templateValue);
					} else {
						element.width = fragment.templateValue;
					}
					return;
				case _enumFragmentValueTypes2['default'].ATTR_HEIGHT:
					if (_utilIsSVG2['default']) {
						element.setAttribute('height', fragment.templateValue);
					} else {
						element.height = fragment.templateValue;
					}
					return;
				default:
					// TODO make component props work for single value fragments
					if (element.props) {
						// component prop, update it
					} else {
							if (_eventsSharedEvents2['default'][type] != null) {
								_eventsEventManager2['default'].addListener(element, type, fragment.templateValue);
							} else {
								(0, _templateDOMPropertyOperations2['default'])(element, type, fragment.templateValue, true);
							}
						}
			}
		}
	}
	
	exports['default'] = updateFragmentValue;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _updateFragment = __webpack_require__(4);
	
	var _updateFragment2 = _interopRequireDefault(_updateFragment);
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	var _updateFragmentList = __webpack_require__(24);
	
	var _updateFragmentList2 = _interopRequireDefault(_updateFragmentList);
	
	var _eventsEventManager = __webpack_require__(13);
	
	var _eventsEventManager2 = _interopRequireDefault(_eventsEventManager);
	
	var _eventsSharedEvents = __webpack_require__(7);
	
	var _eventsSharedEvents2 = _interopRequireDefault(_eventsSharedEvents);
	
	var _utilIsSVG = __webpack_require__(17);
	
	var _utilIsSVG2 = _interopRequireDefault(_utilIsSVG);
	
	var _templateDOMPropertyOperations = __webpack_require__(15);
	
	var _templateDOMPropertyOperations2 = _interopRequireDefault(_templateDOMPropertyOperations);
	
	// TODO updateFragmentValue and updateFragmentValues uses *similar* code, that could be
	// refactored to by more DRY. although, this causes a significant performance cost
	// on the v8 compiler. need to explore how to refactor without introducing this performance cost
	function updateFragmentValues(context, oldFragment, fragment, component) {
	
		var componentsToUpdate = [];
	
		for (var i = 0, _length = fragment.templateValues.length; i < _length; i++) {
			var element = oldFragment.templateElements[i];
			var type = oldFragment.templateTypes[i];
	
			fragment.templateElements[i] = element;
			fragment.templateTypes[i] = type;
	
			if (fragment.templateValues[i] !== oldFragment.templateValues[i]) {
				switch (type) {
					case _enumFragmentValueTypes2['default'].LIST:
					case _enumFragmentValueTypes2['default'].LIST_REPLACE:
						(0, _updateFragmentList2['default'])(context, oldFragment.templateValues[i], fragment.templateValues[i], element, component);
						break;
					case _enumFragmentValueTypes2['default'].TEXT:
						element.firstChild.nodeValue = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].TEXT_DIRECT:
						element.nodeValue = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].FRAGMENT:
					case _enumFragmentValueTypes2['default'].FRAGMENT_REPLACE:
						(0, _updateFragment2['default'])(context, oldFragment.templateValues[i], fragment.templateValues[i], element, component);
						break;
					case _enumFragmentValueTypes2['default'].ATTR_CLASS:
						if (_utilIsSVG2['default']) {
							element.setAttribute('class', fragment.templateValues[i]);
						} else {
							element.className = fragment.templateValues[i];
						}
						break;
					case _enumFragmentValueTypes2['default'].ATTR_ID:
						element.id = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_NAME:
						element.name = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_LABEL:
						element.label = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_PLACEHOLDER:
						element.placeholder = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_DESIGNMODE:
						element.designMode = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_HTMLFOR:
						element.htmlFor = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_PLAYBACKRATE:
						element.playbackRate = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_PRELOAD:
						element.preload = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_SRCDOC:
						element.srcDoc = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_AUTOPLAY:
						element.autoPlay = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_CHECKED:
						element.checked = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_ISMAP:
						element.isMap = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_LOOP:
						element.loop = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_MUTED:
						element.muted = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_READONLY:
						element.readOnly = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_REVERSED:
						element.reversed = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_REQUIRED:
						element.required = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_SELECTED:
						element.selected = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_SPELLCHECK:
						element.spellCheck = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_TRUESPEED:
						element.truespeed = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_MULTIPLE:
						element.multiple = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_CONTROLS:
						element.controls = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_DEFER:
						element.defer = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_NOVALIDATE:
						element.noValidate = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_SCOPED:
						element.scoped = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_NO_RESIZE:
						element.noResize = fragment.templateValues[i];
						break;
					case _enumFragmentValueTypes2['default'].ATTR_WIDTH:
						if (_utilIsSVG2['default']) {
							element.setAttribute('width', fragment.templateValues[i]);
						} else {
							element.width = fragment.templateValues[i];
						}
						break;
					case _enumFragmentValueTypes2['default'].ATTR_HEIGHT:
						if (_utilIsSVG2['default']) {
							element.setAttribute('height', fragment.templateValues[i]);
						} else {
							element.height = fragment.templateValues[i];
						}
						break;
					default:
						//custom attribute, so simply setAttribute it
						if (!element.props) {
							if (_eventsSharedEvents2['default'][type] != null) {
								_eventsEventManager2['default'].addListener(element, type, fragment.templateValues[i]);
							} else {
								(0, _templateDOMPropertyOperations2['default'])(element, type, fragment.templateValues[i], true);
							}
						}
						//component prop, update it
						else {
								element.props[type] = fragment.templateValues[i];
								var alreadyInQueue = false;
								for (var s = 0; s < componentsToUpdate.length; s++) {
									if (componentsToUpdate[s] === element) {
										alreadyInQueue = true;
									}
								}
								if (alreadyInQueue === false) {
									componentsToUpdate.push(element);
								}
							}
						break;
				}
			}
		}
		if (componentsToUpdate.length > 0) {
			for (var i = 0; i < componentsToUpdate.length; i++) {
				componentsToUpdate[i].forceUpdate();
			}
		}
	}
	
	exports['default'] = updateFragmentValues;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (eventNameSuffix) {
	
	    var eventName = 'on' + eventNameSuffix;
	
	    if (eventName in document) {
	        return true;
	    }
	
	    var element = document.createElement('div');
	
	    element.setAttribute(eventName, 'return;');
	
	    if (typeof element[eventName] === 'function') {
	        return true;
	    }
	
	    return false;
	};
	
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports) {

	// Workaround for https://bugs.webkit.org/show_bug.cgi?id=16735
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (ev, type) {
	    if (ev.ctrlKey != (type || false) || ev.altKey != (type || false) || ev.shiftKey != (type || false) || ev.metaKey != (type || false) || ev.keyCode != (type || 0) || ev.charCode != (type || 0)) {
	
	        ev = document.createEvent('Event');
	        ev.initEvent(type, true, true);
	        ev.ctrlKey = type || false;
	        ev.altKey = type || false;
	        ev.shiftKey = type || false;
	        ev.metaKey = type || false;
	        ev.keyCode = type || 0;
	        ev.charCode = type || 0;
	    }
	
	    return ev;
	};
	
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var focusEvents = null;
	
	// support: Firefox
	if (typeof InstallTrigger !== 'undefined') {
	    focusEvents = {
	        focus: 'focusin',
	        blur: 'focusout'
	    };
	}
	
	exports['default'] = focusEvents;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ['scroll', 'load', 'error'];
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = '__Inferno__';
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _escapeTextContentForBrowser = __webpack_require__(14);
	
	var _escapeTextContentForBrowser2 = _interopRequireDefault(_escapeTextContentForBrowser);
	
	var _utilIsArray = __webpack_require__(3);
	
	var _utilIsArray2 = _interopRequireDefault(_utilIsArray);
	
	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = {
	    'string': true,
	    'number': true
	};
	
	var newlineEatingTags = {
	    'listing': true,
	    'pre': true,
	    'textarea': true
	};
	
	/**
	 * Creates markup for the content between the tags.
	 *
	 * @private
	 * @param {string} tag
	 * @param {object} props
	 * @param {string|Array} children
	 * @return {string} Content markup.
	 */
	
	exports['default'] = function (tag, props, children) {
	    var html = '';
	
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props && props.innerHTML;
	    if (innerHTML != null) {
	        html = (0, _escapeTextContentForBrowser2['default'])(innerHTML);
	    } else if (props && props.value && tag === 'textarea') {
	        html = (0, _escapeTextContentForBrowser2['default'])(props.value);
	    } else {
	
	        var contentToUse = CONTENT_TYPES[typeof children] ? children : null;
	        var childrenToUse = contentToUse != null ? null : children;
	
	        if (contentToUse != null) {
	            // TODO: Validate that text is allowed as a child of this node
	            html = contentToUse;
	        } else if (childrenToUse != null) {
	
	            if ((0, _utilIsArray2['default'])(childrenToUse)) {
	
	                if (childrenToUse.length === 1) {
	
	                    html += (0, _escapeTextContentForBrowser2['default'])(childrenToUse[0]);
	                } else {
	
	                    for (var idx = 0; idx < childrenToUse.length; idx++) {
	
	                        html += ' ' + childrenToUse[idx];
	                    }
	                }
	            }
	        }
	    }
	
	    if (newlineEatingTags[tag] && html[0] === '\n') {
	        // text/html ignores the first character in these tags if it's a newline
	        // Prefer to break application/xml over text/html (for now) by adding
	        // a newline specifically to get eaten by the parser. (Alternately for
	        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	        // \r is normalized out by HTMLTextAreaElement#value.)
	        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	        // See: Parsing of "textarea" "listing" and "pre" elements
	        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	        return '\n' + html;
	    } else {
	        return html;
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createMarkupForSelect = __webpack_require__(60);
	
	var _createMarkupForSelect2 = _interopRequireDefault(_createMarkupForSelect);
	
	var optGroups = [],
	    opts = [];
	
	exports['default'] = function (tag, props, children) {
	
	    // Special case - optgroup should not be rendered before the 'select' element
	    if (tag === 'optgroup') {
	
	        optGroups.push({
	            tag: tag,
	            props: props
	        });
	
	        return;
	    }
	
	    // Special case - option should not be rendered before the 'select' element
	    if (tag === 'option') {
	
	        opts.push({
	            tag: tag,
	            props: props,
	            children: children
	        });
	
	        return;
	    }
	
	    // Special case - select values (should not be stringified)
	    if (tag === 'select') {
	
	        var ret = (0, _createMarkupForSelect2['default'])(tag, props, optGroups, opts);
	
	        // Always remove the contents of 'optGroups' and 'opts' array
	        optGroups = [];
	        opts = [];
	
	        // Return the markup
	        return ret;
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _renderProperties = __webpack_require__(32);
	
	var _renderProperties2 = _interopRequireDefault(_renderProperties);
	
	var _utilIsArray = __webpack_require__(3);
	
	var _utilIsArray2 = _interopRequireDefault(_utilIsArray);
	
	var _escapeTextContentForBrowser = __webpack_require__(14);
	
	var _escapeTextContentForBrowser2 = _interopRequireDefault(_escapeTextContentForBrowser);
	
	var _createSelectContent = __webpack_require__(62);
	
	var _createSelectContent2 = _interopRequireDefault(_createSelectContent);
	
	/**
	 * Render HTML Markup server-side for select/select multiple
	 * @param {String} tag
	 * @param {Object} properties
	 * @param {Array|null} optGroups
	 * @param {Array} opt
	 */
	
	exports['default'] = function (tag, properties, optGroups, opt) {
	
	    // Pass down initial value so initial generated markup has correct
	    // `selected` attributes
	    var selectedValue = properties.value,
	        markup = '';
	
	    if (selectedValue != null) {
	
	        var props = undefined,
	            idx = 0;
	
	        markup = '<select' + (0, _renderProperties2['default'])(properties) + '>';
	
	        // optgroups
	        if (optGroups && optGroups.length) {
	
	            for (idx = 0; idx < optGroups.length; idx++) {
	
	                markup += '<optgroup';
	
	                if (optGroups[idx].props != null) {
	                    markup += (0, _renderProperties2['default'])(optGroups[idx].props);
	                }
	
	                markup += '><option';
	
	                if (opt[idx] != null) {
	
	                    markup = (0, _createSelectContent2['default'])(markup, opt[idx].props, selectedValue, opt, idx) + '</option></optgroup>';
	                }
	            }
	
	            return markup + '</select>';
	
	            // option
	        } else if (opt && opt.length) {
	
	                for (idx = 0; idx < opt.length; idx++) {
	
	                    markup += '<option';
	
	                    if (opt[idx] != null) {
	
	                        markup = (0, _createSelectContent2['default'])(markup, opt[idx].props, selectedValue, opt, idx) + '</option>';
	                    }
	                }
	                return markup + '</select>';
	            }
	    }
	
	    // return blank for invalid markup. E.g. 'optGroup' without 'option' children etc.
	    return markup;
	};
	
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createMarkupForProperty = __webpack_require__(30);
	
	var _createMarkupForProperty2 = _interopRequireDefault(_createMarkupForProperty);
	
	var _createMarkupForStyles = __webpack_require__(31);
	
	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);
	
	/**
	 * Creates markup for the open tag and all attributes.
	 *
	 * @private
	 * @param {String} tag
	 * @param {Object} props
	 * @param {String|Array} children
	 * @return {string} Markup of opening tag.
	 */
	
	exports['default'] = function (tag, props, children) {
	
	    var ret = '<' + tag;
	
	    for (var propKey in props) {
	
	        var propValue = props[propKey];
	
	        if (propValue == null) {
	            continue;
	        }
	        // innerHTML, value and textarea are all special cases, and it's value shouldn't be rendered
	        if (propKey === 'innerHTML' || propKey === 'value' && tag === 'textarea') {
	            continue;
	        }
	
	        if (propKey === 'style') {
	            ret += ' ' + propKey + '="' + (0, _createMarkupForStyles2['default'])(propValue) + '"';
	        } else {
	
	            var markup = (0, _createMarkupForProperty2['default'])(propKey, propValue);
	
	            if (markup) {
	                ret += ' ' + markup;
	            }
	        }
	    }
	
	    return ret;
	};
	
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _renderProperties = __webpack_require__(32);
	
	var _renderProperties2 = _interopRequireDefault(_renderProperties);
	
	var _escapeTextContentForBrowser = __webpack_require__(14);
	
	var _escapeTextContentForBrowser2 = _interopRequireDefault(_escapeTextContentForBrowser);
	
	var _utilIsArray = __webpack_require__(3);
	
	var _utilIsArray2 = _interopRequireDefault(_utilIsArray);
	
	exports['default'] = function (markup, props, value, opt, pos) {
	
	    if (props != null) {
	
	        markup += (0, _renderProperties2['default'])(props);
	
	        var selectedValue = props.value;
	
	        // multiple
	        if (typeof value === 'object') {
	            if ((0, _utilIsArray2['default'])(value)) {
	                for (var idx = 0; idx < value.length; idx++) {
	                    if (value[idx] === selectedValue) {
	                        markup += ' selected="selected"';
	                    }
	                }
	            }
	        } else {
	            if (value === selectedValue) {
	                markup += ' selected="selected"';
	            }
	        }
	    }
	    return markup + '>' + (opt[pos].children ? (0, _escapeTextContentForBrowser2['default'])(opt[pos].children) : '');
	};
	
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createOpenTagMarkup = __webpack_require__(61);
	
	var _createOpenTagMarkup2 = _interopRequireDefault(_createOpenTagMarkup);
	
	var _createMarkupForFormElements = __webpack_require__(59);
	
	var _createMarkupForFormElements2 = _interopRequireDefault(_createMarkupForFormElements);
	
	var _createContentMarkup = __webpack_require__(58);
	
	var _createContentMarkup2 = _interopRequireDefault(_createContentMarkup);
	
	var _specialTags = __webpack_require__(66);
	
	var _specialTags2 = _interopRequireDefault(_specialTags);
	
	var _voidElementTags = __webpack_require__(67);
	
	var _voidElementTags2 = _interopRequireDefault(_voidElementTags);
	
	exports['default'] = function (tag, props, children) {
	    // option, optgroup, select
	    if ((0, _specialTags2['default'])(tag)) {
	        return (0, _createMarkupForFormElements2['default'])(tag, props, children);
	    } else {
	
	        var tagOpen = (0, _createOpenTagMarkup2['default'])(tag, props, children);
	        var tagContent = (0, _createContentMarkup2['default'])(tag, props, children);
	
	        return (0, _voidElementTags2['default'])(tag) ? tagOpen + '/>' : tagOpen + '>' + tagContent + '</' + tag + '>';
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;'
	};
	
	var ESCAPE_REGEX = /[&><"]/g;
	
	var escaper = function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	};
	
	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Attribute value to escape.
	 * @return {string} An escaped string.
	 */
	
	exports['default'] = function (value) {
	  return '"' + ('' + value).replace(ESCAPE_REGEX, escaper) + '"';
	};
	
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createServerSideMarkup = __webpack_require__(63);
	
	var _createServerSideMarkup2 = _interopRequireDefault(_createServerSideMarkup);
	
	exports['default'] = function (args, fragment, component) {
	
	    if (component) {} else {
	
	        // TODO! Find a solution for better performance
	        var params = [function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            return _createServerSideMarkup2['default'].apply(fragment, args);
	        }],
	            _length = args && args.length;
	
	        if (_length) {
	
	            for (var i = 0; i < _length; i++) {
	                params.push(args[i]);
	            }
	        }
	
	        return fragment.apply(null, params);
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (str) {
	    switch (str.length) {
	        case 6:
	            return str === 'option' || str === 'select';
	        case 8:
	            return str === 'optgroup';
	    }
	
	    return false;
	};
	
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports) {

	// Nodes which should be considered implicitly self-closing	
	// Taken from http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html#void-elements
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (str) {
	
	    //OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
	    //It's faster than using dictionary.
	
	    switch (str.length) {
	        case 2:
	            return str === 'br' || str === 'hr';
	
	        case 3:
	            return str === 'col' || str === 'img' || str === 'wbr' || str === 'use';
	        case 4:
	            return str === 'area' || str === 'base' || str === 'link' || str === 'meta' || str === 'path' || str === 'line' || str === 'rect' || str === 'stop';
	        case 5:
	            return str === 'embed' || str === 'frame' || str === 'param' || str === 'track' || str === 'input';
	        case 6:
	            return str === 'keygen' || str === 'source' || str === 'circle';
	        case 7:
	            return str === 'command' || str === 'isindex' || str === 'ellipse' || str === 'polygon';
	        case 8:
	            return str === 'basefont' || str === 'polyline' || str === 'menuitem';
	    }
	
	    return false;
	};
	
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _camelCasePropsToDashCase = __webpack_require__(9);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _camelize = __webpack_require__(71);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	exports['default'] = {
	    volume: function volume(node, name, value) {
	        // The 'volume' attribute can only contain a number in the range 0.0 to 1.0, where 0.0 is the
	        // quietest and 1.0 the loudest. So we optimize by checking for the most obvious first...
	        if (value === 0.0 || value === 1 || typeof value === 'number' && (value > -1 && value < 1.1)) {
	            node.setAttribute(name, value);
	        }
	    },
	    dataset: function dataset(node, name, value) {
	        for (var idx in value) {
	            node.setAttribute('data-' + (0, _camelize2['default'])(idx), (0, _camelCasePropsToDashCase2['default'])(value[idx]));
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = addAttributes;
	
	var _eventsSharedEvents = __webpack_require__(7);
	
	var _eventsSharedEvents2 = _interopRequireDefault(_eventsSharedEvents);
	
	var _eventsEventManager = __webpack_require__(13);
	
	var _eventsEventManager2 = _interopRequireDefault(_eventsEventManager);
	
	var _DOMPropertyOperations = __webpack_require__(15);
	
	var _DOMPropertyOperations2 = _interopRequireDefault(_DOMPropertyOperations);
	
	var _processFragmentAttrs = __webpack_require__(77);
	
	var _processFragmentAttrs2 = _interopRequireDefault(_processFragmentAttrs);
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	/**
	 * Set HTML attributes on the template
	 * @param{ HTMLElement } node
	 * @param{ Object } attrs
	 */
	
	function addAttributes(node, attrs, fragment) {
		for (var attrName in attrs) {
			var attrVal = attrs[attrName];
	
			//check if we have a pointer, if so, this is from the funcitonal API
			//and thus it needs its fragment processing
			//the t7 template API shouldn't need this as it post-processes the same code
			//within t7: look for buildInfernoAttrsParams() in t7
			if (attrVal && attrVal.pointer != null) {
				attrVal = (0, _processFragmentAttrs2['default'])(node, attrName, attrVal, fragment);
			}
			// avoid 'null' values
			if (attrVal !== undefined) {
				// events
				if (_eventsSharedEvents2['default'][attrName] !== undefined) {
					_eventsEventManager2['default'].addListener(node, attrName, attrVal);
					// attributes / properties
				} else if (attrVal != null) {
						(0, _DOMPropertyOperations2['default'])(node, attrName, attrVal);
					}
			}
		}
	}
	
	module.exports = exports['default'];

/***/ },
/* 70 */
29,
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NONWORD_FIRST_REGEX = /\W+(\w)/g;
	var NONWORD_FIRST_CAPITALIZE = function NONWORD_FIRST_CAPITALIZE($$, $1) {
	  return $1.toUpperCase();
	};
	
	exports["default"] = function (str) {
	  return str.toLowerCase().replace(NONWORD_FIRST_REGEX, NONWORD_FIRST_CAPITALIZE);
	};
	
	module.exports = exports["default"];

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (value, bitmask) {
	  return (value & bitmask) === bitmask;
	};
	
	module.exports = exports["default"];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = createElement;
	
	var _ = __webpack_require__(35);
	
	var _2 = _interopRequireDefault(_);
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	var _utilIsArray = __webpack_require__(3);
	
	var _utilIsArray2 = _interopRequireDefault(_utilIsArray);
	
	function createElement(tag, props) {
		for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			children[_key - 2] = arguments[_key];
		}
	
		var element = undefined;
		var is = props && (props.is || null); // type extension
		var xmlns = props && (props.xmlns || null); // xmlns
	
		if (typeof tag === 'string') {
			element = _2['default'].createElement(tag, xmlns, is);
		} else {
			var propsParsed = props;
	
			for (var prop in props) {
				if (props[prop].pointer) {
					propsParsed[prop] = this.templateValues[propsParsed[prop].pointer];
				}
			}
			element = {
				dom: null,
				component: this.templateValue || this.templateValues[tag.pointer],
				props: propsParsed,
				key: null,
				template: null,
				templateIndex: tag.pointer
			};
			return element;
		}
	
		var len = children.length;
	
		if (len > 0) {
			if (len > 1) {
				for (var i = 0; i < len; i++) {
					var child = children[i];
	
					if (child.pointer !== undefined) {
						var value = this.templateValue || this.templateValues[child.pointer];
	
						if (typeof value !== 'object') {
							var node = _2['default'].createTextNode(value);
	
							if (this.templateValue) {
								this.templateElement = node;
								this.templateType = _enumFragmentValueTypes2['default'].TEXT_DIRECT;
							} else {
								this.templateElements[child.pointer] = node;
								this.templateTypes[child.pointer] = _enumFragmentValueTypes2['default'].TEXT_DIRECT;
							}
							element.appendChild(node);
						}
					} else if (typeof child !== 'object') {
						var node = _2['default'].createTextNode(child);
	
						element.appendChild(node);
					} else if (child.component) {
						if (this.templateValues) {
							var templateIndex = child.templateIndex;
	
							this.templateElements[templateIndex] = element;
							this.templateTypes[templateIndex] = _enumFragmentValueTypes2['default'].FRAGMENT;
							this.templateValues[templateIndex] = child;
						} else {
							this.templateElement = element;
							this.templateType = _enumFragmentValueTypes2['default'].FRAGMENT;
							this.templateValue = child;
						}
					} else {
						element.appendChild(child);
					}
				}
			} else if ((children = children[0]).pointer !== undefined) {
				var value = this.templateValue || this.templateValues[children.pointer];
	
				if (typeof value !== 'object') {
					element.textContent = value;
					if (this.templateValue) {
						this.templateElement = element;
						this.templateType = _enumFragmentValueTypes2['default'].TEXT;
					} else {
						this.templateElements[children.pointer] = element;
						this.templateTypes[children.pointer] = _enumFragmentValueTypes2['default'].TEXT;
					}
				} else if ((0, _utilIsArray2['default'])(value)) {
					if (this.templateValue) {
						this.templateElement = element;
						this.templateType = _enumFragmentValueTypes2['default'].LIST;
					} else {
						this.templateElements[children.pointer] = element;
						this.templateTypes[children.pointer] = _enumFragmentValueTypes2['default'].LIST;
					}
				}
			} else if (typeof children !== 'object') {
				element.textContent = children;
			} else if (children.component) {
				this.templateElement = element;
				this.templateType = _enumFragmentValueTypes2['default'].FRAGMENT;
				this.templateValue = children;
			} else {
				element.appendChild(children);
			}
		}
	
		if (props) {
			_2['default'].addAttributes(element, props, this);
		}
	
		return element;
	}
	
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _cfgSvgCfg = __webpack_require__(34);
	
	var _cfgSvgCfg2 = _interopRequireDefault(_cfgSvgCfg);
	
	var _varsSvgNamespace = __webpack_require__(39);
	
	var _varsSvgNamespace2 = _interopRequireDefault(_varsSvgNamespace);
	
	var _varsMathNamespace = __webpack_require__(38);
	
	var _varsMathNamespace2 = _interopRequireDefault(_varsMathNamespace);
	
	function createElementWithIs(tag, xmlns, is) {
	
	    switch (tag) {
	        case 'a':
	            return document.createElement('a', is);
	        case 'button':
	            return document.createElement('button', is);
	        case 'div':
	            return document.createElement('div', is);
	        case 'em':
	            return document.createElement('em', is);
	        case 'form':
	            return document.createElement('form', is);
	        case 'img':
	            return document.createElement('img', is);
	        case 'h1':
	            return document.createElement('h1', is);
	        case 'h2':
	            return document.createElement('h2', is);
	        case 'li':
	            return document.createElement('li', is);
	        case 'ol':
	            return document.createElement('ol', is);
	        case 'p':
	            return document.createElement('p', is);
	        case 'span':
	            return document.createElement('span', is);
	        case 'table':
	            return document.createElement('table', is);
	        case 'ul':
	            return document.createElement('ul', is);
	        case 'svg':
	            return document.createElementNS(_varsSvgNamespace2['default'], 'svg', is);
	        default:
	
	            return xmlns ? document.createElementNS(xmlns, tag, is) : tag === 'math' ? document.createElementNS(_varsMathNamespace2['default'], tag, is) : _cfgSvgCfg2['default'][tag] ? document.createElementNS(_varsSvgNamespace2['default'], tag, is) : document.createElement(tag, is);
	    }
	}
	
	exports['default'] = createElementWithIs;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _cfgSvgCfg = __webpack_require__(34);
	
	var _cfgSvgCfg2 = _interopRequireDefault(_cfgSvgCfg);
	
	var _varsSvgNamespace = __webpack_require__(39);
	
	var _varsSvgNamespace2 = _interopRequireDefault(_varsSvgNamespace);
	
	var _varsMathNamespace = __webpack_require__(38);
	
	var _varsMathNamespace2 = _interopRequireDefault(_varsMathNamespace);
	
	function createElementWithoutIs(tag, xmlns) {
	
	    switch (tag) {
	        case 'a':
	            return document.createElement('a');
	        case 'button':
	            return document.createElement('button');
	        case 'div':
	            return document.createElement('div');
	        case 'em':
	            return document.createElement('em');
	        case 'form':
	            return document.createElement('form');
	        case 'img':
	            return document.createElement('img');
	        case 'h1':
	            return document.createElement('h1');
	        case 'h2':
	            return document.createElement('h2');
	        case 'li':
	            return document.createElement('li');
	        case 'ol':
	            return document.createElement('ol');
	        case 'p':
	            return document.createElement('p');
	        case 'span':
	            return document.createElement('span');
	        case 'table':
	            return document.createElement('table');
	        case 'ul':
	            return document.createElement('ul');
	        case 'svg':
	            return document.createElementNS(_varsSvgNamespace2['default'], 'svg');
	        default:
	
	            return xmlns ? document.createElementNS(xmlns, tag) : tag === 'math' ? document.createElementNS(_varsMathNamespace2['default'], tag) : _cfgSvgCfg2['default'][tag] ? document.createElementNS(_varsSvgNamespace2['default'], tag) : document.createElement(tag);
	    }
	}
	
	exports['default'] = createElementWithoutIs;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilIsArray = __webpack_require__(3);
	
	var _utilIsArray2 = _interopRequireDefault(_utilIsArray);
	
	var _utilInArray = __webpack_require__(83);
	
	var _utilInArray2 = _interopRequireDefault(_utilInArray);
	
	exports['default'] = function (node, value) {
	
	    var multiple = (0, _utilIsArray2['default'])(value),
	        options = node.options;
	
	    if (multiple && typeof value[0] === 'number') {
	        var selectedValue = {};
	        for (i = 0; i < value.length; i++) {
	            selectedValue['' + value[i]] = true;
	        }
	
	        for (i = 0; i < options.length; i++) {
	            var selected = selectedValue.hasOwnProperty(options[i].value);
	            if (options[i].selected !== selected) {
	                options[i].selected = true;
	            }
	        }
	    } else {
	        var optionNode = undefined;
	        for (var _i = 0; _i < options.length; _i++) {
	            optionNode = options[_i];
	            optionNode.selected = value != null && (multiple ? (0, _utilInArray2['default'])(value, optionNode.value) : optionNode.value == value);
	        }
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _enumFragmentValueTypes = __webpack_require__(2);
	
	var _enumFragmentValueTypes2 = _interopRequireDefault(_enumFragmentValueTypes);
	
	exports['default'] = function (node, attrName, attrVal, fragment) {
	
	    var fragmentType = undefined;
	
	    switch (attrName) {
	        case 'class':
	        case 'className':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_CLASS;
	            break;
	        case 'id':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_ID;
	            break;
	        case 'label':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_LABEL;
	            break;
	        case 'placeholder':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_PLACEHOLDER;
	            break;
	        case 'name':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_NAME;
	            break;
	        case 'width':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_WIDTH;
	            break;
	        case 'height':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_HEIGHT;
	            break;
	        case 'designMode':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_DESIGNMODE;
	            break;
	        case 'htmlFor':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_HTMLFOR;
	            break;
	        case 'playbackRate':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_PLAYBACKRATE;
	            break;
	        case 'preload':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_PRELOAD;
	            break;
	        case 'srcDoc':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_SRCDOC;
	            break;
	        case 'autoplay':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_AUTOPLAY;
	            break;
	        case 'checked':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_CHECKED;
	            break;
	        case 'isMap':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_ISMAP;
	            break;
	        case 'loop':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_LOOP;
	            break;
	        case 'muted':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_MUTED;
	            break;
	        case 'readOnly':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_READONLY;
	            break;
	        case 'reversed':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_REVERSED;
	            break;
	        case 'required':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_REQUIRED;
	            break;
	        case 'selected':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_SELECTED;
	            break;
	        case 'spellCheck':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_SPELLCHECK;
	            break;
	        case 'trueSpeed':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_TRUESPEED;
	            break;
	        case 'multiple':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_MULTIPLE;
	            break;
	        case 'controls':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_CONTROLS;
	            break;
	        case 'defer':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_DEFER;
	            break;
	        case 'noValidate':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_NOVALIDATE;
	            break;
	        case 'scoped':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_SCOPED;
	            break;
	        case 'resize':
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_NO_RESIZE;
	            break;
	        default:
	            fragmentType = _enumFragmentValueTypes2['default'].ATTR_OTHER;
	    }
	
	    if (fragment.templateValue !== undefined) {
	        fragment.templateElement = node;
	        if (fragmentType === _enumFragmentValueTypes2['default'].ATTR_OTHER) {
	            fragment.templateType = _enumFragmentValueTypes2['default'].ATTR_OTHER[attrName] = attrName;
	        } else {
	            fragment.templateType = fragmentType;
	        }
	        return fragment.templateValue;
	    } else {
	        fragment.templateElements[attrVal.pointer] = node;
	        if (fragmentType === _enumFragmentValueTypes2['default'].ATTR_OTHER) {
	            fragment.templateTypes[attrVal.pointer] = _enumFragmentValueTypes2['default'].ATTR_OTHER[attrName] = attrName;
	        } else {
	            fragment.templateTypes[attrVal.pointer] = fragmentType;
	        }
	        return fragment.templateValues[attrVal.pointer];
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	        value: true
	});
	
	var _addPixelSuffixToValueIfNeeded = __webpack_require__(33);
	
	var _addPixelSuffixToValueIfNeeded2 = _interopRequireDefault(_addPixelSuffixToValueIfNeeded);
	
	/**
	 * Sets the value for multiple styles on a node. If a value is specified as
	 * '' (empty string), the corresponding style property will be unset.
	 *
	 * @param {DOMElement} node
	 * @param {object} styles
	 */
	
	exports['default'] = function (node, styles) {
	
	        for (var styleName in styles) {
	
	                var styleValue = styles[styleName];
	
	                styleValue = styleValue == null ? '' : (0, _addPixelSuffixToValueIfNeeded2['default'])(styleName, styleValue);
	
	                node.style[styleName] = styleValue;
	        }
	};
	
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (str) {
	
	    switch (str.length) {
	        case 4:
	            return str === 'flex' || str === 'base' || str === 'zoom';
	        case 5:
	            return str === 'order';
	        case 6:
	            return str === 'marker' || str === 'stress' || str === 'volume' || str === 'widows' || str === 'zIndex';
	        case 7:
	            return str === 'boxFlex' || str === 'gridRow' || str === 'opacity' || str === 'orphans' || str === 'tabSize';
	        case 8:
	            return str === 'flexGrow' || str === 'richness';
	        case 9:
	            return str === 'flexOrder' || str === 'lineClamp' || 'msBoxFlex';
	        case 10:
	            return str === 'flexShrink' || str === 'counterReset' || str === 'fontWeight' || str === 'gridColumn' || str === 'lineHeight' || str === 'pitchRange' || str === 'MozBoxFlex';
	        case 11:
	            return str === 'columnCount' || str === 'counterReset' || str === 'stopOpacity' || str === 'fillOpacity' || str === 'strokeWidth';
	        case 12:
	            return str === 'boxFlexGroup' || str === 'counterReset' || str === 'flexPositive' || str === 'flexNegative';
	        case 13:
	            return str === 'strokeOpacity' || str === 'WebkitBoxFlex' || str === 'WebkitGridRow';
	        case 14:
	            return str === 'WebkitFlexGrow';
	        case 15:
	            return str === 'boxOrdinalGroup' || str === 'WebkitFlexShrink';
	        case 16:
	            return str === 'counterIncrement' || str === 'strokeDashoffset';
	        case 17:
	            return str === 'MozBoxOrdinalGroup' || str === 'WebkitStrokeWidth';
	        case 20:
	            return str === 'WebkitBoxOrdinalGroup';
	        case 23:
	            return str === 'animationIterationCount';
	        case 29:
	            return str === 'WebkitAnimationIterationCount';
	    }
	
	    return false;
	};
	
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _namespaces = __webpack_require__(81);
	
	var _namespaces2 = _interopRequireDefault(_namespaces);
	
	exports['default'] = {
	    'xlink:actuate': _namespaces2['default'].xlink,
	    'xlink:arcrole': _namespaces2['default'].xlink,
	    'xlink:href': _namespaces2['default'].xlink,
	    'xlink:role': _namespaces2['default'].xlink,
	    'xlink:show': _namespaces2['default'].xlink,
	    'xlink:title': _namespaces2['default'].xlink,
	    'xlink:type': _namespaces2['default'].xlink,
	    'xml:base': _namespaces2['default'].xml,
	    'xml:id': _namespaces2['default'].xml,
	    'xml:lang': _namespaces2['default'].xml,
	    'xml:space': _namespaces2['default'].xml
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	   value: true
	});
	exports['default'] = {
	   math: 'http://www.w3.org/1998/Math/MathML',
	   svg: 'http://www.w3.org/2000/svg',
	   xlink: 'http://www.w3.org/1999/xlink',
	   xml: 'http://www.w3.org/XML/1998/namespace'
	};
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	// TODO! don't use 'slice'
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var slice = Array.prototype.slice.call(arguments, 2);
	
	function bind(self, fn) {
	  var curryArgs = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
	  if (typeof fn === 'function') {
	    return curryArgs.length ? function () {
	      return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) // Todo! use 'new Array' instead of 'concat'
	      : fn.apply(self, curryArgs);
	    } : function () {
	      return arguments.length ? fn.apply(self, arguments) : fn.call(self);
	    };
	  } else {
	    // in IE, native methods are not functions so they cannot be bound (note: they don't need to be)
	    return fn;
	  }
	}
	exports['default'] = bind;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports["default"] = function (arr, item) {
		var len = arr.length;
		var i = 0;
		while (i < len) {
			if (arr[i++] === item) {
				return true;
			}
		}
		return false;
	};
	
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports) {

	// Generate a unique identifier
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var uuidFunc = function uuidFunc(char) {
	  return char == 'x' ? Math.random() * 16 | 0 : (Math.random() * 16 | 0 & 0x3 | 0x8).toString(16);
	};
	
	exports['default'] = function () {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, uuidFunc);
	};
	
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(85)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(89);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

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

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=inferno.js.map