"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"repository": "https://github.com/volkovasystems/protype.git",
			"test": "protype-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Determine type of property.
	@end-module-documentation

	@include:
		{
			"cemento": "cemento",
			"harden": "harden"
		}
	@end-include
*/

if( typeof require == "function" ){
	var cemento = require( "cemento" );
	var harden = require( "harden" );
}

if( typeof window != "undefined" && !( "cemento" in window ) ){
	throw new Error( "cemento is not defined" );
}

if( typeof window != "undefined" && !( "harden" in window ) ){
	throw new Error( "harden is not defined" );
}

harden( "STRING", "string" );
harden( "NUMBER", "number" );
harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "OBJECT", "object" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

var protype = function protype( property, type ){
	/*;
		@meta-configuration:
			{
				"property:required": "*",
				"type": [
					STRING,
					NUMBER,
					BOOLEAN,
					FUNCTION,
					OBJECT,
					UNDEFINED,
					SYMBOL
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
		return ( typeof property == type );

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

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = protype;
}
