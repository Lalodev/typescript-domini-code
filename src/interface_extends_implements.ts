// Interfaces

interface Person {
  id: number;
  name: string;
}

/*interface Employee extends Person {
  dept: string;
}*/

interface Customer extends Person {
  country: string;
}

//const emp: Employee = {};
//emp.

// const customer: Customer = {};
// customer.

// Classes

interface Animal {
  name: string;
  getDogs: () => void;
  getCats?: () => void;
}

class Zoo implements Animal {
  name = "abc";
  getCats(): void {
    //
  }

  getDogs(): void {
    //
  }
}
