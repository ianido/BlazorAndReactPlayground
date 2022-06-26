/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5845:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IVirtualElement.js.map

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementContains = void 0;
var getParent_1 = __webpack_require__(8667);
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            if (parent === child) {
                isContained = true;
            }
            else {
                isContained = false;
                while (child) {
                    var nextParent = getParent_1.getParent(child);
                    if (nextParent === parent) {
                        isContained = true;
                        break;
                    }
                    child = nextParent;
                }
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
//# sourceMappingURL=elementContains.js.map

/***/ }),

/***/ 4684:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementContainsAttribute = void 0;
var findElementRecursive_1 = __webpack_require__(9000);
/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive_1.findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
exports.elementContainsAttribute = elementContainsAttribute;
//# sourceMappingURL=elementContainsAttribute.js.map

/***/ }),

/***/ 9000:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findElementRecursive = void 0;
var getParent_1 = __webpack_require__(8667);
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent_1.getParent(element), matchFunction);
}
exports.findElementRecursive = findElementRecursive;
//# sourceMappingURL=findElementRecursive.js.map

/***/ }),

/***/ 8111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getChildren = void 0;
var isVirtualElement_1 = __webpack_require__(7165);
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement_1.isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
exports.getChildren = getChildren;
//# sourceMappingURL=getChildren.js.map

/***/ }),

/***/ 8667:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getParent = void 0;
var getVirtualParent_1 = __webpack_require__(144);
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return (child &&
        ((allowVirtualParents && getVirtualParent_1.getVirtualParent(child)) || (child.parentNode && child.parentNode)));
}
exports.getParent = getParent;
//# sourceMappingURL=getParent.js.map

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVirtualParent = void 0;
var isVirtualElement_1 = __webpack_require__(7165);
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement_1.isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
//# sourceMappingURL=getVirtualParent.js.map

/***/ }),

/***/ 2970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(5845), exports);
tslib_1.__exportStar(__webpack_require__(809), exports);
tslib_1.__exportStar(__webpack_require__(4684), exports);
tslib_1.__exportStar(__webpack_require__(9000), exports);
tslib_1.__exportStar(__webpack_require__(8111), exports);
tslib_1.__exportStar(__webpack_require__(8667), exports);
tslib_1.__exportStar(__webpack_require__(144), exports);
tslib_1.__exportStar(__webpack_require__(7165), exports);
tslib_1.__exportStar(__webpack_require__(5309), exports);
tslib_1.__exportStar(__webpack_require__(2728), exports);
tslib_1.__exportStar(__webpack_require__(5906), exports);
__webpack_require__(494);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7165:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isVirtualElement = void 0;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}
exports.isVirtualElement = isVirtualElement;
//# sourceMappingURL=isVirtualElement.js.map

/***/ }),

/***/ 5309:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.portalContainsElement = void 0;
var findElementRecursive_1 = __webpack_require__(9000);
var setPortalAttribute_1 = __webpack_require__(2728);
/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent
 * (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = findElementRecursive_1.findElementRecursive(target, function (testElement) { return parent === testElement || testElement.hasAttribute(setPortalAttribute_1.DATA_PORTAL_ATTRIBUTE); });
    return elementMatch !== null && elementMatch.hasAttribute(setPortalAttribute_1.DATA_PORTAL_ATTRIBUTE);
}
exports.portalContainsElement = portalContainsElement;
//# sourceMappingURL=portalContainsElement.js.map

/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPortalAttribute = exports.DATA_PORTAL_ATTRIBUTE = void 0;
exports.DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(exports.DATA_PORTAL_ATTRIBUTE, 'true');
}
exports.setPortalAttribute = setPortalAttribute;
//# sourceMappingURL=setPortalAttribute.js.map

/***/ }),

/***/ 5906:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setVirtualParent = void 0;
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: [],
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: [],
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
//# sourceMappingURL=setVirtualParent.js.map

/***/ }),

/***/ 494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.
var set_version_1 = __webpack_require__(4984);
set_version_1.setVersion('@fluentui/dom-utilities', '2.2.1');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 5675:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStyleOptions = exports.getRTL = exports.setRTL = void 0;
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _rtl = isRTL;
    }
}
exports.setRTL = setRTL;
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            typeof document !== 'undefined' &&
                !!document.documentElement &&
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
exports.getRTL = getRTL;
// This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.
var _rtl;
_rtl = getRTL();
function getStyleOptions() {
    return {
        rtl: getRTL(),
    };
}
exports.getStyleOptions = getStyleOptions;
//# sourceMappingURL=StyleOptionsState.js.map

/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stylesheet = exports.InjectionMode = void 0;
var tslib_1 = __webpack_require__(655);
exports.InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */
var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent);
var _global = {};
// Grab window.
try {
    _global = window || {};
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config, serializedStylesheet) {
        var _a, _b, _c, _d, _e, _f;
        this._rules = [];
        this._preservedRules = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onInsertRuleCallbacks = [];
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        this._config = tslib_1.__assign({ 
            // If there is no document we won't have an element to inject into.
            injectionMode: typeof document === 'undefined' ? exports.InjectionMode.none : exports.InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
        this._classNameToArgs = (_a = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.classNameToArgs) !== null && _a !== void 0 ? _a : this._classNameToArgs;
        this._counter = (_b = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.counter) !== null && _b !== void 0 ? _b : this._counter;
        this._keyToClassName = (_d = (_c = this._config.classNameCache) !== null && _c !== void 0 ? _c : serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.keyToClassName) !== null && _d !== void 0 ? _d : this._keyToClassName;
        this._preservedRules = (_e = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.preservedRules) !== null && _e !== void 0 ? _e : this._preservedRules;
        this._rules = (_f = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.rules) !== null && _f !== void 0 ? _f : this._rules;
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            var fabricConfig = (_global === null || _global === void 0 ? void 0 : _global.FabricConfig) || {};
            var stylesheet = new Stylesheet(fabricConfig.mergeStyles, fabricConfig.serializedStylesheet);
            _stylesheet = stylesheet;
            _global[STYLESHEET_SETTING] = stylesheet;
        }
        return _stylesheet;
    };
    /**
     * Serializes the Stylesheet instance into a format which allows rehydration on creation.
     * @returns string representation of `ISerializedStylesheet` interface.
     */
    Stylesheet.prototype.serialize = function () {
        return JSON.stringify({
            classNameToArgs: this._classNameToArgs,
            counter: this._counter,
            keyToClassName: this._keyToClassName,
            preservedRules: this._preservedRules,
            rules: this._rules,
        });
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_1.__assign(tslib_1.__assign({}, this._config), config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     * @returns function which when called un-registers provided callback.
     */
    Stylesheet.prototype.onReset = function (callback) {
        var _this = this;
        this._onResetCallbacks.push(callback);
        return function () {
            _this._onResetCallbacks = _this._onResetCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Configures an insert rule callback.
     *
     * @param callback - A callback which will be called when a rule is inserted.
     * @returns function which when called un-registers provided callback.
     */
    Stylesheet.prototype.onInsertRule = function (callback) {
        var _this = this;
        this._onInsertRuleCallbacks.push(callback);
        return function () {
            _this._onInsertRuleCallbacks = _this._onInsertRuleCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules,
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets all classnames cache with the stylesheet.
     */
    Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the rules associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== exports.InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (injectionMode) {
                case exports.InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case exports.InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        // eslint-disable-next-line deprecation/deprecation
        if (this._config.onInsertRule) {
            // eslint-disable-next-line deprecation/deprecation
            this._config.onInsertRule(rule);
        }
        this._onInsertRuleCallbacks.forEach(function (callback) { return callback(); });
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            if (!REUSE_STYLE_NODE) {
                // Reset the style element on the next frame.
                window.requestAnimationFrame(function () {
                    _this._styleElement = undefined;
                });
            }
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var head = document.head;
        var styleElement = document.createElement('style');
        var nodeToInsertBefore = null;
        styleElement.setAttribute('data-merge-styles', 'true');
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement) {
            // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
            nodeToInsertBefore = this._lastStyleElement.nextElementSibling;
        }
        else {
            var placeholderStyleTag = this._findPlaceholderStyleTag();
            if (placeholderStyleTag) {
                nodeToInsertBefore = placeholderStyleTag.nextElementSibling;
            }
            else {
                nodeToInsertBefore = head.childNodes[0];
            }
        }
        head.insertBefore(styleElement, head.contains(nodeToInsertBefore) ? nodeToInsertBefore : null);
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
            return head.querySelector('style[data-merge-styles]');
        }
        return null;
    };
    return Stylesheet;
}());
exports.Stylesheet = Stylesheet;
//# sourceMappingURL=Stylesheet.js.map

/***/ }),

/***/ 4444:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatStyleSets = void 0;
var tslib_1 = __webpack_require__(655);
/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = tslib_1.__spreadArray(tslib_1.__spreadArray([], (Array.isArray(mergedValue) ? mergedValue : [mergedValue])), (Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}
exports.concatStyleSets = concatStyleSets;
//# sourceMappingURL=concatStyleSets.js.map

/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatStyleSetsWithProps = void 0;
var concatStyleSets_1 = __webpack_require__(4444);
/**
 * Concatenates style sets into one, but resolves functional sets using the given props.
 * @param styleProps - Props used to resolve functional sets.
 * @param allStyles - Style sets, which can be functions or objects.
 */
function concatStyleSetsWithProps(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        return concatStyleSets_1.concatStyleSets.apply(void 0, result);
    }
    return {};
}
exports.concatStyleSetsWithProps = concatStyleSetsWithProps;
//# sourceMappingURL=concatStyleSetsWithProps.js.map

/***/ }),

/***/ 9734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractStyleParts = void 0;
var Stylesheet_1 = __webpack_require__(203);
/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects,
    };
}
exports.extractStyleParts = extractStyleParts;
//# sourceMappingURL=extractStyleParts.js.map

/***/ }),

/***/ 1976:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fontFace = void 0;
var StyleOptionsState_1 = __webpack_require__(5675);
var Stylesheet_1 = __webpack_require__(203);
var styleToClassName_1 = __webpack_require__(4748);
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var rule = styleToClassName_1.serializeRuleEntries(StyleOptionsState_1.getStyleOptions(), font);
    var className = stylesheet.classNameFromKey(rule);
    if (className) {
        return;
    }
    var name = stylesheet.getClassName();
    stylesheet.insertRule("@font-face{" + rule + "}", true);
    stylesheet.cacheClassName(name, rule, [], ['font-face', rule]);
}
exports.fontFace = fontFace;
//# sourceMappingURL=fontFace.js.map

/***/ }),

/***/ 5591:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setVendorSettings = exports.getVendorSettings = void 0;
var _vendorSettings;
function getVendorSettings() {
    var _a;
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = (_a = nav === null || nav === void 0 ? void 0 : nav.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true,
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent))),
            };
        }
    }
    return _vendorSettings;
}
exports.getVendorSettings = getVendorSettings;
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
exports.setVendorSettings = setVendorSettings;
//# sourceMappingURL=getVendorSettings.js.map

/***/ }),

/***/ 8376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setRTL = exports.keyframes = exports.fontFace = exports.concatStyleSetsWithProps = exports.concatStyleSets = exports.mergeCssSets = exports.mergeStyleSets = exports.mergeCss = exports.mergeStyles = void 0;
var tslib_1 = __webpack_require__(655);
var mergeStyles_1 = __webpack_require__(6459);
Object.defineProperty(exports, "mergeStyles", ({ enumerable: true, get: function () { return mergeStyles_1.mergeStyles; } }));
Object.defineProperty(exports, "mergeCss", ({ enumerable: true, get: function () { return mergeStyles_1.mergeCss; } }));
var mergeStyleSets_1 = __webpack_require__(6528);
Object.defineProperty(exports, "mergeStyleSets", ({ enumerable: true, get: function () { return mergeStyleSets_1.mergeStyleSets; } }));
Object.defineProperty(exports, "mergeCssSets", ({ enumerable: true, get: function () { return mergeStyleSets_1.mergeCssSets; } }));
var concatStyleSets_1 = __webpack_require__(4444);
Object.defineProperty(exports, "concatStyleSets", ({ enumerable: true, get: function () { return concatStyleSets_1.concatStyleSets; } }));
var concatStyleSetsWithProps_1 = __webpack_require__(6900);
Object.defineProperty(exports, "concatStyleSetsWithProps", ({ enumerable: true, get: function () { return concatStyleSetsWithProps_1.concatStyleSetsWithProps; } }));
var fontFace_1 = __webpack_require__(1976);
Object.defineProperty(exports, "fontFace", ({ enumerable: true, get: function () { return fontFace_1.fontFace; } }));
var keyframes_1 = __webpack_require__(4249);
Object.defineProperty(exports, "keyframes", ({ enumerable: true, get: function () { return keyframes_1.keyframes; } }));
tslib_1.__exportStar(__webpack_require__(203), exports);
var StyleOptionsState_1 = __webpack_require__(5675);
Object.defineProperty(exports, "setRTL", ({ enumerable: true, get: function () { return StyleOptionsState_1.setRTL; } }));
__webpack_require__(3890);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keyframes = void 0;
var StyleOptionsState_1 = __webpack_require__(5675);
var Stylesheet_1 = __webpack_require__(203);
var styleToClassName_1 = __webpack_require__(4748);
/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(StyleOptionsState_1.getStyleOptions(), timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    var className = stylesheet.classNameFromKey(rules);
    if (className) {
        return className;
    }
    var name = stylesheet.getClassName();
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
exports.keyframes = keyframes;
//# sourceMappingURL=keyframes.js.map

/***/ }),

/***/ 6528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeCssSets = exports.mergeStyleSets = void 0;
var concatStyleSets_1 = __webpack_require__(4444);
var extractStyleParts_1 = __webpack_require__(9734);
var StyleOptionsState_1 = __webpack_require__(5675);
var styleToClassName_1 = __webpack_require__(4748);
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    return mergeCssSets(styleSets, StyleOptionsState_1.getStyleOptions());
}
exports.mergeStyleSets = mergeStyleSets;
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
function mergeCssSets(styleSets, options) {
    var classNameSet = { subComponentStyles: {} };
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = concatStyleSets_1.concatStyleSets.apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _a = extractStyleParts_1.extractStyleParts(styles), classes = _a.classes, objects = _a.objects;
            if (objects === null || objects === void 0 ? void 0 : objects.length) {
                var registration = styleToClassName_1.styleToRegistration(options || {}, { displayName: styleSetArea }, objects);
                if (registration) {
                    registrations.push(registration);
                    classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
                }
            }
            else {
                classNameSet[styleSetArea] = classes.join(' ');
            }
        }
    }
    for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
        var registration = registrations_1[_i];
        if (registration) {
            styleToClassName_1.applyRegistration(registration, options === null || options === void 0 ? void 0 : options.specificityMultiplier);
        }
    }
    return classNameSet;
}
exports.mergeCssSets = mergeCssSets;
//# sourceMappingURL=mergeStyleSets.js.map

/***/ }),

/***/ 6459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeCss = exports.mergeStyles = void 0;
var extractStyleParts_1 = __webpack_require__(9734);
var StyleOptionsState_1 = __webpack_require__(5675);
var styleToClassName_1 = __webpack_require__(4748);
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mergeCss(args, StyleOptionsState_1.getStyleOptions());
}
exports.mergeStyles = mergeStyles;
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 * Accepts a set of options that will be used when calculating styles.
 *
 * @public
 */
function mergeCss(args, options) {
    var styleArgs = args instanceof Array ? args : [args];
    var _a = extractStyleParts_1.extractStyleParts(styleArgs), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName_1.styleToClassName(options || {}, objects));
    }
    return classes.join(' ');
}
exports.mergeCss = mergeCss;
//# sourceMappingURL=mergeStyles.js.map

/***/ }),

/***/ 4748:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleToClassName = exports.applyRegistration = exports.styleToRegistration = exports.serializeRuleEntries = void 0;
var tslib_1 = __webpack_require__(655);
var Stylesheet_1 = __webpack_require__(203);
var kebabRules_1 = __webpack_require__(299);
var prefixRules_1 = __webpack_require__(8077);
var provideUnits_1 = __webpack_require__(6906);
var rtlifyRules_1 = __webpack_require__(6908);
var tokenizeWithParentheses_1 = __webpack_require__(4853);
var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', '),
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo
        .reverse()
        .reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractSelector(currentSelector, rules, selector, value) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (selector.indexOf('@') === 0) {
        selector = selector + '{' + currentSelector;
        extractRules([value], rules, selector);
    }
    else if (selector.indexOf(',') > -1) {
        expandCommaSeparatedGlobals(selector)
            .split(',')
            .map(function (s) { return s.trim(); })
            .forEach(function (separatedSelector) {
            return extractRules([value], rules, expandSelector(separatedSelector, currentSelector));
        });
    }
    else {
        extractRules([value], rules, expandSelector(selector, currentSelector));
    }
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            for (var prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    var propValue = arg[prop];
                    if (prop === 'selectors') {
                        // every child is a selector.
                        var selectors = arg.selectors;
                        for (var newSelector in selectors) {
                            if (selectors.hasOwnProperty(newSelector)) {
                                extractSelector(currentSelector, rules, newSelector, selectors[newSelector]);
                            }
                        }
                    }
                    else if (typeof propValue === 'object') {
                        // prop is a selector.
                        if (propValue !== null) {
                            extractSelector(currentSelector, rules, prop, propValue);
                        }
                    }
                    else {
                        if (propValue !== undefined) {
                            // Else, add the rule to the currentSelector.
                            if (prop === 'margin' || prop === 'padding') {
                                expandQuads(currentRules, prop, propValue);
                            }
                            else {
                                currentRules[prop] = propValue;
                            }
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? tokenizeWithParentheses_1.tokenizeWithParentheses(value) : [value];
    if (parts.length === 0) {
        parts.push(value);
    }
    if (parts[parts.length - 1] === '!important') {
        // Remove !important from parts, and append it to each part individually
        parts = parts.slice(0, -1).map(function (p) { return p + ' !important'; });
    }
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function repeatString(target, count) {
    if (count <= 0) {
        return '';
    }
    if (count === 1) {
        return target;
    }
    return target + repeatString(target, count - 1);
}
function serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules_1.kebabRules(allEntries, i);
        provideUnits_1.provideUnits(allEntries, i);
        rtlifyRules_1.rtlifyRules(options, allEntries, i);
        prefixRules_1.prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
exports.serializeRuleEntries = serializeRuleEntries;
function styleToRegistration(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(options, rules);
    if (key) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args,
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
    return undefined;
}
exports.styleToRegistration = styleToRegistration;
/**
 * Insert style to stylesheet.
 * @param registration Style registration.
 * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
 * This is to increase css specificity in case it's needed. Default to 1.
 */
function applyRegistration(registration, specificityMultiplier) {
    if (specificityMultiplier === void 0) { specificityMultiplier = 1; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                selector = selector.replace(/&/g, repeatString("." + registration.className, specificityMultiplier));
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
exports.applyRegistration = applyRegistration;
function styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, tslib_1.__spreadArray([options], args));
    if (registration) {
        applyRegistration(registration, options.specificityMultiplier);
        return registration.className;
    }
    return '';
}
exports.styleToClassName = styleToClassName;
//# sourceMappingURL=styleToClassName.js.map

/***/ }),

/***/ 4853:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tokenizeWithParentheses = void 0;
/**
 * Split a string into tokens separated by whitespace, except all text within parentheses
 * is treated as a single token (whitespace is ignored within parentheses).
 *
 * Unlike String.split(' '), multiple consecutive space characters are collapsed and
 * removed from the returned array (including leading and trailing spaces).
 *
 * For example:
 * `tokenizeWithParentheses("3px calc(var(--x) / 2) 9px    0 ")`
 *   => `["3px", "calc(var(--x) / 2)", "9px", "0"]`
 *
 * @returns The array of tokens. Returns an empty array if the string was empty or contained only whitespace.
 */
function tokenizeWithParentheses(value) {
    var parts = [];
    var partStart = 0;
    var parens = 0;
    for (var i = 0; i < value.length; i++) {
        switch (value[i]) {
            case '(':
                parens++;
                break;
            case ')':
                if (parens) {
                    parens--;
                }
                break;
            case '\t':
            case ' ':
                if (!parens) {
                    // Add the new part if it's not an empty string
                    if (i > partStart) {
                        parts.push(value.substring(partStart, i));
                    }
                    partStart = i + 1;
                }
                break;
        }
    }
    // Add the last part
    if (partStart < value.length) {
        parts.push(value.substring(partStart));
    }
    return parts;
}
exports.tokenizeWithParentheses = tokenizeWithParentheses;
//# sourceMappingURL=tokenizeWithParentheses.js.map

/***/ }),

/***/ 299:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kebabRules = void 0;
var rules = {};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
        rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}
exports.kebabRules = kebabRules;
//# sourceMappingURL=kebabRules.js.map

/***/ }),

/***/ 8077:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prefixRules = void 0;
var getVendorSettings_1 = __webpack_require__(5591);
var autoPrefixNames = {
    'user-select': 1,
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings_1.getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
exports.prefixRules = prefixRules;
//# sourceMappingURL=prefixRules.js.map

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.provideUnits = void 0;
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom',
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var isNonPixelProp = NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
        var isVariableOrPrefixed = name.indexOf('--') > -1;
        var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
        rulePairs[index + 1] = "" + value + unit;
    }
}
exports.provideUnits = provideUnits;
//# sourceMappingURL=provideUnits.js.map

/***/ }),

/***/ 6908:
/***/ ((__unused_webpack_module, exports) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rtlifyRules = void 0;
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize',
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
exports.rtlifyRules = rtlifyRules;
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
//# sourceMappingURL=rtlifyRules.js.map

/***/ }),

/***/ 3890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.
var set_version_1 = __webpack_require__(4984);
set_version_1.setVersion('@fluentui/merge-styles', '8.5.2');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 6667:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(4738), exports);
//# sourceMappingURL=ProgressIndicator.js.map

/***/ }),

