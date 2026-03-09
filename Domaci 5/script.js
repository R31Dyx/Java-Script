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
let godine = 16;
if (godine < 18) {
    console.log("Maloletan");
}else if(godine > 18) {
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
let poruke = ["Hello", "World", "JS", "Toza"];
for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].includes("o")){
        console.log("Rec "+poruke[i]+" sadrzi slovo 'O'");
    }
}
