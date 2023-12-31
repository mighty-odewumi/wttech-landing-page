import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom";
import Page from "./components/Page";
import ComingSoon from "./components/ComingSoon";

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route 
      path="/"
      element={<Page />}
      errorElement={<ComingSoon />}
    />
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