/***/ 6891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTheme = exports.getScreenSelector = exports.getPlaceholderStyles = exports.getInputFocusStyle = exports.getIconClassName = exports.getIcon = exports.getHighContrastNoAdjustStyle = exports.getGlobalClassNames = exports.getFocusStyle = exports.getFocusOutlineStyle = exports.getFadedOverflowStyle = exports.getEdgeChromiumNoHighContrastAdjustSelector = exports.fontFace = exports.focusClear = exports.createFontStyles = exports.concatStyleSetsWithProps = exports.concatStyleSets = exports.buildClassMap = exports.ZIndexes = exports.ThemeSettingName = exports.Stylesheet = exports.ScreenWidthMinXXXLarge = exports.ScreenWidthMinXXLarge = exports.ScreenWidthMinXLarge = exports.ScreenWidthMinUhfMobile = exports.ScreenWidthMinSmall = exports.ScreenWidthMinMedium = exports.ScreenWidthMinLarge = exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMaxXLarge = exports.ScreenWidthMaxSmall = exports.ScreenWidthMaxMedium = exports.ScreenWidthMaxLarge = exports.PulsingBeaconAnimationStyles = exports.InjectionMode = exports.IconFontSizes = exports.HighContrastSelectorWhite = exports.HighContrastSelectorBlack = exports.HighContrastSelector = exports.FontWeights = exports.FontSizes = exports.FontClassNames = exports.EdgeChromiumHighContrastSelector = exports.DefaultPalette = exports.DefaultFontStyles = exports.DefaultEffects = exports.ColorClassNames = exports.AnimationVariables = exports.AnimationStyles = exports.AnimationClassNames = void 0;
exports.registerDefaultFontFaces = exports.createTheme = exports.unregisterIcons = exports.setIconOptions = exports.removeOnThemeChangeCallback = exports.registerOnThemeChangeCallback = exports.registerIcons = exports.registerIconAlias = exports.normalize = exports.noWrap = exports.mergeStyles = exports.mergeStyleSets = exports.loadTheme = exports.keyframes = exports.hiddenContentStyle = exports.getThemedContext = void 0;
__webpack_require__(733);
var style_utilities_1 = __webpack_require__(9840);
Object.defineProperty(exports, "AnimationClassNames", ({ enumerable: true, get: function () { return style_utilities_1.AnimationClassNames; } }));
Object.defineProperty(exports, "AnimationStyles", ({ enumerable: true, get: function () { return style_utilities_1.AnimationStyles; } }));
Object.defineProperty(exports, "AnimationVariables", ({ enumerable: true, get: function () { return style_utilities_1.AnimationVariables; } }));
Object.defineProperty(exports, "ColorClassNames", ({ enumerable: true, get: function () { return style_utilities_1.ColorClassNames; } }));
Object.defineProperty(exports, "DefaultEffects", ({ enumerable: true, get: function () { return style_utilities_1.DefaultEffects; } }));
Object.defineProperty(exports, "DefaultFontStyles", ({ enumerable: true, get: function () { return style_utilities_1.DefaultFontStyles; } }));
Object.defineProperty(exports, "DefaultPalette", ({ enumerable: true, get: function () { return style_utilities_1.DefaultPalette; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "EdgeChromiumHighContrastSelector", ({ enumerable: true, get: function () { return style_utilities_1.EdgeChromiumHighContrastSelector; } }));
Object.defineProperty(exports, "FontClassNames", ({ enumerable: true, get: function () { return style_utilities_1.FontClassNames; } }));
Object.defineProperty(exports, "FontSizes", ({ enumerable: true, get: function () { return style_utilities_1.FontSizes; } }));
Object.defineProperty(exports, "FontWeights", ({ enumerable: true, get: function () { return style_utilities_1.FontWeights; } }));
Object.defineProperty(exports, "HighContrastSelector", ({ enumerable: true, get: function () { return style_utilities_1.HighContrastSelector; } }));
Object.defineProperty(exports, "HighContrastSelectorBlack", ({ enumerable: true, get: function () { return style_utilities_1.HighContrastSelectorBlack; } }));
Object.defineProperty(exports, "HighContrastSelectorWhite", ({ enumerable: true, get: function () { return style_utilities_1.HighContrastSelectorWhite; } }));
Object.defineProperty(exports, "IconFontSizes", ({ enumerable: true, get: function () { return style_utilities_1.IconFontSizes; } }));
Object.defineProperty(exports, "InjectionMode", ({ enumerable: true, get: function () { return style_utilities_1.InjectionMode; } }));
Object.defineProperty(exports, "PulsingBeaconAnimationStyles", ({ enumerable: true, get: function () { return style_utilities_1.PulsingBeaconAnimationStyles; } }));
Object.defineProperty(exports, "ScreenWidthMaxLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMaxLarge; } }));
Object.defineProperty(exports, "ScreenWidthMaxMedium", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMaxMedium; } }));
Object.defineProperty(exports, "ScreenWidthMaxSmall", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMaxSmall; } }));
Object.defineProperty(exports, "ScreenWidthMaxXLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMaxXLarge; } }));
Object.defineProperty(exports, "ScreenWidthMaxXXLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMaxXXLarge; } }));
Object.defineProperty(exports, "ScreenWidthMinLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinLarge; } }));
Object.defineProperty(exports, "ScreenWidthMinMedium", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinMedium; } }));
Object.defineProperty(exports, "ScreenWidthMinSmall", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinSmall; } }));
Object.defineProperty(exports, "ScreenWidthMinUhfMobile", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinUhfMobile; } }));
Object.defineProperty(exports, "ScreenWidthMinXLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinXLarge; } }));
Object.defineProperty(exports, "ScreenWidthMinXXLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinXXLarge; } }));
Object.defineProperty(exports, "ScreenWidthMinXXXLarge", ({ enumerable: true, get: function () { return style_utilities_1.ScreenWidthMinXXXLarge; } }));
Object.defineProperty(exports, "Stylesheet", ({ enumerable: true, get: function () { return style_utilities_1.Stylesheet; } }));
Object.defineProperty(exports, "ThemeSettingName", ({ enumerable: true, get: function () { return style_utilities_1.ThemeSettingName; } }));
Object.defineProperty(exports, "ZIndexes", ({ enumerable: true, get: function () { return style_utilities_1.ZIndexes; } }));
Object.defineProperty(exports, "buildClassMap", ({ enumerable: true, get: function () { return style_utilities_1.buildClassMap; } }));
Object.defineProperty(exports, "concatStyleSets", ({ enumerable: true, get: function () { return style_utilities_1.concatStyleSets; } }));
Object.defineProperty(exports, "concatStyleSetsWithProps", ({ enumerable: true, get: function () { return style_utilities_1.concatStyleSetsWithProps; } }));
Object.defineProperty(exports, "createFontStyles", ({ enumerable: true, get: function () { return style_utilities_1.createFontStyles; } }));
Object.defineProperty(exports, "focusClear", ({ enumerable: true, get: function () { return style_utilities_1.focusClear; } }));
Object.defineProperty(exports, "fontFace", ({ enumerable: true, get: function () { return style_utilities_1.fontFace; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "getEdgeChromiumNoHighContrastAdjustSelector", ({ enumerable: true, get: function () { return style_utilities_1.getEdgeChromiumNoHighContrastAdjustSelector; } }));
Object.defineProperty(exports, "getFadedOverflowStyle", ({ enumerable: true, get: function () { return style_utilities_1.getFadedOverflowStyle; } }));
Object.defineProperty(exports, "getFocusOutlineStyle", ({ enumerable: true, get: function () { return style_utilities_1.getFocusOutlineStyle; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "getFocusStyle", ({ enumerable: true, get: function () { return style_utilities_1.getFocusStyle; } }));
Object.defineProperty(exports, "getGlobalClassNames", ({ enumerable: true, get: function () { return style_utilities_1.getGlobalClassNames; } }));
Object.defineProperty(exports, "getHighContrastNoAdjustStyle", ({ enumerable: true, get: function () { return style_utilities_1.getHighContrastNoAdjustStyle; } }));
Object.defineProperty(exports, "getIcon", ({ enumerable: true, get: function () { return style_utilities_1.getIcon; } }));
Object.defineProperty(exports, "getIconClassName", ({ enumerable: true, get: function () { return style_utilities_1.getIconClassName; } }));
Object.defineProperty(exports, "getInputFocusStyle", ({ enumerable: true, get: function () { return style_utilities_1.getInputFocusStyle; } }));
Object.defineProperty(exports, "getPlaceholderStyles", ({ enumerable: true, get: function () { return style_utilities_1.getPlaceholderStyles; } }));
Object.defineProperty(exports, "getScreenSelector", ({ enumerable: true, get: function () { return style_utilities_1.getScreenSelector; } }));
Object.defineProperty(exports, "getTheme", ({ enumerable: true, get: function () { return style_utilities_1.getTheme; } }));
Object.defineProperty(exports, "getThemedContext", ({ enumerable: true, get: function () { return style_utilities_1.getThemedContext; } }));
Object.defineProperty(exports, "hiddenContentStyle", ({ enumerable: true, get: function () { return style_utilities_1.hiddenContentStyle; } }));
Object.defineProperty(exports, "keyframes", ({ enumerable: true, get: function () { return style_utilities_1.keyframes; } }));
Object.defineProperty(exports, "loadTheme", ({ enumerable: true, get: function () { return style_utilities_1.loadTheme; } }));
Object.defineProperty(exports, "mergeStyleSets", ({ enumerable: true, get: function () { return style_utilities_1.mergeStyleSets; } }));
Object.defineProperty(exports, "mergeStyles", ({ enumerable: true, get: function () { return style_utilities_1.mergeStyles; } }));
Object.defineProperty(exports, "noWrap", ({ enumerable: true, get: function () { return style_utilities_1.noWrap; } }));
Object.defineProperty(exports, "normalize", ({ enumerable: true, get: function () { return style_utilities_1.normalize; } }));
Object.defineProperty(exports, "registerIconAlias", ({ enumerable: true, get: function () { return style_utilities_1.registerIconAlias; } }));
Object.defineProperty(exports, "registerIcons", ({ enumerable: true, get: function () { return style_utilities_1.registerIcons; } }));
Object.defineProperty(exports, "registerOnThemeChangeCallback", ({ enumerable: true, get: function () { return style_utilities_1.registerOnThemeChangeCallback; } }));
Object.defineProperty(exports, "removeOnThemeChangeCallback", ({ enumerable: true, get: function () { return style_utilities_1.removeOnThemeChangeCallback; } }));
Object.defineProperty(exports, "setIconOptions", ({ enumerable: true, get: function () { return style_utilities_1.setIconOptions; } }));
Object.defineProperty(exports, "unregisterIcons", ({ enumerable: true, get: function () { return style_utilities_1.unregisterIcons; } }));
var theme_1 = __webpack_require__(4337);
Object.defineProperty(exports, "createTheme", ({ enumerable: true, get: function () { return theme_1.createTheme; } }));
Object.defineProperty(exports, "registerDefaultFontFaces", ({ enumerable: true, get: function () { return theme_1.registerDefaultFontFaces; } }));
//# sourceMappingURL=Styling.js.map

/***/ }),

/***/ 6175:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementContainsAttribute = exports.elementContains = exports.doesElementContainFocus = exports.divProperties = exports.disableBodyScroll = exports.customizable = exports.css = exports.createMergedRef = exports.createMemoizer = exports.createArray = exports.composeRenderFunction = exports.composeComponentAs = exports.colProperties = exports.colGroupProperties = exports.classNamesFunction = exports.calculatePrecision = exports.buttonProperties = exports.baseElementProperties = exports.baseElementEvents = exports.audioProperties = exports.assign = exports.assertNever = exports.asAsync = exports.arraysEqual = exports.appendFunction = exports.anchorProperties = exports.allowScrollOnElement = exports.allowOverscrollOnElement = exports.addElementAtIndex = exports.addDirectionalKeyCode = exports.SelectionMode = exports.SelectionDirection = exports.Selection = exports.SELECTION_CHANGE = exports.Rectangle = exports.KeyCodes = exports.IsFocusVisibleClassName = exports.GlobalSettings = exports.FocusRects = exports.FabricPerformance = exports.EventGroup = exports.DelayedRender = exports.DATA_PORTAL_ATTRIBUTE = exports.DATA_IS_SCROLLABLE_ATTRIBUTE = exports.CustomizerContext = exports.Customizer = exports.Customizations = exports.BaseComponent = exports.AutoScroll = exports.Async = void 0;
exports.initializeFocusRects = exports.initializeComponentRef = exports.imgProperties = exports.imageProperties = exports.iframeProperties = exports.htmlElementProperties = exports.hoistStatics = exports.hoistMethods = exports.hasVerticalOverflow = exports.hasOverflow = exports.hasHorizontalOverflow = exports.getWindow = exports.getVirtualParent = exports.getScrollbarWidth = exports.getResourceUrl = exports.getRect = exports.getRTLSafeKeyCode = exports.getRTL = exports.getPropsWithDefaults = exports.getPreviousElement = exports.getParent = exports.getNextElement = exports.getNativeProps = exports.getNativeElementProps = exports.getLastTabbable = exports.getLastFocusable = exports.getLanguage = exports.getInitials = exports.getId = exports.getFocusableByIndexPath = exports.getFirstVisibleElementFromSelector = exports.getFirstTabbable = exports.getFirstFocusable = exports.getElementIndexPath = exports.getDocument = exports.getDistanceBetweenPoints = exports.getChildren = exports.format = exports.formProperties = exports.focusFirstChild = exports.focusAsync = exports.flatten = exports.fitContentToBounds = exports.findScrollableParent = exports.findIndex = exports.findElementRecursive = exports.find = exports.filteredAssign = exports.extendComponent = exports.enableBodyScroll = void 0;
exports.shouldWrapFocus = exports.shallowCompare = exports.setWarningCallback = exports.setVirtualParent = exports.setSSR = exports.setRTL = exports.setPortalAttribute = exports.setMemoizeWeakMap = exports.setLanguage = exports.setFocusVisibility = exports.setBaseUrl = exports.selectProperties = exports.safeSetTimeout = exports.safeRequestAnimationFrame = exports.resetMemoizations = exports.resetIds = exports.resetControlledWarnings = exports.replaceElement = exports.removeIndex = exports.raiseClick = exports.precisionRound = exports.portalContainsElement = exports.optionProperties = exports.on = exports.omit = exports.olProperties = exports.nullRender = exports.modalize = exports.mergeSettings = exports.mergeScopedSettings = exports.mergeCustomizations = exports.mergeAriaAttributeValues = exports.merge = exports.memoizeFunction = exports.memoize = exports.mapEnumByName = exports.liProperties = exports.labelProperties = exports.isVirtualElement = exports.isMac = exports.isIOS = exports.isIE11 = exports.isElementVisibleAndNotHidden = exports.isElementVisible = exports.isElementTabbable = exports.isElementFocusZone = exports.isElementFocusSubZone = exports.isDirectionalKeyCode = exports.isControlled = exports.inputProperties = void 0;
exports.warnMutuallyExclusive = exports.warnDeprecations = exports.warnControlledUsage = exports.warnConditionallyRequiredProps = exports.warn = exports.videoProperties = exports.values = exports.useFocusRects = exports.useCustomizationSettings = exports.unhoistMethods = exports.trProperties = exports.toMatrix = exports.thProperties = exports.textAreaProperties = exports.tdProperties = exports.tableProperties = exports.styled = void 0;
__webpack_require__(733);
var utilities_1 = __webpack_require__(254);
Object.defineProperty(exports, "Async", ({ enumerable: true, get: function () { return utilities_1.Async; } }));
Object.defineProperty(exports, "AutoScroll", ({ enumerable: true, get: function () { return utilities_1.AutoScroll; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "BaseComponent", ({ enumerable: true, get: function () { return utilities_1.BaseComponent; } }));
Object.defineProperty(exports, "Customizations", ({ enumerable: true, get: function () { return utilities_1.Customizations; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "Customizer", ({ enumerable: true, get: function () { return utilities_1.Customizer; } }));
Object.defineProperty(exports, "CustomizerContext", ({ enumerable: true, get: function () { return utilities_1.CustomizerContext; } }));
Object.defineProperty(exports, "DATA_IS_SCROLLABLE_ATTRIBUTE", ({ enumerable: true, get: function () { return utilities_1.DATA_IS_SCROLLABLE_ATTRIBUTE; } }));
Object.defineProperty(exports, "DATA_PORTAL_ATTRIBUTE", ({ enumerable: true, get: function () { return utilities_1.DATA_PORTAL_ATTRIBUTE; } }));
Object.defineProperty(exports, "DelayedRender", ({ enumerable: true, get: function () { return utilities_1.DelayedRender; } }));
Object.defineProperty(exports, "EventGroup", ({ enumerable: true, get: function () { return utilities_1.EventGroup; } }));
Object.defineProperty(exports, "FabricPerformance", ({ enumerable: true, get: function () { return utilities_1.FabricPerformance; } }));
Object.defineProperty(exports, "FocusRects", ({ enumerable: true, get: function () { return utilities_1.FocusRects; } }));
Object.defineProperty(exports, "GlobalSettings", ({ enumerable: true, get: function () { return utilities_1.GlobalSettings; } }));
Object.defineProperty(exports, "IsFocusVisibleClassName", ({ enumerable: true, get: function () { return utilities_1.IsFocusVisibleClassName; } }));
Object.defineProperty(exports, "KeyCodes", ({ enumerable: true, get: function () { return utilities_1.KeyCodes; } }));
Object.defineProperty(exports, "Rectangle", ({ enumerable: true, get: function () { return utilities_1.Rectangle; } }));
Object.defineProperty(exports, "SELECTION_CHANGE", ({ enumerable: true, get: function () { return utilities_1.SELECTION_CHANGE; } }));
Object.defineProperty(exports, "Selection", ({ enumerable: true, get: function () { return utilities_1.Selection; } }));
Object.defineProperty(exports, "SelectionDirection", ({ enumerable: true, get: function () { return utilities_1.SelectionDirection; } }));
Object.defineProperty(exports, "SelectionMode", ({ enumerable: true, get: function () { return utilities_1.SelectionMode; } }));
Object.defineProperty(exports, "addDirectionalKeyCode", ({ enumerable: true, get: function () { return utilities_1.addDirectionalKeyCode; } }));
Object.defineProperty(exports, "addElementAtIndex", ({ enumerable: true, get: function () { return utilities_1.addElementAtIndex; } }));
Object.defineProperty(exports, "allowOverscrollOnElement", ({ enumerable: true, get: function () { return utilities_1.allowOverscrollOnElement; } }));
Object.defineProperty(exports, "allowScrollOnElement", ({ enumerable: true, get: function () { return utilities_1.allowScrollOnElement; } }));
Object.defineProperty(exports, "anchorProperties", ({ enumerable: true, get: function () { return utilities_1.anchorProperties; } }));
Object.defineProperty(exports, "appendFunction", ({ enumerable: true, get: function () { return utilities_1.appendFunction; } }));
Object.defineProperty(exports, "arraysEqual", ({ enumerable: true, get: function () { return utilities_1.arraysEqual; } }));
Object.defineProperty(exports, "asAsync", ({ enumerable: true, get: function () { return utilities_1.asAsync; } }));
Object.defineProperty(exports, "assertNever", ({ enumerable: true, get: function () { return utilities_1.assertNever; } }));
Object.defineProperty(exports, "assign", ({ enumerable: true, get: function () { return utilities_1.assign; } }));
Object.defineProperty(exports, "audioProperties", ({ enumerable: true, get: function () { return utilities_1.audioProperties; } }));
Object.defineProperty(exports, "baseElementEvents", ({ enumerable: true, get: function () { return utilities_1.baseElementEvents; } }));
Object.defineProperty(exports, "baseElementProperties", ({ enumerable: true, get: function () { return utilities_1.baseElementProperties; } }));
Object.defineProperty(exports, "buttonProperties", ({ enumerable: true, get: function () { return utilities_1.buttonProperties; } }));
Object.defineProperty(exports, "calculatePrecision", ({ enumerable: true, get: function () { return utilities_1.calculatePrecision; } }));
Object.defineProperty(exports, "classNamesFunction", ({ enumerable: true, get: function () { return utilities_1.classNamesFunction; } }));
Object.defineProperty(exports, "colGroupProperties", ({ enumerable: true, get: function () { return utilities_1.colGroupProperties; } }));
Object.defineProperty(exports, "colProperties", ({ enumerable: true, get: function () { return utilities_1.colProperties; } }));
Object.defineProperty(exports, "composeComponentAs", ({ enumerable: true, get: function () { return utilities_1.composeComponentAs; } }));
Object.defineProperty(exports, "composeRenderFunction", ({ enumerable: true, get: function () { return utilities_1.composeRenderFunction; } }));
Object.defineProperty(exports, "createArray", ({ enumerable: true, get: function () { return utilities_1.createArray; } }));
Object.defineProperty(exports, "createMemoizer", ({ enumerable: true, get: function () { return utilities_1.createMemoizer; } }));
Object.defineProperty(exports, "createMergedRef", ({ enumerable: true, get: function () { return utilities_1.createMergedRef; } }));
Object.defineProperty(exports, "css", ({ enumerable: true, get: function () { return utilities_1.css; } }));
Object.defineProperty(exports, "customizable", ({ enumerable: true, get: function () { return utilities_1.customizable; } }));
Object.defineProperty(exports, "disableBodyScroll", ({ enumerable: true, get: function () { return utilities_1.disableBodyScroll; } }));
Object.defineProperty(exports, "divProperties", ({ enumerable: true, get: function () { return utilities_1.divProperties; } }));
Object.defineProperty(exports, "doesElementContainFocus", ({ enumerable: true, get: function () { return utilities_1.doesElementContainFocus; } }));
Object.defineProperty(exports, "elementContains", ({ enumerable: true, get: function () { return utilities_1.elementContains; } }));
Object.defineProperty(exports, "elementContainsAttribute", ({ enumerable: true, get: function () { return utilities_1.elementContainsAttribute; } }));
Object.defineProperty(exports, "enableBodyScroll", ({ enumerable: true, get: function () { return utilities_1.enableBodyScroll; } }));
Object.defineProperty(exports, "extendComponent", ({ enumerable: true, get: function () { return utilities_1.extendComponent; } }));
Object.defineProperty(exports, "filteredAssign", ({ enumerable: true, get: function () { return utilities_1.filteredAssign; } }));
Object.defineProperty(exports, "find", ({ enumerable: true, get: function () { return utilities_1.find; } }));
Object.defineProperty(exports, "findElementRecursive", ({ enumerable: true, get: function () { return utilities_1.findElementRecursive; } }));
Object.defineProperty(exports, "findIndex", ({ enumerable: true, get: function () { return utilities_1.findIndex; } }));
Object.defineProperty(exports, "findScrollableParent", ({ enumerable: true, get: function () { return utilities_1.findScrollableParent; } }));
Object.defineProperty(exports, "fitContentToBounds", ({ enumerable: true, get: function () { return utilities_1.fitContentToBounds; } }));
Object.defineProperty(exports, "flatten", ({ enumerable: true, get: function () { return utilities_1.flatten; } }));
Object.defineProperty(exports, "focusAsync", ({ enumerable: true, get: function () { return utilities_1.focusAsync; } }));
Object.defineProperty(exports, "focusFirstChild", ({ enumerable: true, get: function () { return utilities_1.focusFirstChild; } }));
Object.defineProperty(exports, "formProperties", ({ enumerable: true, get: function () { return utilities_1.formProperties; } }));
Object.defineProperty(exports, "format", ({ enumerable: true, get: function () { return utilities_1.format; } }));
Object.defineProperty(exports, "getChildren", ({ enumerable: true, get: function () { return utilities_1.getChildren; } }));
Object.defineProperty(exports, "getDistanceBetweenPoints", ({ enumerable: true, get: function () { return utilities_1.getDistanceBetweenPoints; } }));
Object.defineProperty(exports, "getDocument", ({ enumerable: true, get: function () { return utilities_1.getDocument; } }));
Object.defineProperty(exports, "getElementIndexPath", ({ enumerable: true, get: function () { return utilities_1.getElementIndexPath; } }));
Object.defineProperty(exports, "getFirstFocusable", ({ enumerable: true, get: function () { return utilities_1.getFirstFocusable; } }));
Object.defineProperty(exports, "getFirstTabbable", ({ enumerable: true, get: function () { return utilities_1.getFirstTabbable; } }));
Object.defineProperty(exports, "getFirstVisibleElementFromSelector", ({ enumerable: true, get: function () { return utilities_1.getFirstVisibleElementFromSelector; } }));
Object.defineProperty(exports, "getFocusableByIndexPath", ({ enumerable: true, get: function () { return utilities_1.getFocusableByIndexPath; } }));
Object.defineProperty(exports, "getId", ({ enumerable: true, get: function () { return utilities_1.getId; } }));
Object.defineProperty(exports, "getInitials", ({ enumerable: true, get: function () { return utilities_1.getInitials; } }));
Object.defineProperty(exports, "getLanguage", ({ enumerable: true, get: function () { return utilities_1.getLanguage; } }));
Object.defineProperty(exports, "getLastFocusable", ({ enumerable: true, get: function () { return utilities_1.getLastFocusable; } }));
Object.defineProperty(exports, "getLastTabbable", ({ enumerable: true, get: function () { return utilities_1.getLastTabbable; } }));
Object.defineProperty(exports, "getNativeElementProps", ({ enumerable: true, get: function () { return utilities_1.getNativeElementProps; } }));
Object.defineProperty(exports, "getNativeProps", ({ enumerable: true, get: function () { return utilities_1.getNativeProps; } }));
Object.defineProperty(exports, "getNextElement", ({ enumerable: true, get: function () { return utilities_1.getNextElement; } }));
Object.defineProperty(exports, "getParent", ({ enumerable: true, get: function () { return utilities_1.getParent; } }));
Object.defineProperty(exports, "getPreviousElement", ({ enumerable: true, get: function () { return utilities_1.getPreviousElement; } }));
Object.defineProperty(exports, "getPropsWithDefaults", ({ enumerable: true, get: function () { return utilities_1.getPropsWithDefaults; } }));
Object.defineProperty(exports, "getRTL", ({ enumerable: true, get: function () { return utilities_1.getRTL; } }));
Object.defineProperty(exports, "getRTLSafeKeyCode", ({ enumerable: true, get: function () { return utilities_1.getRTLSafeKeyCode; } }));
Object.defineProperty(exports, "getRect", ({ enumerable: true, get: function () { return utilities_1.getRect; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "getResourceUrl", ({ enumerable: true, get: function () { return utilities_1.getResourceUrl; } }));
Object.defineProperty(exports, "getScrollbarWidth", ({ enumerable: true, get: function () { return utilities_1.getScrollbarWidth; } }));
Object.defineProperty(exports, "getVirtualParent", ({ enumerable: true, get: function () { return utilities_1.getVirtualParent; } }));
Object.defineProperty(exports, "getWindow", ({ enumerable: true, get: function () { return utilities_1.getWindow; } }));
Object.defineProperty(exports, "hasHorizontalOverflow", ({ enumerable: true, get: function () { return utilities_1.hasHorizontalOverflow; } }));
Object.defineProperty(exports, "hasOverflow", ({ enumerable: true, get: function () { return utilities_1.hasOverflow; } }));
Object.defineProperty(exports, "hasVerticalOverflow", ({ enumerable: true, get: function () { return utilities_1.hasVerticalOverflow; } }));
Object.defineProperty(exports, "hoistMethods", ({ enumerable: true, get: function () { return utilities_1.hoistMethods; } }));
Object.defineProperty(exports, "hoistStatics", ({ enumerable: true, get: function () { return utilities_1.hoistStatics; } }));
Object.defineProperty(exports, "htmlElementProperties", ({ enumerable: true, get: function () { return utilities_1.htmlElementProperties; } }));
Object.defineProperty(exports, "iframeProperties", ({ enumerable: true, get: function () { return utilities_1.iframeProperties; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "imageProperties", ({ enumerable: true, get: function () { return utilities_1.imageProperties; } }));
Object.defineProperty(exports, "imgProperties", ({ enumerable: true, get: function () { return utilities_1.imgProperties; } }));
Object.defineProperty(exports, "initializeComponentRef", ({ enumerable: true, get: function () { return utilities_1.initializeComponentRef; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "initializeFocusRects", ({ enumerable: true, get: function () { return utilities_1.initializeFocusRects; } }));
Object.defineProperty(exports, "inputProperties", ({ enumerable: true, get: function () { return utilities_1.inputProperties; } }));
Object.defineProperty(exports, "isControlled", ({ enumerable: true, get: function () { return utilities_1.isControlled; } }));
Object.defineProperty(exports, "isDirectionalKeyCode", ({ enumerable: true, get: function () { return utilities_1.isDirectionalKeyCode; } }));
Object.defineProperty(exports, "isElementFocusSubZone", ({ enumerable: true, get: function () { return utilities_1.isElementFocusSubZone; } }));
Object.defineProperty(exports, "isElementFocusZone", ({ enumerable: true, get: function () { return utilities_1.isElementFocusZone; } }));
Object.defineProperty(exports, "isElementTabbable", ({ enumerable: true, get: function () { return utilities_1.isElementTabbable; } }));
Object.defineProperty(exports, "isElementVisible", ({ enumerable: true, get: function () { return utilities_1.isElementVisible; } }));
Object.defineProperty(exports, "isElementVisibleAndNotHidden", ({ enumerable: true, get: function () { return utilities_1.isElementVisibleAndNotHidden; } }));
Object.defineProperty(exports, "isIE11", ({ enumerable: true, get: function () { return utilities_1.isIE11; } }));
Object.defineProperty(exports, "isIOS", ({ enumerable: true, get: function () { return utilities_1.isIOS; } }));
Object.defineProperty(exports, "isMac", ({ enumerable: true, get: function () { return utilities_1.isMac; } }));
Object.defineProperty(exports, "isVirtualElement", ({ enumerable: true, get: function () { return utilities_1.isVirtualElement; } }));
Object.defineProperty(exports, "labelProperties", ({ enumerable: true, get: function () { return utilities_1.labelProperties; } }));
Object.defineProperty(exports, "liProperties", ({ enumerable: true, get: function () { return utilities_1.liProperties; } }));
Object.defineProperty(exports, "mapEnumByName", ({ enumerable: true, get: function () { return utilities_1.mapEnumByName; } }));
Object.defineProperty(exports, "memoize", ({ enumerable: true, get: function () { return utilities_1.memoize; } }));
Object.defineProperty(exports, "memoizeFunction", ({ enumerable: true, get: function () { return utilities_1.memoizeFunction; } }));
Object.defineProperty(exports, "merge", ({ enumerable: true, get: function () { return utilities_1.merge; } }));
Object.defineProperty(exports, "mergeAriaAttributeValues", ({ enumerable: true, get: function () { return utilities_1.mergeAriaAttributeValues; } }));
Object.defineProperty(exports, "mergeCustomizations", ({ enumerable: true, get: function () { return utilities_1.mergeCustomizations; } }));
Object.defineProperty(exports, "mergeScopedSettings", ({ enumerable: true, get: function () { return utilities_1.mergeScopedSettings; } }));
Object.defineProperty(exports, "mergeSettings", ({ enumerable: true, get: function () { return utilities_1.mergeSettings; } }));
Object.defineProperty(exports, "modalize", ({ enumerable: true, get: function () { return utilities_1.modalize; } }));
Object.defineProperty(exports, "nullRender", ({ enumerable: true, get: function () { return utilities_1.nullRender; } }));
Object.defineProperty(exports, "olProperties", ({ enumerable: true, get: function () { return utilities_1.olProperties; } }));
Object.defineProperty(exports, "omit", ({ enumerable: true, get: function () { return utilities_1.omit; } }));
Object.defineProperty(exports, "on", ({ enumerable: true, get: function () { return utilities_1.on; } }));
Object.defineProperty(exports, "optionProperties", ({ enumerable: true, get: function () { return utilities_1.optionProperties; } }));
Object.defineProperty(exports, "portalContainsElement", ({ enumerable: true, get: function () { return utilities_1.portalContainsElement; } }));
Object.defineProperty(exports, "precisionRound", ({ enumerable: true, get: function () { return utilities_1.precisionRound; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "raiseClick", ({ enumerable: true, get: function () { return utilities_1.raiseClick; } }));
Object.defineProperty(exports, "removeIndex", ({ enumerable: true, get: function () { return utilities_1.removeIndex; } }));
Object.defineProperty(exports, "replaceElement", ({ enumerable: true, get: function () { return utilities_1.replaceElement; } }));
Object.defineProperty(exports, "resetControlledWarnings", ({ enumerable: true, get: function () { return utilities_1.resetControlledWarnings; } }));
Object.defineProperty(exports, "resetIds", ({ enumerable: true, get: function () { return utilities_1.resetIds; } }));
Object.defineProperty(exports, "resetMemoizations", ({ enumerable: true, get: function () { return utilities_1.resetMemoizations; } }));
Object.defineProperty(exports, "safeRequestAnimationFrame", ({ enumerable: true, get: function () { return utilities_1.safeRequestAnimationFrame; } }));
Object.defineProperty(exports, "safeSetTimeout", ({ enumerable: true, get: function () { return utilities_1.safeSetTimeout; } }));
Object.defineProperty(exports, "selectProperties", ({ enumerable: true, get: function () { return utilities_1.selectProperties; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "setBaseUrl", ({ enumerable: true, get: function () { return utilities_1.setBaseUrl; } }));
Object.defineProperty(exports, "setFocusVisibility", ({ enumerable: true, get: function () { return utilities_1.setFocusVisibility; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "setLanguage", ({ enumerable: true, get: function () { return utilities_1.setLanguage; } }));
Object.defineProperty(exports, "setMemoizeWeakMap", ({ enumerable: true, get: function () { return utilities_1.setMemoizeWeakMap; } }));
Object.defineProperty(exports, "setPortalAttribute", ({ enumerable: true, get: function () { return utilities_1.setPortalAttribute; } }));
Object.defineProperty(exports, "setRTL", ({ enumerable: true, get: function () { return utilities_1.setRTL; } }));
Object.defineProperty(exports, "setSSR", ({ enumerable: true, get: function () { return utilities_1.setSSR; } }));
Object.defineProperty(exports, "setVirtualParent", ({ enumerable: true, get: function () { return utilities_1.setVirtualParent; } }));
Object.defineProperty(exports, "setWarningCallback", ({ enumerable: true, get: function () { return utilities_1.setWarningCallback; } }));
Object.defineProperty(exports, "shallowCompare", ({ enumerable: true, get: function () { return utilities_1.shallowCompare; } }));
Object.defineProperty(exports, "shouldWrapFocus", ({ enumerable: true, get: function () { return utilities_1.shouldWrapFocus; } }));
Object.defineProperty(exports, "styled", ({ enumerable: true, get: function () { return utilities_1.styled; } }));
Object.defineProperty(exports, "tableProperties", ({ enumerable: true, get: function () { return utilities_1.tableProperties; } }));
Object.defineProperty(exports, "tdProperties", ({ enumerable: true, get: function () { return utilities_1.tdProperties; } }));
Object.defineProperty(exports, "textAreaProperties", ({ enumerable: true, get: function () { return utilities_1.textAreaProperties; } }));
Object.defineProperty(exports, "thProperties", ({ enumerable: true, get: function () { return utilities_1.thProperties; } }));
Object.defineProperty(exports, "toMatrix", ({ enumerable: true, get: function () { return utilities_1.toMatrix; } }));
Object.defineProperty(exports, "trProperties", ({ enumerable: true, get: function () { return utilities_1.trProperties; } }));
Object.defineProperty(exports, "unhoistMethods", ({ enumerable: true, get: function () { return utilities_1.unhoistMethods; } }));
Object.defineProperty(exports, "useCustomizationSettings", ({ enumerable: true, get: function () { return utilities_1.useCustomizationSettings; } }));
Object.defineProperty(exports, "useFocusRects", ({ enumerable: true, get: function () { return utilities_1.useFocusRects; } }));
Object.defineProperty(exports, "values", ({ enumerable: true, get: function () { return utilities_1.values; } }));
Object.defineProperty(exports, "videoProperties", ({ enumerable: true, get: function () { return utilities_1.videoProperties; } }));
Object.defineProperty(exports, "warn", ({ enumerable: true, get: function () { return utilities_1.warn; } }));
Object.defineProperty(exports, "warnConditionallyRequiredProps", ({ enumerable: true, get: function () { return utilities_1.warnConditionallyRequiredProps; } }));
Object.defineProperty(exports, "warnControlledUsage", ({ enumerable: true, get: function () { return utilities_1.warnControlledUsage; } }));
Object.defineProperty(exports, "warnDeprecations", ({ enumerable: true, get: function () { return utilities_1.warnDeprecations; } }));
Object.defineProperty(exports, "warnMutuallyExclusive", ({ enumerable: true, get: function () { return utilities_1.warnMutuallyExclusive; } }));
//# sourceMappingURL=Utilities.js.map

/***/ }),

/***/ 699:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressIndicatorBase = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var Utilities_1 = __webpack_require__(6175);
var getClassNames = Utilities_1.classNamesFunction();
// if the percentComplete is near 0, don't animate it.
// This prevents animations on reset to 0 scenarios
var ZERO_THRESHOLD = 0.01;
/**
 * ProgressIndicator with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
var ProgressIndicatorBase = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressIndicatorBase, _super);
    function ProgressIndicatorBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderProgress = function (props) {
            var _a = _this.props, ariaLabel = _a.ariaLabel, ariaValueText = _a.ariaValueText, barHeight = _a.barHeight, className = _a.className, description = _a.description, 
            // eslint-disable-next-line deprecation/deprecation
            _b = _a.label, 
            // eslint-disable-next-line deprecation/deprecation
            label = _b === void 0 ? _this.props.title : _b, styles = _a.styles, theme = _a.theme;
            var percentComplete = typeof _this.props.percentComplete === 'number'
                ? Math.min(100, Math.max(0, _this.props.percentComplete * 100))
                : undefined;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                barHeight: barHeight,
                indeterminate: percentComplete === undefined ? true : false,
            });
            var progressBarStyles = {
                width: percentComplete !== undefined ? percentComplete + '%' : undefined,
                transition: percentComplete !== undefined && percentComplete < ZERO_THRESHOLD ? 'none' : undefined,
            };
            var ariaValueMin = percentComplete !== undefined ? 0 : undefined;
            var ariaValueMax = percentComplete !== undefined ? 100 : undefined;
            var ariaValueNow = percentComplete !== undefined ? Math.floor(percentComplete) : undefined;
            return (React.createElement("div", { className: classNames.itemProgress },
                React.createElement("div", { className: classNames.progressTrack }),
                React.createElement("div", { className: classNames.progressBar, style: progressBarStyles, role: "progressbar", "aria-describedby": description ? _this._descriptionId : undefined, "aria-label": ariaLabel, "aria-labelledby": label ? _this._labelId : undefined, "aria-valuemin": ariaValueMin, "aria-valuemax": ariaValueMax, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText })));
        };
        var id = Utilities_1.getId('progress-indicator');
        _this._labelId = id + '-label';
        _this._descriptionId = id + '-description';
        return _this;
    }
    ProgressIndicatorBase.prototype.render = function () {
        var _a = this.props, barHeight = _a.barHeight, className = _a.className, 
        // eslint-disable-next-line deprecation/deprecation
        _b = _a.label, 
        // eslint-disable-next-line deprecation/deprecation
        label = _b === void 0 ? this.props.title : _b, // Fall back to deprecated value.
        description = _a.description, styles = _a.styles, theme = _a.theme, progressHidden = _a.progressHidden, _c = _a.onRenderProgress, onRenderProgress = _c === void 0 ? this._onRenderProgress : _c;
        var percentComplete = typeof this.props.percentComplete === 'number'
            ? Math.min(100, Math.max(0, this.props.percentComplete * 100))
            : undefined;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            barHeight: barHeight,
            indeterminate: percentComplete === undefined ? true : false,
        });
        return (React.createElement("div", { className: classNames.root },
            label ? (React.createElement("div", { id: this._labelId, className: classNames.itemName }, label)) : null,
            !progressHidden
                ? onRenderProgress(tslib_1.__assign(tslib_1.__assign({}, this.props), { percentComplete: percentComplete }), this._onRenderProgress)
                : null,
            description ? (React.createElement("div", { id: this._descriptionId, className: classNames.itemDescription }, description)) : null));
    };
    ProgressIndicatorBase.defaultProps = {
        label: '',
        description: '',
        width: 180,
    };
    return ProgressIndicatorBase;
}(React.Component));
exports.ProgressIndicatorBase = ProgressIndicatorBase;
//# sourceMappingURL=ProgressIndicator.base.js.map

/***/ }),

/***/ 4488:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressIndicator = void 0;
var Utilities_1 = __webpack_require__(6175);
var ProgressIndicator_base_1 = __webpack_require__(699);
var ProgressIndicator_styles_1 = __webpack_require__(7839);
/**
 * ProgressIndicator description
 */
exports.ProgressIndicator = Utilities_1.styled(ProgressIndicator_base_1.ProgressIndicatorBase, ProgressIndicator_styles_1.getStyles, undefined, { scope: 'ProgressIndicator' });
//# sourceMappingURL=ProgressIndicator.js.map

/***/ }),

/***/ 7839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStyles = void 0;
var tslib_1 = __webpack_require__(655);
var Styling_1 = __webpack_require__(6891);
var Utilities_1 = __webpack_require__(6175);
var GlobalClassNames = {
    root: 'ms-ProgressIndicator',
    itemName: 'ms-ProgressIndicator-itemName',
    itemDescription: 'ms-ProgressIndicator-itemDescription',
    itemProgress: 'ms-ProgressIndicator-itemProgress',
    progressTrack: 'ms-ProgressIndicator-progressTrack',
    progressBar: 'ms-ProgressIndicator-progressBar',
};
var IndeterminateProgress = Utilities_1.memoizeFunction(function () {
    return Styling_1.keyframes({
        '0%': {
            left: '-30%',
        },
        '100%': {
            left: '100%',
        },
    });
});
var IndeterminateProgressRTL = Utilities_1.memoizeFunction(function () {
    return Styling_1.keyframes({
        '100%': {
            right: '-30%',
        },
        '0%': {
            right: '100%',
        },
    });
});
var getStyles = function (props) {
    var _a, _b, _c;
    var isRTL = Utilities_1.getRTL(props.theme);
    var className = props.className, indeterminate = props.indeterminate, theme = props.theme, _d = props.barHeight, barHeight = _d === void 0 ? 2 : _d;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var marginBetweenText = 8;
    var textHeight = 18;
    var progressTrackColor = palette.neutralLight;
    return {
        root: [classNames.root, fonts.medium, className],
        itemName: [
            classNames.itemName,
            Styling_1.noWrap,
            {
                color: semanticColors.bodyText,
                paddingTop: marginBetweenText / 2,
                lineHeight: textHeight + 2,
            },
        ],
        itemDescription: [
            classNames.itemDescription,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.small.fontSize,
                lineHeight: textHeight,
            },
        ],
        itemProgress: [
            classNames.itemProgress,
            {
                position: 'relative',
                overflow: 'hidden',
                height: barHeight,
                padding: marginBetweenText + "px 0",
            },
        ],
        progressTrack: [
            classNames.progressTrack,
            {
                position: 'absolute',
                width: '100%',
                height: barHeight,
                backgroundColor: progressTrackColor,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        borderBottom: '1px solid WindowText',
                    },
                    _a),
            },
        ],
        progressBar: [
            {
                backgroundColor: palette.themePrimary,
                height: barHeight,
                position: 'absolute',
                transition: 'width .3s ease',
                width: 0,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = tslib_1.__assign({ backgroundColor: 'highlight' }, Styling_1.getHighContrastNoAdjustStyle()),
                    _b),
            },
            indeterminate
                ? {
                    position: 'absolute',
                    minWidth: '33%',
                    background: "linear-gradient(to right, " + progressTrackColor + " 0%, " +
                        (palette.themePrimary + " 50%, " + progressTrackColor + " 100%)"),
                    animation: (isRTL ? IndeterminateProgressRTL() : IndeterminateProgress()) + " 3s infinite",
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelector] = {
                            background: "highlight",
                        },
                        _c),
                }
                : {
                    transition: 'width .15s linear',
                },
            classNames.progressBar,
        ],
    };
};
exports.getStyles = getStyles;
//# sourceMappingURL=ProgressIndicator.styles.js.map

/***/ }),

/***/ 1885:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ProgressIndicator.types.js.map

/***/ }),

/***/ 4738:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(4488), exports);
tslib_1.__exportStar(__webpack_require__(699), exports);
tslib_1.__exportStar(__webpack_require__(1885), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.
var set_version_1 = __webpack_require__(4984);
set_version_1.setVersion('@fluentui/react', '8.77.1');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 4984:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setVersion = void 0;
var setVersion_1 = __webpack_require__(1659);
Object.defineProperty(exports, "setVersion", ({ enumerable: true, get: function () { return setVersion_1.setVersion; } }));
setVersion_1.setVersion('@fluentui/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1659:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setVersion = void 0;
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
exports.setVersion = setVersion;
//# sourceMappingURL=setVersion.js.map

/***/ }),

/***/ 2182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeStyles = exports.mergeStyleSets = exports.keyframes = exports.fontFace = exports.concatStyleSetsWithProps = exports.concatStyleSets = exports.Stylesheet = exports.InjectionMode = void 0;
var merge_styles_1 = __webpack_require__(8376);
Object.defineProperty(exports, "InjectionMode", ({ enumerable: true, get: function () { return merge_styles_1.InjectionMode; } }));
Object.defineProperty(exports, "Stylesheet", ({ enumerable: true, get: function () { return merge_styles_1.Stylesheet; } }));
Object.defineProperty(exports, "concatStyleSets", ({ enumerable: true, get: function () { return merge_styles_1.concatStyleSets; } }));
Object.defineProperty(exports, "concatStyleSetsWithProps", ({ enumerable: true, get: function () { return merge_styles_1.concatStyleSetsWithProps; } }));
Object.defineProperty(exports, "fontFace", ({ enumerable: true, get: function () { return merge_styles_1.fontFace; } }));
Object.defineProperty(exports, "keyframes", ({ enumerable: true, get: function () { return merge_styles_1.keyframes; } }));
Object.defineProperty(exports, "mergeStyleSets", ({ enumerable: true, get: function () { return merge_styles_1.mergeStyleSets; } }));
Object.defineProperty(exports, "mergeStyles", ({ enumerable: true, get: function () { return merge_styles_1.mergeStyles; } }));
//# sourceMappingURL=MergeStyles.js.map

/***/ }),

/***/ 4651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationClassNames = void 0;
var index_1 = __webpack_require__(334);
var index_2 = __webpack_require__(4137);
/**
 * {@docCategory AnimationClassNames}
 */
exports.AnimationClassNames = index_1.buildClassMap(index_2.AnimationStyles);
//# sourceMappingURL=AnimationClassNames.js.map

/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorClassNames = void 0;
var merge_styles_1 = __webpack_require__(8376);
var DefaultPalette_1 = __webpack_require__(6153);
var index_1 = __webpack_require__(4137);
exports.ColorClassNames = {};
for (var colorName in DefaultPalette_1.DefaultPalette) {
    if (DefaultPalette_1.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(exports.ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(exports.ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(exports.ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(exports.ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(exports.ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(exports.ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            var _a;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var style = (_a = {}, _a[cssProperty] = index_1.getTheme().palette[colorName], _a);
            return merge_styles_1.mergeStyles(isHover ? { selectors: { ':hover': style } } : style).toString();
        },
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=ColorClassNames.js.map

/***/ }),

/***/ 8340:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FontClassNames = void 0;
var buildClassMap_1 = __webpack_require__(5621);
var DefaultFontStyles_1 = __webpack_require__(59);
/**
 * {@docCategory FontClassNames}
 */
exports.FontClassNames = buildClassMap_1.buildClassMap(DefaultFontStyles_1.DefaultFontStyles);
//# sourceMappingURL=FontClassNames.js.map

/***/ }),

/***/ 17:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorClassNames = exports.FontClassNames = exports.AnimationClassNames = void 0;
var AnimationClassNames_1 = __webpack_require__(4651);
Object.defineProperty(exports, "AnimationClassNames", ({ enumerable: true, get: function () { return AnimationClassNames_1.AnimationClassNames; } }));
var FontClassNames_1 = __webpack_require__(8340);
Object.defineProperty(exports, "FontClassNames", ({ enumerable: true, get: function () { return FontClassNames_1.FontClassNames; } }));
var ColorClassNames_1 = __webpack_require__(251);
Object.defineProperty(exports, "ColorClassNames", ({ enumerable: true, get: function () { return ColorClassNames_1.ColorClassNames; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(4137), exports);
tslib_1.__exportStar(__webpack_require__(334), exports);
tslib_1.__exportStar(__webpack_require__(905), exports);
tslib_1.__exportStar(__webpack_require__(2182), exports);
__webpack_require__(6686);
// Ensure theme is initialized when this package is referenced.
var theme_1 = __webpack_require__(4656);
theme_1.initializeThemeInCustomizations();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 905:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5217:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationVariables = exports.AnimationStyles = void 0;
var theme_1 = __webpack_require__(4337);
Object.defineProperty(exports, "AnimationStyles", ({ enumerable: true, get: function () { return theme_1.AnimationStyles; } }));
Object.defineProperty(exports, "AnimationVariables", ({ enumerable: true, get: function () { return theme_1.AnimationVariables; } }));
//# sourceMappingURL=AnimationStyles.js.map

/***/ }),

/***/ 6991:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEdgeChromiumNoHighContrastAdjustSelector = exports.getHighContrastNoAdjustStyle = exports.getScreenSelector = exports.ScreenWidthMinUhfMobile = exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMaxXLarge = exports.ScreenWidthMaxLarge = exports.ScreenWidthMaxMedium = exports.ScreenWidthMaxSmall = exports.ScreenWidthMinXXXLarge = exports.ScreenWidthMinXXLarge = exports.ScreenWidthMinXLarge = exports.ScreenWidthMinLarge = exports.ScreenWidthMinMedium = exports.ScreenWidthMinSmall = exports.EdgeChromiumHighContrastSelector = exports.HighContrastSelectorBlack = exports.HighContrastSelectorWhite = exports.HighContrastSelector = void 0;
exports.HighContrastSelector = '@media screen and (-ms-high-contrast: active), @media screen and (forced-colors: active)';
exports.HighContrastSelectorWhite = 
// eslint-disable-next-line @fluentui/max-len
'@media screen and (-ms-high-contrast: black-on-white), @media screen and (forced-colors: active) and (prefers-color-scheme: light)';
exports.HighContrastSelectorBlack = 
// eslint-disable-next-line @fluentui/max-len
'@media screen and (-ms-high-contrast: white-on-black), @media screen and (forced-colors: active) and (prefers-color-scheme: dark)';
/**
 * @deprecated Use `HighContrastSelector`
 */
exports.EdgeChromiumHighContrastSelector = '@media screen and (-ms-high-contrast: active), @media screen and (forced-colors: active)';
exports.ScreenWidthMinSmall = 320;
exports.ScreenWidthMinMedium = 480;
exports.ScreenWidthMinLarge = 640;
exports.ScreenWidthMinXLarge = 1024;
exports.ScreenWidthMinXXLarge = 1366;
exports.ScreenWidthMinXXXLarge = 1920;
exports.ScreenWidthMaxSmall = exports.ScreenWidthMinMedium - 1;
exports.ScreenWidthMaxMedium = exports.ScreenWidthMinLarge - 1;
exports.ScreenWidthMaxLarge = exports.ScreenWidthMinXLarge - 1;
exports.ScreenWidthMaxXLarge = exports.ScreenWidthMinXXLarge - 1;
exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMinXXXLarge - 1;
exports.ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    var minSelector = typeof min === 'number' ? " and (min-width: " + min + "px)" : '';
    var maxSelector = typeof max === 'number' ? " and (max-width: " + max + "px)" : '';
    return "@media only screen" + minSelector + maxSelector;
}
exports.getScreenSelector = getScreenSelector;
/**
 * The style which turns off high contrast adjustment in browsers.
 */
function getHighContrastNoAdjustStyle() {
    return {
        forcedColorAdjust: 'none',
        MsHighContrastAdjust: 'none',
    };
}
exports.getHighContrastNoAdjustStyle = getHighContrastNoAdjustStyle;
/**
 * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
 *  @deprecated Use `getHighContrastNoAdjustStyle`
 */
// eslint-disable-next-line deprecation/deprecation
function getEdgeChromiumNoHighContrastAdjustSelector() {
    var _a;
    return _a = {},
        // eslint-disable-next-line deprecation/deprecation
        _a[exports.EdgeChromiumHighContrastSelector] = {
            forcedColorAdjust: 'none',
            MsHighContrastAdjust: 'none',
        },
        _a;
}
exports.getEdgeChromiumNoHighContrastAdjustSelector = getEdgeChromiumNoHighContrastAdjustSelector;
//# sourceMappingURL=CommonStyles.js.map

/***/ }),

/***/ 5084:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultEffects = void 0;
var theme_1 = __webpack_require__(4337);
Object.defineProperty(exports, "DefaultEffects", ({ enumerable: true, get: function () { return theme_1.DefaultEffects; } }));
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ 59:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDefaultFontFaces = exports.DefaultFontStyles = void 0;
var theme_1 = __webpack_require__(4337);
Object.defineProperty(exports, "DefaultFontStyles", ({ enumerable: true, get: function () { return theme_1.DefaultFontStyles; } }));
Object.defineProperty(exports, "registerDefaultFontFaces", ({ enumerable: true, get: function () { return theme_1.registerDefaultFontFaces; } }));
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ 6153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultPalette = void 0;
var theme_1 = __webpack_require__(4337);
Object.defineProperty(exports, "DefaultPalette", ({ enumerable: true, get: function () { return theme_1.DefaultPalette; } }));
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ 6955:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noWrap = exports.normalize = void 0;
// This file mimics styles and mixins from _General.Mixins.scss
exports.normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
};
exports.noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};
//# sourceMappingURL=GeneralStyles.js.map

/***/ }),

/***/ 2768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PulsingBeaconAnimationStyles = void 0;
var tslib_1 = __webpack_require__(655);
var merge_styles_1 = __webpack_require__(8376);
var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension,
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth,
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1,
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo,
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return tslib_1.__assign(tslib_1.__assign({}, _continuousPulseStepOne(beaconColorOne, innerDimension)), {
        opacity: 0,
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return merge_styles_1.keyframes({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {},
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return merge_styles_1.keyframes({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {},
    });
}
function _createDefaultAnimation(animationName, delayLength) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: delayLength || DEFAULT_DELAY,
    };
}
exports.PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation,
};
//# sourceMappingURL=PulsingBeaconAnimationStyles.js.map

/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFontStyles = exports.IconFontSizes = exports.FontWeights = exports.FontSizes = exports.LocalizedFontFamilies = exports.LocalizedFontNames = void 0;
var theme_1 = __webpack_require__(4337);
Object.defineProperty(exports, "LocalizedFontNames", ({ enumerable: true, get: function () { return theme_1.LocalizedFontNames; } }));
Object.defineProperty(exports, "LocalizedFontFamilies", ({ enumerable: true, get: function () { return theme_1.LocalizedFontFamilies; } }));
Object.defineProperty(exports, "FontSizes", ({ enumerable: true, get: function () { return theme_1.FontSizes; } }));
Object.defineProperty(exports, "FontWeights", ({ enumerable: true, get: function () { return theme_1.FontWeights; } }));
Object.defineProperty(exports, "IconFontSizes", ({ enumerable: true, get: function () { return theme_1.IconFontSizes; } }));
Object.defineProperty(exports, "createFontStyles", ({ enumerable: true, get: function () { return theme_1.createFontStyles; } }));
//# sourceMappingURL=fonts.js.map

/***/ }),

/***/ 1792:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFadedOverflowStyle = void 0;
var DEFAULT_HEIGHT = '50%';
var DEFAULT_WIDTH = 20;
/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover,
 * selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from
 * // the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of
 * // ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette.
 * Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
function getFadedOverflowStyle(theme, color, direction, width, height) {
    if (color === void 0) { color = 'bodyBackground'; }
    if (direction === void 0) { direction = 'horizontal'; }
    if (width === void 0) { width = getDefaultValue('width', direction); }
    if (height === void 0) { height = getDefaultValue('height', direction); }
    // Get the color value string from the theme semanticColors or palette.
    var colorValue = theme.semanticColors[color] || theme.palette[color];
    // Get the red, green, blue values of the colorValue.
    var rgbColor = color2rgb(colorValue);
    // Apply opacity 0 to serve as a start color of the gradient.
    var rgba = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0)";
    // Get the direction of the gradient. (mergeStyles takes care of RTL direction)
    var gradientDirection = direction === 'vertical' ? 'to bottom' : 'to right';
    return {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        pointerEvents: 'none',
        backgroundImage: "linear-gradient(" + gradientDirection + ", " + rgba + " 0%, " + colorValue + " 100%)",
    };
}
exports.getFadedOverflowStyle = getFadedOverflowStyle;
// TODO consider moving this to a separate module along with some more color functions from OUFR/utilities.
/**
 * Helper function to convert a string hex color to an RGB object.
 *
 * @param colorValue - Color to be converted from hex to rgba.
 */
function color2rgb(colorValue) {
    if (colorValue[0] === '#') {
        // If it's a hex code
        return {
            r: parseInt(colorValue.slice(1, 3), 16),
            g: parseInt(colorValue.slice(3, 5), 16),
            b: parseInt(colorValue.slice(5, 7), 16),
        };
    }
    else if (colorValue.indexOf('rgba(') === 0) {
        // If it's an rgba color string
        colorValue = colorValue.match(/rgba\(([^)]+)\)/)[1];
        var parts = colorValue.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
        };
    }
    // The only remaining possibility is transparent.
    return {
        r: 255,
        g: 255,
        b: 255,
    };
}
/**
 * Helper function to get the default values for parameters of main function.
 *
 * @param style - Which style to get the default value for.
 * @param direction - What direction to take into consideration.
 */
function getDefaultValue(style, direction) {
    if (style === 'width') {
        return direction === 'horizontal' ? DEFAULT_WIDTH : '100%';
    }
    else {
        return direction === 'vertical' ? DEFAULT_HEIGHT : '100%';
    }
}
//# sourceMappingURL=getFadedOverflowStyle.js.map

/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInputFocusStyle = exports.getFocusOutlineStyle = exports.focusClear = exports.getFocusStyle = void 0;
var CommonStyles_1 = __webpack_require__(6991);
var utilities_1 = __webpack_require__(254);
var zIndexes_1 = __webpack_require__(8492);
function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (typeof insetOrOptions === 'number' || !insetOrOptions) {
        return _getFocusStyleInternal(theme, {
            inset: insetOrOptions,
            position: position,
            highContrastStyle: highContrastStyle,
            borderColor: borderColor,
            outlineColor: outlineColor,
            isFocusedOnly: isFocusedOnly,
        });
    }
    else {
        return _getFocusStyleInternal(theme, insetOrOptions);
    }
}
exports.getFocusStyle = getFocusStyle;
function _getFocusStyleInternal(theme, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var _c = options.inset, inset = _c === void 0 ? 0 : _c, _d = options.width, width = _d === void 0 ? 1 : _d, _e = options.position, position = _e === void 0 ? 'relative' : _e, highContrastStyle = options.highContrastStyle, _f = options.borderColor, borderColor = _f === void 0 ? theme.palette.white : _f, _g = options.outlineColor, outlineColor = _g === void 0 ? theme.palette.neutralSecondary : _g, _h = options.isFocusedOnly, isFocusedOnly = _h === void 0 ? true : _h;
    return {
        // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
        outline: 'transparent',
        // Requirement because pseudo-element is absolutely positioned.
        position: position,
        selectors: (_a = {
                // Clear the focus border in Firefox.
                // Reference: http://stackoverflow.com/a/199319/1436671
                '::-moz-focus-inner': {
                    border: '0',
                }
            },
            // When the element that uses this mixin is in a :focus state, add a pseudo-element to
            // create a border.
            _a["." + utilities_1.IsFocusVisibleClassName + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: width + "px solid " + borderColor,
                outline: width + "px solid " + outlineColor,
                zIndex: zIndexes_1.ZIndexes.FocusStyle,
                selectors: (_b = {},
                    _b[CommonStyles_1.HighContrastSelector] = highContrastStyle,
                    _b),
            },
            _a),
    };
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0,
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent',
            },
        },
    };
}
exports.focusClear = focusClear;
/**
 * Generates a style which can be used to set a border on focus.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border (default 0)
 * @param width - The border width in pixels (default 1)
 * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
 * @returns The style object.
 */
