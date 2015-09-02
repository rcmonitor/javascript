/**
 * //@by_rcmonitor@//
 * on 16.03.2015.
 */

var traceback = require('traceback');
var os = require('os');
var eol = os.EOL;

function CTestClass(firstParameter){
	this.publicProperty = 42;

	this.invalidEvents = {
		"hug": 'hug'
	};

	this.namedMethod = logInvalid;

	this.insideMethod = function(){
		var localTrace = traceback()[0];
		var strReturn = this.invalidEvents.hug + ' from ' + localTrace.name + eol;

		strReturn += 'it is ' + this.outsideEvents.rain + ' in ' + localTrace.name + eol;
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
	var localTrace = traceback()[0];
	var strReturn = this.invalidEvents.hug + ' from ' + localTrace.name + eol;
	strReturn += this.outsideEvents.rain + ' in ' + localTrace.name + eol;
	console.log();

	return strReturn;
};

function logInvalid(){
	var localTrace = traceback()[0];
	var strReturn = this.invalidEvents.hug + ' from ' + localTrace.name + eol;
	strReturn += this.outsideEvents.rain + ' in ' + localTrace.name + eol;
	console.log(strReturn);

	return strReturn;
}


module.exports = CTestClass;