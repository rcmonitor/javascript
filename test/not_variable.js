/**
 * //@by_rcmonitor@//
 * on 06.08.2015.
 */

var util = require('util');
require('chai').should();

describe('javascript not variable test', function(){

	describe('what to expect when stating if not variable', function(){

		var someUndefined;

		var arEmptyVariables = [
			{
				"key": "boolean false",
				"value": false
			},{
				"key": "null",
				"value": null
			},{
				"key": "integer zero",
				"value": 0
			},{
				"key": "undefined",
				"value": someUndefined
			},{
				"key": "empty string",
				"value": ""
			}
		];

		var emptyVariable = function(variable){
			var boolReturn;

			//console.log(util.inspect(variable));

			if(!variable){
				boolReturn = true;
			}else{
				boolReturn = false;
			}

			return boolReturn;
		};

		var strAssertionMessage;

		arEmptyVariables.forEach(function(oVariable){

			strAssertionMessage = oVariable.key + ' should be treated as an empty value';

			it(strAssertionMessage, function(){
				var boolEmpty = emptyVariable(oVariable.value);
				boolEmpty.should.be.a('boolean');
				boolEmpty.should.be.true;
			})
		});




		//var contextName;
		//var strAssertionMessage;
		//var propertyName;
		//
		//for (propertyName in oEmptyVariables){
		//	strAssertionMessage = propertyName + ' should be treated as empty value';
		//
		//	contextName = propertyName;
		//
		//	it(strAssertionMessage, function(){
		//
		//		console.log(contextName);
		//
		//		var boolEmpty = notVariable(oEmptyVariables[contextName]);
		//		boolEmpty.should.be.a('boolean');
		//		boolEmpty.should.be.true;
		//	});
		//}

		//for (propertyName in oFullVariables){
		//	strAssertionMessage = propertyName + ' should be treated as filled value';
		//
		//	it(strAssertionMessage, function(){
		//
		//		console.log(propertyName);
		//
		//		var boolFull = isVariable(oFullVariables[propertyName]);
		//		boolFull.should.be.a('boolean');
		//		boolFull.should.be.true;
		//	})
		//}

		//it('should result to true', function(){
		//	var
		//})
	});


	describe('what to expect when stating if variable', function(){

		var arFullVariables = [
			{
				"key": "boolean true",
				"value": true
			},{
				"key": "integer minus one",
				"value": -1
			},{
				"key": "non-empty object",
				"value": {"some": "any"}
			},{
				"key": "non-empty array",
				"value": [42]
			},{
				"key": "non-empty array with zero",
				"value": [0]
			},{
				"key": "non-empty string",
				"value": "some"
			},{
				"key": "string with zero",
				"value": "0"
			},{
				"key": "empty array",
				"value": []
			},{
				"key": "empty object",
				"value": {}
			}
		];

		var nonEmptyVariable = function(variable){
			var boolReturn;

			//console.log(util.inspect(variable));

			if(variable){
				boolReturn = true;
			}else{
				boolReturn = false;
			}

			return boolReturn;
		};

		var strAssertionMessage;

		arFullVariables.forEach(function(oVariable){
			strAssertionMessage = oVariable.key + ' should be treated as not empty value';

			it(strAssertionMessage, function(){
				var boolNonEmpty = nonEmptyVariable(oVariable.value);
				boolNonEmpty.should.be.a('boolean');
				boolNonEmpty.should.be.true;
			})
		});

	});

	//describe('erroneous empty array test', function(){
	//
	//	it('should be evaluated to false', function(){
	//		var oErroneous = {"errors": []};
	//
	//		var arSome = [];
	//
	//		var boolEmpty;
	//		if(!arSome){
	//			boolEmpty = true;
	//		}else{
	//			boolEmpty = false;
	//		}
	//
	//		boolEmpty.should.be.a('boolean');
	//		boolEmpty.should.be.true;
	//	})
	//})
});