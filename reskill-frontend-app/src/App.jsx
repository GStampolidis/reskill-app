import "./App.css";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./components/Loader";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const SinglePost = lazy(() => import("./pages/SinglePost"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactMePage = lazy(() => import("./pages/ContactMePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:id",
    loader: async ({ params }) => {
      const response = await axios.get(
        `http://localhost:3000/posts/${params.id}`
      );
      return response;
    },
    element: (
      <Suspense fallback={<Loader />}>
        <SinglePost />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loader />}>
        <AboutPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loader />}>
        <ContactMePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
