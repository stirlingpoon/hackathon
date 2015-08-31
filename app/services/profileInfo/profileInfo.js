import {mockPost} from 'app/services/api/api.js';

export const getInfo = (email) => 
	mockPost('/profileInfo', {email: 'mock@credit-suisse.com'}, {
		  firstName: 'Mock',
		  lastName: 'user',
		  skills: ['C++', 'Java', 'XML']
	  }, 'Mock Error', false);

export default {getInfo};