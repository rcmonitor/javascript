/**
 * //@by_rcmonitor@//
 * on 19.08.2015.
 */

var fs = require('fs');
var path = require('path');
require('chai').should();

describe('string functions', function(){

	describe('#split() function', function(){

		it('should return array with a single string when there is nothing to split', function(){
			var strLine = '0';

			var arResult = strLine.split('=');

			arResult.should.be.an('array');
			arResult.should.not.be.empty;
			arResult.should.have.length(1);
			arResult[0].should.equals('0');
		})
	});

	describe('#indexOf() function', function(){

		var strSome = fs.readFileSync(path.join(__dirname, 'data', 'text.txt'), {"encoding": "utf8"});

		var strExpected = "<div class=\"navi-item__switcher HH-Navi-MenuItems-Switcher\" data-qa=\"mainmenu_userName\">";
//		console.log(strSome);

		it('should search for a string in given text', function(){

			var intOffset = strSome.indexOf(strExpected);

			console.log(intOffset);
			intOffset.should.not.equals(-1);
		})
	})
});