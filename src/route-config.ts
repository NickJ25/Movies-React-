import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/indexGenres";
import LandingPage from "./movies/LandingPage";

const routes = [
    {path: '/', component: LandingPage},
    {path: '/genres', component: IndexGenres},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component:EditGenre},
];

export default routes;