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

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index="Home" element={<HomePage />} />
              <Route path="All-Products" element={<ProductList />} />
              <Route path="Flash-Sale" element={<FlashSale />} />
              <Route path="Favourite" element={<Favourite />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Contact" element={<ContactPage />} />
              <Route path="Product-Info/:id" element={<ProductInfo />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
