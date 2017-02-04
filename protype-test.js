"use strict";

const protype = require( "./protype.js" );

console.log( protype( "hello", STRING ) );

console.log( protype( false, STRING, "yeah", BOOLEAN ) );

console.log( protype( "false", STRING + NUMBER + BOOLEAN ) );
