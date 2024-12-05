import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button } from "./ui/button";

export const Sidebar = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);

  return (
    <aside className="w-80 h-[calc(100vh)] bg-white shadow-lg p-4 border-l border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col h-full">
          <ul className="flex-grow space-y-4 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4">
            <p className="text-lg font-bold text-gray-800">
              Total: ${total.toFixed(2)}
            </p>
            <Button className="w-full mt-4 bg-slate-100 text-white py-2 rounded hover:bg-slate-300">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
};
