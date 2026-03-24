//Zadatak 1
console.log(`Zadatak 1 - Ispisujemo vrednost P "${document.getElementById("paragraf1").textContent}"`);
//Zadatak 2
let zadata2 = document.getElementsByClassName("text");
console.log(`Zadatak 2 - Ispisujemo "${zadata2[0].textContent}"`);
//Zadatak 3
let promeni = document.querySelector("#naslov");
promeni.innerHTML = "Novi Naslov";
//Zadatak 4
let box = document.querySelector(".box");
box.innerHTML = "Novi Sadrzaj";
//Zadatk 5
document.querySelector("#par1").innerHTML = "<strong>Bold Text</strong>";
//Zadatak 6
document.getElementsByClassName("item")[0].innerHTML = "Prvi Promenjen.";
//Zadatak 7
document.getElementById("glavni").innerText += " Dodato";
//Zadatak 8
let drugiIzListe = document.getElementsByClassName("lista");
drugiIzListe[1].innerText = "Kurska";
//Zadatak 9
let para = document.querySelector(".para");
para.style.color = "red";
//Zadatak 10
let box1 = document.querySelector("#box1");
box1.innerHTML = "<p>Novi Paragraf</p>";
//Zadatak 11
let text = document.querySelector("#tekst");
text.innerText += " + Dodato";
//Zadatak 12
let card = document.getElementsByClassName("card");
for (let i in card) {
    card[i].innerText = "Promenjeno";
}
//Zadatak 13
let spanBroj = document.getElementById("broj");
let number = Number(spanBroj.textContent) + 5;
console.log(`Zadatak 13 - Kada dodamo 5 na postojecih 10, dobijamo ${number}`);
//Zadatak 14
let opis = document.querySelector(".opis");
opis.innerText = "Nova opis";
//Zadatak 15
let sadrzaj = document.querySelector("#sadrzaj");
sadrzaj.innerHTML = "<ul><li>Prvi</li><li>Drugi</li></ul>"
//Zadatak 16
let para2 = document.getElementsByClassName("para");
for (let i in para2) {
    para2[i].textContent = "Promenjeno "+[i];
}
//Zadatak 17
let naslov2 = document.querySelector(".naslov2");
naslov2.innerText = "Novi Naslov 2";
//Zadatak 18
let boxIzDiva = document.getElementsByClassName("boxFromDiv");
boxIzDiva[1].textContent = "Box2 Promenjen";
//Zadatak 19
let para3 = document.querySelector("#para3");
para3.innerText += " + dodatni text";
//Zadatak 20
let glavniDiv = document.querySelector("#glavniDiv");
glavniDiv.innerHTML = "<h3>Novi Naslov</h3>"
//Zadatak 21
let item = document.getElementsByClassName("item");
for (let i in item) {
    item[i].innerText = Number(item[i].textContent) * 10;
}
//Zadatak 22
let poruka = document.querySelector("#poruka");
poruka.style.color = "blue";
//Zadatak 23
let kartica = document.querySelector(".kartica");
kartica.innerHTML += "<p>Opis kartice</p>";
//Zadatak 24
let test = document.querySelector(".test");
test.innerText += " World";
//Zadatak 25
let glavniBox = document.querySelector("#glavniBox");
glavniBox.innerHTML += "<ul><li>A</li><li>B</li></ul>";
//Zadatak 26 --> posto vec kostistimo rec "para" za prethodne klase, ne znam da li si
//stavio namerno ili slucajno da je opet para, pa sam stavio da "i" krece od 3 i dodao sam C-log
// da bi videli sta su prethodne vrednosti pre promene
let novaPara = document.getElementsByClassName("para");
for(let i=3; i<novaPara.length;i++){
    console.log("Stara vrednost", novaPara[i].textContent);
    novaPara[i].textContent = "Promenjeno";
}
//Zadatak 27
let broj2 = document.querySelector("#broj2");
// broj2.innerText += "+10";
//Posto nam innetText vraca sting pa ne mozemo da sabiramo, moramo da ga prebacimo u broj
//innerText sam morao da zakomentarisem
let promenaUBroj = Number(broj2.textContent)+10;
console.log(`Posle promene u broj i sabiranja sa 10, dobija se` + promenaUBroj);
//Sada mozemo da vratimo nazad promenaUBroj u span ako treba
//Zadatak 28
let card1 = document.querySelector(".card1");
card1.innerHTML += "<h2>Naslov</h2><p>Opis</p>";
//Zadatak 29
let test2 = document.querySelector("#test2");
test2.style.fontSize = "24px";
//Zadatak 30
let item1 = document.getElementsByClassName("item1");
    item1[0].innerText="Prvi";
    item1[1].innerText="Drugi";