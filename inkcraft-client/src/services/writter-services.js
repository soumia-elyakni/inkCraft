import axios from "axios";



const API_URL = "http://localhost:5500/api/writter/";

const addStorie = async({storie}) => {

}

const getAllStories = async () => {
  const token = localStorage.getItem('token');
  
  
  const response = await axios.get(API_URL + 'getAllStories', { headers: {
    Authorization: `Bearer ${token}` 
  }});

  console.log('Arbi makhdm')
  console.log(response.data)

  return response.data;
};

  

  export {
    getAllStories
  }
  