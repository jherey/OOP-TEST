import chai from 'chai';
import Person from '../Person';
import Parent from '../Parent';
import Child from '../Child';

const { expect } = chai;

describe('Person tests', () => {
	const Jeremiah = new Person('Jeremiah', 'male', 'single');

	it('should get the name of the person', () => {
		expect(Jeremiah.getName()).to.equal('Jeremiah')
	});

	it('should get the sex of the person', () => {
		expect(Jeremiah.getSex()).to.equal('male')
	});

	it('should get the marital status of the person', () => {
		expect(Jeremiah.getMaritalStatus()).to.equal('single')
	});

	it('should return a string', () => {
		expect(Jeremiah.talk('Yusuf'))
			.to.equal('Jeremiah is talking to Yusuf')
	});

	it('should return a string', () => {
		expect(Jeremiah.talk('Seyi'))
			.to.equal('Jeremiah is talking to Seyi')
	});
});

describe('Parent tests', () => {
	const Adult = new Parent('Olufayo', 'male', 'married', 3, 100000);

	it('should get the number of children', () => {
		expect(Adult.getChildren())
			.to.equal('Olufayo has 3 children')
	});

	it('should get the salary of the parent', () => {
		expect(Adult.getSalary())
			.to.equal('Olufayo earns 100000 as basic salary')
	});

	it('should get calculate the children allowance', () => {
		expect(Adult.calculateChildrenAllowance())
			.to.equal('Olufayo\'s children allowance is 40000')
	});
});