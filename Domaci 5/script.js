//Domaci Sa predavanja -> pre nego sto sam pogledao kako si ti uradio, ja sam uradio jako slicno.
// stavio sam carIme[0] u if-u
//Ti stavio u redu iznad
// let carIme = cars[i][0].toLoverCase();
//nisam znao da moze cars[i][0] pa mi je moje resenje bilo sigurica
let cars = ["Audi", "Bmw", "Skoda", "Fiat","toyota", "honda"];
let numberOfCars = cars.length;
for (let i = 0; i < numberOfCars; i++) {
    let carIme = cars[i].toLowerCase();
    if (carIme[0] === "a") {
        continue;
    }else{
        console.log(carIme);
    }
}
//Zadatak 1
let broj = 7;
if (broj > 5) {
    console.log("Broj je veci od 5!");
}

//Zadatak 2
let godine = 18;
if (godine < 18) {
    console.log("Maloletan");
}else if(godine >= 18) {
    console.log("Punoletan");
}

//Zadatak 3 -> malo sam ga unapredio :)
let ocene = [5,3,4,2,5];
let counter = 0;
for (let i = 0; i < ocene.length; i++) {
    if(ocene[i] >= 4) {
        console.log("Vasa ocena je: "+ ocene[i]);
        counter++;
    }
}
if (counter === 1) {
    console.log("Cestitamo! Imate "+counter+" ocenu vecih od 3!");
}else if(counter >= 2) {
    console.log("Cestitamo! Imate "+counter+" ocene vecih od 3!");
}else{
    console.log("Nemate ni jednu ocenu vecu od 3. :/")
}
//Zadatak 4
let brojevi =[1,2,3,4,5,6];
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i]%2 === 0){
        console.log("Broj "+brojevi[i]+" je paran");
    }
}
//Zadatak 5
let imena = ["Ana", "Marko", "Jovan", "Aleksandra"];
for (let i = 0; i < imena.length; i++) {
    if (imena[i][0] === "A"){
        console.log("Ovo Ime je "+imena[i]+". Znaci pocinje sa slovom 'A'!");
    }
}
//Zadatak 6 -> malo sam se pomucio da nadjem na google kako da izbacim space ali sam nasao.
// vidim da ima jos zavrzlama sa kosim crtama i slicno ali nisam hteo bas sebi da komplikujem zivot :D
// mislim da je ovo sasvim korektno kada su u pitanju imena gradova
let gradovi = ["Beograd", "Novi Sad", "Nis", "Zagreb"];
for (let i = 0; i < gradovi.length; i++) {
    let bezRazmaka = gradovi[i].replaceAll(" ", "").length;
    if (bezRazmaka > 5){
        console.log("Ovaj grad ime vise od 5 slova, tacnije ima "+bezRazmaka+" slova. Njegovo ime je "+gradovi[i]);
    }
}
//Zadatak 7
let dan = 3;
switch (dan) {
    case 1:
        console.log("Danas je ponedeljak");
        break;
        case 2:
            console.log("Danas je Utorak");
            break;
            case 3:
                console.log("Danas je Sreda");
                break;
                case 4:
                    console.log("Danas je Cetvrtak");
                    break;
                    case 5:
                        console.log("Danas je Petak");
                        break;
                        case 6:
                            console.log("Danas je Subota");
                            break;
                            case 7:
                                console.log("Danas je Nedelja");
                                break;
    default:
        console.log("Danas nije dan. hehe");break;
}
//Zadatak 8
let boja = "Zelena";

switch (boja.toLowerCase()) {
    case "zelena":
        console.log("Kreni");break;
        case"crvena":
            console.log("Stop");break;
            case "zuta":
                console.log("Paznja");break;
    default:
        console.log("Semafon ne radi! OPREZ!");break;
}
//Zadatak 9
let statusi = ["online", "offine", "online"];
for (let i = 0; i < statusi.length; i++) {
    switch (statusi[i]) {
        case "online":
            console.log("Korisnik je "+statusi[i]);break;
            case "offine":
                console.log("Korisnik nije aktivan");break;
        default:
            console.log("Nepoznat status");break;
    }
}
//Zadatak 10
let broj10 = 10;
if (broj10%2 === 0){
    console.log("Broj je paran");
}else{
    console.log("Broj nije paran");
}
//Zadatak 11
let rezultati = [45,70,90];
for (let i = 0; i < rezultati.length; i++) {
    if (rezultati[i] >= 60){
        console.log("Polozio");
    }else {
        console.log("Nedovoljno!");
    }
}
//Zadatak 12
let noviBrojevi = [3,5,8,2];
let zbir = 0;
for (let i = 0; i < noviBrojevi.length; i++) {
    zbir = zbir + noviBrojevi[i];
}
console.log("Zbir svih elemenata iz liste iznosi: "+zbir);

//Zadatak 13
let brojevi2 = [1,2,3,4,5,12];
let veci = 0;
for (let i = 0; i < brojevi2.length; i++) {
    if (brojevi2[i] > veci){
        veci = brojevi2[i];
    }
}
console.log("Najveci broj u listi je: "+veci);

