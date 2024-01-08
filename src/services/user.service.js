import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';

const getUserBoard = (user) => {
  return axios.get(API_URL + 'user');
};

// const getUserProfile = (user, login) => {
//     return axios.get(`${API_URL}${user}/${login}`);
//   };

// const getUserBoard = () => {
//     return axios.get(API_URL + "user");
//   };

const UserService = {
  getUserBoard,
};

export default UserService;
