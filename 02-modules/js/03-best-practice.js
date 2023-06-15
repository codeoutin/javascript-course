// Best Practices bei (neuen) Projekten

// 01. npm init ausführen um die package.json zu generieren

// 02. npm install webpack webpack-cli --save-dev     // oder gleich mit Vite

// 03. Erstelle zwei Ordner "src" und "dist"

// 04. Im "src" Ordner index.js für deinen JS Code

// 05. Im "dist" Ordner eine index.html mit Verlinkung auf main.js (Output von webpack)

// 06. Erstelle eine webpack.config.js wie im Beispiel 
// https://webpack.js.org/guides/getting-started/#using-a-configuration

// 07. Teste das Setup in der src/index.js mit einem simplen console.log oder alert statement
//     dann führe Webpack aus und lade die dist/index.html Datei im Browser

// 08. Schreibe dein Programm

// 09. Vor dem Deployment webpack watch stoppen und das production script stattdessen nutzen

// 10. Deploye nur den dist/ Ordner auf einen Server deiner Wahl