import { useEffect, useState } from "react";
import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import MoviesList from "./movies/MoviesList";
import  { landingPageDTO } from "./movies/movies.model";

function App() {
  // Artifical loading
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(()=>{
    const timerId = setTimeout(()=> {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'The Super Mario Bros. Movie',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/The_Super_Mario_Bros._Movie_poster.jpg/220px-The_Super_Mario_Bros._Movie_poster.jpg'
          },
          {
            id: 2,
            title: 'Dungeons & Dragons: Honor Among Thieves',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg/220px-Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg'
          },
        ],

        upcomingReleases: [
          {
            id: 3,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          }
        ],
      })
    }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <div className="container">
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters}/>

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases}/>
    </div>
  );
}

export default App;
