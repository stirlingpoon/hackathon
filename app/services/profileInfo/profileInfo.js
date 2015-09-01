import {mockPost} from 'app/services/api/api.js';

export const getInfo = (id) => 
	mockPost('/profileInfo', {id}, {
		  name: 'Spencer Goh ' + id,
		  email: 'spencer.goh@credit-suisse.com',
		  skills: [{name: 'C++', rank: 1}, {name: 'Java', rank: 3}, {name: 'XML', rank: 2}]
	  }, 'Mock Error', false);

export const getSkills = (filter) => Promise.resolve(
	['C++', 'Java', 'XML', 'Javascript', 'Angular.js', 'Ruby', 'Ruby on Rails']
	.map(name => ({
		display: name,
		searchKey: name.toLowerCase(),
		type: 'skill'
	}))
	.filter(({searchKey}) => searchKey.indexOf(filter) === 0)
)

export const getPeople = (filter) => Promise.resolve(
	['Spencer Goh', 'Stirling Poon', 'Anakin Lau', 'Marcus Lo', 'Will Bassett']
	.map((name, id) => ({
		id: id,
		display: name,
		searchKey: name.toLowerCase(),
		type: 'person',
	}))
	.filter(({searchKey}) => searchKey.indexOf(filter) === 0)
)

export default {getInfo, getSkills, getPeople};