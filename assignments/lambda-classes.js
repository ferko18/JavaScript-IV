// CODE here for your Lambda Classes
class Person{
    constructor (personattr){
        this.name = personattr.name;
        this.age = personattr.age;
        this.location = personattr.location;
        this.gender = personattr.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
      };
}

class Instructor extends Person{
    constructor (instructorttr){
        super(instructorttr);
        this.specialty = instructorttr.specialty;
        this.favLanguage = instructorttr.favLanguage;
        this.catchPhrase = instructorttr.catchPhrase;
        
    }
    demo(subject){
        return `Today we are learning about ${subject}`
      };

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
      };
}

class Student extends Person{
    constructor (studenattr){
        super(studenattr);
        this.previousBackground = studenattr.previousBackground;
        this.className = studenattr.className;
        this.cfavSubjects = studenattr.favSubjects;
        
    }
    listsSubjects(){
        console.log ` ${this.cfavSubjects}`
      };

      PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
      };

      sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
      };

}



class ProjectManagers extends Instructor{
    constructor (managerttr){
        super(managerttr);
        this.gradClassName = managerttr.gradClassName;
        this.favInstructor = managerttr.favInstructor;
        
        
    }
    standUp(channel){
        return ` ${this.name} announces to ${channel}, @channel standy times!`
      };

      debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
      };

      
}

// Person instantiation 
const Fire = new Person ({
    name: 'Fire',
    location: 'Arlington',
    age: 35,
    gender: 'male',

}) 



//Instructor  instantiation
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  
// Student Instantiation 
  const Bob = new Student(
      {
        name: 'Bob',
        location: 'Washington',
        age: 37,
        gender: 'male',
        previousBackground: 'chemist',
        className: 'Web19',
        favSubjects: ['Html', 'CSS', 'JavaScript']

      }
  )

  
  //Project Instantiation
const Josh = new ProjectManagers({
        name: 'Josh',
        location: 'NY',
        age: 42,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: 'Dont bla bla bla',
        gradClassName: 'CS19',
        favInstructor: 'Sam'

})

console.log(Fire.age)
console.log(fred.speak())
console.log(Bob.speak());
console.log(Josh.standUp('FSW'))
console.log(Josh.debugsCode(Bob,'JS'));
