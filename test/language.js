/**
 * //@by_rcmonitor@//
 * on 05.08.2015.
 */

describe('language test', function(){
	describe('map function', function(){
		it('should not be strange', function(){
			["1", "2", "3"].map(function(string){
				console.log(parseInt(string));
			});
		});
		it('should be superstrange', function(){
			var arSome = ["1", "2", "3", "4"].map(parseInt);
			console.log(arSome);
		});
	})
});
