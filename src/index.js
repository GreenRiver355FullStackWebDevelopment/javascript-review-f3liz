//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
const renderReview = (review) => {
  const div = document.createElement("div");
  div.className = "review_container";

  const img = document.createElement("img");
  img.src = review.image;

  const innerDiv = document.createElement("div");

  const username = document.createElement("p");
  username.textContent = review.username;

  const rating = document.createElement("p");
  rating.textContent = review.star;

  const userReviews = document.createElement("p");
  userReviews.textContent = review.review;

  innerDiv.appendChild(username);
  innerDiv.appendChild(rating);
  innerDiv.appendChild(userReviews);

  div.appendChild(img);
  div.appendChild(innerDiv);

  document.querySelector(".reviews").appendChild(div);
}

const renderAllReviews = () => {
  reviews.forEach(renderReview)
}