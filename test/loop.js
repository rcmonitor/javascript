/**
 * //@by_rcmonitor@//
 * on 25.08.2015.
 */

require('chai').should();

describe('javascript loops', function(){

	describe('for loop', function(){

		it('should iterate all object properties and pass control flow further', function(){
			var strResult = '';

			var oSome = {
				"first": "one string",
				"second": 42,
				"third": "moar string"
			};

			var expectedString = 'fos4tm';

			var currentPropertyName;

			var intCount = 0;

			for(currentPropertyName in oSome){
				strResult += currentPropertyName.charAt(0) + oSome[currentPropertyName].toString().charAt(0);

				intCount ++;
			}

			strResult.should.be.a('string');
			strResult.should.equals(expectedString);

			intCount.should.equals(3);
		})
	});

	describe('#forEach() loop', function(){

		var arSource = [1, 2, 3, 5, 8, 13, 21];

		var arTarget = [42, 800, 356, 40, 10, 18, 505];

		var arExpected = [504, 16, 7, 35, 348, 787, 21];

		it('should behave in a synchronous manner', function(){

			var arResult = [];

			var intTargetLength = arTarget.length;

			arSource.forEach(function(intItem, intOffset, arOriginal){

				var intTargetOffset = intTargetLength - 1 - intOffset;

				arResult.push(arTarget[intTargetOffset] - arSource[intOffset]);
			});

			arResult.should.eql(arExpected);
		});

		it('should not block the scope', function(fCallback){

			var a;

			arSource.forEach(function(intItem, intOffset, arOriginal){
				a += intItem;
			});

			fCallback();
		})
	})
});