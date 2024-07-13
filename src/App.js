import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./componenets/navbar/Navbar";
import Menu from "./componenets/menu/Menu";
import Footer from "./componenets/footer/Footer";
import Login from "./pages/login/Login";
import  './styles/global.scss'
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient,
QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
           <QueryClientProvider client={queryClient}>
            <Outlet />
           </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",  // Main layout
      element: <Layout />,
      children: [
        {
          path: "/",   // Home page
          element: <Home />,
        },
        {
          path: "/users",  // Users page
          element: <Users />,
        },
        {
          path: "/products",  // Products page
          element: <Products />,
        },
        {
          path: "/users/:id",  // Products page
          element: <User />,
        },
        {
          path: "/products/:id",  // Products page
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",  // Login page
      element: <Login />,
    },
  ]);
  
  return <RouterProvider router={router} />;
}
export default App;
