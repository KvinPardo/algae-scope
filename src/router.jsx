import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
  

])

export default router;