import MainTheme from "./General/MainTheme"
import Sidebar from "./General/Sidebar";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import mappings from "./assets/routeMappings";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import DevPage from "./Pages/DevPage/DevPage";
import AddMisdarPage from "./Pages/AddMisdarPage/AddMisdarPage";
import DownloadMisdarPage from "./Pages/DownloadMisdarPage/DownloadMisdarPage";
import UpdateAndDistributeMisdarPage from "./Pages/UpdateAndDistributeMisdarPage/UpdateAndDistributeMisdarPage";
import LastMisdarDataPage from "./Pages/LastMisdarDataPage/LastMisdarDataPage";
import AddUserPage from "./Pages/AddUserPage/AddUserPage";
import UserPermissionsPage from "./Pages/UserPermissionsPage/UserPermissionsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  const router = createBrowserRouter([
    {path: mappings.root, element: <Navigate to={mappings.homepage}/>},
    {
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        {path: mappings.homepage, element: <HomePage />},
        {path: mappings.lastMisdarData, element: <LastMisdarDataPage />},
        {path: mappings.devDebug, element: <DevPage />},
        {path: mappings.addMisdar, element: <AddMisdarPage />},
        {path: mappings.downloadMisadar, element: <DownloadMisdarPage />},
        {path: mappings.updateAndDistributeMisdar, element: <UpdateAndDistributeMisdarPage />},
        {path: mappings.addUser, element: <AddUserPage />},
        {path: mappings.userPermissions, element: <UserPermissionsPage />},
        {path: mappings.about, element: <AboutPage />}
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