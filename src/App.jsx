import './App.css';
import Layout from './components/layout';
import AboutPage from './pages/AboutPage';
import ArticleList from './components/ArticleList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Layout />,

    errorElement: <NotFoundPage/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/articles',
        element: <ArticleList />,
      },
      {
        path: '/articles/individual',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;