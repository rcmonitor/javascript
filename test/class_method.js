/**
 * //@by_rcmonitor@//
 * on 25.08.2015.
 */

require('chai').should();

function TestClass(){

}

TestClass.prototype.firstMethod = function(){
	console.log('first method');
	return 1;
};

TestClass.prototype.secondMethod = function(){
	console.log('second method');
	return 2;
};


TestClass.prototype.checkFunction = function(strMethodName, expectedValue){

	var boolMethodExists = this[strMethodName] ? true : false;

	boolMethodExists.should.be.a('boolean');
	boolMethodExists.should.be.true;

	var result = this[strMethodName]();
	result.should.equals(expectedValue);
};

describe('class methods test', function(){

	describe('method', function(){

		var oMetods = {
			"first": "firstMethod",
			"second": "secondMethod"
		};

		it('should be available via array access', function(){

			var oTestClass = new TestClass();

			var strPropertyName;
			var intOffset = 0;
			for(strPropertyName in oMetods){

				intOffset ++;

				oTestClass.checkFunction(oMetods[strPropertyName], intOffset);
			}
		})
	})
});
