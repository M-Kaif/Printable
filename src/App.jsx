import Layout from './components/Layout';
import HomePage from './pages/HomePage'
import Document from './pages/DocumentPage';
import Blackbook from './pages/BlackbookPage'
import Login from './components/Login'
import PriceCalculator from './pages/PriceCalculator'
import BlackbookForm from './pages/forms/BlackbookForm';
import DocumentForm from './pages/forms/DocumentForm';
import CancellationPolicy from './pages/CancellationPolicy';
import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/Contactus';
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
        {
          path: "pricecal",
          element: <PriceCalculator />,
        },
        {
          path: "privacypolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "cancellation-policy",
          element: <CancellationPolicy />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        
      ],
    },
    
      {
        path: "login",
        element: <Login />,
      },
    
  ]);
  

  return (
     <RouterProvider router={router} />
  )
}

export default App
