import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryView from "../views/category";
import ItemView from "../views/item";
import CartView from "../views/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/category/:category',
    element: <CategoryView/>,
  },
  {
    path:"/item/:id",
    element: <ItemView />},
  {
    path:"/cart/",
    element: <CartView/>},
]);