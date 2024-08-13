import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // POST request to validate login
      const res = await axios.post("http://localhost:5000/login", { email, password });

      if (res.data.success) {
        // After login success, make a GET request to retrieve the username
        const userInfoRes = await axios.get("http://localhost:5000/getUsername", { params: { email: email } });
        
        if (userInfoRes.data.success) {
          const username = userInfoRes.data.username;

          // Log username for debugging
          console.log('Username from GET:', username);

          // Navigate to home page with username in state
          navigate("/", { state: { id: email, username: username } });
        } else {
          alert("Failed to retrieve username");
        }
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="p-6 flex flex-col justify-start w-1/2 ">
        <form onSubmit={submit} className="w-64 place-self-center">
          <div className="form-group">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h1>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.toLowerCase())}
                  required
                  className="w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 form-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="rounded-full hover:bg-indigo-600 bg-indigo-400 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none shadow-lg submit-btn"
            >
              Submit
            </button>
            <div className="text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </div>

      <div className="p-6 flex flex-col justify-start w-1/2 bg-gradient-to-tr from-red-400 via-amber-300 to-indigo-400">
        <div className="w-auto flex justify-center">
          <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-white">
            New here?
          </h1>
        </div>
        <div className="mt-8 flex justify-center">
          <p className="text-gray-600">Sign up to discover!</p>
        </div>
        <Link
          to="/signup"
          className="place-self-center flex justify-center rounded-full hover:bg-indigo-600 bg-indigo-400 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none shadow-lg w-32 mt-5"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
