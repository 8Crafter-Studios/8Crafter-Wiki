"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInsightsMiddleware = createInsightsMiddleware;
var _helpers = require("../helpers");
var _utils = require("../lib/utils");
var _uuid = require("../lib/utils/uuid");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ALGOLIA_INSIGHTS_VERSION = '2.17.2';
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
function createInsightsMiddleware() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _insightsClient = props.insightsClient,
    insightsInitParams = props.insightsInitParams,
    onEvent = props.onEvent,
    _props$$$internal = props.$$internal,
    $$internal = _props$$$internal === void 0 ? false : _props$$$internal,
    _props$$$automatic = props.$$automatic,
    $$automatic = _props$$$automatic === void 0 ? false : _props$$$automatic;
  var potentialInsightsClient = _insightsClient;
  if (!_insightsClient && _insightsClient !== null) {
    (0, _utils.safelyRunOnBrowser)(function (_ref) {
      var window = _ref.window;
      var pointer = window.AlgoliaAnalyticsObject || 'aa';
      if (typeof pointer === 'string') {
        potentialInsightsClient = window[pointer];
      }
      if (!potentialInsightsClient) {
        window.AlgoliaAnalyticsObject = pointer;
        if (!window[pointer]) {
          window[pointer] = function () {
            if (!window[pointer].queue) {
              window[pointer].queue = [];
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            window[pointer].queue.push(args);
          };
          window[pointer].version = ALGOLIA_INSIGHTS_VERSION;
          window[pointer].shouldAddScript = true;
        }
        potentialInsightsClient = window[pointer];
      }
    });
  }
  // if still no insightsClient was found, we use a noop
  var insightsClient = potentialInsightsClient || _utils.noop;
  return function (_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance;
    // remove existing default insights middleware
    // user-provided insights middleware takes precedence
    var existingInsightsMiddlewares = instantSearchInstance.middleware.filter(function (m) {
      return m.instance.$$type === 'ais.insights' && m.instance.$$internal;
    }).map(function (m) {
      return m.creator;
    });
    instantSearchInstance.unuse.apply(instantSearchInstance, _toConsumableArray(existingInsightsMiddlewares));
    var _getAppIdAndApiKey = (0, _utils.getAppIdAndApiKey)(instantSearchInstance.client),
      _getAppIdAndApiKey2 = _slicedToArray(_getAppIdAndApiKey, 2),
      appId = _getAppIdAndApiKey2[0],
      apiKey = _getAppIdAndApiKey2[1];

    // search-insights.js also throws an error so dev-only clarification is sufficient
    process.env.NODE_ENV === 'development' ? (0, _utils.warning)(Boolean(appId && apiKey), 'could not extract Algolia credentials from searchClient in insights middleware.') : void 0;
    var queuedInitParams = undefined;
    var queuedUserToken = undefined;
    var userTokenBeforeInit = undefined;
    var queue = insightsClient.queue;
    if (Array.isArray(queue)) {
      // Context: The umd build of search-insights is asynchronously loaded by the snippet.
      //
      // When user calls `aa('setUserToken', 'my-user-token')` before `search-insights` is loaded,
      // ['setUserToken', 'my-user-token'] gets stored in `aa.queue`.
      // Whenever `search-insights` is finally loaded, it will process the queue.
      //
      // But here's the reason why we handle it here:
      // At this point, even though `search-insights` is not loaded yet,
      // we still want to read the token from the queue.
      // Otherwise, the first search call will be fired without the token.
      var _map = ['setUserToken', 'init'].map(function (key) {
        var _ref3 = (0, _utils.find)(queue.slice().reverse(), function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
              method = _ref6[0];
            return method === key;
          }) || [],
          _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[1];
        return value;
      });
      var _map2 = _slicedToArray(_map, 2);
      queuedUserToken = _map2[0];
      queuedInitParams = _map2[1];
    }

    // If user called `aa('setUserToken')` before creating the Insights middleware,
    // we temporarily store the token and set it later on.
    //
    // Otherwise, the `init` call might override them with anonymous user token.
    insightsClient('getUserToken', null, function (_error, userToken) {
      userTokenBeforeInit = normalizeUserToken(userToken);
    });

    // Only `init` if the `insightsInitParams` option is passed or
    // if the `insightsClient` version doesn't supports optional `init` calling.
    if (insightsInitParams || !isModernInsightsClient(insightsClient)) {
      insightsClient('init', _objectSpread({
        appId: appId,
        apiKey: apiKey,
        partial: true
      }, insightsInitParams));
    }
    var initialParameters;
    var helper;
    return {
      $$type: 'ais.insights',
      $$internal: $$internal,
      $$automatic: $$automatic,
      onStateChange: function onStateChange() {},
      subscribe: function subscribe() {
        if (!insightsClient.shouldAddScript) return;
        var errorMessage = '[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init';
        try {
          var script = document.createElement('script');
          script.async = true;
          script.src = ALGOLIA_INSIGHTS_SRC;
          script.onerror = function () {
            instantSearchInstance.emit('error', new Error(errorMessage));
          };
          document.body.appendChild(script);
          insightsClient.shouldAddScript = false;
        } catch (cause) {
          insightsClient.shouldAddScript = false;
          instantSearchInstance.emit('error', new Error(errorMessage));
        }
      },
      started: function started() {
        insightsClient('addAlgoliaAgent', 'insights-middleware');
        helper = instantSearchInstance.mainHelper;
        var queueAtStart = insightsClient.queue;
        if (Array.isArray(queueAtStart)) {
          var _map3 = ['setUserToken', 'init'].map(function (key) {
            var _ref7 = (0, _utils.find)(queueAtStart.slice().reverse(), function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 1),
                  method = _ref10[0];
                return method === key;
              }) || [],
              _ref8 = _slicedToArray(_ref7, 2),
              value = _ref8[1];
            return value;
          });
          var _map4 = _slicedToArray(_map3, 2);
          queuedUserToken = _map4[0];
          queuedInitParams = _map4[1];
        }
        initialParameters = getInitialParameters(instantSearchInstance);

        // We don't want to force clickAnalytics when the insights is enabled from the search response.
        // This means we don't enable insights for indices that don't opt in
        if (!$$automatic) {
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), {}, {
            clickAnalytics: true
          }));
        }
        if (!$$internal) {
          instantSearchInstance.scheduleSearch();
        }
        var setUserTokenToSearch = function setUserTokenToSearch(userToken) {
          var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var normalizedUserToken = normalizeUserToken(userToken);
          if (!normalizedUserToken) {
            return;
          }
          var existingToken = helper.state.userToken;
          function applyToken() {
            helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), {}, {
              userToken: normalizedUserToken
            }));
            if (existingToken && existingToken !== userToken) {
              instantSearchInstance.scheduleSearch();
            }
          }

          // Delay the token application to the next render cycle
          if (!immediate) {
            setTimeout(applyToken, 0);
          } else {
            applyToken();
          }
        };
        function setUserToken(token) {
          setUserTokenToSearch(token, true);
          insightsClient('setUserToken', token);
        }
        var anonymousUserToken = undefined;
        var anonymousTokenFromInsights = (0, _helpers.getInsightsAnonymousUserTokenInternal)();
        if (anonymousTokenFromInsights) {
          // When `aa('init', { ... })` is called, it creates an anonymous user token in cookie.
          // We can set it as userToken on instantsearch and insights. If it's not set as an insights
          // userToken before a sendEvent, insights automatically generates a new anonymous token,
          // causing a state change and an unnecessary query on instantsearch.
          anonymousUserToken = anonymousTokenFromInsights;
        } else {
          var token = "anonymous-".concat((0, _uuid.createUUID)());
          anonymousUserToken = token;
        }
        var userTokenFromInit;

        // With SSR, the token could be be set on the state. We make sure
        // that insights is in sync with that token since, there is no
        // insights lib on the server.
        var tokenFromSearchParameters = initialParameters.userToken;

        // When the first query is sent, the token is possibly not yet set by
        // the insights onChange callbacks (if insights isn't yet loaded).
        // It is explicitly being set here so that the first query has the
        // initial tokens set and ensure a second query isn't automatically
        // made when the onChange callback actually changes the state.
        if (insightsInitParams !== null && insightsInitParams !== void 0 && insightsInitParams.userToken) {
          userTokenFromInit = insightsInitParams.userToken;
        }
        if (userTokenFromInit) {
          setUserToken(userTokenFromInit);
        } else if (tokenFromSearchParameters) {
          setUserToken(tokenFromSearchParameters);
        } else if (userTokenBeforeInit) {
          setUserToken(userTokenBeforeInit);
        } else if (queuedUserToken) {
          setUserToken(queuedUserToken);
        } else if (anonymousUserToken) {
          var _queuedInitParams;
          setUserToken(anonymousUserToken);
          if (insightsInitParams !== null && insightsInitParams !== void 0 && insightsInitParams.useCookie || (_queuedInitParams = queuedInitParams) !== null && _queuedInitParams !== void 0 && _queuedInitParams.useCookie) {
            var _queuedInitParams2;
            saveTokenAsCookie(anonymousUserToken, (insightsInitParams === null || insightsInitParams === void 0 ? void 0 : insightsInitParams.cookieDuration) || ((_queuedInitParams2 = queuedInitParams) === null || _queuedInitParams2 === void 0 ? void 0 : _queuedInitParams2.cookieDuration));
          }
        }

        // This updates userToken which is set explicitly by `aa('setUserToken', userToken)`
        insightsClient('onUserTokenChange', function (token) {
          return setUserTokenToSearch(token, true);
        }, {
          immediate: true
        });
        var insightsClientWithLocalCredentials = insightsClient;
        if (isModernInsightsClient(insightsClient)) {
          insightsClientWithLocalCredentials = function insightsClientWithLocalCredentials(method, payload) {
            var extraParams = {
              headers: {
                'X-Algolia-Application-Id': appId,
                'X-Algolia-API-Key': apiKey
              }
            };

            // @ts-ignore we are calling this only when we know that the client actually is correct
            return insightsClient(method, payload, extraParams);
          };
        }
        var viewedObjectIDs = new Set();
        var lastQueryId;
        instantSearchInstance.mainHelper.derivedHelpers[0].on('result', function (_ref11) {
          var results = _ref11.results;
          if (results && (!results.queryID || results.queryID !== lastQueryId)) {
            lastQueryId = results.queryID;
            viewedObjectIDs.clear();
          }
        });
        instantSearchInstance.sendEventToInsights = function (event) {
          if (onEvent) {
            onEvent(event, insightsClientWithLocalCredentials);
          } else if (event.insightsMethod) {
            if (event.insightsMethod === 'viewedObjectIDs') {
              var _payload = event.payload;
              var difference = _payload.objectIDs.filter(function (objectID) {
                return !viewedObjectIDs.has(objectID);
              });
              if (difference.length === 0) {
                return;
              }
              difference.forEach(function (objectID) {
                return viewedObjectIDs.add(objectID);
              });
              _payload.objectIDs = difference;
            }

            // Source is used to differentiate events sent by instantsearch from those sent manually.
            event.payload.algoliaSource = ['instantsearch'];
            if ($$automatic) {
              event.payload.algoliaSource.push('instantsearch-automatic');
            }
            if (event.eventModifier === 'internal') {
              event.payload.algoliaSource.push('instantsearch-internal');
            }
            insightsClientWithLocalCredentials(event.insightsMethod, event.payload);
            process.env.NODE_ENV === 'development' ? (0, _utils.warning)(Boolean(helper.state.userToken), "\nCannot send event to Algolia Insights because `userToken` is not set.\n\nSee documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken\n") : void 0;
          } else {
            process.env.NODE_ENV === 'development' ? (0, _utils.warning)(false, 'Cannot send event to Algolia Insights because `insightsMethod` option is missing.') : void 0;
          }
        };
      },
      unsubscribe: function unsubscribe() {
        insightsClient('onUserTokenChange', undefined);
        instantSearchInstance.sendEventToInsights = _utils.noop;
        if (helper && initialParameters) {
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), initialParameters));
          instantSearchInstance.scheduleSearch();
        }
      }
    };
  };
}
function getInitialParameters(instantSearchInstance) {
  var _instantSearchInstanc, _instantSearchInstanc2;
  // in SSR, the initial state we use in this domain is set on the main index
  var stateFromInitialResults = ((_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : (_instantSearchInstanc2 = _instantSearchInstanc[instantSearchInstance.indexName]) === null || _instantSearchInstanc2 === void 0 ? void 0 : _instantSearchInstanc2.state) || {};
  var stateFromHelper = instantSearchInstance.mainHelper.state;
  return {
    userToken: stateFromInitialResults.userToken || stateFromHelper.userToken,
    clickAnalytics: stateFromInitialResults.clickAnalytics || stateFromHelper.clickAnalytics
  };
}
function saveTokenAsCookie(token, cookieDuration) {
  var MONTH = 30 * 24 * 60 * 60 * 1000;
  var d = new Date();
  d.setTime(d.getTime() + (cookieDuration || MONTH * 6));
  var expires = "expires=".concat(d.toUTCString());
  document.cookie = "_ALGOLIA=".concat(token, ";").concat(expires, ";path=/");
}

/**
 * Determines if a given insights `client` supports the optional call to `init`
 * and the ability to set credentials via extra parameters when sending events.
 */
function isModernInsightsClient(client) {
  var _split$map = (client.version || '').split('.').map(Number),
    _split$map2 = _slicedToArray(_split$map, 2),
    major = _split$map2[0],
    minor = _split$map2[1];

  /* eslint-disable @typescript-eslint/naming-convention */
  var v3 = major >= 3;
  var v2_6 = major === 2 && minor >= 6;
  var v1_10 = major === 1 && minor >= 10;
  /* eslint-enable @typescript-eslint/naming-convention */

  return v3 || v2_6 || v1_10;
}

/**
 * While `search-insights` supports both string and number user tokens,
 * the Search API only accepts strings. This function normalizes the user token.
 */
function normalizeUserToken(userToken) {
  if (!userToken) {
    return undefined;
  }
  return typeof userToken === 'number' ? userToken.toString() : userToken;
}