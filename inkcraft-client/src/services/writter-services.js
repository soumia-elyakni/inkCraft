import axios from "axios";



const API_URL = "http://localhost:5500/api/writter/";

const addStorie = async ( storie ) => {
  console.log(storie)
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      API_URL + "addStorie",
      storie ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getAllStories = async () => {
  const token = localStorage.getItem('token');


  const response = await axios.get(API_URL + 'getAllStories', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

 

  return response.data;
};



export {
  addStorie,
  getAllStories
}
