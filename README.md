# Documentation de la Convention Choisie pour le Projet USSD Airtel Money

## 1. Convention de Nommage

### 1.1 Nommage des Fichiers, Variables, Fonctions et Classes

Dans ce projet dédié au service USSD Airtel Money, nous avons adopté la convention de nommage **camelCase** pour assurer la cohérence et la lisibilité du code JavaScript. Cette convention facilite la compréhension et la maintenance du projet, notamment dans un contexte où la clarté du code est essentielle pour gérer les interactions USSD.

Exemples de nommage utilisés dans le projet :

- **Fichiers** : `demandeConfirmationNumero.js`, `demanderArgent.js`, `paiementAUnSurnom.js`
- **Variables** : `amountStr`, `password`, `reference`
- **Fonctions** : `Recharger`, `Paiement`, `EnvoyerArgent`

Cette norme permet de différencier aisément les éléments du code et de garder une structure harmonieuse dans tout le projet.

## 2. Configuration d'un Linter

### 2.1 Choix du Linter

Pour maintenir un code propre et éviter les erreurs courantes dans JavaScript, nous utilisons **ESLint**. Ce linter est bien adapté à la stack du projet et permet d'appliquer des règles strictes qui garantissent la qualité du code et facilitent la collaboration.

### 2.2 Configuration d'ESLint

La configuration de ESLint inclut :

- La vérification stricte de la syntaxe JavaScript pour éviter les bugs.
- L’application de règles qui imposent le camelCase pour les noms de variables, fonctions, et classes.
- La détection des variables non utilisées ainsi que des fonctions inutilisées pour optimiser la base de code.
- L’imposition d’un style de code cohérent (indentation, espaces, points-virgules, etc.).

Pour lancer ESLint dans le projet, utilisez la commande suivante dans votre terminal à la racine du projet :

```bash
npx eslint --fix
