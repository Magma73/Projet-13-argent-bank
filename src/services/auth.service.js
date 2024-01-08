import axios from 'axios';

// /**
//  * UserService - Handle API calls
//  * @module UserService
//  */

const API_URL = 'http://localhost:3001/api/v1/';

// /**
//  * Function getUserMainData - Send User Main Datas using axios api or mocked datas
//  * @param {number} userId- The userId
//  * @returns {Promise<object>} - User Main Datas
//  */

const login = (email, password) => {
  return axios
    .post(API_URL + 'user/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.body.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('userToken', response.data.body.token);
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

// const fetchUserProfile = (userToken) => {
//   return axios
//     .post(`${API_URL}user/profile`, null, {
//       headers: {
//         Authorization: `Bearer ${userToken}`,
//       },
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

const fetchUserProfile = async (userToken) => {
  try {
    const response = await axios.post(`${API_URL}user/profile`, null, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const AuthService = {
  login,
  logout,
  fetchUserProfile,
  // getUserProfile,
};

export default AuthService;
