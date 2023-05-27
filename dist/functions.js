"use strict";
function greet(name = "User") {
    console.log(`Hello ${name.toUpperCase()}`);
}
greet("Lalo-shi");
greet();
// function getNumber(): number {
//   return Math.floor(Math.random() * 100);
// }
// console.log(getNumber());
// function printPosition(position: { lat: number; long: number | string }): void {
//   console.log(
//     `Latitude & Longitud are: LAT ${position.lat} LONG: ${position.long}`
//   );
// }
// printPosition({ lat: 3, long: 55 });
