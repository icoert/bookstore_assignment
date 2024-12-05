import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      aria-label="Main Navigation"
      className="bg-gray-800 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-20"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-gray-300 transition-colors"
        >
          Bookstore
        </Link>

        <div className="space-x-6 flex">
          <Link
            to="/books"
            className="hover:underline hover:text-gray-300 transition-colors"
          >
            Books
          </Link>
          <Link
            to="/profile"
            className="hover:underline hover:text-gray-300 transition-colors"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};
