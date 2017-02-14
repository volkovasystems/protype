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

		Passing appended type will do negated evaluation.
			It should not pass all type given.
	@end-module-documentation

	@include:
		{
			"cemento": "cemento",
			"harden": "harden"
		}
	@end-include
*/

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cemento = require("cemento");
var harden = require("harden");

harden("STRING", "string");
harden("NUMBER", "number");
harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("OBJECT", "object");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var TYPE_LIST = [STRING, NUMBER, BOOLEAN, FUNCTION, OBJECT, UNDEFINED, SYMBOL];

/*;
	@note:
		This will let us determine if we can match using AND condition.

		Since a value cannot be of both type, this will be used for reversed negated evaluation.
	@end-note
*/
var STRICT_TYPE_PATTERN = new RegExp("^(" + TYPE_LIST.join("|") + "){2,}$");

var TYPE_PATTERN = new RegExp("(" + TYPE_LIST.join("|") + ")(?!.*\\1)", "g");

var protype = function protype(property, type) {
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

	if (type && typeof type == "string" && STRICT_TYPE_PATTERN.test(type)) {
		type = type.match(TYPE_PATTERN);

		if (type.length > 1) {
			/*;
   	@note:
   		This is a reversed negated feature.
   	@end-note
   */
			return !type.every(function (type) {
				return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) != type;
			});
		} else {
			throw new Error("invalid type");
		}
	}

	if (arguments.length > 1 && type !== STRING && type !== NUMBER && type !== BOOLEAN && type !== FUNCTION && type !== OBJECT && type !== UNDEFINED && type !== SYMBOL) {
		throw new Error("invalid type");
	}

	if (type) {
		if (arguments.length == 2) {
			if (typeof type != "string") {
				throw new Error("invalid type");
			}

			return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;
		}

		return (0, _from2.default)(arguments).splice(1).join("").replace(/\[|\]|\s+|\,/g, "").match(TYPE_PATTERN).some(function (type) {
			return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;
		});
	} else {
		return cemento({
			"STRING": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == STRING,
			"NUMBER": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == NUMBER,
			"BOOLEAN": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == BOOLEAN,
			"FUNCTION": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == FUNCTION,
			"OBJECT": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == OBJECT,
			"UNDEFINED": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == UNDEFINED,
			"SYMBOL": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == SYMBOL,
			"type": typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)
		});
	}
};

