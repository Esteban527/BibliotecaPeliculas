<<<<<<< HEAD
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quill"] = factory();
	else
		root["Quill"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var format_1 = __webpack_require__(18);
var leaf_1 = __webpack_require__(19);
var scroll_1 = __webpack_require__(45);
var inline_1 = __webpack_require__(46);
var block_1 = __webpack_require__(47);
var embed_1 = __webpack_require__(48);
var text_1 = __webpack_require__(49);
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var store_1 = __webpack_require__(31);
var Registry = __webpack_require__(1);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(51);
var equal = __webpack_require__(11);
var extend = __webpack_require__(3);
var op = __webpack_require__(20);


var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};


Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({ 'delete': length });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = { retain: length };
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);
  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
      return this;
    }
    // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first
    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];
      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }
    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      }
    }
  }
  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }
  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];
  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }
  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [], failed = [];
  this.forEach(function(op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }
    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;
  while (index < end && iter.hasNext()) {
    var nextOp;
    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }
    index += op.length(nextOp);
  }
  return new Delta(ops);
};


Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var ops = [];
  var firstOther = otherIter.peek();
  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
    var firstLeft = firstOther.retain;
    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
      firstLeft -= thisIter.peekLength();
      ops.push(thisIter.next());
    }
    if (firstOther.retain - firstLeft > 0) {
      otherIter.next(firstOther.retain - firstLeft);
    }
  }
  var delta = new Delta(ops);
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (typeof otherOp.retain === 'number') {
        var newOp = {};
        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        }
        // Preserve null when composing with a retain, otherwise remove it for inserts
        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp);

        // Optimization if rest of other is just retain
        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
          var rest = new Delta(thisIter.rest());
          return delta.concat(rest).chop();
        }

      // Other op should be delete, we could be an insert or retain
      // Insert + delete cancels out
      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }
  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());
  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }
  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }
  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }
      var prep = (delta === other) ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;
    while (length > 0) {
      var opLength = 0;
      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;
        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;
        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);
          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }
          break;
      }
      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;
  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ?
      thisOp.insert.indexOf(newline, start) - start : -1;
    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }
      i += 1;
      line = new Delta();
    }
  }
  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;
  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }
  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;
  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();
    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }
    offset += length;
  }
  return index;
};


module.exports = Delta;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWLINE_LENGTH = 1;

var BlockEmbed = function (_Parchment$Embed) {
  _inherits(BlockEmbed, _Parchment$Embed);

  function BlockEmbed() {
    _classCallCheck(this, BlockEmbed);

    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
  }

  _createClass(BlockEmbed, [{
    key: 'attach',
    value: function attach() {
      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
    }
  }, {
    key: 'delta',
    value: function delta() {
      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
      if (attribute != null) {
        this.attributes.attribute(attribute, value);
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      this.format(name, value);
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (typeof value === 'string' && value.endsWith('\n')) {
        var block = _parchment2.default.create(Block.blotName);
        this.parent.insertBefore(block, index === 0 ? this : this.next);
        block.insertAt(0, value.slice(0, -1));
      } else {
        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
      }
    }
  }]);

  return BlockEmbed;
}(_parchment2.default.Embed);

BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements


var Block = function (_Parchment$Block) {
  _inherits(Block, _Parchment$Block);

  function Block(domNode) {
    _classCallCheck(this, Block);

    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

    _this2.cache = {};
    return _this2;
  }

  _createClass(Block, [{
    key: 'delta',
    value: function delta() {
      if (this.cache.delta == null) {
        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
      }
      return this.cache.delta;
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
      this.cache = {};
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length <= 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
        if (index + length === this.length()) {
          this.format(name, value);
        }
      } else {
        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
      }
      this.cache = {};
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
      if (value.length === 0) return;
      var lines = value.split('\n');
      var text = lines.shift();
      if (text.length > 0) {
        if (index < this.length() - 1 || this.children.tail == null) {
          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
        } else {
          this.children.tail.insertAt(this.children.tail.length(), text);
        }
        this.cache = {};
      }
      var block = this;
      lines.reduce(function (index, line) {
        block = block.split(index, true);
        block.insertAt(0, line);
        return line.length;
      }, index + text.length);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      var head = this.children.head;
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
      if (head instanceof _break2.default) {
        head.remove();
      }
      this.cache = {};
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.cache.length == null) {
        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
      return this.cache.length;
    }
  }, {
    key: 'moveChildren',
    value: function moveChildren(target, ref) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
      this.cache = {};
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
      this.cache = {};
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
      this.cache = {};
    }
  }, {
    key: 'split',
    value: function split(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
        var clone = this.clone();
        if (index === 0) {
          this.parent.insertBefore(clone, this);
          return this;
        } else {
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
      } else {
        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        this.cache = {};
        return next;
      }
    }
  }]);

  return Block;
}(_parchment2.default.Block);

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

function bubbleFormats(blot) {
  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = (0, _extend2.default)(formats, blot.formats());
  }
  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats);
}

exports.bubbleFormats = bubbleFormats;
exports.BlockEmbed = BlockEmbed;
exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overload = exports.expandConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _editor = __webpack_require__(14);

var _editor2 = _interopRequireDefault(_editor);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _selection = __webpack_require__(15);

var _selection2 = _interopRequireDefault(_selection);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill');

var Quill = function () {
  _createClass(Quill, null, [{
    key: 'debug',
    value: function debug(limit) {
      if (limit === true) {
        limit = 'log';
      }
      _logger2.default.level(limit);
    }
  }, {
    key: 'find',
    value: function find(node) {
      return node.__quill || _parchment2.default.find(node);
    }
  }, {
    key: 'import',
    value: function _import(name) {
      if (this.imports[name] == null) {
        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
      }
      return this.imports[name];
    }
  }, {
    key: 'register',
    value: function register(path, target) {
      var _this = this;

      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof path !== 'string') {
        var name = path.attrName || path.blotName;
        if (typeof name === 'string') {
          // register(Blot | Attributor, overwrite)
          this.register('formats/' + name, path, target);
        } else {
          Object.keys(path).forEach(function (key) {
            _this.register(key, path[key], target);
          });
        }
      } else {
        if (this.imports[path] != null && !overwrite) {
          debug.warn('Overwriting ' + path + ' with', target);
        }
        this.imports[path] = target;
        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
          _parchment2.default.register(target);
        } else if (path.startsWith('modules') && typeof target.register === 'function') {
          target.register();
        }
      }
    }
  }]);

  function Quill(container) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Quill);

    this.options = expandConfig(container, options);
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    var html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter4.default();
    this.scroll = _parchment2.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor2.default(this.scroll);
    this.selection = new _selection2.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
      if (type === _emitter4.default.events.TEXT_CHANGE) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
      var range = _this2.selection.lastRange;
      var index = range && range.length === 0 ? range.index : undefined;
      modify.call(_this2, function () {
        return _this2.editor.update(null, mutations, index);
      }, source);
    });
    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
  }

  _createClass(Quill, [{
    key: 'addContainer',
    value: function addContainer(container) {
      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof container === 'string') {
        var className = container;
        container = document.createElement('div');
        container.classList.add(className);
      }
      this.container.insertBefore(container, refNode);
      return container;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selection.setRange(null);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length, source) {
      var _this3 = this;

      var _overload = overload(index, length, source);

      var _overload2 = _slicedToArray(_overload, 4);

      index = _overload2[0];
      length = _overload2[1];
      source = _overload2[3];

      return modify.call(this, function () {
        return _this3.editor.deleteText(index, length);
      }, source, index, -1 * length);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enable(false);
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scroll.enable(enabled);
      this.container.classList.toggle('ql-disabled', !enabled);
    }
  }, {
    key: 'focus',
    value: function focus() {
      var scrollTop = this.scrollingContainer.scrollTop;
      this.selection.focus();
      this.scrollingContainer.scrollTop = scrollTop;
      this.scrollIntoView();
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var _this4 = this;

      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        var range = _this4.getSelection(true);
        var change = new _quillDelta2.default();
        if (range == null) {
          return change;
        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
        } else if (range.length === 0) {
          _this4.selection.format(name, value);
          return change;
        } else {
          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
        }
        _this4.setSelection(range, _emitter4.default.sources.SILENT);
        return change;
      }, source);
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length, name, value, source) {
      var _this5 = this;

      var formats = void 0;

      var _overload3 = overload(index, length, name, value, source);

      var _overload4 = _slicedToArray(_overload3, 4);

      index = _overload4[0];
      length = _overload4[1];
      formats = _overload4[2];
      source = _overload4[3];

      return modify.call(this, function () {
        return _this5.editor.formatLine(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length, name, value, source) {
      var _this6 = this;

      var formats = void 0;

      var _overload5 = overload(index, length, name, value, source);

      var _overload6 = _slicedToArray(_overload5, 4);

      index = _overload6[0];
      length = _overload6[1];
      formats = _overload6[2];
      source = _overload6[3];

      return modify.call(this, function () {
        return _this6.editor.formatText(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var bounds = void 0;
      if (typeof index === 'number') {
        bounds = this.selection.getBounds(index, length);
      } else {
        bounds = this.selection.getBounds(index.index, index.length);
      }
      var containerBounds = this.container.getBoundingClientRect();
      return {
        bottom: bounds.bottom - containerBounds.top,
        height: bounds.height,
        left: bounds.left - containerBounds.left,
        right: bounds.right - containerBounds.left,
        top: bounds.top - containerBounds.top,
        width: bounds.width
      };
    }
  }, {
    key: 'getContents',
    value: function getContents() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload7 = overload(index, length);

      var _overload8 = _slicedToArray(_overload7, 2);

      index = _overload8[0];
      length = _overload8[1];

      return this.editor.getContents(index, length);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof index === 'number') {
        return this.editor.getFormat(index, length);
      } else {
        return this.editor.getFormat(index.index, index.length);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(blot) {
      return blot.offset(this.scroll);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.scroll.length();
    }
  }, {
    key: 'getLeaf',
    value: function getLeaf(index) {
      return this.scroll.leaf(index);
    }
  }, {
    key: 'getLine',
    value: function getLine(index) {
      return this.scroll.line(index);
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      if (typeof index !== 'number') {
        return this.scroll.lines(index.index, index.length);
      } else {
        return this.scroll.lines(index, length);
      }
    }
  }, {
    key: 'getModule',
    value: function getModule(name) {
      return this.theme.modules[name];
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (focus) this.focus();
      this.update(); // Make sure we access getRange with editor in consistent state
      return this.selection.getRange()[0];
    }
  }, {
    key: 'getText',
    value: function getText() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload9 = overload(index, length);

      var _overload10 = _slicedToArray(_overload9, 2);

      index = _overload10[0];
      length = _overload10[1];

      return this.editor.getText(index, length);
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return this.selection.hasFocus();
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      var _this7 = this;

      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

      return modify.call(this, function () {
        return _this7.editor.insertEmbed(index, embed, value);
      }, source, index);
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text, name, value, source) {
      var _this8 = this;

      var formats = void 0;

      var _overload11 = overload(index, 0, name, value, source);

      var _overload12 = _slicedToArray(_overload11, 4);

      index = _overload12[0];
      formats = _overload12[2];
      source = _overload12[3];

      return modify.call(this, function () {
        return _this8.editor.insertText(index, text, formats);
      }, source, index, text.length);
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this.container.classList.contains('ql-disabled');
    }
  }, {
    key: 'off',
    value: function off() {
      return this.emitter.off.apply(this.emitter, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.emitter.on.apply(this.emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      return this.emitter.once.apply(this.emitter, arguments);
    }
  }, {
    key: 'pasteHTML',
    value: function pasteHTML(index, html, source) {
      this.clipboard.dangerouslyPasteHTML(index, html, source);
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length, source) {
      var _this9 = this;

      var _overload13 = overload(index, length, source);

      var _overload14 = _slicedToArray(_overload13, 4);

      index = _overload14[0];
      length = _overload14[1];
      source = _overload14[3];

      return modify.call(this, function () {
        return _this9.editor.removeFormat(index, length);
      }, source, index);
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      this.selection.scrollIntoView(this.scrollingContainer);
    }
  }, {
    key: 'setContents',
    value: function setContents(delta) {
      var _this10 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        var length = _this10.getLength();
        var deleted = _this10.editor.deleteText(0, length);
        var applied = _this10.editor.applyDelta(delta);
        var lastOp = applied.ops[applied.ops.length - 1];
        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
          _this10.editor.deleteText(_this10.getLength() - 1, 1);
          applied.delete(1);
        }
        var ret = deleted.compose(applied);
        return ret;
      }, source);
    }
  }, {
    key: 'setSelection',
    value: function setSelection(index, length, source) {
      if (index == null) {
        this.selection.setRange(null, length || Quill.sources.API);
      } else {
        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
        if (source !== _emitter4.default.sources.SILENT) {
          this.selection.scrollIntoView(this.scrollingContainer);
        }
      }
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      var delta = new _quillDelta2.default().insert(text);
      return this.setContents(delta, source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
      this.selection.update(source);
      return change;
    }
  }, {
    key: 'updateContents',
    value: function updateContents(delta) {
      var _this11 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        return _this11.editor.applyDelta(delta, source);
      }, source, true);
    }
  }]);

  return Quill;
}();

Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter4.default.events;
Quill.sources = _emitter4.default.sources;
// eslint-disable-next-line no-undef
Quill.version =  false ? 'dev' : "1.3.7";

Quill.imports = {
  'delta': _quillDelta2.default,
  'parchment': _parchment2.default,
  'core/module': _module2.default,
  'core/theme': _theme2.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend2.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme2.default;
  } else {
    userConfig.theme = Quill.import('themes/' + userConfig.theme);
    if (userConfig.theme == null) {
      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
    }
  }
  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  var moduleConfig = moduleNames.reduce(function (config, name) {
    var moduleClass = Quill.import('modules/' + name);
    if (moduleClass == null) {
      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }
  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }
    return config;
  }, {});
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
    return new _quillDelta2.default();
  }
  var range = index == null ? null : this.getSelection();
  var oldDelta = this.editor.delta;
  var change = modifier();
  if (range != null) {
    if (index === true) index = range.index;
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter4.default.sources.SILENT);
  }
  if (change.length() > 0) {
    var _emitter;

    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
    if (source !== _emitter4.default.sources.SILENT) {
      var _emitter2;

      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  var formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter4.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  var start = void 0,
      end = void 0;
  if (index instanceof _quillDelta2.default) {
    var _map = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
    });

    var _map2 = _slicedToArray(_map, 2);

    start = _map2[0];
    end = _map2[1];
  } else {
    var _map3 = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });

    var _map4 = _slicedToArray(_map3, 2);

    start = _map4[0];
    end = _map4[1];
  }
  return new _selection.Range(start, end - start);
}

exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = Quill;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Parchment$Inline) {
  _inherits(Inline, _Parchment$Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
        var blot = this.isolate(index, length);
        if (value) {
          blot.wrap(name, value);
        }
      } else {
        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
        var parent = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(parent);
        parent.wrap(this);
      }
    }
  }], [{
    key: 'compare',
    value: function compare(self, other) {
      var selfIndex = Inline.order.indexOf(self);
      var otherIndex = Inline.order.indexOf(other);
      if (selfIndex >= 0 || otherIndex >= 0) {
        return selfIndex - otherIndex;
      } else if (self === other) {
        return 0;
      } else if (self < other) {
        return -1;
      } else {
        return 1;
      }
    }
  }]);

  return Inline;
}(_parchment2.default.Inline);

Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];

exports.default = Inline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlot = function (_Parchment$Text) {
  _inherits(TextBlot, _Parchment$Text);

  function TextBlot() {
    _classCallCheck(this, TextBlot);

    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
  }

  return TextBlot;
}(_parchment2.default.Text);

exports.default = TextBlot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventemitter = __webpack_require__(54);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:events');

var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        var _node$__quill$emitter;

        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
      }
    });
  });
});

var Emitter = function (_EventEmitter) {
  _inherits(Emitter, _EventEmitter);

  function Emitter() {
    _classCallCheck(this, Emitter);

    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

    _this.listeners = {};
    _this.on('error', debug.error);
    return _this;
  }

  _createClass(Emitter, [{
    key: 'emit',
    value: function emit() {
      debug.log.apply(debug, arguments);
      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
    }
  }, {
    key: 'handleDOM',
    value: function handleDOM(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (this.listeners[event.type] || []).forEach(function (_ref) {
        var node = _ref.node,
            handler = _ref.handler;

        if (event.target === node || node.contains(event.target)) {
          handler.apply(undefined, [event].concat(args));
        }
      });
    }
  }, {
    key: 'listenDOM',
    value: function listenDOM(eventName, node, handler) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push({ node: node, handler: handler });
    }
  }]);

  return Emitter;
}(_eventemitter2.default);

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};

exports.default = Emitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(quill) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Module);

  this.quill = quill;
  this.options = options;
};

Module.DEFAULTS = {};

exports.default = Module;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levels = ['error', 'warn', 'log', 'info'];
var level = 'warn';

function debug(method) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

exports.default = namespace;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(52);
var isArguments = __webpack_require__(53);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Inline) {
  _inherits(Code, _Inline);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_inline2.default);

Code.blotName = 'code';
Code.tagName = 'CODE';

var CodeBlock = function (_Block) {
  _inherits(CodeBlock, _Block);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
  }

  _createClass(CodeBlock, [{
    key: 'delta',
    value: function delta() {
      var _this3 = this;

      var text = this.domNode.textContent;
      if (text.endsWith('\n')) {
        // Should always be true
        text = text.slice(0, -1);
      }
      return text.split('\n').reduce(function (delta, frag) {
        return delta.insert(frag).insert('\n', _this3.formats());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) return;

      var _descendant = this.descendant(_text2.default, this.length() - 1),
          _descendant2 = _slicedToArray(_descendant, 1),
          text = _descendant2[0];

      if (text != null) {
        text.deleteAt(text.length() - 1, 1);
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length === 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
        return;
      }
      var nextNewline = this.newlineIndex(index);
      if (nextNewline < 0 || nextNewline >= index + length) return;
      var prevNewline = this.newlineIndex(index, true) + 1;
      var isolateLength = nextNewline - prevNewline + 1;
      var blot = this.isolate(prevNewline, isolateLength);
      var next = blot.next;
      blot.format(name, value);
      if (next instanceof CodeBlock) {
        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
      }
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return;

      var _descendant3 = this.descendant(_text2.default, index),
          _descendant4 = _slicedToArray(_descendant3, 2),
          text = _descendant4[0],
          offset = _descendant4[1];

      text.insertAt(offset, value);
    }
  }, {
    key: 'length',
    value: function length() {
      var length = this.domNode.textContent.length;
      if (!this.domNode.textContent.endsWith('\n')) {
        return length + 1;
      }
      return length;
    }
  }, {
    key: 'newlineIndex',
    value: function newlineIndex(searchIndex) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!reverse) {
        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
        return offset > -1 ? searchIndex + offset : -1;
      } else {
        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      if (!this.domNode.textContent.endsWith('\n')) {
        this.appendChild(_parchment2.default.create('text', '\n'));
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
        next.optimize(context);
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
        var blot = _parchment2.default.find(node);
        if (blot == null) {
          node.parentNode.removeChild(node);
        } else if (blot instanceof _parchment2.default.Embed) {
          blot.remove();
        } else {
          blot.unwrap();
        }
      });
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
      domNode.setAttribute('spellcheck', false);
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return CodeBlock;
}(_block2.default);

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';

exports.Code = Code;
exports.default = CodeBlock;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASCII = /^[ -~]*$/;

var Editor = function () {
  function Editor(scroll) {
    _classCallCheck(this, Editor);

    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  _createClass(Editor, [{
    key: 'applyDelta',
    value: function applyDelta(delta) {
      var _this = this;

      var consumeNextNewline = false;
      this.scroll.update();
      var scrollLength = this.scroll.length();
      this.scroll.batchStart();
      delta = normalizeDelta(delta);
      delta.reduce(function (index, op) {
        var length = op.retain || op.delete || op.insert.length || 1;
        var attributes = op.attributes || {};
        if (op.insert != null) {
          if (typeof op.insert === 'string') {
            var text = op.insert;
            if (text.endsWith('\n') && consumeNextNewline) {
              consumeNextNewline = false;
              text = text.slice(0, -1);
            }
            if (index >= scrollLength && !text.endsWith('\n')) {
              consumeNextNewline = true;
            }
            _this.scroll.insertAt(index, text);

            var _scroll$line = _this.scroll.line(index),
                _scroll$line2 = _slicedToArray(_scroll$line, 2),
                line = _scroll$line2[0],
                offset = _scroll$line2[1];

            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
            if (line instanceof _block2.default) {
              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
                  leaf = _line$descendant2[0];

              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
            }
            attributes = _op2.default.attributes.diff(formats, attributes) || {};
          } else if (_typeof(op.insert) === 'object') {
            var key = Object.keys(op.insert)[0]; // There should only be one key
            if (key == null) return index;
            _this.scroll.insertAt(index, key, op.insert[key]);
          }
          scrollLength += length;
        }
        Object.keys(attributes).forEach(function (name) {
          _this.scroll.formatAt(index, length, name, attributes[name]);
        });
        return index + length;
      }, 0);
      delta.reduce(function (index, op) {
        if (typeof op.delete === 'number') {
          _this.scroll.deleteAt(index, op.delete);
          return index;
        }
        return index + (op.retain || op.insert.length || 1);
      }, 0);
      this.scroll.batchEnd();
      return this.update(delta);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length) {
      this.scroll.deleteAt(index, length);
      return this.update(new _quillDelta2.default().retain(index).delete(length));
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length) {
      var _this2 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.scroll.update();
      Object.keys(formats).forEach(function (format) {
        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
        var lines = _this2.scroll.lines(index, Math.max(length, 1));
        var lengthRemaining = length;
        lines.forEach(function (line) {
          var lineLength = line.length();
          if (!(line instanceof _code2.default)) {
            line.format(format, formats[format]);
          } else {
            var codeIndex = index - line.offset(_this2.scroll);
            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
            line.formatAt(codeIndex, codeLength, format, formats[format]);
          }
          lengthRemaining -= lineLength;
        });
      });
      this.scroll.optimize();
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length) {
      var _this3 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(formats).forEach(function (format) {
        _this3.scroll.formatAt(index, length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'getContents',
    value: function getContents(index, length) {
      return this.delta.slice(index, index + length);
    }
  }, {
    key: 'getDelta',
    value: function getDelta() {
      return this.scroll.lines().reduce(function (delta, line) {
        return delta.concat(line.delta());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'getFormat',
    value: function getFormat(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var lines = [],
          leaves = [];
      if (length === 0) {
        this.scroll.path(index).forEach(function (path) {
          var _path = _slicedToArray(path, 1),
              blot = _path[0];

          if (blot instanceof _block2.default) {
            lines.push(blot);
          } else if (blot instanceof _parchment2.default.Leaf) {
            leaves.push(blot);
          }
        });
      } else {
        lines = this.scroll.lines(index, length);
        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
      }
      var formatsArr = [lines, leaves].map(function (blots) {
        if (blots.length === 0) return {};
        var formats = (0, _block.bubbleFormats)(blots.shift());
        while (Object.keys(formats).length > 0) {
          var blot = blots.shift();
          if (blot == null) return formats;
          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
        }
        return formats;
      });
      return _extend2.default.apply(_extend2.default, formatsArr);
    }
  }, {
    key: 'getText',
    value: function getText(index, length) {
      return this.getContents(index, length).filter(function (op) {
        return typeof op.insert === 'string';
      }).map(function (op) {
        return op.insert;
      }).join('');
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      this.scroll.insertAt(index, embed, value);
      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text) {
      var _this4 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      this.scroll.insertAt(index, text);
      Object.keys(formats).forEach(function (format) {
        _this4.scroll.formatAt(index, text.length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'isBlank',
    value: function isBlank() {
      if (this.scroll.children.length == 0) return true;
      if (this.scroll.children.length > 1) return false;
      var block = this.scroll.children.head;
      if (block.statics.blotName !== _block2.default.blotName) return false;
      if (block.children.length > 1) return false;
      return block.children.head instanceof _break2.default;
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length) {
      var text = this.getText(index, length);

      var _scroll$line3 = this.scroll.line(index + length),
          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
          line = _scroll$line4[0],
          offset = _scroll$line4[1];

      var suffixLength = 0,
          suffix = new _quillDelta2.default();
      if (line != null) {
        if (!(line instanceof _code2.default)) {
          suffixLength = line.length() - offset;
        } else {
          suffixLength = line.newlineIndex(offset) - offset + 1;
        }
        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
      }
      var contents = this.getContents(index, length + suffixLength);
      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
      var delta = new _quillDelta2.default().retain(index).concat(diff);
      return this.applyDelta(delta);
    }
  }, {
    key: 'update',
    value: function update(change) {
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var oldDelta = this.delta;
      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
        // Optimization for character changes
        var textBlot = _parchment2.default.find(mutations[0].target);
        var formats = (0, _block.bubbleFormats)(textBlot);
        var index = textBlot.offset(this.scroll);
        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
        var oldText = new _quillDelta2.default().insert(oldValue);
        var newText = new _quillDelta2.default().insert(textBlot.value());
        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
        change = diffDelta.reduce(function (delta, op) {
          if (op.insert) {
            return delta.insert(op.insert, formats);
          } else {
            return delta.push(op);
          }
        }, new _quillDelta2.default());
        this.delta = oldDelta.compose(change);
      } else {
        this.delta = this.getDelta();
        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
          change = oldDelta.diff(this.delta, cursorIndex);
        }
      }
      return change;
    }
  }]);

  return Editor;
}();

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      var attributes = (0, _clone2.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({ image: op.attributes.image }, attributes);
    }
    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone2.default)(op);
      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }
    if (typeof op.insert === 'string') {
      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }
    return delta.push(op);
  }, new _quillDelta2.default());
}

exports.default = Editor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill:selection');

var Range = function Range(index) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Range);

  this.index = index;
  this.length = length;
};

var Selection = function () {
  function Selection(scroll, emitter) {
    var _this = this;

    _classCallCheck(this, Selection);

    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment2.default.create('cursor', this);
    // savedRange is last non-null range
    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, function () {
      if (!_this.mouseDown) {
        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
        _this.update(_emitter4.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
      if (!_this.hasFocus()) return;
      var native = _this.getNativeRange();
      if (native == null) return;
      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects
      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
        try {
          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
      if (context.range) {
        var _context$range = context.range,
            startNode = _context$range.startNode,
            startOffset = _context$range.startOffset,
            endNode = _context$range.endNode,
            endOffset = _context$range.endOffset;

        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter4.default.sources.SILENT);
  }

  _createClass(Selection, [{
    key: 'handleComposition',
    value: function handleComposition() {
      var _this2 = this;

      this.root.addEventListener('compositionstart', function () {
        _this2.composing = true;
      });
      this.root.addEventListener('compositionend', function () {
        _this2.composing = false;
        if (_this2.cursor.parent) {
          var range = _this2.cursor.restore();
          if (!range) return;
          setTimeout(function () {
            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
          }, 1);
        }
      });
    }
  }, {
    key: 'handleDragging',
    value: function handleDragging() {
      var _this3 = this;

      this.emitter.listenDOM('mousedown', document.body, function () {
        _this3.mouseDown = true;
      });
      this.emitter.listenDOM('mouseup', document.body, function () {
        _this3.mouseDown = false;
        _this3.update(_emitter4.default.sources.USER);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.hasFocus()) return;
      this.root.focus();
      this.setRange(this.savedRange);
    }
  }, {
    key: 'format',
    value: function format(_format, value) {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
      this.scroll.update();
      var nativeRange = this.getNativeRange();
      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
      if (nativeRange.start.node !== this.cursor.textNode) {
        var blot = _parchment2.default.find(nativeRange.start.node, false);
        if (blot == null) return;
        // TODO Give blot ability to not split
        if (blot instanceof _parchment2.default.Leaf) {
          var after = blot.split(nativeRange.start.offset);
          blot.parent.insertBefore(this.cursor, after);
        } else {
          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
        }
        this.cursor.attach();
      }
      this.cursor.format(_format, value);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var scrollLength = this.scroll.length();
      index = Math.min(index, scrollLength - 1);
      length = Math.min(index + length, scrollLength - 1) - index;
      var node = void 0,
          _scroll$leaf = this.scroll.leaf(index),
          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
          leaf = _scroll$leaf2[0],
          offset = _scroll$leaf2[1];
      if (leaf == null) return null;

      var _leaf$position = leaf.position(offset, true);

      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

      node = _leaf$position2[0];
      offset = _leaf$position2[1];

      var range = document.createRange();
      if (length > 0) {
        range.setStart(node, offset);

        var _scroll$leaf3 = this.scroll.leaf(index + length);

        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

        leaf = _scroll$leaf4[0];
        offset = _scroll$leaf4[1];

        if (leaf == null) return null;

        var _leaf$position3 = leaf.position(offset, true);

        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

        node = _leaf$position4[0];
        offset = _leaf$position4[1];

        range.setEnd(node, offset);
        return range.getBoundingClientRect();
      } else {
        var side = 'left';
        var rect = void 0;
        if (node instanceof Text) {
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = 'right';
          }
          rect = range.getBoundingClientRect();
        } else {
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = 'right';
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
    }
  }, {
    key: 'getNativeRange',
    value: function getNativeRange() {
      var selection = document.getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      var nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      var range = this.normalizeNative(nativeRange);
      debug.info('getNativeRange', range);
      return range;
    }
  }, {
    key: 'getRange',
    value: function getRange() {
      var normalized = this.getNativeRange();
      if (normalized == null) return [null, null];
      var range = this.normalizedToRange(normalized);
      return [range, normalized];
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return document.activeElement === this.root;
    }
  }, {
    key: 'normalizedToRange',
    value: function normalizedToRange(range) {
      var _this4 = this;

      var positions = [[range.start.node, range.start.offset]];
      if (!range.native.collapsed) {
        positions.push([range.end.node, range.end.offset]);
      }
      var indexes = positions.map(function (position) {
        var _position = _slicedToArray(position, 2),
            node = _position[0],
            offset = _position[1];

        var blot = _parchment2.default.find(node, true);
        var index = blot.offset(_this4.scroll);
        if (offset === 0) {
          return index;
        } else if (blot instanceof _parchment2.default.Container) {
          return index + blot.length();
        } else {
          return index + blot.index(node, offset);
        }
      });
      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
      return new Range(start, end - start);
    }
  }, {
    key: 'normalizeNative',
    value: function normalizeNative(nativeRange) {
      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
        return null;
      }
      var range = {
        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
        native: nativeRange
      };
      [range.start, range.end].forEach(function (position) {
        var node = position.node,
            offset = position.offset;
        while (!(node instanceof Text) && node.childNodes.length > 0) {
          if (node.childNodes.length > offset) {
            node = node.childNodes[offset];
            offset = 0;
          } else if (node.childNodes.length === offset) {
            node = node.lastChild;
            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
          } else {
            break;
          }
        }
        position.node = node, position.offset = offset;
      });
      return range;
    }
  }, {
    key: 'rangeToNative',
    value: function rangeToNative(range) {
      var _this5 = this;

      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
      var args = [];
      var scrollLength = this.scroll.length();
      indexes.forEach(function (index, i) {
        index = Math.min(scrollLength - 1, index);
        var node = void 0,
            _scroll$leaf5 = _this5.scroll.leaf(index),
            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
            leaf = _scroll$leaf6[0],
            offset = _scroll$leaf6[1];
        var _leaf$position5 = leaf.position(offset, i !== 0);

        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

        node = _leaf$position6[0];
        offset = _leaf$position6[1];

        args.push(node, offset);
      });
      if (args.length < 2) {
        args = args.concat(args);
      }
      return args;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(scrollingContainer) {
      var range = this.lastRange;
      if (range == null) return;
      var bounds = this.getBounds(range.index, range.length);
      if (bounds == null) return;
      var limit = this.scroll.length() - 1;

      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
          _scroll$line2 = _slicedToArray(_scroll$line, 1),
          first = _scroll$line2[0];

      var last = first;
      if (range.length > 0) {
        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

        last = _scroll$line4[0];
      }
      if (first == null || last == null) return;
      var scrollBounds = scrollingContainer.getBoundingClientRect();
      if (bounds.top < scrollBounds.top) {
        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
      } else if (bounds.bottom > scrollBounds.bottom) {
        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
      }
    }
  }, {
    key: 'setNativeRange',
    value: function setNativeRange(startNode, startOffset) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
        return;
      }
      var selection = document.getSelection();
      if (selection == null) return;
      if (startNode != null) {
        if (!this.hasFocus()) this.root.focus();
        var native = (this.getNativeRange() || {}).native;
        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

          if (startNode.tagName == "BR") {
            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
            startNode = startNode.parentNode;
          }
          if (endNode.tagName == "BR") {
            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
            endNode = endNode.parentNode;
          }
          var range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        selection.removeAllRanges();
        this.root.blur();
        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
      }
    }
  }, {
    key: 'setRange',
    value: function setRange(range) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      if (typeof force === 'string') {
        source = force;
        force = false;
      }
      debug.info('setRange', range);
      if (range != null) {
        var args = this.rangeToNative(range);
        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
      } else {
        this.setNativeRange(null);
      }
      this.update(source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var oldRange = this.lastRange;

      var _getRange = this.getRange(),
          _getRange2 = _slicedToArray(_getRange, 2),
          lastRange = _getRange2[0],
          nativeRange = _getRange2[1];

      this.lastRange = lastRange;
      if (this.lastRange != null) {
        this.savedRange = this.lastRange;
      }
      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
        var _emitter;

        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
          this.cursor.restore();
        }
        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
        if (source !== _emitter4.default.sources.SILENT) {
          var _emitter2;

          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
        }
      }
    }
  }]);

  return Selection;
}();

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }
  return parent.contains(descendant);
}

exports.Range = Range;
exports.default = Selection;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_Parchment$Embed) {
  _inherits(Break, _Parchment$Embed);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'insertInto',
    value: function insertInto(parent, ref) {
      if (parent.children.length === 0) {
        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
      } else {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment2.default.Embed);

Break.blotName = 'break';
Break.tagName = 'BR';

exports.default = Break;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(44);
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var store_1 = __webpack_require__(31);
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        var _a;
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__(11);
var extend = __webpack_require__(3);


var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);
      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }
          return copy;
        }, {});
      }
      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    diff: function(a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b;  // b simply overwrites us without priority
      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },

  iterator: function (ops) {
    return new Iterator(ops);
  },

  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};


