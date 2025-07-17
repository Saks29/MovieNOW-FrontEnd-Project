/**
 * MovieNOW - Movie Discovery Application
 * Author: Your Name
 * Description: JavaScript functionality for movie search and display
 */

// ====================
// CONSTANTS & CONFIG
// ====================
const API_KEY = '8265bd1c'; // OMDB API key
const BASE_URL = 'https://www.omdbapi.com/';

// ====================
// GLOBAL VARIABLES
// ====================
let searchHistory = [];
let currentMovie = null;

// ====================
// SAMPLE DATA (Fallback)
// ====================
const sampleMovies = {
    'inception': {
        Title: 'Inception',
        Year: '2010',
        Rated: 'PG-13',
        Runtime: '148 min',
        Genre: 'Action, Sci-Fi, Thriller',
        Director: 'Christopher Nolan',
        Writer: 'Christopher Nolan',
        Actors: 'Leonardo DiCaprio, Marion Cotillard, Tom Hardy',
        Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        Language: 'English',
        Country: 'USA, UK',
        BoxOffice: '$292,576,195',
        imdbRating: '8.8',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        Response: 'True'
    },
    'avatar': {
        Title: 'Avatar',
        Year: '2009',
        Rated: 'PG-13',
        Runtime: '162 min',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'James Cameron',
        Writer: 'James Cameron',
        Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
        Plot: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        Language: 'English',
        Country: 'USA, UK',
        BoxOffice: '$760,507,625',
        imdbRating: '7.9',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY0OTUz@._V1_SX300.jpg',
        Response: 'True'
    },
    'interstellar': {
        Title: 'Interstellar',
        Year: '2014',
        Rated: 'PG-13',
        Runtime: '169 min',
        Genre: 'Adventure, Drama, Sci-Fi',
        Director: 'Christopher Nolan',
        Writer: 'Jonathan Nolan, Christopher Nolan',
        Actors: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        Plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        Language: 'English',
        Country: 'USA, UK, Canada',
        BoxOffice: '$188,020,017',
        imdbRating: '8.6',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Response: 'True'
    },
    'oppenheimer': {
        Title: 'Oppenheimer',
        Year: '2023',
        Rated: 'R',
        Runtime: '180 min',
        Genre: 'Biography, Drama, History',
        Director: 'Christopher Nolan',
        Writer: 'Christopher Nolan',
        Actors: 'Cillian Murphy, Emily Blunt, Matt Damon',
        Plot: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
                Language: 'English',
                Country: 'USA, UK',
                BoxOffice: '$636,238,421',
                imdbRating: '6.9',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
                Response: 'True'
            },
            'dune': {
                Title: 'Dune',
                Year: '2021',
                Rated: 'PG-13',
                Runtime: '155 min',
                Genre: 'Action, Adventure, Drama',
                Director: 'Denis Villeneuve',
                Writer: 'Jon Spaihts, Denis Villeneuve, Eric Roth',
                Actors: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac',
                Plot: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.',
                Language: 'English',
                Country: 'USA, Canada',
                BoxOffice: '$108,327,830',
                imdbRating: '8.0',
                Poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
                Response: 'True'
            }
        };

        async function searchMovie() {
            const searchTerm = document.getElementById('movieSearch').value.trim();
            if (!searchTerm) return;

            showLoading(true);
            hideError();
            
            try {
                // First try the API
                const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(searchTerm)}&plot=full`);
                const data = await response.json();
                
                if (data.Response === 'True') {
                    currentMovie = data;
                    displayMovieDetails(data);
                    loadSimilarMovies(data.Genre);
                    addToHistory(searchTerm);
                } else {
                    // Fallback to sample data
                    const sampleKey = searchTerm.toLowerCase().replace(/[^a-z0-9]/g, '');
                    const sampleMovie = sampleMovies[sampleKey] || sampleMovies[Object.keys(sampleMovies).find(key => key.includes(sampleKey))];
                    
                    if (sampleMovie) {
                        currentMovie = sampleMovie;
                        displayMovieDetails(sampleMovie);
                        loadSimilarMovies(sampleMovie.Genre);
                        addToHistory(searchTerm);
                    } else {
                        showError('Movie not found. Try searching for: Inception, Avatar, Interstellar, Oppenheimer, Barbie, or Dune');
                    }
                }
            } catch (error) {
                console.error('API Error:', error);
                // Fallback to sample data on network error
                const sampleKey = searchTerm.toLowerCase().replace(/[^a-z0-9]/g, '');
                const sampleMovie = sampleMovies[sampleKey] || sampleMovies[Object.keys(sampleMovies).find(key => key.includes(sampleKey))];
                
                if (sampleMovie) {
                    currentMovie = sampleMovie;
                    displayMovieDetails(sampleMovie);
                    loadSimilarMovies(sampleMovie.Genre);
                    addToHistory(searchTerm);
                    showError('⚠️ Using offline data - Internet connection may be limited');
                } else {
                    showError('Connection failed. Try searching for: Inception, Avatar, Interstellar, Oppenheimer, Barbie, or Dune (offline mode)');
                }
            } finally {
                showLoading(false);
            }
        }

        async function quickSearch(movieName) {
            document.getElementById('movieSearch').value = movieName;
            searchMovie();
        }

        function displayMovieDetails(movie) {
            const detailsDiv = document.getElementById('movieDetails');
            
            const streamingInfo = getStreamingInfo(movie.Title);
            const ratingColor = getRatingColor(movie.imdbRating);
            
            detailsDiv.innerHTML = `
                <div class="movie-header">
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}" 
                         alt="${movie.Title}" class="movie-poster">
                    <div class="movie-info">
                        <h1 class="movie-title">${movie.Title}</h1>
                        <div class="movie-year">${movie.Year} • ${movie.Rated} • ${movie.Runtime}</div>
                        <div class="movie-rating">
                            <span class="rating-badge" style="background: ${ratingColor}">
                                ⭐ ${movie.imdbRating}/10
                            </span>
                            <span style="color: #666;">IMDb Rating</span>
                        </div>
                        <div class="movie-genres">
                            ${movie.Genre.split(', ').map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                        </div>
                        <div class="movie-plot">${movie.Plot}</div>
                        ${streamingInfo}
                    </div>
                </div>
                
                <div class="movie-meta">
                    <div class="meta-item">
                        <div class="meta-label">Director</div>
                        <div class="meta-value">${movie.Director}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Cast</div>
                        <div class="meta-value">${movie.Actors}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Writer</div>
                        <div class="meta-value">${movie.Writer}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Country</div>
                        <div class="meta-value">${movie.Country}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Language</div>
                        <div class="meta-value">${movie.Language}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Box Office</div>
                        <div class="meta-value">${movie.BoxOffice || 'N/A'}</div>
                    </div>
                </div>
            `;
            
            detailsDiv.classList.remove('hidden');
        }

        function getStreamingInfo(movieTitle) {
            const platforms = [];
            
            for (const [platform, movies] of Object.entries(streamingPlatforms)) {
                const isAvailable = movies.some(movie => 
                    movieTitle.toLowerCase().includes(movie.toLowerCase()) ||
                    movie.toLowerCase().includes(movieTitle.toLowerCase())
                );
                
                if (isAvailable) {
                    platforms.push(platform);
                }
            }
            
            if (platforms.length > 0) {
                return `
                    <div class="streaming-info">
                        <div class="meta-label">📺 Available on:</div>
                        <div class="meta-value">${platforms.join(', ')}</div>
                    </div>
                `;
            }
            
            return `
                <div class="streaming-info">
                    <div class="meta-label">📺 Streaming:</div>
                    <div class="meta-value">Check local streaming services</div>
                </div>
            `;
        }

        function getRatingColor(rating) {
            const num = parseFloat(rating);
            if (num >= 8.0) return 'linear-gradient(45deg, #28a745, #20c997)';
            if (num >= 7.0) return 'linear-gradient(45deg, #ffc107, #fd7e14)';
            if (num >= 6.0) return 'linear-gradient(45deg, #fd7e14, #dc3545)';
            return 'linear-gradient(45deg, #dc3545, #6c757d)';
        }

        async function loadSimilarMovies(genres) {
            const similarSection = document.getElementById('similarMovies');
            const similarGrid = document.getElementById('similarGrid');
            
            // Use sample data for similar movies
            const sampleKeys = Object.keys(sampleMovies);
            const shuffled = sampleKeys.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 6);
            
            let moviesHTML = '';
            
            for (const movieKey of selected) {
                const movie = sampleMovies[movieKey];
                moviesHTML += `
                    <div class="movie-card" onclick="quickSearch('${movie.Title}')">
                        <img src="${movie.Poster}" alt="${movie.Title}" class="card-poster">
                        <div class="card-info">
                            <div class="card-title">${movie.Title}</div>
                            <div class="card-year">${movie.Year}</div>
                        </div>
                    </div>
                `;
            }
            
            similarGrid.innerHTML = moviesHTML;
            similarSection.classList.remove('hidden');
        }

        function addToHistory(search) {
            if (!searchHistory.includes(search)) {
                searchHistory.unshift(search);
                if (searchHistory.length > 5) {
                    searchHistory.pop();
                }
            }
        }

        function showLoading(show) {
            document.getElementById('loading').classList.toggle('hidden', !show);
        }

        function showError(message) {
            const errorDiv = document.getElementById('error');
            errorDiv.textContent = message;
            errorDiv.classList.remove('hidden');
        }

        function hideError() {
            document.getElementById('error').classList.add('hidden');
        }

        // Initialize with some sample data
        document.addEventListener('DOMContentLoaded', function() {
            // Add some random movie suggestions to trending
            const trendingContainer = document.getElementById('trendingMovies');
            const additionalMovies = ['Inception', 'Interstellar', 'The Prestige', 'Tenet', 'Dunkirk'];
            
            // Animation delay for trending items
            const trendingItems = document.querySelectorAll('.trending-item');
            trendingItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });
