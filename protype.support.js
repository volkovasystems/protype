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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cemento = require("cemento");
var harden = require("harden");

harden("STRING", "string");
harden("NUMBER", "number");
harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("OBJECT", "object");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var TYPE_LIST = [
STRING,
NUMBER,
BOOLEAN,
FUNCTION,
OBJECT,
UNDEFINED,
SYMBOL];


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
			return !type.every(function (type) {return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) != type;});

		} else {
			throw new Error("invalid type");
		}
	}

	if (arguments.length > 1 &&
	type !== STRING &&
	type !== NUMBER &&
	type !== BOOLEAN &&
	type !== FUNCTION &&
	type !== OBJECT &&
	type !== UNDEFINED &&
	type !== SYMBOL)
	{
		throw new Error("invalid type");
	}

	if (type) {
		if (arguments.length == 2) {
			if (typeof type != "string") {
				throw new Error("invalid type");
			}

			return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;
		}

		return (0, _from2.default)(arguments).
		splice(1).
		join("").
		replace(/\[|\]|\s+|\,/g, "").
		match(TYPE_PATTERN).
		some(function (type) {return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;});

	} else {
		return cemento({
			"STRING": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == STRING,
			"NUMBER": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == NUMBER,
			"BOOLEAN": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == BOOLEAN,
			"FUNCTION": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == FUNCTION,
			"OBJECT": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == OBJECT,
			"UNDEFINED": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == UNDEFINED,
			"SYMBOL": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == SYMBOL,
			"type": typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property) });

	}
};

