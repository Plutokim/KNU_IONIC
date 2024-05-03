import { ILog } from "../interfaces/ILog";
import { IPerformJob } from "../interfaces/IPerformJob";
import { IPerson } from "../interfaces/IPerson";

export class Teacher implements IPerson, IPerformJob {
  name: string;
  age: number;
  subject: string;

  constructor(
    name: string,
    age: number,
    subject: string,
    private logger: ILog
  ) {
    this.name = name;
    this.age = age;
    this.subject = subject;
  }

  introduction(): string {
    return `Hello, I'm ${this.name} and I'm a teacher of ${this.subject}.`;
  }

  performJob(): void {
    this.logger.log("Teacher is teaching.");
  }
}
