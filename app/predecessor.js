/**
 * //@by_rcmonitor@//
 * on 04.08.2015.
 */
var Offspring = require('./offspring');

function Predecessor(){
	this.offspring = new Offspring(this);
}


Predecessor.prototype.setSome = function(){
	this.offspring.setSomeProperty();

	return this.someProperty;
};

module.exports = Predecessor;