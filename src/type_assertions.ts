// Type assertion

let channel: any = "Lalo-Shi";

//let channelString = <string>channel;
let channelString = channel as string;

//const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main");
