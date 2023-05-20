import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/indexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/indexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheaters from "./movietheaters/indexMovieTheaters";

const routes = [
    {path: '/', component: LandingPage},

    {path: '/genres', component: IndexGenres},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component:EditGenre},

    {path: '/actors', component: IndexActors},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit', component:EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit', component:EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit', component: EditMovie},
    {path: '/movies/filter', component:FilterMovies},
];

export default routes;