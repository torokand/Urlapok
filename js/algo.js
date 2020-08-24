/*
Kávéfőző bekapcsolása
If Nincs elég kávé Then
    Kávé hozzáadása
Endif
If Nincs elég víz Then
    Víz hozzáadása
Endif
While Nem melegedett fel
    10 mp várakozás
EndWhile
Csésze odahelyezése
Gomb megnyomása
*/

/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, addig
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9]
let sum = 0;

for ( let i=0; i < numericArray.length; i++) {
    sum += numericArray[i]
}
console.log("Mindösszesen= ", sum);

/*
Számlálás algoritmusa

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + '
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
     if (numericArray[i] % 2 == 0) {
         db++;
    }
}
console.log("Páros számok darabszáma: ", db);


/*
Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMIG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let maximum = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
     if (numericArray[i] > maximum) {
         maximum = numericArray[i];
    }
}
console.log("A legnagyobb szám a tömbben: ", maximum);

let minimum = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
     if (numericArray[i] < minimum) {
         minimum = numericArray[i];
    }
}
console.log("A legkissebb szám a tömbben: ", minimum);

/*
Eldőntés tétele (algoritmusa):

találat = hamis
CIKLUS amíg van elem ÉS találat = HAMIS
    szám = következő elem
    Ha igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
     if (numericArray[i] == 5) {
         contains = true; 
         console.log("Hanyadik szám az 5-ös a tömbben: ", i);
    } else { console.log (i) }
}

console.log("A tömb tartalmazza a 5-ös számot: ", contains);

// 2. megoldás, true után break-kel kiszállok a for ciklusból...

let contains2 = false;
for (let i = 0; i < numericArray.length; i++) {
     if (numericArray[i] == 5) {
         contains2 = true; 
         console.log("Hanyadik szám az 5-ös a tömbben: ", i);
         break;
    } else { console.log (i) }
}

console.log("A tömb tartalmazza a 5-ös számot: ", contains2);