/**
 * //@by_rcmonitor@//
 * on 17.03.2015.
 */

var fs = require('fs');
var util = require('util');

var CTestClass = require('./app/test_class');

var oTestClass = new CTestClass();

debugger;

oTestClass.insideMethod();

oTestClass.outsideMethod();

oTestClass.namedMethod();

try{
	var rFileDescriptor = fs.openSync('c.test', 'w');
	console.log('opened ' + util.inspect(rFileDescriptor));
	fs.closeSync(rFileDescriptor);
}catch(error){
	console.log(util.inspect(error));
	console.log(error.message);
}
//console.log(util.inspect(rFileDescriptor));