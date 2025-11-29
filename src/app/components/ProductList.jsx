"use client";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "@/context/CartContext";

export default function ProductList({ products }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-4 gap-16 px-16">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}
