// Lesson 2 : Objekte und Objekt Konstruktoren


const testObject = {
    name: 'Das ist ein Test',
    year: 2022,
    "vor und nachname": "Max Maximilian",
    ausgabe: () => {
        // Funktion innerhalb eines Objekts
    }
}

// 1. Gebe den name Wert vom Objekt testObject mit zwei unterschiedlchen Vorgehensweisen
// zurück (dot notation + bracket notation)

// 2. Gebe das Jahr des Objekts zurück mithilfe der definierten Variable
const key = 'year' // < Nutze diese Variable dafür
// ....


// 3. Objekt Constructor: Erstelle zwei User Objekte mit dem folgenden Constructor
function User(name, age) {
    this.name = name
    this.age = age
    this.printData = () => console.log(`Name: ${name}, Alter: ${age}`)
}

// 4. Gebe das Alter des zweiten Nutzers aus


// 5. Sortiere 3 Benutzer nach Alter (Tipp: Erstelle dazu ein Array mit deinen Objekten, nutze dann sort() )


// 6. Erstelle einen Konstruktor für "Book" Objekte mit Titel, Author, Anzahl Seiten und
// ob du das Buch gelesen hast oder nicht


// Im nächsten Scrhitt erstelle eine Funktion die Infos folgendemaßen ausgibt
// theHobbit.info() // "Der Hobbit von J.R.R. Tolkien, 295 Seiten, nicht gelesen"

// Info: Es ist immer besser return zu nutzen, statt console.log() in einer Funktion
// der besser Weg wäre einen String zurück zu geben und die Ausgabe wie in diesem Bsp zu loggen:
// console.log(theHobbit.info());



// 7. Erstelle die Funktion markRead(), welche das Buch als gelesen markiert, mit einer Ausgabe


// Info: Jedes Objekt in JavaScript hat einen Prototype, egal ob Array, Variablen, Objekte, usw.
// Info: Funktionen im Objekt zu deklarieren speichert die gesamte Funktion bei jedem neuen
// Info: Objekt, mit Prototype wird ein Proxy zum Konstruktor erstellt und die Funktion emuliert
// 8. Nutze die Funktion als Prototype Funktion, statt in der Objekt Deklaration
//    und erstellt eine zweite Funktion mit der das Buch als nicht gelesen markiert wird


// 9. Auskommentieren um eine Reihe von Büchern zu erstellen und diese in ein Array zu packen
// Nutze die Prototype.forEach Funktion um alle Bücher als gelesen zu markieren

// // START
// let harryPotter = new Book('Harry Potter', 'J.K. Rowling', 897, false)
// let it = new Book('It', 'Stephen King', 1100, false)
// let goneWind = new Book('Gone with the Wind', 'Margaret Mitchell', 1500, false)
// let clarissa = new Book('Clarissa', 'Samuel Richardson', 1500, false)
// // ENDE






// Ein weiteres Konzept sind Klassen, diese sind sehr ähnlich zu Object Constructors,
// es gibt minimale Unterschiede.
// Mehr dazu kannst du hier nachlesen: https://javascript.info/class