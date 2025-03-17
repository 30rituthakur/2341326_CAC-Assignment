function searchBooks() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let books = document.querySelectorAll(".book");


    books.forEach(book => {
        let title = book.querySelector("p").innerText.toLowerCase();
        if (title.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
