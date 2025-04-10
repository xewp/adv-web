// src/App.js
import './App.css';
import Layout from './components/Layout'; // Make sure this path is correct
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
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'articles', element: <ArticleList /> },
      { path: 'articles/:articleId', element: <ArticlePage /> }, // Updated for dynamic routing
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;