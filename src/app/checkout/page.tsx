"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/cartUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Pakistan",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save cart to local storage for thank you page
    if (cart.length > 0) {
      localStorage.setItem("danime_last_order", JSON.stringify(cart));
    }

    // Clear cart and redirect to thank you page
    clearCart();
    router.push(`/thank-you?name=${encodeURIComponent(formData.firstName)}`);
  };

  // Redirect if cart is empty
  if (cart.length === 0) {
    return (
      <div className="container min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 text-gray-300"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <h2 className="text-2xl font-bold page-font mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 gilmor-regular mb-6">
            Add some products to checkout
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-foreground text-white px-8 py-3 rounded-lg page-font hover:bg-foreground/90 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold page-font text-center mb-8">
        CHECKOUT
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Side - Shipping Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold header-font mb-6">
              Shipping Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium gilmor-regular mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                  placeholder="Street address"
                />
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="Karachi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="Sindh"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium gilmor-regular mb-2">
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                    placeholder="75500"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium gilmor-regular mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground gilmor-regular"
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-foreground text-white py-4 rounded-lg page-font text-lg font-bold uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-6"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
            <h2 className="text-xl font-bold header-font mb-6">
              Order Summary
            </h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto hidden-scrollbar md:h-40">
              {cart.map((item) => {
                const itemPrice = item.discountPrice ?? item.price;
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 pb-4 border-b border-foreground"
                  >
                    <div className="relative w-16 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold header-font leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 gilmor-regular mt-1">
                        Size: {item.size}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-600 gilmor-regular">
                          Qty: {item.quantity}
                        </span>
                        <span className="text-sm font-bold gilmor-regular">
                          {formatPrice(itemPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Totals */}
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between gilmor-regular">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between gilmor-regular">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                <span className="page-font">Total</span>
                <span className="page-font">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 gilmor-regular text-center">
                All orders may take up to 5-7 working days to be delivered to
                your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
