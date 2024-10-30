import { b as __spreadArray, c as __assign } from "../../assets/tslib.es6-OrcEiBuJ.js";
import { g as getDefaultExportFromCjs } from "../../assets/_commonjsHelpers-DWwsNxpa.js";
var element$2 = window.wp.element;
var el = element$2.createElement;
var recommendationIcon = el("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96 88" }, el("path", {
  d: "M62 16L52 40L28 50L52 60L62 84L72 60L96 50L72 40L62 16ZM16.5 27.5L22 44L27.5 27.5L44 22L27.5 16.5L22 0L16.5 16.5L0 22L16.5 27.5ZM25.5 70.5L22 60L18.5 70.5L8 74L18.5 77.5L22 88L25.5 77.5L36 74L25.5 70.5Z",
  fill: "black"
}));
var blockConfig = {
  title: "Recommend Content",
  icon: recommendationIcon,
  category: "lytics",
  viewScript: "file:./lytics-recommendation-render.js",
  attributes: {
    recommendationKind: {
      type: "string",
      default: "individual"
    },
    interestEngine: {
      type: "string",
      default: "default"
    },
    collection: {
      type: "string",
      default: "content_with_images"
    },
    numberOfRecommendations: {
      type: "number",
      default: 3
    },
    doNotShuffle: {
      type: "boolean",
      default: false
    },
    includeRecentlyViewedContent: {
      type: "boolean",
      default: false
    },
    showHeadline: {
      type: "boolean",
      default: true
    },
    showImage: {
      type: "boolean",
      default: true
    },
    showBody: {
      type: "boolean",
      default: true
    },
    previewUID: {
      type: "string",
      default: ""
    },
    accountId: {
      type: "string",
      default: ""
    },
    contentCollections: {
      type: "object",
      default: {}
    },
    engines: {
      type: "object",
      default: {}
    }
  }
};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C = Object.assign, D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = true;
var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
function M(a, b, e) {
  var d, c = {}, k = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
}
function N(a, b) {
  return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  }
  else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
