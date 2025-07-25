import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Login from './pages/Login/section/Login.jsx';
import About from './pages/About/Info/About.jsx';
import Contact from './pages/ContactUs/Contact.jsx';
import Tester from './pages/Tester/Tester.jsx';
import AnalysisPage from './pages/AnalysisPage/AnalysisPage.jsx'
import Siginup from './pages/Login/Siginup.jsx';
const router = createBrowserRouter([
  {
    path: "/Login/",
    element: <Siginup/>,
  },
  {
    path: "/SignUp/",
    element: <Login/>,
  },
  {
    path: "/Homepage/",
    element: (<App />),
  },
  {
    path: "/About/",
    element: <About/>,
  },
  {
    path: "/Login/",
    element: <Login/>,
  },
  {
    path: "/Contact/",
    element: <Contact/>,
  },
  {
    path: "/Tester/",
    element:(<Tester/>) ,
  },
  {
    path: "/AnalysisPage/",
    element:(<AnalysisPage/>) ,
  },
  {
    path: "/",
    element: (
     <App/>
    ),
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
