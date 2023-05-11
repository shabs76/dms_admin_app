import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// components or pages
import AppMain from './AppMain';
import ErrorPage from './components/pages/Errors/ErrorPage';
import Admin from './components/pages/Admin/Admin';
import UsLog from './components/pages/Us/UsLog';
import Terms from './components/pages/Company/Terms';
import Privacy from './components/pages/Company/Privacy';
import Cookie from './components/pages/Company/Cookie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/",
        element: <UsLog />
      },
      {
        path: "/terms",
        element: <Terms />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/cookie",
        element: <Cookie />
      },
    ],
  },
])

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
