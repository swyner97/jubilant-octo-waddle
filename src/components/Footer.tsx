const Footer = () => {
  return (
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
  );
};

export default Footer;
