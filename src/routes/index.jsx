import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import AccountPage from "../Pages/AccountPage";
import ContactPage from "../Pages/ContactPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);