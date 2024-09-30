### **Projet : Système de suivi d'articles en temps réel (Real-Time Article Tracking System)**

### **Description générale :**

Le projet est une petite application de gestion et de suivi des articles publiés sur un site de blog. Le frontend (React) permet aux utilisateurs de soumettre des articles et de voir les nouveaux articles publiés en temps réel. Le backend (Java + Spring Boot) gère les soumissions et utilise Kafka pour diffuser les nouveaux articles à tous les utilisateurs connectés. AWS sera utilisé pour l'hébergement et la gestion de la file Kafka.

### **Fonctionnalités principales :**

1. **Soumission d'article** :
   - Un utilisateur peut soumettre un article via une interface web (frontend en React).
   - Chaque article comporte un titre, un contenu, et un auteur.
2. **Suivi en temps réel des articles** :
   - Dès qu'un article est soumis, tous les utilisateurs connectés peuvent voir cet article s’afficher en temps réel dans leur liste d'articles.
3. **Liste des articles** :
   - Le frontend permet de visualiser la liste des articles soumis, avec mise à jour en temps réel.

### **Technologies à utiliser :**

### **Frontend : React**

- Créer une interface simple pour soumettre des articles et afficher la liste en temps réel.
- Utiliser **WebSockets** ou **SSE (Server-Sent Events)** pour la mise à jour en temps réel.

### **Backend : Java (Spring Boot)**

- **API REST** pour recevoir les soumissions d’articles et gérer la logique métier.
- Intégration avec **Kafka** pour publier les articles et les diffuser en temps réel.

### **Kafka :**

- Utiliser Kafka pour traiter les articles soumis et les diffuser à tous les clients connectés.
- Kafka peut être hébergé localement en développement, puis intégré avec AWS pour le déploiement final.

### **AWS :**

- **Amazon MSK (Managed Streaming for Apache Kafka)** pour gérer un cluster Kafka dans le cloud.
  - AWS Free Tier propose 3 brokers MSK pendant un an.
- **AWS EC2** pour héberger le backend en Spring Boot.
- **AWS S3** pour stocker les images d'articles (si tu veux rajouter une fonctionnalité d’image aux articles).
- **AWS Lambda** pour automatiser certaines tâches (facultatif).
- **AWS RDS (MySQL ou PostgreSQL)** pour la base de données (si nécessaire) dans le free tier.

---

### **Étapes de réalisation :**

### 1. **Développement du Frontend avec React :**

- Une page pour soumettre un nouvel article avec un formulaire (titre, contenu, auteur).
- Une page ou un composant qui affiche la liste des articles existants.
- Connexion WebSocket ou SSE pour recevoir en direct les nouveaux articles soumis.

### 2. **Backend avec Java (Spring Boot) :**

- Créer un service REST pour recevoir les soumissions d'articles.
- Développer un producteur Kafka pour envoyer les articles dans un topic.
- Créer un consommateur Kafka pour distribuer les articles à tous les utilisateurs connectés.
- Utiliser Spring WebSocket ou Server-Sent Events (SSE) pour la diffusion en temps réel aux utilisateurs.

### 3. **Kafka :**

- En local, installe Kafka sur ta machine pour les tests en local.
- Créer un topic pour les articles.
- Configurer des producers et consumers en Java/Spring Boot pour publier et recevoir les articles en temps réel.

### 4. **Intégration AWS :**

- **Amazon MSK** : Utilise MSK pour gérer le cluster Kafka une fois le projet déployé. Configure ton Spring Boot backend pour se connecter à ce cluster Kafka.
- **AWS EC2** : Déploie le backend Java sur une instance EC2 (gratuit dans la free tier).
- **AWS S3** (facultatif) : Si tu ajoutes la possibilité de télécharger des images avec les articles, utilise un bucket S3 pour les stocker.
