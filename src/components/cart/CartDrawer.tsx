"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { formatPrice } from "@/lib/cartUtils";
import { IoClose } from "react-icons/io5";

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, closeCart, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop Overlay with fade animation */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Cart Drawer with smooth slide animation */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[480px] bg-white z-[101] shadow-2xl transform transition-all duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-sm md:text-base font-bold uppercase header-font tracking-wide">
            Added to Your Basket
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-600 hover:text-black transition-all duration-300 p-1 cursor-pointer hover:rotate-90"
            aria-label="Close cart"
          >
            <IoClose size={28} />
          </button>
        </div>

        {/* Cart Items or Empty State */}
        <div
          className="flex-1 overflow-y-auto px-4 py-2"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {cart.length === 0 ? (
            <div
              className={`flex flex-col items-center justify-center h-full py-20 transition-all duration-500 ${
                isCartOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center">
                <svg
                  className="mx-auto mb-4 text-gray-300 animate-bounce"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D43642"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <p className="text-black text-lg font-medium page-font">
                  No products found
                </p>
                <p className="text-black text-sm mt-2 gilmor-regular">
                  Your cart is empty
                </p>
              </div>
            </div>
          ) : (
            <div className="pb-10 space-y-2">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-all duration-300 ${
                    isCartOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    transitionDelay: isCartOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Total and Checkout with slide up animation */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 transition-all duration-500 ${
            isCartOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {/* Total */}
          <div className="flex flex-col items-end gap-2 mb-4">
            <div className="flex justify-end gap-4 items-center">
              <span className=" font-medium gilmor-regular tracking-wide">
                Total:
              </span>
              <span className="gilmor-regular">{formatPrice(totalPrice)}</span>
            </div>
            <span className="text-[8px] text-right w-[257px] gilmor-regular">
              *ALL ORDERS MAY TAKE UPTO 5 to 7 WORKING DAYS TO BE DELIVERED TO
              YOUR DOORSTEP
            </span>
          </div>

          {/* Item Count */}
          {totalItems > 0 && (
            <p className="text-xs text-gray-500 text-center mb-3 gilmor-regular">
              {totalItems} {totalItems === 1 ? "item" : "items"} in cart
            </p>
          )}

          {/* Checkout Button */}
          <button
            className={`w-full py-2 rounded-lg text-white text-sm md:text-base font-bold uppercase page-font tracking-widest transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
              cart.length === 0
                ? "bg-gainsboro cursor-not-allowed"
                : "bg-foreground cursor-pointer hover:shadow-lg"
            }`}
            disabled={cart.length === 0}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