function getFocusOutlineStyle(theme, inset, width, color) {
    var _a;
    if (inset === void 0) { inset = 0; }
    if (width === void 0) { width = 1; }
    return {
        selectors: (_a = {},
            _a[":global(" + utilities_1.IsFocusVisibleClassName + ") &:focus"] = {
                outline: width + " solid " + (color || theme.palette.neutralSecondary),
                outlineOffset: -inset + "px",
            },
            _a),
    };
}
exports.getFocusOutlineStyle = getFocusOutlineStyle;
/**
 * Generates text input border styles on focus.
 *
 * @param borderColor - Color of the border.
 * @param borderRadius - Radius of the border.
 * @param borderType - Type of the border.
 * @param borderPosition - Position of the border relative to the input element (default to -1
 * as it's the most common border width of the input element)
 * @returns The style object.
 */
var getInputFocusStyle = function (borderColor, borderRadius, borderType, borderPosition) {
    var _a, _b, _c;
    if (borderType === void 0) { borderType = 'border'; }
    if (borderPosition === void 0) { borderPosition = -1; }
    var isBorderBottom = borderType === 'borderBottom';
    return {
        borderColor: borderColor,
        selectors: {
            ':after': (_a = {
                    pointerEvents: 'none',
                    content: "''",
                    position: 'absolute',
                    left: isBorderBottom ? 0 : borderPosition,
                    top: borderPosition,
                    bottom: borderPosition,
                    right: isBorderBottom ? 0 : borderPosition
                },
                _a[borderType] = "2px solid " + borderColor,
                _a.borderRadius = borderRadius,
                _a.width = borderType === 'borderBottom' ? '100%' : undefined,
                _a.selectors = (_b = {},
                    _b[CommonStyles_1.HighContrastSelector] = (_c = {},
                        _c[borderType === 'border' ? 'borderColor' : 'borderBottomColor'] = 'Highlight',
                        _c),
                    _b),
                _a),
        },
    };
};
exports.getInputFocusStyle = getInputFocusStyle;
//# sourceMappingURL=getFocusStyle.js.map