module.exports = protype;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3R5cGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjZW1lbnRvIiwicmVxdWlyZSIsImhhcmRlbiIsIlRZUEVfTElTVCIsIlNUUklORyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJGVU5DVElPTiIsIk9CSkVDVCIsIlVOREVGSU5FRCIsIlNZTUJPTCIsIlNUUklDVF9UWVBFX1BBVFRFUk4iLCJSZWdFeHAiLCJqb2luIiwiVFlQRV9QQVRURVJOIiwicHJvdHlwZSIsInByb3BlcnR5IiwidHlwZSIsInRlc3QiLCJtYXRjaCIsImxlbmd0aCIsImV2ZXJ5IiwiRXJyb3IiLCJhcmd1bWVudHMiLCJzcGxpY2UiLCJyZXBsYWNlIiwic29tZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7QUFFQUMsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFdBQVIsRUFBcUIsV0FBckI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCOztBQUVBLElBQU1DLFlBQVk7QUFDakJDLE1BRGlCO0FBRWpCQyxNQUZpQjtBQUdqQkMsT0FIaUI7QUFJakJDLFFBSmlCO0FBS2pCQyxNQUxpQjtBQU1qQkMsU0FOaUI7QUFPakJDLE1BUGlCLENBQWxCOzs7QUFVQTs7Ozs7OztBQU9BLElBQU1DLHNCQUFzQixJQUFJQyxNQUFKLFFBQWtCVCxVQUFVVSxJQUFWLENBQWdCLEdBQWhCLENBQWxCLFlBQTVCOztBQUVBLElBQU1DLGVBQWUsSUFBSUYsTUFBSixPQUFpQlQsVUFBVVUsSUFBVixDQUFnQixHQUFoQixDQUFqQixpQkFBcUQsR0FBckQsQ0FBckI7O0FBRUEsSUFBTUUsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLEtBQUlBLFFBQVEsT0FBT0EsSUFBUCxJQUFlLFFBQXZCLElBQW1DTixvQkFBb0JPLElBQXBCLENBQTBCRCxJQUExQixDQUF2QyxFQUF5RTtBQUN4RUEsU0FBT0EsS0FBS0UsS0FBTCxDQUFZTCxZQUFaLENBQVA7O0FBRUEsTUFBSUcsS0FBS0csTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ3BCOzs7OztBQUtBLFVBQU8sQ0FBQ0gsS0FBS0ksS0FBTCxDQUFZLFVBQUVKLElBQUYsRUFBWSxDQUFFLE9BQVMsUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBNUIsQ0FBcUMsQ0FBL0QsQ0FBUjs7QUFFQSxHQVJELE1BUUs7QUFDSixTQUFNLElBQUlLLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTtBQUNEOztBQUVELEtBQUlDLFVBQVVILE1BQVYsR0FBbUIsQ0FBbkI7QUFDSEgsVUFBU2IsTUFETjtBQUVIYSxVQUFTWixNQUZOO0FBR0hZLFVBQVNYLE9BSE47QUFJSFcsVUFBU1YsUUFKTjtBQUtIVSxVQUFTVCxNQUxOO0FBTUhTLFVBQVNSLFNBTk47QUFPSFEsVUFBU1AsTUFQVjtBQVFBO0FBQ0MsUUFBTSxJQUFJWSxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUwsSUFBSixFQUFVO0FBQ1QsTUFBSU0sVUFBVUgsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUMxQixPQUFJLE9BQU9ILElBQVAsSUFBZSxRQUFuQixFQUE2QjtBQUM1QixVQUFNLElBQUlLLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxVQUFPLFFBQU9OLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJDLElBQTFCO0FBQ0E7O0FBRUQsU0FBTyxvQkFBWU0sU0FBWjtBQUNMQyxRQURLLENBQ0csQ0FESDtBQUVMWCxNQUZLLENBRUMsRUFGRDtBQUdMWSxTQUhLLENBR0ksZUFISixFQUdxQixFQUhyQjtBQUlMTixPQUpLLENBSUVMLFlBSkY7QUFLTFksTUFMSyxDQUtDLFVBQUVULElBQUYsRUFBWSxDQUFFLE9BQVMsUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBNUIsQ0FBcUMsQ0FMcEQsQ0FBUDs7QUFPQSxFQWhCRCxNQWdCSztBQUNKLFNBQU9qQixRQUFTO0FBQ2YsYUFBWSxRQUFPZ0IsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlosTUFEaEI7QUFFZixhQUFZLFFBQU9ZLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJYLE1BRmhCO0FBR2YsY0FBYSxRQUFPVyxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CVixPQUhqQjtBQUlmLGVBQWMsUUFBT1UsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlQsUUFKbEI7QUFLZixhQUFZLFFBQU9TLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJSLE1BTGhCO0FBTWYsZ0JBQWUsUUFBT1EsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlAsU0FObkI7QUFPZixhQUFZLFFBQU9PLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJOLE1BUGhCO0FBUWYsa0JBQWlCTSxRQUFqQix1REFBaUJBLFFBQWpCLENBUmUsRUFBVCxDQUFQOztBQVVBO0FBQ0QsQ0E3RUQ7O0FBK0VBVyxPQUFPQyxPQUFQLEdBQWlCYixPQUFqQiIsImZpbGUiOiJwcm90eXBlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHJvdHlwZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJwcm90eXBlL3Byb3R5cGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwicHJvdHlwZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHJvdHlwZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwicHJvdHlwZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdERldGVybWluZSB0eXBlIG9mIHByb3BlcnR5LlxyXG5cclxuXHRcdFBhc3NpbmcgbXVsdGlwbGUgdHlwZSB3aWxsIGRvIHRyeSB0byBtYXRjaCBhbnkgb25lIG9mIGl0LlxyXG5cclxuXHRcdFBhc3NpbmcgYXBwZW5kZWQgdHlwZSB3aWxsIGRvIG5lZ2F0ZWQgZXZhbHVhdGlvbi5cclxuXHRcdFx0SXQgc2hvdWxkIG5vdCBwYXNzIGFsbCB0eXBlIGdpdmVuLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcclxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XHJcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcclxuXHJcbmhhcmRlbiggXCJTVFJJTkdcIiwgXCJzdHJpbmdcIiApO1xyXG5oYXJkZW4oIFwiTlVNQkVSXCIsIFwibnVtYmVyXCIgKTtcclxuaGFyZGVuKCBcIkJPT0xFQU5cIiwgXCJib29sZWFuXCIgKTtcclxuaGFyZGVuKCBcIkZVTkNUSU9OXCIsIFwiZnVuY3Rpb25cIiApO1xyXG5oYXJkZW4oIFwiT0JKRUNUXCIsIFwib2JqZWN0XCIgKTtcclxuaGFyZGVuKCBcIlVOREVGSU5FRFwiLCBcInVuZGVmaW5lZFwiICk7XHJcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xyXG5cclxuY29uc3QgVFlQRV9MSVNUID0gW1xyXG5cdFNUUklORyxcclxuXHROVU1CRVIsXHJcblx0Qk9PTEVBTixcclxuXHRGVU5DVElPTixcclxuXHRPQkpFQ1QsXHJcblx0VU5ERUZJTkVELFxyXG5cdFNZTUJPTFxyXG5dO1xyXG5cclxuLyo7XHJcblx0QG5vdGU6XHJcblx0XHRUaGlzIHdpbGwgbGV0IHVzIGRldGVybWluZSBpZiB3ZSBjYW4gbWF0Y2ggdXNpbmcgQU5EIGNvbmRpdGlvbi5cclxuXHJcblx0XHRTaW5jZSBhIHZhbHVlIGNhbm5vdCBiZSBvZiBib3RoIHR5cGUsIHRoaXMgd2lsbCBiZSB1c2VkIGZvciByZXZlcnNlZCBuZWdhdGVkIGV2YWx1YXRpb24uXHJcblx0QGVuZC1ub3RlXHJcbiovXHJcbmNvbnN0IFNUUklDVF9UWVBFX1BBVFRFUk4gPSBuZXcgUmVnRXhwKCBgXigkeyBUWVBFX0xJU1Quam9pbiggXCJ8XCIgKSB9KXsyLH0kYCApO1xyXG5cclxuY29uc3QgVFlQRV9QQVRURVJOID0gbmV3IFJlZ0V4cCggYCgkeyBUWVBFX0xJU1Quam9pbiggXCJ8XCIgKSB9KSg/IS4qXFxcXDEpYCwgXCJnXCIgKTtcclxuXHJcbmNvbnN0IHByb3R5cGUgPSBmdW5jdGlvbiBwcm90eXBlKCBwcm9wZXJ0eSwgdHlwZSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRTVFJJTkcsXHJcblx0XHRcdFx0XHROVU1CRVIsXHJcblx0XHRcdFx0XHRCT09MRUFOLFxyXG5cdFx0XHRcdFx0RlVOQ1RJT04sXHJcblx0XHRcdFx0XHRPQkpFQ1QsXHJcblx0XHRcdFx0XHRVTkRFRklORUQsXHJcblx0XHRcdFx0XHRTWU1CT0wsXHJcblx0XHRcdFx0XHRcIi4uLlwiLFxyXG5cdFx0XHRcdFx0QXJyYXlcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIHR5cGUgJiYgdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiAmJiBTVFJJQ1RfVFlQRV9QQVRURVJOLnRlc3QoIHR5cGUgKSApe1xyXG5cdFx0dHlwZSA9IHR5cGUubWF0Y2goIFRZUEVfUEFUVEVSTiApO1xyXG5cclxuXHRcdGlmKCB0eXBlLmxlbmd0aCA+IDEgKXtcclxuXHRcdFx0Lyo7XHJcblx0XHRcdFx0QG5vdGU6XHJcblx0XHRcdFx0XHRUaGlzIGlzIGEgcmV2ZXJzZWQgbmVnYXRlZCBmZWF0dXJlLlxyXG5cdFx0XHRcdEBlbmQtbm90ZVxyXG5cdFx0XHQqL1xyXG5cdFx0XHRyZXR1cm4gIXR5cGUuZXZlcnkoICggdHlwZSApID0+IHsgcmV0dXJuICggdHlwZW9mIHByb3BlcnR5ICE9IHR5cGUgKTsgfSApO1xyXG5cclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0eXBlXCIgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID4gMSAmJlxyXG5cdFx0dHlwZSAhPT0gU1RSSU5HICYmXHJcblx0XHR0eXBlICE9PSBOVU1CRVIgJiZcclxuXHRcdHR5cGUgIT09IEJPT0xFQU4gJiZcclxuXHRcdHR5cGUgIT09IEZVTkNUSU9OICYmXHJcblx0XHR0eXBlICE9PSBPQkpFQ1QgJiZcclxuXHRcdHR5cGUgIT09IFVOREVGSU5FRCAmJlxyXG5cdFx0dHlwZSAhPT0gU1lNQk9MIClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0eXBlXCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlICl7XHJcblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XHJcblx0XHRcdGlmKCB0eXBlb2YgdHlwZSAhPSBcInN0cmluZ1wiICl7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdHlwZVwiICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0eXBlb2YgcHJvcGVydHkgPT0gdHlwZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggYXJndW1lbnRzIClcclxuXHRcdFx0LnNwbGljZSggMSApXHJcblx0XHRcdC5qb2luKCBcIlwiIClcclxuXHRcdFx0LnJlcGxhY2UoIC9cXFt8XFxdfFxccyt8XFwsL2csIFwiXCIgKVxyXG5cdFx0XHQubWF0Y2goIFRZUEVfUEFUVEVSTiApXHJcblx0XHRcdC5zb21lKCAoIHR5cGUgKSA9PiB7IHJldHVybiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSB0eXBlICk7IH0gKTtcclxuXHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gY2VtZW50bygge1xyXG5cdFx0XHRcIlNUUklOR1wiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBTVFJJTkcgKSxcclxuXHRcdFx0XCJOVU1CRVJcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gTlVNQkVSICksXHJcblx0XHRcdFwiQk9PTEVBTlwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBCT09MRUFOICksXHJcblx0XHRcdFwiRlVOQ1RJT05cIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gRlVOQ1RJT04gKSxcclxuXHRcdFx0XCJPQkpFQ1RcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gT0JKRUNUICksXHJcblx0XHRcdFwiVU5ERUZJTkVEXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IFVOREVGSU5FRCApLFxyXG5cdFx0XHRcIlNZTUJPTFwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBTWU1CT0wgKSxcclxuXHRcdFx0XCJ0eXBlXCI6ICggdHlwZW9mIHByb3BlcnR5IClcclxuXHRcdH0gKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHByb3R5cGU7XHJcbiJdfQ==
//# sourceMappingURL=protype.support.js.map
