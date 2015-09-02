/**
 * //@by_rcmonitor@//
 * on 27.08.2015.
 */

require('chai').should();

describe('instance test', function(){

	describe('equated objects', function(){

		var object1, object2, object3;
		object1 = object2 = object3 = {};

		it('should be equals', function(){

			object1.should.equals(object2);
			object1.should.equals(object3);
			object2.should.equals(object3);
		});

		it('should refer to the same object', function(){
			object1.firstProp = 1;
			object2.secondProp = '2';
			object3.thirdProp = 'three';

			object3.should.have.property('firstProp', 1);
			object3.should.have.property('secondProp', '2');
			object3.should.have.property('thirdProp', 'three');
		})
	});

	describe('different objects', function(){

		var object1, object2, object3;
		object1 = {};
		object2 = {};
		object3 = {};

		it('should be different', function(){

			object1.should.not.equals(object2);
			object1.should.not.equals(object3);
			object2.should.not.equals(object3);
		})
	})
});