/***/ }),

/***/ 7520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGlobalClassNames = void 0;
var merge_styles_1 = __webpack_require__(8376);
var utilities_1 = __webpack_require__(254);
/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = utilities_1.memoizeFunction(function (classNames, disableGlobalClassNames) {
    var styleSheet = merge_styles_1.Stylesheet.getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}
exports.getGlobalClassNames = getGlobalClassNames;
//# sourceMappingURL=getGlobalClassNames.js.map

/***/ }),

/***/ 9999:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPlaceholderStyles = void 0;
/**
 * Generates placeholder style for each of the browsers supported by `@fluentui/react`.
 * @param styles - The style to use.
 * @returns The placeholder style object for each browser depending on the placeholder directive it uses.
 */
function getPlaceholderStyles(styles) {
    return {
        selectors: {
            '::placeholder': styles,
            ':-ms-input-placeholder': styles,
            '::-ms-input-placeholder': styles, // Edge
        },
    };
}
exports.getPlaceholderStyles = getPlaceholderStyles;
//# sourceMappingURL=getPlaceholderStyles.js.map

/***/ }),

/***/ 2649:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hiddenContentStyle = void 0;
exports.hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};
//# sourceMappingURL=hiddenContentStyle.js.map

/***/ }),

/***/ 4137:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeOnThemeChangeCallback = exports.registerOnThemeChangeCallback = exports.createTheme = exports.loadTheme = exports.getTheme = exports.ThemeSettingName = exports.getGlobalClassNames = exports.PulsingBeaconAnimationStyles = exports.hiddenContentStyle = exports.createFontStyles = exports.IconFontSizes = exports.FontWeights = exports.FontSizes = exports.registerDefaultFontFaces = exports.DefaultFontStyles = exports.DefaultEffects = exports.DefaultPalette = exports.AnimationVariables = exports.AnimationStyles = void 0;
var tslib_1 = __webpack_require__(655);
var AnimationStyles_1 = __webpack_require__(5217);
Object.defineProperty(exports, "AnimationStyles", ({ enumerable: true, get: function () { return AnimationStyles_1.AnimationStyles; } }));
Object.defineProperty(exports, "AnimationVariables", ({ enumerable: true, get: function () { return AnimationStyles_1.AnimationVariables; } }));
var DefaultPalette_1 = __webpack_require__(6153);
Object.defineProperty(exports, "DefaultPalette", ({ enumerable: true, get: function () { return DefaultPalette_1.DefaultPalette; } }));
var DefaultEffects_1 = __webpack_require__(5084);
Object.defineProperty(exports, "DefaultEffects", ({ enumerable: true, get: function () { return DefaultEffects_1.DefaultEffects; } }));
var DefaultFontStyles_1 = __webpack_require__(59);
Object.defineProperty(exports, "DefaultFontStyles", ({ enumerable: true, get: function () { return DefaultFontStyles_1.DefaultFontStyles; } }));
Object.defineProperty(exports, "registerDefaultFontFaces", ({ enumerable: true, get: function () { return DefaultFontStyles_1.registerDefaultFontFaces; } }));
var fonts_1 = __webpack_require__(9910);
Object.defineProperty(exports, "FontSizes", ({ enumerable: true, get: function () { return fonts_1.FontSizes; } }));
Object.defineProperty(exports, "FontWeights", ({ enumerable: true, get: function () { return fonts_1.FontWeights; } }));
Object.defineProperty(exports, "IconFontSizes", ({ enumerable: true, get: function () { return fonts_1.IconFontSizes; } }));
Object.defineProperty(exports, "createFontStyles", ({ enumerable: true, get: function () { return fonts_1.createFontStyles; } }));
tslib_1.__exportStar(__webpack_require__(420), exports);
var hiddenContentStyle_1 = __webpack_require__(2649);
Object.defineProperty(exports, "hiddenContentStyle", ({ enumerable: true, get: function () { return hiddenContentStyle_1.hiddenContentStyle; } }));
var PulsingBeaconAnimationStyles_1 = __webpack_require__(2768);
Object.defineProperty(exports, "PulsingBeaconAnimationStyles", ({ enumerable: true, get: function () { return PulsingBeaconAnimationStyles_1.PulsingBeaconAnimationStyles; } }));
var getGlobalClassNames_1 = __webpack_require__(7520);
Object.defineProperty(exports, "getGlobalClassNames", ({ enumerable: true, get: function () { return getGlobalClassNames_1.getGlobalClassNames; } }));
tslib_1.__exportStar(__webpack_require__(9677), exports);
var theme_1 = __webpack_require__(4656);
Object.defineProperty(exports, "ThemeSettingName", ({ enumerable: true, get: function () { return theme_1.ThemeSettingName; } }));
Object.defineProperty(exports, "getTheme", ({ enumerable: true, get: function () { return theme_1.getTheme; } }));
Object.defineProperty(exports, "loadTheme", ({ enumerable: true, get: function () { return theme_1.loadTheme; } }));
Object.defineProperty(exports, "createTheme", ({ enumerable: true, get: function () { return theme_1.createTheme; } }));
Object.defineProperty(exports, "registerOnThemeChangeCallback", ({ enumerable: true, get: function () { return theme_1.registerOnThemeChangeCallback; } }));
Object.defineProperty(exports, "removeOnThemeChangeCallback", ({ enumerable: true, get: function () { return theme_1.removeOnThemeChangeCallback; } }));
tslib_1.__exportStar(__webpack_require__(6991), exports);
tslib_1.__exportStar(__webpack_require__(6955), exports);
tslib_1.__exportStar(__webpack_require__(1792), exports);
tslib_1.__exportStar(__webpack_require__(9999), exports);
tslib_1.__exportStar(__webpack_require__(8492), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getThemedContext = void 0;
var utilities_1 = __webpack_require__(254);
/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development.
 * Its API signature and existence are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back
 * to global Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case,
 * scheme must be present in theme arg, otherwise new context will default to theme arg (there is no fallback to
 * settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
function getThemedContext(context, scheme, theme) {
    var newContext = context;
    var newSettings;
    // Only fall back to context and customizations when theme arg is not provided.
    var schemeSource = theme || utilities_1.Customizations.getSettings(['theme'], undefined, context.customizations).theme;
    if (theme) {
        newSettings = { theme: theme };
    }
    var schemeTheme = scheme && schemeSource && schemeSource.schemes && schemeSource.schemes[scheme];
    // These first two checks are logically redundant but TS doesn't infer schemeSource.schemes is defined
    // when schemeTheme is defined.
    if (schemeSource && schemeTheme && schemeSource !== schemeTheme) {
        newSettings = { theme: schemeTheme };
        newSettings.theme.schemes = schemeSource.schemes;
    }
    if (newSettings) {
        newContext = {
            customizations: {
                settings: utilities_1.mergeSettings(context.customizations.settings, newSettings),
                scopedSettings: context.customizations.scopedSettings,
            },
        };
    }
    return newContext;
}
exports.getThemedContext = getThemedContext;
//# sourceMappingURL=scheme.js.map

/***/ }),

/***/ 4656:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadTheme = exports.removeOnThemeChangeCallback = exports.registerOnThemeChangeCallback = exports.getTheme = exports.initializeThemeInCustomizations = exports.ThemeSettingName = exports.createTheme = void 0;
var tslib_1 = __webpack_require__(655);
var utilities_1 = __webpack_require__(254);
var load_themed_styles_1 = __webpack_require__(8660);
var theme_1 = __webpack_require__(4337);
var theme_2 = __webpack_require__(4337);
Object.defineProperty(exports, "createTheme", ({ enumerable: true, get: function () { return theme_2.createTheme; } }));
var _theme = theme_1.createTheme({});
var _onThemeChangeCallbacks = [];
exports.ThemeSettingName = 'theme';
function initializeThemeInCustomizations() {
    var _a;
    var _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var win = utilities_1.getWindow();
    if ((_b = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _b === void 0 ? void 0 : _b.legacyTheme) {
        // does everything the `else` clause does and more, such as invoke legacy theming
        loadTheme(win.FabricConfig.legacyTheme);
    }
    else if (!utilities_1.Customizations.getSettings([exports.ThemeSettingName]).theme) {
        if ((_c = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _c === void 0 ? void 0 : _c.theme) {
            _theme = theme_1.createTheme(win.FabricConfig.theme);
        }
        // Set the default theme.
        utilities_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    }
}
exports.initializeThemeInCustomizations = initializeThemeInCustomizations;
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = theme_1.createTheme({}, depComments);
    }
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
exports.registerOnThemeChangeCallback = registerOnThemeChangeCallback;
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
exports.removeOnThemeChangeCallback = removeOnThemeChangeCallback;
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = theme_1.createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    load_themed_styles_1.loadTheme(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    utilities_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
}
exports.loadTheme = loadTheme;
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                // if it's a number, convert it to px by default like our theming system does
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}
//# sourceMappingURL=theme.js.map

/***/ }),

/***/ 8492:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZIndexes = void 0;
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    /**
     * @deprecated Do not use
     */
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes = exports.ZIndexes || (exports.ZIndexes = {}));
//# sourceMappingURL=zIndexes.js.map

/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildClassMap = void 0;
var MergeStyles_1 = __webpack_require__(2182);
/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        className_1 = MergeStyles_1.mergeStyles(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true,
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
exports.buildClassMap = buildClassMap;
//# sourceMappingURL=buildClassMap.js.map

/***/ }),

/***/ 578:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIconClassName = void 0;
var merge_styles_1 = __webpack_require__(8376);
var icons_1 = __webpack_require__(467);
var defaultIconStyles = {
    display: 'inline-block',
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = icons_1.getIcon(name);
    if (icon) {
        className = merge_styles_1.mergeStyles(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\"",
                },
            },
        });
    }
    return className;
}
exports.getIconClassName = getIconClassName;
//# sourceMappingURL=getIconClassName.js.map

/***/ }),

/***/ 467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setIconOptions = exports.getIcon = exports.registerIconAlias = exports.unregisterIcons = exports.registerIcons = void 0;
var tslib_1 = __webpack_require__(655);
var utilities_1 = __webpack_require__(254);
var merge_styles_1 = __webpack_require__(8376);
var ICON_SETTING_NAME = 'icons';
var _iconSettings = utilities_1.GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true,
    },
    __remapped: {},
});
// Reset icon registration on stylesheet resets.
var stylesheet = merge_styles_1.Stylesheet.getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */
var normalizeIconName = function (name) { return name.toLowerCase(); };
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib_1.__assign(tslib_1.__assign({}, iconSubset), { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib_1.__assign(tslib_1.__assign({}, _iconSettings.__options), options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = normalizeIconName(iconName);
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset,
                };
            }
        }
    }
}
exports.registerIcons = registerIcons;
/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
function unregisterIcons(iconNames) {
    var options = _iconSettings.__options;
    var _loop_1 = function (iconName) {
        var normalizedIconName = normalizeIconName(iconName);
        if (_iconSettings[normalizedIconName]) {
            delete _iconSettings[normalizedIconName];
        }
        else {
            // Warn that we are trying to delete an icon that doesn't exist
            if (!options.disableWarnings) {
                utilities_1.warn("The icon \"" + iconName + "\" tried to unregister but was not registered.");
            }
        }
        // Delete any aliases for this iconName
        if (_iconSettings.__remapped[normalizedIconName]) {
            delete _iconSettings.__remapped[normalizedIconName];
        }
        // Delete any items that were an alias for this iconName
        Object.keys(_iconSettings.__remapped).forEach(function (key) {
            if (_iconSettings.__remapped[key] === normalizedIconName) {
                delete _iconSettings.__remapped[key];
            }
        });
    };
    for (var _i = 0, iconNames_1 = iconNames; _i < iconNames_1.length; _i++) {
        var iconName = iconNames_1[_i];
        _loop_1(iconName);
    }
}
exports.unregisterIcons = unregisterIcons;
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
exports.registerIconAlias = registerIconAlias;
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? normalizeIconName(name) : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    merge_styles_1.fontFace(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = merge_styles_1.mergeStyles(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal',
                    });
                }
            }
        }
        else {
            // eslint-disable-next-line deprecation/deprecation
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                utilities_1.warn("The icon \"" + name + "\" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.");
            }
        }
    }
    return icon;
}
exports.getIcon = getIcon;
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib_1.__assign(tslib_1.__assign({}, _iconSettings.__options), options);
}
exports.setIconOptions = setIconOptions;
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                utilities_1.warn("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ 334:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIconClassName = exports.setIconOptions = exports.unregisterIcons = exports.registerIconAlias = exports.registerIcons = exports.getIcon = exports.buildClassMap = void 0;
var buildClassMap_1 = __webpack_require__(5621);
Object.defineProperty(exports, "buildClassMap", ({ enumerable: true, get: function () { return buildClassMap_1.buildClassMap; } }));
var icons_1 = __webpack_require__(467);
Object.defineProperty(exports, "getIcon", ({ enumerable: true, get: function () { return icons_1.getIcon; } }));
Object.defineProperty(exports, "registerIcons", ({ enumerable: true, get: function () { return icons_1.registerIcons; } }));
Object.defineProperty(exports, "registerIconAlias", ({ enumerable: true, get: function () { return icons_1.registerIconAlias; } }));
Object.defineProperty(exports, "unregisterIcons", ({ enumerable: true, get: function () { return icons_1.unregisterIcons; } }));
Object.defineProperty(exports, "setIconOptions", ({ enumerable: true, get: function () { return icons_1.setIconOptions; } }));
var getIconClassName_1 = __webpack_require__(578);
Object.defineProperty(exports, "getIconClassName", ({ enumerable: true, get: function () { return getIconClassName_1.getIconClassName; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6686:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.
var set_version_1 = __webpack_require__(4984);
set_version_1.setVersion('@fluentui/style-utilities', '8.7.0');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FluentTheme = void 0;
var createTheme_1 = __webpack_require__(7298);
exports.FluentTheme = createTheme_1.createTheme({});
//# sourceMappingURL=FluentTheme.js.map

/***/ }),

/***/ 5323:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultPalette = void 0;
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
exports.DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ 5577:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedColors = exports.NeutralColors = exports.CommunicationColors = void 0;
var CommunicationColors;
(function (CommunicationColors) {
    CommunicationColors.shade30 = '#004578';
    CommunicationColors.shade20 = '#005a9e';
    CommunicationColors.shade10 = '#106ebe';
    CommunicationColors.primary = '#0078d4';
    CommunicationColors.tint10 = '#2b88d8';
    CommunicationColors.tint20 = '#c7e0f4';
    CommunicationColors.tint30 = '#deecf9';
    CommunicationColors.tint40 = '#eff6fc';
})(CommunicationColors = exports.CommunicationColors || (exports.CommunicationColors = {}));
var NeutralColors;
(function (NeutralColors) {
    NeutralColors.black = '#000000';
    NeutralColors.gray220 = '#11100f';
    NeutralColors.gray210 = '#161514';
    NeutralColors.gray200 = '#1b1a19';
    NeutralColors.gray190 = '#201f1e';
    NeutralColors.gray180 = '#252423';
    NeutralColors.gray170 = '#292827';
    NeutralColors.gray160 = '#323130';
    NeutralColors.gray150 = '#3b3a39';
    NeutralColors.gray140 = '#484644';
    NeutralColors.gray130 = '#605e5c';
    NeutralColors.gray120 = '#797775';
    NeutralColors.gray110 = '#8a8886';
    NeutralColors.gray100 = '#979593';
    NeutralColors.gray90 = '#a19f9d';
    NeutralColors.gray80 = '#b3b0ad';
    NeutralColors.gray70 = '#bebbb8';
    NeutralColors.gray60 = '#c8c6c4';
    NeutralColors.gray50 = '#d2d0ce';
    NeutralColors.gray40 = '#e1dfdd';
    NeutralColors.gray30 = '#edebe9';
    NeutralColors.gray20 = '#f3f2f1';
    NeutralColors.gray10 = '#faf9f8';
    NeutralColors.white = '#ffffff';
})(NeutralColors = exports.NeutralColors || (exports.NeutralColors = {}));
var SharedColors;
(function (SharedColors) {
    SharedColors.pinkRed10 = '#750b1c';
    SharedColors.red20 = '#a4262c';
    SharedColors.red10 = '#d13438';
    SharedColors.redOrange20 = '#603d30';
    SharedColors.redOrange10 = '#da3b01';
    SharedColors.orange30 = '#8e562e';
    SharedColors.orange20 = '#ca5010';
    SharedColors.orange10 = '#ffaa44';
    SharedColors.yellow10 = '#fce100';
    SharedColors.orangeYellow20 = '#986f0b';
    SharedColors.orangeYellow10 = '#c19c00';
    SharedColors.yellowGreen10 = '#8cbd18';
    SharedColors.green20 = '#0b6a0b';
    SharedColors.green10 = '#498205';
    SharedColors.greenCyan10 = '#00ad56';
    SharedColors.cyan40 = '#005e50';
    SharedColors.cyan30 = '#005b70';
    SharedColors.cyan20 = '#038387';
    SharedColors.cyan10 = '#00b7c3';
    SharedColors.cyanBlue20 = '#004e8c';
    SharedColors.cyanBlue10 = '#0078d4';
    SharedColors.blue10 = '#4f6bed';
    SharedColors.blueMagenta40 = '#373277';
    SharedColors.blueMagenta30 = '#5c2e91';
    SharedColors.blueMagenta20 = '#8764b8';
    SharedColors.blueMagenta10 = '#8378de';
    SharedColors.magenta20 = '#881798';
    SharedColors.magenta10 = '#c239b3';
    SharedColors.magentaPink20 = '#9b0062';
    SharedColors.magentaPink10 = '#e3008c';
    SharedColors.gray40 = '#393939';
    SharedColors.gray30 = '#7a7574';
    SharedColors.gray20 = '#69797e';
    SharedColors.gray10 = '#a0aeb2';
})(SharedColors = exports.SharedColors || (exports.SharedColors = {}));
//# sourceMappingURL=FluentColors.js.map

/***/ }),

/***/ 5202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultPalette = void 0;
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(5577), exports);
var DefaultPalette_1 = __webpack_require__(5323);
Object.defineProperty(exports, "DefaultPalette", ({ enumerable: true, get: function () { return DefaultPalette_1.DefaultPalette; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTheme = void 0;
var index_1 = __webpack_require__(5202);
var index_2 = __webpack_require__(570);
var index_3 = __webpack_require__(9490);
var mergeThemes_1 = __webpack_require__(1683);
var index_4 = __webpack_require__(896);
var makeSemanticColors_1 = __webpack_require__(9298);
/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: index_1.DefaultPalette,
        effects: index_2.DefaultEffects,
        fonts: index_3.DefaultFontStyles,
        spacing: index_4.DefaultSpacing,
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: makeSemanticColors_1.makeSemanticColors(index_1.DefaultPalette, index_2.DefaultEffects, undefined, isInverted, depComments),
        rtl: undefined,
    };
    return mergeThemes_1.mergeThemes(baseTheme, theme);
}
exports.createTheme = createTheme;
//# sourceMappingURL=createTheme.js.map

/***/ }),

/***/ 7784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultEffects = void 0;
var FluentDepths_1 = __webpack_require__(9285);
exports.DefaultEffects = {
    elevation4: FluentDepths_1.Depths.depth4,
    elevation8: FluentDepths_1.Depths.depth8,
    elevation16: FluentDepths_1.Depths.depth16,
    elevation64: FluentDepths_1.Depths.depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ 9285:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Depths = void 0;
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths = exports.Depths || (exports.Depths = {}));
//# sourceMappingURL=FluentDepths.js.map

