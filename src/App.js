import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ToDo from './components/ToDo';
import Shopping from './components/Shopping';
import APITest from './components/APITest';
import Cart from './components/Cart';


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const BrowserRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      { path:"",
        element: <Body/>
      },
      {
        path: "todo",
        element: <ToDo/>
      },
      {
        path: "shopping",
        element: <Shopping/>
      },
      {
        path: "api",
        element: <APITest/>
      },
      {
        path: "cart",
        element: <Cart/> 
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={BrowserRouter}/>
  );
}

export default App;
