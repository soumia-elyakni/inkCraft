import { useState } from "react";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { ImageContainer } from "../../components/common/ImageContainer";
import { useNavigate, Link } from "react-router-dom";
import photo from "../../assets/images/loginpic.jfif";
import { FaSmile } from "react-icons/fa";
import { login } from "../../services/auth-services";

export const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(user.email, user.password)
      .then((response) => {
        const user = JSON.parse(localStorage.getItem("user"));

        user.role === "writter"
          ? navigation("/dash")
          : user.role === "translator"
          ? navigation("/tdash")
          : navigation("/adash");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-full h-full my-5 mx-5  bg-white rounded-lg shadow">
        <div className="flex flex-row justify-between h-full w-full">
          <div className="flex flex-col w-1/2 items-center justify-center m-auto">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="w-full px-20"
            >
              <div className="self-center text-center mb-9 text-xl font-light text-gray-600 sm:text-2xl">
                Login To Your Account
              </div>

              <div className="flex flex-col mb-2 w-full">
                <div className="flex relative w-full">
                  <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <Input
                    type="email"
                    name="email"
                    id="sign-in-email"
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    onChange={handleChange}
                    value={user.email}
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <Input
                    type="password"
                    name="password"
                    id="sign-in-email"
                    value={user.password}
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    onChange={handleChange}
                    placeholder="Your password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="flex w-full">
                  <Button
                    type="submit"
                    text="Login"
                    className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  />
                  <div className="flex items-center mb-6 -mt-4"></div>
                </div>
              </div>
            </form>
            <span className="flex flex-row justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400 mt-3 mb-8">
              Don't have an Account ?
              <Link
                to="/register"
                className="flex flex-row text-sm text-blue-500 underline hover:text-blue-700"
              >
                Sign up{" "}
                <FaSmile
                  className="ml-2"
                  style={{ ":hover": { backgroundColor: "yellow" } }}
                />
              </Link>
            </span>
          </div>

          <div className="picture-container flex flex-col w-1/2 h-full">
            <ImageContainer className="h-full rounded-r-lg" src={photo} />
          </div>
        </div>
      </div>
    </div>
  );
};
