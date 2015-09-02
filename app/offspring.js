/**
 * //@by_rcmonitor@//
 * on 04.08.2015.
 */

function Offspring(oParent){
	this.parent = oParent;
}

Offspring.prototype.setSomeProperty = function(){
	this.parent.someProperty = 18;
};


module.exports = Offspring;