"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "protype",
              			"path": "protype/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/protype.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"protype": "protype"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var protype = require("./protype.support.js");
//: @end-client







//: @client:

describe("protype", function () {


	describe("`protype( undefined, UNDEFINED )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(undefined, UNDEFINED), true);

		});
	});


	describe("`protype( NaN, NUMBER )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(NaN, NUMBER), true);

		});
	});

	describe("`protype( Infinity, NUMBER )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(Infinity, NUMBER), true);

		});
	});


	describe("`protype( '', NUMBER + STRING )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype("", NUMBER + STRING), true);

		});
	});


	describe("`protype( 'hello', STRING )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype("hello", STRING), true);

		});
	});


	describe("`protype( false, STRING, 'yeah', BOOLEAN )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(false, STRING, "yeah", BOOLEAN), true);

		});
	});


	describe("`protype( true, STRING + NUMBER + BOOLEAN )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(true, STRING + NUMBER + BOOLEAN), true);

		});
	});


	describe("`protype( 123, NUMBER )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(123, NUMBER), true);

		});
	});


	describe("`protype( function hello( ){ }, FUNCTION )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(function hello() {}, FUNCTION), true);

		});
	});


	describe("`protype( Symbol.for( 'hello' ), SYMBOL )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype((0, _for2.default)("hello"), SYMBOL), true);

		});
	});


	describe("`protype( null, OBJECT )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype(null, OBJECT), true);

		});
	});


	describe("`protype( [ ], OBJECT )`", function () {
		it("should be equal to true", function () {

			assert.equal(protype([], OBJECT), true);

		});
	});


	describe("`protype( null, UNDEFINED )`", function () {
		it("should be equal to false", function () {

			assert.equal(protype(null, UNDEFINED), false);

		});
	});


	describe("`protype( true, STRING + NUMBER + OBJECT )`", function () {
		it("should be equal to false", function () {

			assert.equal(protype(true, STRING + NUMBER + OBJECT), false);

		});
	});

	describe("`protype( 'hello' )`", function () {
		it("should contain 'STRING' property with a value of true", function () {
			var result = protype("hello");

			assert.equal(result.STRING, true);

			assert.equal(result.type, "string");

		});
	});

	describe("`protype( 1 )`", function () {
		it("should contain 'NUMBER' property with a value of true", function () {
			var result = protype(1);

			assert.equal(result.NUMBER, true);

			assert.equal(result.type, "number");

		});
	});

	describe("`protype( Infinity )`", function () {
		it("should be equal to true", function () {
			var result = protype(Infinity);

			assert.equal(result.NUMBER, true);

			assert.equal(result.type, "number");

		});
	});

	describe("`protype( NaN )`", function () {
		it("should contain 'NUMBER' property with a value of true", function () {
			var result = protype(NaN);

			assert.equal(result.NUMBER, true);

		});
	});

	describe("`protype( true )`", function () {
		it("should contain 'BOOLEAN' property with a value of true", function () {
			var result = protype(true);

			assert.equal(result.BOOLEAN, true);

			assert.equal(result.type, "boolean");

		});
	});

	describe("`protype( [ ] )`", function () {
		it("should contain 'OBJECT' property with a value of true", function () {
			var result = protype([]);

			assert.equal(result.OBJECT, true);

			assert.equal(result.type, "object");

		});
	});

	describe("`protype( { } )`", function () {
		it("should contain 'OBJECT' property with a value of true", function () {
			var result = protype({});

			assert.equal(result.OBJECT, true);

			assert.equal(result.type, "object");

		});
	});

	describe("`protype( null )`", function () {
		it("should contain 'OBJECT' property with a value of true", function () {
			var result = protype(null);

			assert.equal(result.OBJECT, true);

			assert.equal(result.type, "object");

		});
	});

	describe("`protype( Symbol.for( 'hello' ) )`", function () {
		it("should contain 'SYMBOL' property with a value of true", function () {
			var result = protype((0, _for2.default)("hello"));

			assert.equal(result.SYMBOL, true);

			assert.equal(result.type, "symbol");

		});
	});

	describe("`protype( function hello( ){ } )`", function () {
		it("should contain 'FUNCTION' property with a value of true", function () {
			var result = protype(function hello() {});

			assert.equal(result.FUNCTION, true);

			assert.equal(result.type, "function");

		});
	});

	describe("`protype( undefined )`", function () {
		it("should contain 'UNDEFINED' property with a value of true", function () {
			var result = protype(undefined);

			assert.equal(result.UNDEFINED, true);

			assert.equal(result.type, "undefined");

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicHJvdHlwZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsIlVOREVGSU5FRCIsIk5hTiIsIk5VTUJFUiIsIkluZmluaXR5IiwiU1RSSU5HIiwiQk9PTEVBTiIsImhlbGxvIiwiRlVOQ1RJT04iLCJTWU1CT0wiLCJPQkpFQ1QiLCJyZXN1bHQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87OztBQUczQkEsVUFBVSxtQ0FBVixFQUErQyxZQUFPO0FBQ3JEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILFFBQVNJLFNBQVQsRUFBb0JDLFNBQXBCLENBQWQsRUFBK0MsSUFBL0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBU00sR0FBVCxFQUFjQyxNQUFkLENBQWQsRUFBc0MsSUFBdEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFOLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTUSxRQUFULEVBQW1CRCxNQUFuQixDQUFkLEVBQTJDLElBQTNDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQU4sVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxL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OztBQUVBYixVQUFPSyxLQUFQLENBQWNZLE9BQU9ILFFBQXJCLEVBQStCLElBQS9COztBQUVBZCxVQUFPSyxLQUFQLENBQWNZLE9BQU9DLElBQXJCLEVBQTJCLFVBQTNCOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBZixVQUFVLHdCQUFWLEVBQW9DLFlBQU87QUFDMUNDLEtBQUksMERBQUosRUFBZ0UsWUFBTztBQUN0RSxPQUFJYSxTQUFTZixRQUFTSSxTQUFULENBQWI7O0FBRUFOLFVBQU9LLEtBQVAsQ0FBY1ksT0FBT1YsU0FBckIsRUFBZ0MsSUFBaEM7O0FBRUFQLFVBQU9LLEtBQVAsQ0FBY1ksT0FBT0MsSUFBckIsRUFBMkIsV0FBM0I7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0EsQ0F0UEQ7O0FBd1BBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicHJvdHlwZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHJvdHlwZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcIi4vcHJvdHlwZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwicHJvdHlwZVwiLCAoICkgPT4ge1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHVuZGVmaW5lZCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCB1bmRlZmluZWQsIFVOREVGSU5FRCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBOYU4sIE5VTUJFUiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggTmFOLCBOVU1CRVIgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIEluZmluaXR5LCBOVU1CRVIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIEluZmluaXR5LCBOVU1CRVIgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggJycsIE5VTUJFUiArIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggXCJcIiwgTlVNQkVSICsgU1RSSU5HICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICdoZWxsbycsIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggXCJoZWxsb1wiLCBTVFJJTkcgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggZmFsc2UsIFNUUklORywgJ3llYWgnLCBCT09MRUFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCBcInllYWhcIiwgQk9PTEVBTiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBCT09MRUFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBCT09MRUFOICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIDEyMywgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCAxMjMsIE5VTUJFUiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSwgRlVOQ1RJT04gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIFNZTUJPTCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIFNZTUJPTCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBudWxsLCBPQkpFQ1QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIG51bGwsIE9CSkVDVCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBbIF0sIE9CSkVDVCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggWyBdLCBPQkpFQ1QgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ1NUUklORycgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBcImhlbGxvXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQuU1RSSU5HLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnR5cGUsIFwic3RyaW5nXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCAxIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ05VTUJFUicgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCAxICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0Lk5VTUJFUiwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50eXBlLCBcIm51bWJlclwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIEluZmluaXR5ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0Lk5VTUJFUiwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50eXBlLCBcIm51bWJlclwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ05VTUJFUicgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBOYU4gKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQuTlVNQkVSLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdCT09MRUFOJyBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQuQk9PTEVBTiwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50eXBlLCBcImJvb2xlYW5cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIFsgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdPQkpFQ1QnIHByb3BlcnR5IHdpdGggYSB2YWx1ZSBvZiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gcHJvdHlwZSggWyBdICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0Lk9CSkVDVCwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50eXBlLCBcIm9iamVjdFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ09CSkVDVCcgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCB7IH0gKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQuT0JKRUNULCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnR5cGUsIFwib2JqZWN0XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ09CSkVDVCcgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBudWxsICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0Lk9CSkVDVCwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50eXBlLCBcIm9iamVjdFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ1NZTUJPTCcgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC5TWU1CT0wsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudHlwZSwgXCJzeW1ib2xcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ0ZVTkNUSU9OJyBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LkZVTkNUSU9OLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnR5cGUsIFwiZnVuY3Rpb25cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdVTkRFRklORUQnIHByb3BlcnR5IHdpdGggYSB2YWx1ZSBvZiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gcHJvdHlwZSggdW5kZWZpbmVkICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LlVOREVGSU5FRCwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50eXBlLCBcInVuZGVmaW5lZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