module.exports = protype;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3R5cGUuanMiXSwibmFtZXMiOlsiY2VtZW50byIsInJlcXVpcmUiLCJoYXJkZW4iLCJUWVBFX0xJU1QiLCJTVFJJTkciLCJOVU1CRVIiLCJCT09MRUFOIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJVTkRFRklORUQiLCJTWU1CT0wiLCJTVFJJQ1RfVFlQRV9QQVRURVJOIiwiUmVnRXhwIiwiam9pbiIsIlRZUEVfUEFUVEVSTiIsInByb3R5cGUiLCJwcm9wZXJ0eSIsInR5cGUiLCJ0ZXN0IiwibWF0Y2giLCJsZW5ndGgiLCJldmVyeSIsIkVycm9yIiwiYXJndW1lbnRzIiwic3BsaWNlIiwicmVwbGFjZSIsInNvbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7O0FBRUFDLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxTQUFSLEVBQW1CLFNBQW5CO0FBQ0FBLE9BQVEsVUFBUixFQUFvQixVQUFwQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxXQUFSLEVBQXFCLFdBQXJCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjs7QUFFQSxJQUFNQyxZQUFZLENBQ2pCQyxNQURpQixFQUVqQkMsTUFGaUIsRUFHakJDLE9BSGlCLEVBSWpCQyxRQUppQixFQUtqQkMsTUFMaUIsRUFNakJDLFNBTmlCLEVBT2pCQyxNQVBpQixDQUFsQjs7QUFVQTs7Ozs7OztBQU9BLElBQU1DLHNCQUFzQixJQUFJQyxNQUFKLFFBQWtCVCxVQUFVVSxJQUFWLENBQWdCLEdBQWhCLENBQWxCLFlBQTVCOztBQUVBLElBQU1DLGVBQWUsSUFBSUYsTUFBSixPQUFpQlQsVUFBVVUsSUFBVixDQUFnQixHQUFoQixDQUFqQixpQkFBcUQsR0FBckQsQ0FBckI7O0FBRUEsSUFBTUUsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLEtBQUlBLFFBQVEsT0FBT0EsSUFBUCxJQUFlLFFBQXZCLElBQW1DTixvQkFBb0JPLElBQXBCLENBQTBCRCxJQUExQixDQUF2QyxFQUF5RTtBQUN4RUEsU0FBT0EsS0FBS0UsS0FBTCxDQUFZTCxZQUFaLENBQVA7O0FBRUEsTUFBSUcsS0FBS0csTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ3BCOzs7OztBQUtBLFVBQU8sQ0FBQ0gsS0FBS0ksS0FBTCxDQUFZLFVBQUVKLElBQUYsRUFBWTtBQUFFLFdBQVMsUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBNUI7QUFBcUMsSUFBL0QsQ0FBUjtBQUVBLEdBUkQsTUFRSztBQUNKLFNBQU0sSUFBSUssS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBO0FBQ0Q7O0FBRUQsS0FBSUMsVUFBVUgsTUFBVixHQUFtQixDQUFuQixJQUNISCxTQUFTYixNQUROLElBRUhhLFNBQVNaLE1BRk4sSUFHSFksU0FBU1gsT0FITixJQUlIVyxTQUFTVixRQUpOLElBS0hVLFNBQVNULE1BTE4sSUFNSFMsU0FBU1IsU0FOTixJQU9IUSxTQUFTUCxNQVBWLEVBUUE7QUFDQyxRQUFNLElBQUlZLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTCxJQUFKLEVBQVU7QUFDVCxNQUFJTSxVQUFVSCxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCLE9BQUksT0FBT0gsSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQzVCLFVBQU0sSUFBSUssS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVELFVBQU8sUUFBT04sUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBMUI7QUFDQTs7QUFFRCxTQUFPLG9CQUFZTSxTQUFaLEVBQ0xDLE1BREssQ0FDRyxDQURILEVBRUxYLElBRkssQ0FFQyxFQUZELEVBR0xZLE9BSEssQ0FHSSxlQUhKLEVBR3FCLEVBSHJCLEVBSUxOLEtBSkssQ0FJRUwsWUFKRixFQUtMWSxJQUxLLENBS0MsVUFBRVQsSUFBRixFQUFZO0FBQUUsVUFBUyxRQUFPRCxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CQyxJQUE1QjtBQUFxQyxHQUxwRCxDQUFQO0FBT0EsRUFoQkQsTUFnQks7QUFDSixTQUFPakIsUUFBUztBQUNmLGFBQVksUUFBT2dCLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJaLE1BRGhCO0FBRWYsYUFBWSxRQUFPWSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CWCxNQUZoQjtBQUdmLGNBQWEsUUFBT1csUUFBUCx1REFBT0EsUUFBUCxNQUFtQlYsT0FIakI7QUFJZixlQUFjLFFBQU9VLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJULFFBSmxCO0FBS2YsYUFBWSxRQUFPUyxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CUixNQUxoQjtBQU1mLGdCQUFlLFFBQU9RLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJQLFNBTm5CO0FBT2YsYUFBWSxRQUFPTyxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CTixNQVBoQjtBQVFmLGtCQUFpQk0sUUFBakIsdURBQWlCQSxRQUFqQjtBQVJlLEdBQVQsQ0FBUDtBQVVBO0FBQ0QsQ0E3RUQ7O0FBK0VBVyxPQUFPQyxPQUFQLEdBQWlCYixPQUFqQiIsImZpbGUiOiJwcm90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwcm90eXBlL3Byb3R5cGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInByb3R5cGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Byb3R5cGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwcm90eXBlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGV0ZXJtaW5lIHR5cGUgb2YgcHJvcGVydHkuXG5cblx0XHRQYXNzaW5nIG11bHRpcGxlIHR5cGUgd2lsbCBkbyB0cnkgdG8gbWF0Y2ggYW55IG9uZSBvZiBpdC5cblxuXHRcdFBhc3NpbmcgYXBwZW5kZWQgdHlwZSB3aWxsIGRvIG5lZ2F0ZWQgZXZhbHVhdGlvbi5cblx0XHRcdEl0IHNob3VsZCBub3QgcGFzcyBhbGwgdHlwZSBnaXZlbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmhhcmRlbiggXCJTVFJJTkdcIiwgXCJzdHJpbmdcIiApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBcIm51bWJlclwiICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBcImJvb2xlYW5cIiApO1xuaGFyZGVuKCBcIkZVTkNUSU9OXCIsIFwiZnVuY3Rpb25cIiApO1xuaGFyZGVuKCBcIk9CSkVDVFwiLCBcIm9iamVjdFwiICk7XG5oYXJkZW4oIFwiVU5ERUZJTkVEXCIsIFwidW5kZWZpbmVkXCIgKTtcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xuXG5jb25zdCBUWVBFX0xJU1QgPSBbXG5cdFNUUklORyxcblx0TlVNQkVSLFxuXHRCT09MRUFOLFxuXHRGVU5DVElPTixcblx0T0JKRUNULFxuXHRVTkRFRklORUQsXG5cdFNZTUJPTFxuXTtcblxuLyo7XG5cdEBub3RlOlxuXHRcdFRoaXMgd2lsbCBsZXQgdXMgZGV0ZXJtaW5lIGlmIHdlIGNhbiBtYXRjaCB1c2luZyBBTkQgY29uZGl0aW9uLlxuXG5cdFx0U2luY2UgYSB2YWx1ZSBjYW5ub3QgYmUgb2YgYm90aCB0eXBlLCB0aGlzIHdpbGwgYmUgdXNlZCBmb3IgcmV2ZXJzZWQgbmVnYXRlZCBldmFsdWF0aW9uLlxuXHRAZW5kLW5vdGVcbiovXG5jb25zdCBTVFJJQ1RfVFlQRV9QQVRURVJOID0gbmV3IFJlZ0V4cCggYF4oJHsgVFlQRV9MSVNULmpvaW4oIFwifFwiICkgfSl7Mix9JGAgKTtcblxuY29uc3QgVFlQRV9QQVRURVJOID0gbmV3IFJlZ0V4cCggYCgkeyBUWVBFX0xJU1Quam9pbiggXCJ8XCIgKSB9KSg/IS4qXFxcXDEpYCwgXCJnXCIgKTtcblxuY29uc3QgcHJvdHlwZSA9IGZ1bmN0aW9uIHByb3R5cGUoIHByb3BlcnR5LCB0eXBlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRTVFJJTkcsXG5cdFx0XHRcdFx0TlVNQkVSLFxuXHRcdFx0XHRcdEJPT0xFQU4sXG5cdFx0XHRcdFx0RlVOQ1RJT04sXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTWU1CT0wsXG5cdFx0XHRcdFx0XCIuLi5cIixcblx0XHRcdFx0XHRBcnJheVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHlwZSAmJiB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICYmIFNUUklDVF9UWVBFX1BBVFRFUk4udGVzdCggdHlwZSApICl7XG5cdFx0dHlwZSA9IHR5cGUubWF0Y2goIFRZUEVfUEFUVEVSTiApO1xuXG5cdFx0aWYoIHR5cGUubGVuZ3RoID4gMSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFRoaXMgaXMgYSByZXZlcnNlZCBuZWdhdGVkIGZlYXR1cmUuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdHJldHVybiAhdHlwZS5ldmVyeSggKCB0eXBlICkgPT4geyByZXR1cm4gKCB0eXBlb2YgcHJvcGVydHkgIT0gdHlwZSApOyB9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID4gMSAmJlxuXHRcdHR5cGUgIT09IFNUUklORyAmJlxuXHRcdHR5cGUgIT09IE5VTUJFUiAmJlxuXHRcdHR5cGUgIT09IEJPT0xFQU4gJiZcblx0XHR0eXBlICE9PSBGVU5DVElPTiAmJlxuXHRcdHR5cGUgIT09IE9CSkVDVCAmJlxuXHRcdHR5cGUgIT09IFVOREVGSU5FRCAmJlxuXHRcdHR5cGUgIT09IFNZTUJPTCApXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0eXBlXCIgKTtcblx0fVxuXG5cdGlmKCB0eXBlICl7XG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0aWYoIHR5cGVvZiB0eXBlICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdHlwZVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0eXBlb2YgcHJvcGVydHkgPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzIClcblx0XHRcdC5zcGxpY2UoIDEgKVxuXHRcdFx0LmpvaW4oIFwiXCIgKVxuXHRcdFx0LnJlcGxhY2UoIC9cXFt8XFxdfFxccyt8XFwsL2csIFwiXCIgKVxuXHRcdFx0Lm1hdGNoKCBUWVBFX1BBVFRFUk4gKVxuXHRcdFx0LnNvbWUoICggdHlwZSApID0+IHsgcmV0dXJuICggdHlwZW9mIHByb3BlcnR5ID09IHR5cGUgKTsgfSApO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBjZW1lbnRvKCB7XG5cdFx0XHRcIlNUUklOR1wiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBTVFJJTkcgKSxcblx0XHRcdFwiTlVNQkVSXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IE5VTUJFUiApLFxuXHRcdFx0XCJCT09MRUFOXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IEJPT0xFQU4gKSxcblx0XHRcdFwiRlVOQ1RJT05cIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gRlVOQ1RJT04gKSxcblx0XHRcdFwiT0JKRUNUXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IE9CSkVDVCApLFxuXHRcdFx0XCJVTkRFRklORURcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gVU5ERUZJTkVEICksXG5cdFx0XHRcIlNZTUJPTFwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBTWU1CT0wgKSxcblx0XHRcdFwidHlwZVwiOiAoIHR5cGVvZiBwcm9wZXJ0eSApXG5cdFx0fSApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3R5cGU7XG4iXX0=
