# OOP-TEST

This script models a real world object - Person. The Parent and Child class extends the Person class.

## Person
The Person class is the base class.

__Parameters__
It has three (3) parameters;
- name
- sex
- marital status

__Getters__
Getters in this class are getName, getSex and getMaritalStatus.

__Method__
The Person class does a Talk action (method) which returns a string.

## Parent
The Parent class extends the Person class.

__Parameters__
It has five (5) parameters;
- name
- sex
- marital status
- children
- basic salary

The name, sex and marital status are inherited from the Person class.

__Getters__
Getters in this class are getChildren and getSalary.

__Method__
The Parent class has a method called calculateChildrenAllowance. This calculates the parents' allowance.

## Child
The Child class extends the Person class.

__Parameters__
It has five (5) parameters;
- name
- sex
- marital status
- age
- school

The name, sex and marital status are inherited from the Person class.

__Getters__
Getters in this class are getName, getAge and getSchool.

__Method__
The Child class has a method called addFriend. This adds a new friend to an array.