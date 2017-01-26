"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "protype",
			"path": "protype/protype.js",
			"file": "protype.js",
			"module": "protype",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/protype.git",
			"test": "protype-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Determine type of property.

		Passing multiple type will do try to match any one of it.
	@end-module-documentation

	@include:
		{
			"cemento": "cemento",
			"harden": "harden"
		}
	@end-include
*/

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cemento = require("cemento");
var harden = require("harden");

//: @support-module:
//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Array.isArray || (Array.isArray = function (r) {
	return "[object Array]" === Object.prototype.toString.call(r);
});
//: @end-support-module

//: @support-module:
//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
_from2.default || (Array.from = function () {
	var r = Object.prototype.toString,
	    n = function n(_n) {
		return "function" == typeof _n || "[object Function]" === r.call(_n);
	},
	    t = function t(r) {
		var n = Number(r);
		return isNaN(n) ? 0 : 0 !== n && isFinite(n) ? (n > 0 ? 1 : -1) * Math.floor(Math.abs(n)) : n;
	},
	    e = Math.pow(2, 53) - 1,
	    o = function o(r) {
		var n = t(r);return Math.min(Math.max(n, 0), e);
	};
	return function (r) {
		var t = this,
		    e = Object(r);
		if (null == r) throw new TypeError("Array.from requires an array-like object - not null or undefined");
		var a,
		    u = arguments.length > 1 ? arguments[1] : void 0;if ("undefined" != typeof u) {
			if (!n(u)) throw new TypeError("Array.from: when provided, the second argument must be a function");
			arguments.length > 2 && (a = arguments[2]);
		}for (var i, f = o(e.length), c = n(t) ? Object(new t(f)) : new Array(f), h = 0; f > h;) {
			i = e[h], u ? c[h] = "undefined" == typeof a ? u(i, h) : u.call(a, i, h) : c[h] = i, h += 1;
		}return c.length = f, c;
	};
}());
//: @end-support-module

//; @support-module:
//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.some = Array.prototype.some || function (evaluator, thisArg) {
	"use strict";

	if (!this) throw new TypeError("Array.prototype.some called on null or undefined");
	if ("function" != typeof evaluator) {
		if ("string" != typeof evaluator) throw new TypeError();
		if (!(evaluator = eval(evaluator))) throw new TypeError();
	}var i;
	if (void 0 === thisArg) {
		for (i in this) {
			if (evaluator(this[i], i, this)) return !0;
		}return !1;
	}
	for (i in this) {
		if (evaluator.call(thisArg, this[i], i, this)) return !0;
	}return !1;
};
//; @end-support-module

//: @support-module:
//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Array.prototype.reduce || (Array.prototype.reduce = function (r) {
	"use strict";

	if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
	if ("function" != typeof r) throw new TypeError(r + " is not a function");
	var e,
	    t = Object(this),
	    n = t.length >>> 0,
	    o = 0;if (2 == arguments.length) e = arguments[1];else {
		for (; n > o && !(o in t);) {
			o++;
		}if (o >= n) throw new TypeError("Reduce of empty array with no initial value");
		e = t[o++];
	}for (; n > o; o++) {
		o in t && (e = r(e, t[o], o, t));
	}return e;
});
//: @end-support-module

harden("STRING", "string");
harden("NUMBER", "number");
harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("OBJECT", "object");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var protype = function protype(property, type) {
	var _arguments = arguments;

	/*;
 	@meta-configuration:
 		{
 			"property:required": "*",
 			"type": [
 				"string",
 				STRING,
 				NUMBER,
 				BOOLEAN,
 				FUNCTION,
 				OBJECT,
 				UNDEFINED,
 				SYMBOL,
 				"...",
 				Array
 			]
 		}
 	@end-meta-configuration
 */

	if (type && typeof type == "string" && type != STRING && type != NUMBER && type != BOOLEAN && type != FUNCTION && type != OBJECT && type != UNDEFINED && type != SYMBOL) {
		throw new Error("invalid type");
	}

	if (type) {
		var _ret = function () {
			if (_arguments.length == 2) {
				if (typeof type != "string") {
					throw new Error("invalid type");
				}

				return {
					v: (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type
				};
			}

			var flatten = function flatten(current) {
				return current.reduce(function (previous, current) {
					var element = Array.isArray(current) ? flatten(current) : current;

					return previous.concat(element);
				}, []);
			};

			return {
				v: (0, _from2.default)(_arguments).splice(1).reduce(function (previous, current) {
					var element = Array.isArray(current) ? flatten(current) : current;

					return previous.concat(element);
				}, []).filter(function (type) {
					return (typeof type === "undefined" ? "undefined" : (0, _typeof3.default)(type)) == STRING;
				}).filter(function (type) {
					return type == STRING || type == NUMBER || type == BOOLEAN || type == FUNCTION || type == OBJECT || type == UNDEFINED || type == SYMBOL;
				}).some(function (type) {
					return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;
				})
			};
		}();

		if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	} else {
		return cemento({
			"STRING": protype(property, STRING),
			"NUMBER": protype(property, NUMBER),
			"BOOLEAN": protype(property, BOOLEAN),
			"FUNCTION": protype(property, FUNCTION),
			"OBJECT": protype(property, OBJECT),
			"UNDEFINED": protype(property, UNDEFINED),
			"SYMBOL": protype(property, SYMBOL),
			"type": typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)
		});
	}
};

