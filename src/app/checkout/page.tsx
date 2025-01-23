"use client";

import React, { useRef, useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"; // Adjust the path to your client.ts file
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<{ [key: string]: CartItem }>({});

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartItems(storedCart);
  }, []);

  const getName = useRef<HTMLInputElement>(null);
  const getPhone = useRef<HTMLInputElement>(null);
  const getAd1 = useRef<HTMLInputElement>(null);
  const getAd2 = useRef<HTMLInputElement>(null);
  const getCity = useRef<HTMLInputElement>(null);
  const getProvince = useRef<HTMLInputElement>(null);
  const getPostalCode = useRef<HTMLInputElement>(null);
  const getCountry = useRef<HTMLInputElement>(null);
  const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null); // Reference to the form element

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the payload
    const payload = {
      _type: "order", // Matches the schema name
      name: getName.current?.value,
      phone: getPhone.current?.value,
      addressLine1: getAd1.current?.value,
      addressLine2: getAd2.current?.value,
      cityLocality: getCity.current?.value,
      stateProvince: getProvince.current?.value,
      postalCode: getPostalCode.current?.value,
      countryCode: getCountry.current?.value,
      addressResidentialIndicator:
        getAddressResidentialIndicator.current?.value,
      cartItems: Object.keys(cartItems).map((key) => ({
        title: cartItems[key].title,
        price: cartItems[key].price,
        quantity: cartItems[key].quantity,
      })),
    };

    try {
      // Send data to Sanity
      const result = await client.create(payload);
      console.log("Order created in Sanity:", result);

      // Clear the cart from localStorage
      localStorage.removeItem("cart"); // Clear the cart
      setCartItems({}); // Clear the cart state

      // Clear the form inputs
      if (formRef.current) {
        formRef.current.reset();
      }

      // Dispatch a custom event to update the cart count in TopBar
      window.dispatchEvent(new Event("cartUpdated"));

      // Show success pop-up
      alert("Your order is placed! Thank You for shopping!");
    } catch (error) {
      console.error("Error creating order in Sanity:", error);
      alert("Failed to place order. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        ref={formRef} // Attach the formRef to the form element
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Place Order</h2>

        {/* Shipping Address Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={getName}
              placeholder="Enter full name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              ref={getPhone}
              placeholder="Enter phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address Line 1
            </label>
            <input
              type="text"
              name="addressLine1"
              id="addressLine1"
              ref={getAd1}
              placeholder="Enter address line 1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address Line 2
            </label>
            <input
              type="text"
              name="addressLine2"
              id="addressLine2"
              ref={getAd2}
              placeholder="Enter address line 2"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="cityLocality"
              id="cityLocality"
              ref={getCity}
              placeholder="Enter city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="stateProvince"
              id="stateProvince"
              ref={getProvince}
              placeholder="Enter state"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              ref={getPostalCode}
              placeholder="Enter postal code"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country Code
            </label>
            <input
              type="text"
              name="countryCode"
              id="countryCode"
              ref={getCountry}
              placeholder="Enter country code"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Residential Address
            </label>
            <select
              name="addressResidentialIndicator"
              id="addressResidentialIndicator"
              ref={getAddressResidentialIndicator}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Display Cart Items */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Cart Items</h3>
          {Object.keys(cartItems).map((key) => {
            const item = cartItems[key];
            return (
              <div
                key={key}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm mb-2"
              >
                <div className="flex items-center gap-4">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded">
                      <span>No Image</span>
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">
                      Price: ${item.price} | Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Place Order Button */}
        <div className="mt-6 flex flex-col gap-4">
          <button
            type="submit"
            className="w-full bg-[#007580] text-white py-2 px-4 rounded-md hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Place Order
          </button>
        <button className="w-[140px] lg:w-full h-[44px] sm:h-[52px] rounded-[8px] px-4 sm:px-6 py-[10px] sm:py-[14px] flex gap-3 sm:gap-5 items-center justify-center bg-[#029FAE] hover:bg-gray-300 hover:text-black transition-all mt-8">
          <Link
            href="/shop"
            className="font-inter text-sm sm:text-base leading-tight sm:leading-[17.6px] text-[#FFFFFF]"
            >
            Go Back to Shop
          </Link>
          <span className="text-[#FFFFFF]">
            {" "}
            <ArrowRight size={18} />{" "}
          </span>
        </button>
            </div>
      </form>
    </div>
  );
}
