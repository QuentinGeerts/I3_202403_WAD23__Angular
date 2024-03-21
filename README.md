Pour activer l'exécution des scripts : 
1. Ouvrir PowerShell en mode administrateur
2. Exécuter la commande "set-executionpolicy remotesigned"
3. Sélectionner "Tout" puis enter

Création d'un projet :
> ng new I3_202403_WAD23__Angular --routing --skip-tests --no-standalone --style=scss

Build et démarrer l'application :
> ng serve --open --port=4200

Pour générer un composant :
> ng generate component chemin/vers/le/composant

Pour générer un module :
> ng generate module chemin/vers/le/module [--routing]

`--routing` : permet d'ajouter le système de routing

Pour générer un pipe : 
> ng generate pipe chemin/vers/le/pipe

Pour générer une directive :
> ng generate diretive chemin/vers/la/directive