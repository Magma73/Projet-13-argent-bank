import axios from 'axios';

// /**
//  * AuthService - Handle API calls
//  * @module UserService
//  */

const API_URL = 'http://localhost:3001/api/v1/';

// /**
//  * Function getUserMainData - Send User Main Datas using axios api or mocked datas
//  * @param {number} userId- The userId
//  * @returns {Promise<object>} - User Main Datas
//  */

const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL + 'user/login', {
      email,
      password,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

const fetchUserProfile = async (userToken) => {
  try {
    const response = await axios.post(`${API_URL}user/profile`, null, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during fetchUserProfile:', error);
    throw error;
  }
};

const updateUserProfile = async (userToken, firstName, lastName) => {
  try {
    const response = await axios.put(
      `${API_URL}user/profile`,
      {
        firstName,
        lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error during updateUserProfile:', error);
    throw error;
  }
};

const AuthService = {
  login,
  logout,
  fetchUserProfile,
  updateUserProfile,
};

export default AuthService;
