import {MobileLibrary} from "./MobileLibrary";
import {Mobile} from "./Mobile";


let nokia3210:Mobile=new Mobile("Nokia3210", "3210", "Nokia", 32, "negro", false, 1, 500);
let iphone3G:Mobile=new Mobile("iphone3G", "3G", "Iphone", 32, "blanco", false, 4, 900);
let samsungGalaxy10:Mobile=new Mobile("Samsung Galaxy", "Galaxy10", "Samsung", 32, "negro", true, 3, 800);
let lgK10:Mobile=new Mobile("LG K10 Galaxy", "K10", "LG", 32, "negro", false, 1, 120);
let moviles: Mobile[] = [nokia3210, iphone3G, samsungGalaxy10, lgK10];

let m:MobileLibrary = new MobileLibrary("miLibreria", "China", moviles);

console.log(m.getTotalPrice())
console.log(m.getName());
console.log(m.getLocation());
console.log(m.getMobiles());
m.printLibrary();