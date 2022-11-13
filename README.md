# MOVIES API

## Technologies

1. ExpressJS
2. MySQL
3. TypeORM
4. Planetscale
5. Github Actions
6. Class Transformers
7. Zod
8. Docker

## Routes

### Actors

1. /actors => Fetch all actors ✅
2. /actors/:id => Fetch actor by id
3. /actors/movie/:id => Fetch movies for a particular actor

### Movies

1. /movies => Fetch all movies
2. /movies/:id => Fetch actor by id => [year, genre, sort_by, quality]
3. /movies/trending => Fetch trending movies
4. /movies/popular => Fetch popular movies
5. /movies/most-downloaded => Fetch most downloaded movies
6. /movies/upcoming => Fetch upcoming movies
7. /movies/top => Fetch top rated movies
8. /movies/latest => Fetch latest movies
9. /movies/cast/:id => Fetch full cast for a particular movie
10. /movies/similar/:id => Fetch similar movies
11. /movies/downloads => Fetch user's downloaded movies
12. /movies/wishlist => Fetch user's wishlist movies
13. /movies/torrent/:id => Download torrent for a movie
14. /movies/wishlist/:id => Delete a movie from wishlist

### Auth

1. /auth/login
2. /auth/register