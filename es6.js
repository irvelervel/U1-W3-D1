// COME CREIAMO UNA FUNZIONE IN JS?

// 1) Inizializzandola con il costrutto "function"

meow() // ??? funziona perchè l'interprete JS effettua l'hoisting e "sposta"
// la dichiarazione della funzione in alto

// inizializzazione o dichiarazione
function meow() {
  console.log('MIAO')
}

// invocazione
meow()

// il problema di questa creazione di funzione è che il costrutto "function"
// utilizzato in questo modo provoca automaticamente l'hoisting da parte dell'
// interprete JS

// 2) Utilizzando il costrutto "function" per inizializzare una variabile

// anotherMeow() // NON FUNZIONERÀ, ANOTHERMEOW NON ESISTE ANCORA

// inizializzazione o dichiarazione
const anotherMeow = function () {
  console.log('ANOTHER MIAO')
}

// invocazione
anotherMeow() // funziona, perchè ho già dichiarato cos'è anotherMeow

// 3) Utilizzando le ARROW FUNCTIONS

const anotherMeowArrow = () => {
  console.log('FRECCIA MIAO')
}

anotherMeowArrow()

// il 2) e il 3) sono praticamente equivalenti.
// a parte per una cosuccia: le arrow functions NON eseguono automaticamente
// nessun binding di "this", quindi ad es. se collegassimo una funzione freccia
// al click di un bottone, il valore di "this" non sarebbe il bottone da cui è partita
// (come sarebbe lecito aspettarsi, che è anche il comportamento delle funzioni
// dichiarate con "function") ma sarebbe sempre il contesto più generico, ovvero
// "window".

console.log('THIS', this)

// SPREAD OPERATOR
// Lo spread operator è un costrutto di ES6 che indica con tre puntini ...
// Se utilizzato con un oggetto, indica il trasporto verso una nuova destinazione
// di TUTTE le proprietà di quell'oggetto.

const person1 = {
  name: 'Mario',
  age: 30,
  city: 'Gallipoli',
  zipCode: 73014, // CAP
  job: 'Web Developer',
}

console.log('PERSON 1', person1)

const person2 = {
  ...person1,
  name: 'Giorgio', // questo name SOVRASCRIVE "Mario"!
  age: '32',
  // mi sono trasportato dentro person2 TUTTE le proprietà di person1
}

// person2.age = 50 // questo prova che person2 è un oggetto interamente diverso
console.log('PERSON 2', person2)

// delete person2.zipCode // per eliminare una proprietà che non ti serve
const person3 = {
  city: person1.city, // per copiare una sola proprietà
  zipCode: person1.zipCode,
  name: 'Giovanni',
}

const obj = {
  length: 50,
  length: 80, // si può fare! 80 sarà il valore di length alla fine della
  // dichiarazione perchè un oggetto NON può avere due proprietà che si chiamano
  // allo stesso modo!
}

console.log(obj)

// SPREAD OPERATOR NEGLI ARRAY
const arr1 = ['Mario', 'Giorgio', 'Giovanni', 'Asdrubale']

// const arr2 = arr1 // NON crea una vera copia!
// arr2.splice(0, 1) // se elimino un elemento da arr2...

// console.log(arr1) // ...l'ho eliminato anche da arr1

const arr2 = [...arr1] // questa SÌ che è una vera copia!
// quello che faccio è copiare il CONTENUTO dell'array!

arr2.splice(0, 1) // se elimino un elemento da arr2...
console.log(arr1) // ... NON l'ho eliminato anche da arr1 :)

// REST PARAMETERS
// possiamo utilizzare i ... anche per indicare genericamente un solo parametro
// in una funzione
// All'invocazione di tale funzione sarà possibile indicare quanti argomenti si vuole
// questi argomenti saranno raggruppati automaticamente dentro un array chiamato
// come avete deciso

const manipulateStrings = function (...strings) {
  console.log(strings)
  //   return strings[0] // "Ciao"
  return strings[1] // "Epicode"
}

manipulateStrings('Ciao', 'Epicode')

// DESTRUCTURING

const dog = {
  name: 'Pluto',
  age: 3,
  numberOfPaws: 4,
  canFly: false,
}

// const name = dog.name // sintassi "classica"
const { name, canFly } = dog // sintassi più "moderna", molto elegante e concisa
console.log('name', name, canFly) // console.log di name
// sono riuscito a dichiarare in modo conciso una variabile che si chiama
// allo stesso modo della proprietà dell'oggetto

// BACKTICKS e TEMPLATE LITERALS

const myName = 'Mario'
const myDog = 'Fido'

