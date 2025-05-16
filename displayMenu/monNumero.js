import {askQuestion } from '../index.js';

export async function MonNumero() {
    while (true) {
        const amountStr = await askQuestion('Entrez le montant en AR : ');
        const amount = Number(amountStr.replace(/\s+/g, ''));

        if (isNaN(amount) || amount <= 0) {
            console.log('Montant invalide. Veuillez saisir un montant supérieur à 0.');
            continue; 
        }

        const password = await askQuestion(`Veuillez entrer votre mot de passe pour confirmer l'achat d'un crédit de Ar ${amount} : `);

        if (password.length === 0) {
            console.log('Mot de passe invalide. Opération annulée.');
            return; 
        } else {
            console.log(`Achat de crédit de Ar ${amount} confirmé.`);
            return; 
        }
    }
}
