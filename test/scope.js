/**
 * //@by_rcmonitor@//
 * on 27.08.2015.
 */

require('chai').should();
var expect = require('chai').expect;

describe('scope-related tests', function(){

	describe('values defined higher in scope', function(){

		it('should not change if it is redeclared in function', function(){
			var intValue = 1;

			function any(){
				var	intValue = 3;
				var intMoarValue = 42;

			}

			any();

			intValue.should.equals(1);
		});

		it('should change if function uses it without inner declaration', function(){
			var intSomeValue = 1;

			function any(){
				intSomeValue = 18;
			}

			any();

			intSomeValue.should.equals(18);
		});

		it('should not change if declaration propagates from code block', function(){
			var intSomeValue = 2;

			function any(){
				intSomeValue = 3;

				if(false){
					var intSomeValue;
				}
			}

			any();

			intSomeValue.should.equals(2);
		})
	})
});