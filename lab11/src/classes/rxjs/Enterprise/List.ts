import Enterprise from ".";
import Controller from "../Controller";
import { DBApi } from "../../../api/db";

class EnterpriseList {
  private filteredList: Enterprise[] = [];
  dataList: string[][] = this.filteredList.map(this.convert);

  constructor(
    controller: Controller,
    private api: DBApi,
    private list: Enterprise[] = []
  ) {
    controller.city$.subscribe((city) => this.filter(city.code));
  }

  private convert(enterprise: Enterprise): string[] {
    return [
      `Назва: ${enterprise.name}`,
      `Власник: ${enterprise.owner}`,
      `Кількість працівників: ${enterprise.employees_count.toString()}`,
      `Дохід: ${enterprise.revenue.toString()}`,
      `Ніша: ${enterprise.category}`,
    ];
  }

  async add(enterprise: Enterprise) {
    this.list.push(enterprise);
    await this.api.createEnterprise(enterprise);
    this.filter(enterprise.city_code);
  }

  filter(cityCode: number) {
    this.filteredList = this.list.filter(
      (enterprise) => enterprise.city_code === cityCode
    );
    this.dataList = this.filteredList.map(this.convert);
    console.log(this.dataList);
  }
}

export default EnterpriseList;
