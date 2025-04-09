import LoginPage from "./Components/LoginPage.jsx";
import Layout from "./Components/Layout.jsx";
import DashBoard from "./Components/DashBoard.jsx";
import CourseCatalog from "./Components/CourseCatalog.jsx";

const routes = [
    { path: "/", element: <LoginPage /> },
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "dashboard", element: <DashBoard /> },
            { path: "coursecatalog", element: <CourseCatalog /> },
        ],
    }
];

export default routes;
