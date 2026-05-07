import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Product = {
  title: string;
  description: string;
};

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h1>Loading Products...</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;