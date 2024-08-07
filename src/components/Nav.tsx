
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="flex justify-center">
      <li className="mr-3">
        <Link to="/" className="inline-block border outline-offset-4 rounded py-1 px-3  hover:bg-indigo-400 text-grey">
          Home
        </Link>
      </li>
      <li className="mr-3">
        <Link to="/login" className="inline-block border outline-offset-4 rounded py-1 px-3  hover:bg-indigo-400 text-grey">
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