function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
};

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];
  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp)
    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }
    if (typeof nextOp['delete'] === 'number') {
      return { 'delete': length };
    } else {
      var retOp = {};
      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }
      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }
      return retOp;
    }
  } else {
    return { retain: Infinity };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }
  return 'retain';
};

Iterator.prototype.rest = function () {
  if (!this.hasNext()) {
    return [];
  } else if (this.offset === 0) {
    return this.ops.slice(this.index);
  } else {
    var offset = this.offset;
    var index = this.index;
    var next = this.next();
    var rest = this.ops.slice(this.index);
    this.offset = offset;
    this.index = index;
    return [next].concat(rest);
  }
};


module.exports = lib;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isLine(blot) {
  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
}

var Scroll = function (_Parchment$Scroll) {
  _inherits(Scroll, _Parchment$Scroll);

  function Scroll(domNode, config) {
    _classCallCheck(this, Scroll);

    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

    _this.emitter = config.emitter;
    if (Array.isArray(config.whitelist)) {
      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    }
    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
    _this.domNode.addEventListener('DOMNodeInserted', function () {});
    _this.optimize();
    _this.enable();
    return _this;
  }

  _createClass(Scroll, [{
    key: 'batchStart',
    value: function batchStart() {
      this.batch = true;
    }
  }, {
    key: 'batchEnd',
    value: function batchEnd() {
      this.batch = false;
      this.optimize();
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      var _line = this.line(index),
          _line2 = _slicedToArray(_line, 2),
          first = _line2[0],
          offset = _line2[1];

      var _line3 = this.line(index + length),
          _line4 = _slicedToArray(_line3, 1),
          last = _line4[0];

      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
      if (last != null && first !== last && offset > 0) {
        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
          this.optimize();
          return;
        }
        if (first instanceof _code2.default) {
          var newlineIndex = first.newlineIndex(first.length(), true);
          if (newlineIndex > -1) {
            first = first.split(newlineIndex + 1);
            if (first === last) {
              this.optimize();
              return;
            }
          }
        } else if (last instanceof _code2.default) {
          var _newlineIndex = last.newlineIndex(0);
          if (_newlineIndex > -1) {
            last.split(_newlineIndex + 1);
          }
        }
        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
        first.moveChildren(last, ref);
        first.remove();
      }
      this.optimize();
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.domNode.setAttribute('contenteditable', enabled);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, format, value) {
      if (this.whitelist != null && !this.whitelist[format]) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      this.optimize();
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
      if (index >= this.length()) {
        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
          var blot = _parchment2.default.create(this.statics.defaultChild);
          this.appendChild(blot);
          if (def == null && value.endsWith('\n')) {
            value = value.slice(0, -1);
          }
          blot.insertAt(0, value, def);
        } else {
          var embed = _parchment2.default.create(value, def);
          this.appendChild(embed);
        }
      } else {
        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
      }
      this.optimize();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
        var wrapper = _parchment2.default.create(this.statics.defaultChild);
        wrapper.appendChild(blot);
        blot = wrapper;
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
    }
  }, {
    key: 'leaf',
    value: function leaf(index) {
      return this.path(index).pop() || [null, -1];
    }
  }, {
    key: 'line',
    value: function line(index) {
      if (index === this.length()) {
        return this.line(index - 1);
      }
      return this.descendant(isLine, index);
    }
  }, {
    key: 'lines',
    value: function lines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      var getLines = function getLines(blot, index, length) {
        var lines = [],
            lengthLeft = length;
        blot.children.forEachAt(index, length, function (child, index, length) {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof _parchment2.default.Container) {
            lines = lines.concat(getLines(child, index, lengthLeft));
          }
          lengthLeft -= length;
        });
        return lines;
      };
      return getLines(this, index, length);
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.batch === true) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
      }
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
    }
  }, {
    key: 'update',
    value: function update(mutations) {
      if (this.batch === true) return;
      var source = _emitter2.default.sources.USER;
      if (typeof mutations === 'string') {
        source = mutations;
      }
      if (!Array.isArray(mutations)) {
        mutations = this.observer.takeRecords();
      }
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
      }
    }
  }]);

  return Scroll;
}(_parchment2.default.Scroll);

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

exports.default = Scroll;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:keyboard');

var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

var Keyboard = function (_Module) {
  _inherits(Keyboard, _Module);

  _createClass(Keyboard, null, [{
    key: 'match',
    value: function match(evt, binding) {
      binding = normalize(binding);
      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })) {
        return false;
      }
      return binding.key === (evt.which || evt.keyCode);
    }
  }]);

  function Keyboard(quill, options) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

    _this.bindings = {};
    Object.keys(_this.options.bindings).forEach(function (name) {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }
      if (_this.options.bindings[name]) {
        _this.addBinding(_this.options.bindings[name]);
      }
    });
    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
    } else {
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
    }
    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
    _this.listen();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'addBinding',
    value: function addBinding(key) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var binding = normalize(key);
      if (binding == null || binding.key == null) {
        return debug.warn('Attempted to add invalid keyboard binding', binding);
      }
      if (typeof context === 'function') {
        context = { handler: context };
      }
      if (typeof handler === 'function') {
        handler = { handler: handler };
      }
      binding = (0, _extend2.default)(binding, context, handler);
      this.bindings[binding.key] = this.bindings[binding.key] || [];
      this.bindings[binding.key].push(binding);
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.quill.root.addEventListener('keydown', function (evt) {
        if (evt.defaultPrevented) return;
        var which = evt.which || evt.keyCode;
        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
          return Keyboard.match(evt, binding);
        });
        if (bindings.length === 0) return;
        var range = _this2.quill.getSelection();
        if (range == null || !_this2.quill.hasFocus()) return;

        var _quill$getLine = _this2.quill.getLine(range.index),
            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
            line = _quill$getLine2[0],
            offset = _quill$getLine2[1];

        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
            leafStart = _quill$getLeaf2[0],
            offsetStart = _quill$getLeaf2[1];

        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
            _ref2 = _slicedToArray(_ref, 2),
            leafEnd = _ref2[0],
            offsetEnd = _ref2[1];

        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
        var curContext = {
          collapsed: range.length === 0,
          empty: range.length === 0 && line.length() <= 1,
          format: _this2.quill.getFormat(range),
          offset: offset,
          prefix: prefixText,
          suffix: suffixText
        };
        var prevented = bindings.some(function (binding) {
          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
          if (binding.empty != null && binding.empty !== curContext.empty) return false;
          if (binding.offset != null && binding.offset !== curContext.offset) return false;
          if (Array.isArray(binding.format)) {
            // any format is present
            if (binding.format.every(function (name) {
              return curContext.format[name] == null;
            })) {
              return false;
            }
          } else if (_typeof(binding.format) === 'object') {
            // all formats must match
            if (!Object.keys(binding.format).every(function (name) {
              if (binding.format[name] === true) return curContext.format[name] != null;
              if (binding.format[name] === false) return curContext.format[name] == null;
              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
            })) {
              return false;
            }
          }
          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
          return binding.handler.call(_this2, range, curContext) !== true;
        });
        if (prevented) {
          evt.preventDefault();
        }
      });
    }
  }]);

  return Keyboard;
}(_module2.default);

Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function handler(range) {
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function handler(range) {
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function handler(range, context) {
        this.quill.format('list', false, _quill2.default.sources.USER);
        if (context.format.indent) {
          this.quill.format('indent', false, _quill2.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: { list: 'checked' },
      handler: function handler(range) {
        var _quill$getLine3 = this.quill.getLine(range.index),
            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
            line = _quill$getLine4[0],
            offset = _quill$getLine4[1];

        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function handler(range, context) {
        var _quill$getLine5 = this.quill.getLine(range.index),
            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
            line = _quill$getLine6[0],
            offset = _quill$getLine6[1];

        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: { list: false },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function handler(range, context) {
        var length = context.prefix.length;

        var _quill$getLine7 = this.quill.getLine(range.index),
            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
            line = _quill$getLine8[0],
            offset = _quill$getLine8[1];

        if (offset > length) return true;
        var value = void 0;
        switch (context.prefix.trim()) {
          case '[]':case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function handler(range) {
        var _quill$getLine9 = this.quill.getLine(range.index),
            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
            line = _quill$getLine10[0],
            offset = _quill$getLine10[1];

        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
        this.quill.updateContents(delta, _quill2.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  var _ref3;

  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return _ref3 = {
    key: key,
    shiftKey: shiftKey,
    altKey: null
  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
    var index = range.index;
    if (key === Keyboard.keys.RIGHT) {
      index += range.length + 1;
    }

    var _quill$getLeaf3 = this.quill.getLeaf(index),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        leaf = _quill$getLeaf4[0];

    if (!(leaf instanceof _parchment2.default.Embed)) return true;
    if (key === Keyboard.keys.LEFT) {
      if (shiftKey) {
        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
      }
    } else {
      if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
      }
    }
    return false;
  }), _ref3;
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;

  var _quill$getLine11 = this.quill.getLine(range.index),
      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
      line = _quill$getLine12[0];

  var formats = {};
  if (context.offset === 0) {
    var _quill$getLine13 = this.quill.getLine(range.index - 1),
        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
        prev = _quill$getLine14[0];

    if (prev != null && prev.length() > 1) {
      var curFormats = line.formats();
      var prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
    }
  }
  // Check for astral symbols
  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
  }
  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  var formats = {},
      nextLength = 0;

  var _quill$getLine15 = this.quill.getLine(range.index),
      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
      line = _quill$getLine16[0];

  if (context.offset >= line.length() - 1) {
    var _quill$getLine17 = this.quill.getLine(range.index + 1),
        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
        next = _quill$getLine18[0];

    if (next) {
      var curFormats = line.formats();
      var nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }
  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  var lines = this.quill.getLines(range);
  var formats = {};
  if (lines.length > 1) {
    var firstFormats = lines[0].formats();
    var lastFormats = lines[lines.length - 1].formats();
    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
  }
  this.quill.deleteText(range, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
  }
  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  var _this3 = this;

  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }
  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }
    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
  // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable
  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(function (name) {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: { 'code-block': true },
    handler: function handler(range) {
      var CodeBlock = _parchment2.default.query('code-block');
      var index = range.index,
          length = range.length;

      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
          block = _quill$scroll$descend2[0],
          offset = _quill$scroll$descend2[1];

      if (block == null) return;
      var scrollIndex = this.quill.getIndex(block);
      var start = block.newlineIndex(offset, true) + 1;
      var end = block.newlineIndex(scrollIndex + offset + length);
      var lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach(function (line, i) {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
        offset += line.length + 1;
      });
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function handler(range, context) {
      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({ key: binding });
  }
  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
    binding = (0, _clone2.default)(binding, false);
  }
  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

exports.default = Keyboard;
exports.SHORTKEY = SHORTKEY;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_Parchment$Embed) {
  _inherits(Cursor, _Parchment$Embed);

  _createClass(Cursor, null, [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  function Cursor(domNode, selection) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

    _this.selection = selection;
    _this.textNode = document.createTextNode(Cursor.CONTENTS);
    _this.domNode.appendChild(_this.textNode);
    _this._length = 0;
    return _this;
  }

  _createClass(Cursor, [{
    key: 'detach',
    value: function detach() {
      // super.detach() will also clear domNode.__blot
      if (this.parent != null) this.parent.removeChild(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (this._length !== 0) {
        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
      }
      var target = this,
          index = 0;
      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
        index += target.offset(target.parent);
        target = target.parent;
      }
      if (target != null) {
        this._length = Cursor.CONTENTS.length;
        target.optimize();
        target.formatAt(index, Cursor.CONTENTS.length, name, value);
        this._length = 0;
      }
    }
  }, {
    key: 'index',
    value: function index(node, offset) {
      if (node === this.textNode) return 0;
      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'position',
    value: function position() {
      return [this.textNode, this.textNode.data.length];
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
      this.parent = null;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this.selection.composing || this.parent == null) return;
      var textNode = this.textNode;
      var range = this.selection.getNativeRange();
      var restoreText = void 0,
          start = void 0,
          end = void 0;
      if (range != null && range.start.node === textNode && range.end.node === textNode) {
        var _ref = [textNode, range.start.offset, range.end.offset];
        restoreText = _ref[0];
        start = _ref[1];
        end = _ref[2];
      }
      // Link format will insert text outside of anchor tag
      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
      }
      if (this.textNode.data !== Cursor.CONTENTS) {
        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
        if (this.next instanceof _text2.default) {
          restoreText = this.next.domNode;
          this.next.insertAt(0, text);
          this.textNode.data = Cursor.CONTENTS;
        } else {
          this.textNode.data = text;
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
      }
      this.remove();
      if (start != null) {
        var _map = [start, end].map(function (offset) {
          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
        });

        var _map2 = _slicedToArray(_map, 2);

        start = _map2[0];
        end = _map2[1];

        return {
          startNode: restoreText,
          startOffset: start,
          endNode: restoreText,
          endOffset: end
        };
      }
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      if (mutations.some(function (mutation) {
        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
      })) {
        var range = this.restore();
        if (range) context.range = range;
      }
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }]);

  return Cursor;
}(_parchment2.default.Embed);

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


exports.default = Cursor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Parchment$Container) {
  _inherits(Container, _Parchment$Container);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment2.default.Container);

Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

exports.default = Container;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_Parchment$Attributor) {
  _inherits(ColorAttributor, _Parchment$Attributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      return '#' + value.split(',').map(function (component) {
        return ('00' + parseInt(component).toString(16)).slice(-2);
      }).join('');
    }
  }]);

  return ColorAttributor;
}(_parchment2.default.Attributor.Style);

var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment2.default.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __webpack_require__(22);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __webpack_require__(55);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __webpack_require__(42);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,

  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default
});

_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

exports.default = _quill2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent = Registry.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var Registry = __webpack_require__(1);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(quill, options) {
    _classCallCheck(this, Theme);

    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  _createClass(Theme, [{
    key: 'init',
    value: function init() {
      var _this = this;

      Object.keys(this.options.modules).forEach(function (name) {
        if (_this.modules[name] == null) {
          _this.addModule(name);
        }
      });
    }
  }, {
    key: 'addModule',
    value: function addModule(name) {
      var moduleClass = this.quill.constructor.import('modules/' + name);
      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
      return this.modules[name];
    }
  }]);

  return Theme;
}();

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};

exports.default = Theme;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_Parchment$Embed) {
  _inherits(Embed, _Parchment$Embed);

  function Embed(node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = void 0,
          textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment2.default.Embed);

exports.default = Embed;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};

var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _color = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment2.default.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['rtl']
};

var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};

var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

var FontStyleAttributor = function (_Parchment$Attributor) {
  _inherits(FontStyleAttributor, _Parchment$Attributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment2.default.Attributor.Style);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);

exports.FontStyle = FontStyle;
exports.FontClass = FontClass;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Module) {
  _inherits(History, _Module);

  function History(quill, options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

    _this.lastRecorded = 0;
    _this.ignoreChange = false;
    _this.clear();
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
        _this.record(delta, oldDelta);
      } else {
        _this.transform(delta);
      }
    });
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
    if (/Win/i.test(navigator.platform)) {
      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
    }
    return _this;
  }

  _createClass(History, [{
    key: 'change',
    value: function change(source, dest) {
      if (this.stack[source].length === 0) return;
      var delta = this.stack[source].pop();
      this.stack[dest].push(delta);
      this.lastRecorded = 0;
      this.ignoreChange = true;
      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
      this.ignoreChange = false;
      var index = getLastChangeIndex(delta[source]);
      this.quill.setSelection(index);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.stack = { undo: [], redo: [] };
    }
  }, {
    key: 'cutoff',
    value: function cutoff() {
      this.lastRecorded = 0;
    }
  }, {
    key: 'record',
    value: function record(changeDelta, oldDelta) {
      if (changeDelta.ops.length === 0) return;
      this.stack.redo = [];
      var undoDelta = this.quill.getContents().diff(oldDelta);
      var timestamp = Date.now();
      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
        var delta = this.stack.undo.pop();
        undoDelta = undoDelta.compose(delta.undo);
        changeDelta = delta.redo.compose(changeDelta);
      } else {
        this.lastRecorded = timestamp;
      }
      this.stack.undo.push({
        redo: changeDelta,
        undo: undoDelta
      });
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.change('redo', 'undo');
    }
  }, {
    key: 'transform',
    value: function transform(delta) {
      this.stack.undo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
      this.stack.redo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.change('undo', 'redo');
    }
  }]);

  return History;
}(_module2.default);

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  var lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(delta) {
  var deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  var changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}

exports.default = History;
exports.getLastChangeIndex = getLastChangeIndex;

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length = cur.length();
            if (index < length ||
                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var Registry = __webpack_require__(1);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  var _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function (token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend2 = __webpack_require__(3);

var _extend3 = _interopRequireDefault(_extend2);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _align = __webpack_require__(36);

var _background = __webpack_require__(37);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _color = __webpack_require__(26);

var _direction = __webpack_require__(38);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:clipboard');

var DOM_KEY = '__ql-matcher';

var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var Clipboard = function (_Module) {
  _inherits(Clipboard, _Module);

  function Clipboard(quill, options) {
    _classCallCheck(this, Clipboard);

    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
    _this.container = _this.quill.addContainer('ql-clipboard');
    _this.container.setAttribute('contenteditable', true);
    _this.container.setAttribute('tabindex', -1);
    _this.matchers = [];
    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          selector = _ref2[0],
          matcher = _ref2[1];

      if (!options.matchVisual && matcher === matchSpacing) return;
      _this.addMatcher(selector, matcher);
    });
    return _this;
  }

  _createClass(Clipboard, [{
    key: 'addMatcher',
    value: function addMatcher(selector, matcher) {
      this.matchers.push([selector, matcher]);
    }
  }, {
    key: 'convert',
    value: function convert(html) {
      if (typeof html === 'string') {
        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
        return this.convert();
      }
      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
      if (formats[_code2.default.blotName]) {
        var text = this.container.innerText;
        this.container.innerHTML = '';
        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
      }

      var _prepareMatching = this.prepareMatching(),
          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
          elementMatchers = _prepareMatching2[0],
          textMatchers = _prepareMatching2[1];

      var delta = traverse(this.container, elementMatchers, textMatchers);
      // Remove trailing newline
      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
      }
      debug.log('convert', this.container.innerHTML, delta);
      this.container.innerHTML = '';
      return delta;
    }
  }, {
    key: 'dangerouslyPasteHTML',
    value: function dangerouslyPasteHTML(index, html) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

      if (typeof index === 'string') {
        this.quill.setContents(this.convert(index), html);
        this.quill.setSelection(0, _quill2.default.sources.SILENT);
      } else {
        var paste = this.convert(html);
        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'onPaste',
    value: function onPaste(e) {
      var _this2 = this;

      if (e.defaultPrevented || !this.quill.isEnabled()) return;
      var range = this.quill.getSelection();
      var delta = new _quillDelta2.default().retain(range.index);
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.container.focus();
      this.quill.selection.update(_quill2.default.sources.SILENT);
      setTimeout(function () {
        delta = delta.concat(_this2.convert()).delete(range.length);
        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
        // range.length contributes to delta.length()
        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
        _this2.quill.scrollingContainer.scrollTop = scrollTop;
        _this2.quill.focus();
      }, 1);
    }
  }, {
    key: 'prepareMatching',
    value: function prepareMatching() {
      var _this3 = this;

      var elementMatchers = [],
          textMatchers = [];
      this.matchers.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            selector = _pair[0],
            matcher = _pair[1];

        switch (selector) {
          case Node.TEXT_NODE:
            textMatchers.push(matcher);
            break;
          case Node.ELEMENT_NODE:
            elementMatchers.push(matcher);
            break;
          default:
            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
            break;
        }
      });
      return [elementMatchers, textMatchers];
    }
  }]);

  return Clipboard;
}(_module2.default);

Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
      }
    }, new _quillDelta2.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  var DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  var endText = "";
  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    var op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  var style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta2.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new _quillDelta2.default());
  } else {
    return new _quillDelta2.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
  var classes = _parchment2.default.Attributor.Class.keys(node);
  var styles = _parchment2.default.Attributor.Style.keys(node);
  var formats = {};
  attributes.concat(classes).concat(styles).forEach(function (name) {
    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof _parchment2.default.Embed) {
    var embed = {};
    var value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta2.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchIgnore() {
  return new _quillDelta2.default();
}

function matchIndent(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }
  var indent = -1,
      parent = node.parentNode;
  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  var formats = {};
  var style = node.style || {};
  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }
  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta2.default().insert('\t').concat(delta);
  }
  return delta;
}

function matchText(node, delta) {
  var text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }
  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    var replacer = function replacer(collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return match.length < 1 && collapse ? ' ' : match;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}

