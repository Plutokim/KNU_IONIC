import City from ".";
import { DBApi } from "../../../api/db";

class CityList {
  constructor(private api: DBApi, public list: City[] = []) {
    console.log("CityList created", list);
  }

  get first(): City {
    return this.list[0];
  }

  async add(city: City) {
    await this.api.createCity(city);
    this.list.push(city);
  }
}

export default CityList;
