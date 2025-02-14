const { exec } = require('child_process');
const readline = require('readline');

// Fonction pour afficher l'heure et le mode de développement
function afficherHeureEtMode() {
    const date = new Date();
    const heure = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(`💻${heure} /dev mode`);
}

// Fonction pour afficher le titre
function titre() {
    console.log("                 ╔═══════════════════════════════════════════════════════════╗");
    console.log("                 ║               _                                           ║");
    console.log("                 ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___   ║");
    console.log("                 ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║");
    console.log("                 ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║");
    console.log("                 ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║");
    console.log("                 ║                                                           ║");
    console.log("                 ╚═══════════════════════════════════════════════════════════╝");
    console.log(""); 
}
const crypto = require('crypto');

// Fonction pour générer une graine basée sur l'horodatage Unix
function generateSeed() {
    return Date.now().toString();
}

// Fonction pour générer un nombre aléatoire de 24 chiffres basé sur la graine
function generateRandomNumber(seed) {
    const hash = crypto.createHash('sha256');
    hash.update(seed);
    const hashValue = hash.digest('hex');
    return BigInt('0x' + hashValue.slice(0, 101)).toString().padStart(24, '0');
}

// Fonction pour mettre à jour l'affichage de l'heure et du nombre aléatoire
function updateDisplay() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const seed = generateSeed();
    const randomNumber = generateRandomNumber(seed);

console.clear(); // Efface la console à chaque mise à jour
console.log(`⏱️ : ${hours}:${minutes}:${seconds}.${milliseconds}`);
console.log('');
console.log('╔═══════════════════════════════════════════════════════════════════════════════════════════╗');
console.log('║[📗 📕 📒]┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈codex┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>');
console.log('╠═══════════════════════════════════┬═══════════════════════════════════════════════════════╣');
console.log('║                                    ║#│                                                    ║');
console.log('║ menu1                              ║#│    +╔─────────────────────────────────────────╦    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    ║');
console.log('║                                    ║#│    -╚─────────────────────────────────────────╝    ║');
console.log('║                                    ║#│                                                    ║');
console.log('║                                    ║#│    1╔──────╦──────╦──────╦──────╦──────╦──────╦    ║');
console.log('║                                    ║#│     │░░░░░░│██████│░░░░░░│██████│░░░░░░│██████│    ║');
console.log('║                                    ║#│     │░░░░░░│██████│░░░░░░│██████│░░░░░░│██████│    ║');
console.log('║                                    ║#│    O╚──────╩──────╩──────╩──────╩──────╩──────╝    ║');
console.log('║                                    ║#│___________________________________________________>║');
console.log('╠════════════════════════════════════╩══════════════════════════════════════════════════════╣');
console.log(`║ █░░ ${randomNumber} ░░█║`);
console.log('╚═══════════════════════════════════════════════════════════════════════════════════════════╝');
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let intervalId;

function start() {
    // Affiche l'interface utilisateur
    afficherHeureEtMode();
    titre();
    updateDisplay();

    // Lance l'intervalle de mise à jour
    intervalId = setInterval(updateDisplay, 100);

    // Attend l'entrée de l'utilisateur
    rl.question("Entrez votre choix : ", (commande) => {
        clearInterval(intervalId); // Arrête l'intervalle avant de traiter la commande

        // Traitement de la commande
        const commandToExecute = commandMap[commande];
        if (commandToExecute) {
            exec(commandToExecute, (error, stdout, stderr) => {
                // Gestion des erreurs et affichage des résultats
                if (error) {
                    console.error(`Erreur: ${error.message}`);
                } else {
                    console.log(stdout);
                }
            });
        } else {
            console.log("Commande inconnue");
        }

        // Relance l'intervalle et attend la prochaine commande
        intervalId = setInterval(updateDisplay, 100);
        start(); // Relance la fonction start pour une nouvelle itération
    });
}
// Démarrage initial
const commandMap = {

    Tme: "make Tme",
    
    call: "make call",
    
    // ...
    
    };
afficherHeureEtMode();

titre();
setInterval(updateDisplay, 100);
start();