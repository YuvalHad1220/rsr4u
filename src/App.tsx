import MainTheme from "./MainTheme"
import Sidebar from "./General/Sidebar";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import mappings from "./assets/routeMappings";
import HomepageView from "./Homepage/HomepageView";
import ErrorpageView from "./Errorpage/ErrorpageView";

function App() {
  const router = createBrowserRouter([
    {path: mappings.root, element: <Navigate to={mappings.homepage}/>},
    {
      element: <Sidebar />,
      errorElement: <ErrorpageView />,
      children: [
        {path: mappings.homepage, element: <HomepageView />}
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