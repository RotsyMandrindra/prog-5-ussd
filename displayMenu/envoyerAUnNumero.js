import { askQuestion } from '..';
import { DemanderNumeroAvecConfirmation } from './demandeConfirmationNumero';

export async function envoyerAUnNumero() {
    const phone = await DemanderNumeroAvecConfirmation();

            const amountStr = await askQuestion('Entrez le montant en AR : ');
            const amount = Number(amountStr.replace(/\s+/g, ''));

            if (isNaN(amount) || amount <= 0) {
                console.log('Montant invalide. Veuillez saisir un montant supérieur à 0.');
                return; 
            }

            const reference = await askQuestion('Entrez la référence : ');

            const password = await askQuestion(`Veuillez entrer votre mot de passe pour confirmer l'envoi de Ar ${amount} au ${phone} pour référence ${reference} : `);

            if (password.length === 0) {
                console.log('Mot de passe invalide. Opération annulée.');
            } else {
                console.log(`Envoi de Ar ${amount} à ${phone} pour référence ${reference} confirmé.`);
            }
}