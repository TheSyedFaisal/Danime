"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/lib/constant";
import { formatPrice } from "@/lib/cartUtils";
import { IoTrashOutline } from "react-icons/io5";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const displayPrice = item.discountPrice ?? item.price;
  const itemTotal = displayPrice * item.quantity;

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex gap-3 py-4 border-b border-foreground">
      {/* Product Image */}
      <div className="relative w-[96px] h-[154px] flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
          unoptimized={true}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title and Remove Button */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold uppercase gilmer-heavy leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600 mt-1 gilmor-regular">
              Size: {item.size}
            </p>
            {item.color && (
              <p className="text-xs text-gray-600 mt-1 flex items-center gap-1.5 gilmor-regular">
                Color:{" "}
                <span
                  className="inline-block w-3 h-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: item.color }}
                ></span>
              </p>
            )}
          </div>

          <button
            onClick={handleRemove}
            className="text-gray-500 hover:text-red-500 transition-colors p-1"
            aria-label="Remove item"
          >
            <IoTrashOutline size={18} />
          </button>
        </div>

        {/* Quantity Controls and Price */}
        <div className="flex justify-between items-center mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <button
              onClick={handleDecrease}
              className="px-2 py-1 hover:bg-gray-100 transition-colors text-sm"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="px-3 py-1 text-sm font-medium border-x border-gray-300">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="px-2 py-1 hover:bg-gray-100 transition-colors text-sm"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-base gilmor-regular ">
              {formatPrice(itemTotal)}
            </p>

            <p className="text-xs text-gray-500 gilmor-regular">
              {item.quantity}x {formatPrice(displayPrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
