/**
 * //@by_rcmonitor@//
 * on 27.08.2015.
 */

require('chai').should();

describe('prototypical behaviour test', function(){

	describe('prototype', function(){

		it('should allow to change base object`s behaviour', function(){

			Array.prototype.double = function(){

				console.log(this);

				var context = this;
				context = this.concat(this);

				console.log(this);

				return context;
			};

			var arTest = [1, 2, 3, 4, 5];
			var arExpected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

			var arResult = arTest.double();

			arResult.should.be.an('array');
			arResult.should.be.deep.equal(arExpected);
		})
	})
});
