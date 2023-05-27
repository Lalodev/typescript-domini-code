// Class

class Person {
  public zone = "Caribean";
  protected city = "Santo Domingo";
  private country = "R.D";

  constructor() {}

  greet(): void {
    this.city;
    console.log("hello!!!...");
  }
}

class Employee extends Person {
  // Atributos
  /*private id: number;
  private name: string;
  private dept: string;*/

  constructor(private id: number, private name: string, private dept: string) {
    super();
    /*this.id = id;
    this.name = name;
    this.dept = dept;*/
    this.showInfo();
  }

  // Metodos
  private showInfo(): void {
    this.c;
    console.log(`${this.name} ${this.dept}`);
  }
}

const emp = new Employee(1, "Lalo", "Sales");
emp.greet();
