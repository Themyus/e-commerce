"use client";
import Image from "next/image";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 shadow rounded-lg flex flex-col justify-between h-92 p-4">
      <div className="flex justify-center items-center h-48 overflow-hidden">
        <Image
          width={400}
          height={400}
          src={product.image}
          alt={product.title}
          className="w-40 max-h-32 object-contain"
        />
      </div>
      <h3 className="text-white text-lg line-clamp-2 mt-10 mb-4">
        {product.title}
      </h3>
      <div className="justify-between flex items-end">
        <p className="text-lg text-white pb-0 justify-between">
          $ {product.price.toFixed(2)}
        </p>
        <div className="flex gap-4">
          <button
            onClick={addToCart}
            className="flex text-black bg-amber-300 border border-amber-400 rounded-lg shadow px-14 py-2 cursor-pointer hover:brightness-90 active:brightness-75"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
