import { ILog } from "../interfaces/ILog";

export class LogInternal implements ILog {
  constructor() {}
  log(msg: string): void {
    console.log(msg);
  }
}
