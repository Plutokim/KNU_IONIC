import { ILog } from "../interfaces/ILog";

export class LogExternal implements ILog {
  constructor() {}
  log(msg: string): void {
    if (window !== undefined) {
      alert(msg);
    }
  }
}
