import { askQuestion } from '../index.js';

export async function achatAirtel(recipient) {
    const amountStr = await askQuestion('Entrez le montant en AR : ');
    const amount = Number(amountStr.replace(/\s+/g, ''));

    const name = recipient;

        if (isNaN(amount) || amount <= 0) {
            console.log('Montant invalide. Veuillez saisir un montant supérieur à 0.');
            return;
        }

        const reference = await askQuestion('Entrez la référence : ');

        const password = await askQuestion(`Veuillez entrer votre mot de passe pour payer ${amount} au ${ name } pour ${reference} : `);

        if (password.length === 0) {
            console.log('Mot de passe invalide. Opération annulée.');
        } else {
            console.log(`Paiement de ${amount} au ${ name } pour ${reference} confirmé.`);
        }
}