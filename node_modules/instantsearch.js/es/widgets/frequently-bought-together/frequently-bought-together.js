function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { createFrequentlyBoughtTogetherComponent } from 'instantsearch-ui-components';
import { Fragment, h, render } from 'preact';
import TemplateComponent from "../../components/Template/Template.js";
import connectFrequentlyBoughtTogether from "../../connectors/frequently-bought-together/connectFrequentlyBoughtTogether.js";
import { prepareTemplateProps } from "../../lib/templating/index.js";
import { getContainerNode, createDocumentationMessageGenerator } from "../../lib/utils/index.js";
var withUsage = createDocumentationMessageGenerator({
  name: 'frequently-bought-together'
});
var FrequentlyBoughtTogether = createFrequentlyBoughtTogetherComponent({
  createElement: h,
  Fragment: Fragment
});
var renderer = function renderer(_ref) {
  var renderState = _ref.renderState,
    cssClasses = _ref.cssClasses,
    containerNode = _ref.containerNode,
    templates = _ref.templates;
  return function (_ref2, isFirstRendering) {
    var items = _ref2.items,
      results = _ref2.results,
      instantSearchInstance = _ref2.instantSearchInstance;
    if (isFirstRendering) {
      renderState.templateProps = prepareTemplateProps({
        defaultTemplates: {},
        templatesConfig: instantSearchInstance.templatesConfig,
        templates: templates
      });
      return;
    }
    var headerComponent = templates.header ? function (data) {
      return h(TemplateComponent, _extends({}, renderState.templateProps, {
        templateKey: "header",
        rootTagName: "fragment",
        data: {
          cssClasses: data.classNames,
          items: data.items
        }
      }));
    } : undefined;
    var itemComponent = templates.item ? function (_ref3) {
      var item = _ref3.item;
      return h(TemplateComponent, _extends({}, renderState.templateProps, {
        templateKey: "item",
        rootTagName: "fragment",
        data: item
      }));
    } : undefined;
    var emptyComponent = templates.empty ? function () {
      return h(TemplateComponent, _extends({}, renderState.templateProps, {
        templateKey: "empty",
        rootTagName: "fragment",
        data: results
      }));
    } : undefined;
    var layoutComponent = templates.layout ? function (data) {
      return h(TemplateComponent, _extends({}, renderState.templateProps, {
        templateKey: "layout",
        rootTagName: "fragment",
        data: {
          items: data.items,
          templates: {
            item: templates.item ? function (_ref4) {
              var item = _ref4.item;
              return h(TemplateComponent, _extends({}, renderState.templateProps, {
                templateKey: "item",
                rootTagName: "fragment",
                data: item
              }));
            } : undefined
          },
          cssClasses: {
            list: data.classNames.list,
            item: data.classNames.item
          }
        }
      }));
    } : undefined;
    render(h(FrequentlyBoughtTogether, {
      items: items,
      headerComponent: headerComponent,
      itemComponent: itemComponent,
      sendEvent: function sendEvent() {},
      classNames: cssClasses,
      emptyComponent: emptyComponent,
      layout: layoutComponent,
      status: instantSearchInstance.status
    }), containerNode);
  };
};
export default (function frequentlyBoughtTogether(widgetParams) {
  var _ref5 = widgetParams || {},
    container = _ref5.container,
    objectIDs = _ref5.objectIDs,
    limit = _ref5.limit,
    queryParameters = _ref5.queryParameters,
    threshold = _ref5.threshold,
    escapeHTML = _ref5.escapeHTML,
    transformItems = _ref5.transformItems,
    _ref5$templates = _ref5.templates,
    templates = _ref5$templates === void 0 ? {} : _ref5$templates,
    _ref5$cssClasses = _ref5.cssClasses,
    cssClasses = _ref5$cssClasses === void 0 ? {} : _ref5$cssClasses;
  if (!container) {
    throw new Error(withUsage('The `container` option is required.'));
  }
  var containerNode = getContainerNode(container);
  var specializedRenderer = renderer({
    containerNode: containerNode,
    cssClasses: cssClasses,
    renderState: {},
    templates: templates
  });
  var makeWidget = connectFrequentlyBoughtTogether(specializedRenderer, function () {
    return render(null, containerNode);
  });
  return _objectSpread(_objectSpread({}, makeWidget({
    objectIDs: objectIDs,
    limit: limit,
    queryParameters: queryParameters,
    threshold: threshold,
    escapeHTML: escapeHTML,
    transformItems: transformItems
  })), {}, {
    $$widgetType: 'ais.frequentlyBoughtTogether'
  });
});