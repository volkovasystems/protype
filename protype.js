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

const cemento = require( "cemento" );
const harden = require( "harden" );

//: @support-module:
	//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)});
//: @end-support-module

//: @support-module:
	//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
	Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){
	return"function"==typeof n||"[object Function]"===r.call(n)},t=function(r){var n=Number(r);
	return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},
	e=Math.pow(2,53)-1,o=function(r){var n=t(r);return Math.min(Math.max(n,0),e)};
	return function(r){var t=this,e=Object(r);
	if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");
	var a,u=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof u){
	if(!n(u))throw new TypeError("Array.from: when provided, the second argument must be a function");
	arguments.length>2&&(a=arguments[2])}for(var i,f=o(e.length),c=n(t)?
	Object(new t(f)):new Array(f),h=0;f>h;)i=e[h],
	u?c[h]="undefined"==typeof a?u(i,h):u.call(a,i,h):c[h]=i,h+=1;return c.length=f,c}}());
//: @end-support-module

//; @support-module:
	//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	Array.prototype.some=Array.prototype.some||function(evaluator,thisArg){"use strict";
	if(!this)throw new TypeError("Array.prototype.some called on null or undefined");
	if("function"!=typeof evaluator){if("string"!=typeof evaluator)throw new TypeError;
	if(!(evaluator=eval(evaluator)))throw new TypeError}var i;
	if(void 0===thisArg){for(i in this)if(evaluator(this[i],i,this))return!0;return!1}
	for(i in this)if(evaluator.call(thisArg,this[i],i,this))return!0;return!1};
//; @end-support-module

//: @support-module:
	//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	Array.prototype.reduce||(Array.prototype.reduce=function(r){"use strict";
	if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");
	if("function"!=typeof r)throw new TypeError(r+" is not a function");
	var e,t=Object(this),n=t.length>>>0,o=0;if(2==arguments.length)e=arguments[1];
	else{for(;n>o&&!(o in t);)o++;if(o>=n)throw new TypeError("Reduce of empty array with no initial value");
	e=t[o++]}for(;n>o;o++)o in t&&(e=r(e,t[o],o,t));return e});
//: @end-support-module

harden( "STRING", "string" );
harden( "NUMBER", "number" );
harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "OBJECT", "object" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

const protype = function protype( property, type ){
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

	if( type &&
		typeof type == "string" &&
		type != STRING &&
		type != NUMBER &&
		type != BOOLEAN &&
		type != FUNCTION &&
		type != OBJECT &&
		type != UNDEFINED &&
		type != SYMBOL )
	{
		throw new Error( "invalid type" );
	}

	if( type ){
		if( arguments.length == 2 ){
			if( typeof type != "string" ){
				throw new Error( "invalid type" );
			}

			return typeof property == type;
		}

		let flatten = function flatten( current ){
			return current.reduce( ( previous, current ) => {
				let element = Array.isArray( current )? flatten( current ) : current;

				return previous.concat( element );
			}, [ ] );
		};

		return Array.from( arguments ).splice( 1 )
			.reduce( ( previous, current ) => {
				let element = Array.isArray( current )? flatten( current ) : current;

				return previous.concat( element );
			}, [ ] )
			.filter( ( type ) => { return ( typeof type == STRING ); } )
			.filter( ( type ) => {
				return ( type == STRING ||
					type == NUMBER ||
					type == BOOLEAN ||
					type == FUNCTION ||
					type == OBJECT ||
					type == UNDEFINED ||
					type == SYMBOL );
			} )
			.some( ( type ) => { return ( typeof property == type ); } );

	}else{
		return cemento( {
			"STRING": protype( property, STRING ),
			"NUMBER": protype( property, NUMBER ),
			"BOOLEAN": protype( property, BOOLEAN ),
			"FUNCTION": protype( property, FUNCTION ),
			"OBJECT": protype( property, OBJECT ),
			"UNDEFINED": protype( property, UNDEFINED ),
			"SYMBOL": protype( property, SYMBOL ),
			"type": ( typeof property )
		} );
	}
};

module.exports = protype;
