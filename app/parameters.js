/**
 * //@by_rcmonitor@//
 * on 03.08.2015.
 */

var modify = function(parameter){
	parameter = parameter + 8;
};

var objectModify = function(oParameter){
	oParameter.parameter = oParameter.parameter + 8;
};

module.exports.modify = modify;
module.exports.objectModify = objectModify;
