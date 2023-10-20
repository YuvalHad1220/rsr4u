import MainTheme from "./General/MainTheme"
import Sidebar from "./General/Sidebar";
import { Suspense, lazy } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import mappings from "./assets/routeMappings";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AddMisdarPage from "./Pages/AddMisdarPage/AddMisdarPage"; 
import LastMisdarDataPage from "./Pages/LastMisdarDataPage/LastMisdarDataPage";
const SoldiersPage = lazy(() => import("./Pages/SoldiersPage/SoldiersPage"));
const UpdateAndDistributeMisdarPage = lazy(() => import("./Pages/UpdateAndDistributeMisdarPage/UpdateAndDistributeMisdarPage"));
const DevPage = lazy(() => import("./Pages/DevPage/DevPage")); //
const MisdarTablePage = lazy(() => import("./Pages/MisdarTablePage/MisdarTablePage")); //
const UsersPage = lazy(() => import("./Pages/UsersPage/UsersPage")); // 
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage")); //

function App() {
  const router = createBrowserRouter([
    {path: mappings.root, element: <Navigate to={mappings.homepage}/>},
    {
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        {path: mappings.homepage, element: <HomePage />},
        {path: mappings.lastMisdarData, element: <LastMisdarDataPage />},
        {path: mappings.devDebug, element: <Suspense><DevPage /></Suspense>},
        {path: mappings.addMisdar, element: <AddMisdarPage />},
        {path: mappings.misdarTable, element: <Suspense><MisdarTablePage/></Suspense>},
        {path: mappings.updateAndDistributeMisdar, element: <Suspense><UpdateAndDistributeMisdarPage /></Suspense>},
        {path: mappings.usersPage, element:<Suspense><UsersPage/></Suspense>},
        {path: mappings.soldiersPage, element:<Suspense><SoldiersPage/></Suspense>},
        {path: mappings.about, element: <Suspense><AboutPage /></Suspense>}
      ]
    }
  ]);
  return (
    <MainTheme>
      <RouterProvider router={router} />
    </MainTheme>
  )
}

export default App;