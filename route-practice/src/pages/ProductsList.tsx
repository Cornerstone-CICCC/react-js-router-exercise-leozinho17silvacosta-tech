import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  description: string;
};

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl hover:text-red-500 transition-all text-center">Products</h1>

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="border p-4 rounded hover:bg-gray-100 transition-all"
        >
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p>{product.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;