/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Depths = exports.DefaultEffects = void 0;
var DefaultEffects_1 = __webpack_require__(7784);
Object.defineProperty(exports, "DefaultEffects", ({ enumerable: true, get: function () { return DefaultEffects_1.DefaultEffects; } }));
var FluentDepths_1 = __webpack_require__(9285);
Object.defineProperty(exports, "Depths", ({ enumerable: true, get: function () { return FluentDepths_1.Depths; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDefaultFontFaces = exports.DefaultFontStyles = void 0;
var merge_styles_1 = __webpack_require__(8376);
var FluentFonts_1 = __webpack_require__(5695);
var createFontStyles_1 = __webpack_require__(6070);
var utilities_1 = __webpack_require__(254);
// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
exports.DefaultFontStyles = createFontStyles_1.createFontStyles(utilities_1.getLanguage());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    merge_styles_1.fontFace({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', FluentFonts_1.FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', FluentFonts_1.FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', FluentFonts_1.FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', FluentFonts_1.FontWeights.semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', FluentFonts_1.FontWeights.bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, FluentFonts_1.LocalizedFontNames.Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", FluentFonts_1.FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", FluentFonts_1.FontWeights.semibold);
    }
}
exports.registerDefaultFontFaces = registerDefaultFontFaces;
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = utilities_1.getWindow()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return (_b = fabricConfig === null || fabricConfig === void 0 ? void 0 : fabricConfig.fontBaseUrl) !== null && _b !== void 0 ? _b : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ 5695:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconFontSizes = exports.FontWeights = exports.FontSizes = exports.LocalizedFontFamilies = exports.LocalizedFontNames = void 0;
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames = exports.LocalizedFontNames || (exports.LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
    LocalizedFontFamilies.Armenian = "'" + LocalizedFontNames.Armenian + "'";
    LocalizedFontFamilies.Georgian = "'" + LocalizedFontNames.Georgian + "'";
})(LocalizedFontFamilies = exports.LocalizedFontFamilies || (exports.LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes = exports.FontSizes || (exports.FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights = exports.FontWeights || (exports.FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes = exports.IconFontSizes || (exports.IconFontSizes = {}));
//# sourceMappingURL=FluentFonts.js.map

/***/ }),

/***/ 6070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFontStyles = void 0;
var FluentFonts_1 = __webpack_require__(5695);
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + FluentFonts_1.LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: FluentFonts_1.LocalizedFontFamilies.Arabic,
    bg: FluentFonts_1.LocalizedFontFamilies.Cyrillic,
    cs: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    el: FluentFonts_1.LocalizedFontFamilies.Greek,
    et: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    he: FluentFonts_1.LocalizedFontFamilies.Hebrew,
    hi: FluentFonts_1.LocalizedFontFamilies.Hindi,
    hr: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    hu: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    ja: FluentFonts_1.LocalizedFontFamilies.Japanese,
    kk: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    ko: FluentFonts_1.LocalizedFontFamilies.Korean,
    lt: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    lv: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    pl: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    ru: FluentFonts_1.LocalizedFontFamilies.Cyrillic,
    sk: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    'sr-latn': FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    th: FluentFonts_1.LocalizedFontFamilies.Thai,
    tr: FluentFonts_1.LocalizedFontFamilies.EastEuropean,
    uk: FluentFonts_1.LocalizedFontFamilies.Cyrillic,
    vi: FluentFonts_1.LocalizedFontFamilies.Vietnamese,
    'zh-hans': FluentFonts_1.LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': FluentFonts_1.LocalizedFontFamilies.ChineseTraditional,
    hy: FluentFonts_1.LocalizedFontFamilies.Armenian,
    ka: FluentFonts_1.LocalizedFontFamilies.Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(FluentFonts_1.FontSizes.mini, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        xSmall: _createFont(FluentFonts_1.FontSizes.xSmall, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FluentFonts_1.FontSizes.small, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FluentFonts_1.FontSizes.smallPlus, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FluentFonts_1.FontSizes.medium, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FluentFonts_1.FontSizes.mediumPlus, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FluentFonts_1.FontSizes.large, FluentFonts_1.FontWeights.regular, fontFamilyWithFallback),
        xLarge: _createFont(FluentFonts_1.FontSizes.xLarge, FluentFonts_1.FontWeights.semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(FluentFonts_1.FontSizes.xLargePlus, FluentFonts_1.FontWeights.semibold, fontFamilyWithFallback),
        xxLarge: _createFont(FluentFonts_1.FontSizes.xxLarge, FluentFonts_1.FontWeights.semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(FluentFonts_1.FontSizes.xxLargePlus, FluentFonts_1.FontWeights.semibold, fontFamilyWithFallback),
        superLarge: _createFont(FluentFonts_1.FontSizes.superLarge, FluentFonts_1.FontWeights.semibold, fontFamilyWithFallback),
        mega: _createFont(FluentFonts_1.FontSizes.mega, FluentFonts_1.FontWeights.semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}
exports.createFontStyles = createFontStyles;
//# sourceMappingURL=createFontStyles.js.map

/***/ }),

/***/ 9490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDefaultFontFaces = exports.DefaultFontStyles = exports.createFontStyles = void 0;
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(5695), exports);
var createFontStyles_1 = __webpack_require__(6070);
Object.defineProperty(exports, "createFontStyles", ({ enumerable: true, get: function () { return createFontStyles_1.createFontStyles; } }));
var DefaultFontStyles_1 = __webpack_require__(7736);
Object.defineProperty(exports, "DefaultFontStyles", ({ enumerable: true, get: function () { return DefaultFontStyles_1.DefaultFontStyles; } }));
Object.defineProperty(exports, "registerDefaultFontFaces", ({ enumerable: true, get: function () { return DefaultFontStyles_1.registerDefaultFontFaces; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FluentTheme = void 0;
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(1683), exports);
tslib_1.__exportStar(__webpack_require__(8230), exports);
tslib_1.__exportStar(__webpack_require__(5202), exports);
tslib_1.__exportStar(__webpack_require__(570), exports);
tslib_1.__exportStar(__webpack_require__(896), exports);
tslib_1.__exportStar(__webpack_require__(7861), exports);
tslib_1.__exportStar(__webpack_require__(9490), exports);
tslib_1.__exportStar(__webpack_require__(7298), exports);
var FluentTheme_1 = __webpack_require__(234);
Object.defineProperty(exports, "FluentTheme", ({ enumerable: true, get: function () { return FluentTheme_1.FluentTheme; } }));
__webpack_require__(8760);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeThemes = void 0;
var utilities_1 = __webpack_require__(254);
var makeSemanticColors_1 = __webpack_require__(9298);
/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    var _a, _b, _c;
    if (partialTheme === void 0) { partialTheme = {}; }
    var mergedTheme = utilities_1.merge({}, theme, partialTheme, {
        semanticColors: makeSemanticColors_1.getSemanticColors(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _d = Object.keys(mergedTheme.fonts); _i < _d.length; _i++) {
            var fontStyle = _d[_i];
            mergedTheme.fonts[fontStyle] = utilities_1.merge(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_c = partialTheme === null || partialTheme === void 0 ? void 0 : partialTheme.fonts) === null || _c === void 0 ? void 0 : _c[fontStyle]);
        }
    }
    return mergedTheme;
}
exports.mergeThemes = mergeThemes;
//# sourceMappingURL=mergeThemes.js.map

/***/ }),

/***/ 2913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationStyles = exports.AnimationVariables = void 0;
var merge_styles_1 = __webpack_require__(8376);
/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = merge_styles_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var FADE_OUT = merge_styles_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0, visibility: 'hidden' },
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = merge_styles_1.keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_DOWN98 = merge_styles_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = merge_styles_1.keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_UP103 = merge_styles_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' },
});
var ROTATE90 = merge_styles_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' },
});
var ROTATE_N90 = merge_styles_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' },
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
exports.AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4,
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
exports.AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2),
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both',
    };
}
function _createSlideInX(fromX) {
    return merge_styles_1.keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideInY(fromY) {
    return merge_styles_1.keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideOutX(toX) {
    return merge_styles_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" },
    });
}
function _createSlideOutY(toY) {
    return merge_styles_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" },
    });
}
//# sourceMappingURL=AnimationStyles.js.map

/***/ }),

/***/ 3177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MotionAnimations = exports.MotionTimings = exports.MotionDurations = void 0;
var merge_styles_1 = __webpack_require__(8376);
var fadeInAnimationName = merge_styles_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var fadeOutAnimationName = merge_styles_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
});
var scaleDownInAnimationName = merge_styles_1.keyframes({
    from: { transform: 'scale3d(1.15, 1.15, 1)' },
    to: { transform: 'scale3d(1, 1, 1)' },
});
var scaleDownOutAnimationName = merge_styles_1.keyframes({
    from: { transform: 'scale3d(1, 1, 1)' },
    to: { transform: 'scale3d(0.9, 0.9, 1)' },
});
var slideLeftOutAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(-48px, 0, 0)' },
});
var slideRightOutAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(48px, 0, 0)' },
});
var slideLeftInAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(48px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideRightInAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(-48px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideUpOutAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(0, -48px, 0)' },
});
var slideDownOutAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(0, 48px, 0)' },
});
var slideUpInAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(0, 48px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideDownInAnimationName = merge_styles_1.keyframes({
    from: { transform: 'translate3d(0, -48px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var MotionDurations;
(function (MotionDurations) {
    MotionDurations.duration1 = '100ms';
    MotionDurations.duration2 = '200ms';
    MotionDurations.duration3 = '300ms';
    MotionDurations.duration4 = '400ms';
})(MotionDurations = exports.MotionDurations || (exports.MotionDurations = {}));
var MotionTimings;
(function (MotionTimings) {
    MotionTimings.accelerate = 'cubic-bezier(0.9, 0.1, 1, 0.2)';
    MotionTimings.decelerate = 'cubic-bezier(0.1, 0.9, 0.2, 1)';
    MotionTimings.linear = 'cubic-bezier(0, 0, 1, 1)';
    MotionTimings.standard = 'cubic-bezier(0.8, 0, 0.2, 1)';
})(MotionTimings = exports.MotionTimings || (exports.MotionTimings = {}));
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return animationName + " " + animationDuration + " " + animationTimingFunction;
}
var MotionAnimations;
(function (MotionAnimations) {
    MotionAnimations.fadeIn = _createAnimation(fadeInAnimationName, MotionDurations.duration1, MotionTimings.linear);
    MotionAnimations.fadeOut = _createAnimation(fadeOutAnimationName, MotionDurations.duration1, MotionTimings.linear);
    MotionAnimations.scaleDownIn = _createAnimation(scaleDownInAnimationName, MotionDurations.duration3, MotionTimings.decelerate);
    MotionAnimations.scaleDownOut = _createAnimation(scaleDownOutAnimationName, MotionDurations.duration3, MotionTimings.decelerate);
    MotionAnimations.slideLeftOut = _createAnimation(slideLeftOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideRightOut = _createAnimation(slideRightOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideLeftIn = _createAnimation(slideLeftInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideRightIn = _createAnimation(slideRightInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideUpOut = _createAnimation(slideUpOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideDownOut = _createAnimation(slideDownOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideUpIn = _createAnimation(slideUpInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideDownIn = _createAnimation(slideDownInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
})(MotionAnimations = exports.MotionAnimations || (exports.MotionAnimations = {}));
//# sourceMappingURL=FluentMotion.js.map

/***/ }),

/***/ 7861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(3177), exports);
tslib_1.__exportStar(__webpack_require__(2913), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4813:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultSpacing = void 0;
exports.DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};
//# sourceMappingURL=DefaultSpacing.js.map

/***/ }),

/***/ 896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultSpacing = void 0;
var DefaultSpacing_1 = __webpack_require__(4813);
Object.defineProperty(exports, "DefaultSpacing", ({ enumerable: true, get: function () { return DefaultSpacing_1.DefaultSpacing; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Theme.js.map

/***/ }),

/***/ 8230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(655);
tslib_1.__exportStar(__webpack_require__(576), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSemanticColors = exports.makeSemanticColors = void 0;
var tslib_1 = __webpack_require__(655);
/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = tslib_1.__assign({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
exports.makeSemanticColors = makeSemanticColors;
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var result = {};
    // map palette
    var _a = p || {}, white = _a.white, black = _a.black, themePrimary = _a.themePrimary, themeDark = _a.themeDark, themeDarker = _a.themeDarker, themeDarkAlt = _a.themeDarkAlt, themeLighter = _a.themeLighter, neutralLight = _a.neutralLight, neutralLighter = _a.neutralLighter, neutralDark = _a.neutralDark, neutralQuaternary = _a.neutralQuaternary, neutralQuaternaryAlt = _a.neutralQuaternaryAlt, neutralPrimary = _a.neutralPrimary, neutralSecondary = _a.neutralSecondary, neutralSecondaryAlt = _a.neutralSecondaryAlt, neutralTertiary = _a.neutralTertiary, neutralTertiaryAlt = _a.neutralTertiaryAlt, neutralLighterAlt = _a.neutralLighterAlt, accent = _a.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = (s === null || s === void 0 ? void 0 : s.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if (e === null || e === void 0 ? void 0 : e.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && (e === null || e === void 0 ? void 0 : e.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = tslib_1.__assign(tslib_1.__assign({}, result), s);
    return result;
}
exports.getSemanticColors = getSemanticColors;
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}
//# sourceMappingURL=makeSemanticColors.js.map

/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.
var set_version_1 = __webpack_require__(4984);
set_version_1.setVersion('@fluentui/theme', '2.6.6');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 3482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Async = void 0;
var getWindow_1 = __webpack_require__(7746);
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            clearTimeout(id);
            delete this._timeoutIds[id];
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback, targetElement) {
        var _this = this;
        var immediateId = 0;
        var win = getWindow_1.getWindow(targetElement);
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = win.setTimeout(setImmediateCallback, 0);
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    Async.prototype.clearImmediate = function (id, targetElement) {
        var win = getWindow_1.getWindow(targetElement);
        if (this._immediateIds && this._immediateIds[id]) {
            win.clearTimeout(id);
            delete this._immediateIds[id];
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            clearInterval(id);
            delete this._intervalIds[id];
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = Date.now();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = Date.now();
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = Date.now();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(Date.now());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(Date.now());
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback, targetElement) {
        var _this = this;
        var animationFrameId = 0;
        var win = getWindow_1.getWindow(targetElement);
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = win.requestAnimationFrame
                ? win.requestAnimationFrame(animationFrameCallback)
                : win.setTimeout(animationFrameCallback, 0);
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id, targetElement) {
        var win = getWindow_1.getWindow(targetElement);
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
            delete this._animationFrameIds[id];
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;
//# sourceMappingURL=Async.js.map

/***/ }),

/***/ 2418:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoScroll = void 0;
var EventGroup_1 = __webpack_require__(9797);
var scroll_1 = __webpack_require__(9264);
var getRect_1 = __webpack_require__(7978);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 * {@docCategory AutoScroll}
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = getRect_1.getRect(this._scrollableParent);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (ev) {
        if (!this._scrollRect) {
            return;
        }
        var clientX;
        var clientY;
        if ('clientX' in ev) {
            clientX = ev.clientX;
            clientY = ev.clientY;
        }
        else {
            clientX = ev.touches[0].clientX;
            clientY = ev.touches[0].clientY;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollRectLeft = this._scrollRect.left;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER;
        var scrollClientRight = scrollRectLeft + this._scrollRect.width - SCROLL_GUTTER;
        // variables to use for alternating scroll direction
        var scrollRect;
        var clientDirection;
        var scrollClient;
        // if either of these conditions are met we are scrolling vertically else horizontally
        if (clientY < scrollRectTop + SCROLL_GUTTER || clientY > scrollClientBottom) {
            clientDirection = clientY;
            scrollRect = scrollRectTop;
            scrollClient = scrollClientBottom;
            this._isVerticalScroll = true;
        }
        else {
            clientDirection = clientX;
            scrollRect = scrollRectLeft;
            scrollClient = scrollClientRight;
            this._isVerticalScroll = false;
        }
        // calculate scroll velocity and direction
        if (clientDirection < scrollRect + SCROLL_GUTTER) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER - (clientDirection - scrollRect)) / SCROLL_GUTTER));
        }
        else if (clientDirection > scrollClient) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientDirection - scrollClient) / SCROLL_GUTTER));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            if (this._isVerticalScroll) {
                this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
            }
            else {
                this._scrollableParent.scrollLeft += Math.round(this._scrollVelocity);
            }
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;
//# sourceMappingURL=AutoScroll.js.map

/***/ }),

/***/ 7442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nullRender = exports.BaseComponent = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var Async_1 = __webpack_require__(3482);
var EventGroup_1 = __webpack_require__(9797);
var warnConditionallyRequiredProps_1 = __webpack_require__(9931);
var warnMutuallyExclusive_1 = __webpack_require__(7269);
var warnDeprecations_1 = __webpack_require__(8100);
/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // eslint-disable-next-line deprecation/deprecation
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount',
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warnDeprecations_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warnMutuallyExclusive_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warnConditionallyRequiredProps_1.warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
// eslint-disable-next-line deprecation/deprecation
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
// eslint-disable-next-line deprecation/deprecation
function _makeSafe(obj, prototype, methodName) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    if (classMethod || prototypeMethod) {
        obj[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /* eslint-enable @typescript-eslint/no-explicit-any */
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, args);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, args);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}
exports.nullRender = nullRender;
//# sourceMappingURL=BaseComponent.js.map

/***/ }),

/***/ 7065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DelayedRender = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var getWindow_1 = __webpack_require__(7746);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib_1.__extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: getWindow_1.getWindow() === undefined,
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = window.setTimeout(function () {
            _this.setState({
                isRendered: true,
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0,
    };
    return DelayedRender;
}(React.Component));
exports.DelayedRender = DelayedRender;
//# sourceMappingURL=DelayedRender.js.map

/***/ }),

/***/ 9797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventGroup = void 0;
var object_1 = __webpack_require__(8164);
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (typeof document !== 'undefined' && document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                object_1.assign(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
            }
            else if (typeof document !== 'undefined' && document.createEventObject) {
                // IE8
                var evObj = document.createEventObject(eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /**
     * On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options,
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0,
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    target.addEventListener(eventName, processElementEvent, options);
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
exports.EventGroup = EventGroup;
//# sourceMappingURL=EventGroup.js.map

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FabricPerformance = void 0;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 * {@docCategory FabricPerformance}
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: [],
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end,
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());
exports.FabricPerformance = FabricPerformance;
//# sourceMappingURL=FabricPerformance.js.map

/***/ }),

/***/ 4526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalSettings = void 0;
var getWindow_1 = __webpack_require__(7746);
/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = getWindow_1.getWindow();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),

/***/ 1555:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyCodes = void 0;
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
exports.KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    colon: 58,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};
//# sourceMappingURL=KeyCodes.js.map

/***/ }),

/***/ 8602:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // Fixing to 4 decimal places because it allows enough precision and will handle cases when something
        // should be rounded, like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map

/***/ }),

/***/ 6689:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appendFunction = void 0;
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}
exports.appendFunction = appendFunction;
//# sourceMappingURL=appendFunction.js.map

/***/ }),

/***/ 6813:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeAriaAttributeValues = void 0;
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}
exports.mergeAriaAttributeValues = mergeAriaAttributeValues;
//# sourceMappingURL=aria.js.map

/***/ }),

/***/ 8843:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arraysEqual = exports.flatten = exports.addElementAtIndex = exports.replaceElement = exports.removeIndex = exports.toMatrix = exports.createArray = exports.find = exports.findIndex = void 0;
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 * @param fromIndex - Optional index to start from (defaults to 0)
 */
function findIndex(array, cb, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var index = -1;
    for (var i = fromIndex; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
exports.find = find;
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.toMatrix = toMatrix;
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
exports.removeIndex = removeIndex;
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
exports.replaceElement = replaceElement;
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
exports.addElementAtIndex = addElementAtIndex;
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
exports.flatten = flatten;
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
exports.arraysEqual = arraysEqual;
//# sourceMappingURL=array.js.map

/***/ }),

/***/ 3944:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.asAsync = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        tslib_1.__extends(Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined,
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = tslib_1.__rest(_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? (React.createElement(Component, tslib_1.__assign(tslib_1.__assign({}, rest), { ref: forwardedRef }))) : Placeholder ? (React.createElement(Placeholder, null)) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent,
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(React.Component));
    return React.forwardRef(function (props, ref) { return React.createElement(Async, tslib_1.__assign({}, props, { forwardedRef: ref })); });
}
exports.asAsync = asAsync;
//# sourceMappingURL=asAsync.js.map

/***/ }),

/***/ 5463:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertNever = void 0;
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
exports.assertNever = assertNever;
//# sourceMappingURL=assertNever.js.map

/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.classNamesFunction = void 0;
var merge_styles_1 = __webpack_require__(8376);
var rtl_1 = __webpack_require__(1820);
var dom_1 = __webpack_require__(1022);
var MAX_CACHE_COUNT = 50;
var DEFAULT_SPECIFICITY_MULTIPLIER = 5;
var _memoizedClassNames = 0;
var stylesheet = merge_styles_1.Stylesheet.getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
/* eslint-disable @typescript-eslint/no-explicit-any */
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var retVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        var _a;
        if (styleProps === void 0) { styleProps = {}; }
        // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
        // If there is also no style overrides, we can skip merge styles completely and
        // simply return the result from the style funcion.
        if (options.useStaticStyles &&
            typeof styleFunctionOrObject === 'function' &&
            styleFunctionOrObject.__noStyleOverride__) {
            return styleFunctionOrObject(styleProps);
        }
        getClassNamesCount++;
        var current = map;
        var theme = styleProps.theme;
        var rtl = theme && theme.rtl !== undefined ? theme.rtl : rtl_1.getRTL();
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            map = new Map();
            styleCalcCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(map, styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[retVal]) {
            if (styleFunctionOrObject === undefined) {
                current[retVal] = {};
            }
            else {
                current[retVal] = merge_styles_1.mergeCssSets([
                    (typeof styleFunctionOrObject === 'function'
                        ? styleFunctionOrObject(styleProps)
                        : styleFunctionOrObject),
                ], { rtl: !!rtl, specificityMultiplier: options.useStaticStyles ? DEFAULT_SPECIFICITY_MULTIPLIER : undefined });
            }
            if (!disableCaching) {
                styleCalcCount++;
            }
        }
        if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
            var win = dom_1.getWindow();
            if ((_a = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _a === void 0 ? void 0 : _a.enableClassNameCacheFullWarning) {
                // eslint-disable-next-line no-console
                console.warn("Styles are being recalculated too frequently. Cache miss rate is " + styleCalcCount + "/" + getClassNamesCount + ".");
                // eslint-disable-next-line no-console
                console.trace();
            }
            map.clear();
            styleCalcCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
        }
        // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[retVal];
    };
    return getClassNames;
}
exports.classNamesFunction = classNamesFunction;
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
        var cachedInputsFromStyled = inputs.__cachedInputs__;
        if (cachedInputsFromStyled) {
            // The styled helper will generate the styles function and will attach the cached
            // inputs (consisting of the default styles, customzied styles, and user provided styles.)
            // These should be used as cache keys for deriving the memoized value.
            for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
                var input = _a[_i];
                current = _traverseEdge(current, input);
            }
        }
        else {
            current = _traverseEdge(current, inputs);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}
//# sourceMappingURL=classNamesFunction.js.map

/***/ }),

/***/ 5726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.composeComponentAs = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var memoize_1 = __webpack_require__(1519);
function createComposedComponent(outer) {
    var Outer = outer;
    var outerMemoizer = memoize_1.createMemoizer(function (inner) {
        if (outer === inner) {
            throw new Error('Attempted to compose a component with itself.');
        }
        var Inner = inner;
        var innerMemoizer = memoize_1.createMemoizer(function (defaultRender) {
            var InnerWithDefaultRender = function (innerProps) {
                return React.createElement(Inner, tslib_1.__assign({}, innerProps, { defaultRender: defaultRender }));
            };
            return InnerWithDefaultRender;
        });
        var OuterWithDefaultRender = function (outerProps) {
            var defaultRender = outerProps.defaultRender;
            return React.createElement(Outer, tslib_1.__assign({}, outerProps, { defaultRender: defaultRender ? innerMemoizer(defaultRender) : Inner }));
        };
        return OuterWithDefaultRender;
    });
    return outerMemoizer;
}
var componentAsMemoizer = memoize_1.createMemoizer(createComposedComponent);
/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */
function composeComponentAs(outer, inner) {
    return componentAsMemoizer(outer)(inner);
}
exports.composeComponentAs = composeComponentAs;
//# sourceMappingURL=composeComponentAs.js.map

/***/ }),

/***/ 4206:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isControlled = void 0;
/**
 * Determines whether a component is controlled.
 * @param props - Component props
 * @param valueProp - Prop containing the controlled value
 * @returns true if controlled, false if uncontrolled
 */
function isControlled(props, valueProp) {
    // React's built-in <input> considers a prop to be provided if its value is non-null/undefined.
    // Mirror that behavior here (rather than checking for just undefined).
    return props[valueProp] !== undefined && props[valueProp] !== null;
}
exports.isControlled = isControlled;
//# sourceMappingURL=controlled.js.map

/***/ }),

/***/ 6694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMergedRef = void 0;
var array_1 = __webpack_require__(8843);
/**
 * Set up a ref resolver function given internal state managed for the ref.
 * @param local Set
 */
var createResolver = function (local) { return function (newValue) {
    for (var _i = 0, _a = local.refs; _i < _a.length; _i++) {
        var ref = _a[_i];
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            // work around the immutability of the React.Ref type
            ref.current = newValue;
        }
    }
}; };
/**
 * Helper to merge refs from within class components.
 */
var createMergedRef = function (value) {
    var local = {
        refs: [],
    };
    return function () {
        var newRefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newRefs[_i] = arguments[_i];
        }
        if (!local.resolver || !array_1.arraysEqual(local.refs, newRefs)) {
            local.resolver = createResolver(local);
        }
        local.refs = newRefs;
        return local.resolver;
    };
};
exports.createMergedRef = createMergedRef;
//# sourceMappingURL=createMergedRef.js.map

/***/ }),

/***/ 1822:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.css = void 0;
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (var key in arg) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;
//# sourceMappingURL=css.js.map

/***/ }),

/***/ 3846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Customizations = void 0;
var tslib_1 = __webpack_require__(655);
var GlobalSettings_1 = __webpack_require__(4526);
var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = GlobalSettings_1.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_1.__assign(tslib_1.__assign({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_1.__assign(tslib_1.__assign({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());
exports.Customizations = Customizations;
//# sourceMappingURL=Customizations.js.map

/***/ }),

/***/ 9433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Customizer = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var Customizations_1 = __webpack_require__(3846);
var CustomizerContext_1 = __webpack_require__(3786);
var mergeCustomizations_1 = __webpack_require__(8336);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 *
 * @deprecated This component is deprecated for purpose of applying theme to components
 * as of `@fluentui/react` version 8. Use `ThemeProvider` for applying theme instead.
 */
var Customizer = /** @class */ (function (_super) {
    tslib_1.__extends(Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        Customizations_1.Customizations.observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        Customizations_1.Customizations.unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (React.createElement(CustomizerContext_1.CustomizerContext.Consumer, null, function (parentContext) {
            var newContext = mergeCustomizations_1.mergeCustomizations(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return React.createElement(CustomizerContext_1.CustomizerContext.Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(React.Component));
exports.Customizer = Customizer;
//# sourceMappingURL=Customizer.js.map

/***/ }),

/***/ 3786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomizerContext = void 0;
var React = __webpack_require__(7294);
exports.CustomizerContext = React.createContext({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});
//# sourceMappingURL=CustomizerContext.js.map

/***/ }),

/***/ 5954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.customizable = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var Customizations_1 = __webpack_require__(3846);
var hoistStatics_1 = __webpack_require__(7272);
var CustomizerContext_1 = __webpack_require__(3786);
var merge_styles_1 = __webpack_require__(8376);
function customizable(scope, fields, concatStyles) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function customizableFactory(ComposedComponent) {
        var _a;
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib_1.__extends(ComponentWithInjectedProps, _super);
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    _this._styleCache = {};
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_1.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_1.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (React.createElement(CustomizerContext_1.CustomizerContext.Consumer, null, function (context) {
                        var defaultProps = Customizations_1.Customizations.getSettings(fields, scope, context.customizations);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(tslib_1.__assign(tslib_1.__assign({}, defaultProps), componentProps));
                        }
                        // If concatStyles is true and custom styles have been defined compute those styles
                        if (concatStyles && defaultProps.styles) {
                            if (_this._styleCache.default !== defaultProps.styles ||
                                _this._styleCache.component !== componentProps.styles) {
                                var mergedStyles = merge_styles_1.concatStyleSets(defaultProps.styles, componentProps.styles);
                                _this._styleCache.default = defaultProps.styles;
                                _this._styleCache.component = componentProps.styles;
                                _this._styleCache.merged = mergedStyles;
                            }
                            return React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, componentProps, { styles: _this._styleCache.merged }));
                        }
                        return React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.displayName = 'Customized' + scope,
            _a);
        return hoistStatics_1.hoistStatics(ComposedComponent, resultClass);
    };
}
exports.customizable = customizable;
//# sourceMappingURL=customizable.js.map

/***/ }),

/***/ 8336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeCustomizations = void 0;
var mergeSettings_1 = __webpack_require__(61);
/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: mergeSettings_1.mergeSettings(customizations.settings, props.settings),
            scopedSettings: mergeSettings_1.mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true,
        },
    };
}
exports.mergeCustomizations = mergeCustomizations;
//# sourceMappingURL=mergeCustomizations.js.map

