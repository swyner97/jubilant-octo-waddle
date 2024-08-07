
function Scanner() {
    return <div className="bg-red-100 max-w-4xl mx-auto rounded-lg shadow-2xl p-6">
        <div className="text-center">
          <button className="rounded-full hover:bg-indigo-400 bg-red-200 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none shadow-lg">
            <i className="fas fa-camera"></i> Scan Now
          </button>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-pink-800">Scan Results</h2>
          <div className="border p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <img src="product.jpg" alt="Product" className="w-20 h-20 object-cover" />
              <div>
                <h3 className="text-lg font-bold text-pink-800">Product Name</h3>
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
          <h2 className="text-xl font-bold mb-4 text-pink-800">Recently Scanned Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Product Item */}
            <div className="border p-4 rounded-lg flex items-center space-x-4">
              <img src="product1.jpg" alt="Product" className="w-16 h-16 object-cover" />
              <div>
                <h3 className="text-lg font-bold text-pink-800">Product 1</h3>
                <p className="text-sm text-gray-600">
                  Score: <span className="font-bold text-yellow-500">C</span>
                </p>
              </div>
            </div>
            {/* Product Item */}
            <div className="border p-4 rounded-lg flex items-center space-x-4">
              <img src="product2.jpg" alt="Product" className="w-16 h-16 object-cover" />
              <div>
                <h3 className="text-lg font-bold text-pink-800">Product 2</h3>
                <p className="text-sm text-gray-600">
                  Score: <span className="font-bold text-red-500">E</span>
                </p>
              </div>
            </div>
            {/* More products... */}
          </div>
        </div>
      </div>
}

export default Scanner;