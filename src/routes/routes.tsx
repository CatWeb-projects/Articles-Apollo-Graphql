import React, {
  lazy,
  Suspense,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components';

const ArticlesPage = lazy(() => import('../pages/Articles/ArticlesPage'));
const ArticlePage = lazy(() => import('../pages/Articles/ArticlePage'));

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            (
              <Suspense fallback={<div>...loading page</div>}>
                <ArticlesPage />
              </Suspense>
            )
          }
        />
        <Route
          path=":lang/:url"
          element={
            (
              <Suspense fallback={<div>...loading page</div>}>
                <ArticlePage />
              </Suspense>
            )
          }
        />
      </Route>
    </Routes>
  )
}

export default MainRoutes;
