/**
 * //@by_rcmonitor@//
 * on 16.03.2015.
 */

var should = require('chai').should();

CTestClass = require('../app/test_class');
var oTestClass = new CTestClass();

describe('javascript OOP behaviours', function(){



	describe('#CTestClass', function(){
		it('should have public property publicProperty', function(){
			//var oTestClass = new CTestClass();
			oTestClass.publicProperty.should.be.ok;
			oTestClass.publicProperty.should.equal(42);
		});

		it('should have public method insideMethod', function(){
			var strResult = oTestClass.insideMethod();

			strResult.should.contain('hug from CTestClass.insideMethod');
			strResult.should.contain('rain in CTestClass.insideMethod');
		});

		it('should have public method outsideMethod', function(){
			var strResult = oTestClass.outsideMethod();

			strResult.should.contain('hug from CTestClass.outsideMethod');
			strResult.should.contain('rain in CTestClass.outsideMethod');
		});

		it('should have public method named logInvalid', function(){
			var strResult = oTestClass.namedMethod();

			strResult.should.contain('hug from logInvalid');
			strResult.should.contain('rain in logInvalid');
		});

		it('should have public property outsideEvents', function(){
			//var oProperty = oTestClass.outsideEvents;

			oTestClass.outsideEvents.should.be.ok;
			oTestClass.outsideEvents.should.have.property('rain');
		});

		it('should not have public property validEvents', function(){
			should.not.exist(oTestClass.validEvents);
		});

		it('should have public static property validEvents', function(){
			CTestClass.validEvents.should.be.ok;
			CTestClass.validEvents.should.have.property('fire');
		});

		it('should not have public static propery outsideEvents', function(){
			should.not.exist(CTestClass.outsideEvents);
		});
	})
});