# Liste des exercices

## Exercice 01 - Créer son profil - Chapitre 1 : Interpolation de chaine

Vous devez créer une application Angular pour permettre aux utilisateurs de créer 
leur propre profil personnel.

L'application doit contenir les champs suivants :

- Nom complet
- Adresse email
- Date de naissance
- Genre
- Langues parlées
- Image de profil (optionnelle)

---

## Exercice 03 - Le chronomètre (basique) - Chapitre 3 : Event binding

Créer une application qui permet de gérer un chronomètre.
Vous pouvez le démarrer, mettre sur pause et le reset.
Astuce : Cherchez du côté de setInterval() et de l'interpolation de chaine en TS.

---

## Exercice 04 - Toggle password - Chapitre 4 : Attribute binding

Créer une application qui affiche un formulaire de connexion où l'utilisateur peut 
rendre visible son mot de passe ou non.

---

## Exercice 05 - Menu complet - Chapitre 5 : Base du routing

Vous devez créer un menu de navigation complet en reprennant toutes les démonstrations 
et exercices réalisés.
En version Lazy-loadé.

---

## Exercice 07.1 - Le chronomètre (Custom Pipe)

Mettre en place un chronomètre :
- 3 boutons : Start, Pause, Stop (actif / inactif)
- Affichage "xx:xx"

## Exercice 07.2 - Convertisseur de température

Créer une application qui permet de convertir une témpérature en °C à °F et inversément.

Deux pipes, un "toFahrenheit" et "toCelsius" qui permettent de convertir une température d'une unité à l'autre.

Un pipe universel qui permet de convertir vers l'unité souhaité en paramètre du pipe.

---

## Exercice 08 - Générateur de formes

// Ng Style
Créer une application qui permet de modifier les propriétés d'un quadrilatère : 
- Largeur
- Hauteur
- Couleur
- Bordures

// NgClass
Permettre à l'utilisateur de transformer le quadrilatère en cercle.

## Exercice 09 - Panier de courses

Créer une application qui permet à l'utilisateur de saisir un nom d'article et une quantité.
L'application doit pouvoir également afficher la liste des articles avec la quantité et la date d'ajout. (formatée [coucou les pipes])

L'utilisateur peut également supprimer un élément de la liste.
Utilisez le model fournis pour réaliser l'exercice.

Pour créer une interface : 
> ng generate interface article

```typescript
export interface Article {
    name: string;
    quantity: number;
    dateAdd: Date;
}
```

---

## Exercice 11 - Panier de courses en Input/Output

Mettre en place une shopping list en deux composants.
Dans le premier, un champ texte permettant l'ajout d'un article à la liste.
Dans le deuxième, l'affichage de la liste et la possibilité de supprimer un article.

Les deux composants doivent être affichage sur une même page.

Composant Exo11 (Premier)
    - Composant List (Deuxième)