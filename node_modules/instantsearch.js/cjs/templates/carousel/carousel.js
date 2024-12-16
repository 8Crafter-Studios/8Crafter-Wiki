"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carousel = carousel;
var _preact = require("htm/preact");
var _instantsearchUiComponents = require("instantsearch-ui-components");
var _preact2 = require("preact");
var _hooks = require("preact/hooks");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Carousel = (0, _instantsearchUiComponents.createCarouselComponent)({
  createElement: _preact2.h,
  Fragment: _preact2.Fragment
});
function CarouselWithRefs(props) {
  var carouselRefs = {
    listRef: (0, _hooks.useRef)(null),
    nextButtonRef: (0, _hooks.useRef)(null),
    previousButtonRef: (0, _hooks.useRef)(null),
    carouselIdRef: (0, _hooks.useRef)((0, _instantsearchUiComponents.generateCarouselId)())
  };
  return (0, _preact2.h)(Carousel, _extends({}, carouselRefs, props));
}
function carousel() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    cssClasses = _ref.cssClasses,
    _ref$templates = _ref.templates,
    templates = _ref$templates === void 0 ? {} : _ref$templates;
  return function CarouselTemplate(_ref2) {
    var items = _ref2.items,
      widgetTemplates = _ref2.templates,
      _ref2$cssClasses = _ref2.cssClasses,
      widgetCssClasses = _ref2$cssClasses === void 0 ? {} : _ref2$cssClasses;
    var previous = templates.previous,
      next = templates.next;
    return (0, _preact2.h)(CarouselWithRefs, {
      items: items,
      itemComponent: widgetTemplates.item,
      previousIconComponent: previous ? function () {
        return previous({
          html: _preact.html
        });
      } : undefined,
      nextIconComponent: next ? function () {
        return next({
          html: _preact.html
        });
      } : undefined,
      classNames: _objectSpread(_objectSpread({}, cssClasses), {
        list: (0, _instantsearchUiComponents.cx)(cssClasses === null || cssClasses === void 0 ? void 0 : cssClasses.list, widgetCssClasses === null || widgetCssClasses === void 0 ? void 0 : widgetCssClasses.list),
        item: (0, _instantsearchUiComponents.cx)(cssClasses === null || cssClasses === void 0 ? void 0 : cssClasses.item, widgetCssClasses === null || widgetCssClasses === void 0 ? void 0 : widgetCssClasses.item)
      })
    });
  };
}