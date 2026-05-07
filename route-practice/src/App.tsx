import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductsLayout from "./pages/ProductsLayout";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import PageLayout from "./layouts/PageLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="contact-us" element={<ContactUs />} />

          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<ProductsList />} />

            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;