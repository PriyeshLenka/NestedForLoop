import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// TO:DO debouncing implementation
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true); // Track if the user is on the login page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      validateEmail();
    }
    if (name === 'password') {
      validatePassword();
    }
  };

  const validateEmail = () => {
    // Simple email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address'
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const validatePassword = () => {
    // Basic password strength validation (minimum 8 characters)
    if (!formData.password || formData.password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long'
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (!errors.email && !errors.password) {
      setLoading(true);
      // Simulate API call (replace with your actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      console.log('Form submitted:', formData);
    }
  };

  const handleTogglePage = () => {
    setIsLoginPage((prevIsLoginPage) => !prevIsLoginPage); // Toggle between login and signup page
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-24 lg:px-9">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link
            to={`/`}
            className="absolute font-semibold top-0 left-2 p-4 text-indigo-600 hover:text-indigo-500"
          >
            &larr;Back
          </Link>
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isLoginPage ? "Sign in to your account" : "Create an account"}
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLoginPage && (
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.email && 'border-red-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.4 text-xs text-red-500 text-left">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.password && 'border-red-500'
                  }`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-1">
                <div className="w-50">
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500 text-left">
                      {errors.password}
                    </p>
                  )}
                </div>
                {isLoginPage && (
                  <div className="w-50 text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoginPage ? 'Sign in' : 'Sign up'}
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a
                href="#"
                onClick={handleTogglePage} // Toggle between login and signup page
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                {isLoginPage
                  ? 'Create an account'
                  : 'Login to your Account'}
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
