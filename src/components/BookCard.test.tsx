import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BookCard } from "../components/BookCard";

const mockStore = configureStore([]);

describe("BookCard", () => {
  it("should dispatch addToCart when 'Add to Cart' button is clicked", () => {
    const store = mockStore({
      cart: { items: [], total: 0 },
    });

    store.dispatch = jest.fn();

    const book = {
      id: 1,
      title: "React for Beginners",
      author: "John Doe",
      price: 19.99,
      stock: 5, // Ensure stock > 0
    };

    render(
      <Provider store={store}>
        <BookCard book={book} />
      </Provider>
    );

    // Ensure the button is correctly located
    const button = screen.getByText(/add to cart/i);
    fireEvent.click(button);

    // Validate the dispatch call
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "cart/addToCart",
      payload: {
        id: 1,
        title: "React for Beginners",
        price: 19.99,
        quantity: 1,
      },
    });
  });
});
