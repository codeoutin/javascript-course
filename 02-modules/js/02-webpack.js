console.log("### 02 Webpack JS Kurs ###")
// Das Problem bei der Einbindung von npm Paketen ist nicht nur das finden
// und umständliche verlinken, sondern auch dass das Paket in der gesamten
// Seite verfügbar macht. Also allen Dateien die nach moment.min.js eingebunden werden

// Da node.js eine JavaScript runtime library ist die auf dem Server läuft
// hat Node zugriff auf alle Dateien des Servers und könnte mit require 
// eingebunden werden

if(typeof __webpack_require__ === 'function') { // < Prüfung ob webpack die Datei verarbeitet hat
    console.log('webpack hat die Datei erfolgreich verarbeitet, daher funktioniert nun der Aufruf')
    var moment = require('moment') // Kein Fehler
    console.log(moment().startOf('day').fromNow()) // Funktioniert
} else {
    console.warn('require ist im Browser nicht verfügbar, die nächste Zeile wird daher nicht funktionieren ohne module bundler')
    var moment = require('moment') // < Fehler: require is not defined
}


// Hier kommt ein Module Bundler ins Spiel. Der Bundler hat Zugriff auf
// das Dateisystem und erstellt eine Datei die Browser Kompatibel ist
// Der Bundler sucht alle require statements und ersetzt sie mit ausführbarem
// Code. Das Ergebnis ist eine JS Bundle Datei

// Installiere webpack (auch ein npm package!)
// $ npm i webpack webpack-cli --save-dev
//                    ⬆          ⬆
//              kommandozeile  nicht in produktionsumgebung installieren

// $ ./node_modules/.bin/webpack ./js/02-webpack.js --mode=development
//                                      ⬆                ⬆
//                                 diese Datei        "lesbarer" Output

// Die Ausgabe landet im Ordner dist/main.js
// Diese Datei kannst du nun statt der 02-webpack.js nutzen!

// Du kannst auch ein Config File definieren, welches die extra Parameter integriert
// (es werden mit Sourcemaps, CSS, Minifying usw. schnell viele Parameter!)

// webpack.config.js
// module.exports = {
//     mode: 'development',
//     entry: './02-webpack.js',
//     output: {
//       filename: 'main.js',
//       publicPath: 'dist'
//     }
//   };

// jetzt kannst du webpack ohne parameter ausführen 
// $ ./node_modules/.bin/webpack


// Um verschiedene Tasks zu automatisieren macht es Sinn Task Runner zu nutzen welche npm bietet
// Für Frontend wäre das zB minifying, optimieren von Bildern, ausführen von Tests, etc.

// Füge dazu in die scripts section von package.json folgendes ein
// "build": "webpack --progress --mode=production",
// "watch": "webpack --progress --watch"

// nun hast du zwei Skripte build und watch, diese kannst du in der Kommandozeile ausführen
// $ npm run build
// und
// $ npm run watch
// watch überwacht jede Änderung und führt webpack automatisch aus, sehr gut für das Entwickeln!


// Webpack wird in 2023 langsam abgelöst durch schnellere Tools wie Vite
// https://vitejs.dev/