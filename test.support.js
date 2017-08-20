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
              			"assert": "should",
              			"protype": "protype"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



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

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicHJvdHlwZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsIlVOREVGSU5FRCIsIk5hTiIsIk5VTUJFUiIsIlNUUklORyIsIkJPT0xFQU4iLCJoZWxsbyIsIkZVTkNUSU9OIiwiU1lNQk9MIiwiT0JKRUNUIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7O0FBRzNCQSxVQUFVLG1DQUFWLEVBQStDLFlBQU87QUFDckRDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBU0ksU0FBVCxFQUFvQkMsU0FBcEIsQ0FBZCxFQUErQyxJQUEvQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FKLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTTSxHQUFULEVBQWNDLE1BQWQsQ0FBZCxFQUFzQyxJQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FOLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsRUFBYU8sU0FBU0MsTUFBdEIsQ0FBZCxFQUE4QyxJQUE5Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FQLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLE9BQVQsRUFBa0JRLE1BQWxCLENBQWQsRUFBMEMsSUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBUCxVQUFVLDZDQUFWLEVBQXlELFlBQU87QUFDL0RDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxLQUFULEVBQWdCUSxNQUFoQixFQUF3QixNQUF4QixFQUFnQ0MsT0FBaEMsQ0FBZCxFQUF5RCxJQUF6RDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FSLFVBQVUsOENBQVYsRUFBMEQsWUFBTztBQUNoRUMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsRUFBZVEsU0FBU0QsTUFBVCxHQUFrQkUsT0FBakMsQ0FBZCxFQUEwRCxJQUExRDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FSLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEdBQVQsRUFBY08sTUFBZCxDQUFkLEVBQXNDLElBQXRDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQU4sVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9EQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsU0FBU1UsS0FBVCxHQUFpQixDQUFHLENBQTdCLEVBQStCQyxRQUEvQixDQUFkLEVBQXlELElBQXpEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQVYsVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsbUJBQVksT0FBWixDQUFULEVBQWdDWSxNQUFoQyxDQUFkLEVBQXdELElBQXhEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQVgsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsSUFBVCxFQUFlYSxNQUFmLENBQWQsRUFBdUMsSUFBdkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBWixVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFULEVBQWNhLE1BQWQsQ0FBZCxFQUFzQyxJQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FaLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsRUFBZUssU0FBZixDQUFkLEVBQTBDLEtBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUosVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9EQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsSUFBVCxFQUFlUSxTQUFTRCxNQUFULEdBQWtCTSxNQUFqQyxDQUFkLEVBQXlELEtBQXpEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBdkhEOztBQXlIQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHJvdHlwZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJwcm90eXBlL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wcm90eXBlLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwiLi9wcm90eXBlLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwicHJvdHlwZVwiLCAoICkgPT4ge1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHVuZGVmaW5lZCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCB1bmRlZmluZWQsIFVOREVGSU5FRCApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBOYU4sIE5VTUJFUiApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggTmFOLCBOVU1CRVIgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggJycsIE5VTUJFUiArIFNUUklORyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggXCJcIiwgTlVNQkVSICsgU1RSSU5HICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICdoZWxsbycsIFNUUklORyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggXCJoZWxsb1wiLCBTVFJJTkcgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggZmFsc2UsIFNUUklORywgJ3llYWgnLCBCT09MRUFOIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCBcInllYWhcIiwgQk9PTEVBTiApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBCT09MRUFOIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBCT09MRUFOICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIDEyMywgTlVNQkVSIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCAxMjMsIE5VTUJFUiApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSwgRlVOQ1RJT04gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIFNZTUJPTCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIFNZTUJPTCApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBudWxsLCBPQkpFQ1QgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIG51bGwsIE9CSkVDVCApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBbIF0sIE9CSkVDVCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggWyBdLCBPQkpFQ1QgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEICksIGZhbHNlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
