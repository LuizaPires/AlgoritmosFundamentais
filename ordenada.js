
function ordenada(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if ( array[i] > pivot ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }

  return ordenada(lesserArray).concat(pivot, ordenada(greaterArray));
}

var s, t, u, v, x, z;
var array = [s, t, u, v, x, z];


/*function ordenada(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(ordenada(left), pivot, ordenada(right));
	}
}
var r, s, t ,u , v, x, z;
var myArray = [r, s, t, u, v, x, z ];

//console.log("Original array: " + myArray);
var sortedArray = ordenada(myArray);
//console.log("Sorted array: " + sortedArray);
*/

/*
var r, s, t, u;

var array = [ r, s, t, u];

function comparar(a, b) {
  return a - b;
}

console.log('array:', array.join());
console.log('Ordenada sem função comparar:', array.sort());
console.log('Ordenada com comparar:', array.sort(comparar));
*/

module.exports = {
  ordenada
};