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

const assert = require( "should/as-function" );

//: @server:
const protype = require( "./protype.js" );
//: @end-server






//: @server:

describe( "protype", ( ) => {


	describe( "`protype( undefined, UNDEFINED )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( undefined, UNDEFINED ), true );

		} );
	} );


	describe( "`protype( NaN, NUMBER )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( NaN, NUMBER ), true );

		} );
	} );

	describe( "`protype( Infinity, NUMBER )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( Infinity, NUMBER ), true );

		} );
	} );


	describe( "`protype( '', NUMBER + STRING )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( "", NUMBER + STRING ), true );

		} );
	} );


	describe( "`protype( 'hello', STRING )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( "hello", STRING ), true );

		} );
	} );


	describe( "`protype( false, STRING, 'yeah', BOOLEAN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( false, STRING, "yeah", BOOLEAN ), true );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + BOOLEAN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( true, STRING + NUMBER + BOOLEAN ), true );

		} );
	} );


	describe( "`protype( 123, NUMBER )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( 123, NUMBER ), true );

		} );
	} );


	describe( "`protype( function hello( ){ }, FUNCTION )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( function hello( ){ }, FUNCTION ), true );

		} );
	} );


	describe( "`protype( Symbol.for( 'hello' ), SYMBOL )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( Symbol.for( "hello" ), SYMBOL ), true );

		} );
	} );


	describe( "`protype( null, OBJECT )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( null, OBJECT ), true );

		} );
	} );


	describe( "`protype( [ ], OBJECT )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( protype( [ ], OBJECT ), true );

		} );
	} );


	describe( "`protype( null, UNDEFINED )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( protype( null, UNDEFINED ), false );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + OBJECT )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( protype( true, STRING + NUMBER + OBJECT ), false );

		} );
	} );

	describe( "`protype( 'hello' )`", ( ) => {
		it( "should contain 'STRING' property with a value of true", ( ) => {
			let result = protype( "hello" );

			assert.equal( result.STRING, true );

			assert.equal( result.type, "string" );

		} );
	} );

	describe( "`protype( 1 )`", ( ) => {
		it( "should contain 'NUMBER' property with a value of true", ( ) => {
			let result = protype( 1 );

			assert.equal( result.NUMBER, true );

			assert.equal( result.type, "number" );

		} );
	} );

	describe( "`protype( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = protype( Infinity );

			assert.equal( result.NUMBER, true );

			assert.equal( result.type, "number" );

		} );
	} );

	describe( "`protype( NaN )`", ( ) => {
		it( "should contain 'NUMBER' property with a value of true", ( ) => {
			let result = protype( NaN );

			assert.equal( result.NUMBER, true );

		} );
	} );

	describe( "`protype( true )`", ( ) => {
		it( "should contain 'BOOLEAN' property with a value of true", ( ) => {
			let result = protype( true );

			assert.equal( result.BOOLEAN, true );

			assert.equal( result.type, "boolean" );

		} );
	} );

	describe( "`protype( [ ] )`", ( ) => {
		it( "should contain 'OBJECT' property with a value of true", ( ) => {
			let result = protype( [ ] );

			assert.equal( result.OBJECT, true );

			assert.equal( result.type, "object" );

		} );
	} );

	describe( "`protype( { } )`", ( ) => {
		it( "should contain 'OBJECT' property with a value of true", ( ) => {
			let result = protype( { } );

			assert.equal( result.OBJECT, true );

			assert.equal( result.type, "object" );

		} );
	} );

	describe( "`protype( null )`", ( ) => {
		it( "should contain 'OBJECT' property with a value of true", ( ) => {
			let result = protype( null );

			assert.equal( result.OBJECT, true );

			assert.equal( result.type, "object" );

		} );
	} );

	describe( "`protype( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should contain 'SYMBOL' property with a value of true", ( ) => {
			let result = protype( Symbol.for( "hello" ) );

			assert.equal( result.SYMBOL, true );

			assert.equal( result.type, "symbol" );

		} );
	} );

	describe( "`protype( function hello( ){ } )`", ( ) => {
		it( "should contain 'FUNCTION' property with a value of true", ( ) => {
			let result = protype( function hello( ){ } );

			assert.equal( result.FUNCTION, true );

			assert.equal( result.type, "function" );

		} );
	} );

	describe( "`protype( undefined )`", ( ) => {
		it( "should contain 'UNDEFINED' property with a value of true", ( ) => {
			let result = protype( undefined );

			assert.equal( result.UNDEFINED, true );

			assert.equal( result.type, "undefined" );

		} );
	} );

} );

//: @end-server






