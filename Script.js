
let ime = "Ana";
let godine = "20";
let jeStudent = true;
console.log(ime, godine, jeStudent);
let grad = "Beograd";
console.log("Zivim u gradu" + " " +grad);
console.log("Zove se "+ime);


//Brojevi i Math operatori
let a = 10;
let b = 5;
let zbir = a+b;
let razlika = a-b;
let proizvod = a*b;
let kolicnik = a/b;
let ostatakPriDeljenju = a%b;
console.log(a, b, zbir, razlika, proizvod, kolicnik, ostatakPriDeljenju);

a++;
b--;
console.log(a, b);
let x = 3;
let y = 4;
console.log((x+y)*2);



//Druga Strana Domaceg
//String Vezbe + replace

let staRadim = "Ucim Programiranje";
console.log(staRadim);
staRadim = staRadim.replace("Programiranje", "Koriranje");

let danasnjiDan = "Danas je lep dan";
console.log(danasnjiDan);
danasnjiDan = danasnjiDan.replace("dan", "suncan");

let mojeIme = "Moje ime je Ana";
console.log(mojeIme);
mojeIme = mojeIme.replace("Ana", "Marko");

// Ispisujemo promenjene vrednosti
console.log(staRadim + " jer " + danasnjiDan + " dan, a " + mojeIme);

// Kombinovane vezbe

let poruka = "Ucim osnove Java Scripta"
console.log(poruka);
poruka = poruka.replace("osnove" ,"napredne");
console.log(poruka);

let broj = 10;
console.log("Vrednost broja je:" + broj);
console.log("Imam " + godine +" godina");

let jeOnline = false;
console.log(jeOnline);
let c = 7, d=2;
console.log("Zbir je: " +c+d);
let javaString = "Java Script je zabavan";
console.log(javaString);
javaString = javaString.replace("zabavan", "koristan");
console.log(javaString);
let rezultat = c*d;
console.log(rezultat);
console.log("Rezultat je:" + rezultat);