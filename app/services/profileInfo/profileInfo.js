import {mockPost} from 'app/services/api/api.js';

export const getInfo = (id) => 
	mockPost('/profileInfo', {id}, {
		  name: 'Spencer Goh ' + id,
		  email: 'spencer.goh@credit-suisse.com',
		  skills: [{name: 'C++', rank: 1, endorsedBy: [1]}, {name: 'Java', rank: 3, endorsedBy: [1, 2, 3]}, {name: 'XML', rank: 2, endorsedBy: [1, 2]}]
	  }, 'Mock Error', false);

export const getSkills = (filter) => Promise.resolve(
	["Angular.js", "C", "C++", "Java", "Javascript", "R", "React.js", "Ruby", "Ruby on Rails", "Swift", "XML"]
	.map(name => ({
		display: name,
		searchKey: name.toLowerCase(),
		type: 'skill'
	}))
	.filter(({searchKey}) => searchKey.indexOf(filter) === 0)
)

export const getPeople = (filter) => Promise.resolve(
	["Anakin Lau", "Marcus Lo", "Spencer Goh", "Stirling Poon", "Will Bassett"]
	.map((name, id) => ({
		id: id,
		display: name,
		searchKey: name.toLowerCase(),
		type: 'person',
	}))
	.filter(({searchKey}) => searchKey.indexOf(filter) === 0)
)

export const endorseSkill = (id, skill) => {}

export default {getInfo, getSkills, getPeople, endorseSkill};