import { Link } from "react-router-dom";

function IndexMovieTheaters(){
    return(
        <>
            <h3>Movie Theaters</h3>
            <Link className="btn btn-primary" to="/movietheaters/create">Create movie theater</Link>
        </>
    );
}

export default IndexMovieTheaters;