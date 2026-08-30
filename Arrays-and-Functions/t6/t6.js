const movies = [];

const movieAmount = +prompt("How many movies do you want to rate?");

for (let i = 0; i < movieAmount; i++) {
  const title = prompt(`Enter movie title ${i + 1}:`);
  const rating = +prompt(`Enter the rating for "${title}" (1-5):`);

  const movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort(function (a, b) {
  return b.rating - a.rating;
});

let list = "";
let highest = "";

for (const movie of movies) {
  list += `<li>${movie.title} - Rating: ${movie.rating}/5</li>`;
}

if (movies.length > 0) {
  highest += `<p>Your highest rated movie: ${movies[0].title} - ${movies[0].rating}/5</p>`;
}

document.querySelector("#target").innerHTML = list;
document.querySelector("#highest").innerHTML = highest;
