"use client";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Minus, Plus } from "lucide-react";

export default function CartItem({ product }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div className="flex flex-col justify-between bg-zinc-900 border-2 border-zinc-800 shadow rounded-lg w-[700px] min-h-40 px-4">
      <div className="flex justify-center items-center h-48 mt-6 overflow-hidden">
        <Image
          width={300}
          height={300}
          src={product.image}
          alt={product.title}
          className="w-40 max-h-32 object-contain"
        />
      </div>
      <h3 className="text-white text-md line-clamp-2 mt-10 mb-6">
        {product.title}
      </h3>
      <div className="flex justify-between mb-4">
        <p className="text-white text-lg mt-2">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
        <div className="flex gap-4 text-white">
          <button
            onClick={() => removeFromCart(product.id)}
            className="px-16 py-2 bg-red-800 rounded hover:brightness-95 hover:cursor-pointer active:brightness-90"
          >
            Remove
          </button>
          <button
            onClick={() => decreaseQuantity(product.id)}
            className="hover:brightness-90 hover:cursor-pointer active:brightness-75"
          >
            <Minus />
          </button>
          <p className="mt-2">{product.quantity}</p>
          <button
            onClick={() => increaseQuantity(product.id)}
            className="hover:brightness-90 hover:cursor-pointer active:brightness-75"
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
