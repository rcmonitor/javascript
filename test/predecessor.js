/**
 * //@by_rcmonitor@//
 * on 04.08.2015.
 */

var Predecessor = require('../app/predecessor');

describe('inheritance test', function(){

	describe('direct property set', function(){
		it('should set property directly', function(){
			var oPredecessor = new Predecessor();
			var property = oPredecessor.setSome();

			property.should.be.a('number');
			property.should.equals(18);
		})
	})
});