import { IPerson } from "../interfaces/IPerson";

export class Student implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduction(): string {
    return `Hello, I'm ${this.name} and I'm a student.`;
  }

  action(): string {
    return "Student is studying.";
  }
}
