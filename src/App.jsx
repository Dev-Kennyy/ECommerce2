import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import AppLayout from "./Pages/AppLayout.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import Loading from "./Components/Loading.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";
import ProductInfo from "./Pages/ClickedProducts/ProductInfo.jsx";
import FlashSale from "./Pages/FlashSale.jsx";
import Favourite from "./Pages/Favourite.jsx";
import Cart from "./Pages/Cart.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignPage from "./Pages/SignPage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx"; // ⬅️ import this

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="All-Products" element={<ProductList />} />

            {/* ✅ Protected routes */}
            <Route
              path="Flash-Sale"
              element={
                <ProtectedRoute>
                  <FlashSale />
                </ProtectedRoute>
              }
            />
            <Route
              path="Favourite"
              element={
                <ProtectedRoute>
                  <Favourite />
                </ProtectedRoute>
              }
            />
            <Route
              path="Cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="Product-Info/:id"
              element={
                <ProtectedRoute>
                  <ProductInfo />
                </ProtectedRoute>
              }
            />

            {/* Public routes */}
            <Route path="Contact" element={<ContactPage />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="Register" element={<SignPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
