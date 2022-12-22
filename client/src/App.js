import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalState } from "./GlobalState";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DetailProduct from "./pages/detailProduct";
import CartPage from "./pages/cartPage";
import CreateProductPage from "./pages/createProduct";
import CreateCategory from "./pages/createCategory";
import NotFound from "./pages/notFound";
import OrderDetailsPage from "./pages/orderDetailsPage";
import OrderHistoryPage from "./pages/orderHistoryPage";


function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>

        <Route
          path="/login"
          element={isLogged ? <NotFound></NotFound> : <LoginPage></LoginPage>}
        ></Route>
        <Route
          path="/register"
          element={
            isLogged ? <NotFound></NotFound> : <RegisterPage></RegisterPage>
          }
        ></Route>

        <Route
          path="/detail/:id"
          element={<DetailProduct></DetailProduct>}
        ></Route>

        <Route
          path="/category"
          element={isAdmin ? <CreateCategory></CreateCategory> : <NotFound></NotFound>}
        />
        <Route
          path="/create_product"
          element={isAdmin ? <CreateProductPage></CreateProductPage> : <NotFound></NotFound>}
        />
        <Route
          path="/edit_product/:id"
          element={isAdmin ? <CreateProductPage></CreateProductPage> : <NotFound></NotFound>}
        />

        <Route
          path="/history"
          element={isLogged ? <OrderHistoryPage></OrderHistoryPage> : <NotFound></NotFound>}
        />
        <Route
          path="/history/:id"
          element={isLogged ? <OrderDetailsPage></OrderDetailsPage> : <NotFound></NotFound>}
        />

        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}

export default App;
