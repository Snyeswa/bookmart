var books = document.querySelectorAll('#books-list li.name');

Array.from(books).forEach(function(book){
	book.textContent += '(book title)';

});

const bookslist = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This ishow you add HTML content</p>';