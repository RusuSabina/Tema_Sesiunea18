// EXERCITIUL 1

console.log("EXERCITIUL 1");
let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";

// 1.1 Verifica daca numele "Daniel" se afla pe lista.

const danielName = "Daniel";
const isIncluded = badKids.includes(danielName);
if (isIncluded) {
 console.log("Numele", danielName, "se afla pe lista")
} else {
 console.log ("Numele", danielName, "nu se afla pe lista")
}
console.log(isIncluded);

// 1.2 Daca numele "Daniel" se afla pe lista, modifica string-ul astfel incat in locul lui "Daniel" sa fie "Gigel".

badKids = badKids.replace("Daniel", "Gigel");
console.log(badKids);

// EXERCITIUL 2 

console.log("EXERCITIUL 2");

const testGrades = "9.80/6.85/9.10/7.80/8.20";

 // sa se calculeze media aritmetica a notelor
 // TIP: transforma elementele in array si apoi itereaza prin array

const gradesArray = testGrades.split("/").map(Number);

const sum = gradesArray.reduce( (a, b) => a+b, 0);
console.log("Suma mediilor este:", sum);

const avg = (sum/gradesArray.length);
console.log("Media aritmetica a mediilor este:", avg);

// EXERCITIUL 3

console.log("EXERCITIUL 3");

const props = {
 name: 'Minge gotbal Nike T90',
 price: 220, 
 currency: "RON",
 brand: "Nike"
}

//  3.1 Destructureaza din obiect urmatoarele proprietati: name, price, currency.

const {name, price, currency} = props;
console.log(name, price, currency);

// 3.2 Folosind proprietatile destructurate, afiseaza un mesaj in forma “Produsul {name} are pretul {price}”

console.log(`Produsul ${name} are pretul ${price}`);

// EXERCITIUL 4 

console.log("EXERCITIUL 4");

const additionalProps = {
 isAvailable: true
}

// Creeaza un obiect nou, care sa contina proprietatile obiectelor props si additionalProps.

const newObject = Object.create(additionalProps, {props: {value:'abcd'}});
console.log(additionalProps,newObject);



// EXERCITIUL 5

console.log("EXERCITIUL 5");

/* Sa se scrie un regex pentru a valida daca un string este un CNP valid. Un CNP este valid daca respecta urmatoarele reguli:
Formatul este SAALLZZJJNNNC, unde :
-- S reprezinta o valoare intre 1-8
-- AA reprezinta o valoare intre 00-99
-- LL reprezinta o luna valida, valoare intre 01-12
-- ZZ reprezinta ultimele doua cifre ale anului, valoare intre 00-99
-- JJ reprezinta codul judetului, valoare intre 01-51
-- NNN reprezinta orice numar intre 001-999
-- C reprezinta orice cifra intre 0-9 */

const cnpRegex = /^[1-8]\d{0}(0[0-9])(0[1-9]|1[0-2])(0[0-9]|1[0-9]|2[0-9]|3[0-1])(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])([0-9]{3})[0-9]/g

const testString = "6010513226794";
if(cnpRegex.test(testString)){
 console.log(`Stringul ${testString} este un CNP valid`);
}
else {
 console.log(`Stringul ${testString} nu este un CNP valid`);
}

//  EXERCITII OPTIONALE

console.log("EXERCITII OPTIONALE");

const values = [-1, 100, -500, 2, 3 , 4, 5];

// Folosind spread operator, sa se afiseze cea mai mica si cea mai mare valoare din array.

console.log(Math.min(...values));
console.log(Math.max(...values));