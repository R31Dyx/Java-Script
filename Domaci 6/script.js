//Zadatak 1
//let temperatura = prompt("Unesite temperaturu");
let temperatura = 28;
if (temperatura >= 25){
    console.log("Vruce");
}else if (temperatura >= 15 && temperatura < 25){
    console.log("Umereno");
}else if (temperatura < 15){
    console.log("hladno");
}

//Zadatak 2
let poeni = [45,78,90,62];
for (let trenutni in poeni) {
    if (poeni[trenutni] >= 60){
        console.log("Polozio");
    }else{
        console.log("Nedovoljan")
    }
}
// Zadatak 3
let brojevi = [1,2,3,4,5,6,7,8,9,10];
for (let brojeviKey in brojevi) {
    if (brojevi[brojeviKey]%3 === 0){
        console.log("Broj "+brojevi[brojeviKey]+ " je deljiv sa 3");
    }else{
        console.log("Broj "+ brojevi[brojeviKey]+ " nije deljiv sa 3");
    }
}
//Zadatak 4
let imena = ["Ana", "Marko", "Jovan","Ivana"];
for (let imenaKey in imena) {
    if(imena[imenaKey].length > 4){
        console.log("Ovo ime "+imena[imenaKey]+ " ima vise od 4 karaktera");
    }else{
        console.log("Ime " +imena[imenaKey]+ " nema vise od 4 karaktera")
    }
}
//Zadatak 5
let godina = 2026;
if (godina%4 === 0){
    console.log("Prestupna godina");
}else{
    console.log("Nije prestupna godina");
}
//Zadatak 6
let ocene = [5,4,3,2,1,2,2,2,2];
let ukupanBroj = 0;
for (let i in ocene) {
    if(ocene[i] === 2){
        ukupanBroj++;
    }
}
console.log("Ukupan broj ocena 2 je: "+ukupanBroj);

//Zadatak 7
let dan = "Subota";
switch (dan.toLowerCase()){
    case "ponedeljak":
        console.log("Radan dan");
        break;
    case "utorak":
        console.log("Radan dan");
        break;
    case "sreda":
        console.log("Radan dan");
        break;
    case "cetvrtak":
        console.log("Radan dan");
        break;
    case "petak":
        console.log("Radan dan");
        break;
    case "subota":
        console.log("Vikend");
        break;
    case "nedelja":
        console.log("Vikend");
        break;
    default:
        console.log("Nepostojeci dan");
}
//Zadatak 8
let statusi1 = ["Online","Offline","Offline","Online"];
for (let statusiKey in statusi1) {
    switch (statusi1[statusiKey].toLowerCase()){
        case "online":
            console.log("Aktivan");
            break;
        case "offline":
            console.log("Nije Aktivan");
            break;
    }
}
//Zadatak 9
let brojevi1 = [5,8,12,3];
let najmanji = brojevi1[0];
for (let brojeviKey in brojevi1) {
    if (brojevi1[brojeviKey] < najmanji){
        najmanji = brojevi1[brojeviKey];
    }
}
console.log("Najmanji je: "+najmanji);

//Zadatak 10
let ocene1 =[5,3,4,2,5];
let zbirOcena = 0;
for (let ocene1Key in ocene1) {
    zbirOcena += ocene1[ocene1Key];
}
console.log("Zbir svih ocena je: "+zbirOcena);

