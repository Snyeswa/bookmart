// No Code

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


// create element
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});	
//  hide books
	const hideBox = document.querySelector('#hide');
	hideBox.addEventListener('change', function(e){
		if(hideBox.checked){
			life.style.display = 'none';
		} else {
			list.style.display = "inital";
		
        }
      
        // filter books
		const searchBar = document.form('search-books').querySelector('input');
		searchBar.addEventListener('keyup', function(e){
			const term = e.target.value.toLowerCase();
			const books = list.getElementsByTagName('li');
			array.form(books).forEach(function(book){
				const title = book.firstElementChild.textContent;
				if(title.toLowerCase().indexOf(term)!=-1){
					book.style.display = 'block';
				} else {
					book.style.display = 'none'
				}
			})
		})


	});
	
