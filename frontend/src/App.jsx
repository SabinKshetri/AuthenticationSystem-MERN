import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import UpdateUser from "./pages/UpdateUser";
import SendOTP from "./pages/forgotPassword/SendOTP";
import VerifyOTP from "./pages/forgotPassword/VerifyOTP";
import UpdatePassword from "./pages/forgotPassword/UpdatePassword";

function App() {
  const Layout = () => {
    return (
      <div className="webContainer">
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/allUsers",
          element: <Users />,
        },
        {
          path: "/updateUser/:id",
          element: <UpdateUser />,
        },
        {
          path: "/forgotPassword",
          element: <SendOTP />,
        },
        {
          path: "/verifyotp/:id",
          element: <VerifyOTP />,
        },
        {
          path: "/updatepassword/:id",
          element: <UpdatePassword />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
