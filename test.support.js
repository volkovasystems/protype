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
		it("should return true", function () {

			assert.equal(protype(undefined, UNDEFINED), true);

		});
	});


	describe("`protype( NaN, NUMBER )`", function () {
		it("should return true", function () {

			assert.equal(protype(NaN, NUMBER), true);

		});
	});


	describe("`protype( '', NUMBER + STRING )`", function () {
		it("should return true", function () {

			assert.equal(protype("", NUMBER + STRING), true);

		});
	});


	describe("`protype( 'hello', STRING )`", function () {
		it("should return true", function () {

			assert.equal(protype("hello", STRING), true);

		});
	});


	describe("`protype( false, STRING, 'yeah', BOOLEAN )`", function () {
		it("should return true", function () {

			assert.equal(protype(false, STRING, "yeah", BOOLEAN), true);

		});
	});


	describe("`protype( true, STRING + NUMBER + BOOLEAN )`", function () {
		it("should return true", function () {

			assert.equal(protype(true, STRING + NUMBER + BOOLEAN), true);

		});
	});


	describe("`protype( 123, NUMBER )`", function () {
		it("should return true", function () {

			assert.equal(protype(123, NUMBER), true);

		});
	});


	describe("`protype( function hello( ){ }, FUNCTION )`", function () {
		it("should return true", function () {

			assert.equal(protype(function hello() {}, FUNCTION), true);

		});
	});


	describe("`protype( Symbol.for( 'hello' ), SYMBOL )`", function () {
		it("should return true", function () {

			assert.equal(protype((0, _for2.default)("hello"), SYMBOL), true);

		});
	});


	describe("`protype( null, OBJECT )`", function () {
		it("should return true", function () {

			assert.equal(protype(null, OBJECT), true);

		});
	});


	describe("`protype( [ ], OBJECT )`", function () {
		it("should return true", function () {

			assert.equal(protype([], OBJECT), true);

		});
	});


	describe("`protype( null, UNDEFINED )`", function () {
		it("should return false", function () {

			assert.equal(protype(null, UNDEFINED), false);

		});
	});


	describe("`protype( true, STRING + NUMBER + OBJECT )`", function () {
		it("should return false", function () {

			assert.equal(protype(true, STRING + NUMBER + OBJECT), false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicHJvdHlwZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsIlVOREVGSU5FRCIsIk5hTiIsIk5VTUJFUiIsIlNUUklORyIsIkJPT0xFQU4iLCJoZWxsbyIsIkZVTkNUSU9OIiwiU1lNQk9MIiwiT0JKRUNUIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7O0FBRzNCQSxVQUFVLG1DQUFWLEVBQStDLFlBQU87QUFDckRDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBU0ksU0FBVCxFQUFvQkMsU0FBcEIsQ0FBZCxFQUErQyxJQUEvQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FKLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTTSxHQUFULEVBQWNDLE1BQWQsQ0FBZCxFQUFzQyxJQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FOLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsRUFBYU8sU0FBU0MsTUFBdEIsQ0FBZCxFQUE4QyxJQUE5Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FQLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLE9BQVQsRUFBa0JRLE1BQWxCLENBQWQsRUFBMEMsSUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBUCxVQUFVLDZDQUFWLEVBQXlELFlBQU87QUFDL0RDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxLQUFULEVBQWdCUSxNQUFoQixFQUF3QixNQUF4QixFQUFnQ0MsT0FBaEMsQ0FBZCxFQUF5RCxJQUF6RDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FSLFVBQVUsOENBQVYsRUFBMEQsWUFBTztBQUNoRUMsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsRUFBZVEsU0FBU0QsTUFBVCxHQUFrQkUsT0FBakMsQ0FBZCxFQUEwRCxJQUExRDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FSLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEdBQVQsRUFBY08sTUFBZCxDQUFkLEVBQXNDLElBQXRDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQU4sVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9EQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsU0FBU1UsS0FBVCxHQUFpQixDQUFHLENBQTdCLEVBQStCQyxRQUEvQixDQUFkLEVBQXlELElBQXpEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQVYsVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlEQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsbUJBQVksT0FBWixDQUFULEVBQWdDWSxNQUFoQyxDQUFkLEVBQXdELElBQXhEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQVgsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsSUFBVCxFQUFlYSxNQUFmLENBQWQsRUFBdUMsSUFBdkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBWixVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFULEVBQWNhLE1BQWQsQ0FBZCxFQUFzQyxJQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FaLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSxxQkFBSixFQUEyQixZQUFPOztBQUVqQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsRUFBZUssU0FBZixDQUFkLEVBQTBDLEtBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUosVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9EQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWpDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsSUFBVCxFQUFlUSxTQUFTRCxNQUFULEdBQWtCTSxNQUFqQyxDQUFkLEVBQXlELEtBQXpEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBdkhEOztBQXlIQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicGF0aFwiOiBcInByb3R5cGUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Byb3R5cGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCIuL3Byb3R5cGUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInByb3R5cGVcIiwgKCApID0+IHtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB1bmRlZmluZWQsIFVOREVGSU5FRCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIHVuZGVmaW5lZCwgVU5ERUZJTkVEICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIE5hTiwgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggTmFOLCBOVU1CRVIgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggJycsIE5VTUJFUiArIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIFwiXCIsIE5VTUJFUiArIFNUUklORyApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCAnaGVsbG8nLCBTVFJJTkcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCBcImhlbGxvXCIsIFNUUklORyApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCAneWVhaCcsIEJPT0xFQU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCBcInllYWhcIiwgQk9PTEVBTiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBCT09MRUFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggdHJ1ZSwgU1RSSU5HICsgTlVNQkVSICsgQk9PTEVBTiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCAxMjMsIE5VTUJFUiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIDEyMywgTlVNQkVSICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIFNZTUJPTCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCBTWU1CT0wgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggbnVsbCwgT0JKRUNUICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIFsgXSwgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcHJvdHlwZSggWyBdLCBPQkpFQ1QgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIG51bGwsIFVOREVGSU5FRCApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdHJ1ZSwgU1RSSU5HICsgTlVNQkVSICsgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHByb3R5cGUoIHRydWUsIFNUUklORyArIE5VTUJFUiArIE9CSkVDVCApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
