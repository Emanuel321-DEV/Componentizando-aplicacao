import { MovieCard } from "./MovieCard"

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresMoviesProps{
  selectedGenreProp: GenreResponseProps;
  moviesProp: MovieProps[];
}

{/* <Content selectedGenre={} movies={movies} > */}
export function Content({selectedGenreProp, moviesProp}: GenresMoviesProps) {
  // Complete aqui

{/* Content */}

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreProp.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {moviesProp.map(movie => (
            <MovieCard 
              key ={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
{/*Fim de content*/}
}