/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeScopedSettings = exports.mergeSettings = void 0;
var tslib_1 = __webpack_require__(655);
/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
exports.mergeSettings = mergeSettings;
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
exports.mergeScopedSettings = mergeScopedSettings;
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? tslib_1.__assign(tslib_1.__assign({}, settings), newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib_1.__assign({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib_1.__assign(tslib_1.__assign({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}
//# sourceMappingURL=mergeSettings.js.map

/***/ }),

/***/ 9640:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCustomizationSettings = void 0;
var React = __webpack_require__(7294);
var Customizations_1 = __webpack_require__(3846);
var CustomizerContext_1 = __webpack_require__(3786);
/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
function useCustomizationSettings(properties, scopeName) {
    var forceUpdate = useForceUpdate();
    var customizations = React.useContext(CustomizerContext_1.CustomizerContext).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    React.useEffect(function () {
        if (!inCustomizerContext) {
            Customizations_1.Customizations.observe(forceUpdate);
        }
        return function () {
            if (!inCustomizerContext) {
                Customizations_1.Customizations.unobserve(forceUpdate);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude forceUpdate
    }, [inCustomizerContext]);
    return Customizations_1.Customizations.getSettings(properties, scopeName, customizations);
}
exports.useCustomizationSettings = useCustomizationSettings;
function useForceUpdate() {
    var _a = React.useState(0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}
//# sourceMappingURL=useCustomizationSettings.js.map

/***/ }),

/***/ 1022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setVirtualParent = exports.setPortalAttribute = exports.DATA_PORTAL_ATTRIBUTE = exports.raiseClick = exports.portalContainsElement = exports.on = exports.isVirtualElement = exports.getWindow = exports.getVirtualParent = exports.getRect = exports.getParent = exports.getFirstVisibleElementFromSelector = exports.getDocument = exports.getChildren = exports.findElementRecursive = exports.elementContainsAttribute = exports.elementContains = void 0;
var elementContains_1 = __webpack_require__(1527);
Object.defineProperty(exports, "elementContains", ({ enumerable: true, get: function () { return elementContains_1.elementContains; } }));
var elementContainsAttribute_1 = __webpack_require__(6012);
Object.defineProperty(exports, "elementContainsAttribute", ({ enumerable: true, get: function () { return elementContainsAttribute_1.elementContainsAttribute; } }));
var findElementRecursive_1 = __webpack_require__(7220);
Object.defineProperty(exports, "findElementRecursive", ({ enumerable: true, get: function () { return findElementRecursive_1.findElementRecursive; } }));
var getChildren_1 = __webpack_require__(1933);
Object.defineProperty(exports, "getChildren", ({ enumerable: true, get: function () { return getChildren_1.getChildren; } }));
var getDocument_1 = __webpack_require__(7611);
Object.defineProperty(exports, "getDocument", ({ enumerable: true, get: function () { return getDocument_1.getDocument; } }));
var getFirstVisibleElementFromSelector_1 = __webpack_require__(9632);
Object.defineProperty(exports, "getFirstVisibleElementFromSelector", ({ enumerable: true, get: function () { return getFirstVisibleElementFromSelector_1.getFirstVisibleElementFromSelector; } }));
var getParent_1 = __webpack_require__(9404);
Object.defineProperty(exports, "getParent", ({ enumerable: true, get: function () { return getParent_1.getParent; } }));
var getRect_1 = __webpack_require__(7978);
Object.defineProperty(exports, "getRect", ({ enumerable: true, get: function () { return getRect_1.getRect; } }));
var getVirtualParent_1 = __webpack_require__(7370);
Object.defineProperty(exports, "getVirtualParent", ({ enumerable: true, get: function () { return getVirtualParent_1.getVirtualParent; } }));
var getWindow_1 = __webpack_require__(7746);
Object.defineProperty(exports, "getWindow", ({ enumerable: true, get: function () { return getWindow_1.getWindow; } }));
var isVirtualElement_1 = __webpack_require__(4373);
Object.defineProperty(exports, "isVirtualElement", ({ enumerable: true, get: function () { return isVirtualElement_1.isVirtualElement; } }));
var on_1 = __webpack_require__(2765);
Object.defineProperty(exports, "on", ({ enumerable: true, get: function () { return on_1.on; } }));
var portalContainsElement_1 = __webpack_require__(507);
Object.defineProperty(exports, "portalContainsElement", ({ enumerable: true, get: function () { return portalContainsElement_1.portalContainsElement; } }));
var raiseClick_1 = __webpack_require__(9375);
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "raiseClick", ({ enumerable: true, get: function () { return raiseClick_1.raiseClick; } }));
var setPortalAttribute_1 = __webpack_require__(8590);
Object.defineProperty(exports, "DATA_PORTAL_ATTRIBUTE", ({ enumerable: true, get: function () { return setPortalAttribute_1.DATA_PORTAL_ATTRIBUTE; } }));
Object.defineProperty(exports, "setPortalAttribute", ({ enumerable: true, get: function () { return setPortalAttribute_1.setPortalAttribute; } }));
var setVirtualParent_1 = __webpack_require__(6846);
Object.defineProperty(exports, "setVirtualParent", ({ enumerable: true, get: function () { return setVirtualParent_1.setVirtualParent; } }));
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ 1527:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementContains = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "elementContains", ({ enumerable: true, get: function () { return dom_utilities_1.elementContains; } }));
//# sourceMappingURL=elementContains.js.map

/***/ }),

/***/ 6012:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementContainsAttribute = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "elementContainsAttribute", ({ enumerable: true, get: function () { return dom_utilities_1.elementContainsAttribute; } }));
//# sourceMappingURL=elementContainsAttribute.js.map

/***/ }),

/***/ 7220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findElementRecursive = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "findElementRecursive", ({ enumerable: true, get: function () { return dom_utilities_1.findElementRecursive; } }));
//# sourceMappingURL=findElementRecursive.js.map

/***/ }),

/***/ 1933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getChildren = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "getChildren", ({ enumerable: true, get: function () { return dom_utilities_1.getChildren; } }));
//# sourceMappingURL=getChildren.js.map

/***/ }),

/***/ 7611:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDocument = void 0;
var setSSR_1 = __webpack_require__(4934);
/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
function getDocument(rootElement) {
    if (setSSR_1._isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
//# sourceMappingURL=getDocument.js.map

/***/ }),

/***/ 9632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFirstVisibleElementFromSelector = void 0;
var focus_1 = __webpack_require__(8224);
var getDocument_1 = __webpack_require__(7611);
/**
 * Gets the first visible element that matches the given selector
 * @param selector - The selector to use to find potential visible elements
 * @returns The first visible element that matches the selector, otherwise undefined
 *
 * @public
 */
function getFirstVisibleElementFromSelector(selector) {
    var elements = getDocument_1.getDocument().querySelectorAll(selector);
    // Iterate across the elements that match the selector and return the first visible/non-hidden element
    return Array.from(elements).find(function (element) { return focus_1.isElementVisibleAndNotHidden(element); });
}
exports.getFirstVisibleElementFromSelector = getFirstVisibleElementFromSelector;
//# sourceMappingURL=getFirstVisibleElementFromSelector.js.map

/***/ }),

/***/ 9404:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getParent = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "getParent", ({ enumerable: true, get: function () { return dom_utilities_1.getParent; } }));
//# sourceMappingURL=getParent.js.map

/***/ }),

/***/ 7978:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRect = void 0;
/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight,
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
//# sourceMappingURL=getRect.js.map

/***/ }),

/***/ 7370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVirtualParent = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "getVirtualParent", ({ enumerable: true, get: function () { return dom_utilities_1.getVirtualParent; } }));
//# sourceMappingURL=getVirtualParent.js.map

/***/ }),

/***/ 7746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWindow = void 0;
var setSSR_1 = __webpack_require__(4934);
var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (setSSR_1._isSSR || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}
exports.getWindow = getWindow;
//# sourceMappingURL=getWindow.js.map

/***/ }),

/***/ 4373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isVirtualElement = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "isVirtualElement", ({ enumerable: true, get: function () { return dom_utilities_1.isVirtualElement; } }));
//# sourceMappingURL=isVirtualElement.js.map

/***/ }),

/***/ 2765:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.on = void 0;
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}
exports.on = on;
//# sourceMappingURL=on.js.map

/***/ }),

/***/ 507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.portalContainsElement = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "portalContainsElement", ({ enumerable: true, get: function () { return dom_utilities_1.portalContainsElement; } }));
//# sourceMappingURL=portalContainsElement.js.map

/***/ }),

/***/ 9375:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.raiseClick = void 0;
/** Raises a click event.
 * @deprecated Moved to `FocusZone` component since it was the only place internally using this function.
 */
function raiseClick(target) {
    var event = createNewEvent('MouseEvents');
    event.initEvent('click', true, true);
    target.dispatchEvent(event);
}
exports.raiseClick = raiseClick;
function createNewEvent(eventName) {
    var event;
    if (typeof Event === 'function') {
        // Chrome, Opera, Firefox
        event = new Event(eventName);
    }
    else {
        // IE
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}
//# sourceMappingURL=raiseClick.js.map

/***/ }),

/***/ 8590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPortalAttribute = exports.DATA_PORTAL_ATTRIBUTE = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "DATA_PORTAL_ATTRIBUTE", ({ enumerable: true, get: function () { return dom_utilities_1.DATA_PORTAL_ATTRIBUTE; } }));
Object.defineProperty(exports, "setPortalAttribute", ({ enumerable: true, get: function () { return dom_utilities_1.setPortalAttribute; } }));
//# sourceMappingURL=setPortalAttribute.js.map

/***/ }),

/***/ 4934:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setSSR = exports._isSSR = void 0;
exports._isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    exports._isSSR = isEnabled;
}
exports.setSSR = setSSR;
//# sourceMappingURL=setSSR.js.map

/***/ }),

/***/ 6846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setVirtualParent = void 0;
var dom_utilities_1 = __webpack_require__(2970);
Object.defineProperty(exports, "setVirtualParent", ({ enumerable: true, get: function () { return dom_utilities_1.setVirtualParent; } }));
//# sourceMappingURL=setVirtualParent.js.map

/***/ }),

/***/ 8425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendComponent = void 0;
var appendFunction_1 = __webpack_require__(6689);
/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parent[name_1] = appendFunction_1.appendFunction(parent, parent[name_1], methods[name_1]);
        }
    }
}
exports.extendComponent = extendComponent;
//# sourceMappingURL=extendComponent.js.map

/***/ }),

/***/ 8224:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElementIndexPath = exports.getFocusableByIndexPath = exports.focusAsync = exports.shouldWrapFocus = exports.doesElementContainFocus = exports.isElementFocusSubZone = exports.isElementFocusZone = exports.isElementTabbable = exports.isElementVisibleAndNotHidden = exports.isElementVisible = exports.getNextElement = exports.getPreviousElement = exports.focusFirstChild = exports.getLastTabbable = exports.getFirstTabbable = exports.getLastFocusable = exports.getFirstFocusable = void 0;
var elementContainsAttribute_1 = __webpack_require__(6012);
var elementContains_1 = __webpack_require__(1527);
var getParent_1 = __webpack_require__(9404);
var getWindow_1 = __webpack_require__(7746);
var getDocument_1 = __webpack_require__(7611);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Gets the first tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
exports.getFirstTabbable = getFirstTabbable;
/**
 * Gets the last tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
exports.getLastTabbable = getLastTabbable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
exports.getNextElement = getNextElement;
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
/**
 * Determines if an element is visible and not hidden
 * @param element - Element to check
 * @returns Returns true if the given element is visible and not hidden
 *
 * @public
 */
function isElementVisibleAndNotHidden(element) {
    return (!!element &&
        isElementVisible(element) &&
        !element.hidden &&
        window.getComputedStyle(element).visibility !== 'hidden');
}
exports.isElementVisibleAndNotHidden = isElementVisibleAndNotHidden;
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            element.tagName === 'SELECT' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
exports.isElementTabbable = isElementTabbable;
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
exports.isElementFocusZone = isElementFocusZone;
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
exports.isElementFocusSubZone = isElementFocusSubZone;
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = getDocument_1.getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && elementContains_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return elementContainsAttribute_1.elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
exports.shouldWrapFocus = shouldWrapFocus;
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = getWindow_1.getWindow(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
exports.focusAsync = focusAsync;
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
exports.getFocusableByIndexPath = getFocusableByIndexPath;
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = getParent_1.getParent(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}
exports.getElementIndexPath = getElementIndexPath;
//# sourceMappingURL=focus.js.map

/***/ }),

/***/ 7937:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetIds = exports.getId = void 0;
var getWindow_1 = __webpack_require__(7746);
var merge_styles_1 = __webpack_require__(8376);
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _global = getWindow_1.getWindow() || {};
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
var _initializedStylesheetResets = false;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    if (!_initializedStylesheetResets) {
        // Configure ids to reset on stylesheet resets.
        var stylesheet = merge_styles_1.Stylesheet.getInstance();
        if (stylesheet && stylesheet.onReset) {
            stylesheet.onReset(resetIds);
        }
        _initializedStylesheetResets = true;
    }
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix === undefined ? DEFAULT_ID_STRING : prefix) + index;
}
exports.getId = getId;
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
exports.resetIds = resetIds;
//# sourceMappingURL=getId.js.map

/***/ }),

/***/ 8863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNativeElementProps = void 0;
var properties_1 = __webpack_require__(1850);
var nativeElementMap = {
    label: properties_1.labelProperties,
    audio: properties_1.audioProperties,
    video: properties_1.videoProperties,
    ol: properties_1.olProperties,
    li: properties_1.liProperties,
    a: properties_1.anchorProperties,
    button: properties_1.buttonProperties,
    input: properties_1.inputProperties,
    textarea: properties_1.textAreaProperties,
    select: properties_1.selectProperties,
    option: properties_1.optionProperties,
    table: properties_1.tableProperties,
    tr: properties_1.trProperties,
    th: properties_1.thProperties,
    td: properties_1.tdProperties,
    colGroup: properties_1.colGroupProperties,
    col: properties_1.colProperties,
    form: properties_1.formProperties,
    iframe: properties_1.iframeProperties,
    img: properties_1.imgProperties,
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    var allowedPropNames = (tagName && nativeElementMap[tagName]) || properties_1.htmlElementProperties;
    return properties_1.getNativeProps(props, allowedPropNames, excludedPropNames);
}
exports.getNativeElementProps = getNativeElementProps;
//# sourceMappingURL=getNativeElementProps.js.map

/***/ }),

/***/ 4085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPropsWithDefaults = void 0;
var tslib_1 = __webpack_require__(655);
/**
 * Function to apply default values to a component props object. This function is intended for function components,
 * to maintain parity with the `defaultProps` feature of class components. It accounts for properties that are
 * specified, but undefined.
 * @param defaultProps- An object with default values for various properties
 * @param propsWithoutDefaults- The props object passed into the component
 */
function getPropsWithDefaults(defaultProps, propsWithoutDefaults) {
    var props = tslib_1.__assign({}, propsWithoutDefaults);
    for (var _i = 0, _a = Object.keys(defaultProps); _i < _a.length; _i++) {
        var key = _a[_i];
        if (props[key] === undefined) {
            props[key] = defaultProps[key];
        }
    }
    return props;
}
exports.getPropsWithDefaults = getPropsWithDefaults;
//# sourceMappingURL=getPropsWithDefaults.js.map

/***/ }),

/***/ 7998:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unhoistMethods = exports.hoistMethods = void 0;
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
destination, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            destination[methodName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                source[methodName].apply(source, args);
            };
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;
//# sourceMappingURL=hoist.js.map

/***/ }),

/***/ 7272:
/***/ ((__unused_webpack_module, exports) => {


/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hoistStatics = void 0;
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
exports.hoistStatics = hoistStatics;
//# sourceMappingURL=hoistStatics.js.map

/***/ }),

/***/ 4478:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isIE11 = void 0;
var getWindow_1 = __webpack_require__(7746);
var isIE11 = function () {
    var _a;
    var win = getWindow_1.getWindow();
    if (!((_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent)) {
        return false;
    }
    return win.navigator.userAgent.indexOf('rv:11.0') > -1;
};
exports.isIE11 = isIE11;
//# sourceMappingURL=ie11Detector.js.map

/***/ }),