function X() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S, forEach: function(a, b, e) {
  S(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E;
react_production_min.Fragment = p;
react_production_min.Profiler = r;
react_production_min.PureComponent = G;
react_production_min.StrictMode = q;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
react_production_min.act = X;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M;
react_production_min.createFactory = function(a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v, render: a };
};
react_production_min.isValidElement = O;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
react_production_min.unstable_act = X;
react_production_min.useCallback = function(a, b) {
  return U.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var element$1 = window.wp.element;
var editor = window.wp.blockEditor;
var components = window.wp.components;
var renderBlockContent$1 = function(attributes) {
  var payload = {
    account_id: attributes.accountId,
    element: "lytics-rec-container-".concat(attributes.blockId),
    block_id: attributes.blockId,
    recommendation_type: attributes.recommendationKind,
    content_collection_id: attributes.collection,
    interest_engine_id: attributes.interestEngine,
    segment_id: "",
    url: "",
    number_of_recommendations: attributes.numberOfRecommendations,
    dont_shuffle_results: attributes.doNotShuffle ? 1 : 0,
    include_viewed_content: attributes.includeRecentlyViewedContent ? 1 : 0,
    show_headline: attributes.showHeadline ? 1 : 0,
    show_image: attributes.showImage ? 1 : 0,
    show_body: attributes.showBody ? 1 : 0,
    preview_uid: attributes.previewUID
  };
  var encodedPayload = btoa(JSON.stringify(payload));
  if (typeof window._lytics_rec_render !== "undefined") {
    setTimeout(function() {
      window._lytics_rec_render.render();
    }, 1e3);
  } else {
    console.warn("Lytics render not found.");
  }
  var element2 = React.createElement(
    "div",
    { id: "lytics-rec-container-".concat(attributes.block_id), "data-rec-config": encodedPayload },
    React.createElement(
      "div",
      { className: "lytics-rec-wrapper" },
      React.createElement("div", { className: "lytics-rec-loading" })
    )
  );
  return element2;
};
function edit(props) {
  var attributes = props.attributes;
  var el2 = element$1.createElement;
  var InspectorControls = editor.InspectorControls;
  var PanelBody = components.PanelBody, SelectControl = components.SelectControl, CheckboxControl = components.CheckboxControl, TextControl = components.TextControl;
  if (typeof lyticsBlockData !== "undefined") {
    props.setAttributes({
      accountId: lyticsBlockData.account_id,
      contentCollections: lyticsBlockData.content_collections,
      engines: lyticsBlockData.engines
    });
  }
  var updateRecommendationKind = function(value) {
    props.setAttributes({ recommendationKind: value });
  };
  var updateInterestEngine = function(value) {
    props.setAttributes({ interestEngine: value });
  };
  var updateCollection = function(value) {
    props.setAttributes({ collection: value });
  };
  var updateNumberOfRecommendations = function(value) {
    props.setAttributes({ numberOfRecommendations: parseInt(value) });
  };
  var updateDoNotShuffle = function(value) {
    props.setAttributes({ doNotShuffle: value });
  };
  var updateIncludeRecentlyViewedContent = function(value) {
    props.setAttributes({ includeRecentlyViewedContent: value });
  };
  var updateShowHeadline = function(value) {
    props.setAttributes({ showHeadline: value });
  };
  var updateShowImage = function(value) {
    props.setAttributes({ showImage: value });
  };
  var updateShowBody = function(value) {
    props.setAttributes({ showBody: value });
  };
  var updatePreviewUID = function(value) {
    props.setAttributes({ previewUID: value });
  };
  return [
    el2(InspectorControls, { key: "inspector" }, el2(PanelBody, { title: "Settings" }, el2(SelectControl, {
      label: "What kind of recommendation would you like to make?",
      value: attributes.recommendationKind,
      options: [
        { label: "Choose Recommendation Type", value: "" },
        {
          label: "Recommend content that is relevant to each visitor.",
          value: "individual"
        }
      ],
      onChange: updateRecommendationKind
    }), el2(SelectControl, {
      label: "Interest Engine to Power Recommendation",
      value: attributes.interestEngine,
      options: attributes.engines,
      onChange: updateInterestEngine
    }), el2(SelectControl, {
      label: "Select a Content Collection",
      value: attributes.collection,
      options: attributes.contentCollections,
      onChange: updateCollection
    }), el2(SelectControl, {
      label: "How many recommendations would you like to show?",
      value: attributes.numberOfRecommendations,
      options: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 }
      ],
      onChange: updateNumberOfRecommendations
    }), el2(SelectControl, {
      label: "Shuffle Recommendations",
      value: attributes.doNotShuffle,
      options: [
        { label: "Yes", value: false },
        { label: "No", value: true }
      ],
      onChange: updateDoNotShuffle
    }), el2(SelectControl, {
      label: "Include Recently Viewed Content",
      value: attributes.includeRecentlyViewedContent,
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ],
      onChange: updateIncludeRecentlyViewedContent
    }), el2(CheckboxControl, {
      label: "Show Headline",
      checked: attributes.showHeadline,
      onChange: updateShowHeadline
    }), el2(CheckboxControl, {
      label: "Show Image",
      checked: attributes.showImage,
      onChange: updateShowImage
    }), el2(CheckboxControl, {
      label: "Show Body",
      checked: attributes.showBody,
      onChange: updateShowBody
    }), el2(TextControl, {
      label: "Preview UID (optional)",
      value: attributes.previewUID,
      onChange: updatePreviewUID
    }))),
    renderBlockContent$1(attributes)
  ];
}
var renderBlockContent = function(attributes) {
  var payload = {
    account_id: attributes.accountId,
    element: "lytics-rec-container-".concat(attributes.blockId),
    block_id: attributes.blockId,
    recommendation_type: attributes.recommendationKind,
    content_collection_id: attributes.collection,
    interest_engine_id: attributes.interestEngine,
    segment_id: "",
    url: "",
    number_of_recommendations: attributes.numberOfRecommendations,
    dont_shuffle_results: attributes.doNotShuffle ? 1 : 0,
    include_viewed_content: attributes.includeRecentlyViewedContent ? 1 : 0,
    show_headline: attributes.showHeadline ? 1 : 0,
    show_image: attributes.showImage ? 1 : 0,
    show_body: attributes.showBody ? 1 : 0,
    preview_uid: attributes.previewUID
  };
  var encodedPayload = btoa(JSON.stringify(payload));
  var element2 = React.createElement(
    "div",
    { id: "lytics-rec-container-".concat(attributes.block_id), "data-rec-config": encodedPayload, "data-rec-env": "prod" },
    React.createElement(
      "div",
      { className: "lytics-rec-wrapper" },
      React.createElement("div", { className: "lytics-rec-loading" })
    )
  );
  return element2;
};
function save(props) {
  var attributes = props.attributes;
  return renderBlockContent(attributes);
}
var blocks = window.wp.blocks;
var element = window.wp.element;
element.createElement;
var registerBlockType = blocks.registerBlockType;
var getCategories = blocks.getCategories, setCategories = blocks.setCategories;
var categories = getCategories().filter(function(category) {
  return category.slug !== "lytics";
});
setCategories(__spreadArray(__spreadArray([], categories, true), [{ slug: "lytics", title: "Lytics" }], false));
registerBlockType("lytics/recommendations", __assign(__assign({}, blockConfig), { edit, save }));
