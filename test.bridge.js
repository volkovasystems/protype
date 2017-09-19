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
              */

var assert = require("should/as-function");





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


	describe("`protype( Infinity, NUMBER )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return protype( Infinity, NUMBER );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

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

	describe("`protype( 'hello' )`", function () {
		it("should contain 'STRING' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype("hello");
				var test = result.STRING == true &&
				result.type == "string";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( 1 )`", function () {
		it("should contain 'NUMBER' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype(1);
				var test = result.NUMBER == true &&
				result.type == "number";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( Infinity )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = protype( Infinity );
   					let test = result.NUMBER == true &&
   						result.type == "number";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`protype( NaN )`", function () {
		it("should contain 'NUMBER' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype(NaN);
				var test = result.NUMBER == true &&
				result.type == "number";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( true )`", function () {
		it("should contain 'BOOLEAN' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype(true);
				var test = result.BOOLEAN == true &&
				result.type == "boolean";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( [ ] )`", function () {
		it("should contain 'OBJECT' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype([]);
				var test = result.OBJECT == true &&
				result.type == "object";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( { } )`", function () {
		it("should contain 'OBJECT' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype({});
				var test = result.OBJECT == true &&
				result.type == "object";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( null )`", function () {
		it("should contain 'OBJECT' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype(null);
				var test = result.OBJECT == true &&
				result.type == "object";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( Symbol.for( 'hello' ) )`", function () {
		it("should contain 'SYMBOL' property with a value of true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = protype( Symbol.for( "hello" ) );
   					let test = result.SYMBOL == true &&
   						result.type == "symbol";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`protype( function hello( ){ } )`", function () {
		it("should contain 'FUNCTION' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype(function hello() {});
				var test = result.FUNCTION == true &&
				result.type == "function";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`protype( undefined )`", function () {
		it("should contain 'UNDEFINED' property with a value of true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				var result = protype(undefined);
				var test = result.UNDEFINED == true &&
				result.type == "undefined";

				return test;
			}).

			value;

			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInByb3R5cGUiLCJ1bmRlZmluZWQiLCJVTkRFRklORUQiLCJlcXVhbCIsInZhbHVlIiwiTmFOIiwiTlVNQkVSIiwiU1RSSU5HIiwiQk9PTEVBTiIsImhlbGxvIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJ0ZXN0IiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7OztBQVNBOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0IsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxRQUFTQyxTQUFULEVBQW9CQyxTQUFwQixDQUFQLEVBQWxDLENBQWI7QUFDQWQsVUFBT2UsS0FBUCxDQUFjUCxPQUFPUSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7O0FBVUFiLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJ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LEVBQStDLFlBQU87QUFDckRJLEtBQUkseURBQUosRUFBK0QsWUFBTztBQUNyRSxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixRQUFJSCxTQUFTSSxRQUFTLFNBQVNTLEtBQVQsR0FBaUIsQ0FBRyxDQUE3QixDQUFiO0FBQ0EsUUFBSUcsT0FBT2hCLE9BQU9jLFFBQVAsSUFBbUIsSUFBbkI7QUFDVmQsV0FBT2lCLElBQVAsSUFBZSxVQURoQjs7QUFHQSxXQUFPRCxJQUFQO0FBQ0EsSUFSVzs7QUFVWFIsUUFWRjs7QUFZQWhCLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWZEO0FBZ0JBLEVBakJEOztBQW1CQUwsVUFBVSx3QkFBVixFQUFvQyxZQUFPO0FBQzFDSSxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEUsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsUUFBSUgsU0FBU0ksUUFBU0MsU0FBVCxDQUFiO0FBQ0EsUUFBSVcsT0FBT2hCLE9BQU9NLFNBQVAsSUFBb0IsSUFBcEI7QUFDVk4sV0FBT2lCLElBQVAsSUFBZSxXQURoQjs7QUFHQSxXQUFPRCxJQUFQO0FBQ0EsSUFSVzs7QUFVWFIsUUFWRjs7QUFZQWhCLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWZEO0FBZ0JBLEVBakJEOztBQW1CQSxDQWpYRDs7QUFtWEEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicGF0aFwiOiBcInByb3R5cGUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Byb3R5cGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwicHJvdHlwZVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdW5kZWZpbmVkLCBVTkRFRklORUQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCB1bmRlZmluZWQsIFVOREVGSU5FRCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggSW5maW5pdHksIE5VTUJFUiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHByb3R5cGUoIEluZmluaXR5LCBOVU1CRVIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIE5hTiwgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggTmFOLCBOVU1CRVIgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICcnLCBOVU1CRVIgKyBTVFJJTkcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBcIlwiLCBOVU1CRVIgKyBTVFJJTkcgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoICdoZWxsbycsIFNUUklORyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIFwiaGVsbG9cIiwgU1RSSU5HICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCAneWVhaCcsIEJPT0xFQU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBmYWxzZSwgU1RSSU5HLCBcInllYWhcIiwgQk9PTEVBTiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdHJ1ZSwgU1RSSU5HICsgTlVNQkVSICsgQk9PTEVBTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIHRydWUsIFNUUklORyArIE5VTUJFUiArIEJPT0xFQU4gKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIDEyMywgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggMTIzLCBOVU1CRVIgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9LCBGVU5DVElPTiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggU3ltYm9sLmZvciggJ2hlbGxvJyApLCBTWU1CT0wgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcHJvdHlwZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIFNZTUJPTCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIG51bGwsIE9CSkVDVCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIG51bGwsIE9CSkVDVCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggWyBdLCBPQkpFQ1QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCBbIF0sIE9CSkVDVCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggbnVsbCwgVU5ERUZJTkVEIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHByb3R5cGUoIG51bGwsIFVOREVGSU5FRCApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHRydWUsIFNUUklORyArIE5VTUJFUiArIE9CSkVDVCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBwcm90eXBlKCB0cnVlLCBTVFJJTkcgKyBOVU1CRVIgKyBPQkpFQ1QgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdTVFJJTkcnIHByb3BlcnR5IHdpdGggYSB2YWx1ZSBvZiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIFwiaGVsbG9cIiApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmVzdWx0LlNUUklORyA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQudHlwZSA9PSBcInN0cmluZ1wiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCAxIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ05VTUJFUicgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gcHJvdHlwZSggMSApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmVzdWx0Lk5VTUJFUiA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQudHlwZSA9PSBcIm51bWJlclwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIEluZmluaXR5ICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSByZXN1bHQuTlVNQkVSID09IHRydWUgJiZcblx0XHRcdFx0XHRcdHJlc3VsdC50eXBlID09IFwibnVtYmVyXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnTlVNQkVSJyBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBOYU4gKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHJlc3VsdC5OVU1CRVIgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0cmVzdWx0LnR5cGUgPT0gXCJudW1iZXJcIjtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdCT09MRUFOJyBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCB0cnVlICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSByZXN1bHQuQk9PTEVBTiA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQudHlwZSA9PSBcImJvb2xlYW5cIjtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ09CSkVDVCcgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gcHJvdHlwZSggWyBdICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSByZXN1bHQuT0JKRUNUID09IHRydWUgJiZcblx0XHRcdFx0XHRcdHJlc3VsdC50eXBlID09IFwib2JqZWN0XCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3R5cGUoIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdPQkpFQ1QnIHByb3BlcnR5IHdpdGggYSB2YWx1ZSBvZiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIHsgfSApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmVzdWx0Lk9CSkVDVCA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQudHlwZSA9PSBcIm9iamVjdFwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ09CSkVDVCcgcHJvcGVydHkgd2l0aCBhIHZhbHVlIG9mIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gcHJvdHlwZSggbnVsbCApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmVzdWx0Lk9CSkVDVCA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQudHlwZSA9PSBcIm9iamVjdFwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnU1lNQk9MJyBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmVzdWx0LlNZTUJPTCA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQudHlwZSA9PSBcInN5bWJvbFwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvdHlwZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnRlVOQ1RJT04nIHByb3BlcnR5IHdpdGggYSB2YWx1ZSBvZiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IHByb3R5cGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSByZXN1bHQuRlVOQ1RJT04gPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0cmVzdWx0LnR5cGUgPT0gXCJmdW5jdGlvblwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm90eXBlKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnVU5ERUZJTkVEJyBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCB1bmRlZmluZWQgKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHJlc3VsdC5VTkRFRklORUQgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0cmVzdWx0LnR5cGUgPT0gXCJ1bmRlZmluZWRcIjtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
