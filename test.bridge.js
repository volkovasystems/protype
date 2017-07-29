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

	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`protype( undefined, UNDEFINED )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(undefined, UNDEFINED);});
			assert.equal(result.value, true);

		});
	});

	describe("`protype( NaN, NUMBER )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(NaN, NUMBER);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( '', NUMBER + STRING )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype("", NUMBER + STRING);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( 'hello', STRING )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype("hello", STRING);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( false, STRING, 'yeah', BOOLEAN )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(false, STRING, "yeah", BOOLEAN);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( true, STRING + NUMBER + BOOLEAN )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(true, STRING + NUMBER + BOOLEAN);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( 123, NUMBER )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(123, NUMBER);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( function hello( ){ }, FUNCTION )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(function hello() {}, FUNCTION);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( Symbol.for( 'hello' ), SYMBOL )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => protype( Symbol( "hello" ), SYMBOL ) );
   			assert.equal( result.value, true );
   			//: @end-ignore
		});
	});


	describe("`protype( null, OBJECT )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(null, OBJECT);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( [ ], OBJECT )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype([], OBJECT);});
			assert.equal(result.value, true);

		});
	});


	describe("`protype( null, UNDEFINED )`", function () {
		it("should return false", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(null, UNDEFINED);});
			assert.equal(result.value, false);

		});
	});


	describe("`protype( true, STRING + NUMBER + OBJECT )`", function () {
		it("should return false", function () {

			var result = browser.url(bridgeURL).execute(function () {return protype(true, STRING + NUMBER + OBJECT);});
			assert.equal(result.value, false);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJwcm90eXBlIiwidW5kZWZpbmVkIiwiVU5ERUZJTkVEIiwiZXF1YWwiLCJ2YWx1ZSIsIk5hTiIsIk5VTUJFUiIsIlNUUklORyIsIkJPT0xFQU4iLCJoZWxsbyIsIkZVTkNUSU9OIiwiT0JKRUNUIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCLEtBQUlDLFlBQVlDLFNBQWhCO0FBQ0EsS0FBSUMsYUFBYUosS0FBS0ssT0FBTCxDQUFjSCxTQUFkLEVBQXlCLGFBQXpCLENBQWpCO0FBQ0EsS0FBSUksd0JBQXVCRixVQUEzQjs7QUFFQUgsVUFBVSxtQ0FBVixFQUErQyxZQUFPO0FBQ3JETSxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLFFBQVNDLFNBQVQsRUFBb0JDLFNBQXBCLENBQVAsRUFBbEMsQ0FBYjtBQUNBaEIsVUFBT2lCLEtBQVAsQ0FBY1AsT0FBT1EsS0FBckIsRUFBNEIsSUFBNUI7O0FBRUEsR0FMRDtBQU1BLEVBUEQ7O0FBU0FmLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q00sS0FBSSxvQkFBSixFQUEwQixZQUFPOztB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O0FBU0EsQ0F4SUQ7O0FBMElBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwcm90eXBlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wcm90eXBlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcInByb3R5cGVcIiwgKCApID0+IHtcblxuXHRsZXQgZGlyZWN0b3J5ID0gX19kaXJuYW1lO1xuXHRsZXQgdGVzdEJyaWRnZSA9IHBhdGgucmVzb2x2ZSggZGlyZWN0b3J5LCBcImJyaWRnZS5odG1sXCIgKTtcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgdGVzdEJyaWRnZSB9YDtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdW5kZWZpbmVkLCBVTkRFRklORUQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggdW5kZWZpbmVkLCBVTkRFRklORUQgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBOYU4sIE5VTUJFUiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBOYU4sIE5VTUJFUiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggJycsIE5VTUJFUiArIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBcIlwiLCBOVU1CRVIgKyBTVFJJTkcgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICdoZWxsbycsIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBcImhlbGxvXCIsIFNUUklORyApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggZmFsc2UsIFNUUklORywgJ3llYWgnLCBCT09MRUFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIGZhbHNlLCBTVFJJTkcsIFwieWVhaFwiLCBCT09MRUFOICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBCT09MRUFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIHRydWUsIFNUUklORyArIE5VTUJFUiArIEJPT0xFQU4gKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIDEyMywgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIDEyMywgTlVNQkVSICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSwgRlVOQ1RJT04gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggZnVuY3Rpb24gaGVsbG8oICl7IH0sIEZVTkNUSU9OICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIFNZTUJPTCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggU3ltYm9sKCBcImhlbGxvXCIgKSwgU1lNQk9MICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIG51bGwsIE9CSkVDVCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggWyBdLCBPQkpFQ1QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggWyBdLCBPQkpFQ1QgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIG51bGwsIFVOREVGSU5FRCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdHJ1ZSwgU1RSSU5HICsgTlVNQkVSICsgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
