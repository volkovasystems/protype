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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3R5cGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjZW1lbnRvIiwicmVxdWlyZSIsImhhcmRlbiIsIlRZUEVfTElTVCIsIlNUUklORyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJGVU5DVElPTiIsIk9CSkVDVCIsIlVOREVGSU5FRCIsIlNZTUJPTCIsIlNUUklDVF9UWVBFX1BBVFRFUk4iLCJSZWdFeHAiLCJqb2luIiwiVFlQRV9QQVRURVJOIiwicHJvdHlwZSIsInByb3BlcnR5IiwidHlwZSIsInRlc3QiLCJtYXRjaCIsImxlbmd0aCIsImV2ZXJ5IiwiRXJyb3IiLCJhcmd1bWVudHMiLCJzcGxpY2UiLCJyZXBsYWNlIiwic29tZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7QUFFQUMsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFdBQVIsRUFBcUIsV0FBckI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCOztBQUVBLElBQU1DLFlBQVk7QUFDakJDLE1BRGlCO0FBRWpCQyxNQUZpQjtBQUdqQkMsT0FIaUI7QUFJakJDLFFBSmlCO0FBS2pCQyxNQUxpQjtBQU1qQkMsU0FOaUI7QUFPakJDLE1BUGlCLENBQWxCOzs7QUFVQTs7Ozs7OztBQU9BLElBQU1DLHNCQUFzQixJQUFJQyxNQUFKLFFBQWtCVCxVQUFVVSxJQUFWLENBQWdCLEdBQWhCLENBQWxCLFlBQTVCOztBQUVBLElBQU1DLGVBQWUsSUFBSUYsTUFBSixPQUFpQlQsVUFBVVUsSUFBVixDQUFnQixHQUFoQixDQUFqQixpQkFBcUQsR0FBckQsQ0FBckI7O0FBRUEsSUFBTUUsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLEtBQUlBLFFBQVEsT0FBT0EsSUFBUCxJQUFlLFFBQXZCLElBQW1DTixvQkFBb0JPLElBQXBCLENBQTBCRCxJQUExQixDQUF2QyxFQUF5RTtBQUN4RUEsU0FBT0EsS0FBS0UsS0FBTCxDQUFZTCxZQUFaLENBQVA7O0FBRUEsTUFBSUcsS0FBS0csTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ3BCOzs7OztBQUtBLFVBQU8sQ0FBQ0gsS0FBS0ksS0FBTCxDQUFZLFVBQUVKLElBQUYsRUFBWSxDQUFFLE9BQVMsUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBNUIsQ0FBcUMsQ0FBL0QsQ0FBUjs7QUFFQSxHQVJELE1BUUs7QUFDSixTQUFNLElBQUlLLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTtBQUNEOztBQUVELEtBQUlDLFVBQVVILE1BQVYsR0FBbUIsQ0FBbkI7QUFDSEgsVUFBU2IsTUFETjtBQUVIYSxVQUFTWixNQUZOO0FBR0hZLFVBQVNYLE9BSE47QUFJSFcsVUFBU1YsUUFKTjtBQUtIVSxVQUFTVCxNQUxOO0FBTUhTLFVBQVNSLFNBTk47QUFPSFEsVUFBU1AsTUFQVjtBQVFBO0FBQ0MsUUFBTSxJQUFJWSxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUwsSUFBSixFQUFVO0FBQ1QsTUFBSU0sVUFBVUgsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUMxQixPQUFJLE9BQU9ILElBQVAsSUFBZSxRQUFuQixFQUE2QjtBQUM1QixVQUFNLElBQUlLLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxVQUFPLFFBQU9OLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJDLElBQTFCO0FBQ0E7O0FBRUQsU0FBTyxvQkFBWU0sU0FBWjtBQUNMQyxRQURLLENBQ0csQ0FESDtBQUVMWCxNQUZLLENBRUMsRUFGRDtBQUdMWSxTQUhLLENBR0ksZUFISixFQUdxQixFQUhyQjtBQUlMTixPQUpLLENBSUVMLFlBSkY7QUFLTFksTUFMSyxDQUtDLFVBQUVULElBQUYsRUFBWSxDQUFFLE9BQVMsUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBNUIsQ0FBcUMsQ0FMcEQsQ0FBUDs7QUFPQSxFQWhCRCxNQWdCSztBQUNKLFNBQU9qQixRQUFTO0FBQ2YsYUFBWSxRQUFPZ0IsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlosTUFEaEI7QUFFZixhQUFZLFFBQU9ZLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJYLE1BRmhCO0FBR2YsY0FBYSxRQUFPVyxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CVixPQUhqQjtBQUlmLGVBQWMsUUFBT1UsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlQsUUFKbEI7QUFLZixhQUFZLFFBQU9TLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJSLE1BTGhCO0FBTWYsZ0JBQWUsUUFBT1EsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlAsU0FObkI7QUFPZixhQUFZLFFBQU9PLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJOLE1BUGhCO0FBUWYsa0JBQWlCTSxRQUFqQix1REFBaUJBLFFBQWpCLENBUmUsRUFBVCxDQUFQOztBQVVBO0FBQ0QsQ0E3RUQ7O0FBK0VBVyxPQUFPQyxPQUFQLEdBQWlCYixPQUFqQiIsImZpbGUiOiJwcm90eXBlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicGF0aFwiOiBcInByb3R5cGUvcHJvdHlwZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicHJvdHlwZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wcm90eXBlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicHJvdHlwZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdERldGVybWluZSB0eXBlIG9mIHByb3BlcnR5LlxuXG5cdFx0UGFzc2luZyBtdWx0aXBsZSB0eXBlIHdpbGwgZG8gdHJ5IHRvIG1hdGNoIGFueSBvbmUgb2YgaXQuXG5cblx0XHRQYXNzaW5nIGFwcGVuZGVkIHR5cGUgd2lsbCBkbyBuZWdhdGVkIGV2YWx1YXRpb24uXG5cdFx0XHRJdCBzaG91bGQgbm90IHBhc3MgYWxsIHR5cGUgZ2l2ZW4uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNlbWVudG9cIjogXCJjZW1lbnRvXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNlbWVudG8gPSByZXF1aXJlKCBcImNlbWVudG9cIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5oYXJkZW4oIFwiU1RSSU5HXCIsIFwic3RyaW5nXCIgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgXCJudW1iZXJcIiApO1xuaGFyZGVuKCBcIkJPT0xFQU5cIiwgXCJib29sZWFuXCIgKTtcbmhhcmRlbiggXCJGVU5DVElPTlwiLCBcImZ1bmN0aW9uXCIgKTtcbmhhcmRlbiggXCJPQkpFQ1RcIiwgXCJvYmplY3RcIiApO1xuaGFyZGVuKCBcIlVOREVGSU5FRFwiLCBcInVuZGVmaW5lZFwiICk7XG5oYXJkZW4oIFwiU1lNQk9MXCIsIFwic3ltYm9sXCIgKTtcblxuY29uc3QgVFlQRV9MSVNUID0gW1xuXHRTVFJJTkcsXG5cdE5VTUJFUixcblx0Qk9PTEVBTixcblx0RlVOQ1RJT04sXG5cdE9CSkVDVCxcblx0VU5ERUZJTkVELFxuXHRTWU1CT0xcbl07XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIHdpbGwgbGV0IHVzIGRldGVybWluZSBpZiB3ZSBjYW4gbWF0Y2ggdXNpbmcgQU5EIGNvbmRpdGlvbi5cblxuXHRcdFNpbmNlIGEgdmFsdWUgY2Fubm90IGJlIG9mIGJvdGggdHlwZSwgdGhpcyB3aWxsIGJlIHVzZWQgZm9yIHJldmVyc2VkIG5lZ2F0ZWQgZXZhbHVhdGlvbi5cblx0QGVuZC1ub3RlXG4qL1xuY29uc3QgU1RSSUNUX1RZUEVfUEFUVEVSTiA9IG5ldyBSZWdFeHAoIGBeKCR7IFRZUEVfTElTVC5qb2luKCBcInxcIiApIH0pezIsfSRgICk7XG5cbmNvbnN0IFRZUEVfUEFUVEVSTiA9IG5ldyBSZWdFeHAoIGAoJHsgVFlQRV9MSVNULmpvaW4oIFwifFwiICkgfSkoPyEuKlxcXFwxKWAsIFwiZ1wiICk7XG5cbmNvbnN0IHByb3R5cGUgPSBmdW5jdGlvbiBwcm90eXBlKCBwcm9wZXJ0eSwgdHlwZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInR5cGVcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE9CSkVDVCxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiLi4uXCIsXG5cdFx0XHRcdFx0QXJyYXlcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGUgJiYgdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiAmJiBTVFJJQ1RfVFlQRV9QQVRURVJOLnRlc3QoIHR5cGUgKSApe1xuXHRcdHR5cGUgPSB0eXBlLm1hdGNoKCBUWVBFX1BBVFRFUk4gKTtcblxuXHRcdGlmKCB0eXBlLmxlbmd0aCA+IDEgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRUaGlzIGlzIGEgcmV2ZXJzZWQgbmVnYXRlZCBmZWF0dXJlLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRyZXR1cm4gIXR5cGUuZXZlcnkoICggdHlwZSApID0+IHsgcmV0dXJuICggdHlwZW9mIHByb3BlcnR5ICE9IHR5cGUgKTsgfSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0eXBlXCIgKTtcblx0XHR9XG5cdH1cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA+IDEgJiZcblx0XHR0eXBlICE9PSBTVFJJTkcgJiZcblx0XHR0eXBlICE9PSBOVU1CRVIgJiZcblx0XHR0eXBlICE9PSBCT09MRUFOICYmXG5cdFx0dHlwZSAhPT0gRlVOQ1RJT04gJiZcblx0XHR0eXBlICE9PSBPQkpFQ1QgJiZcblx0XHR0eXBlICE9PSBVTkRFRklORUQgJiZcblx0XHR0eXBlICE9PSBTWU1CT0wgKVxuXHR7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdHlwZVwiICk7XG5cdH1cblxuXHRpZiggdHlwZSApe1xuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGlmKCB0eXBlb2YgdHlwZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHR5cGVcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHByb3BlcnR5ID09IHR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIGFyZ3VtZW50cyApXG5cdFx0XHQuc3BsaWNlKCAxIClcblx0XHRcdC5qb2luKCBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCAvXFxbfFxcXXxcXHMrfFxcLC9nLCBcIlwiIClcblx0XHRcdC5tYXRjaCggVFlQRV9QQVRURVJOIClcblx0XHRcdC5zb21lKCAoIHR5cGUgKSA9PiB7IHJldHVybiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSB0eXBlICk7IH0gKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gY2VtZW50bygge1xuXHRcdFx0XCJTVFJJTkdcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gU1RSSU5HICksXG5cdFx0XHRcIk5VTUJFUlwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBOVU1CRVIgKSxcblx0XHRcdFwiQk9PTEVBTlwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBCT09MRUFOICksXG5cdFx0XHRcIkZVTkNUSU9OXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IEZVTkNUSU9OICksXG5cdFx0XHRcIk9CSkVDVFwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBPQkpFQ1QgKSxcblx0XHRcdFwiVU5ERUZJTkVEXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IFVOREVGSU5FRCApLFxuXHRcdFx0XCJTWU1CT0xcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gU1lNQk9MICksXG5cdFx0XHRcInR5cGVcIjogKCB0eXBlb2YgcHJvcGVydHkgKVxuXHRcdH0gKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm90eXBlO1xuIl19
//# sourceMappingURL=protype.support.js.map
