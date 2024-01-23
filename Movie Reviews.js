const addbutton = document.getElementById("addBtn");

function onAddDetails() {
    const movieTitleElement = document.getElementById("titleInput");
    const movieTitleValue = movieTitleElement.value;

    const yourReviewElement = document.getElementById("reviewTextarea");
    const yourReviewValue = yourReviewElement.value;

    localStorage.setItem("movieTitle", movieTitleValue);
    localStorage.setItem("yourReview", yourReviewValue);

    const mainContainer = document.getElementById("reviewsContainer");

    const movie = localStorage.getItem("movieTitle");
    const review = localStorage.getItem("yourReview");

    const movietitleElement = document.createElement("h1");
    movietitleElement.textContent = "MOVIE TItLe:" + movie;
    movietitleElement.classList.add("head1");
    mainContainer.appendChild(movietitleElement);

    const yourreviewElement = document.createElement("h1");
    yourreviewElement.textContent = "Review:" + review;
    yourreviewElement.classList.add("head2");
    movietitleElement.appendChild(yourreviewElement);

}

addbutton.onclick = function() {
    onAddDetails();
}