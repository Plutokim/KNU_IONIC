import { ILog } from "../interfaces/ILog";
import { IPerformJob } from "../interfaces/IPerformJob";
import { IPerson } from "../interfaces/IPerson";

export class DepartmentHead implements IPerson, IPerformJob {
  name: string;
  age: number;
  department: string;

  constructor(
    name: string,
    age: number,
    department: string,
    private logger: ILog
  ) {
    this.name = name;
    this.age = age;
    this.department = department;
  }

  introduction(): string {
    return `Hello, I'm ${this.name}, the department head of ${this.department}.`;
  }

  performJob(): void {
    this.logger.log("Department head is managing the department.");
  }
}
