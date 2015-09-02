/**
 * //@by_rcmonitor@//
 * on 24.08.2015.
 */

require('chai').should();

var isObjectEmpty = function(oObject){

	var strPropertyName;
	var boolReturn = true;

	for(strPropertyName in oObject){
		if(oObject.hasOwnProperty(strPropertyName)){
			return false;
		}
	}

	return boolReturn;
};

describe('javascript object behaviour', function(){

	describe('empty object', function(){

		var oEmpty = {};

		it('should be empty', function(){
			var boolEmpty = isObjectEmpty(oEmpty);
			boolEmpty.should.be.a('boolean');
			boolEmpty.should.be.true;
		})
	});

	describe('non-empty object', function(){

		var oFull = {
			"stringProp": "some damn string",
			"numericProp": 42
		};

		it('should not be empty', function(){
			var boolEmpty = isObjectEmpty(oFull);
			boolEmpty.should.be.a('boolean');
			boolEmpty.should.be.false;
		})
	});


	var oTest = {
		"firstKey": "some first value",
		"0": "some second value",
		"1": "some third value",
		"fourthKey": "some fourth value"
	};
	var arExpected = ["firstKey", "0", "1", "fourthKey"];

	describe('#Object.keys()', function(){

		it('should traverse keys in random sequence', function(){

			var arKeys = Object.keys(oTest);

			arKeys.should.not.be.eql(arExpected);

		});
	});

	describe('custom function', function(){

		var traverseKeys = function(oSource){
			var arReturn = [];
			var strPropertyName;

			for(strPropertyName in oSource){
				arReturn.push(strPropertyName);
			}

			return arReturn;
		};

		it('should traverse object keys to array in random sequence either', function(){

			var arKeys = traverseKeys(oTest);
			arKeys.should.not.be.eql(arExpected);
		})
	})
});
