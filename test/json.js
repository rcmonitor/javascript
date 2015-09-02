/**
 * //@by_rcmonitor@//
 * on 23.08.2015.
 */

var path = require('path');
require('chai').should();

var strDataPath = path.join(__dirname, 'data', 'data.json');
var oJson = require(strDataPath);

describe('json test', function(){

	describe('json value', function(){

		it('should contain correct value', function(){
			oJson.should.contain.key('parameter');
			oJson.parameter.should.be.equal('value');

			oJson.should.contain.key('callback');
			oJson.callback.should.be.equal("(function(){console.log('some'); return 'any';})");

			oJson.should.contain.key('numeric');
			oJson.numeric.should.be.equal('42');

		});

		it('should be evaluated if correct function given', function(){
			var fCallback = eval(oJson.callback);
			fCallback.should.be.a('function');
			var strResult = fCallback();
			strResult.should.be.equal('any');
		});

		it('should evaluate to number, if numeric string given', function(){
			var intResult = eval(oJson.numeric);
			intResult.should.be.a('number');
			intResult.should.equals(42);
		});

		//it('should be original string after evaluation', function(){
		//	var strResult = eval(oJson.parameter);
		//
		//	//console.log('result:');
		//	//console.log(strResult);
		//	//
		//	//strResult.should.be.a('string');
		//	//strResult.should.equals('value');
		//})
	})
});