/***/ 254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.raiseClick = exports.portalContainsElement = exports.on = exports.isVirtualElement = exports.getWindow = exports.getVirtualParent = exports.getRect = exports.getParent = exports.getFirstVisibleElementFromSelector = exports.getDocument = exports.getChildren = exports.findElementRecursive = exports.elementContainsAttribute = exports.elementContains = exports.DATA_PORTAL_ATTRIBUTE = exports.mergeSettings = exports.mergeScopedSettings = exports.mergeCustomizations = exports.useCustomizationSettings = exports.customizable = exports.CustomizerContext = exports.Customizer = exports.Customizations = exports.css = exports.isControlled = exports.composeComponentAs = exports.classNamesFunction = exports.assertNever = exports.asAsync = exports.toMatrix = exports.replaceElement = exports.removeIndex = exports.flatten = exports.findIndex = exports.find = exports.createArray = exports.arraysEqual = exports.addElementAtIndex = exports.mergeAriaAttributeValues = exports.appendFunction = exports.Rectangle = exports.KeyCodes = exports.GlobalSettings = exports.FabricPerformance = exports.EventGroup = exports.DelayedRender = exports.nullRender = exports.BaseComponent = exports.AutoScroll = exports.Async = void 0;
exports.mapEnumByName = exports.filteredAssign = exports.assign = exports.modalize = exports.isIOS = exports.merge = exports.setMemoizeWeakMap = exports.resetMemoizations = exports.memoizeFunction = exports.memoize = exports.createMemoizer = exports.precisionRound = exports.getDistanceBetweenPoints = exports.fitContentToBounds = exports.calculatePrecision = exports.setLanguage = exports.getLanguage = exports.isDirectionalKeyCode = exports.addDirectionalKeyCode = exports.getInitials = exports.useFocusRects = exports.FocusRects = exports.initializeFocusRects = exports.initializeComponentRef = exports.hoistStatics = exports.unhoistMethods = exports.hoistMethods = exports.getNativeElementProps = exports.resetIds = exports.getId = exports.shouldWrapFocus = exports.isElementVisibleAndNotHidden = exports.isElementVisible = exports.isElementTabbable = exports.isElementFocusZone = exports.isElementFocusSubZone = exports.getPreviousElement = exports.getNextElement = exports.getLastTabbable = exports.getLastFocusable = exports.getFocusableByIndexPath = exports.getFirstTabbable = exports.getFirstFocusable = exports.getElementIndexPath = exports.focusFirstChild = exports.focusAsync = exports.doesElementContainFocus = exports.extendComponent = exports.setVirtualParent = exports.setPortalAttribute = void 0;
exports.SELECTION_ITEMS_CHANGE = exports.SELECTION_CHANGE = exports.getScrollbarWidth = exports.findScrollableParent = exports.enableBodyScroll = exports.disableBodyScroll = exports.allowScrollOnElement = exports.allowOverscrollOnElement = exports.DATA_IS_SCROLLABLE_ATTRIBUTE = exports.safeSetTimeout = exports.safeRequestAnimationFrame = exports.setRTL = exports.getRTLSafeKeyCode = exports.getRTL = exports.setBaseUrl = exports.getResourceUrl = exports.composeRenderFunction = exports.videoProperties = exports.trProperties = exports.thProperties = exports.textAreaProperties = exports.tdProperties = exports.tableProperties = exports.selectProperties = exports.optionProperties = exports.olProperties = exports.liProperties = exports.labelProperties = exports.inputProperties = exports.imgProperties = exports.imageProperties = exports.iframeProperties = exports.htmlElementProperties = exports.getNativeProps = exports.formProperties = exports.divProperties = exports.colProperties = exports.colGroupProperties = exports.buttonProperties = exports.baseElementProperties = exports.baseElementEvents = exports.audioProperties = exports.anchorProperties = exports.hasVerticalOverflow = exports.hasOverflow = exports.hasHorizontalOverflow = exports.isMac = exports.omit = exports.values = exports.shallowCompare = void 0;
exports.useIsomorphicLayoutEffect = exports.createMergedRef = exports.setSSR = exports.IsFocusVisibleClassName = exports.setFocusVisibility = exports.getPropsWithDefaults = exports.isIE11 = exports.warnMutuallyExclusive = exports.warnDeprecations = exports.warnControlledUsage = exports.warnConditionallyRequiredProps = exports.warn = exports.setWarningCallback = exports.resetControlledWarnings = exports.styled = exports.format = exports.SelectionMode = exports.SelectionDirection = exports.Selection = void 0;
var Async_1 = __webpack_require__(3482);
Object.defineProperty(exports, "Async", ({ enumerable: true, get: function () { return Async_1.Async; } }));
var AutoScroll_1 = __webpack_require__(2418);
Object.defineProperty(exports, "AutoScroll", ({ enumerable: true, get: function () { return AutoScroll_1.AutoScroll; } }));
var BaseComponent_1 = __webpack_require__(7442);
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "BaseComponent", ({ enumerable: true, get: function () { return BaseComponent_1.BaseComponent; } }));
Object.defineProperty(exports, "nullRender", ({ enumerable: true, get: function () { return BaseComponent_1.nullRender; } }));
var DelayedRender_1 = __webpack_require__(7065);
Object.defineProperty(exports, "DelayedRender", ({ enumerable: true, get: function () { return DelayedRender_1.DelayedRender; } }));
var EventGroup_1 = __webpack_require__(9797);
Object.defineProperty(exports, "EventGroup", ({ enumerable: true, get: function () { return EventGroup_1.EventGroup; } }));
var FabricPerformance_1 = __webpack_require__(141);
Object.defineProperty(exports, "FabricPerformance", ({ enumerable: true, get: function () { return FabricPerformance_1.FabricPerformance; } }));
var GlobalSettings_1 = __webpack_require__(4526);
Object.defineProperty(exports, "GlobalSettings", ({ enumerable: true, get: function () { return GlobalSettings_1.GlobalSettings; } }));
var KeyCodes_1 = __webpack_require__(1555);
Object.defineProperty(exports, "KeyCodes", ({ enumerable: true, get: function () { return KeyCodes_1.KeyCodes; } }));
var Rectangle_1 = __webpack_require__(8602);
Object.defineProperty(exports, "Rectangle", ({ enumerable: true, get: function () { return Rectangle_1.Rectangle; } }));
var appendFunction_1 = __webpack_require__(6689);
Object.defineProperty(exports, "appendFunction", ({ enumerable: true, get: function () { return appendFunction_1.appendFunction; } }));
var aria_1 = __webpack_require__(6813);
Object.defineProperty(exports, "mergeAriaAttributeValues", ({ enumerable: true, get: function () { return aria_1.mergeAriaAttributeValues; } }));
var array_1 = __webpack_require__(8843);
Object.defineProperty(exports, "addElementAtIndex", ({ enumerable: true, get: function () { return array_1.addElementAtIndex; } }));
Object.defineProperty(exports, "arraysEqual", ({ enumerable: true, get: function () { return array_1.arraysEqual; } }));
Object.defineProperty(exports, "createArray", ({ enumerable: true, get: function () { return array_1.createArray; } }));
Object.defineProperty(exports, "find", ({ enumerable: true, get: function () { return array_1.find; } }));
Object.defineProperty(exports, "findIndex", ({ enumerable: true, get: function () { return array_1.findIndex; } }));
Object.defineProperty(exports, "flatten", ({ enumerable: true, get: function () { return array_1.flatten; } }));
Object.defineProperty(exports, "removeIndex", ({ enumerable: true, get: function () { return array_1.removeIndex; } }));
Object.defineProperty(exports, "replaceElement", ({ enumerable: true, get: function () { return array_1.replaceElement; } }));
Object.defineProperty(exports, "toMatrix", ({ enumerable: true, get: function () { return array_1.toMatrix; } }));
var asAsync_1 = __webpack_require__(3944);
Object.defineProperty(exports, "asAsync", ({ enumerable: true, get: function () { return asAsync_1.asAsync; } }));
var assertNever_1 = __webpack_require__(5463);
Object.defineProperty(exports, "assertNever", ({ enumerable: true, get: function () { return assertNever_1.assertNever; } }));
var classNamesFunction_1 = __webpack_require__(248);
Object.defineProperty(exports, "classNamesFunction", ({ enumerable: true, get: function () { return classNamesFunction_1.classNamesFunction; } }));
var composeComponentAs_1 = __webpack_require__(5726);
Object.defineProperty(exports, "composeComponentAs", ({ enumerable: true, get: function () { return composeComponentAs_1.composeComponentAs; } }));
var controlled_1 = __webpack_require__(4206);
Object.defineProperty(exports, "isControlled", ({ enumerable: true, get: function () { return controlled_1.isControlled; } }));
var css_1 = __webpack_require__(1822);
Object.defineProperty(exports, "css", ({ enumerable: true, get: function () { return css_1.css; } }));
var Customizations_1 = __webpack_require__(3846);
Object.defineProperty(exports, "Customizations", ({ enumerable: true, get: function () { return Customizations_1.Customizations; } }));
var Customizer_1 = __webpack_require__(9433);
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "Customizer", ({ enumerable: true, get: function () { return Customizer_1.Customizer; } }));
var CustomizerContext_1 = __webpack_require__(3786);
Object.defineProperty(exports, "CustomizerContext", ({ enumerable: true, get: function () { return CustomizerContext_1.CustomizerContext; } }));
var customizable_1 = __webpack_require__(5954);
Object.defineProperty(exports, "customizable", ({ enumerable: true, get: function () { return customizable_1.customizable; } }));
var useCustomizationSettings_1 = __webpack_require__(9640);
Object.defineProperty(exports, "useCustomizationSettings", ({ enumerable: true, get: function () { return useCustomizationSettings_1.useCustomizationSettings; } }));
var mergeCustomizations_1 = __webpack_require__(8336);
Object.defineProperty(exports, "mergeCustomizations", ({ enumerable: true, get: function () { return mergeCustomizations_1.mergeCustomizations; } }));
var mergeSettings_1 = __webpack_require__(61);
Object.defineProperty(exports, "mergeScopedSettings", ({ enumerable: true, get: function () { return mergeSettings_1.mergeScopedSettings; } }));
Object.defineProperty(exports, "mergeSettings", ({ enumerable: true, get: function () { return mergeSettings_1.mergeSettings; } }));
var dom_1 = __webpack_require__(1022);
Object.defineProperty(exports, "DATA_PORTAL_ATTRIBUTE", ({ enumerable: true, get: function () { return dom_1.DATA_PORTAL_ATTRIBUTE; } }));
Object.defineProperty(exports, "elementContains", ({ enumerable: true, get: function () { return dom_1.elementContains; } }));
Object.defineProperty(exports, "elementContainsAttribute", ({ enumerable: true, get: function () { return dom_1.elementContainsAttribute; } }));
Object.defineProperty(exports, "findElementRecursive", ({ enumerable: true, get: function () { return dom_1.findElementRecursive; } }));
Object.defineProperty(exports, "getChildren", ({ enumerable: true, get: function () { return dom_1.getChildren; } }));
Object.defineProperty(exports, "getDocument", ({ enumerable: true, get: function () { return dom_1.getDocument; } }));
Object.defineProperty(exports, "getFirstVisibleElementFromSelector", ({ enumerable: true, get: function () { return dom_1.getFirstVisibleElementFromSelector; } }));
Object.defineProperty(exports, "getParent", ({ enumerable: true, get: function () { return dom_1.getParent; } }));
Object.defineProperty(exports, "getRect", ({ enumerable: true, get: function () { return dom_1.getRect; } }));
Object.defineProperty(exports, "getVirtualParent", ({ enumerable: true, get: function () { return dom_1.getVirtualParent; } }));
Object.defineProperty(exports, "getWindow", ({ enumerable: true, get: function () { return dom_1.getWindow; } }));
Object.defineProperty(exports, "isVirtualElement", ({ enumerable: true, get: function () { return dom_1.isVirtualElement; } }));
Object.defineProperty(exports, "on", ({ enumerable: true, get: function () { return dom_1.on; } }));
Object.defineProperty(exports, "portalContainsElement", ({ enumerable: true, get: function () { return dom_1.portalContainsElement; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "raiseClick", ({ enumerable: true, get: function () { return dom_1.raiseClick; } }));
Object.defineProperty(exports, "setPortalAttribute", ({ enumerable: true, get: function () { return dom_1.setPortalAttribute; } }));
Object.defineProperty(exports, "setVirtualParent", ({ enumerable: true, get: function () { return dom_1.setVirtualParent; } }));
var extendComponent_1 = __webpack_require__(8425);
Object.defineProperty(exports, "extendComponent", ({ enumerable: true, get: function () { return extendComponent_1.extendComponent; } }));
var focus_1 = __webpack_require__(8224);
Object.defineProperty(exports, "doesElementContainFocus", ({ enumerable: true, get: function () { return focus_1.doesElementContainFocus; } }));
Object.defineProperty(exports, "focusAsync", ({ enumerable: true, get: function () { return focus_1.focusAsync; } }));
Object.defineProperty(exports, "focusFirstChild", ({ enumerable: true, get: function () { return focus_1.focusFirstChild; } }));
Object.defineProperty(exports, "getElementIndexPath", ({ enumerable: true, get: function () { return focus_1.getElementIndexPath; } }));
Object.defineProperty(exports, "getFirstFocusable", ({ enumerable: true, get: function () { return focus_1.getFirstFocusable; } }));
Object.defineProperty(exports, "getFirstTabbable", ({ enumerable: true, get: function () { return focus_1.getFirstTabbable; } }));
Object.defineProperty(exports, "getFocusableByIndexPath", ({ enumerable: true, get: function () { return focus_1.getFocusableByIndexPath; } }));
Object.defineProperty(exports, "getLastFocusable", ({ enumerable: true, get: function () { return focus_1.getLastFocusable; } }));
Object.defineProperty(exports, "getLastTabbable", ({ enumerable: true, get: function () { return focus_1.getLastTabbable; } }));
Object.defineProperty(exports, "getNextElement", ({ enumerable: true, get: function () { return focus_1.getNextElement; } }));
Object.defineProperty(exports, "getPreviousElement", ({ enumerable: true, get: function () { return focus_1.getPreviousElement; } }));
Object.defineProperty(exports, "isElementFocusSubZone", ({ enumerable: true, get: function () { return focus_1.isElementFocusSubZone; } }));
Object.defineProperty(exports, "isElementFocusZone", ({ enumerable: true, get: function () { return focus_1.isElementFocusZone; } }));
Object.defineProperty(exports, "isElementTabbable", ({ enumerable: true, get: function () { return focus_1.isElementTabbable; } }));
Object.defineProperty(exports, "isElementVisible", ({ enumerable: true, get: function () { return focus_1.isElementVisible; } }));
Object.defineProperty(exports, "isElementVisibleAndNotHidden", ({ enumerable: true, get: function () { return focus_1.isElementVisibleAndNotHidden; } }));
Object.defineProperty(exports, "shouldWrapFocus", ({ enumerable: true, get: function () { return focus_1.shouldWrapFocus; } }));
var getId_1 = __webpack_require__(7937);
Object.defineProperty(exports, "getId", ({ enumerable: true, get: function () { return getId_1.getId; } }));
Object.defineProperty(exports, "resetIds", ({ enumerable: true, get: function () { return getId_1.resetIds; } }));
var getNativeElementProps_1 = __webpack_require__(8863);
Object.defineProperty(exports, "getNativeElementProps", ({ enumerable: true, get: function () { return getNativeElementProps_1.getNativeElementProps; } }));
var hoist_1 = __webpack_require__(7998);
Object.defineProperty(exports, "hoistMethods", ({ enumerable: true, get: function () { return hoist_1.hoistMethods; } }));
Object.defineProperty(exports, "unhoistMethods", ({ enumerable: true, get: function () { return hoist_1.unhoistMethods; } }));
var hoistStatics_1 = __webpack_require__(7272);
Object.defineProperty(exports, "hoistStatics", ({ enumerable: true, get: function () { return hoistStatics_1.hoistStatics; } }));
var initializeComponentRef_1 = __webpack_require__(9280);
Object.defineProperty(exports, "initializeComponentRef", ({ enumerable: true, get: function () { return initializeComponentRef_1.initializeComponentRef; } }));
var initializeFocusRects_1 = __webpack_require__(9514);
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "initializeFocusRects", ({ enumerable: true, get: function () { return initializeFocusRects_1.initializeFocusRects; } }));
var useFocusRects_1 = __webpack_require__(3984);
Object.defineProperty(exports, "FocusRects", ({ enumerable: true, get: function () { return useFocusRects_1.FocusRects; } }));
Object.defineProperty(exports, "useFocusRects", ({ enumerable: true, get: function () { return useFocusRects_1.useFocusRects; } }));
var initials_1 = __webpack_require__(9629);
Object.defineProperty(exports, "getInitials", ({ enumerable: true, get: function () { return initials_1.getInitials; } }));
var keyboard_1 = __webpack_require__(9889);
Object.defineProperty(exports, "addDirectionalKeyCode", ({ enumerable: true, get: function () { return keyboard_1.addDirectionalKeyCode; } }));
Object.defineProperty(exports, "isDirectionalKeyCode", ({ enumerable: true, get: function () { return keyboard_1.isDirectionalKeyCode; } }));
var language_1 = __webpack_require__(4569);
Object.defineProperty(exports, "getLanguage", ({ enumerable: true, get: function () { return language_1.getLanguage; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "setLanguage", ({ enumerable: true, get: function () { return language_1.setLanguage; } }));
var math_1 = __webpack_require__(2607);
Object.defineProperty(exports, "calculatePrecision", ({ enumerable: true, get: function () { return math_1.calculatePrecision; } }));
Object.defineProperty(exports, "fitContentToBounds", ({ enumerable: true, get: function () { return math_1.fitContentToBounds; } }));
Object.defineProperty(exports, "getDistanceBetweenPoints", ({ enumerable: true, get: function () { return math_1.getDistanceBetweenPoints; } }));
Object.defineProperty(exports, "precisionRound", ({ enumerable: true, get: function () { return math_1.precisionRound; } }));
var memoize_1 = __webpack_require__(1519);
Object.defineProperty(exports, "createMemoizer", ({ enumerable: true, get: function () { return memoize_1.createMemoizer; } }));
Object.defineProperty(exports, "memoize", ({ enumerable: true, get: function () { return memoize_1.memoize; } }));
Object.defineProperty(exports, "memoizeFunction", ({ enumerable: true, get: function () { return memoize_1.memoizeFunction; } }));
Object.defineProperty(exports, "resetMemoizations", ({ enumerable: true, get: function () { return memoize_1.resetMemoizations; } }));
Object.defineProperty(exports, "setMemoizeWeakMap", ({ enumerable: true, get: function () { return memoize_1.setMemoizeWeakMap; } }));
var merge_1 = __webpack_require__(35);
Object.defineProperty(exports, "merge", ({ enumerable: true, get: function () { return merge_1.merge; } }));
var mobileDetector_1 = __webpack_require__(2694);
Object.defineProperty(exports, "isIOS", ({ enumerable: true, get: function () { return mobileDetector_1.isIOS; } }));
var modalize_1 = __webpack_require__(1594);
Object.defineProperty(exports, "modalize", ({ enumerable: true, get: function () { return modalize_1.modalize; } }));
var object_1 = __webpack_require__(8164);
Object.defineProperty(exports, "assign", ({ enumerable: true, get: function () { return object_1.assign; } }));
Object.defineProperty(exports, "filteredAssign", ({ enumerable: true, get: function () { return object_1.filteredAssign; } }));
Object.defineProperty(exports, "mapEnumByName", ({ enumerable: true, get: function () { return object_1.mapEnumByName; } }));
Object.defineProperty(exports, "shallowCompare", ({ enumerable: true, get: function () { return object_1.shallowCompare; } }));
Object.defineProperty(exports, "values", ({ enumerable: true, get: function () { return object_1.values; } }));
Object.defineProperty(exports, "omit", ({ enumerable: true, get: function () { return object_1.omit; } }));
var osDetector_1 = __webpack_require__(5744);
Object.defineProperty(exports, "isMac", ({ enumerable: true, get: function () { return osDetector_1.isMac; } }));
var overflow_1 = __webpack_require__(6430);
Object.defineProperty(exports, "hasHorizontalOverflow", ({ enumerable: true, get: function () { return overflow_1.hasHorizontalOverflow; } }));
Object.defineProperty(exports, "hasOverflow", ({ enumerable: true, get: function () { return overflow_1.hasOverflow; } }));
Object.defineProperty(exports, "hasVerticalOverflow", ({ enumerable: true, get: function () { return overflow_1.hasVerticalOverflow; } }));
var properties_1 = __webpack_require__(1850);
Object.defineProperty(exports, "anchorProperties", ({ enumerable: true, get: function () { return properties_1.anchorProperties; } }));
Object.defineProperty(exports, "audioProperties", ({ enumerable: true, get: function () { return properties_1.audioProperties; } }));
Object.defineProperty(exports, "baseElementEvents", ({ enumerable: true, get: function () { return properties_1.baseElementEvents; } }));
Object.defineProperty(exports, "baseElementProperties", ({ enumerable: true, get: function () { return properties_1.baseElementProperties; } }));
Object.defineProperty(exports, "buttonProperties", ({ enumerable: true, get: function () { return properties_1.buttonProperties; } }));
Object.defineProperty(exports, "colGroupProperties", ({ enumerable: true, get: function () { return properties_1.colGroupProperties; } }));
Object.defineProperty(exports, "colProperties", ({ enumerable: true, get: function () { return properties_1.colProperties; } }));
Object.defineProperty(exports, "divProperties", ({ enumerable: true, get: function () { return properties_1.divProperties; } }));
Object.defineProperty(exports, "formProperties", ({ enumerable: true, get: function () { return properties_1.formProperties; } }));
Object.defineProperty(exports, "getNativeProps", ({ enumerable: true, get: function () { return properties_1.getNativeProps; } }));
Object.defineProperty(exports, "htmlElementProperties", ({ enumerable: true, get: function () { return properties_1.htmlElementProperties; } }));
Object.defineProperty(exports, "iframeProperties", ({ enumerable: true, get: function () { return properties_1.iframeProperties; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "imageProperties", ({ enumerable: true, get: function () { return properties_1.imageProperties; } }));
Object.defineProperty(exports, "imgProperties", ({ enumerable: true, get: function () { return properties_1.imgProperties; } }));
Object.defineProperty(exports, "inputProperties", ({ enumerable: true, get: function () { return properties_1.inputProperties; } }));
Object.defineProperty(exports, "labelProperties", ({ enumerable: true, get: function () { return properties_1.labelProperties; } }));
Object.defineProperty(exports, "liProperties", ({ enumerable: true, get: function () { return properties_1.liProperties; } }));
Object.defineProperty(exports, "olProperties", ({ enumerable: true, get: function () { return properties_1.olProperties; } }));
Object.defineProperty(exports, "optionProperties", ({ enumerable: true, get: function () { return properties_1.optionProperties; } }));
Object.defineProperty(exports, "selectProperties", ({ enumerable: true, get: function () { return properties_1.selectProperties; } }));
Object.defineProperty(exports, "tableProperties", ({ enumerable: true, get: function () { return properties_1.tableProperties; } }));
Object.defineProperty(exports, "tdProperties", ({ enumerable: true, get: function () { return properties_1.tdProperties; } }));
Object.defineProperty(exports, "textAreaProperties", ({ enumerable: true, get: function () { return properties_1.textAreaProperties; } }));
Object.defineProperty(exports, "thProperties", ({ enumerable: true, get: function () { return properties_1.thProperties; } }));
Object.defineProperty(exports, "trProperties", ({ enumerable: true, get: function () { return properties_1.trProperties; } }));
Object.defineProperty(exports, "videoProperties", ({ enumerable: true, get: function () { return properties_1.videoProperties; } }));
var composeRenderFunction_1 = __webpack_require__(5731);
Object.defineProperty(exports, "composeRenderFunction", ({ enumerable: true, get: function () { return composeRenderFunction_1.composeRenderFunction; } }));
var resources_1 = __webpack_require__(103);
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "getResourceUrl", ({ enumerable: true, get: function () { return resources_1.getResourceUrl; } }));
// eslint-disable-next-line deprecation/deprecation
Object.defineProperty(exports, "setBaseUrl", ({ enumerable: true, get: function () { return resources_1.setBaseUrl; } }));
var rtl_1 = __webpack_require__(1820);
Object.defineProperty(exports, "getRTL", ({ enumerable: true, get: function () { return rtl_1.getRTL; } }));
Object.defineProperty(exports, "getRTLSafeKeyCode", ({ enumerable: true, get: function () { return rtl_1.getRTLSafeKeyCode; } }));
Object.defineProperty(exports, "setRTL", ({ enumerable: true, get: function () { return rtl_1.setRTL; } }));
var safeRequestAnimationFrame_1 = __webpack_require__(9548);
Object.defineProperty(exports, "safeRequestAnimationFrame", ({ enumerable: true, get: function () { return safeRequestAnimationFrame_1.safeRequestAnimationFrame; } }));
var safeSetTimeout_1 = __webpack_require__(8816);
Object.defineProperty(exports, "safeSetTimeout", ({ enumerable: true, get: function () { return safeSetTimeout_1.safeSetTimeout; } }));
var scroll_1 = __webpack_require__(9264);
Object.defineProperty(exports, "DATA_IS_SCROLLABLE_ATTRIBUTE", ({ enumerable: true, get: function () { return scroll_1.DATA_IS_SCROLLABLE_ATTRIBUTE; } }));
Object.defineProperty(exports, "allowOverscrollOnElement", ({ enumerable: true, get: function () { return scroll_1.allowOverscrollOnElement; } }));
Object.defineProperty(exports, "allowScrollOnElement", ({ enumerable: true, get: function () { return scroll_1.allowScrollOnElement; } }));
Object.defineProperty(exports, "disableBodyScroll", ({ enumerable: true, get: function () { return scroll_1.disableBodyScroll; } }));
Object.defineProperty(exports, "enableBodyScroll", ({ enumerable: true, get: function () { return scroll_1.enableBodyScroll; } }));
Object.defineProperty(exports, "findScrollableParent", ({ enumerable: true, get: function () { return scroll_1.findScrollableParent; } }));
Object.defineProperty(exports, "getScrollbarWidth", ({ enumerable: true, get: function () { return scroll_1.getScrollbarWidth; } }));
var index_1 = __webpack_require__(6772);
Object.defineProperty(exports, "SELECTION_CHANGE", ({ enumerable: true, get: function () { return index_1.SELECTION_CHANGE; } }));
Object.defineProperty(exports, "SELECTION_ITEMS_CHANGE", ({ enumerable: true, get: function () { return index_1.SELECTION_ITEMS_CHANGE; } }));
Object.defineProperty(exports, "Selection", ({ enumerable: true, get: function () { return index_1.Selection; } }));
Object.defineProperty(exports, "SelectionDirection", ({ enumerable: true, get: function () { return index_1.SelectionDirection; } }));
Object.defineProperty(exports, "SelectionMode", ({ enumerable: true, get: function () { return index_1.SelectionMode; } }));
var string_1 = __webpack_require__(7722);
Object.defineProperty(exports, "format", ({ enumerable: true, get: function () { return string_1.format; } }));
var styled_1 = __webpack_require__(3085);
Object.defineProperty(exports, "styled", ({ enumerable: true, get: function () { return styled_1.styled; } }));
var warn_1 = __webpack_require__(7060);
Object.defineProperty(exports, "resetControlledWarnings", ({ enumerable: true, get: function () { return warn_1.resetControlledWarnings; } }));
Object.defineProperty(exports, "setWarningCallback", ({ enumerable: true, get: function () { return warn_1.setWarningCallback; } }));
Object.defineProperty(exports, "warn", ({ enumerable: true, get: function () { return warn_1.warn; } }));
Object.defineProperty(exports, "warnConditionallyRequiredProps", ({ enumerable: true, get: function () { return warn_1.warnConditionallyRequiredProps; } }));
Object.defineProperty(exports, "warnControlledUsage", ({ enumerable: true, get: function () { return warn_1.warnControlledUsage; } }));
Object.defineProperty(exports, "warnDeprecations", ({ enumerable: true, get: function () { return warn_1.warnDeprecations; } }));
Object.defineProperty(exports, "warnMutuallyExclusive", ({ enumerable: true, get: function () { return warn_1.warnMutuallyExclusive; } }));
var ie11Detector_1 = __webpack_require__(4478);
Object.defineProperty(exports, "isIE11", ({ enumerable: true, get: function () { return ie11Detector_1.isIE11; } }));
var getPropsWithDefaults_1 = __webpack_require__(4085);
Object.defineProperty(exports, "getPropsWithDefaults", ({ enumerable: true, get: function () { return getPropsWithDefaults_1.getPropsWithDefaults; } }));
var setFocusVisibility_1 = __webpack_require__(1795);
Object.defineProperty(exports, "setFocusVisibility", ({ enumerable: true, get: function () { return setFocusVisibility_1.setFocusVisibility; } }));
Object.defineProperty(exports, "IsFocusVisibleClassName", ({ enumerable: true, get: function () { return setFocusVisibility_1.IsFocusVisibleClassName; } }));
var setSSR_1 = __webpack_require__(4934);
Object.defineProperty(exports, "setSSR", ({ enumerable: true, get: function () { return setSSR_1.setSSR; } }));
var createMergedRef_1 = __webpack_require__(6694);
Object.defineProperty(exports, "createMergedRef", ({ enumerable: true, get: function () { return createMergedRef_1.createMergedRef; } }));
var useIsomorphicLayoutEffect_1 = __webpack_require__(821);
Object.defineProperty(exports, "useIsomorphicLayoutEffect", ({ enumerable: true, get: function () { return useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect; } }));
__webpack_require__(1913);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initializeComponentRef = void 0;
var extendComponent_1 = __webpack_require__(8425);
/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    extendComponent_1.extendComponent(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount,
    });
}
exports.initializeComponentRef = initializeComponentRef;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}
//# sourceMappingURL=initializeComponentRef.js.map

/***/ }),

/***/ 9514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initializeFocusRects = void 0;
var getWindow_1 = __webpack_require__(7746);
var keyboard_1 = __webpack_require__(9889);
var setFocusVisibility_1 = __webpack_require__(1795);
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 * @deprecated Use useFocusRects hook or FocusRects component instead.
 */
function initializeFocusRects(window) {
    var _a;
    var win = (window || getWindow_1.getWindow());
    if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
        return;
    }
    if (!win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('pointerdown', _onPointerDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
exports.initializeFocusRects = initializeFocusRects;
function _onMouseDown(ev) {
    setFocusVisibility_1.setFocusVisibility(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        setFocusVisibility_1.setFocusVisibility(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    keyboard_1.isDirectionalKeyCode(ev.which) && setFocusVisibility_1.setFocusVisibility(true, ev.target);
}
//# sourceMappingURL=initializeFocusRects.js.map

/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, exports) => {


/**
 * Regular expressions matching characters to ignore when calculating the initials.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInitials = void 0;
/**
 * Regular expression matching characters within various types of enclosures, including the enclosures themselves
 *  so for example, (xyz) [xyz] {xyz} <xyz> all would be ignored
 */
var UNWANTED_ENCLOSURES_REGEX = /[\(\[\{\<][^\)\]\}\>]*[\)\]\}\>]/g;
/**
 * Regular expression matching special ASCII characters except space, plus some unicode special characters.
 * Applies after unwanted enclosures have been removed
 */
var UNWANTED_CHARS_REGEX = /[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs,
 *             CJK Unified Ideographs Extension B
 */
// eslint-disable-next-line @fluentui/max-len
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_ENCLOSURES_REGEX, '');
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;
//# sourceMappingURL=initials.js.map

/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addDirectionalKeyCode = exports.isDirectionalKeyCode = void 0;
var KeyCodes_1 = __webpack_require__(1555);
var DirectionalKeyCodes = (_a = {},
    _a[KeyCodes_1.KeyCodes.up] = 1,
    _a[KeyCodes_1.KeyCodes.down] = 1,
    _a[KeyCodes_1.KeyCodes.left] = 1,
    _a[KeyCodes_1.KeyCodes.right] = 1,
    _a[KeyCodes_1.KeyCodes.home] = 1,
    _a[KeyCodes_1.KeyCodes.end] = 1,
    _a[KeyCodes_1.KeyCodes.tab] = 1,
    _a[KeyCodes_1.KeyCodes.pageUp] = 1,
    _a[KeyCodes_1.KeyCodes.pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
exports.isDirectionalKeyCode = isDirectionalKeyCode;
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
exports.addDirectionalKeyCode = addDirectionalKeyCode;
//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setLanguage = exports.getLanguage = void 0;
var getDocument_1 = __webpack_require__(7611);
var localStorage = __webpack_require__(9038);
var sessionStorage = __webpack_require__(2074);
// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'sessionStorage'; }
    if (_language === undefined) {
        var doc = getDocument_1.getDocument();
        var savedLanguage = persistenceType === 'localStorage'
            ? localStorage.getItem(STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? sessionStorage.getItem(STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
function setLanguage(language, persistenceParam) {
    var doc = getDocument_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'sessionStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        localStorage.setItem(STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        sessionStorage.setItem(STORAGE_KEY, language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;
//# sourceMappingURL=language.js.map

/***/ }),

/***/ 9038:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setItem = exports.getItem = void 0;
var getWindow_1 = __webpack_require__(7746);
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = getWindow_1.getWindow();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = getWindow_1.getWindow();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;
//# sourceMappingURL=localStorage.js.map

/***/ }),

/***/ 2607:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.precisionRound = exports.calculatePrecision = exports.fitContentToBounds = exports.getDistanceBetweenPoints = void 0;
/**
 * Determines the distance between two points.
 *
 * @public
 */
/* eslint-disable deprecation/deprecation */
function getDistanceBetweenPoints(point1, point2) {
    var left1 = point1.left || point1.x || 0;
    var top1 = point1.top || point1.y || 0;
    var left2 = point2.left || point2.x || 0;
    var top2 = point2.top || point2.y || 0;
    /* eslint-enable deprecation/deprecation */
    var distance = Math.sqrt(Math.pow(left1 - left2, 2) + Math.pow(top1 - top2, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale,
    };
}
exports.fitContentToBounds = fitContentToBounds;
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
exports.calculatePrecision = calculatePrecision;
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}
exports.precisionRound = precisionRound;
//# sourceMappingURL=math.js.map

/***/ }),

/***/ 1519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMemoizer = exports.memoizeFunction = exports.memoize = exports.resetMemoizations = exports.setMemoizeWeakMap = void 0;
var merge_styles_1 = __webpack_require__(8376);
var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
exports.setMemoizeWeakMap = setMemoizeWeakMap;
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
exports.resetMemoizations = resetMemoizations;
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(_target, _key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = merge_styles_1.Stylesheet.getInstance();
        if (stylesheet && stylesheet.onReset) {
            merge_styles_1.Stylesheet.getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
exports.createMemoizer = createMemoizer;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}
//# sourceMappingURL=memoize.js.map

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.merge = void 0;
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
exports.merge = merge;
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference
                        ? value
                        : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 2694:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isIOS = void 0;
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};
exports.isIOS = isIOS;
//# sourceMappingURL=mobileDetector.js.map

/***/ }),

/***/ 1594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * The helper functions here will make the target element as modal to screen readers, by placing aria-hidden on elements
 * that are siblings to the target element and the target element's ancestors (because aria-hidden gets inherited).
 * That way, all other elements on the page are hidden to the screen reader.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.modalize = void 0;
var getDocument_1 = __webpack_require__(7611);
/** Tag names to ignore when modalizing */
var tagsToIgnore = ['TEMPLATE', 'STYLE', 'SCRIPT'];
/**
 * Call this on a target element to make it modal to screen readers.
 * Returns a function that undoes the changes it made.
 */
function modalize(target) {
    var targetDocument = getDocument_1.getDocument(target);
    if (!targetDocument) {
        // can't do this in SSR
        return function () { return undefined; };
    }
    var affectedNodes = [];
    // start at target, then recurse and do the same for parent, until we reach <body>
    while (target !== targetDocument.body && target.parentElement) {
        // grab all siblings of current element
        for (var _i = 0, _a = target.parentElement.children; _i < _a.length; _i++) {
            var sibling = _a[_i];
            // but ignore elements that are already aria-hidden
            var ariaHidden = sibling.getAttribute('aria-hidden');
            if (sibling !== target && (ariaHidden === null || ariaHidden === void 0 ? void 0 : ariaHidden.toLowerCase()) !== 'true' && tagsToIgnore.indexOf(sibling.tagName) === -1) {
                affectedNodes.push([sibling, ariaHidden]);
            }
        }
        target = target.parentElement;
    }
    // take all those elements and set aria-hidden=true on them
    affectedNodes.forEach(function (_a) {
        var node = _a[0];
        node.setAttribute('aria-hidden', 'true');
    });
    return function () {
        unmodalize(affectedNodes);
        affectedNodes = []; // dispose
    };
}
exports.modalize = modalize;
/**
 * Undoes the changes that modalize() did.
 */
function unmodalize(affectedNodes) {
    affectedNodes.forEach(function (_a) {
        var node = _a[0], originalValue = _a[1];
        // Restore the original value (false or unset)
        if (originalValue) {
            node.setAttribute('aria-hidden', originalValue);
        }
        else {
            node.removeAttribute('aria-hidden');
        }
    });
}
//# sourceMappingURL=modalize.js.map

/***/ }),

