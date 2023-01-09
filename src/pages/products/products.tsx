import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { Product } from "../../models/product-model";
import ProductCard from "../../components/product-card/product-card";
import Header from "../../components/header/header";
import Carousel from "../../components/carousel/carousel";
import "./products-styles.css";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
