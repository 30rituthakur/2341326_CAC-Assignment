// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get("title"),
        author: params.get("author"),
        genre: params.get("genre"),
        year: params.get("year"),
        pages: params.get("pages"),
        img: params.get("img"),
    };
}


// Book data with full descriptions
const bookData = {
    "The Name of the Wind": {
        synopsis: "A beautifully written fantasy novel by Patrick Rothfuss, following the legendary Kvothe as he recounts his life story. From a childhood tragedy to his time at the University learning arcane magic, Kvothe’s journey is filled with adventure, love, and hardship. With poetic prose and deep world-building, this novel is a must-read for fantasy lovers."
    },
    "Mistborn": {
        synopsis: "Set in a world where the Dark Lord has already won, Brandon Sanderson’s Mistborn follows Vin, a street thief who discovers she is a Mistborn—capable of wielding incredible magic through metal consumption. Under the guidance of the rebellious Kelsier, she joins a daring plot to overthrow the oppressive Lord Ruler, leading to a thrilling tale of power, trust, and revolution."
    },
    "The Hobbit": {
        synopsis: "J.R.R. Tolkien’s beloved classic follows Bilbo Baggins, a humble hobbit who is thrust into an unexpected adventure alongside a group of dwarves and the wizard Gandalf. Tasked with helping them reclaim their homeland from the dragon Smaug, Bilbo encounters trolls, goblins, and the mysterious One Ring, making for a timeless tale of courage and discovery."
    },
    "Dune": {
        synopsis: "Frank Herbert’s epic science fiction novel follows Paul Atreides, heir to House Atreides, as he is thrust into the deadly politics of the desert planet Arrakis. With the mysterious spice melange at the heart of interstellar conflict, Paul must navigate betrayal, prophecy, and his own destiny in a sweeping saga of power, survival, and transformation."
    },
    "The Left Hand of Darkness": {
        synopsis: "Ursula K. Le Guin’s groundbreaking sci-fi novel explores themes of gender and identity as Genly Ai, an envoy from a galactic civilization, visits the planet Gethen. There, he struggles to understand a society where individuals change gender throughout their lives. This deeply philosophical and thought-provoking novel redefines human relationships and cultural perceptions."
    },
    "The Three-Body Problem": {
        synopsis: "Liu Cixin’s ambitious sci-fi novel explores first contact with an alien civilization and its far-reaching consequences. Set against the backdrop of China’s Cultural Revolution, the novel follows a secret scientific project that inadvertently invites extraterrestrials to Earth. As humanity grapples with this revelation, a thrilling blend of physics, politics, and existential dread unfolds."
    },
    "Gone Girl": {
        synopsis: "Gillian Flynn’s psychological thriller unravels the dark secrets behind the disappearance of Amy Dunne. As the media frenzy grows, suspicion falls on her husband, Nick, whose seemingly perfect marriage is exposed as a web of lies and deceit. With shocking twists and unreliable narrators, this novel keeps readers on edge until the final page."
    },
    "The Girl with the Dragon Tattoo": {
        synopsis: "Stieg Larsson’s gripping mystery introduces journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander as they investigate a decades-old disappearance within a wealthy Swedish family. As they uncover long-buried secrets, they find themselves entangled in a sinister conspiracy, making for a thrilling and darkly atmospheric read."
    },
    "Big Little Lies": {
        synopsis: "Liane Moriarty’s novel blends drama, humor, and suspense as it follows three women—Madeline, Celeste, and Jane—whose seemingly perfect lives unravel in a wealthy coastal town. Beneath the surface lies a tangled web of domestic abuse, friendship, and hidden secrets, culminating in a shocking murder that changes everything."
    },
    "The Shining": {
        synopsis: "Stephen King’s horror masterpiece follows Jack Torrance, a struggling writer who takes a winter job at the isolated Overlook Hotel with his wife and psychic son, Danny. As supernatural forces haunt the hotel, Jack’s sanity unravels, leading to a terrifying descent into madness that threatens his family’s survival."
    },
    "House of Leaves": {
        synopsis: "Mark Z. Danielewski’s experimental horror novel weaves a chilling tale about a house that is impossibly larger on the inside than the outside. Told through multiple unreliable narrators and an unsettling format, the novel blurs the line between reality and fiction, creating a deeply immersive and unsettling experience."
    },
    "Bird Box": {
        synopsis: "Josh Malerman’s post-apocalyptic thriller follows Malorie and her children as they navigate a world where mysterious entities drive people to madness upon sight. Forced to travel blindfolded in search of safety, their journey is a tense and terrifying struggle for survival against the unknown."
    },
    "Sapiens": {
        synopsis: "Yuval Noah Harari’s *Sapiens: A Brief History of Humankind* is an insightful exploration of how Homo sapiens evolved, developed civilizations, and shaped the modern world. Covering anthropology, biology, and economics, this thought-provoking book offers a compelling narrative of humanity’s past and its potential future."
    },
    "Educated": {
        synopsis: "Tara Westover’s powerful memoir recounts her journey from growing up in a strict, survivalist family with no formal education to earning a PhD at Cambridge University. Her story is one of resilience, self-discovery, and the transformative power of education against the odds."
    },
    "Atomic Habits": {
        synopsis: "James Clear’s *Atomic Habits* provides a practical guide to forming good habits, breaking bad ones, and making small changes that lead to long-term success. With scientific insights and actionable strategies, this book helps readers optimize their daily routines for personal and professional growth."
    }
};



// Populate book details on the page
function displayBookDetails() {
    const params = getQueryParams();
    document.getElementById("book-img").src = `/static/images/${params.img}`;
    document.getElementById("book-title").innerText = params.title;
    document.getElementById("book-author").innerText = params.author;
    document.getElementById("book-genre").innerText = params.genre;
    document.getElementById("book-year").innerText = params.year;
    document.getElementById("book-pages").innerText = params.pages;


    // Set synopsis if available, otherwise display default message
    document.getElementById("book-synopsis").innerText =
        bookData[params.title] ? bookData[params.title].synopsis : "Synopsis not available.";
}


// Call the function when the page loads
window.onload = displayBookDetails;
