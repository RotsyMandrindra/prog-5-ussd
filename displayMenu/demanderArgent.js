import { askQuestion } from '../index.js';
import { DemanderNumeroAvecConfirmation } from './demandeConfirmationNumero.js';

export async function demandeArgent() {
    const phone = await DemanderNumeroAvecConfirmation();
        
    const amountStr = await askQuestion('Entrez le montant en AR : ');
        
    const amount = Number(amountStr.replace(/\s+/g, ''));
        if (isNaN(amount) || amount <= 0) {
            console.log('Montant invalide. Veuillez saisir un montant supérieur à 0.');
            return; 
        }
    
    const reference = await askQuestion('Entrez la référence : ');
    
    const password = await askQuestion(`Demander ${ phone } de vous envoyer ${ amount }, saisir le code PIN pour confimer : `);
    
        if (password.length === 0) {
            console.log('Mot de passe invalide. Opération annulée.');
        } else {
            console.log(`Envoi de Ar ${amount} à ${phone} pour référence ${reference} confirmé.`);
        }
}
