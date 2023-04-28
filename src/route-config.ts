import IndexGenres from "./genres/indexGenres";
import LandingPage from "./movies/LandingPage";

const routes = [
    {path: '/', component: LandingPage},
    {path: '/genres', component: IndexGenres}
];

export default routes;