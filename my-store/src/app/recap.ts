const username: string = 'Jennifer';

const sum = (a: number, b:number) => {
  return a + b;
}

sum(1, 3);

// class Person {
//   private age: number;
//   lastName: string;

//   constructor(age: number, lastName: string) {
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

// const jenn = new Person(28, 'Alarcón');
// jenn.age;

class Person {
  constructor(public age: number, public lastName: string) {
  }
}

const jenn = new Person(28, 'Alarcón');
jenn.age;
