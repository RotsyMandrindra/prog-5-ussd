import { askQuestion } from '.';

export async function DemanderNumeroAvecConfirmation() {
    while (true) {
        const phone1 = await askQuestion('Entrez le numéro de téléphone du destinataire : ');
        const phone2 = await askQuestion('Veuillez confirmer le numéro du destinataire : ');
        if (phone1 === phone2) {
            return phone1;
        } else {
            console.log('Les numéros ne correspondent pas. Veuillez réessayer.\n');
        }
    }
}
