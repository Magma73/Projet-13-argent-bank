[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/) [![React router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main) [![Styled component](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Fontawesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/) [![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/fr/docs/intro) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://editor.swagger.io/&ved=2ahUKEwjUksPQgsyFAxW2UKQEHVzvCGwQFnoECAcQAQ&usg=AOvVaw0JrxGe9QVE_4Oek2M7IeVv) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/)

# Projet 13 - Utilisez le state manager Redux pour gérer l’état de vos applications

## Contexte du projet

Remede Agency est une agence spécialisée dans le développement d'applications web. 
L’entreprise a signé un nouveau contrat avec une banque, Argent Bank. Cette nouvelle banque veut percer dans le secteur et confie à l'agence la mise en place de son application.

## Mission du projet

Le projet se décompose en 2 phases :

- **Phase 1 - Authentification des utilisateurs :** créer l'application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil

- **Phase 2 - Transactions :** proposer des endpoints API pour la future fonctionnalité concernant les transactions

## Technologies utilisées

- react : V18.2.0
- react-dom : V18.2.0
- react-router-dom : V6.14.2
- react-scripts : V5.0.1
- axios : V1.4.0
- redux : V4.2.1
- styled-components : V6.0.7
- [Create React App](https://github.com/facebook/create-react-app)

## Maquettes à respecter

Pour les maquettes, les designs sont données dans les fichiers HTML statiques et CSS fournis dans le repot suivant [Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs).

### Page d'accueil

![Home page Argent Bank](./public/assets/img/HomePage.png)

### Page de connexion

![Login page Argent Bank](./public/assets/img/LoginPage.png)

### Page de profil

![Profile page Argent Bank](./public/assets/img/ProfilePage.png)

## Notes et contraintes du projet

**Police :**

- Polices : Avenir

**Couleurs :**

- Vert : #00bc77
- Blanc : #FFFFFF
- Noir : #222
- Violet : #12002b

**Contraintes techniques :**

- Utiliser React, Redux et React-Redux
- Mettre en place une implémentation de Redux pour la gestion de l'état qui :
  - Utilise un magasin (store) pour gérer les données
  - Inclut des action(s) pour envoyer des informations
  - Utilise des réducteurs (reducers) pour gérer les changements d'état de l'application
- Utiliser Swagger pour créer la documentation pour les endpoints API
- Gérer les calls API : soit avec Fetch, soit Axios
- Créer un service à part pour les calls API

## Tester le projet

### Prérequis

- NodeJS (version 12.18)
- Yarn
- Éditeur de texte (VSCode etc.)

### Lancer le projet

- **Back-end :**
  Mettre en place le back-end en suivant les instructions suivantes : [Back-end Argent-Bank](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

- **Front-end :**
  - Forker ou cloner le repot actuel : [Front-end Argent-Bank](https://github.com/Magma73/Projet-13-argent-bank)
  - Accéder au répertoire du projet et utiliser la commande `npm install` pour installer les dépendances du projet
  - Puis lancer la commande `npm start` pour ouvrir l'application dans le navigateur

[def]: /argent-bank//public/assets/img/HomePage.png
