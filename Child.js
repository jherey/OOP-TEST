import Person from './Person';

class Child extends Person {
	constructor(name, sex, maritalStatus, age, school) {
		super(name, sex, maritalStatus);
		this._age = age;
		this._school = school;
		this._addFriend = [];
	}

	getName() {
		return `${this._name}`;
	}

	getAge() {
		return `${this._name} is ${this._age} years old`;
	}

	getSchool() {
		return `${this._name} attends ${this._school} School`;
	}

	addFriend(friend) {
		this._addFriend.push(friend);
		return `${this._addFriend}`;
	}
}

export default Child;