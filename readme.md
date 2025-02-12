# Blinest

## Developpement

### Requirements

Blinest use Websockets a lot. So you will have to install soketi globaly :

https://docs.soketi.app/getting-started/installation/cli-installation

Then go to your working directory and :

```console
composer install
```

```console
php artisan key::generate
```

```console
npm install
```

```console
php artisan migrate:fresh --seed
```

### Start developing
```console
npm run dev
```
```console
soketi start
```
```console
php artisan horizon
```

## Roadmap

- v2.2
	- Better translations (confirm js)
	- Profil pages
	- Attente pendant que le morceau est en lecture
	- Chat emojis
  	- light mode mal voyant
 	- moderation des noms de room

- v2.1
	- ✅ FAQ
	- ✅ Answers Card : réponses users surlignées
	- ✅ Import playlists from provider
	- ✅ Import playlists from likes
	- ✅ SEO Opengraph not working in production (check cache)
 	- ✅ room avec password, faire l'identification
 	- ✅ Sitemap
	- ✅ Check duplicated names from socialite
 	- ✅ recherche d'extaits provider à améliorer
	- ✅ Room manual control
	- ✅ Room options directly editable on the room.show
 	- ✅ Remove a team member
 	- ✅ Fix problème des espaces dans les réponses
 	- ✅ Check all sentence before checking by words
 	- ✅ Polymorphic table with total score (teams and users)
 	- ✅ Fix scores performances
	- ✅ Daily Clean rounds with no scores
 	- ✅ Betters answers messages (wrong, almost, right)
	- ✅ Fix Apple devices sound
 	- ✅ Slug dans les notifications
 	- ✅ Lien vers la room dans l'édition
 	- ✅ 404 when room id not found
 	- ✅ Message discord de suppression alors que l'extrait est encore présent
 	- ✅ Popup de confirmation du ban
 	- ✅ Rooms qui se bloquent
 	- ✅ Modération (page)
 	- ✅ Lien de partage rooms
 	- ✅ Rooms Images : custom for pro
 	- ✅ Chiffres en texte dans les réponses
 	- ✅ Modification photos de team en fonction du score
 	- ✅ Réglage du volume plus fin
 	- ✅ Score max par room dans mon compte
 	- ✅ Fix prefilled new password input in my account
 	- ✅ Tri des types de réponse par ordre alphabétique
 	- ✅ Admin - users, provider column and better search
 	- ✅ Scores totaux, ne filtrer que les parties publiques (+ cache)
 	- ✅ classement general responsive
 	- ✅ Afficher la playlist concernée par la suggestion
 	- ✅ Pas de signalements de messages pour les modos
 	- ✅ Confirm alerte modération and send comment
 	- ✅ recherche de team ne fonctionne pas
 	- ✅ Fix bug possibilité d'entrer une réponse après la fin du morceaux
 	- ✅ slugs
 	- ✅ better image quality and web encoding
 	- ✅ Vider le champ de réponse à la fin d'un extrait
 	- ✅ Flamme 18%
 	- ✅ Avatar dans le chat
 	- ✅ Bulle utilisateur sur le player quand bonne réponse
 	- ✅ Couleur badge réponse
 	- ✅ Les articles sont encore necessaires dans les réponses
 	- ✅ Lien de connexion
 	- ✅ Bad words dans le mot
 	- ✅ teams js sort error : https://github.com/mchev/blinest/issues/15
 	- ✅ changer le nom et la photo de la team
 	- ✅ afficher le nombre d'extraits total sur la room
 	- ✅ ban public moderator every room
 	- ✅ suppression message ne fonctionne pas
 	- ✅ Validation du nom des rooms (bad words et reserved words)
 	- ✅ Modification photos de room en fonction du score

- v2.0
	- ✅ Statistiques
	- ✅ Webhooks discord
	- ✅ Messages réponses
	- ✅ Mon compte
	- ✅ Traduction et templates des mails
	- ✅ Envoyer une suggestion (modos room)
	- ✅ Empty playlist
	- ✅ Fix Music provider api
	- ✅ Socialite google
	- ✅ Finnished round modal
	- ✅ Sendinblue
	- ✅ Donate
	- ✅ Pages
	- ✅ Réinitialisation de mot de passe
	- ✅ Affichage des scores
	- ✅ Affichage des réponses
	- ✅ Rooms Images : mosaics from album (to prevent random images from users)
	- ✅ Avatar sur la timeline quand bonne réponse
	- ✅ Bloquer des noms reservés à l'inscription
	- ✅ Chat
	- ✅ Migration DB
	- ✅ Team
	- ✅ Rankings
	- ✅ Recherche