class Person {
	constructor(name, sex, maritalStatus) {
		this._name = name;
		this._sex = sex;
		this._maritalStatus = maritalStatus;
	}

	getName() {
		return this._name;
	}

	getSex() {
		return this._sex;
	}

	getMaritalStatus() {
		return this._maritalStatus;
	}

	talk(newName) {
		return `${this._name} is talking to ${newName}`;
	}
}

export default Person;
