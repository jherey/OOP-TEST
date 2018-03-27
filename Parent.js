import Person from './Person';

class Parent extends Person {
	constructor(name, sex, maritalStatus, children, basicSalary) {
		super(name, sex, maritalStatus);
		this._children = children;
		this._basicSalary = basicSalary;
	}

	getChildren() {
		return `${this._name} has ${this._children} children`;
	}

	getSalary() {
		return `${this._name} earns ${this._basicSalary} as basic salary`;
	}

	calculateChildrenAllowance() {
		let allowance;
		if (this._children <= 2) {
			allowance = this._basicSalary * 0.2;
			return this._basicSalary + allowance;
		} else {
			allowance = this._basicSalary * 0.4;
			return `${this._name}'s children allowance is ${allowance}`;
		}
	}
}

export default Parent;
