import axios from "axios";

const API_URL = "http://localhost:5500/api/auth/";

const login = async(email, password) => {
  const log = await axios
    .post(API_URL + "login", {
      email,
      password,
    })
       localStorage.setItem('user', JSON.stringify(log.data))
       localStorage.setItem('token', JSON.stringify(log.data.token))
  
      return log;
};


const register = async(user) =>{
  const reg = await axios 
  .post(API_URL + "register", user)
  return reg

}

const logout = async () => {
   
  return localStorage.clear()
  
}

export { login ,
        register,
        logout};
