import { Routes as Endpoints, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./ui/pages/home/Index'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Endpoints>
        <Route element={<Home/>} path='/'/>
      </Endpoints>
    </Suspense>
  );
}

export default Routes;