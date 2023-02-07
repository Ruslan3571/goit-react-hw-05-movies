import { Routes, Route } from 'react-router-dom';

import { Layout } from './pages/00Layout';
import { Home } from './pages/02Home';

import { Movies } from './pages/03Movies';
import { MovieDetails } from './pages/04MovieDetails';
import { Cast } from './pages/05Cast';
import { Reviews } from './pages/06Reviews';
import { NotFound } from './pages/NotFound';

// const MovieDetails = lazy(() => import('./pages/04MovieDetails'));
// const Cast = lazy(() => import('./pages/05Cast'));
// const Reviews = lazy(() => import('./pages/06Reviews'));
// const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
