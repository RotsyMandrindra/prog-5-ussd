import readline from 'node:readline';

import { EnvoyerArgent } from './principalMenu/envoyerArgent.js';
import { Paiement } from './principalMenu/paiement.js';
import { Recharger } from './principalMenu/recharger.js';

export function askQuestion(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

async function mainMenu() {
    console.log('\n--- Menu Principal ---');
    console.log('1. Recharger');
    console.log('2. Envoyer argent');
    console.log('3. Paiement');

    const choice = await askQuestion('Saisissez votre choix : ');
    return choice;
}

async function runUSSD() {
    while (true) {
        const choice = await mainMenu();

        switch (choice) {
            case '1':
                await Recharger();
                break;
            case '2':
                await EnvoyerArgent();
                break;
            case '3':
                await Paiement();
                break;
            case 'xx':
                console.log('Fin de la session. Merci !');
                return;
            default:
                console.log('Choix invalide. Veuillez réessayer.');
                break;
        }
    }
}

runUSSD();
