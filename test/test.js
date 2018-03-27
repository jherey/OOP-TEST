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

