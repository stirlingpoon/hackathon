import {mockPost} from 'app/services/api/api.js';

export const getInfo = (email) => 
	mockPost('/profileInfo', {email: 'mock@credit-suisse.com'}, {
		  firstName: 'Spencer',
		  lastName: 'Goh',
		  skills: [{name: 'C++', rank: 1}, {name: 'Java', rank: 3}, {name: 'XML', rank: 2}]
	  }, 'Mock Error', false);

export default {getInfo};