//Zadatak 11
let vreme = "Jutro";
switch (vreme.toLowerCase()){
    case "jutro":
        console.log("Dobro Jutro!");
        break;
    case "dan":
        console.log("Dobar Dan");
        break;
    case "noc":
        console.log("Laku Noc");
        break;
    default:
        console.log("Nepostojece vreme");
}
//Zadatak 12
let jezici = ["JS","HTML","CSS","Python"];
for (let jeziciKey in jezici) {
    switch (jezici[jeziciKey].toLowerCase()) {
        case "js":
            console.log('Java Sript');
            break;
        case "html":
            console.log("Ovo je HTML");
            break;
        case"css":
            console.log("Ovo je CSS");
            break;
        case "python":
            console.log("Ovo je python");
            break;
        default:
            console.log("Nije nista iz liste");
    }
}
//Zadatak 13
let brojevi3=[2,4,6,8,10];
for (let brojevi3Key in brojevi3) {
    console.log("Kada se podeli broj "+brojevi3[brojevi3Key]+ " sa 2, dobije se: "+brojevi3[brojevi3Key]/2);
}
//Zadatak 14
let poruke = ["Zdravo","Cao","Hello","Hi"];
for (let porukeKey in poruke) {
    if (poruke[porukeKey].length > 2){
        console.log("Ova rec "+poruke[porukeKey]+" ime vise od dva karaktera");
    }else{
        console.log("Ova rec: "+poruke[porukeKey]+" nema vise od dva karaktera");
    }
}
//Zadatak 15
let ulogovan = [true, false, false, true];
for (let i in ulogovan) {
    if (ulogovan[i] === true){
        console.log("Ulogovan");
    }else{
        console.log("Nije ulogovan");
    }
}
//zadatak 16
let broj1= 15;
if(broj1%3 === 0){
    console.log("Broj "+broj1+" je deljiv za 3.");
}else{
    console.log("Broj "+broj1+" nije deljiv za 3.");
}
//Zadatak 17
let ocene3 = [1,2,3,4,5];
for (let i in ocene3) {
     if (ocene3[i] === 5){
         console.log("Odlican");
     }else if (ocene3[i]=== 3 || ocene3[i]=== 4){
         console.log("Dobar");
     }else{
         console.log("Nedovoljan");
     }
}
//Zadatak 18
let gradovi = ["Beograd","Novi Sad","Nis","Subotica"];
for (let key in gradovi) {
    if (gradovi[key].toLowerCase()[0] === "n"){
        console.log(gradovi[key]);
    }
}
//Zadatak 19
let brojevi4 = [1,2,3,4,5];
let zbir = 0;
for (let i in brojevi4) {
    if(brojevi4[i]%2 === 0){
        zbir += brojevi4[i];
    }
}
console.log("Ukupan zbir parnih brojeva je: "+zbir);

//Zadatak 20
let poeni1 = 91;
if(poeni1<61){
    console.log("Nedovoljan");
}else if (poeni1 >= 61 && poeni1 <71){
    console.log("Dovoljan");
}else if (poeni1 >= 71 && poeni1 < 81){
    console.log("Dobar");
}else if(poeni1>= 81 && poeni1 < 91){
    console.log("Vrlo Dobar");
}else{
    console.log("Odlican");
}
//Zadatak 21
let uloge = ["Admin","User","Guest"];
for (let i in uloge) {
    switch (uloge[i].toLowerCase()){
        case "admin":
            console.log("Admin Pristup");
            break;
        case "user":
            console.log("Korisnik");
            break;
        case "guest":
            console.log("Gost");
    }
}
//Zadatak 22
let brojevi5 = [3,7,2,8,5];
let najveci = 0;
for (let i in brojevi5) {
    if(brojevi5[i]> najveci){
        najveci = brojevi5[i];
    }
}
console.log("Najveci je: "+najveci);
//Zadatak 23
let temperatura1 = [12,25,30,18];
for (let i in temperatura1) {
    if (temperatura1[i]>25){
        console.log("Vruce");
    }else if (temperatura1[i]>= 15 && temperatura1[i]<=25){
        console.log("Umereno");
    }else{
        console.log("Hladno");
    }
}


//Zadatak 24
let poruke1 = ["Hello", "World","JS","Bye"];
let spojen = "";
for (let i in poruke1) {
    spojen += poruke1[i];
}
console.log(spojen);
//zadatal 25
let tip = "desktop";
switch (tip.toLowerCase()){
    case"desktop":
        console.log("Desktop Uredjaj");
        break;
    case"mobilni":
        console.log("Mobilni Uredjaj");
        break;
    default:
        console.log("Nepoznat uredjaj");
}
//Zadatak 26
let nizBrojeva = [1,2,3,4,5,6,7,8,9,10];
for (let i in nizBrojeva) {
    console.log("Kvadrat broja "+nizBrojeva[i]+" je: "+nizBrojeva[i]*nizBrojeva[i]);
}
//Zadatak 27
let nizOcena = [5,3,4,2,5,3,1];
let brojOcena =0;
for (let i in nizOcena) {
    if(nizOcena[i]>=4){
        brojOcena++;
    }
}
console.log("Ukuan Broj ocena vece ili jednake 4 je: "+brojOcena);

//Zadatak 28
let gradovi1 = ["Beograd","Novi Sad","Nis"];
for (let i in gradovi1) {
    if (gradovi1[i].toLowerCase().includes("nis")){
        console.log("Nis je pronadjen");
    }else{
        console.log("Nis nije pronajden");
    }
}
//Zadatak 29
let nizBrojevi1 = [10,20,30];
for (let i in nizBrojevi1) {
    nizBrojevi1[i] += 5;
}
console.log(nizBrojevi1);
///Zadatak 30
let nizOcene = [5,3,4,2,5];
for (let y in nizOcene) {
    if (nizOcene[y]===5){
        console.log("Odlican");
    }else if (nizOcene[y] === 3 || nizOcene[y]===4){
        console.log("Dobar");
    }else{
        console.log("Nedovoljan");
    }
}