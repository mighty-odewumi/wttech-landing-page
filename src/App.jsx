import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom";
import Page from "./components/Page";
import ComingSoon from "./components/ComingSoon";
import AboutUs from "./components/AboutUs";
import MainUI from "./components/MainUI";

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route 
        path="/"
        element={<Page />}
        errorElement={<ComingSoon />}
      >
        <Route
          index
          element={<MainUI />}
        />
        <Route 
          path="about-us"
          element={<AboutUs />}
        />
      </Route>
    </>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
