import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import ProductsPage from "../pages/products/products";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/produtos" element={<ProductsPage />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