/***/ 8164:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.omit = exports.values = exports.mapEnumByName = exports.filteredAssign = exports.assign = exports.shallowCompare = void 0;
/**
 * Compares a to b and b to a.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shallowCompare(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    for (var propName in b) {
        if (b.hasOwnProperty(propName)) {
            if (!a.hasOwnProperty(propName)) {
                return false;
            }
        }
    }
    return true;
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/**
 * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
 * returning a mapped array.
 * @param theEnum - Enum to iterate over
 * @param callback - The first parameter the name of the entry, and the second parameter is the value
 * of that entry, which is the value you'd normally use when using the enum (usually a number).
 */
function mapEnumByName(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
        return undefined;
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
exports.mapEnumByName = mapEnumByName;
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
exports.values = values;
/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * This behaves very much like filteredAssign, but does not merge many objects together,
 * uses an exclusion object map, and avoids spreads all for optimal performance.
 *
 * See perf test for background:
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 *
 * @param obj - The object to clone
 * @param exclusions - The array of keys to exclude
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function omit(obj, exclusions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    for (var key in obj) {
        if (exclusions.indexOf(key) === -1 && obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.omit = omit;
//# sourceMappingURL=object.js.map

/***/ }),

/***/ 5744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMac = void 0;
var getWindow_1 = __webpack_require__(7746);
var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    var _a;
    if (typeof isMacResult === 'undefined' || reset) {
        var win = getWindow_1.getWindow();
        // In certain SSR frameworks, `window` will be defined even on the server but `navigator` will be undefined
        var userAgent = (_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}
exports.isMac = isMac;
//# sourceMappingURL=osDetector.js.map

/***/ }),

/***/ 6430:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasOverflow = exports.hasVerticalOverflow = exports.hasHorizontalOverflow = void 0;
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;
//# sourceMappingURL=overflow.js.map

/***/ }),

/***/ 1850:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNativeProps = exports.divProperties = exports.imageProperties = exports.imgProperties = exports.iframeProperties = exports.formProperties = exports.colProperties = exports.colGroupProperties = exports.tdProperties = exports.thProperties = exports.trProperties = exports.tableProperties = exports.optionProperties = exports.selectProperties = exports.textAreaProperties = exports.inputProperties = exports.buttonProperties = exports.anchorProperties = exports.liProperties = exports.olProperties = exports.videoProperties = exports.audioProperties = exports.labelProperties = exports.htmlElementProperties = exports.baseElementProperties = exports.baseElementEvents = void 0;
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name', // global
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = toObjectMap(exports.baseElementProperties, exports.baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
exports.labelProperties = toObjectMap(exports.htmlElementProperties, [
    'form', // button, fieldset, input, label, meter, object, output, select, textarea
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
exports.audioProperties = toObjectMap(exports.htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
exports.videoProperties = toObjectMap(exports.audioProperties, [
    'poster', // video
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
exports.olProperties = toObjectMap(exports.htmlElementProperties, [
    'start', // ol
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
exports.liProperties = toObjectMap(exports.htmlElementProperties, [
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = toObjectMap(exports.htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type', // a, button, input, link, menu, object, script, source, style
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = toObjectMap(exports.htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value', // button, input, li, option, meter, progress, param,
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = toObjectMap(exports.buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = toObjectMap(exports.buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'minLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap', // textarea
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
exports.selectProperties = toObjectMap(exports.buttonProperties, [
    'form',
    'multiple',
    'required', // input, select, textarea
]);
exports.optionProperties = toObjectMap(exports.htmlElementProperties, [
    'selected',
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
exports.tableProperties = toObjectMap(exports.htmlElementProperties, [
    'cellPadding',
    'cellSpacing', // table
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
exports.trProperties = exports.htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
exports.thProperties = toObjectMap(exports.htmlElementProperties, [
    'rowSpan',
    'scope', // th
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
exports.tdProperties = toObjectMap(exports.htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope', // th
]);
exports.colGroupProperties = toObjectMap(exports.htmlElementProperties, [
    'span', // col, colgroup
]);
exports.colProperties = toObjectMap(exports.htmlElementProperties, [
    'span', // col, colgroup
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
exports.formProperties = toObjectMap(exports.htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target', // form
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
exports.iframeProperties = toObjectMap(exports.htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width', // canvas, embed, iframe, img, input, object, video,
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imgProperties = toObjectMap(exports.htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
exports.imageProperties = exports.imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}
exports.getNativeProps = getNativeProps;
//# sourceMappingURL=properties.js.map

/***/ }),

/***/ 5731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.composeRenderFunction = void 0;
var memoize_1 = __webpack_require__(1519);
function createComposedRenderFunction(outer) {
    var outerMemoizer = memoize_1.createMemoizer(function (inner) {
        var innerMemoizer = memoize_1.createMemoizer(function (defaultRender) {
            return function (innerProps) {
                return inner(innerProps, defaultRender);
            };
        });
        return function (outerProps, defaultRender) {
            return outer(outerProps, defaultRender ? innerMemoizer(defaultRender) : inner);
        };
    });
    return outerMemoizer;
}
var memoizer = memoize_1.createMemoizer(createComposedRenderFunction);
/**
 * Composes two 'render functions' to produce a final render function that renders
 * the outer function, passing the inner function as 'default render'. The inner function
 * is then passed the original 'default render' prop.
 * @public
 */
function composeRenderFunction(outer, inner) {
    return memoizer(outer)(inner);
}
exports.composeRenderFunction = composeRenderFunction;
//# sourceMappingURL=composeRenderFunction.js.map

/***/ }),

/***/ 103:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setBaseUrl = exports.getResourceUrl = void 0;
var _baseUrl = '';
/**
 * @deprecated Unused as of version 8
 */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/**
 * @deprecated Unused as of version 8
 */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;
//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 1820:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRTLSafeKeyCode = exports.setRTL = exports.getRTL = void 0;
var KeyCodes_1 = __webpack_require__(1555);
var getDocument_1 = __webpack_require__(7611);
var sessionStorage_1 = __webpack_require__(2074);
var merge_styles_1 = __webpack_require__(8376);
var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_1.getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = getDocument_1.getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            merge_styles_1.setRTL(_isRTL);
        }
    }
    return !!_isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = getDocument_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_1.setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    merge_styles_1.setRTL(_isRTL);
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === KeyCodes_1.KeyCodes.left) {
            key = KeyCodes_1.KeyCodes.right;
        }
        else if (key === KeyCodes_1.KeyCodes.right) {
            key = KeyCodes_1.KeyCodes.left;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ 9548:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeRequestAnimationFrame = void 0;
var extendComponent_1 = __webpack_require__(8425);
/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeRequestAnimationFrame = function (component) {
    var activeTimeouts;
    return function (cb) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            extendComponent_1.extendComponent(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return cancelAnimationFrame(id); });
                },
            });
        }
        var timeoutId = requestAnimationFrame(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        });
        activeTimeouts.add(timeoutId);
    };
};
exports.safeRequestAnimationFrame = safeRequestAnimationFrame;
//# sourceMappingURL=safeRequestAnimationFrame.js.map

/***/ }),

/***/ 8816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeSetTimeout = void 0;
var extendComponent_1 = __webpack_require__(8425);
/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeSetTimeout = function (component) {
    var activeTimeouts;
    return function (cb, duration) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            extendComponent_1.extendComponent(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return clearTimeout(id); });
                },
            });
        }
        var timeoutId = setTimeout(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        }, duration);
        activeTimeouts.add(timeoutId);
    };
};
exports.safeSetTimeout = safeSetTimeout;
//# sourceMappingURL=safeSetTimeout.js.map

/***/ }),

/***/ 9264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findScrollableParent = exports.getScrollbarWidth = exports.enableBodyScroll = exports.disableBodyScroll = exports.allowOverscrollOnElement = exports.allowScrollOnElement = exports.DATA_IS_SCROLLABLE_ATTRIBUTE = void 0;
var getDocument_1 = __webpack_require__(7611);
var merge_styles_1 = __webpack_require__(8376);
var getWindow_1 = __webpack_require__(7746);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = merge_styles_1.mergeStyles({
    overflow: 'hidden !important',
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - Math.ceil(_element.scrollTop) <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    events.on(element, 'touchstart', _saveClientY, { passive: false });
    events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
    _element = element;
};
exports.allowScrollOnElement = allowScrollOnElement;
/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
var allowOverscrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _allowElementScroll = function (event) {
        event.stopPropagation();
    };
    events.on(element, 'touchmove', _allowElementScroll, { passive: false });
};
exports.allowOverscrollOnElement = allowOverscrollOnElement;
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = getDocument_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = getDocument_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = getDocument_1.getDocument(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
        el = getWindow_1.getWindow(startingElement);
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;
//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ 5455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Selection = void 0;
var Selection_types_1 = __webpack_require__(430);
var EventGroup_1 = __webpack_require__(9797);
/**
 * {@docCategory Selection}
 */
var Selection = /** @class */ (function () {
    /**
     * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
     * object with a `getKey` implementation. Providing options is optional otherwise.
     * (At most one `options` object is accepted.)
     */
    function Selection() {
        var options = []; // Otherwise, arguments require options with `getKey`.
        for (var _i = 0 // Otherwise, arguments require options with `getKey`.
        ; _i < arguments.length // Otherwise, arguments require options with `getKey`.
        ; _i++ // Otherwise, arguments require options with `getKey`.
        ) {
            options[_i] = arguments[_i]; // Otherwise, arguments require options with `getKey`.
        }
        var _a = options[0] || {}, onSelectionChanged = _a.onSelectionChanged, onItemsChanged = _a.onItemsChanged, getKey = _a.getKey, _b = _a.canSelectItem, canSelectItem = _b === void 0 ? function () { return true; } : _b, items = _a.items, _c = _a.selectionMode, selectionMode = _c === void 0 ? Selection_types_1.SelectionMode.multiple : _c;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._onItemsChanged = onItemsChanged;
        this._canSelectItem = canSelectItem;
        this._keyToIndexMap = {};
        this._isModal = false;
        this.setItems(items || [], true);
        this.count = this.getSelectedCount();
    }
    Selection.prototype.canSelectItem = function (item, index) {
        if (typeof index === 'number' && index < 0) {
            return false;
        }
        return this._canSelectItem(item, index);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return typeof key === 'number' || key ? "" + key : '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        var haveItemsChanged = false;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    if (!haveItemsChanged && (!(key in this._keyToIndexMap) || this._keyToIndexMap[key] !== i)) {
                        haveItemsChanged = true;
                    }
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear || items.length === 0) {
            this._setAllSelected(false, true);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        var newExemptedCount = 0;
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // The item has likely been replaced or removed.
                    hasSelectionChanged = true;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    newExemptedCount++;
                    hasSelectionChanged = hasSelectionChanged || newIndex !== index;
                }
            }
        }
        if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
            // If everything was selected but the number of items has changed, selection has changed.
            hasSelectionChanged = true;
        }
        if (!haveItemsChanged) {
            for (var _i = 0, _a = Object.keys(this._keyToIndexMap); _i < _a.length; _i++) {
                var key = _a[_i];
                if (!(key in newKeyToIndexMap)) {
                    haveItemsChanged = true;
                    break;
                }
            }
        }
        this._exemptedIndices = newExemptedIndicies;
        this._exemptedCount = newExemptedCount;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items;
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._updateCount();
        }
        if (haveItemsChanged) {
            EventGroup_1.EventGroup.raise(this, Selection_types_1.SELECTION_ITEMS_CHANGE);
            if (this._onItemsChanged) {
                this._onItemsChanged();
            }
        }
        if (hasSelectionChanged) {
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected
            ? this._items.length - this._exemptedCount - this._unselectableCount
            : this._exemptedCount;
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.getItemIndex = function (key) {
        var index = this._keyToIndexMap[key];
        return index !== null && index !== void 0 ? index : -1;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === Selection_types_1.SelectionMode.single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0 && this._isAllSelected && this._exemptedCount === 0) ||
            (!this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0 && this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== Selection_types_1.SelectionMode.multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === Selection_types_1.SelectionMode.none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === Selection_types_1.SelectionMode.single) {
                // If this is single-select, the previous selection should be removed.
                this._setAllSelected(false, true);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) || (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) || (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === Selection_types_1.SelectionMode.none) {
            return;
        }
        if (this.mode === Selection_types_1.SelectionMode.single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this._setAllSelected(false, true);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === Selection_types_1.SelectionMode.none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === Selection_types_1.SelectionMode.single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function (preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count && !preserveModalState) {
            this.setModal(false);
        }
    };
    Selection.prototype._setAllSelected = function (isAllSelected, preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        if (isAllSelected && this.mode !== Selection_types_1.SelectionMode.multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount(preserveModalState);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            EventGroup_1.EventGroup.raise(this, Selection_types_1.SELECTION_CHANGE);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());
exports.Selection = Selection;
function defaultGetKey(item, index) {
    // 0 may be used as a key
    var _a = (item || {}).key, key = _a === void 0 ? "" + index : _a;
    return key;
}
//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ 430:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionDirection = exports.SelectionMode = exports.SELECTION_ITEMS_CHANGE = exports.SELECTION_CHANGE = void 0;
exports.SELECTION_CHANGE = 'change';
exports.SELECTION_ITEMS_CHANGE = 'items-change';
/**
 * {@docCategory Selection}
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
/**
 * {@docCategory Selection}
 */
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection = exports.SelectionDirection || (exports.SelectionDirection = {}));
//# sourceMappingURL=Selection.types.js.map

/***/ }),

/***/ 6772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Selection = exports.SelectionMode = exports.SelectionDirection = exports.SELECTION_ITEMS_CHANGE = exports.SELECTION_CHANGE = void 0;
var Selection_types_1 = __webpack_require__(430);
Object.defineProperty(exports, "SELECTION_CHANGE", ({ enumerable: true, get: function () { return Selection_types_1.SELECTION_CHANGE; } }));
Object.defineProperty(exports, "SELECTION_ITEMS_CHANGE", ({ enumerable: true, get: function () { return Selection_types_1.SELECTION_ITEMS_CHANGE; } }));
Object.defineProperty(exports, "SelectionDirection", ({ enumerable: true, get: function () { return Selection_types_1.SelectionDirection; } }));
Object.defineProperty(exports, "SelectionMode", ({ enumerable: true, get: function () { return Selection_types_1.SelectionMode; } }));
var Selection_1 = __webpack_require__(5455);
Object.defineProperty(exports, "Selection", ({ enumerable: true, get: function () { return Selection_1.Selection; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2074:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setItem = exports.getItem = void 0;
var getWindow_1 = __webpack_require__(7746);
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = getWindow_1.getWindow();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = getWindow_1.getWindow()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;
//# sourceMappingURL=sessionStorage.js.map

/***/ }),

/***/ 1795:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setFocusVisibility = exports.IsFocusHiddenClassName = exports.IsFocusVisibleClassName = void 0;
var getWindow_1 = __webpack_require__(7746);
exports.IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
exports.IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
function setFocusVisibility(enabled, target) {
    var win = target ? getWindow_1.getWindow(target) : getWindow_1.getWindow();
    if (win) {
        var classList = win.document.body.classList;
        classList.add(enabled ? exports.IsFocusVisibleClassName : exports.IsFocusHiddenClassName);
        classList.remove(enabled ? exports.IsFocusHiddenClassName : exports.IsFocusVisibleClassName);
    }
}
exports.setFocusVisibility = setFocusVisibility;
//# sourceMappingURL=setFocusVisibility.js.map

/***/ }),

/***/ 7722:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.format = void 0;
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function format(s) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replaceFunc(match) {
        // looks up in the args
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replaceFunc);
}
exports.format = format;
//# sourceMappingURL=string.js.map

/***/ }),

/***/ 3085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styled = void 0;
var tslib_1 = __webpack_require__(655);
var React = __webpack_require__(7294);
var merge_styles_1 = __webpack_require__(8376);
var useCustomizationSettings_1 = __webpack_require__(9640);
var DefaultFields = ['theme', 'styles'];
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = React.forwardRef(function (props, forwardedRef) {
        var styles = React.useRef();
        var settings = useCustomizationSettings_1.useCustomizationSettings(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = tslib_1.__rest(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        var propStyles = props.styles;
        if (!styles.current || customizedStyles !== cache[1] || propStyles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            // The function can be cached and in order to prevent the props from being retained within it's closure
            // we pass in just the styles and not the entire props
            var concatenatedStyles = function (styleProps) {
                return merge_styles_1.concatStyleSetsWithProps(styleProps, baseStyles, customizedStyles, propStyles);
            };
            // The __cachedInputs__ array is attached to the function and consumed by the
            // classNamesFunction as a list of keys to include for memoizing classnames.
            concatenatedStyles.__cachedInputs__ = [
                baseStyles,
                customizedStyles,
                propStyles,
            ];
            concatenatedStyles.__noStyleOverride__ =
                !customizedStyles && !propStyles;
            styles.current = concatenatedStyles;
        }
        return React.createElement(Component, tslib_1.__assign({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? React.memo(Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
        pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
}
exports.styled = styled;
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FocusRects = exports.useFocusRects = void 0;
var React = __webpack_require__(7294);
var getWindow_1 = __webpack_require__(7746);
var keyboard_1 = __webpack_require__(9889);
var setFocusVisibility_1 = __webpack_require__(1795);
/**
 * Counter for mounted component that uses focus rectangle.
 * We want to cleanup the listners before last component that uses focus rectangle unmounts.
 */
var mountCounters = new WeakMap();
function setMountCounters(key, delta) {
    var newValue;
    var currValue = mountCounters.get(key);
    if (currValue) {
        newValue = currValue + delta;
    }
    else {
        newValue = 1;
    }
    mountCounters.set(key, newValue);
    return newValue;
}
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */
function useFocusRects(rootRef) {
    React.useEffect(function () {
        var _a;
        var win = getWindow_1.getWindow(rootRef === null || rootRef === void 0 ? void 0 : rootRef.current);
        if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
            return undefined;
        }
        var count = setMountCounters(win, 1);
        if (count <= 1) {
            win.addEventListener('mousedown', _onMouseDown, true);
            win.addEventListener('pointerdown', _onPointerDown, true);
            win.addEventListener('keydown', _onKeyDown, true);
        }
        return function () {
            var _a;
            if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                return;
            }
            count = setMountCounters(win, -1);
            if (count === 0) {
                win.removeEventListener('mousedown', _onMouseDown, true);
                win.removeEventListener('pointerdown', _onPointerDown, true);
                win.removeEventListener('keydown', _onKeyDown, true);
            }
        };
    }, [rootRef]);
}
exports.useFocusRects = useFocusRects;
/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */
var FocusRects = function (props) {
    useFocusRects(props.rootRef);
    return null;
};
exports.FocusRects = FocusRects;
function _onMouseDown(ev) {
    setFocusVisibility_1.setFocusVisibility(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        setFocusVisibility_1.setFocusVisibility(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    if (keyboard_1.isDirectionalKeyCode(ev.which)) {
        setFocusVisibility_1.setFocusVisibility(true, ev.target);
    }
}
//# sourceMappingURL=useFocusRects.js.map

/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useIsomorphicLayoutEffect = void 0;
var React = __webpack_require__(7294);
var setSSR_1 = __webpack_require__(4934);
// This hook must live in @fluentui/utilities because _isSSR is not exported
/**
 * React currently throws a warning when using `useLayoutEffect` on the server. To get around it,
 * this hook calls `useEffect` on the server (no-op) and `useLayoutEffect` in the browser.
 *
 * Prefer `useEffect` unless you have a specific need to do something after mount and before paint,
 * such as to avoid a render flash for certain operations.
 *
 * Server-side rendering is detected based on `setSSR` from `@fluentui/utilities`.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 */
// eslint-disable-next-line no-restricted-properties
exports.useIsomorphicLayoutEffect = setSSR_1._isSSR ? React.useEffect : React.useLayoutEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map

/***/ }),

/***/ 1913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.
var set_version_1 = __webpack_require__(4984);
set_version_1.setVersion('@fluentui/utilities', '8.8.3');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnMutuallyExclusive = exports.warnDeprecations = exports.warnControlledUsage = exports.resetControlledWarnings = exports.warnConditionallyRequiredProps = exports.warn = exports.setWarningCallback = void 0;
var warn_1 = __webpack_require__(1077);
Object.defineProperty(exports, "setWarningCallback", ({ enumerable: true, get: function () { return warn_1.setWarningCallback; } }));
Object.defineProperty(exports, "warn", ({ enumerable: true, get: function () { return warn_1.warn; } }));
var warnConditionallyRequiredProps_1 = __webpack_require__(9931);
Object.defineProperty(exports, "warnConditionallyRequiredProps", ({ enumerable: true, get: function () { return warnConditionallyRequiredProps_1.warnConditionallyRequiredProps; } }));
var warnControlledUsage_1 = __webpack_require__(156);
Object.defineProperty(exports, "resetControlledWarnings", ({ enumerable: true, get: function () { return warnControlledUsage_1.resetControlledWarnings; } }));
Object.defineProperty(exports, "warnControlledUsage", ({ enumerable: true, get: function () { return warnControlledUsage_1.warnControlledUsage; } }));
var warnDeprecations_1 = __webpack_require__(8100);
Object.defineProperty(exports, "warnDeprecations", ({ enumerable: true, get: function () { return warnDeprecations_1.warnDeprecations; } }));
var warnMutuallyExclusive_1 = __webpack_require__(7269);
Object.defineProperty(exports, "warnMutuallyExclusive", ({ enumerable: true, get: function () { return warnMutuallyExclusive_1.warnMutuallyExclusive; } }));
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ 1077:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setWarningCallback = exports.warn = void 0;
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "production" !== 'production') {}
    else if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
exports.setWarningCallback = setWarningCallback;
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ 9931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnConditionallyRequiredProps = void 0;
var warn_1 = __webpack_require__(1077);
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && "production" !== 'production') { var requiredPropName, _i, requiredProps_1; }
}
exports.warnConditionallyRequiredProps = warnConditionallyRequiredProps;
//# sourceMappingURL=warnConditionallyRequiredProps.js.map

/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnControlledUsage = exports.resetControlledWarnings = void 0;
var warn_1 = __webpack_require__(1077);
var controlled_1 = __webpack_require__(4206);
var warningsMap;
if (false) {}
/** Reset controlled usage warnings for testing purposes. */
function resetControlledWarnings() {
    if (false) {}
}
exports.resetControlledWarnings = resetControlledWarnings;
/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler,
 *    and the component is not read-only
 * - Both the value and defaultValue props are provided
 * - The component is attempting to switch between controlled and uncontrolled
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 */
function warnControlledUsage(params) {
    if (false) { var warnMap, newType, oldType, defaultValue, isReadOnly, hasOnChange, newIsControlled, oldIsControlled, componentId, componentName, defaultValueProp, props, oldProps, onChangeProp, readOnlyProp, valueProp; }
}
exports.warnControlledUsage = warnControlledUsage;
//# sourceMappingURL=warnControlledUsage.js.map

/***/ }),

/***/ 8100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnDeprecations = void 0;
var warn_1 = __webpack_require__(1077);
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (false) { var replacementPropName, deprecationMessage, propName; }
}
exports.warnDeprecations = warnDeprecations;
//# sourceMappingURL=warnDeprecations.js.map

/***/ }),

/***/ 7269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnMutuallyExclusive = void 0;
var warn_1 = __webpack_require__(1077);
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (false) { var propInExclusiveMapValue, propName; }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
//# sourceMappingURL=warnMutuallyExclusive.js.map

/***/ }),

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearStyles": () => (/* binding */ clearStyles),
/* harmony export */   "configureLoadStyles": () => (/* binding */ configureLoadStyles),
/* harmony export */   "configureRunMode": () => (/* binding */ configureRunMode),
/* harmony export */   "detokenize": () => (/* binding */ detokenize),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "loadStyles": () => (/* binding */ loadStyles),
/* harmony export */   "loadTheme": () => (/* binding */ loadTheme),
/* harmony export */   "splitStyles": () => (/* binding */ splitStyles)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                typeof DEBUG !== 'undefined' &&
                DEBUG) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7418:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7294),m=__webpack_require__(7418),r=__webpack_require__(3840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 2408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(7418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Progress = void 0;
const React = __webpack_require__(7294);
const ProgressIndicator_1 = __webpack_require__(6667);
class Progress extends React.Component {
    render() {
        return (React.createElement(ProgressIndicator_1.ProgressIndicator, { label: "React Counter", description: this.props.count, percentComplete: (this.props.count % 10) * 0.1 }));
    }
}
exports.Progress = Progress;


/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderProgressBar = void 0;
const progressbar_1 = __webpack_require__(2940);
const React = __webpack_require__(7294);
const react_dom_1 = __webpack_require__(3935);
function RenderProgressBar(count) {
    (0, react_dom_1.render)(React.createElement(progressbar_1.Progress, { count: count }), document.getElementById("reactProgressBar"));
}
exports.RenderProgressBar = RenderProgressBar;

})();

window.FluentUiComponents = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.js.map