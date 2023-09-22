import MainTheme from "./General/MainTheme"
import Sidebar from "./General/Sidebar";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import mappings from "./assets/routeMappings";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import DevPage from "./Pages/DevPage/DevPage";
import AddMisdarPage from "./Pages/AddMisdarPage/AddMisdarPage";

function App() {
  const router = createBrowserRouter([
    {path: mappings.root, element: <Navigate to={mappings.homepage}/>},
    {
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        {path: mappings.homepage, element: <HomePage />},
        {path: mappings.devDebug, element: <DevPage />},
        {path: mappings.addMisdar, element: <AddMisdarPage />}
      ]
    }
  ])
  return (
    <MainTheme>
      <RouterProvider router={router} />
      
    </MainTheme>
  )
}

export default App;