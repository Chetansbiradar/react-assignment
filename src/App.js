import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ToDo from './components/ToDo';
import Shopping from './components/Shopping';
import APITest from './components/APITest';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import TodoContext from './utils/TodoContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Error from './components/Error';

// This app uses 
// 1. react-router-dom
// 2. redux-toolkit
// 3. react-redux
// 4. context-api
// 5. tailwindcss
// Hooks
// 1. useState
// 2. useEffect
// 3. useReducer
// 4. useSelector
// 5. useDispatch
// 6. useRouteError
// 7. useContext

const AppLayout = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
    <Provider store={store}>
      <Header />
      <TodoContext.Provider value={{todos, setTodos}}>
      <Outlet />
      </TodoContext.Provider>
    </Provider>
      <Footer />
    </>
  );
};

const BrowserRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <Error/>,
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
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "contact",
        element: <Contact/>
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
