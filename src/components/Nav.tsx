
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="flex">
      <li className="mr-3">
        <Link to="/" className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">
          Home
        </Link>
      </li>
      <li className="mr-3">
        <Link to="/login" className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3">
          Login
        </Link>
      </li>
      <li className="mr-3">
        <a className="inline-block py-1 px-3 text-gray-400 cursor-not-allowed" href="#">
          Disabled Pill
        </a>
      </li>
    </ul>
  );
}

export default Nav;
