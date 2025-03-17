document.addEventListener("DOMContentLoaded", function () {
    let books = [
        { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", year: 2007, pages: 662 },
        { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", year: 1965, pages: 412 },
        { title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", year: 2012, pages: 432 },
    ];


    const bookListContainer = document.querySelector(".book-list");


    function renderBooks() {
        bookListContainer.innerHTML = ""; // Clear the list first
        books.forEach((book, index) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");


            bookItem.innerHTML = `
                <p><strong>${book.title}</strong> by ${book.author} (${book.genre}, ${book.year}, ${book.pages} pages)</p>
                <button onclick="removeBook(${index})" class="remove-btn">Remove</button>
            `;


            bookListContainer.appendChild(bookItem);
        });
    }


    window.addBook = function () {
        const title = document.getElementById("book-title").value.trim();
        const author = document.getElementById("book-author").value.trim();
        const genre = document.getElementById("book-genre").value.trim();
        const year = document.getElementById("book-year").value.trim();
        const pages = document.getElementById("book-pages").value.trim();


        if (title && author && genre && year && pages) {
            books.push({ title, author, genre, year: parseInt(year), pages: parseInt(pages) });
            renderBooks();
            document.getElementById("book-title").value = "";
            document.getElementById("book-author").value = "";
            document.getElementById("book-genre").value = "";
            document.getElementById("book-year").value = "";
            document.getElementById("book-pages").value = "";
        } else {
            alert("Please fill in all fields!");
        }
    };


    window.removeBook = function (index) {
        books.splice(index, 1);
        renderBooks();
    };


    renderBooks();
});


