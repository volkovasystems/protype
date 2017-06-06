const assert = require( "assert" );
const protype = require( "./protype.js" );

let test1 = protype( );
assert.equal( test1[ "UNDEFINED" ], true, "should be true" );
assert.equal( protype( undefined, UNDEFINED ), true, "should be true" );
assert.equal( protype( 0, NUMBER ), true, "should be true" );
assert.equal( protype( NaN, NUMBER ), true, "should be true" );

assert.equal( protype( "", STRING ), true, "should be true" );
assert.equal( protype( "", NUMBER + STRING ), true, "should be true" );
assert.equal( protype( "hello", STRING ), true, "should be true" );
assert.equal( protype( false, STRING, "yeah", BOOLEAN ), true, "should be true" );
assert.equal( protype( true, STRING + NUMBER + BOOLEAN ), true, "should be true" );
assert.equal( protype( 123, NUMBER ), true, "should be true" );
assert.equal( protype( function hello( ){ }, FUNCTION ), true, "should be true" );
assert.equal( protype( Symbol.for( "hello" ), SYMBOL ), true, "should be true" );

assert.equal( protype( null, OBJECT ), true, "should be true" );
let test2 = protype( { } );
assert.equal( test2[ "OBJECT" ], true, "should be true" );
assert.equal( protype( [ ], OBJECT ), true, "should be true" );
assert.equal( protype( [ Object ], OBJECT ), true, "should be true" );
assert.equal( protype( new Date( ), OBJECT ), true, "should be true" );

assert.equal( protype( null, UNDEFINED ), false, "should be false" );
assert.equal( protype( true, STRING + NUMBER + OBJECT ), false, "should be false" );
assert.equal( protype( 123 + "a", NUMBER ), false, "should be false" );

console.log( "ok" );
