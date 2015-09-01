import {mockPost} from 'app/services/api/api.js';

const SKILLS = ['.NET', "Angular.js", "C", "C++", "Java", "Javascript", "R", "React.js", "Ruby", "Ruby on Rails", "Swift", "XML"];
export const DETAILS = [{
	name: 'Anakin Lau',
	role: 'TA',
	skills: [{name: 'C++', endorsedBy: [2]}, {name: 'Java', endorsedBy: [3]}, {name: 'XML', endorsedBy: [2, 3]},{name: 'R', endorsedBy: [2, 3]}],
	avatar: 'img/placeholder.jpg',
	id: 1,
	email: 'anakin.lau@credit-suisse.com'
},
{
	name: 'Spencer Goh',
	role: 'AVP',
	skills: [{name: 'C++', endorsedBy: [2]}, {name: '.NET', endorsedBy: [3]}, {name: 'Angular.js', endorsedBy: [2, 3]}, {name: 'React.js', endorsedBy: [2, 3]}],
	avatar: 'app/assets/spencer.jpg',
	id: 2,
	email: 'spencer.goh@credit-suisse.com'
},
{
	name: 'Stirling Poon',
	role: 'TA',
	skills: [{name: 'C++', endorsedBy: [2]}, {name: 'Java', endorsedBy: [3, 4]}, {name: 'Javascript', endorsedBy: [2, 3]}, {name: 'Ruby', endorsedBy: [2, 3]}, {name: 'Swift', endorsedBy: [1]}],
	avatar: 'app/assets/stirling.jpg',
	id: 3,
	email: 'yeu.poon@credit-suisse.com'
}, {
	name: "Marcus Lo",
	role: 'AVP',
	skills: [{name: 'C++', endorsedBy: [2]}, {name: '.NET', endorsedBy: [1, 3]}, {name: 'Javascript', endorsedBy: [2, 3]}, {name: 'C', endorsedBy: [2, 3]}, {name: 'Ruby on Rails', endorsedBy: [2, 3]}],
	avatar: 'img/placeholder.jpg',
	id: 4,
	email: 'marcus.lo@credit-suisse.com'
}];

export const getInfo = (id) => Promise.resolve(
	DETAILS[id-1]
)
/*
	mockPost('/profileInfo', {id}, {
		  name: 'Spencer Goh ' + id,
		  email: 'spencer.goh@credit-suisse.com',
		  skills: [{name: 'C++', rank: 1, endorsedBy: [1]}, {name: 'Java', rank: 3, endorsedBy: [1, 2, 3]}, {name: 'XML', rank: 2, endorsedBy: [1, 2]}]
	  }, 'Mock Error', false);
*/

export const getSkills = (filter) => Promise.resolve(
	SKILLS
	.map(name => ({
		name: name,
		display: name,
		searchKey: name.toLowerCase(),
		type: 'skill'
	}))
	.filter(({searchKey}) => searchKey.indexOf(filter) === 0)
)

export const getPeople = (filter) => Promise.resolve(
	DETAILS
	.map(detail => ({
		...detail,
		name: detail.name,
		display: detail.name,
		searchKey: name.toLowerCase(),
		type: 'person'
	}))
	.filter(({searchKey}) => searchKey.indexOf(filter) === 0)
)

export const getPeopleBySkill = (skill) => Promise.resolve(
	DETAILS.filter(person => _.pluck(person.skills, 'name').indexOf(skill) >=0)
);

export const endorseSkill = (id, skill) => {}

export default {getInfo, getSkills, getPeople, endorseSkill, DETAILS};