const placeholder1 = `
    Lorem ipsum dolor sit amet, consectetur adipisci elit,
    sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid
    ex ea commodi consequatur. ${myName} aute irure reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. ${myDog} sint obcaecat cupiditat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

console.log(placeholder1)

// CONCATENAZIONE DI ARRAY

let colors1 = ['red', 'blue']
const colors2 = ['green', 'yellow']

const allTheColors = colors1.concat(colors2)
// ['red', 'blue', 'green', 'yellow']

const anotherAllTheColors = [...colors1, ...colors2]
// ['red', 'blue', 'green', 'yellow']

// SLICE (diverso da splice() perchè NON modifica l'array in-place)

const animals = ['gatto', 'cane', 'pescerosso', 'coniglio']
const someAnimals = animals.slice(2, 3) // ?? ['pescerosso']
const someOtherAnimals = animals.slice(1) // ?? ['cane', 'pescerosso', 'coniglio']

// NUOVI METODI PER L'ITERAZIONE DI ARRAY IN ES6

// forEach()

const fruits = ['orange', 'peach', 'apple', 'tangerine']

// come rendiamo ogni elemento in MAIUSCOLO?
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase())
}

// --> forEach automatizza questo ciclo comunissimo, che parte dal primo elemento
// e arriva fino alla fine dell'array
fruits.forEach((fruit) => {
  // fruit è il SINGOLO FRUTTO, esposto ogni volta dal ciclo
  // fruit è come fruits[i]
  console.log(fruit.toUpperCase())
})

// sarebbe come scrivere così... però con .forEach(), .map(), .filter(), .reduce() etc.
// si preferisce la forma con ARROW FUNCTION
// fruits.forEach(function (fruit) {
//   console.log(fruit.toUpperCase())
// })

const games = ['uno', 'poker', 'yahtzee', 'blackjack']

// games.forEach() // ricordiamoci che forEach è un metodo, quindi per
// prima cosa io scrivo sempre ( )

// games.forEach(() => {}) // come parametro del forEach io inserisco una funzione
// detta callback, e per comodità e leggibilità la metto come freccia

// games.forEach((el) => {}) il primo parametro della callback è il singolo elemento
// esposto dal ciclo: il primo elemento dell'array alla prima iterazione, il secondo
// alla seconda etc. etc.

games.forEach((el) => {
  // ora eseguo quello che voglio su ogni elemento
  //   prendo il secondo e terzo carattere di ogni gioco
  let portion = el.slice(1, 3) // prende le posizioni 1 e 2, il 3 è escluso
  if (el !== 'poker') {
    console.log('PORTION', portion)
  }
})

// MAP()
// .map() ci permette di trasformare un array in un altro array

const arrayOfLowercaseWords = ['chair', 'table', 'window', 'computer']

// come faccio a trasformare questo array in uno nuovo con tutto in maiuscolo?

// CLASSIC VERSION
// // creo un array vuoto
// const arrayOfUppercaseWords = []

// // ciclo arrayOfLowercaseWords
// for (let i = 0; i < arrayOfLowercaseWords.length; i++) {
//   // creo la versione maiuscola di ogni parola
//   let upperCaseWord = arrayOfLowercaseWords[i].toUpperCase()
//   // la pusho dentro il mio array che inizialmente era vuoto
//   arrayOfUppercaseWords.push(upperCaseWord)
// }

// console.log(arrayOfUppercaseWords)

// .MAP() VERSION
const arrayOfUppercaseWords = arrayOfLowercaseWords.map((word) => {
  // devo ritornare l'elemento trasformato
  return word.toUpperCase()
})

console.log(arrayOfUppercaseWords)
console.log(arrayOfLowercaseWords)

// .FILTER()
// filter torna un nuovo array, filtrato secondo una condizione

const names = ['Stefano', 'Sebastiano', 'Erica', 'Alessio']

// voglio creare un array in cui tengo solamente i nomi che cominciano con 'S'

// CLASSIC METHOD
// const justNamesWithS = []

// for (let i = 0; i < names.length; i++) {
//   if (names[i].charAt(0) === 'S') {
//     // se il nome comincia con 'S'
//     justNamesWithS.push(names[i])
//   }
// }

// console.log('justNamesWithS', justNamesWithS)

// FILTER() METHOD
const justNamesWithS = names.filter((n) => {
  if (n.charAt(0) === 'S') {
    // ritorno TRUE in modo da includere n nell'array justNamesWithS
    return true
  } else {
    // ritorno FALSE in modo da NON includere nell'array justNamesWithS
    return false
  }
})

// VERSIONE EXTREME (skippate pure!)
const justNamesWithSExtreme = names.filter((n) => {
  return n.charAt(0) === 'S' // true o false
})

console.log(justNamesWithS)

// VERSIONE EXTREME^2 (skippate pure^2!)
const justNamesWithSExtremeSquared = names.filter((n) => n.charAt(0) === 'S')

// REDUCE
// reduce permette di calcolare facilmente delle operazioni (spesso di calcolo)
// operate tra tutti gli elementi di un array

const myNumbers = [5, 8, 290, 4]

// come li sommo tutti assieme?
const total = myNumbers.reduce((total, singleNumber) => {
  return total + singleNumber
})

console.log('total', total)

// EVERY (corrispettivo di AND &&)
const val = myNumbers.every((n) => {
  return n > 10
})
// val sarà FALSE
console.log(val)

// SOME (corrispettivo di OR ||)
const val2 = myNumbers.some((n) => {
  return n > 10
})
// val2 sarà TRUE
console.log(val2)
