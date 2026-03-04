import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products.service";
import { toast } from "react-toastify";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        toast.error("Failed to fetch Products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return { products, loading };
};
