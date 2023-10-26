// script.js
const movies = [
    {
        title: 'A Chamada',
        image: 'https://cinepop.com.br/wp-content/uploads/2023/06/chamada_1-e1687977208185.jpg',
        showDate: '2022-05-15',
        releaseDate: '2022-04-25',
        price: 25,
        ticketsAvailable: 100
    },
    // ... Adicione os 10 filmes aqui.
];

const movieContainer = document.getElementById('movies');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieInfo = `
        <h3>${movie.title}</h3>
        <p>Data do filme: ${movie.showDate}</p>
        <p>Data de lançamento: ${movie.releaseDate}</p>
        <p>Preço do ticket: $${movie.price}</p>
        <p>Tickets disponíveis: ${movie.ticketsAvailable}</p>
    `;

    movieCard.innerHTML = movieInfo;
    movieCard.prepend(movieImage);
    movieContainer.appendChild(movieCard);
});
