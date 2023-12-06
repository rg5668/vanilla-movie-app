import { createRouter } from '../core';
import About from './About';
import Home from './Home';
import Movie from './Movie';
import NouFound from './NouFound';

export default createRouter([
    { path: '#/', component: Home },
    {
        path: '#/movie',
        component: Movie,
    },
    {
        path: '#/about',
        component: About,
    },
    {
        // find test
        path: '.*',
        component: NouFound,
    },
]);