module.exports = protype;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3R5cGUuanMiXSwibmFtZXMiOlsiY2VtZW50byIsInJlcXVpcmUiLCJoYXJkZW4iLCJBcnJheSIsImlzQXJyYXkiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiZnJvbSIsIm4iLCJ0IiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsImFicyIsImUiLCJwb3ciLCJvIiwibWluIiwibWF4IiwiVHlwZUVycm9yIiwiYSIsInUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwiZiIsImMiLCJoIiwic29tZSIsImV2YWx1YXRvciIsInRoaXNBcmciLCJldmFsIiwicmVkdWNlIiwicHJvdHlwZSIsInByb3BlcnR5IiwidHlwZSIsIlNUUklORyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJGVU5DVElPTiIsIk9CSkVDVCIsIlVOREVGSU5FRCIsIlNZTUJPTCIsIkVycm9yIiwiZmxhdHRlbiIsImN1cnJlbnQiLCJwcmV2aW91cyIsImVsZW1lbnQiLCJjb25jYXQiLCJzcGxpY2UiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7O0FBRUE7QUFDQztBQUNBRSxNQUFNQyxPQUFOLEtBQWdCRCxNQUFNQyxPQUFOLEdBQWMsVUFBU0MsQ0FBVCxFQUFXO0FBQUMsUUFBTSxxQkFBbUJDLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosQ0FBL0IsQ0FBekI7QUFBMkQsQ0FBckc7QUFDRDs7QUFFQTtBQUNDO0FBQ0EsbUJBQWFGLE1BQU1PLElBQU4sR0FBVyxZQUFVO0FBQUMsS0FBSUwsSUFBRUMsT0FB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QTVCO0FBQXFDLEtBaEJwRDtBQUFQO0FBakJTOztBQUFBO0FBbUNULEVBbkNELE1BbUNLO0FBQ0osU0FBT3hDLFFBQVM7QUFDZixhQUFVc0MsUUFBU0MsUUFBVCxFQUFtQkUsTUFBbkIsQ0FESztBQUVmLGFBQVVILFFBQVNDLFFBQVQsRUFBbUJHLE1BQW5CLENBRks7QUFHZixjQUFXSixRQUFTQyxRQUFULEVBQW1CSSxPQUFuQixDQUhJO0FBSWYsZUFBWUwsUUFBU0MsUUFBVCxFQUFtQkssUUFBbkIsQ0FKRztBQUtmLGFBQVVOLFFBQVNDLFFBQVQsRUFBbUJNLE1BQW5CLENBTEs7QUFNZixnQkFBYVAsUUFBU0MsUUFBVCxFQUFtQk8sU0FBbkIsQ0FORTtBQU9mLGFBQVVSLFFBQVNDLFFBQVQsRUFBbUJRLE1BQW5CLENBUEs7QUFRZixrQkFBaUJSLFFBQWpCLHVEQUFpQkEsUUFBakI7QUFSZSxHQUFULENBQVA7QUFVQTtBQUNELENBakZEOztBQW1GQWlCLE9BQU9DLE9BQVAsR0FBaUJuQixPQUFqQiIsImZpbGUiOiJwcm90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwcm90eXBlL3Byb3R5cGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInByb3R5cGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Byb3R5cGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwcm90eXBlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGV0ZXJtaW5lIHR5cGUgb2YgcHJvcGVydHkuXG5cblx0XHRQYXNzaW5nIG11bHRpcGxlIHR5cGUgd2lsbCBkbyB0cnkgdG8gbWF0Y2ggYW55IG9uZSBvZiBpdC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pc0FycmF5XG5cdEFycmF5LmlzQXJyYXl8fChBcnJheS5pc0FycmF5PWZ1bmN0aW9uKHIpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKX0pO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuLy86IEBzdXBwb3J0LW1vZHVsZTpcblx0Ly86IEByZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2Zyb21cblx0QXJyYXkuZnJvbXx8KEFycmF5LmZyb209ZnVuY3Rpb24oKXt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLG49ZnVuY3Rpb24obil7XG5cdHJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG58fFwiW29iamVjdCBGdW5jdGlvbl1cIj09PXIuY2FsbChuKX0sdD1mdW5jdGlvbihyKXt2YXIgbj1OdW1iZXIocik7XG5cdHJldHVybiBpc05hTihuKT8wOjAhPT1uJiZpc0Zpbml0ZShuKT8obj4wPzE6LTEpKk1hdGguZmxvb3IoTWF0aC5hYnMobikpOm59LFxuXHRlPU1hdGgucG93KDIsNTMpLTEsbz1mdW5jdGlvbihyKXt2YXIgbj10KHIpO3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLDApLGUpfTtcblx0cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciB0PXRoaXMsZT1PYmplY3Qocik7XG5cdGlmKG51bGw9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWRcIik7XG5cdHZhciBhLHU9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDA7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHUpe1xuXHRpZighbih1KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cdGFyZ3VtZW50cy5sZW5ndGg+MiYmKGE9YXJndW1lbnRzWzJdKX1mb3IodmFyIGksZj1vKGUubGVuZ3RoKSxjPW4odCk/XG5cdE9iamVjdChuZXcgdChmKSk6bmV3IEFycmF5KGYpLGg9MDtmPmg7KWk9ZVtoXSxcblx0dT9jW2hdPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBhP3UoaSxoKTp1LmNhbGwoYSxpLGgpOmNbaF09aSxoKz0xO3JldHVybiBjLmxlbmd0aD1mLGN9fSgpKTtcbi8vOiBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbi8vOyBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lXG5cdEFycmF5LnByb3RvdHlwZS5zb21lPUFycmF5LnByb3RvdHlwZS5zb21lfHxmdW5jdGlvbihldmFsdWF0b3IsdGhpc0FyZyl7XCJ1c2Ugc3RyaWN0XCI7XG5cdGlmKCF0aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUuc29tZSBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWRcIik7XG5cdGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGV2YWx1YXRvcil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGV2YWx1YXRvcil0aHJvdyBuZXcgVHlwZUVycm9yO1xuXHRpZighKGV2YWx1YXRvcj1ldmFsKGV2YWx1YXRvcikpKXRocm93IG5ldyBUeXBlRXJyb3J9dmFyIGk7XG5cdGlmKHZvaWQgMD09PXRoaXNBcmcpe2ZvcihpIGluIHRoaXMpaWYoZXZhbHVhdG9yKHRoaXNbaV0saSx0aGlzKSlyZXR1cm4hMDtyZXR1cm4hMX1cblx0Zm9yKGkgaW4gdGhpcylpZihldmFsdWF0b3IuY2FsbCh0aGlzQXJnLHRoaXNbaV0saSx0aGlzKSlyZXR1cm4hMDtyZXR1cm4hMX07XG4vLzsgQGVuZC1zdXBwb3J0LW1vZHVsZVxuXG4vLzogQHN1cHBvcnQtbW9kdWxlOlxuXHQvLzogQHJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvcmVkdWNlXG5cdEFycmF5LnByb3RvdHlwZS5yZWR1Y2V8fChBcnJheS5wcm90b3R5cGUucmVkdWNlPWZ1bmN0aW9uKHIpe1widXNlIHN0cmljdFwiO1xuXHRpZihudWxsPT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5wcm90b3R5cGUucmVkdWNlIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKHIrXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdHZhciBlLHQ9T2JqZWN0KHRoaXMpLG49dC5sZW5ndGg+Pj4wLG89MDtpZigyPT1hcmd1bWVudHMubGVuZ3RoKWU9YXJndW1lbnRzWzFdO1xuXHRlbHNle2Zvcig7bj5vJiYhKG8gaW4gdCk7KW8rKztpZihvPj1uKXRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO1xuXHRlPXRbbysrXX1mb3IoO24+bztvKyspbyBpbiB0JiYoZT1yKGUsdFtvXSxvLHQpKTtyZXR1cm4gZX0pO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuaGFyZGVuKCBcIlNUUklOR1wiLCBcInN0cmluZ1wiICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIFwibnVtYmVyXCIgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIFwiYm9vbGVhblwiICk7XG5oYXJkZW4oIFwiRlVOQ1RJT05cIiwgXCJmdW5jdGlvblwiICk7XG5oYXJkZW4oIFwiT0JKRUNUXCIsIFwib2JqZWN0XCIgKTtcbmhhcmRlbiggXCJVTkRFRklORURcIiwgXCJ1bmRlZmluZWRcIiApO1xuaGFyZGVuKCBcIlNZTUJPTFwiLCBcInN5bWJvbFwiICk7XG5cbmNvbnN0IHByb3R5cGUgPSBmdW5jdGlvbiBwcm90eXBlKCBwcm9wZXJ0eSwgdHlwZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInR5cGVcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE9CSkVDVCxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiLi4uXCIsXG5cdFx0XHRcdFx0QXJyYXlcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGUgJiZcblx0XHR0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICYmXG5cdFx0dHlwZSAhPSBTVFJJTkcgJiZcblx0XHR0eXBlICE9IE5VTUJFUiAmJlxuXHRcdHR5cGUgIT0gQk9PTEVBTiAmJlxuXHRcdHR5cGUgIT0gRlVOQ1RJT04gJiZcblx0XHR0eXBlICE9IE9CSkVDVCAmJlxuXHRcdHR5cGUgIT0gVU5ERUZJTkVEICYmXG5cdFx0dHlwZSAhPSBTWU1CT0wgKVxuXHR7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdHlwZVwiICk7XG5cdH1cblxuXHRpZiggdHlwZSApe1xuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGlmKCB0eXBlb2YgdHlwZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHR5cGVcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHByb3BlcnR5ID09IHR5cGU7XG5cdFx0fVxuXG5cdFx0bGV0IGZsYXR0ZW4gPSBmdW5jdGlvbiBmbGF0dGVuKCBjdXJyZW50ICl7XG5cdFx0XHRyZXR1cm4gY3VycmVudC5yZWR1Y2UoICggcHJldmlvdXMsIGN1cnJlbnQgKSA9PiB7XG5cdFx0XHRcdGxldCBlbGVtZW50ID0gQXJyYXkuaXNBcnJheSggY3VycmVudCApPyBmbGF0dGVuKCBjdXJyZW50ICkgOiBjdXJyZW50O1xuXG5cdFx0XHRcdHJldHVybiBwcmV2aW91cy5jb25jYXQoIGVsZW1lbnQgKTtcblx0XHRcdH0sIFsgXSApO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzICkuc3BsaWNlKCAxIClcblx0XHRcdC5yZWR1Y2UoICggcHJldmlvdXMsIGN1cnJlbnQgKSA9PiB7XG5cdFx0XHRcdGxldCBlbGVtZW50ID0gQXJyYXkuaXNBcnJheSggY3VycmVudCApPyBmbGF0dGVuKCBjdXJyZW50ICkgOiBjdXJyZW50O1xuXG5cdFx0XHRcdHJldHVybiBwcmV2aW91cy5jb25jYXQoIGVsZW1lbnQgKTtcblx0XHRcdH0sIFsgXSApXG5cdFx0XHQuZmlsdGVyKCAoIHR5cGUgKSA9PiB7IHJldHVybiAoIHR5cGVvZiB0eXBlID09IFNUUklORyApOyB9IClcblx0XHRcdC5maWx0ZXIoICggdHlwZSApID0+IHtcblx0XHRcdFx0cmV0dXJuICggdHlwZSA9PSBTVFJJTkcgfHxcblx0XHRcdFx0XHR0eXBlID09IE5VTUJFUiB8fFxuXHRcdFx0XHRcdHR5cGUgPT0gQk9PTEVBTiB8fFxuXHRcdFx0XHRcdHR5cGUgPT0gRlVOQ1RJT04gfHxcblx0XHRcdFx0XHR0eXBlID09IE9CSkVDVCB8fFxuXHRcdFx0XHRcdHR5cGUgPT0gVU5ERUZJTkVEIHx8XG5cdFx0XHRcdFx0dHlwZSA9PSBTWU1CT0wgKTtcblx0XHRcdH0gKVxuXHRcdFx0LnNvbWUoICggdHlwZSApID0+IHsgcmV0dXJuICggdHlwZW9mIHByb3BlcnR5ID09IHR5cGUgKTsgfSApO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBjZW1lbnRvKCB7XG5cdFx0XHRcIlNUUklOR1wiOiBwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICksXG5cdFx0XHRcIk5VTUJFUlwiOiBwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICksXG5cdFx0XHRcIkJPT0xFQU5cIjogcHJvdHlwZSggcHJvcGVydHksIEJPT0xFQU4gKSxcblx0XHRcdFwiRlVOQ1RJT05cIjogcHJvdHlwZSggcHJvcGVydHksIEZVTkNUSU9OICksXG5cdFx0XHRcIk9CSkVDVFwiOiBwcm90eXBlKCBwcm9wZXJ0eSwgT0JKRUNUICksXG5cdFx0XHRcIlVOREVGSU5FRFwiOiBwcm90eXBlKCBwcm9wZXJ0eSwgVU5ERUZJTkVEICksXG5cdFx0XHRcIlNZTUJPTFwiOiBwcm90eXBlKCBwcm9wZXJ0eSwgU1lNQk9MICksXG5cdFx0XHRcInR5cGVcIjogKCB0eXBlb2YgcHJvcGVydHkgKVxuXHRcdH0gKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm90eXBlO1xuIl19
