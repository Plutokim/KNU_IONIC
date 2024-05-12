import { Database, get, ref, set } from "firebase/database";
import { db } from "../firebase";
import City from "../classes/rxjs/City";
import Enterprise from "../classes/rxjs/Enterprise";

export class DBApi {
  constructor(private db: Database) {}

  async createCity(city: City) {
    const cityRef = ref(this.db, `City/${city.code}`);
    await set(cityRef, city.toModel());
  }

  async getCity(code: number) {
    const cityRef = ref(this.db, `City/${code}`);
    const snapshot = await get(cityRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }

  async upsertListCities(cities: City[]) {
    Promise.all(cities.map((city) => this.createCity(city)));
  }

  async listCities() {
    const citiesRef = ref(this.db, "City");
    const snapshot = await get(citiesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }

  async createEnterprise(enterprise: Enterprise) {
    const enterpriseRef = ref(this.db, `Enterprise/${enterprise.name}`);
    await set(enterpriseRef, enterprise.toModel());
  }

  async getEnterprise(name: string) {
    const enterpriseRef = ref(this.db, `Enterprise/${name}`);
    const snapshot = await get(enterpriseRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }

  async upsertListEnterprises(enterprises: Enterprise[]) {
    Promise.all(
      enterprises.map((enterprise) => this.createEnterprise(enterprise))
    );
  }

  async listEnterprises() {
    const enterprisesRef = ref(this.db, "Enterprise");
    const snapshot = await get(enterprisesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }
}

export default new DBApi(db);
