import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom";
import Page from "./components/Page";


export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route 
      path="/"
      element={<Page />}
    />
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
