// Basic types
let myTypeString: string = "Huluuuuuuuuu";
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

// myTypeString = "true";
// myTypeNumber = false;

// Array
let arrNumber: number[] = [1, 2, 3];
let arrNumber2: Array<number> = [1, 2, 3];

let arrString: string[] = ["Uno", "Dos", "Tres"];

let arrAny: any[] = [1, 2, "Tres", false];

// Tuple
let tuplePlayers: [string, number, boolean] = ["Uno", 2, false];

// Tuple Array
let players: [number, string][];

players = [
  [1, "Lebron"],
  [2, "Durant"],
  [3, "Carry"],
];

// Inferencia de Tipos
let myVariable;

let myVariable1: string;

let myVariable2: true;

// Unions
let myVariable3: string | number | null;

myVariable3 = "true";
