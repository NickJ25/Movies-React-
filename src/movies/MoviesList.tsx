import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "./MoviesList.module.css"

interface moviesListProps{
    movies?: movieDTO[];
}

function MoviesList(props: moviesListProps){

    if(!props.movies){
        return <Loading/>
    } else if (props.movies.length === 0){
        return <>There are no movies to displayPartsToString.</>
    } else {
        return (
            <div className={css.div}>
                {props.movies.map(movie => <IndividualMovie {...movie} key={movie.id}/>)}
            </div>
        );
    }
}

export default MoviesList;