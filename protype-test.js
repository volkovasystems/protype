"use strict";

const protype = require( "./protype.js" );

console.log( protype( "hello", STRING ) );

console.log( protype( false, STRING, "yeah", BOOLEAN ) );

console.log( protype( true, STRING + NUMBER + OBJECT ) );
console.log( protype( true, STRING + NUMBER + BOOLEAN ) );

console.log( require( "util" ).inspect( protype( { } ), { "showHidden": true } ) );

console.log( require( "util" ).inspect( protype( ), { "showHidden": true } ) );