exports.default = Clipboard;
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ })
/******/ ])["default"];
});
=======
/*! For license information please see quill.core.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Quill=e():t.Quill=e()}(self,(function(){return function(){var t={9698:function(t,e,n){"use strict";n.d(e,{Ay:function(){return c},Ji:function(){return h},zo:function(){return u}});var r=n(6003),i=n(5232),s=n.n(i),o=n(3036),l=n(4850),a=n(5508);class c extends r.BlockBlot{cache={};delta(){return null==this.cache.delta&&(this.cache.delta=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.descendants(r.LeafBlot).reduce(((t,n)=>0===n.length()?t:t.insert(n.value(),h(n,{},e))),new(s())).insert("\n",h(t))}(this)),this.cache.delta}deleteAt(t,e){super.deleteAt(t,e),this.cache={}}formatAt(t,e,n,i){e<=0||(this.scroll.query(n,r.Scope.BLOCK)?t+e===this.length()&&this.format(n,i):super.formatAt(t,Math.min(e,this.length()-t-1),n,i),this.cache={})}insertAt(t,e,n){if(null!=n)return super.insertAt(t,e,n),void(this.cache={});if(0===e.length)return;const r=e.split("\n"),i=r.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?super.insertAt(Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});let s=this;r.reduce(((t,e)=>(s=s.split(t,!0),s.insertAt(0,e),e.length)),t+i.length)}insertBefore(t,e){const{head:n}=this.children;super.insertBefore(t,e),n instanceof o.A&&n.remove(),this.cache={}}length(){return null==this.cache.length&&(this.cache.length=super.length()+1),this.cache.length}moveChildren(t,e){super.moveChildren(t,e),this.cache={}}optimize(t){super.optimize(t),this.cache={}}path(t){return super.path(t,!0)}removeChild(t){super.removeChild(t),this.cache={}}split(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e&&(0===t||t>=this.length()-1)){const e=this.clone();return 0===t?(this.parent.insertBefore(e,this),this):(this.parent.insertBefore(e,this.next),e)}const n=super.split(t,e);return this.cache={},n}}c.blotName="block",c.tagName="P",c.defaultChild=o.A,c.allowedChildren=[o.A,l.A,r.EmbedBlot,a.A];class u extends r.EmbedBlot{attach(){super.attach(),this.attributes=new r.AttributorStore(this.domNode)}delta(){return(new(s())).insert(this.value(),{...this.formats(),...this.attributes.values()})}format(t,e){const n=this.scroll.query(t,r.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}formatAt(t,e,n,r){this.format(n,r)}insertAt(t,e,n){if(null!=n)return void super.insertAt(t,e,n);const r=e.split("\n"),i=r.pop(),s=r.map((t=>{const e=this.scroll.create(c.blotName);return e.insertAt(0,t),e})),o=this.split(t);s.forEach((t=>{this.parent.insertBefore(t,o)})),i&&this.parent.insertBefore(this.scroll.create("text",i),o)}}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return null==t?e:("formats"in t&&"function"==typeof t.formats&&(e={...e,...t.formats()},n&&delete e["code-token"]),null==t.parent||"scroll"===t.parent.statics.blotName||t.parent.statics.scope!==t.statics.scope?e:h(t.parent,e,n))}u.scope=r.Scope.BLOCK_BLOT},3036:function(t,e,n){"use strict";var r=n(6003);class i extends r.EmbedBlot{static value(){}optimize(){(this.prev||this.next)&&this.remove()}length(){return 0}value(){return""}}i.blotName="break",i.tagName="BR",e.A=i},580:function(t,e,n){"use strict";var r=n(6003);class i extends r.ContainerBlot{}e.A=i},4541:function(t,e,n){"use strict";var r=n(6003),i=n(5508);class s extends r.EmbedBlot{static blotName="cursor";static className="ql-cursor";static tagName="span";static CONTENTS="\ufeff";static value(){}constructor(t,e,n){super(t,e),this.selection=n,this.textNode=document.createTextNode(s.CONTENTS),this.domNode.appendChild(this.textNode),this.savedLength=0}detach(){null!=this.parent&&this.parent.removeChild(this)}format(t,e){if(0!==this.savedLength)return void super.format(t,e);let n=this,i=0;for(;null!=n&&n.statics.scope!==r.Scope.BLOCK_BLOT;)i+=n.offset(n.parent),n=n.parent;null!=n&&(this.savedLength=s.CONTENTS.length,n.optimize(),n.formatAt(i,s.CONTENTS.length,t,e),this.savedLength=0)}index(t,e){return t===this.textNode?0:super.index(t,e)}length(){return this.savedLength}position(){return[this.textNode,this.textNode.data.length]}remove(){super.remove(),this.parent=null}restore(){if(this.selection.composing||null==this.parent)return null;const t=this.selection.getNativeRange();for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);const e=this.prev instanceof i.A?this.prev:null,n=e?e.length():0,r=this.next instanceof i.A?this.next:null,o=r?r.text:"",{textNode:l}=this,a=l.data.split(s.CONTENTS).join("");let c;if(l.data=s.CONTENTS,e)c=e,(a||r)&&(e.insertAt(e.length(),a+o),r&&r.remove());else if(r)c=r,r.insertAt(0,a);else{const t=document.createTextNode(a);c=this.scroll.create(t),this.parent.insertBefore(c,this)}if(this.remove(),t){const i=(t,i)=>e&&t===e.domNode?i:t===l?n+i-1:r&&t===r.domNode?n+a.length+i:null,s=i(t.start.node,t.start.offset),o=i(t.end.node,t.end.offset);if(null!==s&&null!==o)return{startNode:c.domNode,startOffset:s,endNode:c.domNode,endOffset:o}}return null}update(t,e){if(t.some((t=>"characterData"===t.type&&t.target===this.textNode))){const t=this.restore();t&&(e.range=t)}}optimize(t){super.optimize(t);let{parent:e}=this;for(;e;){if("A"===e.domNode.tagName){this.savedLength=s.CONTENTS.length,e.isolate(this.offset(e),this.length()).unwrap(),this.savedLength=0;break}e=e.parent}}value(){return""}}e.A=s},746:function(t,e,n){"use strict";var r=n(6003),i=n(5508);const s="\ufeff";class o extends r.EmbedBlot{constructor(t,e){super(t,e),this.contentNode=document.createElement("span"),this.contentNode.setAttribute("contenteditable","false"),Array.from(this.domNode.childNodes).forEach((t=>{this.contentNode.appendChild(t)})),this.leftGuard=document.createTextNode(s),this.rightGuard=document.createTextNode(s),this.domNode.appendChild(this.leftGuard),this.domNode.appendChild(this.contentNode),this.domNode.appendChild(this.rightGuard)}index(t,e){return t===this.leftGuard?0:t===this.rightGuard?1:super.index(t,e)}restore(t){let e,n=null;const r=t.data.split(s).join("");if(t===this.leftGuard)if(this.prev instanceof i.A){const t=this.prev.length();this.prev.insertAt(t,r),n={startNode:this.prev.domNode,startOffset:t+r.length}}else e=document.createTextNode(r),this.parent.insertBefore(this.scroll.create(e),this),n={startNode:e,startOffset:r.length};else t===this.rightGuard&&(this.next instanceof i.A?(this.next.insertAt(0,r),n={startNode:this.next.domNode,startOffset:r.length}):(e=document.createTextNode(r),this.parent.insertBefore(this.scroll.create(e),this.next),n={startNode:e,startOffset:r.length}));return t.data=s,n}update(t,e){t.forEach((t=>{if("characterData"===t.type&&(t.target===this.leftGuard||t.target===this.rightGuard)){const n=this.restore(t.target);n&&(e.range=n)}}))}}e.A=o},4850:function(t,e,n){"use strict";var r=n(6003),i=n(3036),s=n(5508);class o extends r.InlineBlot{static allowedChildren=[o,i.A,r.EmbedBlot,s.A];static order=["cursor","inline","link","underline","strike","italic","bold","script","code"];static compare(t,e){const n=o.order.indexOf(t),r=o.order.indexOf(e);return n>=0||r>=0?n-r:t===e?0:t<e?-1:1}formatAt(t,e,n,i){if(o.compare(this.statics.blotName,n)<0&&this.scroll.query(n,r.Scope.BLOT)){const r=this.isolate(t,e);i&&r.wrap(n,i)}else super.formatAt(t,e,n,i)}optimize(t){if(super.optimize(t),this.parent instanceof o&&o.compare(this.statics.blotName,this.parent.statics.blotName)>0){const t=this.parent.isolate(this.offset(),this.length());this.moveChildren(t),t.wrap(this)}}}e.A=o},5508:function(t,e,n){"use strict";n.d(e,{A:function(){return i},X:function(){return s}});var r=n(6003);class i extends r.TextBlot{}function s(t){return t.replace(/[&<>"']/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t])))}},5374:function(t,e,n){"use strict";n.d(e,{A:function(){return o}});var r=n(8920),i=n(7356);const s=(0,n(6078).A)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach((t=>{document.addEventListener(t,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Array.from(document.querySelectorAll(".ql-container")).forEach((t=>{const n=i.A.get(t);n&&n.emitter&&n.emitter.handleDOM(...e)}))}))}));var o=class extends r{static events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_BLOT_MOUNT:"scroll-blot-mount",SCROLL_BLOT_UNMOUNT:"scroll-blot-unmount",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SCROLL_EMBED_UPDATE:"scroll-embed-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change",COMPOSITION_BEFORE_START:"composition-before-start",COMPOSITION_START:"composition-start",COMPOSITION_BEFORE_END:"composition-before-end",COMPOSITION_END:"composition-end"};static sources={API:"api",SILENT:"silent",USER:"user"};constructor(){super(),this.domListeners={},this.on("error",s.error)}emit(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s.log.call(s,...e),super.emit(...e)}handleDOM(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(this.domListeners[t.type]||[]).forEach((e=>{let{node:r,handler:i}=e;(t.target===r||r.contains(t.target))&&i(t,...n)}))}listenDOM(t,e,n){this.domListeners[t]||(this.domListeners[t]=[]),this.domListeners[t].push({node:e,handler:n})}}},7356:function(t,e){"use strict";e.A=new WeakMap},6078:function(t,e){"use strict";const n=["error","warn","log","info"];let r="warn";function i(t){if(r&&n.indexOf(t)<=n.indexOf(r)){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];console[t](...i)}}function s(t){return n.reduce(((e,n)=>(e[n]=i.bind(console,n,t),e)),{})}s.level=t=>{r=t},i.level=s.level,e.A=s},4266:function(t,e){"use strict";e.A=class{static DEFAULTS={};constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.quill=t,this.options=e}}},6142:function(t,e,n){"use strict";n.d(e,{Ay:function(){return q}});var r=n(8347),i=n(6003),s=n(5232),o=n.n(s),l=n(3707),a=n(5123),c=n(9698),u=n(3036),h=n(4541),f=n(5508),d=n(8298);const p=/^[ -~]*$/;function g(t,e,n){if(0===t.length){const[t]=y(n.pop());return e<=0?`</li></${t}>`:`</li></${t}>${g([],e-1,n)}`}const[{child:r,offset:i,length:s,indent:o,type:l},...a]=t,[c,u]=y(l);if(o>e)return n.push(l),o===e+1?`<${c}><li${u}>${m(r,i,s)}${g(a,o,n)}`:`<${c}><li>${g(t,e+1,n)}`;const h=n[n.length-1];if(o===e&&l===h)return`</li><li${u}>${m(r,i,s)}${g(a,o,n)}`;const[f]=y(n.pop());return`</li></${f}>${g(t,e-1,n)}`}function m(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("html"in t&&"function"==typeof t.html)return t.html(e,n);if(t instanceof f.A)return(0,f.X)(t.value().slice(e,e+n));if(t instanceof i.ParentBlot){if("list-container"===t.statics.blotName){const r=[];return t.children.forEachAt(e,n,((t,e,n)=>{const i="formats"in t&&"function"==typeof t.formats?t.formats():{};r.push({child:t,offset:e,length:n,indent:i.indent||0,type:i.list})})),g(r,-1,[])}const i=[];if(t.children.forEachAt(e,n,((t,e,n)=>{i.push(m(t,e,n))})),r||"list"===t.statics.blotName)return i.join("");const{outerHTML:s,innerHTML:o}=t.domNode,[l,a]=s.split(`>${o}<`);return"<table"===l?`<table style="border: 1px solid #000;">${i.join("")}<${a}`:`${l}>${i.join("")}<${a}`}return t.domNode instanceof Element?t.domNode.outerHTML:""}function b(t,e){return Object.keys(e).reduce(((n,r)=>{if(null==t[r])return n;const i=e[r];return i===t[r]?n[r]=i:Array.isArray(i)?i.indexOf(t[r])<0?n[r]=i.concat([t[r]]):n[r]=i:n[r]=[i,t[r]],n}),{})}function y(t){const e="ordered"===t?"ol":"ul";switch(t){case"checked":return[e,' data-list="checked"'];case"unchecked":return[e,' data-list="unchecked"'];default:return[e,""]}}function v(t){return t.reduce(((t,e)=>{if("string"==typeof e.insert){const n=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(n,e.attributes)}return t.push(e)}),new(o()))}function A(t,e){let{index:n,length:r}=t;return new d.Q(n+e,r)}var N=class{constructor(t){this.scroll=t,this.delta=this.getDelta()}applyDelta(t){this.scroll.update();let e=this.scroll.length();this.scroll.batchStart();const n=v(t),l=new(o());return function(t){const e=[];return t.forEach((t=>{"string"==typeof t.insert?t.insert.split("\n").forEach(((n,r)=>{r&&e.push({insert:"\n",attributes:t.attributes}),n&&e.push({insert:n,attributes:t.attributes})})):e.push(t)})),e}(n.ops.slice()).reduce(((t,n)=>{const o=s.Op.length(n);let a=n.attributes||{},u=!1,h=!1;if(null!=n.insert){if(l.retain(o),"string"==typeof n.insert){const o=n.insert;h=!o.endsWith("\n")&&(e<=t||!!this.scroll.descendant(c.zo,t)[0]),this.scroll.insertAt(t,o);const[l,u]=this.scroll.line(t);let f=(0,r.A)({},(0,c.Ji)(l));if(l instanceof c.Ay){const[t]=l.descendant(i.LeafBlot,u);t&&(f=(0,r.A)(f,(0,c.Ji)(t)))}a=s.AttributeMap.diff(f,a)||{}}else if("object"==typeof n.insert){const o=Object.keys(n.insert)[0];if(null==o)return t;const l=null!=this.scroll.query(o,i.Scope.INLINE);if(l)(e<=t||this.scroll.descendant(c.zo,t)[0])&&(h=!0);else if(t>0){const[e,n]=this.scroll.descendant(i.LeafBlot,t-1);e instanceof f.A?"\n"!==e.value()[n]&&(u=!0):e instanceof i.EmbedBlot&&e.statics.scope===i.Scope.INLINE_BLOT&&(u=!0)}if(this.scroll.insertAt(t,o,n.insert[o]),l){const[e]=this.scroll.descendant(i.LeafBlot,t);if(e){const t=(0,r.A)({},(0,c.Ji)(e));a=s.AttributeMap.diff(t,a)||{}}}}e+=o}else if(l.push(n),null!==n.retain&&"object"==typeof n.retain){const e=Object.keys(n.retain)[0];if(null==e)return t;this.scroll.updateEmbedAt(t,e,n.retain[e])}Object.keys(a).forEach((e=>{this.scroll.formatAt(t,o,e,a[e])}));const d=u?1:0,p=h?1:0;return e+=d+p,l.retain(d),l.delete(p),t+o+d+p}),0),l.reduce(((t,e)=>"number"==typeof e.delete?(this.scroll.deleteAt(t,e.delete),t):t+s.Op.length(e)),0),this.scroll.batchEnd(),this.scroll.optimize(),this.update(n)}deleteText(t,e){return this.scroll.deleteAt(t,e),this.update((new(o())).retain(t).delete(e))}formatLine(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.scroll.update(),Object.keys(n).forEach((r=>{this.scroll.lines(t,Math.max(e,1)).forEach((t=>{t.format(r,n[r])}))})),this.scroll.optimize();const r=(new(o())).retain(t).retain(e,(0,l.A)(n));return this.update(r)}formatText(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object.keys(n).forEach((r=>{this.scroll.formatAt(t,e,r,n[r])}));const r=(new(o())).retain(t).retain(e,(0,l.A)(n));return this.update(r)}getContents(t,e){return this.delta.slice(t,t+e)}getDelta(){return this.scroll.lines().reduce(((t,e)=>t.concat(e.delta())),new(o()))}getFormat(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach((t=>{const[e]=t;e instanceof c.Ay?n.push(e):e instanceof i.LeafBlot&&r.push(e)})):(n=this.scroll.lines(t,e),r=this.scroll.descendants(i.LeafBlot,t,e));const[s,o]=[n,r].map((t=>{const e=t.shift();if(null==e)return{};let n=(0,c.Ji)(e);for(;Object.keys(n).length>0;){const e=t.shift();if(null==e)return n;n=b((0,c.Ji)(e),n)}return n}));return{...s,...o}}getHTML(t,e){const[n,r]=this.scroll.line(t);if(n){const i=n.length();return n.length()>=r+e&&(0!==r||e!==i)?m(n,r,e,!0):m(this.scroll,t,e,!0)}return""}getText(t,e){return this.getContents(t,e).filter((t=>"string"==typeof t.insert)).map((t=>t.insert)).join("")}insertContents(t,e){const n=v(e),r=(new(o())).retain(t).concat(n);return this.scroll.insertContents(t,n),this.update(r)}insertEmbed(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new(o())).retain(t).insert({[e]:n}))}insertText(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(n).forEach((r=>{this.scroll.formatAt(t,e.length,r,n[r])})),this.update((new(o())).retain(t).insert(e,(0,l.A)(n)))}isBlank(){if(0===this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;const t=this.scroll.children.head;if(t?.statics.blotName!==c.Ay.blotName)return!1;const e=t;return!(e.children.length>1)&&e.children.head instanceof u.A}removeFormat(t,e){const n=this.getText(t,e),[r,i]=this.scroll.line(t+e);let s=0,l=new(o());null!=r&&(s=r.length()-i,l=r.delta().slice(i,i+s-1).insert("\n"));const a=this.getContents(t,e+s).diff((new(o())).insert(n).concat(l)),c=(new(o())).retain(t).concat(a);return this.applyDelta(c)}update(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r=this.delta;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(p)&&this.scroll.find(e[0].target)){const i=this.scroll.find(e[0].target),s=(0,c.Ji)(i),l=i.offset(this.scroll),a=e[0].oldValue.replace(h.A.CONTENTS,""),u=(new(o())).insert(a),f=(new(o())).insert(i.value()),d=n&&{oldRange:A(n.oldRange,-l),newRange:A(n.newRange,-l)};t=(new(o())).retain(l).concat(u.diff(f,d)).reduce(((t,e)=>e.insert?t.insert(e.insert,s):t.push(e)),new(o())),this.delta=r.compose(t)}else this.delta=this.getDelta(),t&&(0,a.A)(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}},E=n(5374),_=n(7356),x=n(6078),w=n(4266),O=n(746),j=class{isComposing=!1;constructor(t,e){this.scroll=t,this.emitter=e,this.setupListeners()}setupListeners(){this.scroll.domNode.addEventListener("compositionstart",(t=>{this.isComposing||this.handleCompositionStart(t)})),this.scroll.domNode.addEventListener("compositionend",(t=>{this.isComposing&&queueMicrotask((()=>{this.handleCompositionEnd(t)}))}))}handleCompositionStart(t){const e=t.target instanceof Node?this.scroll.find(t.target,!0):null;!e||e instanceof O.A||(this.emitter.emit(E.A.events.COMPOSITION_BEFORE_START,t),this.scroll.batchStart(),this.emitter.emit(E.A.events.COMPOSITION_START,t),this.isComposing=!0)}handleCompositionEnd(t){this.emitter.emit(E.A.events.COMPOSITION_BEFORE_END,t),this.scroll.batchEnd(),this.emitter.emit(E.A.events.COMPOSITION_END,t),this.isComposing=!1}},S=n(9609);const L=t=>{const e=t.getBoundingClientRect(),n="offsetWidth"in t&&Math.abs(e.width)/t.offsetWidth||1,r="offsetHeight"in t&&Math.abs(e.height)/t.offsetHeight||1;return{top:e.top,right:e.left+t.clientWidth*n,bottom:e.top+t.clientHeight*r,left:e.left}},T=t=>{const e=parseInt(t,10);return Number.isNaN(e)?0:e},k=(t,e,n,r,i,s)=>t<n&&e>r?0:t<n?-(n-t+i):e>r?e-t>r-n?t+i-n:e-r+s:0;const C=["block","break","cursor","inline","scroll","text"];const R=(0,x.A)("quill"),B=new i.Registry;i.ParentBlot.uiClass="ql-ui";class q{static DEFAULTS={bounds:null,modules:{clipboard:!0,keyboard:!0,history:!0,uploader:!0},placeholder:"",readOnly:!1,registry:B,theme:"default"};static events=E.A.events;static sources=E.A.sources;static version="2.0.1";static imports={delta:o(),parchment:i,"core/module":w.A,"core/theme":S.A};static debug(t){!0===t&&(t="log"),x.A.level(t)}static find(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return _.A.get(t)||B.find(t,e)}static import(t){return null==this.imports[t]&&R.error(`Cannot import ${t}. Are you sure it was registered?`),this.imports[t]}static register(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){const n="attrName"in t?t.attrName:t.blotName;"string"==typeof n?this.register(`formats/${n}`,t,e):Object.keys(t).forEach((n=>{this.register(n,t[n],e)}))}else null==this.imports[t]||n||R.warn(`Overwriting ${t} with`,e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&e&&"boolean"!=typeof e&&"abstract"!==e.blotName&&B.register(e),"function"==typeof e.register&&e.register(B)}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.options=function(t,e){const n=I(t);if(!n)throw new Error("Invalid Quill container");const s=!e.theme||e.theme===q.DEFAULTS.theme?S.A:q.import(`themes/${e.theme}`);if(!s)throw new Error(`Invalid theme ${e.theme}. Did you register it?`);const{modules:o,...l}=q.DEFAULTS,{modules:a,...c}=s.DEFAULTS;let u=M(e.modules);null!=u&&u.toolbar&&u.toolbar.constructor!==Object&&(u={...u,toolbar:{container:u.toolbar}});const h=(0,r.A)({},M(o),M(a),u),f={...l,...D(c),...D(e)};let d=e.registry;return d?e.formats&&R.warn('Ignoring "formats" option because "registry" is specified'):d=e.formats?((t,e,n)=>{const r=new i.Registry;return C.forEach((t=>{const n=e.query(t);n&&r.register(n)})),t.forEach((t=>{let i=e.query(t);i||n.error(`Cannot register "${t}" specified in "formats" config. Are you sure it was registered?`);let s=0;for(;i;)if(r.register(i),i="blotName"in i?i.requiredContainer??null:null,s+=1,s>100){n.error(`Cycle detected in registering blot requiredContainer: "${t}"`);break}})),r})(e.formats,f.registry,R):f.registry,{...f,registry:d,container:n,theme:s,modules:Object.entries(h).reduce(((t,e)=>{let[n,i]=e;if(!i)return t;const s=q.import(`modules/${n}`);return null==s?(R.error(`Cannot load ${n} module. Are you sure you registered it?`),t):{...t,[n]:(0,r.A)({},s.DEFAULTS||{},i)}}),{}),bounds:I(f.bounds)}}(t,e),this.container=this.options.container,null==this.container)return void R.error("Invalid Quill container",t);this.options.debug&&q.debug(this.options.debug);const n=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",_.A.set(this.container,this),this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.emitter=new E.A;const s=i.ScrollBlot.blotName,l=this.options.registry.query(s);if(!l||!("blotName"in l))throw new Error(`Cannot initialize Quill without "${s}" blot`);if(this.scroll=new l(this.options.registry,this.root,{emitter:this.emitter}),this.editor=new N(this.scroll),this.selection=new d.A(this.scroll,this.emitter),this.composition=new j(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.uploader=this.theme.addModule("uploader"),this.theme.addModule("input"),this.theme.addModule("uiNode"),this.theme.init(),this.emitter.on(E.A.events.EDITOR_CHANGE,(t=>{t===E.A.events.TEXT_CHANGE&&this.root.classList.toggle("ql-blank",this.editor.isBlank())})),this.emitter.on(E.A.events.SCROLL_UPDATE,((t,e)=>{const n=this.selection.lastRange,[r]=this.selection.getRange(),i=n&&r?{oldRange:n,newRange:r}:void 0;U.call(this,(()=>this.editor.update(null,e,i)),t)})),this.emitter.on(E.A.events.SCROLL_EMBED_UPDATE,((t,e)=>{const n=this.selection.lastRange,[r]=this.selection.getRange(),i=n&&r?{oldRange:n,newRange:r}:void 0;U.call(this,(()=>{const n=(new(o())).retain(t.offset(this)).retain({[t.statics.blotName]:e});return this.editor.update(n,[],i)}),q.sources.USER)})),n){const t=this.clipboard.convert({html:`${n}<p><br></p>`,text:"\n"});this.setContents(t)}this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable(),this.allowReadOnlyEdits=!1}addContainer(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){const e=t;(t=document.createElement("div")).classList.add(e)}return this.container.insertBefore(t,e),t}blur(){this.selection.setRange(null)}deleteText(t,e,n){return[t,e,,n]=P(t,e,n),U.call(this,(()=>this.editor.deleteText(t,e)),n,t,-1*e)}disable(){this.enable(!1)}editReadOnly(t){this.allowReadOnlyEdits=!0;const e=t();return this.allowReadOnlyEdits=!1,e}enable(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}focus(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.selection.focus(),t.preventScroll||this.scrollSelectionIntoView()}format(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E.A.sources.API;return U.call(this,(()=>{const n=this.getSelection(!0);let r=new(o());if(null==n)return r;if(this.scroll.query(t,i.Scope.BLOCK))r=this.editor.formatLine(n.index,n.length,{[t]:e});else{if(0===n.length)return this.selection.format(t,e),r;r=this.editor.formatText(n.index,n.length,{[t]:e})}return this.setSelection(n,E.A.sources.SILENT),r}),n)}formatLine(t,e,n,r,i){let s;return[t,e,s,i]=P(t,e,n,r,i),U.call(this,(()=>this.editor.formatLine(t,e,s)),i,t,0)}formatText(t,e,n,r,i){let s;return[t,e,s,i]=P(t,e,n,r,i),U.call(this,(()=>this.editor.formatText(t,e,s)),i,t,0)}getBounds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=null;if(n="number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length),!n)return null;const r=this.container.getBoundingClientRect();return{bottom:n.bottom-r.top,height:n.height,left:n.left-r.left,right:n.right-r.left,top:n.top-r.top,width:n.width}}getContents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t;return[t,e]=P(t,e),this.editor.getContents(t,e)}getFormat(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}getIndex(t){return t.offset(this.scroll)}getLength(){return this.scroll.length()}getLeaf(t){return this.scroll.leaf(t)}getLine(t){return this.scroll.line(t)}getLines(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}getModule(t){return this.theme.modules[t]}getSelection(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}getSemanticHTML(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return"number"==typeof t&&(e=e??this.getLength()-t),[t,e]=P(t,e),this.editor.getHTML(t,e)}getText(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return"number"==typeof t&&(e=e??this.getLength()-t),[t,e]=P(t,e),this.editor.getText(t,e)}hasFocus(){return this.selection.hasFocus()}insertEmbed(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:q.sources.API;return U.call(this,(()=>this.editor.insertEmbed(t,e,n)),r,t)}insertText(t,e,n,r,i){let s;return[t,,s,i]=P(t,0,n,r,i),U.call(this,(()=>this.editor.insertText(t,e,s)),i,t,e.length)}isEnabled(){return this.scroll.isEnabled()}off(){return this.emitter.off(...arguments)}on(){return this.emitter.on(...arguments)}once(){return this.emitter.once(...arguments)}removeFormat(t,e,n){return[t,e,,n]=P(t,e,n),U.call(this,(()=>this.editor.removeFormat(t,e)),n,t)}scrollRectIntoView(t){((t,e)=>{const n=t.ownerDocument;let r=e,i=t;for(;i;){const t=i===n.body,e=t?{top:0,right:window.visualViewport?.width??n.documentElement.clientWidth,bottom:window.visualViewport?.height??n.documentElement.clientHeight,left:0}:L(i),o=getComputedStyle(i),l=k(r.left,r.right,e.left,e.right,T(o.scrollPaddingLeft),T(o.scrollPaddingRight)),a=k(r.top,r.bottom,e.top,e.bottom,T(o.scrollPaddingTop),T(o.scrollPaddingBottom));if(l||a)if(t)n.defaultView?.scrollBy(l,a);else{const{scrollLeft:t,scrollTop:e}=i;a&&(i.scrollTop+=a),l&&(i.scrollLeft+=l);const n=i.scrollLeft-t,s=i.scrollTop-e;r={left:r.left-n,top:r.top-s,right:r.right-n,bottom:r.bottom-s}}i=t||"fixed"===o.position?null:(s=i).parentElement||s.getRootNode().host||null}var s})(this.root,t)}scrollIntoView(){console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."),this.scrollSelectionIntoView()}scrollSelectionIntoView(){const t=this.selection.lastRange,e=t&&this.selection.getBounds(t.index,t.length);e&&this.scrollRectIntoView(e)}setContents(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.A.sources.API;return U.call(this,(()=>{t=new(o())(t);const e=this.getLength(),n=this.editor.deleteText(0,e),r=this.editor.insertContents(0,t),i=this.editor.deleteText(this.getLength()-1,1);return n.compose(r).compose(i)}),e)}setSelection(t,e,n){null==t?this.selection.setRange(null,e||q.sources.API):([t,e,,n]=P(t,e,n),this.selection.setRange(new d.Q(Math.max(0,t),e),n),n!==E.A.sources.SILENT&&this.scrollSelectionIntoView())}setText(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.A.sources.API;const n=(new(o())).insert(t);return this.setContents(n,e)}update(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.A.sources.USER;const e=this.scroll.update(t);return this.selection.update(t),e}updateContents(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.A.sources.API;return U.call(this,(()=>(t=new(o())(t),this.editor.applyDelta(t))),e,!0)}}function I(t){return"string"==typeof t?document.querySelector(t):t}function M(t){return Object.entries(t??{}).reduce(((t,e)=>{let[n,r]=e;return{...t,[n]:!0===r?{}:r}}),{})}function D(t){return Object.fromEntries(Object.entries(t).filter((t=>void 0!==t[1])))}function U(t,e,n,r){if(!this.isEnabled()&&e===E.A.sources.USER&&!this.allowReadOnlyEdits)return new(o());let i=null==n?null:this.getSelection();const s=this.editor.delta,l=t();if(null!=i&&(!0===n&&(n=i.index),null==r?i=z(i,l,e):0!==r&&(i=z(i,n,r,e)),this.setSelection(i,E.A.sources.SILENT)),l.length()>0){const t=[E.A.events.TEXT_CHANGE,l,s,e];this.emitter.emit(E.A.events.EDITOR_CHANGE,...t),e!==E.A.sources.SILENT&&this.emitter.emit(...t)}return l}function P(t,e,n,r,i){let s={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(i=r,r=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(i=r,r=n,n=e,e=0),"object"==typeof n?(s=n,i=r):"string"==typeof n&&(null!=r?s[n]=r:i=n),[t,e,s,i=i||E.A.sources.API]}function z(t,e,n,r){const i="number"==typeof n?n:0;if(null==t)return null;let s,o;return e&&"function"==typeof e.transformPosition?[s,o]=[t.index,t.index+t.length].map((t=>e.transformPosition(t,r!==E.A.sources.USER))):[s,o]=[t.index,t.index+t.length].map((t=>t<e||t===e&&r===E.A.sources.USER?t:i>=0?t+i:Math.max(e,t+i))),new d.Q(s,o-s)}},8298:function(t,e,n){"use strict";n.d(e,{Q:function(){return a}});var r=n(6003),i=n(5123),s=n(3707),o=n(5374);const l=(0,n(6078).A)("quill:selection");class a{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.index=t,this.length=e}}function c(t,e){try{e.parentNode}catch(t){return!1}return t.contains(e)}e.A=class{constructor(t,e){this.emitter=e,this.scroll=t,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=this.scroll.create("cursor",this),this.savedRange=new a(0,0),this.lastRange=this.savedRange,this.lastNative=null,this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,(()=>{this.mouseDown||this.composing||setTimeout(this.update.bind(this,o.A.sources.USER),1)})),this.emitter.on(o.A.events.SCROLL_BEFORE_UPDATE,(()=>{if(!this.hasFocus())return;const t=this.getNativeRange();null!=t&&t.start.node!==this.cursor.textNode&&this.emitter.once(o.A.events.SCROLL_UPDATE,((e,n)=>{try{this.root.contains(t.start.node)&&this.root.contains(t.end.node)&&this.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset);const r=n.some((t=>"characterData"===t.type||"childList"===t.type||"attributes"===t.type&&t.target===this.root));this.update(r?o.A.sources.SILENT:e)}catch(t){}}))})),this.emitter.on(o.A.events.SCROLL_OPTIMIZE,((t,e)=>{if(e.range){const{startNode:t,startOffset:n,endNode:r,endOffset:i}=e.range;this.setNativeRange(t,n,r,i),this.update(o.A.sources.SILENT)}})),this.update(o.A.sources.SILENT)}handleComposition(){this.emitter.on(o.A.events.COMPOSITION_BEFORE_START,(()=>{this.composing=!0})),this.emitter.on(o.A.events.COMPOSITION_END,(()=>{if(this.composing=!1,this.cursor.parent){const t=this.cursor.restore();if(!t)return;setTimeout((()=>{this.setNativeRange(t.startNode,t.startOffset,t.endNode,t.endOffset)}),1)}}))}handleDragging(){this.emitter.listenDOM("mousedown",document.body,(()=>{this.mouseDown=!0})),this.emitter.listenDOM("mouseup",document.body,(()=>{this.mouseDown=!1,this.update(o.A.sources.USER)}))}focus(){this.hasFocus()||(this.root.focus({preventScroll:!0}),this.setRange(this.savedRange))}format(t,e){this.scroll.update();const n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!this.scroll.query(t,r.Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){const t=this.scroll.find(n.start.node,!1);if(null==t)return;if(t instanceof r.LeafBlot){const e=t.split(n.start.offset);t.parent.insertBefore(this.cursor,e)}else t.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}getBounds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=this.scroll.length();let r;t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;let[i,s]=this.scroll.leaf(t);if(null==i)return null;if(e>0&&s===i.length()){const[e]=this.scroll.leaf(t+1);if(e){const[n]=this.scroll.line(t),[r]=this.scroll.line(t+1);n===r&&(i=e,s=0)}}[r,s]=i.position(s,!0);const o=document.createRange();if(e>0)return o.setStart(r,s),[i,s]=this.scroll.leaf(t+e),null==i?null:([r,s]=i.position(s,!0),o.setEnd(r,s),o.getBoundingClientRect());let l,a="left";if(r instanceof Text){if(!r.data.length)return null;s<r.data.length?(o.setStart(r,s),o.setEnd(r,s+1)):(o.setStart(r,s-1),o.setEnd(r,s),a="right"),l=o.getBoundingClientRect()}else{if(!(i.domNode instanceof Element))return null;l=i.domNode.getBoundingClientRect(),s>0&&(a="right")}return{bottom:l.top+l.height,height:l.height,left:l[a],right:l[a],top:l.top,width:0}}getNativeRange(){const t=document.getSelection();if(null==t||t.rangeCount<=0)return null;const e=t.getRangeAt(0);if(null==e)return null;const n=this.normalizeNative(e);return l.info("getNativeRange",n),n}getRange(){const t=this.scroll.domNode;if("isConnected"in t&&!t.isConnected)return[null,null];const e=this.getNativeRange();return null==e?[null,null]:[this.normalizedToRange(e),e]}hasFocus(){return document.activeElement===this.root||null!=document.activeElement&&c(this.root,document.activeElement)}normalizedToRange(t){const e=[[t.start.node,t.start.offset]];t.native.collapsed||e.push([t.end.node,t.end.offset]);const n=e.map((t=>{const[e,n]=t,i=this.scroll.find(e,!0),s=i.offset(this.scroll);return 0===n?s:i instanceof r.LeafBlot?s+i.index(e,n):s+i.length()})),i=Math.min(Math.max(...n),this.scroll.length()-1),s=Math.min(i,...n);return new a(s,i-s)}normalizeNative(t){if(!c(this.root,t.startContainer)||!t.collapsed&&!c(this.root,t.endContainer))return null;const e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach((t=>{let{node:e,offset:n}=t;for(;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;e=e.lastChild,n=e instanceof Text?e.data.length:e.childNodes.length>0?e.childNodes.length:e.childNodes.length+1}t.node=e,t.offset=n})),e}rangeToNative(t){const e=this.scroll.length(),n=(t,n)=>{t=Math.min(e-1,t);const[r,i]=this.scroll.leaf(t);return r?r.position(i,n):[null,-1]};return[...n(t.index,!1),...n(t.index+t.length,!0)]}setNativeRange(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(l.info("setNativeRange",t,e,n,r),null!=t&&(null==this.root.parentNode||null==t.parentNode||null==n.parentNode))return;const s=document.getSelection();if(null!=s)if(null!=t){this.hasFocus()||this.root.focus({preventScroll:!0});const{native:o}=this.getNativeRange()||{};if(null==o||i||t!==o.startContainer||e!==o.startOffset||n!==o.endContainer||r!==o.endOffset){t instanceof Element&&"BR"===t.tagName&&(e=Array.from(t.parentNode.childNodes).indexOf(t),t=t.parentNode),n instanceof Element&&"BR"===n.tagName&&(r=Array.from(n.parentNode.childNodes).indexOf(n),n=n.parentNode);const i=document.createRange();i.setStart(t,e),i.setEnd(n,r),s.removeAllRanges(),s.addRange(i)}}else s.removeAllRanges(),this.root.blur()}setRange(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.A.sources.API;if("string"==typeof e&&(n=e,e=!1),l.info("setRange",t),null!=t){const n=this.rangeToNative(t);this.setNativeRange(...n,e)}else this.setNativeRange(null);this.update(n)}update(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.A.sources.USER;const e=this.lastRange,[n,r]=this.getRange();if(this.lastRange=n,this.lastNative=r,null!=this.lastRange&&(this.savedRange=this.lastRange),!(0,i.A)(e,this.lastRange)){if(!this.composing&&null!=r&&r.native.collapsed&&r.start.node!==this.cursor.textNode){const t=this.cursor.restore();t&&this.setNativeRange(t.startNode,t.startOffset,t.endNode,t.endOffset)}const n=[o.A.events.SELECTION_CHANGE,(0,s.A)(this.lastRange),(0,s.A)(e),t];this.emitter.emit(o.A.events.EDITOR_CHANGE,...n),t!==o.A.sources.SILENT&&this.emitter.emit(...n)}}}},9609:function(t,e){"use strict";class n{static DEFAULTS={modules:{}};static themes={default:n};modules={};constructor(t,e){this.quill=t,this.options=e}init(){Object.keys(this.options.modules).forEach((t=>{null==this.modules[t]&&this.addModule(t)}))}addModule(t){const e=this.quill.constructor.import(`modules/${t}`);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}e.A=n},8276:function(t,e,n){"use strict";n.d(e,{Hu:function(){return o},gS:function(){return s}});var r=n(6003);const i={scope:r.Scope.BLOCK,whitelist:["right","center","justify"]},s=new r.Attributor("align","align",i),o=(new r.ClassAttributor("align","ql-align",i),new r.StyleAttributor("align","text-align",i))},9541:function(t,e,n){"use strict";n.d(e,{s:function(){return s}});var r=n(6003),i=n(8638);new r.ClassAttributor("background","ql-bg",{scope:r.Scope.INLINE});const s=new i.a2("background","background-color",{scope:r.Scope.INLINE})},9404:function(t,e,n){"use strict";n.d(e,{Ay:function(){return h}});var r=n(9698),i=n(3036),s=n(4541),o=n(4850),l=n(5508),a=n(580),c=n(6142);class u extends a.A{static create(t){const e=super.create(t);return e.setAttribute("spellcheck","false"),e}code(t,e){return this.children.map((t=>t.length()<=1?"":t.domNode.innerText)).join("\n").slice(t,t+e)}html(t,e){return`<pre>\n${(0,l.X)(this.code(t,e))}\n</pre>`}}class h extends r.Ay{static TAB="  ";static register(){c.Ay.register(u)}}class f extends o.A{}f.blotName="code",f.tagName="CODE",h.blotName="code-block",h.className="ql-code-block",h.tagName="DIV",u.blotName="code-block-container",u.className="ql-code-block-container",u.tagName="DIV",u.allowedChildren=[h],h.allowedChildren=[l.A,i.A,s.A],h.requiredContainer=u},8638:function(t,e,n){"use strict";n.d(e,{JM:function(){return s},a2:function(){return i}});var r=n(6003);class i extends r.StyleAttributor{value(t){let e=super.value(t);return e.startsWith("rgb(")?(e=e.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),`#${e.split(",").map((t=>`00${parseInt(t,10).toString(16)}`.slice(-2))).join("")}`):e}}new r.ClassAttributor("color","ql-color",{scope:r.Scope.INLINE});const s=new i("color","color",{scope:r.Scope.INLINE})},7912:function(t,e,n){"use strict";n.d(e,{Mc:function(){return s},VL:function(){return o}});var r=n(6003);const i={scope:r.Scope.BLOCK,whitelist:["rtl"]},s=new r.Attributor("direction","dir",i),o=(new r.ClassAttributor("direction","ql-direction",i),new r.StyleAttributor("direction","direction",i))},6772:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});var r=n(6003);const i={scope:r.Scope.INLINE,whitelist:["serif","monospace"]};new r.ClassAttributor("font","ql-font",i);class s extends r.StyleAttributor{value(t){return super.value(t).replace(/["']/g,"")}}const o=new s("font","font-family",i)},664:function(t,e,n){"use strict";n.d(e,{r:function(){return i}});var r=n(6003);new r.ClassAttributor("size","ql-size",{scope:r.Scope.INLINE,whitelist:["small","large","huge"]});const i=new r.StyleAttributor("size","font-size",{scope:r.Scope.INLINE,whitelist:["10px","18px","32px"]})},584:function(t,e,n){"use strict";n.d(e,{Ay:function(){return L}});var r=n(6003),i=n(5232),s=n.n(i),o=n(9698),l=n(6078),a=n(4266),c=n(6142),u=n(8276),h=n(9541),f=n(9404),d=n(8638),p=n(7912),g=n(6772),m=n(664),b=n(8123);const y=/font-weight:\s*normal/,v=["P","OL","UL"],A=t=>t&&v.includes(t.tagName),N=/\bmso-list:[^;]*ignore/i,E=/\bmso-list:[^;]*\bl(\d+)/i,_=/\bmso-list:[^;]*\blevel(\d+)/i,x=[function(t){"urn:schemas-microsoft-com:office:word"===t.documentElement.getAttribute("xmlns:w")&&(t=>{const e=Array.from(t.querySelectorAll("[style*=mso-list]")),n=[],r=[];e.forEach((t=>{(t.getAttribute("style")||"").match(N)?n.push(t):r.push(t)})),n.forEach((t=>t.parentNode?.removeChild(t)));const i=t.documentElement.innerHTML,s=r.map((t=>((t,e)=>{const n=t.getAttribute("style"),r=n?.match(E);if(!r)return null;const i=Number(r[1]),s=n?.match(_),o=s?Number(s[1]):1,l=new RegExp(`@list l${i}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`,"i"),a=e.match(l);return{id:i,indent:o,type:a&&"bullet"===a[1]?"bullet":"ordered",element:t}})(t,i))).filter((t=>t));for(;s.length;){const t=[];let e=s.shift();for(;e;)t.push(e),e=s.length&&s[0]?.element===e.element.nextElementSibling&&s[0].id===e.id?s.shift():null;const n=document.createElement("ul");t.forEach((t=>{const e=document.createElement("li");e.setAttribute("data-list",t.type),t.indent>1&&e.setAttribute("class","ql-indent-"+(t.indent-1)),e.innerHTML=t.element.innerHTML,n.appendChild(e)}));const r=t[0]?.element,{parentNode:i}=r??{};r&&i?.replaceChild(n,r),t.slice(1).forEach((t=>{let{element:e}=t;i?.removeChild(e)}))}})(t)},function(t){t.querySelector('[id^="docs-internal-guid-"]')&&((t=>{Array.from(t.querySelectorAll('b[style*="font-weight"]')).filter((t=>t.getAttribute("style")?.match(y))).forEach((e=>{const n=t.createDocumentFragment();n.append(...e.childNodes),e.parentNode?.replaceChild(n,e)}))})(t),(t=>{Array.from(t.querySelectorAll("br")).filter((t=>A(t.previousElementSibling)&&A(t.nextElementSibling))).forEach((t=>{t.parentNode?.removeChild(t)}))})(t))}];const w=(0,l.A)("quill:clipboard"),O=[[Node.TEXT_NODE,function(t,e,n){let r=t.data;if("O:P"===t.parentElement?.tagName)return e.insert(r.trim());if(!B(t)){if(0===r.trim().length&&r.includes("\n")&&!function(t,e){return t.previousElementSibling&&t.nextElementSibling&&!C(t.previousElementSibling,e)&&!C(t.nextElementSibling,e)}(t,n))return e;const i=(t,e)=>{const n=e.replace(/[^\u00a0]/g,"");return n.length<1&&t?" ":n};r=r.replace(/\r\n/g," ").replace(/\n/g," "),r=r.replace(/\s\s+/g,i.bind(i,!0)),(null==t.previousSibling&&null!=t.parentElement&&C(t.parentElement,n)||t.previousSibling instanceof Element&&C(t.previousSibling,n))&&(r=r.replace(/^\s+/,i.bind(i,!1))),(null==t.nextSibling&&null!=t.parentElement&&C(t.parentElement,n)||t.nextSibling instanceof Element&&C(t.nextSibling,n))&&(r=r.replace(/\s+$/,i.bind(i,!1)))}return e.insert(r)}],[Node.TEXT_NODE,M],["br",function(t,e){return k(e,"\n")||e.insert("\n"),e}],[Node.ELEMENT_NODE,M],[Node.ELEMENT_NODE,function(t,e,n){const i=n.query(t);if(null==i)return e;if(i.prototype instanceof r.EmbedBlot){const e={},r=i.value(t);if(null!=r)return e[i.blotName]=r,(new(s())).insert(e,i.formats(t,n))}else if(i.prototype instanceof r.BlockBlot&&!k(e,"\n")&&e.insert("\n"),"blotName"in i&&"formats"in i&&"function"==typeof i.formats)return T(e,i.blotName,i.formats(t,n),n);return e}],[Node.ELEMENT_NODE,function(t,e,n){const i=r.Attributor.keys(t),s=r.ClassAttributor.keys(t),o=r.StyleAttributor.keys(t),l={};return i.concat(s).concat(o).forEach((e=>{let i=n.query(e,r.Scope.ATTRIBUTE);null!=i&&(l[i.attrName]=i.value(t),l[i.attrName])||(i=j[e],null==i||i.attrName!==e&&i.keyName!==e||(l[i.attrName]=i.value(t)||void 0),i=S[e],null==i||i.attrName!==e&&i.keyName!==e||(i=S[e],l[i.attrName]=i.value(t)||void 0))})),Object.entries(l).reduce(((t,e)=>{let[r,i]=e;return T(t,r,i,n)}),e)}],[Node.ELEMENT_NODE,function(t,e,n){const r={},i=t.style||{};return"italic"===i.fontStyle&&(r.italic=!0),"underline"===i.textDecoration&&(r.underline=!0),"line-through"===i.textDecoration&&(r.strike=!0),(i.fontWeight?.startsWith("bold")||parseInt(i.fontWeight,10)>=700)&&(r.bold=!0),e=Object.entries(r).reduce(((t,e)=>{let[r,i]=e;return T(t,r,i,n)}),e),parseFloat(i.textIndent||0)>0?(new(s())).insert("\t").concat(e):e}],["li",function(t,e,n){const r=n.query(t);if(null==r||"list"!==r.blotName||!k(e,"\n"))return e;let i=-1,o=t.parentNode;for(;null!=o;)["OL","UL"].includes(o.tagName)&&(i+=1),o=o.parentNode;return i<=0?e:e.reduce(((t,e)=>e.insert?e.attributes&&"number"==typeof e.attributes.indent?t.push(e):t.insert(e.insert,{indent:i,...e.attributes||{}}):t),new(s()))}],["ol, ul",function(t,e,n){const r=t;let i="OL"===r.tagName?"ordered":"bullet";const s=r.getAttribute("data-checked");return s&&(i="true"===s?"checked":"unchecked"),T(e,"list",i,n)}],["pre",function(t,e,n){const r=n.query("code-block");return T(e,"code-block",!r||!("formats"in r)||"function"!=typeof r.formats||r.formats(t,n),n)}],["tr",function(t,e,n){const r="TABLE"===t.parentElement?.tagName?t.parentElement:t.parentElement?.parentElement;return null!=r?T(e,"table",Array.from(r.querySelectorAll("tr")).indexOf(t)+1,n):e}],["b",I("bold")],["i",I("italic")],["strike",I("strike")],["style",function(){return new(s())}]],j=[u.gS,p.Mc].reduce(((t,e)=>(t[e.keyName]=e,t)),{}),S=[u.Hu,h.s,d.JM,p.VL,g.z,m.r].reduce(((t,e)=>(t[e.keyName]=e,t)),{});class L extends a.A{static DEFAULTS={matchers:[]};constructor(t,e){super(t,e),this.quill.root.addEventListener("copy",(t=>this.onCaptureCopy(t,!1))),this.quill.root.addEventListener("cut",(t=>this.onCaptureCopy(t,!0))),this.quill.root.addEventListener("paste",this.onCapturePaste.bind(this)),this.matchers=[],O.concat(this.options.matchers??[]).forEach((t=>{let[e,n]=t;this.addMatcher(e,n)}))}addMatcher(t,e){this.matchers.push([t,e])}convert(t){let{html:e,text:n}=t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r[f.Ay.blotName])return(new(s())).insert(n||"",{[f.Ay.blotName]:r[f.Ay.blotName]});if(!e)return(new(s())).insert(n||"",r);const i=this.convertHTML(e);return k(i,"\n")&&(null==i.ops[i.ops.length-1].attributes||r.table)?i.compose((new(s())).retain(i.length()-1).delete(1)):i}normalizeHTML(t){(t=>{t.documentElement&&x.forEach((e=>{e(t)}))})(t)}convertHTML(t){const e=(new DOMParser).parseFromString(t,"text/html");this.normalizeHTML(e);const n=e.body,r=new WeakMap,[i,s]=this.prepareMatching(n,r);return q(this.quill.scroll,n,i,s,r)}dangerouslyPasteHTML(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.Ay.sources.API;if("string"==typeof t){const n=this.convert({html:t,text:""});this.quill.setContents(n,e),this.quill.setSelection(0,c.Ay.sources.SILENT)}else{const r=this.convert({html:e,text:""});this.quill.updateContents((new(s())).retain(t).concat(r),n),this.quill.setSelection(t+r.length(),c.Ay.sources.SILENT)}}onCaptureCopy(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.defaultPrevented)return;t.preventDefault();const[n]=this.quill.selection.getRange();if(null==n)return;const{html:r,text:i}=this.onCopy(n,e);t.clipboardData?.setData("text/plain",i),t.clipboardData?.setData("text/html",r),e&&(0,b.Xo)({range:n,quill:this.quill})}normalizeURIList(t){return t.split(/\r?\n/).filter((t=>"#"!==t[0])).join("\n")}onCapturePaste(t){if(t.defaultPrevented||!this.quill.isEnabled())return;t.preventDefault();const e=this.quill.getSelection(!0);if(null==e)return;const n=t.clipboardData?.getData("text/html");let r=t.clipboardData?.getData("text/plain");if(!n&&!r){const e=t.clipboardData?.getData("text/uri-list");e&&(r=this.normalizeURIList(e))}const i=Array.from(t.clipboardData?.files||[]);if(!n&&i.length>0)this.quill.uploader.upload(e,i);else{if(n&&i.length>0){const t=(new DOMParser).parseFromString(n,"text/html");if(1===t.body.childElementCount&&"IMG"===t.body.firstElementChild?.tagName)return void this.quill.uploader.upload(e,i)}this.onPaste(e,{html:n,text:r})}}onCopy(t){const e=this.quill.getText(t);return{html:this.quill.getSemanticHTML(t),text:e}}onPaste(t,e){let{text:n,html:r}=e;const i=this.quill.getFormat(t.index),o=this.convert({text:n,html:r},i);w.log("onPaste",o,{text:n,html:r});const l=(new(s())).retain(t.index).delete(t.length).concat(o);this.quill.updateContents(l,c.Ay.sources.USER),this.quill.setSelection(l.length()-t.length,c.Ay.sources.SILENT),this.quill.scrollSelectionIntoView()}prepareMatching(t,e){const n=[],r=[];return this.matchers.forEach((i=>{const[s,o]=i;switch(s){case Node.TEXT_NODE:r.push(o);break;case Node.ELEMENT_NODE:n.push(o);break;default:Array.from(t.querySelectorAll(s)).forEach((t=>{if(e.has(t)){const n=e.get(t);n?.push(o)}else e.set(t,[o])}))}})),[n,r]}}function T(t,e,n,r){return r.query(e)?t.reduce(((t,r)=>{if(!r.insert)return t;if(r.attributes&&r.attributes[e])return t.push(r);const i=n?{[e]:n}:{};return t.insert(r.insert,{...i,...r.attributes})}),new(s())):t}function k(t,e){let n="";for(let r=t.ops.length-1;r>=0&&n.length<e.length;--r){const e=t.ops[r];if("string"!=typeof e.insert)break;n=e.insert+n}return n.slice(-1*e.length)===e}function C(t,e){if(!(t instanceof Element))return!1;const n=e.query(t);return!(n&&n.prototype instanceof r.EmbedBlot)&&["address","article","blockquote","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","iframe","li","main","nav","ol","output","p","pre","section","table","td","tr","ul","video"].includes(t.tagName.toLowerCase())}const R=new WeakMap;function B(t){return null!=t&&(R.has(t)||("PRE"===t.tagName?R.set(t,!0):R.set(t,B(t.parentNode))),R.get(t))}function q(t,e,n,r,i){return e.nodeType===e.TEXT_NODE?r.reduce(((n,r)=>r(e,n,t)),new(s())):e.nodeType===e.ELEMENT_NODE?Array.from(e.childNodes||[]).reduce(((s,o)=>{let l=q(t,o,n,r,i);return o.nodeType===e.ELEMENT_NODE&&(l=n.reduce(((e,n)=>n(o,e,t)),l),l=(i.get(o)||[]).reduce(((e,n)=>n(o,e,t)),l)),s.concat(l)}),new(s())):new(s())}function I(t){return(e,n,r)=>T(n,t,!0,r)}function M(t,e,n){if(!k(e,"\n")){if(C(t,n)&&(t.childNodes.length>0||t instanceof HTMLParagraphElement))return e.insert("\n");if(e.length()>0&&t.nextSibling){let r=t.nextSibling;for(;null!=r;){if(C(r,n))return e.insert("\n");const t=n.query(r);if(t&&t.prototype instanceof o.zo)return e.insert("\n");r=r.firstChild}}}return e}},8123:function(t,e,n){"use strict";n.d(e,{Ay:function(){return d},Xo:function(){return v}});var r=n(5123),i=n(3707),s=n(5232),o=n.n(s),l=n(6003),a=n(6142),c=n(6078),u=n(4266);const h=(0,c.A)("quill:keyboard"),f=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey";class d extends u.A{static match(t,e){return!["altKey","ctrlKey","metaKey","shiftKey"].some((n=>!!e[n]!==t[n]&&null!==e[n]))&&(e.key===t.key||e.key===t.which)}constructor(t,e){super(t,e),this.bindings={},Object.keys(this.options.bindings).forEach((t=>{this.options.bindings[t]&&this.addBinding(this.options.bindings[t])})),this.addBinding({key:"Enter",shiftKey:null},this.handleEnter),this.addBinding({key:"Enter",metaKey:null,ctrlKey:null,altKey:null},(()=>{})),/Firefox/i.test(navigator.userAgent)?(this.addBinding({key:"Backspace"},{collapsed:!0},this.handleBackspace),this.addBinding({key:"Delete"},{collapsed:!0},this.handleDelete)):(this.addBinding({key:"Backspace"},{collapsed:!0,prefix:/^.?$/},this.handleBackspace),this.addBinding({key:"Delete"},{collapsed:!0,suffix:/^.?$/},this.handleDelete)),this.addBinding({key:"Backspace"},{collapsed:!1},this.handleDeleteRange),this.addBinding({key:"Delete"},{collapsed:!1},this.handleDeleteRange),this.addBinding({key:"Backspace",altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},this.handleBackspace),this.listen()}addBinding(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=function(t){if("string"==typeof t||"number"==typeof t)t={key:t};else{if("object"!=typeof t)return null;t=(0,i.A)(t)}return t.shortKey&&(t[f]=t.shortKey,delete t.shortKey),t}(t);null!=r?("function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),(Array.isArray(r.key)?r.key:[r.key]).forEach((t=>{const i={...r,key:t,...e,...n};this.bindings[i.key]=this.bindings[i.key]||[],this.bindings[i.key].push(i)}))):h.warn("Attempted to add invalid keyboard binding",r)}listen(){this.quill.root.addEventListener("keydown",(t=>{if(t.defaultPrevented||t.isComposing)return;const e=(this.bindings[t.key]||[]).concat(this.bindings[t.which]||[]).filter((e=>d.match(t,e)));if(0===e.length)return;const n=a.Ay.find(t.target,!0);if(n&&n.scroll!==this.quill.scroll)return;const i=this.quill.getSelection();if(null==i||!this.quill.hasFocus())return;const[s,o]=this.quill.getLine(i.index),[c,u]=this.quill.getLeaf(i.index),[h,f]=0===i.length?[c,u]:this.quill.getLeaf(i.index+i.length),p=c instanceof l.TextBlot?c.value().slice(0,u):"",g=h instanceof l.TextBlot?h.value().slice(f):"",m={collapsed:0===i.length,empty:0===i.length&&s.length()<=1,format:this.quill.getFormat(i),line:s,offset:o,prefix:p,suffix:g,event:t};e.some((t=>{if(null!=t.collapsed&&t.collapsed!==m.collapsed)return!1;if(null!=t.empty&&t.empty!==m.empty)return!1;if(null!=t.offset&&t.offset!==m.offset)return!1;if(Array.isArray(t.format)){if(t.format.every((t=>null==m.format[t])))return!1}else if("object"==typeof t.format&&!Object.keys(t.format).every((e=>!0===t.format[e]?null!=m.format[e]:!1===t.format[e]?null==m.format[e]:(0,r.A)(t.format[e],m.format[e]))))return!1;return!(null!=t.prefix&&!t.prefix.test(m.prefix)||null!=t.suffix&&!t.suffix.test(m.suffix)||!0===t.handler.call(this,i,m,t))}))&&t.preventDefault()}))}handleBackspace(t,e){const n=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;if(0===t.index||this.quill.getLength()<=1)return;let r={};const[i]=this.quill.getLine(t.index);let l=(new(o())).retain(t.index-n).delete(n);if(0===e.offset){const[e]=this.quill.getLine(t.index-1);if(e&&!("block"===e.statics.blotName&&e.length()<=1)){const e=i.formats(),n=this.quill.getFormat(t.index-1,1);if(r=s.AttributeMap.diff(e,n)||{},Object.keys(r).length>0){const e=(new(o())).retain(t.index+i.length()-2).retain(1,r);l=l.compose(e)}}}this.quill.updateContents(l,a.Ay.sources.USER),this.quill.focus()}handleDelete(t,e){const n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(t.index>=this.quill.getLength()-n)return;let r={};const[i]=this.quill.getLine(t.index);let l=(new(o())).retain(t.index).delete(n);if(e.offset>=i.length()-1){const[e]=this.quill.getLine(t.index+1);if(e){const n=i.formats(),o=this.quill.getFormat(t.index,1);r=s.AttributeMap.diff(n,o)||{},Object.keys(r).length>0&&(l=l.retain(e.length()-1).retain(1,r))}}this.quill.updateContents(l,a.Ay.sources.USER),this.quill.focus()}handleDeleteRange(t){v({range:t,quill:this.quill}),this.quill.focus()}handleEnter(t,e){const n=Object.keys(e.format).reduce(((t,n)=>(this.quill.scroll.query(n,l.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t)),{}),r=(new(o())).retain(t.index).delete(t.length).insert("\n",n);this.quill.updateContents(r,a.Ay.sources.USER),this.quill.setSelection(t.index+1,a.Ay.sources.SILENT),this.quill.focus()}}const p={bindings:{bold:b("bold"),italic:b("italic"),underline:b("underline"),indent:{key:"Tab",format:["blockquote","indent","list"],handler(t,e){return!(!e.collapsed||0===e.offset)||(this.quill.format("indent","+1",a.Ay.sources.USER),!1)}},outdent:{key:"Tab",shiftKey:!0,format:["blockquote","indent","list"],handler(t,e){return!(!e.collapsed||0===e.offset)||(this.quill.format("indent","-1",a.Ay.sources.USER),!1)}},"outdent backspace":{key:"Backspace",collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler(t,e){null!=e.format.indent?this.quill.format("indent","-1",a.Ay.sources.USER):null!=e.format.list&&this.quill.format("list",!1,a.Ay.sources.USER)}},"indent code-block":g(!0),"outdent code-block":g(!1),"remove tab":{key:"Tab",shiftKey:!0,collapsed:!0,prefix:/\t$/,handler(t){this.quill.deleteText(t.index-1,1,a.Ay.sources.USER)}},tab:{key:"Tab",handler(t,e){if(e.format.table)return!0;this.quill.history.cutoff();const n=(new(o())).retain(t.index).delete(t.length).insert("\t");return this.quill.updateContents(n,a.Ay.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index+1,a.Ay.sources.SILENT),!1}},"blockquote empty enter":{key:"Enter",collapsed:!0,format:["blockquote"],empty:!0,handler(){this.quill.format("blockquote",!1,a.Ay.sources.USER)}},"list empty enter":{key:"Enter",collapsed:!0,format:["list"],empty:!0,handler(t,e){const n={list:!1};e.format.indent&&(n.indent=!1),this.quill.formatLine(t.index,t.length,n,a.Ay.sources.USER)}},"checklist enter":{key:"Enter",collapsed:!0,format:{list:"checked"},handler(t){const[e,n]=this.quill.getLine(t.index),r={...e.formats(),list:"checked"},i=(new(o())).retain(t.index).insert("\n",r).retain(e.length()-n-1).retain(1,{list:"unchecked"});this.quill.updateContents(i,a.Ay.sources.USER),this.quill.setSelection(t.index+1,a.Ay.sources.SILENT),this.quill.scrollSelectionIntoView()}},"header enter":{key:"Enter",collapsed:!0,format:["header"],suffix:/^$/,handler(t,e){const[n,r]=this.quill.getLine(t.index),i=(new(o())).retain(t.index).insert("\n",e.format).retain(n.length()-r-1).retain(1,{header:null});this.quill.updateContents(i,a.Ay.sources.USER),this.quill.setSelection(t.index+1,a.Ay.sources.SILENT),this.quill.scrollSelectionIntoView()}},"table backspace":{key:"Backspace",format:["table"],collapsed:!0,offset:0,handler(){}},"table delete":{key:"Delete",format:["table"],collapsed:!0,suffix:/^$/,handler(){}},"table enter":{key:"Enter",shiftKey:null,format:["table"],handler(t){const e=this.quill.getModule("table");if(e){const[n,r,i,s]=e.getTable(t),l=function(t,e,n,r){return null==e.prev&&null==e.next?null==n.prev&&null==n.next?0===r?-1:1:null==n.prev?-1:1:null==e.prev?-1:null==e.next?1:null}(0,r,i,s);if(null==l)return;let c=n.offset();if(l<0){const e=(new(o())).retain(c).insert("\n");this.quill.updateContents(e,a.Ay.sources.USER),this.quill.setSelection(t.index+1,t.length,a.Ay.sources.SILENT)}else if(l>0){c+=n.length();const t=(new(o())).retain(c).insert("\n");this.quill.updateContents(t,a.Ay.sources.USER),this.quill.setSelection(c,a.Ay.sources.USER)}}}},"table tab":{key:"Tab",shiftKey:null,format:["table"],handler(t,e){const{event:n,line:r}=e,i=r.offset(this.quill.scroll);n.shiftKey?this.quill.setSelection(i-1,a.Ay.sources.USER):this.quill.setSelection(i+r.length(),a.Ay.sources.USER)}},"list autofill":{key:" ",shiftKey:null,collapsed:!0,format:{"code-block":!1,blockquote:!1,table:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler(t,e){if(null==this.quill.scroll.query("list"))return!0;const{length:n}=e.prefix,[r,i]=this.quill.getLine(t.index);if(i>n)return!0;let s;switch(e.prefix.trim()){case"[]":case"[ ]":s="unchecked";break;case"[x]":s="checked";break;case"-":case"*":s="bullet";break;default:s="ordered"}this.quill.insertText(t.index," ",a.Ay.sources.USER),this.quill.history.cutoff();const l=(new(o())).retain(t.index-i).delete(n+1).retain(r.length()-2-i).retain(1,{list:s});return this.quill.updateContents(l,a.Ay.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index-n,a.Ay.sources.SILENT),!1}},"code exit":{key:"Enter",collapsed:!0,format:["code-block"],prefix:/^$/,suffix:/^\s*$/,handler(t){const[e,n]=this.quill.getLine(t.index);let r=2,i=e;for(;null!=i&&i.length()<=1&&i.formats()["code-block"];)if(i=i.prev,r-=1,r<=0){const r=(new(o())).retain(t.index+e.length()-n-2).retain(1,{"code-block":null}).delete(1);return this.quill.updateContents(r,a.Ay.sources.USER),this.quill.setSelection(t.index-1,a.Ay.sources.SILENT),!1}return!0}},"embed left":m("ArrowLeft",!1),"embed left shift":m("ArrowLeft",!0),"embed right":m("ArrowRight",!1),"embed right shift":m("ArrowRight",!0),"table down":y(!1),"table up":y(!0)}};function g(t){return{key:"Tab",shiftKey:!t,format:{"code-block":!0},handler(e,n){let{event:r}=n;const i=this.quill.scroll.query("code-block"),{TAB:s}=i;if(0===e.length&&!r.shiftKey)return this.quill.insertText(e.index,s,a.Ay.sources.USER),void this.quill.setSelection(e.index+s.length,a.Ay.sources.SILENT);const o=0===e.length?this.quill.getLines(e.index,1):this.quill.getLines(e);let{index:l,length:c}=e;o.forEach(((e,n)=>{t?(e.insertAt(0,s),0===n?l+=s.length:c+=s.length):e.domNode.textContent.startsWith(s)&&(e.deleteAt(0,s.length),0===n?l-=s.length:c-=s.length)})),this.quill.update(a.Ay.sources.USER),this.quill.setSelection(l,c,a.Ay.sources.SILENT)}}}function m(t,e){return{key:t,shiftKey:e,altKey:null,["ArrowLeft"===t?"prefix":"suffix"]:/^$/,handler(n){let{index:r}=n;"ArrowRight"===t&&(r+=n.length+1);const[i]=this.quill.getLeaf(r);return!(i instanceof l.EmbedBlot&&("ArrowLeft"===t?e?this.quill.setSelection(n.index-1,n.length+1,a.Ay.sources.USER):this.quill.setSelection(n.index-1,a.Ay.sources.USER):e?this.quill.setSelection(n.index,n.length+1,a.Ay.sources.USER):this.quill.setSelection(n.index+n.length+1,a.Ay.sources.USER),1))}}}function b(t){return{key:t[0],shortKey:!0,handler(e,n){this.quill.format(t,!n.format[t],a.Ay.sources.USER)}}}function y(t){return{key:t?"ArrowUp":"ArrowDown",collapsed:!0,format:["table"],handler(e,n){const r=t?"prev":"next",i=n.line,s=i.parent[r];if(null!=s){if("table-row"===s.statics.blotName){let t=s.children.head,e=i;for(;null!=e.prev;)e=e.prev,t=t.next;const r=t.offset(this.quill.scroll)+Math.min(n.offset,t.length()-1);this.quill.setSelection(r,0,a.Ay.sources.USER)}}else{const e=i.table()[r];null!=e&&(t?this.quill.setSelection(e.offset(this.quill.scroll)+e.length()-1,0,a.Ay.sources.USER):this.quill.setSelection(e.offset(this.quill.scroll),0,a.Ay.sources.USER))}return!1}}}function v(t){let{quill:e,range:n}=t;const r=e.getLines(n);let i={};if(r.length>1){const t=r[0].formats(),e=r[r.length-1].formats();i=s.AttributeMap.diff(e,t)||{}}e.deleteText(n,a.Ay.sources.USER),Object.keys(i).length>0&&e.formatLine(n.index,1,i,a.Ay.sources.USER),e.setSelection(n.index,a.Ay.sources.SILENT)}d.DEFAULTS=p},8920:function(t){"use strict";var e=Object.prototype.hasOwnProperty,n="~";function r(){}function i(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function s(t,e,r,s,o){if("function"!=typeof r)throw new TypeError("The listener must be a function");var l=new i(r,s||t,o),a=n?n+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],l]:t._events[a].push(l):(t._events[a]=l,t._eventsCount++),t}function o(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e]}function l(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),l.prototype.eventNames=function(){var t,r,i=[];if(0===this._eventsCount)return i;for(r in t=this._events)e.call(t,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(t)):i},l.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,s=r.length,o=new Array(s);i<s;i++)o[i]=r[i].fn;return o},l.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},l.prototype.emit=function(t,e,r,i,s,o){var l=n?n+t:t;if(!this._events[l])return!1;var a,c,u=this._events[l],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,i),!0;case 5:return u.fn.call(u.context,e,r,i,s),!0;case 6:return u.fn.call(u.context,e,r,i,s,o),!0}for(c=1,a=new Array(h-1);c<h;c++)a[c-1]=arguments[c];u.fn.apply(u.context,a)}else{var f,d=u.length;for(c=0;c<d;c++)switch(u[c].once&&this.removeListener(t,u[c].fn,void 0,!0),h){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,e);break;case 3:u[c].fn.call(u[c].context,e,r);break;case 4:u[c].fn.call(u[c].context,e,r,i);break;default:if(!a)for(f=1,a=new Array(h-1);f<h;f++)a[f-1]=arguments[f];u[c].fn.apply(u[c].context,a)}}return!0},l.prototype.on=function(t,e,n){return s(this,t,e,n,!1)},l.prototype.once=function(t,e,n){return s(this,t,e,n,!0)},l.prototype.removeListener=function(t,e,r,i){var s=n?n+t:t;if(!this._events[s])return this;if(!e)return o(this,s),this;var l=this._events[s];if(l.fn)l.fn!==e||i&&!l.once||r&&l.context!==r||o(this,s);else{for(var a=0,c=[],u=l.length;a<u;a++)(l[a].fn!==e||i&&!l[a].once||r&&l[a].context!==r)&&c.push(l[a]);c.length?this._events[s]=1===c.length?c[0]:c:o(this,s)}return this},l.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&o(this,e)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,t.exports=l},5090:function(t){var e=-1,n=1,r=0;function i(t,g,m,b,y){if(t===g)return t?[[r,t]]:[];if(null!=m){var A=function(t,e,n){var r="number"==typeof n?{index:n,length:0}:n.oldRange,i="number"==typeof n?null:n.newRange,s=t.length,o=e.length;if(0===r.length&&(null===i||0===i.length)){var l=r.index,a=t.slice(0,l),c=t.slice(l),u=i?i.index:null,h=l+o-s;if((null===u||u===h)&&!(h<0||h>o)){var f=e.slice(0,h);if((g=e.slice(h))===c){var d=Math.min(l,h);if((b=a.slice(0,d))===(A=f.slice(0,d)))return v(b,a.slice(d),f.slice(d),c)}}if(null===u||u===l){var p=l,g=(f=e.slice(0,p),e.slice(p));if(f===a){var m=Math.min(s-p,o-p);if((y=c.slice(c.length-m))===(N=g.slice(g.length-m)))return v(a,c.slice(0,c.length-m),g.slice(0,g.length-m),y)}}}if(r.length>0&&i&&0===i.length){var b=t.slice(0,r.index),y=t.slice(r.index+r.length);if(!(o<(d=b.length)+(m=y.length))){var A=e.slice(0,d),N=e.slice(o-m);if(b===A&&y===N)return v(b,t.slice(d,s-m),e.slice(d,o-m),y)}}return null}(t,g,m);if(A)return A}var N=o(t,g),E=t.substring(0,N);N=a(t=t.substring(N),g=g.substring(N));var _=t.substring(t.length-N),x=function(t,l){var c;if(!t)return[[n,l]];if(!l)return[[e,t]];var u=t.length>l.length?t:l,h=t.length>l.length?l:t,f=u.indexOf(h);if(-1!==f)return c=[[n,u.substring(0,f)],[r,h],[n,u.substring(f+h.length)]],t.length>l.length&&(c[0][0]=c[2][0]=e),c;if(1===h.length)return[[e,t],[n,l]];var d=function(t,e){var n=t.length>e.length?t:e,r=t.length>e.length?e:t;if(n.length<4||2*r.length<n.length)return null;function i(t,e,n){for(var r,i,s,l,c=t.substring(n,n+Math.floor(t.length/4)),u=-1,h="";-1!==(u=e.indexOf(c,u+1));){var f=o(t.substring(n),e.substring(u)),d=a(t.substring(0,n),e.substring(0,u));h.length<d+f&&(h=e.substring(u-d,u)+e.substring(u,u+f),r=t.substring(0,n-d),i=t.substring(n+f),s=e.substring(0,u-d),l=e.substring(u+f))}return 2*h.length>=t.length?[r,i,s,l,h]:null}var s,l,c,u,h,f=i(n,r,Math.ceil(n.length/4)),d=i(n,r,Math.ceil(n.length/2));return f||d?(s=d?f&&f[4].length>d[4].length?f:d:f,t.length>e.length?(l=s[0],c=s[1],u=s[2],h=s[3]):(u=s[0],h=s[1],l=s[2],c=s[3]),[l,c,u,h,s[4]]):null}(t,l);if(d){var p=d[0],g=d[1],m=d[2],b=d[3],y=d[4],v=i(p,m),A=i(g,b);return v.concat([[r,y]],A)}return function(t,r){for(var i=t.length,o=r.length,l=Math.ceil((i+o)/2),a=l,c=2*l,u=new Array(c),h=new Array(c),f=0;f<c;f++)u[f]=-1,h[f]=-1;u[a+1]=0,h[a+1]=0;for(var d=i-o,p=d%2!=0,g=0,m=0,b=0,y=0,v=0;v<l;v++){for(var A=-v+g;A<=v-m;A+=2){for(var N=a+A,E=(j=A===-v||A!==v&&u[N-1]<u[N+1]?u[N+1]:u[N-1]+1)-A;j<i&&E<o&&t.charAt(j)===r.charAt(E);)j++,E++;if(u[N]=j,j>i)m+=2;else if(E>o)g+=2;else if(p&&(w=a+d-A)>=0&&w<c&&-1!==h[w]&&j>=(x=i-h[w]))return s(t,r,j,E)}for(var _=-v+b;_<=v-y;_+=2){for(var x,w=a+_,O=(x=_===-v||_!==v&&h[w-1]<h[w+1]?h[w+1]:h[w-1]+1)-_;x<i&&O<o&&t.charAt(i-x-1)===r.charAt(o-O-1);)x++,O++;if(h[w]=x,x>i)y+=2;else if(O>o)b+=2;else if(!p){var j;if((N=a+d-_)>=0&&N<c&&-1!==u[N])if(E=a+(j=u[N])-N,j>=(x=i-x))return s(t,r,j,E)}}}return[[e,t],[n,r]]}(t,l)}(t=t.substring(0,t.length-N),g=g.substring(0,g.length-N));return E&&x.unshift([r,E]),_&&x.push([r,_]),p(x,y),b&&function(t){for(var i=!1,s=[],o=0,g=null,m=0,b=0,y=0,v=0,A=0;m<t.length;)t[m][0]==r?(s[o++]=m,b=v,y=A,v=0,A=0,g=t[m][1]):(t[m][0]==n?v+=t[m][1].length:A+=t[m][1].length,g&&g.length<=Math.max(b,y)&&g.length<=Math.max(v,A)&&(t.splice(s[o-1],0,[e,g]),t[s[o-1]+1][0]=n,o--,m=--o>0?s[o-1]:-1,b=0,y=0,v=0,A=0,g=null,i=!0)),m++;for(i&&p(t),function(t){function e(t,e){if(!t||!e)return 6;var n=t.charAt(t.length-1),r=e.charAt(0),i=n.match(c),s=r.match(c),o=i&&n.match(u),l=s&&r.match(u),a=o&&n.match(h),p=l&&r.match(h),g=a&&t.match(f),m=p&&e.match(d);return g||m?5:a||p?4:i&&!o&&l?3:o||l?2:i||s?1:0}for(var n=1;n<t.length-1;){if(t[n-1][0]==r&&t[n+1][0]==r){var i=t[n-1][1],s=t[n][1],o=t[n+1][1],l=a(i,s);if(l){var p=s.substring(s.length-l);i=i.substring(0,i.length-l),s=p+s.substring(0,s.length-l),o=p+o}for(var g=i,m=s,b=o,y=e(i,s)+e(s,o);s.charAt(0)===o.charAt(0);){i+=s.charAt(0),s=s.substring(1)+o.charAt(0),o=o.substring(1);var v=e(i,s)+e(s,o);v>=y&&(y=v,g=i,m=s,b=o)}t[n-1][1]!=g&&(g?t[n-1][1]=g:(t.splice(n-1,1),n--),t[n][1]=m,b?t[n+1][1]=b:(t.splice(n+1,1),n--))}n++}}(t),m=1;m<t.length;){if(t[m-1][0]==e&&t[m][0]==n){var N=t[m-1][1],E=t[m][1],_=l(N,E),x=l(E,N);_>=x?(_>=N.length/2||_>=E.length/2)&&(t.splice(m,0,[r,E.substring(0,_)]),t[m-1][1]=N.substring(0,N.length-_),t[m+1][1]=E.substring(_),m++):(x>=N.length/2||x>=E.length/2)&&(t.splice(m,0,[r,N.substring(0,x)]),t[m-1][0]=n,t[m-1][1]=E.substring(0,E.length-x),t[m+1][0]=e,t[m+1][1]=N.substring(x),m++),m++}m++}}(x),x}function s(t,e,n,r){var s=t.substring(0,n),o=e.substring(0,r),l=t.substring(n),a=e.substring(r),c=i(s,o),u=i(l,a);return c.concat(u)}function o(t,e){if(!t||!e||t.charAt(0)!==e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(s,i)==e.substring(s,i)?s=n=i:r=i,i=Math.floor((r-n)/2+n);return g(t.charCodeAt(i-1))&&i--,i}function l(t,e){var n=t.length,r=e.length;if(0==n||0==r)return 0;n>r?t=t.substring(n-r):n<r&&(e=e.substring(0,n));var i=Math.min(n,r);if(t==e)return i;for(var s=0,o=1;;){var l=t.substring(i-o),a=e.indexOf(l);if(-1==a)return s;o+=a,0!=a&&t.substring(i-o)!=e.substring(0,o)||(s=o,o++)}}function a(t,e){if(!t||!e||t.slice(-1)!==e.slice(-1))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(t.length-i,t.length-s)==e.substring(e.length-i,e.length-s)?s=n=i:r=i,i=Math.floor((r-n)/2+n);return m(t.charCodeAt(t.length-i))&&i--,i}var c=/[^a-zA-Z0-9]/,u=/\s/,h=/[\r\n]/,f=/\n\r?\n$/,d=/^\r?\n\r?\n/;function p(t,i){t.push([r,""]);for(var s,l=0,c=0,u=0,h="",f="";l<t.length;)if(l<t.length-1&&!t[l][1])t.splice(l,1);else switch(t[l][0]){case n:u++,f+=t[l][1],l++;break;case e:c++,h+=t[l][1],l++;break;case r:var d=l-u-c-1;if(i){if(d>=0&&y(t[d][1])){var g=t[d][1].slice(-1);if(t[d][1]=t[d][1].slice(0,-1),h=g+h,f=g+f,!t[d][1]){t.splice(d,1),l--;var m=d-1;t[m]&&t[m][0]===n&&(u++,f=t[m][1]+f,m--),t[m]&&t[m][0]===e&&(c++,h=t[m][1]+h,m--),d=m}}b(t[l][1])&&(g=t[l][1].charAt(0),t[l][1]=t[l][1].slice(1),h+=g,f+=g)}if(l<t.length-1&&!t[l][1]){t.splice(l,1);break}if(h.length>0||f.length>0){h.length>0&&f.length>0&&(0!==(s=o(f,h))&&(d>=0?t[d][1]+=f.substring(0,s):(t.splice(0,0,[r,f.substring(0,s)]),l++),f=f.substring(s),h=h.substring(s)),0!==(s=a(f,h))&&(t[l][1]=f.substring(f.length-s)+t[l][1],f=f.substring(0,f.length-s),h=h.substring(0,h.length-s)));var v=u+c;0===h.length&&0===f.length?(t.splice(l-v,v),l-=v):0===h.length?(t.splice(l-v,v,[n,f]),l=l-v+1):0===f.length?(t.splice(l-v,v,[e,h]),l=l-v+1):(t.splice(l-v,v,[e,h],[n,f]),l=l-v+2)}0!==l&&t[l-1][0]===r?(t[l-1][1]+=t[l][1],t.splice(l,1)):l++,u=0,c=0,h="",f=""}""===t[t.length-1][1]&&t.pop();var A=!1;for(l=1;l<t.length-1;)t[l-1][0]===r&&t[l+1][0]===r&&(t[l][1].substring(t[l][1].length-t[l-1][1].length)===t[l-1][1]?(t[l][1]=t[l-1][1]+t[l][1].substring(0,t[l][1].length-t[l-1][1].length),t[l+1][1]=t[l-1][1]+t[l+1][1],t.splice(l-1,1),A=!0):t[l][1].substring(0,t[l+1][1].length)==t[l+1][1]&&(t[l-1][1]+=t[l+1][1],t[l][1]=t[l][1].substring(t[l+1][1].length)+t[l+1][1],t.splice(l+1,1),A=!0)),l++;A&&p(t,i)}function g(t){return t>=55296&&t<=56319}function m(t){return t>=56320&&t<=57343}function b(t){return m(t.charCodeAt(0))}function y(t){return g(t.charCodeAt(t.length-1))}function v(t,i,s,o){return y(t)||b(o)?null:function(t){for(var e=[],n=0;n<t.length;n++)t[n][1].length>0&&e.push(t[n]);return e}([[r,t],[e,i],[n,s],[r,o]])}function A(t,e,n,r){return i(t,e,n,r,!0)}A.INSERT=n,A.DELETE=e,A.EQUAL=r,t.exports=A},9629:function(t,e,n){t=n.nmd(t);var r="__lodash_hash_undefined__",i=9007199254740991,s="[object Arguments]",o="[object Boolean]",l="[object Date]",a="[object Function]",c="[object GeneratorFunction]",u="[object Map]",h="[object Number]",f="[object Object]",d="[object Promise]",p="[object RegExp]",g="[object Set]",m="[object String]",b="[object Symbol]",y="[object WeakMap]",v="[object ArrayBuffer]",A="[object DataView]",N="[object Float32Array]",E="[object Float64Array]",_="[object Int8Array]",x="[object Int16Array]",w="[object Int32Array]",O="[object Uint8Array]",j="[object Uint8ClampedArray]",S="[object Uint16Array]",L="[object Uint32Array]",T=/\w*$/,k=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,R={};R[s]=R["[object Array]"]=R[v]=R[A]=R[o]=R[l]=R[N]=R[E]=R[_]=R[x]=R[w]=R[u]=R[h]=R[f]=R[p]=R[g]=R[m]=R[b]=R[O]=R[j]=R[S]=R[L]=!0,R["[object Error]"]=R[a]=R[y]=!1;var B="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,q="object"==typeof self&&self&&self.Object===Object&&self,I=B||q||Function("return this")(),M=e&&!e.nodeType&&e,D=M&&t&&!t.nodeType&&t,U=D&&D.exports===M;function P(t,e){return t.set(e[0],e[1]),t}function z(t,e){return t.add(e),t}function F(t,e,n,r){var i=-1,s=t?t.length:0;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function $(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function K(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function V(t,e){return function(n){return t(e(n))}}function H(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var W,G=Array.prototype,X=Function.prototype,Q=Object.prototype,J=I["__core-js_shared__"],Y=(W=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",Z=X.toString,tt=Q.hasOwnProperty,et=Q.toString,nt=RegExp("^"+Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=U?I.Buffer:void 0,it=I.Symbol,st=I.Uint8Array,ot=V(Object.getPrototypeOf,Object),lt=Object.create,at=Q.propertyIsEnumerable,ct=G.splice,ut=Object.getOwnPropertySymbols,ht=rt?rt.isBuffer:void 0,ft=V(Object.keys,Object),dt=It(I,"DataView"),pt=It(I,"Map"),gt=It(I,"Promise"),mt=It(I,"Set"),bt=It(I,"WeakMap"),yt=It(Object,"create"),vt=zt(dt),At=zt(pt),Nt=zt(gt),Et=zt(mt),_t=zt(bt),xt=it?it.prototype:void 0,wt=xt?xt.valueOf:void 0;function Ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function jt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Lt(t){this.__data__=new jt(t)}function Tt(t,e,n){var r=t[e];tt.call(t,e)&&Ft(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function kt(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1}function Ct(t,e,n,r,i,d,y){var k;if(r&&(k=d?r(t,i,d,y):r(t)),void 0!==k)return k;if(!Wt(t))return t;var C=$t(t);if(C){if(k=function(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&tt.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!e)return function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t,k)}else{var B=Dt(t),q=B==a||B==c;if(Vt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(B==f||B==s||q&&!d){if($(t))return d?t:{};if(k=function(t){return"function"!=typeof t.constructor||Pt(t)?{}:Wt(e=ot(t))?lt(e):{};var e}(q?{}:t),!e)return function(t,e){return Bt(t,Mt(t),e)}(t,function(t,e){return t&&Bt(e,Gt(e),t)}(k,t))}else{if(!R[B])return d?t:{};k=function(t,e,n,r){var i,s=t.constructor;switch(e){case v:return Rt(t);case o:case l:return new s(+t);case A:return function(t,e){var n=e?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case N:case E:case _:case x:case w:case O:case j:case S:case L:return function(t,e){var n=e?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case u:return function(t,e,n){return F(e?n(K(t),!0):K(t),P,new t.constructor)}(t,r,n);case h:case m:return new s(t);case p:return function(t){var e=new t.constructor(t.source,T.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,n){return F(e?n(H(t),!0):H(t),z,new t.constructor)}(t,r,n);case b:return i=t,wt?Object(wt.call(i)):{}}}(t,B,Ct,e)}}y||(y=new Lt);var I=y.get(t);if(I)return I;if(y.set(t,k),!C)var M=n?function(t){return function(t,e,n){var r=e(t);return $t(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Gt,Mt)}(t):Gt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n););}(M||t,(function(i,s){M&&(i=t[s=i]),Tt(k,s,Ct(i,e,n,r,s,t,y))})),k}function Rt(t){var e=new t.constructor(t.byteLength);return new st(e).set(new st(t)),e}function Bt(t,e,n,r){n||(n={});for(var i=-1,s=e.length;++i<s;){var o=e[i],l=r?r(n[o],t[o],o,n,t):void 0;Tt(n,o,void 0===l?t[o]:l)}return n}function qt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function It(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!Wt(t)||(e=t,Y&&Y in e))&&(Ht(t)||$(t)?nt:k).test(zt(t));var e}(n)?n:void 0}Ot.prototype.clear=function(){this.__data__=yt?yt(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var e=this.__data__;if(yt){var n=e[t];return n===r?void 0:n}return tt.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:tt.call(e,t)},Ot.prototype.set=function(t,e){return this.__data__[t]=yt&&void 0===e?r:e,this},jt.prototype.clear=function(){this.__data__=[]},jt.prototype.delete=function(t){var e=this.__data__,n=kt(e,t);return!(n<0||(n==e.length-1?e.pop():ct.call(e,n,1),0))},jt.prototype.get=function(t){var e=this.__data__,n=kt(e,t);return n<0?void 0:e[n][1]},jt.prototype.has=function(t){return kt(this.__data__,t)>-1},jt.prototype.set=function(t,e){var n=this.__data__,r=kt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new Ot,map:new(pt||jt),string:new Ot}},St.prototype.delete=function(t){return qt(this,t).delete(t)},St.prototype.get=function(t){return qt(this,t).get(t)},St.prototype.has=function(t){return qt(this,t).has(t)},St.prototype.set=function(t,e){return qt(this,t).set(t,e),this},Lt.prototype.clear=function(){this.__data__=new jt},Lt.prototype.delete=function(t){return this.__data__.delete(t)},Lt.prototype.get=function(t){return this.__data__.get(t)},Lt.prototype.has=function(t){return this.__data__.has(t)},Lt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof jt){var r=n.__data__;if(!pt||r.length<199)return r.push([t,e]),this;n=this.__data__=new St(r)}return n.set(t,e),this};var Mt=ut?V(ut,Object):function(){return[]},Dt=function(t){return et.call(t)};function Ut(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function Pt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Q)}function zt(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ft(t,e){return t===e||t!=t&&e!=e}(dt&&Dt(new dt(new ArrayBuffer(1)))!=A||pt&&Dt(new pt)!=u||gt&&Dt(gt.resolve())!=d||mt&&Dt(new mt)!=g||bt&&Dt(new bt)!=y)&&(Dt=function(t){var e=et.call(t),n=e==f?t.constructor:void 0,r=n?zt(n):void 0;if(r)switch(r){case vt:return A;case At:return u;case Nt:return d;case Et:return g;case _t:return y}return e});var $t=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ht(t)}var Vt=ht||function(){return!1};function Ht(t){var e=Wt(t)?et.call(t):"";return e==a||e==c}function Wt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Kt(t)?function(t,e){var n=$t(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Kt(t)}(t)&&tt.call(t,"callee")&&(!at.call(t,"callee")||et.call(t)==s)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var o in t)!e&&!tt.call(t,o)||i&&("length"==o||Ut(o,r))||n.push(o);return n}(t):function(t){if(!Pt(t))return ft(t);var e=[];for(var n in Object(t))tt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return Ct(t,!0,!0)}},4162:function(t,e,n){t=n.nmd(t);var r="__lodash_hash_undefined__",i=1,s=2,o=9007199254740991,l="[object Arguments]",a="[object Array]",c="[object AsyncFunction]",u="[object Boolean]",h="[object Date]",f="[object Error]",d="[object Function]",p="[object GeneratorFunction]",g="[object Map]",m="[object Number]",b="[object Null]",y="[object Object]",v="[object Promise]",A="[object Proxy]",N="[object RegExp]",E="[object Set]",_="[object String]",x="[object Undefined]",w="[object WeakMap]",O="[object ArrayBuffer]",j="[object DataView]",S=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,T={};T["[object Float32Array]"]=T["[object Float64Array]"]=T["[object Int8Array]"]=T["[object Int16Array]"]=T["[object Int32Array]"]=T["[object Uint8Array]"]=T["[object Uint8ClampedArray]"]=T["[object Uint16Array]"]=T["[object Uint32Array]"]=!0,T[l]=T[a]=T[O]=T[u]=T[j]=T[h]=T[f]=T[d]=T[g]=T[m]=T[y]=T[N]=T[E]=T[_]=T[w]=!1;var k="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,C="object"==typeof self&&self&&self.Object===Object&&self,R=k||C||Function("return this")(),B=e&&!e.nodeType&&e,q=B&&t&&!t.nodeType&&t,I=q&&q.exports===B,M=I&&k.process,D=function(){try{return M&&M.binding&&M.binding("util")}catch(t){}}(),U=D&&D.isTypedArray;function P(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function z(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function F(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var $,K,V,H=Array.prototype,W=Function.prototype,G=Object.prototype,X=R["__core-js_shared__"],Q=W.toString,J=G.hasOwnProperty,Y=($=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",Z=G.toString,tt=RegExp("^"+Q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=I?R.Buffer:void 0,nt=R.Symbol,rt=R.Uint8Array,it=G.propertyIsEnumerable,st=H.splice,ot=nt?nt.toStringTag:void 0,lt=Object.getOwnPropertySymbols,at=et?et.isBuffer:void 0,ct=(K=Object.keys,V=Object,function(t){return K(V(t))}),ut=qt(R,"DataView"),ht=qt(R,"Map"),ft=qt(R,"Promise"),dt=qt(R,"Set"),pt=qt(R,"WeakMap"),gt=qt(Object,"create"),mt=Ut(ut),bt=Ut(ht),yt=Ut(ft),vt=Ut(dt),At=Ut(pt),Nt=nt?nt.prototype:void 0,Et=Nt?Nt.valueOf:void 0;function _t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new wt;++e<n;)this.add(t[e])}function jt(t){var e=this.__data__=new xt(t);this.size=e.size}function St(t,e){for(var n=t.length;n--;)if(Pt(t[n][0],e))return n;return-1}function Lt(t){return null==t?void 0===t?x:b:ot&&ot in Object(t)?function(t){var e=J.call(t,ot),n=t[ot];try{t[ot]=void 0;var r=!0}catch(t){}var i=Z.call(t);return r&&(e?t[ot]=n:delete t[ot]),i}(t):function(t){return Z.call(t)}(t)}function Tt(t){return Wt(t)&&Lt(t)==l}function kt(t,e,n,r,o){return t===e||(null==t||null==e||!Wt(t)&&!Wt(e)?t!=t&&e!=e:function(t,e,n,r,o,c){var d=Ft(t),p=Ft(e),b=d?a:Mt(t),v=p?a:Mt(e),A=(b=b==l?y:b)==y,x=(v=v==l?y:v)==y,w=b==v;if(w&&$t(t)){if(!$t(e))return!1;d=!0,A=!1}if(w&&!A)return c||(c=new jt),d||Gt(t)?Ct(t,e,n,r,o,c):function(t,e,n,r,o,l,a){switch(n){case j:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case O:return!(t.byteLength!=e.byteLength||!l(new rt(t),new rt(e)));case u:case h:case m:return Pt(+t,+e);case f:return t.name==e.name&&t.message==e.message;case N:case _:return t==e+"";case g:var c=z;case E:var d=r&i;if(c||(c=F),t.size!=e.size&&!d)return!1;var p=a.get(t);if(p)return p==e;r|=s,a.set(t,e);var b=Ct(c(t),c(e),r,o,l,a);return a.delete(t),b;case"[object Symbol]":if(Et)return Et.call(t)==Et.call(e)}return!1}(t,e,b,n,r,o,c);if(!(n&i)){var S=A&&J.call(t,"__wrapped__"),L=x&&J.call(e,"__wrapped__");if(S||L){var T=S?t.value():t,k=L?e.value():e;return c||(c=new jt),o(T,k,n,r,c)}}return!!w&&(c||(c=new jt),function(t,e,n,r,s,o){var l=n&i,a=Rt(t),c=a.length;if(c!=Rt(e).length&&!l)return!1;for(var u=c;u--;){var h=a[u];if(!(l?h in e:J.call(e,h)))return!1}var f=o.get(t);if(f&&o.get(e))return f==e;var d=!0;o.set(t,e),o.set(e,t);for(var p=l;++u<c;){var g=t[h=a[u]],m=e[h];if(r)var b=l?r(m,g,h,e,t,o):r(g,m,h,t,e,o);if(!(void 0===b?g===m||s(g,m,n,r,o):b)){d=!1;break}p||(p="constructor"==h)}if(d&&!p){var y=t.constructor,v=e.constructor;y==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(d=!1)}return o.delete(t),o.delete(e),d}(t,e,n,r,o,c))}(t,e,n,r,kt,o))}function Ct(t,e,n,r,o,l){var a=n&i,c=t.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var h=l.get(t);if(h&&l.get(e))return h==e;var f=-1,d=!0,p=n&s?new Ot:void 0;for(l.set(t,e),l.set(e,t);++f<c;){var g=t[f],m=e[f];if(r)var b=a?r(m,g,f,e,t,l):r(g,m,f,t,e,l);if(void 0!==b){if(b)continue;d=!1;break}if(p){if(!P(e,(function(t,e){if(i=e,!p.has(i)&&(g===t||o(g,t,n,r,l)))return p.push(e);var i}))){d=!1;break}}else if(g!==m&&!o(g,m,n,r,l)){d=!1;break}}return l.delete(t),l.delete(e),d}function Rt(t){return function(t,e,n){var r=e(t);return Ft(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Xt,It)}function Bt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function qt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!Ht(t)||function(t){return!!Y&&Y in t}(t))&&(Kt(t)?tt:S).test(Ut(t))}(n)?n:void 0}_t.prototype.clear=function(){this.__data__=gt?gt(null):{},this.size=0},_t.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_t.prototype.get=function(t){var e=this.__data__;if(gt){var n=e[t];return n===r?void 0:n}return J.call(e,t)?e[t]:void 0},_t.prototype.has=function(t){var e=this.__data__;return gt?void 0!==e[t]:J.call(e,t)},_t.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?r:e,this},xt.prototype.clear=function(){this.__data__=[],this.size=0},xt.prototype.delete=function(t){var e=this.__data__,n=St(e,t);return!(n<0||(n==e.length-1?e.pop():st.call(e,n,1),--this.size,0))},xt.prototype.get=function(t){var e=this.__data__,n=St(e,t);return n<0?void 0:e[n][1]},xt.prototype.has=function(t){return St(this.__data__,t)>-1},xt.prototype.set=function(t,e){var n=this.__data__,r=St(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},wt.prototype.clear=function(){this.size=0,this.__data__={hash:new _t,map:new(ht||xt),string:new _t}},wt.prototype.delete=function(t){var e=Bt(this,t).delete(t);return this.size-=e?1:0,e},wt.prototype.get=function(t){return Bt(this,t).get(t)},wt.prototype.has=function(t){return Bt(this,t).has(t)},wt.prototype.set=function(t,e){var n=Bt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Ot.prototype.add=Ot.prototype.push=function(t){return this.__data__.set(t,r),this},Ot.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.clear=function(){this.__data__=new xt,this.size=0},jt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},jt.prototype.get=function(t){return this.__data__.get(t)},jt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof xt){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new wt(r)}return n.set(t,e),this.size=n.size,this};var It=lt?function(t){return null==t?[]:(t=Object(t),function(e,n){for(var r=-1,i=null==e?0:e.length,s=0,o=[];++r<i;){var l=e[r];a=l,it.call(t,a)&&(o[s++]=l)}var a;return o}(lt(t)))}:function(){return[]},Mt=Lt;function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Pt(t,e){return t===e||t!=t&&e!=e}(ut&&Mt(new ut(new ArrayBuffer(1)))!=j||ht&&Mt(new ht)!=g||ft&&Mt(ft.resolve())!=v||dt&&Mt(new dt)!=E||pt&&Mt(new pt)!=w)&&(Mt=function(t){var e=Lt(t),n=e==y?t.constructor:void 0,r=n?Ut(n):"";if(r)switch(r){case mt:return j;case bt:return g;case yt:return v;case vt:return E;case At:return w}return e});var zt=Tt(function(){return arguments}())?Tt:function(t){return Wt(t)&&J.call(t,"callee")&&!it.call(t,"callee")},Ft=Array.isArray,$t=at||function(){return!1};function Kt(t){if(!Ht(t))return!1;var e=Lt(t);return e==d||e==p||e==c||e==A}function Vt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function Ht(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Wt(t){return null!=t&&"object"==typeof t}var Gt=U?function(t){return function(e){return t(e)}}(U):function(t){return Wt(t)&&Vt(t.length)&&!!T[Lt(t)]};function Xt(t){return null!=(e=t)&&Vt(e.length)&&!Kt(e)?function(t,e){var n=Ft(t),r=!n&&zt(t),i=!n&&!r&&$t(t),s=!n&&!r&&!i&&Gt(t),o=n||r||i||s,l=o?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],a=l.length;for(var c in t)!e&&!J.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Dt(c,a))||l.push(c);return l}(t):function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||G))return ct(t);var e,n,r=[];for(var i in Object(t))J.call(t,i)&&"constructor"!=i&&r.push(i);return r}(t);var e}t.exports=function(t,e){return kt(t,e)}},1270:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(9629),i=n(4162);var s;!function(t){t.compose=function(t={},e={},n=!1){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});let i=r(e);n||(i=Object.keys(i).reduce(((t,e)=>(null!=i[e]&&(t[e]=i[e]),t)),{}));for(const n in t)void 0!==t[n]&&void 0===e[n]&&(i[n]=t[n]);return Object.keys(i).length>0?i:void 0},t.diff=function(t={},e={}){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});const n=Object.keys(t).concat(Object.keys(e)).reduce(((n,r)=>(i(t[r],e[r])||(n[r]=void 0===e[r]?null:e[r]),n)),{});return Object.keys(n).length>0?n:void 0},t.invert=function(t={},e={}){t=t||{};const n=Object.keys(e).reduce(((n,r)=>(e[r]!==t[r]&&void 0!==t[r]&&(n[r]=e[r]),n)),{});return Object.keys(t).reduce(((n,r)=>(t[r]!==e[r]&&void 0===e[r]&&(n[r]=null),n)),n)},t.transform=function(t,e,n=!1){if("object"!=typeof t)return e;if("object"!=typeof e)return;if(!n)return e;const r=Object.keys(e).reduce(((n,r)=>(void 0===t[r]&&(n[r]=e[r]),n)),{});return Object.keys(r).length>0?r:void 0}}(s||(s={})),e.default=s},5232:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AttributeMap=e.OpIterator=e.Op=void 0;const r=n(5090),i=n(9629),s=n(4162),o=n(1270);e.AttributeMap=o.default;const l=n(4123);e.Op=l.default;const a=n(7033);e.OpIterator=a.default;const c=String.fromCharCode(0),u=(t,e)=>{if("object"!=typeof t||null===t)throw new Error("cannot retain a "+typeof t);if("object"!=typeof e||null===e)throw new Error("cannot retain a "+typeof e);const n=Object.keys(t)[0];if(!n||n!==Object.keys(e)[0])throw new Error(`embed types not matched: ${n} != ${Object.keys(e)[0]}`);return[n,t[n],e[n]]};class h{constructor(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]}static registerEmbed(t,e){this.handlers[t]=e}static unregisterEmbed(t){delete this.handlers[t]}static getHandler(t){const e=this.handlers[t];if(!e)throw new Error(`no handlers for embed type "${t}"`);return e}insert(t,e){const n={};return"string"==typeof t&&0===t.length?this:(n.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))}delete(t){return t<=0?this:this.push({delete:t})}retain(t,e){if("number"==typeof t&&t<=0)return this;const n={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)}push(t){let e=this.ops.length,n=this.ops[e-1];if(t=i(t),"object"==typeof n){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,n=this.ops[e-1],"object"!=typeof n))return this.ops.unshift(t),this;if(s(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this}chop(){const t=this.ops[this.ops.length-1];return t&&"number"==typeof t.retain&&!t.attributes&&this.ops.pop(),this}filter(t){return this.ops.filter(t)}forEach(t){this.ops.forEach(t)}map(t){return this.ops.map(t)}partition(t){const e=[],n=[];return this.forEach((r=>{(t(r)?e:n).push(r)})),[e,n]}reduce(t,e){return this.ops.reduce(t,e)}changeLength(){return this.reduce(((t,e)=>e.insert?t+l.default.length(e):e.delete?t-e.delete:t),0)}length(){return this.reduce(((t,e)=>t+l.default.length(e)),0)}slice(t=0,e=1/0){const n=[],r=new a.default(this.ops);let i=0;for(;i<e&&r.hasNext();){let s;i<t?s=r.next(t-i):(s=r.next(e-i),n.push(s)),i+=l.default.length(s)}return new h(n)}compose(t){const e=new a.default(this.ops),n=new a.default(t.ops),r=[],i=n.peek();if(null!=i&&"number"==typeof i.retain&&null==i.attributes){let t=i.retain;for(;"insert"===e.peekType()&&e.peekLength()<=t;)t-=e.peekLength(),r.push(e.next());i.retain-t>0&&n.next(i.retain-t)}const l=new h(r);for(;e.hasNext()||n.hasNext();)if("insert"===n.peekType())l.push(n.next());else if("delete"===e.peekType())l.push(e.next());else{const t=Math.min(e.peekLength(),n.peekLength()),r=e.next(t),i=n.next(t);if(i.retain){const a={};if("number"==typeof r.retain)a.retain="number"==typeof i.retain?t:i.retain;else if("number"==typeof i.retain)null==r.retain?a.insert=r.insert:a.retain=r.retain;else{const t=null==r.retain?"insert":"retain",[e,n,s]=u(r[t],i.retain),o=h.getHandler(e);a[t]={[e]:o.compose(n,s,"retain"===t)}}const c=o.default.compose(r.attributes,i.attributes,"number"==typeof r.retain);if(c&&(a.attributes=c),l.push(a),!n.hasNext()&&s(l.ops[l.ops.length-1],a)){const t=new h(e.rest());return l.concat(t).chop()}}else"number"==typeof i.delete&&("number"==typeof r.retain||"object"==typeof r.retain&&null!==r.retain)&&l.push(i)}return l.chop()}concat(t){const e=new h(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e}diff(t,e){if(this.ops===t.ops)return new h;const n=[this,t].map((e=>e.map((n=>{if(null!=n.insert)return"string"==typeof n.insert?n.insert:c;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join(""))),i=new h,l=r(n[0],n[1],e,!0),u=new a.default(this.ops),f=new a.default(t.ops);return l.forEach((t=>{let e=t[1].length;for(;e>0;){let n=0;switch(t[0]){case r.INSERT:n=Math.min(f.peekLength(),e),i.push(f.next(n));break;case r.DELETE:n=Math.min(e,u.peekLength()),u.next(n),i.delete(n);break;case r.EQUAL:n=Math.min(u.peekLength(),f.peekLength(),e);const t=u.next(n),l=f.next(n);s(t.insert,l.insert)?i.retain(n,o.default.diff(t.attributes,l.attributes)):i.push(l).delete(n)}e-=n}})),i.chop()}eachLine(t,e="\n"){const n=new a.default(this.ops);let r=new h,i=0;for(;n.hasNext();){if("insert"!==n.peekType())return;const s=n.peek(),o=l.default.length(s)-n.peekLength(),a="string"==typeof s.insert?s.insert.indexOf(e,o)-o:-1;if(a<0)r.push(n.next());else if(a>0)r.push(n.next(a));else{if(!1===t(r,n.next(1).attributes||{},i))return;i+=1,r=new h}}r.length()>0&&t(r,{},i)}invert(t){const e=new h;return this.reduce(((n,r)=>{if(r.insert)e.delete(l.default.length(r));else{if("number"==typeof r.retain&&null==r.attributes)return e.retain(r.retain),n+r.retain;if(r.delete||"number"==typeof r.retain){const i=r.delete||r.retain;return t.slice(n,n+i).forEach((t=>{r.delete?e.push(t):r.retain&&r.attributes&&e.retain(l.default.length(t),o.default.invert(r.attributes,t.attributes))})),n+i}if("object"==typeof r.retain&&null!==r.retain){const i=t.slice(n,n+1),s=new a.default(i.ops).next(),[l,c,f]=u(r.retain,s.insert),d=h.getHandler(l);return e.retain({[l]:d.invert(c,f)},o.default.invert(r.attributes,s.attributes)),n+1}}return n}),0),e.chop()}transform(t,e=!1){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);const n=t,r=new a.default(this.ops),i=new a.default(n.ops),s=new h;for(;r.hasNext()||i.hasNext();)if("insert"!==r.peekType()||!e&&"insert"===i.peekType())if("insert"===i.peekType())s.push(i.next());else{const t=Math.min(r.peekLength(),i.peekLength()),n=r.next(t),l=i.next(t);if(n.delete)continue;if(l.delete)s.push(l);else{const r=n.retain,i=l.retain;let a="object"==typeof i&&null!==i?i:t;if("object"==typeof r&&null!==r&&"object"==typeof i&&null!==i){const t=Object.keys(r)[0];if(t===Object.keys(i)[0]){const n=h.getHandler(t);n&&(a={[t]:n.transform(r[t],i[t],e)})}}s.retain(a,o.default.transform(n.attributes,l.attributes,e))}}else s.retain(l.default.length(r.next()));return s.chop()}transformPosition(t,e=!1){e=!!e;const n=new a.default(this.ops);let r=0;for(;n.hasNext()&&r<=t;){const i=n.peekLength(),s=n.peekType();n.next(),"delete"!==s?("insert"===s&&(r<t||!e)&&(t+=i),r+=i):t-=Math.min(i,t-r)}return t}}h.Op=l.default,h.OpIterator=a.default,h.AttributeMap=o.default,h.handlers={},e.default=h,t.exports=h,t.exports.default=h},4123:function(t,e){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.length=function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"object"==typeof t.retain&&null!==t.retain?1:"string"==typeof t.insert?t.insert.length:1}}(n||(n={})),e.default=n},7033:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(4123);e.default=class{constructor(t){this.ops=t,this.index=0,this.offset=0}hasNext(){return this.peekLength()<1/0}next(t){t||(t=1/0);const e=this.ops[this.index];if(e){const n=this.offset,i=r.default.length(e);if(t>=i-n?(t=i-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};{const r={};return e.attributes&&(r.attributes=e.attributes),"number"==typeof e.retain?r.retain=t:"object"==typeof e.retain&&null!==e.retain?r.retain=e.retain:"string"==typeof e.insert?r.insert=e.insert.substr(n,t):r.insert=e.insert,r}}return{retain:1/0}}peek(){return this.ops[this.index]}peekLength(){return this.ops[this.index]?r.default.length(this.ops[this.index])-this.offset:1/0}peekType(){const t=this.ops[this.index];return t?"number"==typeof t.delete?"delete":"number"==typeof t.retain||"object"==typeof t.retain&&null!==t.retain?"retain":"insert":"retain"}rest(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);{const t=this.offset,e=this.index,n=this.next(),r=this.ops.slice(this.index);return this.offset=t,this.index=e,[n].concat(r)}}return[]}}},8820:function(t,e,n){"use strict";n.d(e,{A:function(){return l}});var r=n(8138),i=function(t,e){for(var n=t.length;n--;)if((0,r.A)(t[n][0],e))return n;return-1},s=Array.prototype.splice;function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}o.prototype.clear=function(){this.__data__=[],this.size=0},o.prototype.delete=function(t){var e=this.__data__,n=i(e,t);return!(n<0||(n==e.length-1?e.pop():s.call(e,n,1),--this.size,0))},o.prototype.get=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]},o.prototype.has=function(t){return i(this.__data__,t)>-1},o.prototype.set=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var l=o},2461:function(t,e,n){"use strict";var r=n(2281),i=n(5507),s=(0,r.A)(i.A,"Map");e.A=s},3558:function(t,e,n){"use strict";n.d(e,{A:function(){return f}});var r=(0,n(2281).A)(Object,"create"),i=Object.prototype.hasOwnProperty,s=Object.prototype.hasOwnProperty;function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}o.prototype.clear=function(){this.__data__=r?r(null):{},this.size=0},o.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},o.prototype.get=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(e,t)?e[t]:void 0},o.prototype.has=function(t){var e=this.__data__;return r?void 0!==e[t]:s.call(e,t)},o.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this};var l=o,a=n(8820),c=n(2461),u=function(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map};function h(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}h.prototype.clear=function(){this.size=0,this.__data__={hash:new l,map:new(c.A||a.A),string:new l}},h.prototype.delete=function(t){var e=u(this,t).delete(t);return this.size-=e?1:0,e},h.prototype.get=function(t){return u(this,t).get(t)},h.prototype.has=function(t){return u(this,t).has(t)},h.prototype.set=function(t,e){var n=u(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var f=h},2673:function(t,e,n){"use strict";n.d(e,{A:function(){return l}});var r=n(8820),i=n(2461),s=n(3558);function o(t){var e=this.__data__=new r.A(t);this.size=e.size}o.prototype.clear=function(){this.__data__=new r.A,this.size=0},o.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},o.prototype.get=function(t){return this.__data__.get(t)},o.prototype.has=function(t){return this.__data__.has(t)},o.prototype.set=function(t,e){var n=this.__data__;if(n instanceof r.A){var o=n.__data__;if(!i.A||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new s.A(o)}return n.set(t,e),this.size=n.size,this};var l=o},439:function(t,e,n){"use strict";var r=n(5507).A.Symbol;e.A=r},7218:function(t,e,n){"use strict";var r=n(5507).A.Uint8Array;e.A=r},6753:function(t,e,n){"use strict";n.d(e,{A:function(){return c}});var r=n(8412),i=n(723),s=n(776),o=n(3767),l=n(5755),a=Object.prototype.hasOwnProperty,c=function(t,e){var n=(0,i.A)(t),c=!n&&(0,r.A)(t),u=!n&&!c&&(0,s.A)(t),h=!n&&!c&&!u&&(0,l.A)(t),f=n||c||u||h,d=f?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],p=d.length;for(var g in t)!e&&!a.call(t,g)||f&&("length"==g||u&&("offset"==g||"parent"==g)||h&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||(0,o.A)(g,p))||d.push(g);return d}},802:function(t,e){"use strict";e.A=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},6437:function(t,e,n){"use strict";var r=n(6770),i=n(8138),s=Object.prototype.hasOwnProperty;e.A=function(t,e,n){var o=t[e];s.call(t,e)&&(0,i.A)(o,n)&&(void 0!==n||e in t)||(0,r.A)(t,e,n)}},6770:function(t,e,n){"use strict";var r=n(7889);e.A=function(t,e,n){"__proto__"==e&&r.A?(0,r.A)(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},1381:function(t,e,n){"use strict";var r=n(802),i=n(723);e.A=function(t,e,n){var s=e(t);return(0,i.A)(t)?s:(0,r.A)(s,n(t))}},2159:function(t,e,n){"use strict";n.d(e,{A:function(){return u}});var r=n(439),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,l=r.A?r.A.toStringTag:void 0,a=Object.prototype.toString,c=r.A?r.A.toStringTag:void 0,u=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?function(t){var e=s.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var i=o.call(t);return r&&(e?t[l]=n:delete t[l]),i}(t):function(t){return a.call(t)}(t)}},5771:function(t,e){"use strict";e.A=function(t){return function(e){return t(e)}}},2899:function(t,e,n){"use strict";var r=n(7218);e.A=function(t){var e=new t.constructor(t.byteLength);return new r.A(e).set(new r.A(t)),e}},3812:function(t,e,n){"use strict";var r=n(5507),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=i&&"object"==typeof module&&module&&!module.nodeType&&module,o=s&&s.exports===i?r.A.Buffer:void 0,l=o?o.allocUnsafe:void 0;e.A=function(t,e){if(e)return t.slice();var n=t.length,r=l?l(n):new t.constructor(n);return t.copy(r),r}},1827:function(t,e,n){"use strict";var r=n(2899);e.A=function(t,e){var n=e?(0,r.A)(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},4405:function(t,e){"use strict";e.A=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},9601:function(t,e,n){"use strict";var r=n(6437),i=n(6770);e.A=function(t,e,n,s){var o=!n;n||(n={});for(var l=-1,a=e.length;++l<a;){var c=e[l],u=s?s(n[c],t[c],c,n,t):void 0;void 0===u&&(u=t[c]),o?(0,i.A)(n,c,u):(0,r.A)(n,c,u)}return n}},7889:function(t,e,n){"use strict";var r=n(2281),i=function(){try{var t=(0,r.A)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();e.A=i},9646:function(t,e){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;e.A=n},2816:function(t,e,n){"use strict";var r=n(1381),i=n(9844),s=n(3169);e.A=function(t){return(0,r.A)(t,s.A,i.A)}},2281:function(t,e,n){"use strict";n.d(e,{A:function(){return m}});var r,i=n(7572),s=n(5507).A["__core-js_shared__"],o=(r=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",l=n(659),a=n(1543),c=/^\[object .+?Constructor\]$/,u=Function.prototype,h=Object.prototype,f=u.toString,d=h.hasOwnProperty,p=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=function(t){return!(!(0,l.A)(t)||(e=t,o&&o in e))&&((0,i.A)(t)?p:c).test((0,a.A)(t));var e},m=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return g(n)?n:void 0}},8769:function(t,e,n){"use strict";var r=(0,n(2217).A)(Object.getPrototypeOf,Object);e.A=r},9844:function(t,e,n){"use strict";n.d(e,{A:function(){return o}});var r=n(6935),i=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,o=s?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}(s(t),(function(e){return i.call(t,e)})))}:r.A},7995:function(t,e,n){"use strict";n.d(e,{A:function(){return _}});var r=n(2281),i=n(5507),s=(0,r.A)(i.A,"DataView"),o=n(2461),l=(0,r.A)(i.A,"Promise"),a=(0,r.A)(i.A,"Set"),c=(0,r.A)(i.A,"WeakMap"),u=n(2159),h=n(1543),f="[object Map]",d="[object Promise]",p="[object Set]",g="[object WeakMap]",m="[object DataView]",b=(0,h.A)(s),y=(0,h.A)(o.A),v=(0,h.A)(l),A=(0,h.A)(a),N=(0,h.A)(c),E=u.A;(s&&E(new s(new ArrayBuffer(1)))!=m||o.A&&E(new o.A)!=f||l&&E(l.resolve())!=d||a&&E(new a)!=p||c&&E(new c)!=g)&&(E=function(t){var e=(0,u.A)(t),n="[object Object]"==e?t.constructor:void 0,r=n?(0,h.A)(n):"";if(r)switch(r){case b:return m;case y:return f;case v:return d;case A:return p;case N:return g}return e});var _=E},1683:function(t,e,n){"use strict";n.d(e,{A:function(){return a}});var r=n(659),i=Object.create,s=function(){function t(){}return function(e){if(!(0,r.A)(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),o=n(8769),l=n(501),a=function(t){return"function"!=typeof t.constructor||(0,l.A)(t)?{}:s((0,o.A)(t))}},3767:function(t,e){"use strict";var n=/^(?:0|[1-9]\d*)$/;e.A=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},501:function(t,e){"use strict";var n=Object.prototype;e.A=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},8795:function(t,e,n){"use strict";var r=n(9646),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=i&&"object"==typeof module&&module&&!module.nodeType&&module,o=s&&s.exports===i&&r.A.process,l=function(){try{return s&&s.require&&s.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();e.A=l},2217:function(t,e){"use strict";e.A=function(t,e){return function(n){return t(e(n))}}},5507:function(t,e,n){"use strict";var r=n(9646),i="object"==typeof self&&self&&self.Object===Object&&self,s=r.A||i||Function("return this")();e.A=s},1543:function(t,e){"use strict";var n=Function.prototype.toString;e.A=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},3707:function(t,e,n){"use strict";n.d(e,{A:function(){return $}});var r=n(2673),i=n(6437),s=n(9601),o=n(3169),l=n(2624),a=n(3812),c=n(4405),u=n(9844),h=n(802),f=n(8769),d=n(6935),p=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)(0,h.A)(e,(0,u.A)(t)),t=(0,f.A)(t);return e}:d.A,g=n(2816),m=n(1381),b=function(t){return(0,m.A)(t,l.A,p)},y=n(7995),v=Object.prototype.hasOwnProperty,A=n(2899),N=/\w*$/,E=n(439),_=E.A?E.A.prototype:void 0,x=_?_.valueOf:void 0,w=n(1827),O=function(t,e,n){var r,i,s,o=t.constructor;switch(e){case"[object ArrayBuffer]":return(0,A.A)(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var n=e?(0,A.A)(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,w.A)(t,n);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return(s=new(i=t).constructor(i.source,N.exec(i))).lastIndex=i.lastIndex,s;case"[object Symbol]":return r=t,x?Object(x.call(r)):{}}},j=n(1683),S=n(723),L=n(776),T=n(7948),k=n(5771),C=n(8795),R=C.A&&C.A.isMap,B=R?(0,k.A)(R):function(t){return(0,T.A)(t)&&"[object Map]"==(0,y.A)(t)},q=n(659),I=C.A&&C.A.isSet,M=I?(0,k.A)(I):function(t){return(0,T.A)(t)&&"[object Set]"==(0,y.A)(t)},D="[object Arguments]",U="[object Function]",P="[object Object]",z={};z[D]=z["[object Array]"]=z["[object ArrayBuffer]"]=z["[object DataView]"]=z["[object Boolean]"]=z["[object Date]"]=z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Map]"]=z["[object Number]"]=z[P]=z["[object RegExp]"]=z["[object Set]"]=z["[object String]"]=z["[object Symbol]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z["[object Error]"]=z[U]=z["[object WeakMap]"]=!1;var F=function t(e,n,h,f,d,m){var A,N=1&n,E=2&n,_=4&n;if(h&&(A=d?h(e,f,d,m):h(e)),void 0!==A)return A;if(!(0,q.A)(e))return e;var x=(0,S.A)(e);if(x){if(A=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&v.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(e),!N)return(0,c.A)(e,A)}else{var w=(0,y.A)(e),T=w==U||"[object GeneratorFunction]"==w;if((0,L.A)(e))return(0,a.A)(e,N);if(w==P||w==D||T&&!d){if(A=E||T?{}:(0,j.A)(e),!N)return E?function(t,e){return(0,s.A)(t,p(t),e)}(e,function(t,e){return t&&(0,s.A)(e,(0,l.A)(e),t)}(A,e)):function(t,e){return(0,s.A)(t,(0,u.A)(t),e)}(e,function(t,e){return t&&(0,s.A)(e,(0,o.A)(e),t)}(A,e))}else{if(!z[w])return d?e:{};A=O(e,w,N)}}m||(m=new r.A);var k=m.get(e);if(k)return k;m.set(e,A),M(e)?e.forEach((function(r){A.add(t(r,n,h,r,e,m))})):B(e)&&e.forEach((function(r,i){A.set(i,t(r,n,h,i,e,m))}));var C=_?E?b:g.A:E?l.A:o.A,R=x?void 0:C(e);return function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););}(R||e,(function(r,s){R&&(r=e[s=r]),(0,i.A)(A,s,t(r,n,h,s,e,m))})),A},$=function(t){return F(t,5)}},8138:function(t,e){"use strict";e.A=function(t,e){return t===e||t!=t&&e!=e}},8412:function(t,e,n){"use strict";n.d(e,{A:function(){return u}});var r=n(2159),i=n(7948),s=function(t){return(0,i.A)(t)&&"[object Arguments]"==(0,r.A)(t)},o=Object.prototype,l=o.hasOwnProperty,a=o.propertyIsEnumerable,c=s(function(){return arguments}())?s:function(t){return(0,i.A)(t)&&l.call(t,"callee")&&!a.call(t,"callee")},u=c},723:function(t,e){"use strict";var n=Array.isArray;e.A=n},3628:function(t,e,n){"use strict";var r=n(7572),i=n(1628);e.A=function(t){return null!=t&&(0,i.A)(t.length)&&!(0,r.A)(t)}},776:function(t,e,n){"use strict";n.d(e,{A:function(){return l}});var r=n(5507),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=i&&"object"==typeof module&&module&&!module.nodeType&&module,o=s&&s.exports===i?r.A.Buffer:void 0,l=(o?o.isBuffer:void 0)||function(){return!1}},5123:function(t,e,n){"use strict";n.d(e,{A:function(){return L}});var r=n(2673),i=n(3558);function s(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new i.A;++e<n;)this.add(t[e])}s.prototype.add=s.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},s.prototype.has=function(t){return this.__data__.has(t)};var o=s,l=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},a=function(t,e,n,r,i,s){var a=1&n,c=t.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var h=s.get(t),f=s.get(e);if(h&&f)return h==e&&f==t;var d=-1,p=!0,g=2&n?new o:void 0;for(s.set(t,e),s.set(e,t);++d<c;){var m=t[d],b=e[d];if(r)var y=a?r(b,m,d,e,t,s):r(m,b,d,t,e,s);if(void 0!==y){if(y)continue;p=!1;break}if(g){if(!l(e,(function(t,e){if(o=e,!g.has(o)&&(m===t||i(m,t,n,r,s)))return g.push(e);var o}))){p=!1;break}}else if(m!==b&&!i(m,b,n,r,s)){p=!1;break}}return s.delete(t),s.delete(e),p},c=n(439),u=n(7218),h=n(8138),f=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},d=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},p=c.A?c.A.prototype:void 0,g=p?p.valueOf:void 0,m=n(2816),b=Object.prototype.hasOwnProperty,y=n(7995),v=n(723),A=n(776),N=n(5755),E="[object Arguments]",_="[object Array]",x="[object Object]",w=Object.prototype.hasOwnProperty,O=function(t,e,n,i,s,o){var l=(0,v.A)(t),c=(0,v.A)(e),p=l?_:(0,y.A)(t),O=c?_:(0,y.A)(e),j=(p=p==E?x:p)==x,S=(O=O==E?x:O)==x,L=p==O;if(L&&(0,A.A)(t)){if(!(0,A.A)(e))return!1;l=!0,j=!1}if(L&&!j)return o||(o=new r.A),l||(0,N.A)(t)?a(t,e,n,i,s,o):function(t,e,n,r,i,s,o){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!s(new u.A(t),new u.A(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,h.A)(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var l=f;case"[object Set]":var c=1&r;if(l||(l=d),t.size!=e.size&&!c)return!1;var p=o.get(t);if(p)return p==e;r|=2,o.set(t,e);var m=a(l(t),l(e),r,i,s,o);return o.delete(t),m;case"[object Symbol]":if(g)return g.call(t)==g.call(e)}return!1}(t,e,p,n,i,s,o);if(!(1&n)){var T=j&&w.call(t,"__wrapped__"),k=S&&w.call(e,"__wrapped__");if(T||k){var C=T?t.value():t,R=k?e.value():e;return o||(o=new r.A),s(C,R,n,i,o)}}return!!L&&(o||(o=new r.A),function(t,e,n,r,i,s){var o=1&n,l=(0,m.A)(t),a=l.length;if(a!=(0,m.A)(e).length&&!o)return!1;for(var c=a;c--;){var u=l[c];if(!(o?u in e:b.call(e,u)))return!1}var h=s.get(t),f=s.get(e);if(h&&f)return h==e&&f==t;var d=!0;s.set(t,e),s.set(e,t);for(var p=o;++c<a;){var g=t[u=l[c]],y=e[u];if(r)var v=o?r(y,g,u,e,t,s):r(g,y,u,t,e,s);if(!(void 0===v?g===y||i(g,y,n,r,s):v)){d=!1;break}p||(p="constructor"==u)}if(d&&!p){var A=t.constructor,N=e.constructor;A==N||!("constructor"in t)||!("constructor"in e)||"function"==typeof A&&A instanceof A&&"function"==typeof N&&N instanceof N||(d=!1)}return s.delete(t),s.delete(e),d}(t,e,n,i,s,o))},j=n(7948),S=function t(e,n,r,i,s){return e===n||(null==e||null==n||!(0,j.A)(e)&&!(0,j.A)(n)?e!=e&&n!=n:O(e,n,r,i,t,s))},L=function(t,e){return S(t,e)}},7572:function(t,e,n){"use strict";var r=n(2159),i=n(659);e.A=function(t){if(!(0,i.A)(t))return!1;var e=(0,r.A)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1628:function(t,e){"use strict";e.A=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},659:function(t,e){"use strict";e.A=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7948:function(t,e){"use strict";e.A=function(t){return null!=t&&"object"==typeof t}},5755:function(t,e,n){"use strict";n.d(e,{A:function(){return u}});var r=n(2159),i=n(1628),s=n(7948),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1;var l=n(5771),a=n(8795),c=a.A&&a.A.isTypedArray,u=c?(0,l.A)(c):function(t){return(0,s.A)(t)&&(0,i.A)(t.length)&&!!o[(0,r.A)(t)]}},3169:function(t,e,n){"use strict";n.d(e,{A:function(){return a}});var r=n(6753),i=n(501),s=(0,n(2217).A)(Object.keys,Object),o=Object.prototype.hasOwnProperty,l=n(3628),a=function(t){return(0,l.A)(t)?(0,r.A)(t):function(t){if(!(0,i.A)(t))return s(t);var e=[];for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}},2624:function(t,e,n){"use strict";n.d(e,{A:function(){return c}});var r=n(6753),i=n(659),s=n(501),o=Object.prototype.hasOwnProperty,l=function(t){if(!(0,i.A)(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=(0,s.A)(t),n=[];for(var r in t)("constructor"!=r||!e&&o.call(t,r))&&n.push(r);return n},a=n(3628),c=function(t){return(0,a.A)(t)?(0,r.A)(t,!0):l(t)}},8347:function(t,e,n){"use strict";n.d(e,{A:function(){return K}});var r,i,s,o,l=n(2673),a=n(6770),c=n(8138),u=function(t,e,n){(void 0!==n&&!(0,c.A)(t[e],n)||void 0===n&&!(e in t))&&(0,a.A)(t,e,n)},h=function(t,e,n){for(var r=-1,i=Object(t),s=n(t),o=s.length;o--;){var l=s[++r];if(!1===e(i[l],l,i))break}return t},f=n(3812),d=n(1827),p=n(4405),g=n(1683),m=n(8412),b=n(723),y=n(3628),v=n(7948),A=n(776),N=n(7572),E=n(659),_=n(2159),x=n(8769),w=Function.prototype,O=Object.prototype,j=w.toString,S=O.hasOwnProperty,L=j.call(Object),T=n(5755),k=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]},C=n(9601),R=n(2624),B=function(t,e,n,r,i,s,o){var l,a=k(t,n),c=k(e,n),h=o.get(c);if(h)u(t,n,h);else{var w=s?s(a,c,n+"",t,e,o):void 0,O=void 0===w;if(O){var B=(0,b.A)(c),q=!B&&(0,A.A)(c),I=!B&&!q&&(0,T.A)(c);w=c,B||q||I?(0,b.A)(a)?w=a:(l=a,(0,v.A)(l)&&(0,y.A)(l)?w=(0,p.A)(a):q?(O=!1,w=(0,f.A)(c,!0)):I?(O=!1,w=(0,d.A)(c,!0)):w=[]):function(t){if(!(0,v.A)(t)||"[object Object]"!=(0,_.A)(t))return!1;var e=(0,x.A)(t);if(null===e)return!0;var n=S.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&j.call(n)==L}(c)||(0,m.A)(c)?(w=a,(0,m.A)(a)?w=function(t){return(0,C.A)(t,(0,R.A)(t))}(a):(0,E.A)(a)&&!(0,N.A)(a)||(w=(0,g.A)(c))):O=!1}O&&(o.set(c,w),i(w,c,r,s,o),o.delete(c)),u(t,n,w)}},q=function t(e,n,r,i,s){e!==n&&h(n,(function(o,a){if(s||(s=new l.A),(0,E.A)(o))B(e,n,a,r,t,i,s);else{var c=i?i(k(e,a),o,a+"",e,n,s):void 0;void 0===c&&(c=o),u(e,a,c)}}),R.A)},I=function(t){return t},M=Math.max,D=n(7889),U=D.A?function(t,e){return(0,D.A)(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:I,P=Date.now,z=(r=U,i=0,s=0,function(){var t=P(),e=16-(t-s);if(s=t,e>0){if(++i>=800)return arguments[0]}else i=0;return r.apply(void 0,arguments)}),F=function(t,e){return z(function(t,e,n){return e=M(void 0===e?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=M(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var l=Array(e+1);++i<e;)l[i]=r[i];return l[e]=n(o),function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,l)}}(t,e,I),t+"")},$=n(3767),K=(o=function(t,e,n){q(t,e,n)},F((function(t,e){var n=-1,r=e.length,i=r>1?e[r-1]:void 0,s=r>2?e[2]:void 0;for(i=o.length>3&&"function"==typeof i?(r--,i):void 0,s&&function(t,e,n){if(!(0,E.A)(n))return!1;var r=typeof e;return!!("number"==r?(0,y.A)(n)&&(0,$.A)(e,n.length):"string"==r&&e in n)&&(0,c.A)(n[e],t)}(e[0],e[1],s)&&(i=r<3?void 0:i,r=1),t=Object(t);++n<r;){var l=e[n];l&&o(t,l,n)}return t})))},6935:function(t,e){"use strict";e.A=function(){return[]}},6003:function(t,e,n){"use strict";n.r(e),n.d(e,{Attributor:function(){return i},AttributorStore:function(){return f},BlockBlot:function(){return x},ClassAttributor:function(){return c},ContainerBlot:function(){return O},EmbedBlot:function(){return j},InlineBlot:function(){return E},LeafBlot:function(){return m},ParentBlot:function(){return A},Registry:function(){return l},Scope:function(){return r},ScrollBlot:function(){return T},StyleAttributor:function(){return h},TextBlot:function(){return C}});var r=(t=>(t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY",t))(r||{});class i{constructor(t,e,n={}){this.attrName=t,this.keyName=e;const i=r.TYPE&r.ATTRIBUTE;this.scope=null!=n.scope?n.scope&r.LEVEL|i:r.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}static keys(t){return Array.from(t.attributes).map((t=>t.name))}add(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)}canAdd(t,e){return null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1)}remove(t){t.removeAttribute(this.keyName)}value(t){const e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""}}class s extends Error{constructor(t){super(t="[Parchment] "+t),this.message=t,this.name=this.constructor.name}}const o=class t{constructor(){this.attributes={},this.classes={},this.tags={},this.types={}}static find(t,e=!1){if(null==t)return null;if(this.blots.has(t))return this.blots.get(t)||null;if(e){let n=null;try{n=t.parentNode}catch{return null}return this.find(n,e)}return null}create(e,n,r){const i=this.query(n);if(null==i)throw new s(`Unable to create ${n} blot`);const o=i,l=n instanceof Node||n.nodeType===Node.TEXT_NODE?n:o.create(r),a=new o(e,l,r);return t.blots.set(a.domNode,a),a}find(e,n=!1){return t.find(e,n)}query(t,e=r.ANY){let n;return"string"==typeof t?n=this.types[t]||this.attributes[t]:t instanceof Text||t.nodeType===Node.TEXT_NODE?n=this.types.text:"number"==typeof t?t&r.LEVEL&r.BLOCK?n=this.types.block:t&r.LEVEL&r.INLINE&&(n=this.types.inline):t instanceof Element&&((t.getAttribute("class")||"").split(/\s+/).some((t=>(n=this.classes[t],!!n))),n=n||this.tags[t.tagName]),null==n?null:"scope"in n&&e&r.LEVEL&n.scope&&e&r.TYPE&n.scope?n:null}register(...t){return t.map((t=>{const e="blotName"in t,n="attrName"in t;if(!e&&!n)throw new s("Invalid definition");if(e&&"abstract"===t.blotName)throw new s("Cannot register abstract class");const r=e?t.blotName:n?t.attrName:void 0;return this.types[r]=t,n?"string"==typeof t.keyName&&(this.attributes[t.keyName]=t):e&&(t.className&&(this.classes[t.className]=t),t.tagName&&(Array.isArray(t.tagName)?t.tagName=t.tagName.map((t=>t.toUpperCase())):t.tagName=t.tagName.toUpperCase(),(Array.isArray(t.tagName)?t.tagName:[t.tagName]).forEach((e=>{(null==this.tags[e]||null==t.className)&&(this.tags[e]=t)})))),t}))}};o.blots=new WeakMap;let l=o;function a(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter((t=>0===t.indexOf(`${e}-`)))}const c=class extends i{static keys(t){return(t.getAttribute("class")||"").split(/\s+/).map((t=>t.split("-").slice(0,-1).join("-")))}add(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(`${this.keyName}-${e}`),!0)}remove(t){a(t,this.keyName).forEach((e=>{t.classList.remove(e)})),0===t.classList.length&&t.removeAttribute("class")}value(t){const e=(a(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""}};function u(t){const e=t.split("-"),n=e.slice(1).map((t=>t[0].toUpperCase()+t.slice(1))).join("");return e[0]+n}const h=class extends i{static keys(t){return(t.getAttribute("style")||"").split(";").map((t=>t.split(":")[0].trim()))}add(t,e){return!!this.canAdd(t,e)&&(t.style[u(this.keyName)]=e,!0)}remove(t){t.style[u(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")}value(t){const e=t.style[u(this.keyName)];return this.canAdd(t,e)?e:""}},f=class{constructor(t){this.attributes={},this.domNode=t,this.build()}attribute(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])}build(){this.attributes={};const t=l.find(this.domNode);if(null==t)return;const e=i.keys(this.domNode),n=c.keys(this.domNode),s=h.keys(this.domNode);e.concat(n).concat(s).forEach((e=>{const n=t.scroll.query(e,r.ATTRIBUTE);n instanceof i&&(this.attributes[n.attrName]=n)}))}copy(t){Object.keys(this.attributes).forEach((e=>{const n=this.attributes[e].value(this.domNode);t.format(e,n)}))}move(t){this.copy(t),Object.keys(this.attributes).forEach((t=>{this.attributes[t].remove(this.domNode)})),this.attributes={}}values(){return Object.keys(this.attributes).reduce(((t,e)=>(t[e]=this.attributes[e].value(this.domNode),t)),{})}},d=class{constructor(t,e){this.scroll=t,this.domNode=e,l.blots.set(e,this),this.prev=null,this.next=null}static create(t){if(null==this.tagName)throw new s("Blot definition missing tagName");let e,n;return Array.isArray(this.tagName)?("string"==typeof t?(n=t.toUpperCase(),parseInt(n,10).toString()===n&&(n=parseInt(n,10))):"number"==typeof t&&(n=t),e="number"==typeof n?document.createElement(this.tagName[n-1]):n&&this.tagName.indexOf(n)>-1?document.createElement(n):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e}get statics(){return this.constructor}attach(){}clone(){const t=this.domNode.cloneNode(!1);return this.scroll.create(t)}detach(){null!=this.parent&&this.parent.removeChild(this),l.blots.delete(this.domNode)}deleteAt(t,e){this.isolate(t,e).remove()}formatAt(t,e,n,i){const s=this.isolate(t,e);if(null!=this.scroll.query(n,r.BLOT)&&i)s.wrap(n,i);else if(null!=this.scroll.query(n,r.ATTRIBUTE)){const t=this.scroll.create(this.statics.scope);s.wrap(t),t.format(n,i)}}insertAt(t,e,n){const r=null==n?this.scroll.create("text",e):this.scroll.create(e,n),i=this.split(t);this.parent.insertBefore(r,i||void 0)}isolate(t,e){const n=this.split(t);if(null==n)throw new Error("Attempt to isolate at end");return n.split(e),n}length(){return 1}offset(t=this.parent){return null==this.parent||this===t?0:this.parent.children.offset(this)+this.parent.offset(t)}optimize(t){this.statics.requiredContainer&&!(this.parent instanceof this.statics.requiredContainer)&&this.wrap(this.statics.requiredContainer.blotName)}remove(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}replaceWith(t,e){const n="string"==typeof t?this.scroll.create(t,e):t;return null!=this.parent&&(this.parent.insertBefore(n,this.next||void 0),this.remove()),n}split(t,e){return 0===t?this:this.next}update(t,e){}wrap(t,e){const n="string"==typeof t?this.scroll.create(t,e):t;if(null!=this.parent&&this.parent.insertBefore(n,this.next||void 0),"function"!=typeof n.appendChild)throw new s(`Cannot wrap ${t}`);return n.appendChild(this),n}};d.blotName="abstract";let p=d;const g=class extends p{static value(t){return!0}index(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1}position(t,e){let n=Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]}value(){return{[this.statics.blotName]:this.statics.value(this.domNode)||!0}}};g.scope=r.INLINE_BLOT;const m=g;class b{constructor(){this.head=null,this.tail=null,this.length=0}append(...t){if(this.insertBefore(t[0],null),t.length>1){const e=t.slice(1);this.append(...e)}}at(t){const e=this.iterator();let n=e();for(;n&&t>0;)t-=1,n=e();return n}contains(t){const e=this.iterator();let n=e();for(;n;){if(n===t)return!0;n=e()}return!1}indexOf(t){const e=this.iterator();let n=e(),r=0;for(;n;){if(n===t)return r;r+=1,n=e()}return-1}insertBefore(t,e){null!=t&&(this.remove(t),t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)}offset(t){let e=0,n=this.head;for(;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1}remove(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)}iterator(t=this.head){return()=>{const e=t;return null!=t&&(t=t.next),e}}find(t,e=!1){const n=this.iterator();let r=n();for(;r;){const i=r.length();if(t<i||e&&t===i&&(null==r.next||0!==r.next.length()))return[r,t];t-=i,r=n()}return[null,0]}forEach(t){const e=this.iterator();let n=e();for(;n;)t(n),n=e()}forEachAt(t,e,n){if(e<=0)return;const[r,i]=this.find(t);let s=t-i;const o=this.iterator(r);let l=o();for(;l&&s<t+e;){const r=l.length();t>s?n(l,t-s,Math.min(e,s+r-t)):n(l,0,Math.min(r,t+e-s)),s+=r,l=o()}}map(t){return this.reduce(((e,n)=>(e.push(t(n)),e)),[])}reduce(t,e){const n=this.iterator();let r=n();for(;r;)e=t(e,r),r=n();return e}}function y(t,e){const n=e.find(t);if(n)return n;try{return e.create(t)}catch{const n=e.create(r.INLINE);return Array.from(t.childNodes).forEach((t=>{n.domNode.appendChild(t)})),t.parentNode&&t.parentNode.replaceChild(n.domNode,t),n.attach(),n}}const v=class t extends p{constructor(t,e){super(t,e),this.uiNode=null,this.build()}appendChild(t){this.insertBefore(t)}attach(){super.attach(),this.children.forEach((t=>{t.attach()}))}attachUI(e){null!=this.uiNode&&this.uiNode.remove(),this.uiNode=e,t.uiClass&&this.uiNode.classList.add(t.uiClass),this.uiNode.setAttribute("contenteditable","false"),this.domNode.insertBefore(this.uiNode,this.domNode.firstChild)}build(){this.children=new b,Array.from(this.domNode.childNodes).filter((t=>t!==this.uiNode)).reverse().forEach((t=>{try{const e=y(t,this.scroll);this.insertBefore(e,this.children.head||void 0)}catch(t){if(t instanceof s)return;throw t}}))}deleteAt(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,((t,e,n)=>{t.deleteAt(e,n)}))}descendant(e,n=0){const[r,i]=this.children.find(n);return null==e.blotName&&e(r)||null!=e.blotName&&r instanceof e?[r,i]:r instanceof t?r.descendant(e,i):[null,-1]}descendants(e,n=0,r=Number.MAX_VALUE){let i=[],s=r;return this.children.forEachAt(n,r,((n,r,o)=>{(null==e.blotName&&e(n)||null!=e.blotName&&n instanceof e)&&i.push(n),n instanceof t&&(i=i.concat(n.descendants(e,r,s))),s-=o})),i}detach(){this.children.forEach((t=>{t.detach()})),super.detach()}enforceAllowedChildren(){let e=!1;this.children.forEach((n=>{e||this.statics.allowedChildren.some((t=>n instanceof t))||(n.statics.scope===r.BLOCK_BLOT?(null!=n.next&&this.splitAfter(n),null!=n.prev&&this.splitAfter(n.prev),n.parent.unwrap(),e=!0):n instanceof t?n.unwrap():n.remove())}))}formatAt(t,e,n,r){this.children.forEachAt(t,e,((t,e,i)=>{t.formatAt(e,i,n,r)}))}insertAt(t,e,n){const[r,i]=this.children.find(t);if(r)r.insertAt(i,e,n);else{const t=null==n?this.scroll.create("text",e):this.scroll.create(e,n);this.appendChild(t)}}insertBefore(t,e){null!=t.parent&&t.parent.children.remove(t);let n=null;this.children.insertBefore(t,e||null),t.parent=this,null!=e&&(n=e.domNode),(this.domNode.parentNode!==t.domNode||this.domNode.nextSibling!==n)&&this.domNode.insertBefore(t.domNode,n),t.attach()}length(){return this.children.reduce(((t,e)=>t+e.length()),0)}moveChildren(t,e){this.children.forEach((n=>{t.insertBefore(n,e)}))}optimize(t){if(super.optimize(t),this.enforceAllowedChildren(),null!=this.uiNode&&this.uiNode!==this.domNode.firstChild&&this.domNode.insertBefore(this.uiNode,this.domNode.firstChild),0===this.children.length)if(null!=this.statics.defaultChild){const t=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(t)}else this.remove()}path(e,n=!1){const[r,i]=this.children.find(e,n),s=[[this,e]];return r instanceof t?s.concat(r.path(i,n)):(null!=r&&s.push([r,i]),s)}removeChild(t){this.children.remove(t)}replaceWith(e,n){const r="string"==typeof e?this.scroll.create(e,n):e;return r instanceof t&&this.moveChildren(r),super.replaceWith(r)}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}const n=this.clone();return this.parent&&this.parent.insertBefore(n,this.next||void 0),this.children.forEachAt(t,this.length(),((t,r,i)=>{const s=t.split(r,e);null!=s&&n.appendChild(s)})),n}splitAfter(t){const e=this.clone();for(;null!=t.next;)e.appendChild(t.next);return this.parent&&this.parent.insertBefore(e,this.next||void 0),e}unwrap(){this.parent&&this.moveChildren(this.parent,this.next||void 0),this.remove()}update(t,e){const n=[],r=[];t.forEach((t=>{t.target===this.domNode&&"childList"===t.type&&(n.push(...t.addedNodes),r.push(...t.removedNodes))})),r.forEach((t=>{if(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)return;const e=this.scroll.find(t);null!=e&&(null==e.domNode.parentNode||e.domNode.parentNode===this.domNode)&&e.detach()})),n.filter((t=>t.parentNode===this.domNode&&t!==this.uiNode)).sort(((t,e)=>t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1)).forEach((t=>{let e=null;null!=t.nextSibling&&(e=this.scroll.find(t.nextSibling));const n=y(t,this.scroll);(n.next!==e||null==n.next)&&(null!=n.parent&&n.parent.removeChild(this),this.insertBefore(n,e||void 0))})),this.enforceAllowedChildren()}};v.uiClass="";const A=v,N=class t extends A{static create(t){return super.create(t)}static formats(e,n){const r=n.query(t.blotName);if(null==r||e.tagName!==r.tagName){if("string"==typeof this.tagName)return!0;if(Array.isArray(this.tagName))return e.tagName.toLowerCase()}}constructor(t,e){super(t,e),this.attributes=new f(this.domNode)}format(e,n){if(e!==this.statics.blotName||n){const t=this.scroll.query(e,r.INLINE);if(null==t)return;t instanceof i?this.attributes.attribute(t,n):n&&(e!==this.statics.blotName||this.formats()[e]!==n)&&this.replaceWith(e,n)}else this.children.forEach((e=>{e instanceof t||(e=e.wrap(t.blotName,!0)),this.attributes.copy(e)})),this.unwrap()}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return null!=e&&(t[this.statics.blotName]=e),t}formatAt(t,e,n,i){null!=this.formats()[n]||this.scroll.query(n,r.ATTRIBUTE)?this.isolate(t,e).format(n,i):super.formatAt(t,e,n,i)}optimize(e){super.optimize(e);const n=this.formats();if(0===Object.keys(n).length)return this.unwrap();const r=this.next;r instanceof t&&r.prev===this&&function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}(n,r.formats())&&(r.moveChildren(this),r.remove())}replaceWith(t,e){const n=super.replaceWith(t,e);return this.attributes.copy(n),n}update(t,e){super.update(t,e),t.some((t=>t.target===this.domNode&&"attributes"===t.type))&&this.attributes.build()}wrap(e,n){const r=super.wrap(e,n);return r instanceof t&&this.attributes.move(r),r}};N.allowedChildren=[N,m],N.blotName="inline",N.scope=r.INLINE_BLOT,N.tagName="SPAN";const E=N,_=class t extends A{static create(t){return super.create(t)}static formats(e,n){const r=n.query(t.blotName);if(null==r||e.tagName!==r.tagName){if("string"==typeof this.tagName)return!0;if(Array.isArray(this.tagName))return e.tagName.toLowerCase()}}constructor(t,e){super(t,e),this.attributes=new f(this.domNode)}format(e,n){const s=this.scroll.query(e,r.BLOCK);null!=s&&(s instanceof i?this.attributes.attribute(s,n):e!==this.statics.blotName||n?n&&(e!==this.statics.blotName||this.formats()[e]!==n)&&this.replaceWith(e,n):this.replaceWith(t.blotName))}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return null!=e&&(t[this.statics.blotName]=e),t}formatAt(t,e,n,i){null!=this.scroll.query(n,r.BLOCK)?this.format(n,i):super.formatAt(t,e,n,i)}insertAt(t,e,n){if(null==n||null!=this.scroll.query(e,r.INLINE))super.insertAt(t,e,n);else{const r=this.split(t);if(null==r)throw new Error("Attempt to insertAt after block boundaries");{const t=this.scroll.create(e,n);r.parent.insertBefore(t,r)}}}replaceWith(t,e){const n=super.replaceWith(t,e);return this.attributes.copy(n),n}update(t,e){super.update(t,e),t.some((t=>t.target===this.domNode&&"attributes"===t.type))&&this.attributes.build()}};_.blotName="block",_.scope=r.BLOCK_BLOT,_.tagName="P",_.allowedChildren=[E,_,m];const x=_,w=class extends A{checkMerge(){return null!==this.next&&this.next.statics.blotName===this.statics.blotName}deleteAt(t,e){super.deleteAt(t,e),this.enforceAllowedChildren()}formatAt(t,e,n,r){super.formatAt(t,e,n,r),this.enforceAllowedChildren()}insertAt(t,e,n){super.insertAt(t,e,n),this.enforceAllowedChildren()}optimize(t){super.optimize(t),this.children.length>0&&null!=this.next&&this.checkMerge()&&(this.next.moveChildren(this),this.next.remove())}};w.blotName="container",w.scope=r.BLOCK_BLOT;const O=w,j=class extends m{static formats(t,e){}format(t,e){super.formatAt(0,this.length(),t,e)}formatAt(t,e,n,r){0===t&&e===this.length()?this.format(n,r):super.formatAt(t,e,n,r)}formats(){return this.statics.formats(this.domNode,this.scroll)}},S={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},L=class extends A{constructor(t,e){super(null,e),this.registry=t,this.scroll=this,this.build(),this.observer=new MutationObserver((t=>{this.update(t)})),this.observer.observe(this.domNode,S),this.attach()}create(t,e){return this.registry.create(this,t,e)}find(t,e=!1){const n=this.registry.find(t,e);return n?n.scroll===this?n:e?this.find(n.scroll.domNode.parentNode,!0):null:null}query(t,e=r.ANY){return this.registry.query(t,e)}register(...t){return this.registry.register(...t)}build(){null!=this.scroll&&super.build()}detach(){super.detach(),this.observer.disconnect()}deleteAt(t,e){this.update(),0===t&&e===this.length()?this.children.forEach((t=>{t.remove()})):super.deleteAt(t,e)}formatAt(t,e,n,r){this.update(),super.formatAt(t,e,n,r)}insertAt(t,e,n){this.update(),super.insertAt(t,e,n)}optimize(t=[],e={}){super.optimize(e);const n=e.mutationsMap||new WeakMap;let r=Array.from(this.observer.takeRecords());for(;r.length>0;)t.push(r.pop());const i=(t,e=!0)=>{null==t||t===this||null!=t.domNode.parentNode&&(n.has(t.domNode)||n.set(t.domNode,[]),e&&i(t.parent))},s=t=>{n.has(t.domNode)&&(t instanceof A&&t.children.forEach(s),n.delete(t.domNode),t.optimize(e))};let o=t;for(let e=0;o.length>0;e+=1){if(e>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(o.forEach((t=>{const e=this.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(i(this.find(t.previousSibling,!1)),Array.from(t.addedNodes).forEach((t=>{const e=this.find(t,!1);i(e,!1),e instanceof A&&e.children.forEach((t=>{i(t,!1)}))}))):"attributes"===t.type&&i(e.prev)),i(e))})),this.children.forEach(s),o=Array.from(this.observer.takeRecords()),r=o.slice();r.length>0;)t.push(r.pop())}}update(t,e={}){t=t||this.observer.takeRecords();const n=new WeakMap;t.map((t=>{const e=this.find(t.target,!0);return null==e?null:n.has(e.domNode)?(n.get(e.domNode).push(t),null):(n.set(e.domNode,[t]),e)})).forEach((t=>{null!=t&&t!==this&&n.has(t.domNode)&&t.update(n.get(t.domNode)||[],e)})),e.mutationsMap=n,n.has(this.domNode)&&super.update(n.get(this.domNode),e),this.optimize(t,e)}};L.blotName="scroll",L.defaultChild=x,L.allowedChildren=[x,O],L.scope=r.BLOCK_BLOT,L.tagName="DIV";const T=L,k=class t extends m{static create(t){return document.createTextNode(t)}static value(t){return t.data}constructor(t,e){super(t,e),this.text=this.statics.value(this.domNode)}deleteAt(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)}index(t,e){return this.domNode===t?e:-1}insertAt(t,e,n){null==n?(this.text=this.text.slice(0,t)+e+this.text.slice(t),this.domNode.data=this.text):super.insertAt(t,e,n)}length(){return this.text.length}optimize(e){super.optimize(e),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof t&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())}position(t,e=!1){return[this.domNode,t]}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}const n=this.scroll.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next||void 0),this.text=this.statics.value(this.domNode),n}update(t,e){t.some((t=>"characterData"===t.type&&t.target===this.domNode))&&(this.text=this.statics.value(this.domNode))}value(){return this.text}};k.blotName="text",k.scope=r.INLINE_BLOT;const C=k}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={id:r,loaded:!1,exports:{}};return t[r](s,s.exports,n),s.loaded=!0,s.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t};var r={};return function(){"use strict";n.d(r,{default:function(){return R}});var t=n(6142),e=n(9698),i=n(3036),s=n(580),o=n(4541),l=n(746),a=n(4850),c=n(6003),u=n(5232),h=n.n(u),f=n(5374);function d(t){return t instanceof e.Ay||t instanceof e.zo}function p(t){return"function"==typeof t.updateContent}class g extends c.ScrollBlot{static blotName="scroll";static className="ql-editor";static tagName="DIV";static defaultChild=e.Ay;static allowedChildren=[e.Ay,e.zo,s.A];constructor(t,e,n){let{emitter:r}=n;super(t,e),this.emitter=r,this.batch=!1,this.optimize(),this.enable(),this.domNode.addEventListener("dragstart",(t=>this.handleDragStart(t)))}batchStart(){Array.isArray(this.batch)||(this.batch=[])}batchEnd(){if(!this.batch)return;const t=this.batch;this.batch=!1,this.update(t)}emitMount(t){this.emitter.emit(f.A.events.SCROLL_BLOT_MOUNT,t)}emitUnmount(t){this.emitter.emit(f.A.events.SCROLL_BLOT_UNMOUNT,t)}emitEmbedUpdate(t,e){this.emitter.emit(f.A.events.SCROLL_EMBED_UPDATE,t,e)}deleteAt(t,n){const[r,s]=this.line(t),[o]=this.line(t+n);if(super.deleteAt(t,n),null!=o&&r!==o&&s>0){if(r instanceof e.zo||o instanceof e.zo)return void this.optimize();const t=o.children.head instanceof i.A?null:o.children.head;r.moveChildren(o,t),r.remove()}this.optimize()}enable(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t?"true":"false")}formatAt(t,e,n,r){super.formatAt(t,e,n,r),this.optimize()}insertAt(t,e,n){if(t>=this.length())if(null==n||null==this.scroll.query(e,c.Scope.BLOCK)){const t=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(t),null==n&&e.endsWith("\n")?t.insertAt(0,e.slice(0,-1),n):t.insertAt(0,e,n)}else{const t=this.scroll.create(e,n);this.appendChild(t)}else super.insertAt(t,e,n);this.optimize()}insertBefore(t,e){if(t.statics.scope===c.Scope.INLINE_BLOT){const n=this.scroll.create(this.statics.defaultChild.blotName);n.appendChild(t),super.insertBefore(n,e)}else super.insertBefore(t,e)}insertContents(t,n){const r=this.deltaToRenderBlocks(n.concat((new(h())).insert("\n"))),i=r.pop();if(null==i)return;this.batchStart();const s=r.shift();if(s){const n="block"===s.type&&(0===s.delta.length()||!this.descendant(e.zo,t)[0]&&t<this.length()),r="block"===s.type?s.delta:(new(h())).insert({[s.key]:s.value});m(this,t,r);const i="block"===s.type?1:0,o=t+r.length()+i;n&&this.insertAt(o-1,"\n");const l=(0,e.Ji)(this.line(t)[0]),a=u.AttributeMap.diff(l,s.attributes)||{};Object.keys(a).forEach((t=>{this.formatAt(o-1,1,t,a[t])})),t=o}let[o,l]=this.children.find(t);r.length&&(o&&(o=o.split(l),l=0),r.forEach((t=>{if("block"===t.type)m(this.createBlock(t.attributes,o||void 0),0,t.delta);else{const e=this.create(t.key,t.value);this.insertBefore(e,o||void 0),Object.keys(t.attributes).forEach((n=>{e.format(n,t.attributes[n])}))}}))),"block"===i.type&&i.delta.length()&&m(this,o?o.offset(o.scroll)+l:this.length(),i.delta),this.batchEnd(),this.optimize()}isEnabled(){return"true"===this.domNode.getAttribute("contenteditable")}leaf(t){const e=this.path(t).pop();if(!e)return[null,-1];const[n,r]=e;return n instanceof c.LeafBlot?[n,r]:[null,-1]}line(t){return t===this.length()?this.line(t-1):this.descendant(d,t)}lines(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;const n=(t,e,r)=>{let i=[],s=r;return t.children.forEachAt(e,r,((t,e,r)=>{d(t)?i.push(t):t instanceof c.ContainerBlot&&(i=i.concat(n(t,e,s))),s-=r})),i};return n(this,t,e)}optimize(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.batch||(super.optimize(t,e),t.length>0&&this.emitter.emit(f.A.events.SCROLL_OPTIMIZE,t,e))}path(t){return super.path(t).slice(1)}remove(){}update(t){if(this.batch)return void(Array.isArray(t)&&(this.batch=this.batch.concat(t)));let e=f.A.sources.USER;"string"==typeof t&&(e=t),Array.isArray(t)||(t=this.observer.takeRecords()),(t=t.filter((t=>{let{target:e}=t;const n=this.find(e,!0);return n&&!p(n)}))).length>0&&this.emitter.emit(f.A.events.SCROLL_BEFORE_UPDATE,e,t),super.update(t.concat([])),t.length>0&&this.emitter.emit(f.A.events.SCROLL_UPDATE,e,t)}updateEmbedAt(t,n,r){const[i]=this.descendant((t=>t instanceof e.zo),t);i&&i.statics.blotName===n&&p(i)&&i.updateContent(r)}handleDragStart(t){t.preventDefault()}deltaToRenderBlocks(t){const e=[];let n=new(h());return t.forEach((t=>{const r=t?.insert;if(r)if("string"==typeof r){const i=r.split("\n");i.slice(0,-1).forEach((r=>{n.insert(r,t.attributes),e.push({type:"block",delta:n,attributes:t.attributes??{}}),n=new(h())}));const s=i[i.length-1];s&&n.insert(s,t.attributes)}else{const i=Object.keys(r)[0];if(!i)return;this.query(i,c.Scope.INLINE)?n.push(t):(n.length()&&e.push({type:"block",delta:n,attributes:{}}),n=new(h()),e.push({type:"blockEmbed",key:i,value:r[i],attributes:t.attributes??{}}))}})),n.length()&&e.push({type:"block",delta:n,attributes:{}}),e}createBlock(t,e){let n;const r={};Object.entries(t).forEach((t=>{let[e,i]=t;null!=this.query(e,c.Scope.BLOCK&c.Scope.BLOT)?n=e:r[e]=i}));const i=this.create(n||this.statics.defaultChild.blotName,n?t[n]:void 0);this.insertBefore(i,e||void 0);const s=i.length();return Object.entries(r).forEach((t=>{let[e,n]=t;i.formatAt(0,s,e,n)})),i}}function m(t,n,r){r.reduce(((n,r)=>{const i=u.Op.length(r);let s=r.attributes||{};if(null!=r.insert)if("string"==typeof r.insert){const i=r.insert;t.insertAt(n,i);const[o]=t.descendant(c.LeafBlot,n),l=(0,e.Ji)(o);s=u.AttributeMap.diff(l,s)||{}}else if("object"==typeof r.insert){const i=Object.keys(r.insert)[0];if(null==i)return n;if(t.insertAt(n,i,r.insert[i]),null!=t.scroll.query(i,c.Scope.INLINE)){const[r]=t.descendant(c.LeafBlot,n),i=(0,e.Ji)(r);s=u.AttributeMap.diff(i,s)||{}}}return Object.keys(s).forEach((e=>{t.formatAt(n,i,e,s[e])})),n+i}),n)}var b=g,y=n(5508),v=n(584),A=n(4266);class N extends A.A{static DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};lastRecorded=0;ignoreChange=!1;stack={undo:[],redo:[]};currentRange=null;constructor(e,n){super(e,n),this.quill.on(t.Ay.events.EDITOR_CHANGE,((e,n,r,i)=>{e===t.Ay.events.SELECTION_CHANGE?n&&i!==t.Ay.sources.SILENT&&(this.currentRange=n):e===t.Ay.events.TEXT_CHANGE&&(this.ignoreChange||(this.options.userOnly&&i!==t.Ay.sources.USER?this.transform(n):this.record(n,r)),this.currentRange=_(this.currentRange,n))})),this.quill.keyboard.addBinding({key:"z",shortKey:!0},this.undo.bind(this)),this.quill.keyboard.addBinding({key:["z","Z"],shortKey:!0,shiftKey:!0},this.redo.bind(this)),/Win/i.test(navigator.platform)&&this.quill.keyboard.addBinding({key:"y",shortKey:!0},this.redo.bind(this)),this.quill.root.addEventListener("beforeinput",(t=>{"historyUndo"===t.inputType?(this.undo(),t.preventDefault()):"historyRedo"===t.inputType&&(this.redo(),t.preventDefault())}))}change(e,n){if(0===this.stack[e].length)return;const r=this.stack[e].pop();if(!r)return;const i=this.quill.getContents(),s=r.delta.invert(i);this.stack[n].push({delta:s,range:_(r.range,s)}),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(r.delta,t.Ay.sources.USER),this.ignoreChange=!1,this.restoreSelection(r)}clear(){this.stack={undo:[],redo:[]}}cutoff(){this.lastRecorded=0}record(t,e){if(0===t.ops.length)return;this.stack.redo=[];let n=t.invert(e),r=this.currentRange;const i=Date.now();if(this.lastRecorded+this.options.delay>i&&this.stack.undo.length>0){const t=this.stack.undo.pop();t&&(n=n.compose(t.delta),r=t.range)}else this.lastRecorded=i;0!==n.length()&&(this.stack.undo.push({delta:n,range:r}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift())}redo(){this.change("redo","undo")}transform(t){E(this.stack.undo,t),E(this.stack.redo,t)}undo(){this.change("undo","redo")}restoreSelection(e){if(e.range)this.quill.setSelection(e.range,t.Ay.sources.USER);else{const n=function(t,e){const n=e.reduce(((t,e)=>t+(e.delete||0)),0);let r=e.length()-n;return function(t,e){const n=e.ops[e.ops.length-1];return null!=n&&(null!=n.insert?"string"==typeof n.insert&&n.insert.endsWith("\n"):null!=n.attributes&&Object.keys(n.attributes).some((e=>null!=t.query(e,c.Scope.BLOCK))))}(t,e)&&(r-=1),r}(this.quill.scroll,e.delta);this.quill.setSelection(n,t.Ay.sources.USER)}}}function E(t,e){let n=e;for(let e=t.length-1;e>=0;e-=1){const r=t[e];t[e]={delta:n.transform(r.delta,!0),range:r.range&&_(r.range,n)},n=r.delta.transform(n),0===t[e].delta.length()&&t.splice(e,1)}}function _(t,e){if(!t)return t;const n=e.transformPosition(t.index);return{index:n,length:e.transformPosition(t.index+t.length)-n}}var x=n(8123);class w extends A.A{constructor(t,e){super(t,e),t.root.addEventListener("drop",(e=>{e.preventDefault();let n=null;if(document.caretRangeFromPoint)n=document.caretRangeFromPoint(e.clientX,e.clientY);else if(document.caretPositionFromPoint){const t=document.caretPositionFromPoint(e.clientX,e.clientY);n=document.createRange(),n.setStart(t.offsetNode,t.offset),n.setEnd(t.offsetNode,t.offset)}const r=n&&t.selection.normalizeNative(n);if(r){const n=t.selection.normalizedToRange(r);e.dataTransfer?.files&&this.upload(n,e.dataTransfer.files)}}))}upload(t,e){const n=[];Array.from(e).forEach((t=>{t&&this.options.mimetypes?.includes(t.type)&&n.push(t)})),n.length>0&&this.options.handler.call(this,t,n)}}w.DEFAULTS={mimetypes:["image/png","image/jpeg"],handler(t,e){const n=e.map((t=>new Promise((e=>{const n=new FileReader;n.onload=t=>{e(t.target.result)},n.readAsDataURL(t)}))));Promise.all(n).then((e=>{const n=e.reduce(((t,e)=>t.insert({image:e})),(new(h())).retain(t.index).delete(t.length));this.quill.updateContents(n,f.A.sources.USER),this.quill.setSelection(t.index+e.length,f.A.sources.SILENT)}))}};var O=w;const j=["insertText","insertReplacementText"];class S extends A.A{constructor(e,n){super(e,n),e.root.addEventListener("beforeinput",(t=>{this.handleBeforeInput(t)})),/Android/i.test(navigator.userAgent)||e.on(t.Ay.events.COMPOSITION_BEFORE_START,(()=>{this.handleCompositionStart()}))}deleteRange(t){(0,x.Xo)({range:t,quill:this.quill})}replaceText(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(0===e.length)return!1;if(n){const r=this.quill.getFormat(e.index,1);this.deleteRange(e),this.quill.updateContents((new(h())).retain(e.index).insert(n,r),t.Ay.sources.USER)}else this.deleteRange(e);return this.quill.setSelection(e.index+n.length,0,t.Ay.sources.SILENT),!0}handleBeforeInput(t){if(this.quill.composition.isComposing||t.defaultPrevented||!j.includes(t.inputType))return;const e=t.getTargetRanges?t.getTargetRanges()[0]:null;if(!e||!0===e.collapsed)return;const n=function(t){return"string"==typeof t.data?t.data:t.dataTransfer?.types.includes("text/plain")?t.dataTransfer.getData("text/plain"):null}(t);if(null==n)return;const r=this.quill.selection.normalizeNative(e),i=r?this.quill.selection.normalizedToRange(r):null;i&&this.replaceText(i,n)&&t.preventDefault()}handleCompositionStart(){const t=this.quill.getSelection();t&&this.replaceText(t)}}var L=S;const T=/Mac/i.test(navigator.platform);class k extends A.A{isListening=!1;selectionChangeDeadline=0;constructor(t,e){super(t,e),this.handleArrowKeys(),this.handleNavigationShortcuts()}handleArrowKeys(){this.quill.keyboard.addBinding({key:["ArrowLeft","ArrowRight"],offset:0,shiftKey:null,handler(e,n){let{line:r,event:i}=n;if(!(r instanceof c.ParentBlot&&r.uiNode))return!0;const s="rtl"===getComputedStyle(r.domNode).direction;return!!(s&&"ArrowRight"!==i.key||!s&&"ArrowLeft"!==i.key)||(this.quill.setSelection(e.index-1,e.length+(i.shiftKey?1:0),t.Ay.sources.USER),!1)}})}handleNavigationShortcuts(){this.quill.root.addEventListener("keydown",(t=>{!t.defaultPrevented&&(t=>"ArrowLeft"===t.key||"ArrowRight"===t.key||"ArrowUp"===t.key||"ArrowDown"===t.key||"Home"===t.key||!(!T||"a"!==t.key||!0!==t.ctrlKey))(t)&&this.ensureListeningToSelectionChange()}))}ensureListeningToSelectionChange(){this.selectionChangeDeadline=Date.now()+100,this.isListening||(this.isListening=!0,document.addEventListener("selectionchange",(()=>{this.isListening=!1,Date.now()<=this.selectionChangeDeadline&&this.handleSelectionChange()}),{once:!0}))}handleSelectionChange(){const t=document.getSelection();if(!t)return;const e=t.getRangeAt(0);if(!0!==e.collapsed||0!==e.startOffset)return;const n=this.quill.scroll.find(e.startContainer);if(!(n instanceof c.ParentBlot&&n.uiNode))return;const r=document.createRange();r.setStartAfter(n.uiNode),r.setEndAfter(n.uiNode),t.removeAllRanges(),t.addRange(r)}}var C=k;t.Ay.register({"blots/block":e.Ay,"blots/block/embed":e.zo,"blots/break":i.A,"blots/container":s.A,"blots/cursor":o.A,"blots/embed":l.A,"blots/inline":a.A,"blots/scroll":b,"blots/text":y.A,"modules/clipboard":v.Ay,"modules/history":N,"modules/keyboard":x.Ay,"modules/uploader":O,"modules/input":L,"modules/uiNode":C});var R=t.Ay}(),r.default}()}));
//# sourceMappingURL=quill.core.js.map
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
