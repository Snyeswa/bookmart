const list = document.querySelector('#book-list ul');

//  delete books
list.addEventListener('click', function(e){
	if(e.target.className == 'delete'){
		const li = e.target.parentElement;
		list.removeChil(li);
	}
});
 
// add book-list

const addForm = document.forms('add-book');
addForm.addEventListener('submit', function(e){
	e.parentDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	console.log(value);
})