//Zadatak 14
let poruke = ["Hello", "World", "JS", "Toza","Ognjen"];
for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].toLowerCase().includes("o")){
        console.log("Rec "+poruke[i]+" sadrzi slovo 'O'");
    }
}
//Zadatak 15
let poeni = 85;
if (poeni >= 80){
    console.log("Odlican");
}else if (poeni >= 60 && poeni <= 79){
    console.log("Dobar");
}else if (poeni < 60){
    console.log("Nedovoljan");
}
//Zadatak 16
let uloge = ["admin", "user","guest"];
for (let i = 0; i < uloge.length; i++) {
    switch (uloge[i].toLowerCase()) {
        case "admin":
            console.log("Admin Pristup");
            break;
            case "user":
                console.log("Korisnik Pristup");
                break;
                case "guest":
                    console.log("Gost Pristup");
                    break;
        default:
            console.log("Nepoznat korisnik");
            break;
    }
}
//Zadatak 17
let brojeviNiz = [2,4,6,8];
let i=0;
while (i<brojeviNiz.length) {
    console.log(brojeviNiz[i]);
    i++;
}
 //Zadatak 18
let x=5;
while (x>=0) {
    //while (x>0) da izbegnemo da x ne dobije vrednost 0 (min ce biti 1)
    console.log("X je sada: "+x);
    x--;
}
//zadatak 19
let ocene1 = [5,4,3,2,1,4];
let sveOcene =0;
for (let i = 0; i < ocene1.length; i++) {
    sveOcene = sveOcene + ocene1[i];
}
console.log("Prosek svih ocena je: "+sveOcene/ocene1.length);

//Zadatak 20
let jezici = ["JS","HTML","CSS"];
for (let i = 0; i < jezici.length; i++) {
    switch (jezici[i].toLowerCase()) {
        case "js":
            console.log("Ovo je JavaScript");break;
            case "html":
                console.log("Ovo je HTML");break;
                case "css":
                    console.log("Ovo je CSS");break;
        default:
            console.log("Nepoznat jezik");break;
    }
}
//Zadatak 21
let ulogovan = [true, false, true];
for (let i = 0; i < ulogovan.length; i++) {
    if (ulogovan[i]){
        console.log("Korisnik je Ulogovan");
    }else{
        console.log("Korisnik nije Ulogovan");
    }
}
//Zadatak 22
let vreme = "Noc";
switch (vreme.toLowerCase()) {
    case "noc":
        console.log("Laku noc");break;
    case "dan":
        console.log("Dobar Dan");break;
    case "jutro":
        console.log("Dobro Jutro");break;
        default:
            console.log("Sumrak Saga");break;
}
//Zadatak 23
let cifre2 = [1,2,3,4,5,5,7];
let sabir = 0;
for (let i = 0; i < cifre2.length; i++) {
    if(cifre2[i]>3){
        sabir = sabir + cifre2[i];
    }
} console.log("Zbir svih brojeva vecih od 3 je: "+sabir);

//Zadatak 24
let opetOcene = [5,3,4,2,5];
let brojac = 0;
for (let i = 0; i < opetOcene.length; i++) {
    if (opetOcene[i] === 5) {
        brojac++;
    }
} console.log("Petica imamo: "+brojac);

//Zadatal 25
let opetGradovi = ["nes","Beograd", "Novi Sad", "Nis","NoviGrad","Subotica"];
for (let i = 0; i < opetGradovi.length; i++) {
    if (opetGradovi[i].toLowerCase() === "nis") {
        console.log("Nasli smo Nis");break;
        //break je tu da prekine for ako nadje nis. nema potrebe da vrti ako vec imamo nis
    }
    console.log("Nismo nasli Nis");
}
//Zadatak 26
let brojevi3=[1,2,3,4,5,6,7];
for (let i = 0; i < brojevi3.length; i++) {
    brojevi3[i] += 10;
}
console.log("Nas niz sada izgleda ovako "+brojevi3);
//Zadatak 27
let tip = "Mobilni";
switch (tip.toLowerCase()) {
    case "mobilni":
        console.log("Mobilni uredjaj."); break;
    case"desktop":
        console.log("Desktop Uredjaj"); break;
    default:
            console.log("Nepoznat uredjaj");break;
}
//Zadatak 28
let poruke1 = ["Zdravo","Cao","Hello"];
let spojena = "";
for (let i = 0; i < poruke1.length; i++) {
    spojena += poruke1[i];
}
console.log(spojena);
//Zadatak 29
let brojevi4=[10,20,30,40];
for (let i = 0; i < brojevi4.length; i++) {
    console.log("Podeljen sa 2 iznosti: "+brojevi4[i]/2);
}
//Zadataak 30
let ocene3 = [5,3,4,2,5];
for (let i = 0; i < ocene3.length; i++) {
    if (ocene3[i] >= 5) {
        console.log("Odlican");
    }else if (ocene3[i] < 5 && ocene3[i] > 2) {
        console.log("Dobar");
    }else{
        console.log("Nedovoljan");
    }
}