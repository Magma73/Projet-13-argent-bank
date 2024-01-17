import axios from 'axios';

// /**
//  * AuthService - Handle API calls
//  * @module UserService
//  */

const API_URL = 'http://localhost:3001/api/v1/';

// /**
//  * Function login - Send user login credentials using axios API
//  * @param {string} email - User email
//  * @param {string} password - User password
//  * @returns {Promise<object>} - User data after successful login
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

// /**
//  * Function logout - Clear user data from local storage and session storage
//  */
const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

// /**
//  * Function fetchUserProfile - Retrieve user profile data using user token
//  * @param {string} userToken - User token for authentication
//  * @returns {Promise<object>} - User profile data
//  */
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

// /**
//  * Function updateUserProfile - Update user profile data using user token, first name, and last name
//  * @param {string} userToken - User token for authentication
//  * @param {string} firstName - New first name for the user profile
//  * @param {string} lastName - New last name for the user profile
//  * @returns {Promise<object>} - Updated user profile data
//  */
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
