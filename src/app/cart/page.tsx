"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string; 
}

export default function CartPage() {
  const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
  const router = useRouter();

 
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCart(storedCart);
  }, []);

  // Delete cart item functionality
  const handleDelete = (title: string) => {
    const updatedCart = { ...cart };
    delete updatedCart[title];

    // Update state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Notify TopBar to update the cart count
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Handle checkout
  const handleCheckout = () => {
    // Store the cart items in localStorage before navigating
    localStorage.setItem("checkoutCart", JSON.stringify(cart));

    // Navigate to the Checkout component
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {Object.keys(cart).length > 0 ? (
        <div className="space-y-6">
          {Object.keys(cart).map((key) => {
            const item = cart[key];
            return (
              <div
                key={key}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded">
                      <span>No Image</span>
                    </div>
                  )}

                  {/* Product Details */}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">
                      Price: ${item.price} | Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(item.title)}
                  className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                  <div className="flex items-center gap-1">
                    <AiTwotoneDelete />
                    Delete
                  </div>
                </button>
              </div>
            );
          })}

          {/* Total Price */}
          <div className="mt-6 text-xl font-bold text-gray-900">
            Total: $
            {Object.keys(cart).reduce(
              (total, key) => total + cart[key].price * cart[key].quantity,
              0
            )}
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-[#007580] text-white px-4 py-2 rounded hover:bg-[#007580] mt-6"
          >
            Check Out
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}