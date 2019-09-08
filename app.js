// version03-getElementByTagName
var titles = document.getElementsById('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

var lis = document.getElementsById('li');

Array.from(titles).forEach(function(item){
	console.log(item);
})

