import { askQuestion } from '../index.js';

export async function envoyerArgentSurnom() {
    const surnom = await askQuestion('Entrez le surnom : ');

            const amountStr = await askQuestion('Entrez le montant en AR : ');
            const amount = Number(amountStr.replace(/\s+/g, ''));

            if (isNaN(amount) || amount <= 0) {
                console.log('Montant invalide. Veuillez saisir un montant supérieur à 0.');
                return;
            }

            const reference = await askQuestion('Entrez la référence : ');

            const password = await askQuestion(`Veuillez entrer votre mot de passe pour l'envoi de Ar ${amount} à ${surnom} comme ${reference} : `);

            if (password.length === 0) {
                console.log('Mot de passe invalide. Opération annulée.');
            } else {
                console.log(`Envoi de Ar ${amount} au surnom ${surnom} (référence: ${reference}) confirmé.`);
            }
}