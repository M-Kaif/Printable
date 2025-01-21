import Layout from './components/Layout';
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import Document from './pages/DocumentPage';
import Blackbook from './pages/BlackbookPage'
import BlackbookForm from './pages/forms/BlackbookForm';
import DocumentForm from './pages/forms/DocumentForm';
import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, 
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "documents",
          element: <Document />,
        },
        {
          path: "blackbook",
          element: <Blackbook />,
        },
        {
          path: "order-document",
          element: <DocumentForm />,
        },
        {
          path: "order-blackbook",
          element: <BlackbookForm />,
        },
      ],
    },
  ]);
  

  return (
     <RouterProvider router={router} />
  )
}

export default App
