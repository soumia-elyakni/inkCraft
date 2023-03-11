import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { register } from "../../services/auth";

export const Register = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    cin: "",
    role: "",
    langue: [],
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      // Add the selected language to the newUser.langues array
      setNewUser({ ...newUser, langue: [...newUser.langue, language] });
    } else {
      // Remove the unselected language from the newUser.langues array
      setNewUser({
        ...newUser,
        langue: newUser.langue.filter((lang) => lang !== language),
      });
    }
  };

  const handleRoleChange = (e) => {
    setNewUser({ ...newUser, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser)
    // await register({...newUser})
    .then(response => {
      alert(response.data)
  })
  .catch(error => {
    alert(error.response.data.message);
  });
  }

  return (
    <div className="flex mt-6 items-center justify-center">
      <div className="flex flex-col  max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link
            to="/login"
            className="text-sm text-blue-500 underline hover:text-blue-700"
          >
            Sign in
          </Link>
        </span>

        <div className="p-6 mt-8">
          <form  onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="email"
                  name="email"
                  id="create-account-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={newUser.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="first_name"
                  placeholder="First name"
                  value={newUser.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-last-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="last_name"
                  placeholder="Last name"
                  value={newUser.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-cin"
                  className=" rounded-lg border-transparent appearance-none flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="cin"
                  placeholder="Your CIN"
                  value={newUser.cin}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  id="create-account-password"
                  className=" rounded-lg border-transparent appearance-none flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  placeholder="Password"
                  value={newUser.pass}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-start mt-6">
              <div>
                <h6 className="mb-4">Choose your work languages</h6>
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="checkbox"
                    name="frensh"
                    value="frensh"
                    onChange={handleLanguageChange}
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="font-normal text-gray-700 dark:text-white">
                    Frensh
                  </span>
                </label>
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="checkbox"
                    name="english"
                    value="english"
                    onChange={handleLanguageChange}
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="font-normal text-gray-700 dark:text-white">
                    English
                  </span>
                </label>
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="checkbox"
                    name="arabe"
                    value="arabe"
                    onChange={handleLanguageChange}
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="font-normal text-gray-700 dark:text-white">
                    Arabic
                  </span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-start mt-6">
              <div>
                <h6 className="mb-4">Choose your role</h6>
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="radio"
                    name="role"
                    value="translator"
                    onChange={handleRoleChange}
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="font-normal text-gray-700 dark:text-white">
                    translator
                  </span>
                </label>
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="radio"
                    name="role"
                    value="writer"
                    onChange={handleRoleChange}
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="font-normal text-gray-700 dark:text-white">
                    writer
                  </span>
                </label>
              </div>
            </div>

            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
