import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { ImageContainer } from "../../components/common/ImageContainer";
import photo from "../../assets/images/registerpic.png";
import Checkbox from "../../components/common/Checkbox";
import { register } from "../../services/auth-services";

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

 

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(newUser)
    await register(newUser)
    .then((response)=>{
      alert(response.data);
    })
    .catch((error)=>{
      alert(error.response.data.message)
    })
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-full h-full my-5 mx-5  bg-white rounded-lg shadow">
        <div className="flex flex-row justify-between form-container w-full">

        <div className="picture-container flex flex-col w-1/2 h-full ">
            <ImageContainer className="h-full rounded-l-lg shadow-picture" src={photo} />
          </div>
          <div className="flex flex-col overflow-y-auto scroll-auto scrollbar scrollbar-thumb-lime-300 scrollbar-track-lime-100 scrollbar-thumb-rounded form-container w-1/2 pt-20 items-center justify-center m-auto">
            
              <div className="  flex flex-col items-center pt-20 m-6">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                  Create a new account
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                  <div className=" relative ">
                    <Input
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
                    <Input
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
                    <Input
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
                    <Input
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
                    <Input
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

                <div className="flex items-center justify-start mt-3">
                  <Checkbox
                    title="Choose your work languages"
                    type="checkbox"
                    name = "langues"
                    items={["frensh", "english", "arabe"]}
                    onChange={handleLanguageChange}
                  />
                </div>

                <div className="flex items-center justify-start mt-3">
                  <Checkbox
                    title="Choose your role"
                    type="radio"
                    items={["writter", "translator"]}
                    name="role"
                    onChange={handleRoleChange}
                  />
                </div>

                <div className="flex w-full my-4">
                  <Button
                    type="submit"
                    className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    text="Register"
                  />
                </div>
              </form>
              <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400 mb-8">
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-sm text-blue-500 underline hover:text-blue-700"
                  >
                    Sign in
                  </Link>
                </span>
            
          </div>

        </div>
      </div>
    </div>
  );
};
