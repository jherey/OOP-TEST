class Person {
	constructor(name, sex, maritalStatus) {
		this._name = name;
		this._sex = sex;
		this._maritalStatus = maritalStatus;
	}

	getName() {
		return this._name;
	}

	talk(newName) {
		return `${this._name} is talking to ${newName}`;
	}
}

class Parent extends Person {
	constructor(name, sex, maritalStatus, children, basicSalary) {
		super(name, sex, maritalStatus);
		this._children = children;
		this._basicSalary = basicSalary;
	}

	getChildren(children) {
		return `${name} has ${children} children`;
	}

	calculateChildrenAllowance(children) {
		let allowance;
		if (children <= 2) {
			allowance = this._basicSalary * 0.2;
			return this._basicSalary + allowance;
		} else {
			allowance = this._basicSalary * 0.4;
			return this._basicSalary + allowance;
		}
	}
}

class Child extends Person {
	constructor(name, sex, maritalStatus, age, school) {
		super(name, sex, maritalStatus);
		this._age = age;
		this._school = school;
		this._addFriend = [];
	}

	getSchool() {
		return `${this._name} attends ${this._school} school`;
	}

	addFriend(friend) {
		this._addFriend.push(friend);
		return this._addFriend;
	}
}



const p1 = new Person('Jerry', 'male', 'single');

console.log(
	`name: ${p1.getName()}`,
	`talk: ${p1.talk('seyi')}`
);

const p2 = new Parent('Annmary', 'female', 'married', 4, 100000);
console.log(
	`name: ${p2.getChildren()}`,
	`allowance: ${p2.calculateChildrenAllowance()}`
);