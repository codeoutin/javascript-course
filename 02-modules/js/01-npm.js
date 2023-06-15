// Bisher haben wir scripts über das html <script src=""> Tag eingebunden
// Das ist für eigene Skripte und Komponenten auch völlig legitim

// Wenn wir jedoch eine externe Library benutzen wollen (z.B. momentjs oder lodash)
// stehen wir vor dem "Problem" das Script an der richtigen Stelle zu platzieren
// sowie das Script zu updaten bei neuen Features / Security Updates / ...

// Um den Part zu automatisieren (downloaden und updaten) gibt es eine zentrale
// Repository die sich npm (node package manager) nennt



// Downloade npm bzw. node.js (welches ein Framework für Backend JS ist)
// 1. Wechsle in das Verzeichnis in dem deine index.html Datei liegt und
// führe folgenden Befehl aus:
// $ npm init

// (Die Standard Angaben reichen aus für jede Frage)
// Dadurch erhälst du eine neue Datei namens "package.json"
// In dieser Datei speichert npm die gesamten Projekt Informationen

// Installieren nun ein npm Paket, als Beispiel können wir moment nehmen
// $ npm install moment | kurzform: $ npm i moment

// Zwei Dinge passieren: das Paket wird in einem Ordner node_modules 
// gespeichert, die Datei package.json erhält ein Update mit dem Paket


// Nun können wir mit Hilfe von npm neue Pakete herunterladen oder updaten
// du kannst das Paket in das Html einbinden und nutzen
// <script src="node_modules/moment/min/moment.min.js"></script>

// Zum Testen ob moment geladen wurde:
console.log(moment().startOf('day').fromNow());


// Das ist aber noch immer keine optimale Methode, da du umständlich in
// den Ordnern von npm_modules die Dateien suchen und einbinden musst


// Weiter mit 02-webpack