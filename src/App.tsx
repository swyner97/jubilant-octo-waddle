import Beaker from "./Beaker";

import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Fragment>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Health Scanner</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </div>
      <div className="text-gray-800">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Beaker />
            <h1 className="text-2xl font-bold text-pink-800">
              Product Health Scanner
            </h1>
          </div>
          <nav className="space-x-6">
            <a href="#" className="text-pink-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-pink-700 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-pink-700 hover:text-blue-500">
              Login
            </a>
            <a href="#" className="text-pink-700 hover:text-blue-500">
              Contact
            </a>
          </nav>
          <div className="relative">
            <button className="rounded-full">
              <img
                src="profile-icon.png"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
              >
                Logout
              </a>
            </div>
          </div>
        </header>
        {/* Main Content Area */}
        <main className="p-8 bg-gradient-to-tr from-red-400 via-amber-300 to-indigo-400">
          <div className="bg-red-100 max-w-4xl mx-auto rounded-lg shadow-2xl p-6">
            {/* Scanner Section */}
            <div className="text-center">
              <button className="rounded-full hover:bg-indigo-400 bg-red-200 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none shadow-lg">
                <i className="fas fa-camera"></i> Scan Now
              </button>
            </div>

            {/* Results Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-pink-800">
                Scan Results
              </h2>
              <div className="border p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src="product.jpg"
                    alt="Product"
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-pink-800">
                      Product Name
                    </h3>
                    <p className="text-sm text-gray-600">
                      Score: <span className="font-bold text-green-500">A</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      This product is healthy and safe to use.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-8 shadow-lg">
              <input
                type="text"
                placeholder="Search for a product..."
                className="w-full p-2 border rounded-lg focus:outline-none"
              />
            </div>

            {/* Product List */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-pink-800">
                Recently Scanned Products
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Product Item */}
                <div className="border p-4 rounded-lg flex items-center space-x-4">
                  <img
                    src="product1.jpg"
                    alt="Product"
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-pink-800">
                      Product 1
                    </h3>
                    <p className="text-sm text-gray-600">
                      Score:{" "}
                      <span className="font-bold text-yellow-500">C</span>
                    </p>
                  </div>
                </div>
                {/* Product Item */}
                <div className="border p-4 rounded-lg flex items-center space-x-4">
                  <img
                    src="product2.jpg"
                    alt="Product"
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-pink-800">
                      Product 2
                    </h3>
                    <p className="text-sm text-gray-600">
                      Score: <span className="font-bold text-red-500">E</span>
                    </p>
                  </div>
                </div>
                {/* More products... */}
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white shadow-md p-4 mt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2024 Product Health Scanner. All rights reserved.
          </p>
          <div className="space-x-4 mt-2">
            <a href="#" className="text-pink-700 hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="text-pink-700 hover:text-blue-500">
              Terms of Service
            </a>
          </div>
        </footer>

        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </div>
    </Fragment>
  );
}

export default App;
