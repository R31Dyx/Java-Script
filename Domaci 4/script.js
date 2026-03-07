//Brojevi + Switch
//NOTE: Neki Zadatci su blago prosireni/Unapredjeni
//Zadatak 1 - (malo nadogradjen)
let broj = 3;
switch (broj) {
    case 1: console.log("Broj je 'Jedan'"); break;
    case 2: console.log("Broj je 'Dva'"); break;
    case 3: console.log("Broj je 'Tri'"); break;
    case 4: console.log("Broj je 'Cetiri'"); break;
    case 5: console.log("Broj je 'Pet'"); break;
    default: console.log("Neki Levi Broj"); break;
}
//NOTE: Neki Zadatci su blago prosireni/Unapredjeni
// Zadatak 2
let ocena = 5;
switch (ocena) {
    case 1: console.log("Nedovoljan"); break;
    case 2: console.log("Dovoljan"); break;
    case 3: console.log("Dobar"); break;
    case 4: console.log("Vrlo Dobar"); break;
    case 5: console.log("Odlican"); break;
    default: console.log("Ovaj nije ni polagao"); break;
}
//NOTE: Neki Zadatci su blago prosireni/Unapredjeni
 //zadatak 3
let dan = new Date().getDay();
switch (dan){
    case 0: console.log("Danas je Nedelja"); break;
    case 1: console.log("Danas je Ponedeljak"); break;
    case 2: console.log("Danas je Utorak"); break;
    case 3: console.log("Danas je Sreda"); break;
    case 4: console.log("Danas je Cetvrtak"); break;
    case 5: console.log("Danas je Petak"); break;
    case 6: console.log("Danas je Subota"); break;
    default: console.log("Nepostojeci datum"); break;
}
//NOTE: Neki Zadatci su blago prosireni/Unapredjeni
//Zadatak 4
let mesec = new Date().getMonth();
switch(mesec){
    case 0: console.log("Trenutno je Januar"); break;
    case 1: console.log("Trenutno je Februar"); break;
    case 2: console.log("Trenutno je Mart"); break;
    case 3: console.log("Trenutno je April"); break;
    case 4: console.log("Trenutno je Maj"); break;
    case 5: console.log("Trenutno je Jun"); break;
    case 6: console.log("Trenutno je Jul"); break;
    case 7: console.log("Trenutno je Avgust"); break;
    case 8: console.log("Trenutno je Septembar"); break;
    case 9: console.log("Trenutno je Oktobar"); break;
    case 10: console.log("Trenutno je Novembar"); break;
    case 11: console.log("Trenutno je Decembar"); break;
    default: console.log("Nevazeci Datum"); break;
}
//Zadatak 5
let statusKod = 2;
switch (statusKod){
    case 1: console.log("Nije uspeo"); break;
    case 2: console.log("Uspeh"); break;
    default: console.log("Nevazeci status"); break;
}
//String + Switch
//Zadatak 6
let boja = "Crvena";
switch (boja){
    case "Crvena": console.log("STOP"); break;
    default: console.log("Boja nije crvena"); break;
}
//Zadatak 7
let jezik = "JS";
switch (jezik) {
    case "JS":console.log("JavaScript");break;
    default:console.log("Nije JS"); break;
}
//Zadatak 8
let uloga = "Admin";
switch (uloga) {
case "Admin":
    console.log("Admin Pristup"); break;
    default:console.log("Nije Admin Pristup"); break;
}
//Zadatak 9
let grad = "Beograd";
switch (grad) {
    case "Beograd":
        console.log("Glavni grad je "+grad); break;
        default:console.log(grad + " nije glavni grad"); break;
}
//Zadatak 10
let status = "online";
switch (status) {
    case "online":
        console.log("Korisnik je "+status);break;
    default:
        console.log("Korisnik nije online");break;
}

//Boolean + Switch
//Zadatak 11
let jeOnline= true;
switch (jeOnline) {
    case true:console.log("Korisnik je Online");break;
    default:console.log("Korisnik nije Online");break;
}

//Zadatak 12
let punoletan = false;
switch (punoletan) {
    case true:
        console.log("Korisnik je Punoletan"); break;
    case false:
        console.log("Korisnik nije Punoletan"); break;
        default:console.log("Ne znamo da li je korisnik punoletan ili ne");break;
}
//Zadatak 13
let imaPristup = true;
switch (imaPristup) {
    case true:
        console.log("Pristup Dozvoljen"); break;
        default:console.log("Pristup Nije Dozvoljen"); break;
}
//Array + Switch
//Zadatak 14 (Koristio sam savet chatgpt-a kod --switch (ocene[0]) -- ali ne i kopirao code)
let ocene = [5, 4, 3];
switch (ocene[0]) {
    case 5:
        console.log("Odlican"); break;
    case 4:
        console.log("Nije odlican \n"+"Trenutni uspeh je vrlo dobar"); break;
    case 3:
        console.log("Nije odlican \n"+"Trenutni uspeh je dobar"); break;
    case 2:
        console.log("Nije odlican \n"+"Trenutni uspeh je dovoljan"); break;
    case 1:
        console.log("Nije odlican \n"+"Trenutni neuspeh je nedovoljan"); break;
    default: console.log("Nepoznata ocena"); break;
}
//Zadatak 15
let statusi = ["Online", "Offline"];
switch (statusi[1]) {
    case "Offline":
        console.log("Korisnik Nije aktivan"); break;
}
//Zadatak 16
let jezici = ["HTML", "CSS", "JavaScript"];
switch (jezici[2]) {
    case "JavaScript":
        console.log("JS Jezik"); break;
    default:
        console.log("Neki drugi jezik je u pitanju"); break;
    }
//Kombinovane Vezbe
//Zadatak 17
let noviBroj = 0;
switch (noviBroj) {
    case 0:
        console.log("Nula"); break;
        default:
            console.log("Nije nula. Neki drugi broj je u pitanju"); break;
}
//Zadatak 18
let noviDan = "Subota";
switch (noviDan) {
    case "Subota":
        console.log("Vikend"); break;
        default:
            console.log("Nije Subota. Mozda cak nije ni vikend... :'( "); break;
}
//Zadatak 19
let novaUloga = "user";
switch (novaUloga) {
    case "user":
        console.log("Obican Korisnik"); break;
        default:
            console.log("Neobican Korisnik"); break;
}
//Zadatak 20
let signal = "zeleno";
switch (signal) {
    case "zeleno":
        console.log("Kreni"); break;
        default:
            console.log("Cekaj Zeleno"); break;
}
//Zadatak 21
let rezultat = 3;
switch (rezultat) {
    case 3:
        console.log("Dobar"); break;
        default:
            console.log("Nije dobar"); break;
}
//zadatak 22
let errorCode = 404;
switch (errorCode) {
    case 404:
        console.log("Stranica nije pronadjena"); break;
        default:
            console.log("Nije 404"); break;
}
//zadatak 23
let plan = "premium";
switch (plan) {
    case "premium":
        console.log("Premium Korisnik"); break;
        default:
            console.log("Nije Premium Korisnik"); break;
}
//Zadatak 24
let vreme = "noc";
switch (vreme) {
    case "noc":
        console.log("Zmaj od nocaja"); break;
        default:
            console.log("Jos je dan! Slusaj Bajagu"); break;
}
//Zadatak 25
let tip= "mobilni";
switch (tip) {
    case "mobilni":
        console.log(tip +" uredjaj"); break;
        default:
            console.log("Nije mobilni"); break;
}