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
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("protype", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`protype( undefined, UNDEFINED )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(undefined, UNDEFINED);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( NaN, NUMBER )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(NaN, NUMBER);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( '', NUMBER + STRING )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype("", NUMBER + STRING);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( 'hello', STRING )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype("hello", STRING);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( false, STRING, 'yeah', BOOLEAN )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(false, STRING, "yeah", BOOLEAN);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( true, STRING + NUMBER + BOOLEAN )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(true, STRING + NUMBER + BOOLEAN);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( 123, NUMBER )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(123, NUMBER);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( function hello( ){ }, FUNCTION )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(function hello() {}, FUNCTION);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( Symbol.for( 'hello' ), SYMBOL )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => protype( Symbol.for( "hello" ), SYMBOL ) );
   			assert.equal( result.value, true );
   			//: @end-ignore
		});
	});


	describe("`protype( null, OBJECT )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(null, OBJECT);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( [ ], OBJECT )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype([], OBJECT);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( null, UNDEFINED )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(null, UNDEFINED);});
			assert.equal(result.value, false);

		});
	});


	describe("`protype( true, STRING + NUMBER + OBJECT )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(true, STRING + NUMBER + OBJECT);});
			assert.equal(result.value, false);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInByb3R5cGUiLCJ1bmRlZmluZWQiLCJVTkRFRklORUQiLCJlcXVhbCIsInZhbHVlIiwiTmFOIiwiTlVNQkVSIiwiU1RSSU5HIiwiQk9PTEVBTiIsImhlbGxvIiwiRlVOQ1RJT04iLCJPQkpFQ1QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7OztBQVNBOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0IsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxRQUFTQyxTQUFULEVBQW9CQyxTQUFwQixDQUFQLEVBQWxDLENBQWI7QUFDQWQsVUFBT2UsS0FBUCxDQUFjUCxPQUFPUSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7O0FBVUFiLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxRQUFTSyxH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O1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwcm90eXBlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wcm90eXBlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcInByb3R5cGVcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHVuZGVmaW5lZCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggdW5kZWZpbmVkLCBVTkRFRklORUQgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIE5hTiwgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggTmFOLCBOVU1CRVIgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICcnLCBOVU1CRVIgKyBTVFJJTkcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBcIlwiLCBOVU1CRVIgKyBTVFJJTkcgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICdoZWxsbycsIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIFwiaGVsbG9cIiwgU1RSSU5HICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCAneWVhaCcsIEJPT0xFQU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCBcInllYWhcIiwgQk9PTEVBTiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdHJ1ZSwgU1RSSU5HICsgTlVNQkVSICsgQk9PTEVBTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIHRydWUsIFNUUklORyArIE5VTUJFUiArIEJPT0xFQU4gKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIDEyMywgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggMTIzLCBOVU1CRVIgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggU3ltYm9sLmZvciggJ2hlbGxvJyApLCBTWU1CT0wgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIFNZTUJPTCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIG51bGwsIE9CSkVDVCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIG51bGwsIE9CSkVDVCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggWyBdLCBPQkpFQ1QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBbIF0sIE9CSkVDVCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIG51bGwsIFVOREVGSU5FRCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHRydWUsIFNUUklORyArIE5VTUJFUiArIE9CSkVDVCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
