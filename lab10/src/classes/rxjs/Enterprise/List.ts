import Enterprise from ".";
import Controller from "../Controller";

class EnterpriseList {
  private list: Enterprise[] = [];
  private filteredList: Enterprise[] = [];
  dataList: string[][] = this.filteredList.map(this.convert);

  constructor(controller: Controller) {
    this.add(
      new Enterprise("Enterprise1", "Owner1", 100, 1000000, "Technology", 0)
    );
    this.add(
      new Enterprise("Enterprise2", "Owner2", 200, 2000000, "Finance", 1)
    );
    this.add(
      new Enterprise("Enterprise3", "Owner3", 150, 1500000, "Healthcare", 2)
    );
    this.add(
      new Enterprise("Enterprise4", "Owner4", 300, 3000000, "Manufacturing", 3)
    );
    this.add(
      new Enterprise("Enterprise5", "Owner5", 250, 2500000, "Technology", 4)
    );
    this.add(
      new Enterprise("Enterprise6", "Owner6", 200, 2000000, "Finance", 0)
    );
    this.add(
      new Enterprise("Enterprise7", "Owner7", 150, 1500000, "Healthcare", 1)
    );
    this.add(
      new Enterprise("Enterprise8", "Owner8", 100, 1000000, "Manufacturing", 2)
    );
    this.add(
      new Enterprise("Enterprise9", "Owner9", 50, 500000, "Technology", 3)
    );
    this.add(
      new Enterprise("Enterprise10", "Owner10", 80, 800000, "Finance", 4)
    );
    this.add(
      new Enterprise("Enterprise11", "Owner11", 120, 1200000, "Healthcare", 0)
    );
    this.add(
      new Enterprise(
        "Enterprise12",
        "Owner12",
        180,
        1800000,
        "Manufacturing",
        1
      )
    );
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

  add(enterprise: Enterprise) {
    this.list.push(enterprise);
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
