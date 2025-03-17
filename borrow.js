document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "The Name of the Wind", author: "Patrick Rothfuss", borrowed: false },
        { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", borrowed: false },
        { title: "The Hobbit", author: "J.R.R. Tolkien", borrowed: false },
        { title: "Dune", author: "Frank Herbert", borrowed: false },
        { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", borrowed: false },
        { title: "The Three-Body Problem", author: "Liu Cixin", borrowed: false },
        { title: "Gone Girl", author: "Gillian Flynn", borrowed: false },
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", borrowed: false },
        { title: "Big Little Lies", author: "Liane Moriarty", borrowed: false },
        { title: "The Shining", author: "Stephen King", borrowed: false },
        { title: "House of Leaves", author: "Mark Z. Danielewski", borrowed: false },
        { title: "Bird Box", author: "Josh Malerman", borrowed: false },
        { title: "The Nightingale", author: "Kristin Hannah", borrowed: false },
        { title: "The Book Thief", author: "Markus Zusak", borrowed: false },
        { title: "Pachinko", author: "Min Jin Lee", borrowed: false },
        { title: "The Bell Jar", author: "Sylvia Plath", borrowed: false },
        { title: "Fight Club", author: "Chuck Palahniuk", borrowed: false },
        { title: "We Need to Talk About Kevin", author: "Lionel Shriver", borrowed: false },
        { title: "Sapiens", author: "Yuval Noah Harari", borrowed: false },
        { title: "Educated", author: "Tara Westover", borrowed: false },
        { title: "Atomic Habits", author: "James Clear", borrowed: false }
    ];


    const bookListContainer = document.querySelector(".book-list");


    function renderBooks() {
        bookListContainer.innerHTML = ""; // Clear the list first
        books.forEach((book, index) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");


            bookItem.innerHTML = `
                <p><strong>${book.title}</strong> by ${book.author}</p>
                <button onclick="toggleBorrow(${index})">${book.borrowed ? "Return" : "Borrow"}</button>
            `;


            bookListContainer.appendChild(bookItem);
        });
    }


    window.toggleBorrow = function (index) {
        books[index].borrowed = !books[index].borrowed; // Toggle borrow/return
        renderBooks(); // Re-render the list
    };


    renderBooks(); // Initial rendering of books
});
