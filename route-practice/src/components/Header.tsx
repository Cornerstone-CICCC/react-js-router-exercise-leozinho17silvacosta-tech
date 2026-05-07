import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 bg-slate-300 mb-4">
      <div className="logo font-bold">ROUTER EXERCISE</div>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-all"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition-all"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact-us"
              className="hover:text-blue-500 transition-all"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className="hover:text-blue-500 transition-all"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;