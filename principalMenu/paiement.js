import { askQuestion } from '../index.js';
import { achatAirtel } from '../displayMenu/achatEntreprise.js';
import { paiementSurnom } from '../displayMenu/paiementAUnSurnom.js';

export async function Paiement() {
    console.log('\n--- Paiements ---');
    console.log('1. Payer à');
    console.log('2. Achat chez Airtel');
    console.log('3. Air Madagascar');

    const choice = await askQuestion('Saisissez votre choix : ');

    if (choice === '1') {
        console.log('\n--- Payer à ---');
        console.log('1. À un surnom');
        console.log('2. Favoris');

        const subChoice = await askQuestion('Saisissez votre choix : ');

        if (subChoice === '1') {
            await paiementSurnom();
        } else if (subChoice === '2') {
            console.log('Airtel Money: Aucun favoris enregistré pour ce service par ce msisdn');
        } else {
            console.log('Choix invalide. Veuillez réessayer.');
        }
    } else if (choice === '2') {
        const recipient = 'USDM';
        await achatAirtel(recipient);
    } else if (choice === '3') {
        const recipient = 'AIR_MAD';
        await achatAirtel(recipient);
    } else {
        console.log('Choix invalide. Veuillez réessayer.');
    }
}
