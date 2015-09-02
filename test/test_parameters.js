/**
 * //@by_rcmonitor@//
 * on 03.08.2015.
 */

require('chai').should();
var path = require('path');
//var strAppBasePath = path.join(__dirname, '..', 'app');
var parameters = require('../app/parameters');
var modify = parameters.modify;
var objectModify = parameters.objectModify;


describe('parameters in javascript', function(){

	describe('#pass parameters to functions by copying', function(){
		it('should not change parameter inside function', function(){
			var parameter = 42;

			modify(parameter);

			parameter.should.be.a('number');
			parameter.should.equals(42);
		})
	});

	describe('#pass parameters to functions by reference', function(){
		it('should change parameter inside object passed', function(){
			var oParameter = {
				parameter: 42
			};

			objectModify(oParameter);

			oParameter.parameter.should.be.a('number');
			oParameter.parameter.should.equals(50);
		})
	})

});

