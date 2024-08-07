import Beaker from "../components/Beaker";
import Scanner from "../components/Scanner";

const Home = () => {
  return (
    <div className="text-gray-800">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Beaker />
          <h1 className="text-2xl font-bold text-pink-800">
            Product Health Scanner
          </h1>
        </div>
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
        
          {/* Scanner Section */}
          <Scanner />
     
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
  );
};

export default Home;
