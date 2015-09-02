/**
 * //@by_rcmonitor@//
 * on 27.08.2015.
 */

require('chai').should();
var expect = require('chai').expect;

describe('scope-related tests', function(){

	describe('function', function(){

		it('should change values defined higher in scope', function(){
			var intValue = 1;

			function any(){
				var	intValue = 3;
				var intMoarValue = 42;

			}

			intValue.should.equals(1);

			//expect(intMoarValue).to.be.undefined;
		})
	})
});