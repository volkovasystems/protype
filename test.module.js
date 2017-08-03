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

const assert = require( "should" );

//: @server:
const protype = require( "./protype.js" );
//: @end-server

//: @client:
const protype = require( "./protype.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "protype", ( ) => {


	describe( "`protype( undefined, UNDEFINED )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( undefined, UNDEFINED ), true );

		} );
	} );


	describe( "`protype( NaN, NUMBER )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( NaN, NUMBER ), true );

		} );
	} );


	describe( "`protype( '', NUMBER + STRING )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( "", NUMBER + STRING ), true );

		} );
	} );


	describe( "`protype( 'hello', STRING )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( "hello", STRING ), true );

		} );
	} );


	describe( "`protype( false, STRING, 'yeah', BOOLEAN )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( false, STRING, "yeah", BOOLEAN ), true );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + BOOLEAN )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( true, STRING + NUMBER + BOOLEAN ), true );

		} );
	} );


	describe( "`protype( 123, NUMBER )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( 123, NUMBER ), true );

		} );
	} );


	describe( "`protype( function hello( ){ }, FUNCTION )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( function hello( ){ }, FUNCTION ), true );

		} );
	} );


	describe( "`protype( Symbol.for( 'hello' ), SYMBOL )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( Symbol.for( "hello" ), SYMBOL ), true );

		} );
	} );


	describe( "`protype( null, OBJECT )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( null, OBJECT ), true );

		} );
	} );


	describe( "`protype( [ ], OBJECT )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( [ ], OBJECT ), true );

		} );
	} );


	describe( "`protype( null, UNDEFINED )`", ( ) => {
		it( "should return false", ( ) => {

			assert.equal( protype( null, UNDEFINED ), false );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + OBJECT )`", ( ) => {
		it( "should return false", ( ) => {

			assert.equal( protype( true, STRING + NUMBER + OBJECT ), false );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "protype", ( ) => {


	describe( "`protype( undefined, UNDEFINED )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( undefined, UNDEFINED ), true );

		} );
	} );


	describe( "`protype( NaN, NUMBER )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( NaN, NUMBER ), true );

		} );
	} );


	describe( "`protype( '', NUMBER + STRING )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( "", NUMBER + STRING ), true );

		} );
	} );


	describe( "`protype( 'hello', STRING )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( "hello", STRING ), true );

		} );
	} );


	describe( "`protype( false, STRING, 'yeah', BOOLEAN )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( false, STRING, "yeah", BOOLEAN ), true );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + BOOLEAN )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( true, STRING + NUMBER + BOOLEAN ), true );

		} );
	} );


	describe( "`protype( 123, NUMBER )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( 123, NUMBER ), true );

		} );
	} );


	describe( "`protype( function hello( ){ }, FUNCTION )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( function hello( ){ }, FUNCTION ), true );

		} );
	} );


	describe( "`protype( Symbol.for( 'hello' ), SYMBOL )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( Symbol.for( "hello" ), SYMBOL ), true );

		} );
	} );


	describe( "`protype( null, OBJECT )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( null, OBJECT ), true );

		} );
	} );


	describe( "`protype( [ ], OBJECT )`", ( ) => {
		it( "should return true", ( ) => {

			assert.equal( protype( [ ], OBJECT ), true );

		} );
	} );


	describe( "`protype( null, UNDEFINED )`", ( ) => {
		it( "should return false", ( ) => {

			assert.equal( protype( null, UNDEFINED ), false );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + OBJECT )`", ( ) => {
		it( "should return false", ( ) => {

			assert.equal( protype( true, STRING + NUMBER + OBJECT ), false );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "protype", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`protype( undefined, UNDEFINED )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( undefined, UNDEFINED ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( NaN, NUMBER )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( NaN, NUMBER ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( '', NUMBER + STRING )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( "", NUMBER + STRING ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( 'hello', STRING )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( "hello", STRING ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( false, STRING, 'yeah', BOOLEAN )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( false, STRING, "yeah", BOOLEAN ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + BOOLEAN )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( true, STRING + NUMBER + BOOLEAN ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( 123, NUMBER )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( 123, NUMBER ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( function hello( ){ }, FUNCTION )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( function hello( ){ }, FUNCTION ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( Symbol.for( 'hello' ), SYMBOL )`", ( ) => {
		it( "should return true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute( ( ) => protype( Symbol( "hello" ), SYMBOL ) );
			assert.equal( result.value, true );
			//: @end-ignore
		} );
	} );


	describe( "`protype( null, OBJECT )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( null, OBJECT ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( [ ], OBJECT )`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( [ ], OBJECT ) );
			assert.equal( result.value, true );

		} );
	} );


	describe( "`protype( null, UNDEFINED )`", ( ) => {
		it( "should return false", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( null, UNDEFINED ) );
			assert.equal( result.value, false );

		} );
	} );


	describe( "`protype( true, STRING + NUMBER + OBJECT )`", ( ) => {
		it( "should return false", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => protype( true, STRING + NUMBER + OBJECT ) );
			assert.equal( result.value, false );

		} );
	} );

} );

//: @end-bridge
