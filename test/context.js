/**
 * //@by_rcmonitor@//
 * on 28.08.2015.
 */

require('chai').should();

function SomeClass(){

	this.enumerableObject = {
		"first": 1,
		"second": "2",
		"third": "three"
	};

	this.testString = 'test';
}

SomeClass.prototype.doAnything = function(){

	var strPropertyName;

	for(strPropertyName in this.enumerableObject){
		this.testString += this.enumerableObject[strPropertyName];
	}
};


describe('context-related tests', function(){

	describe('class context', function(){

		var oSome = new SomeClass();

		it('should be available in for loop', function(){
			var strExpectedString = 'test12three';

			oSome.doAnything();

			oSome.testString.should.equals(strExpectedString);
		})
	})
});
