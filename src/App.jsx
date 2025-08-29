import { Suspense } from "react";
import AppLayout from "./Pages/AppLayout";
import HomePage from "./Pages/Home/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";
import ProductList from "./Pages/ProductList/ProductList";
import ProductInfo from "./Pages/ClickedProducts/ProductInfo";
import FlashSale from "./Pages/FlashSale";
import Favourite from "./Pages/Favourite";
import Cart from "./Pages/Cart";
import ContactPage from "./Pages/ContactPage";

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
              {/* <Route path="id" /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
