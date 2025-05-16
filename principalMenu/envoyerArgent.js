import { askQuestion } from '../index.js';
import { demandeArgent } from '../displayMenu/demanderArgent.js';
import { envoyerAUnNumero } from '../displayMenu/envoyerAUnNumero.js';
import { envoyerArgentSurnom } from '../displayMenu/surnom.js';

export async function EnvoyerArgent() {
    console.log('\n--- Envoyer Argent ---');
    console.log('1. Airtel');
    console.log('2. Orange');
    console.log('3. Telma');
    console.log('4. Demander de l\'argent');

    const choice = await askQuestion('Saisissez votre choix : ');

    if (choice === '1') {
        console.log('\n--- Envoyer via Airtel ---');
        console.log('1. À un numéro');
        console.log('2. Au surnom');
        console.log('3. Favoris');

        const subChoice = await askQuestion('Saisissez votre choix : ');

        if (subChoice === '1') {
            await envoyerAUnNumero();
        } else if (subChoice === '2') {
            await envoyerArgentSurnom();
        } else if (subChoice === '3') {
            console.log('Airtel Money: Aucun favoris enregistré pour ce service par ce msisdn');
        } else {
            console.log('Choix invalide. Veuillez réessayer.');
        }
    } else if (choice === '2') {
        console.log('\n--- Envoyer via Orange ---');
        console.log('1. À un numéro');
        console.log('2. Favoris');

        const subChoice = await askQuestion('Saisissez votre choix : ');

        if (subChoice === '1') {
            await envoyerAUnNumero();
        } else if (subChoice === '2') {
            console.log('Airtel Money: Aucun favoris enregistré pour ce service par ce msisdn');
        } else {
            console.log('Choix invalide. Veuillez réessayer.');
        }
    } else if (choice === '3') {
        console.log('\n--- Envoyer via Telma ---');
        console.log('1. À un numéro');
        console.log('2. Favoris');

        const subChoice = await askQuestion('Saisissez votre choix : ');

        if (subChoice === '1') {
            await envoyerAUnNumero();
        } else if (subChoice === '2') {
            console.log('Airtel Money: Aucun favoris enregistré pour ce service par ce msisdn');
        } else {
            console.log('Choix invalide. Veuillez réessayer.');
        }
    } else if (choice === '4') {
        await demandeArgent();
    } else {
        console.log('Choix invalide. Veuillez réessayer.');
    }
}
