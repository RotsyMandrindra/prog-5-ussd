import { MonNumero } from '../displayMenu/monNumero';
import { askQuestion } from '..';
import { AutreNumero } from '../displayMenu/demandeConfirmationNumero';

export async function Recharger() {
    while (true) {
        console.log('\n--- Recharger ---');
        console.log('1. Mon numéro');
        console.log('2. Un autre numéro');
        console.log('3. Favoris');
        console.log('0. Retour');

        const choice = await askQuestion('Saisissez votre choix : ');

        if (choice === '1') {
            await MonNumero();
            return;
        } else if (choice === '2') {
            await AutreNumero();
        } else if (choice === '3') {
            console.log('Airtel Money: Aucun favoris enregistré pour ce service par ce msisdn');
        } else if (choice === '0') {
            return;
        } else {
            console.log('Choix invalide. Veuillez réessayer.');
        }
    }
}

