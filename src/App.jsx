  import React from 'react';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import Layout from './components/Layout';
  import HomePage from './pages/LandingPages/HomePage';
  import AboutPage from './pages/LandingPages/AboutPage';
  import ArticlePage from './pages/LandingPages/ArticlePage';
  import NotFoundPage from './pages/NotFoundPage'; // Moved to LandingPages
  import ArticleListPage from './pages/LandingPages/ArticleListPage';
  import LoginPage from './pages/LoginPage'; // Moved to LandingPages
  import RegistrationPage from './pages/RegistrationPage'; // Moved to LandingPages
  import AuthLayout from './components/AuthLayout';
  import DashLayout from './components/DashLayout';
  import DashboardPage from './pages/DashboardPages/DashboardPage';
  import UsersPage from './pages/DashboardPages/UsersPage';
  import ReportsPage from './pages/DashboardPages/ReportsPage';

  const routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'articles',
          element: <ArticleListPage />,
        },
        {
          path: 'articles/:name',
          element: <ArticlePage />,
        },
      ],
    },
    {
      path: '/login',
      element: <AuthLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: '/register',
      element: <AuthLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <RegistrationPage />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: 'users',
          element: <UsersPage />,
        },
        {
          path: 'reports',
          element: <ReportsPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  function App() {
    return <RouterProvider router={router} />;
  }

  export default App;