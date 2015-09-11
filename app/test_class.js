/**
 * //@by_rcmonitor@//
 * on 16.03.2015.
 */

var os = require('os');
var eol = os.EOL;
var util = require('util');

//var traceback = require('traceback');
//var traceback = require('traceback-safe');
var stackTrace = require('stack-trace');

function CTestClass(firstParameter){
	this.publicProperty = 42;

	this.invalidEvents = {
		"hug": 'hug'
	};

	this.namedMethod = logInvalid;

	this.insideMethod = function(){

		var arTrace = stackTrace.get();

//		console.log(util.inspect(arTrace[0]));

		var strTestLine = arTrace[0].getFileName() + ': '
			+ arTrace[0].getLineNumber() + ': '
			+ arTrace[0].getMethodName() + ' '
			+ arTrace[0].getFunctionName();

//		console.log(strTestLine);

		var localTrace = arTrace[0].getFunctionName();
//		var localTrace = 'CTestClass.insideMethod';
		var strReturn = this.invalidEvents.hug + ' from ' + localTrace + eol;

		strReturn += 'it is ' + this.outsideEvents.rain + ' in ' + localTrace + eol;
		console.log(strReturn);

		return strReturn;
	};

	//console.log(this.validEvents.fire + ' in constructor');
}


CTestClass.prototype.outsideEvents = {
	"rain": 'rain'
};

CTestClass.validEvents = {
	"fire": 'fire'
};
console.log(CTestClass.validEvents.fire);



//console.log(CTestClass.invalidEvents.hug);

CTestClass.prototype.outsideMethod = function(){
//	var localTrace = traceback()[0];

	var arTrace = stackTrace.get();
	var strFunction = arTrace[0].getFunctionName();

	var strReturn = this.invalidEvents.hug + ' from ' + strFunction + eol;
	strReturn += this.outsideEvents.rain + ' in ' + strFunction + eol;
//	console.log();

	return strReturn;
};

function logInvalid(){

	var arTrace = stackTrace.get();

//	var localTrace = traceback()[0];

	var strFunctionName = arTrace[0].getFunctionName();

	var strReturn = this.invalidEvents.hug + ' from ' + strFunctionName + eol;
	strReturn += this.outsideEvents.rain + ' in ' + strFunctionName + eol;
	console.log(strReturn);

	return strReturn;
}


module.exports = CTestClass;