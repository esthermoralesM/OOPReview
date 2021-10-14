import {Mobile} from "./Mobile";
let nokia3210:Mobile=new Mobile("Nokia3210", "3210", "Nokia", 32, "negro", false, 1, 500);
let iphone3G:Mobile=new Mobile("iphone3G", "3G", "Iphone", 32, "blanco", false, 4, 900);
let samsungGalaxy10:Mobile=new Mobile("Samsung Galaxy", "Galaxy10", "Samsung", 32, "negro", true, 3, 800);

//EJERCICIO 6
nokia3210.toString();
iphone3G.toString();
samsungGalaxy10.toString();

nokia3210.setCameraNumber(4);
nokia3210.setIs5G(true);

nokia3210.toString();
iphone3G.toString();
samsungGalaxy10.toString();

let moviles: Mobile[] = [nokia3210, iphone3G, samsungGalaxy10];

for(let i=0;i<moviles.length;i++){
    moviles[i].toString();
}


//EJERCICIO 2
/*
console.log(nokia3210.name);
console.log(nokia3210.model);
console.log(nokia3210.trademark);
console.log(nokia3210.sdSize);
console.log(nokia3210.color);
console.log(nokia3210.is5G);
console.log(nokia3210.cameraNumber);
console.log(nokia3210.price);

console.log(iphone3G.name);
console.log(iphone3G.model);
console.log(iphone3G.trademark);
console.log(iphone3G.sdSize);
console.log(iphone3G.color);
console.log(iphone3G.is5G);
console.log(iphone3G.cameraNumber);
console.log(iphone3G.price);

console.log(samsungGalaxy10.name);
console.log(samsungGalaxy10.model);
console.log(samsungGalaxy10.trademark);
console.log(samsungGalaxy10.sdSize);
console.log(samsungGalaxy10.color);
console.log(samsungGalaxy10.is5G);
console.log(samsungGalaxy10.cameraNumber);
console.log(samsungGalaxy10.price);

nokia3210.cameraNumber=4;
nokia3210.is5G=true;

console.log(nokia3210.name);
console.log(nokia3210.model);
console.log(nokia3210.trademark);
console.log(nokia3210.sdSize);
console.log(nokia3210.color);
console.log(nokia3210.is5G);
console.log(nokia3210.cameraNumber);
console.log(nokia3210.price);

console.log(iphone3G.name);
console.log(iphone3G.model);
console.log(iphone3G.trademark);
console.log(iphone3G.sdSize);
console.log(iphone3G.color);
console.log(iphone3G.is5G);
console.log(iphone3G.cameraNumber);
console.log(iphone3G.price);

console.log(samsungGalaxy10.name);
console.log(samsungGalaxy10.model);
console.log(samsungGalaxy10.trademark);
console.log(samsungGalaxy10.sdSize);
console.log(samsungGalaxy10.color);
console.log(samsungGalaxy10.is5G);
console.log(samsungGalaxy10.cameraNumber);
console.log(samsungGalaxy10.price);
*/