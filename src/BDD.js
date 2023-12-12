const movies = [
    {
        nom: 'Avatar',
        date: '16 décembre 2009',
        temps: '2h 42min',
        type: 'Science Fiction, Aventure',
        realisateur: 'James Cameron',
        acteur: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
        note_presse: 4.3,
        note_spectateurs: 4.6,
        affiche : 'https://fr.web.img2.acsta.net/c_310_420/pictures/22/08/25/09/04/2146702.jpg',
        description: `Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. 
        Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. 
        Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des "pilotes" humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. 
        Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.
        Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. 
        Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake...`,
    },

    {
        nom: 'Avengers: Endgame',
        date: '24 avril 2019',
        temps: '3h 01min',
        type: 'Action, Aventure, Science Fiction',
        realisateur: 'Joe Russo, Anthony Russo',
        acteur: 'Robert Downey Jr, Chris Evans, Mark Ruffalo',
        note_presse: 4.3,
        note_spectateurs: 4.4,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/04/09/04/0472053.jpg',
        description: `Thanos ayant anéanti la moitié de l’univers, les Avengers restants resserrent les rangs dans ce vingt-deuxième film des Studios Marvel, grande conclusion d’un des chapitres de l’Univers Cinématographique Marvel.`,
    },

    {
        nom: 'Vaiana',
        date: '30 novembre 2016',
        temps: '1h 47min',
        type: 'Animation, Aventure, Comédie',
        realisateur: 'Ron Clements, John Musker',
        acteur: 'Cerise Calixte, Anthony Kavanagh, Mareva Galanter',
        note_presse: 4.2,
        note_spectateurs: 4.5,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/16/09/14/09/17/148002.jpg',
        description: 'Vaiana, la légende du bout du monde, raconte l’aventure d’une jeune fille téméraire qui se lance dans un audacieux périple pour sauver son peuple. Au cours de sa traversée du vaste océan, Vaiana va rencontrer Maui, un demi-dieu capable de contrôler le vent et les vagues. Ensemble, ils vont affronter d’énormes créatures marines, découvrir des îles fabuleuses et accomplir une quête aussi héroïque que périlleuse.'
    },

    {
        nom: 'Les Évadés',
        date: '14 octobre 1994',
        temps: '2h 22min',
        type: 'Drame',
        realisateur: 'Frank Darabont',
        acteur: 'Tim Robbins, Morgan Freeman',
        note_presse: 4.7,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/30/68/18686447.jpg',
        description: 'Deux hommes condamnés à la prison à vie pour meurtre s\'évadent, formant un lien unique et indéfectible au fil des années.'
    },

    {
        nom: 'Forrest Gump',
        date: '7 septembre 1994',
        temps: '2h 22min',
        type: 'Drame, Romance',
        realisateur: 'Robert Zemeckis',
        acteur: 'Tom Hanks, Robin Wright',
        note_presse: 4.5,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg',
        description: 'Les chroniques de la vie de Forrest Gump, un homme au QI inférieur à la moyenne, mais qui a vécu une vie extraordinaire.'
    },

    {
        nom: 'Les Autres',
        date: '8 août 2001',
        temps: '1h 44min',
        type: 'Drame, Horreur, Mystère',
        realisateur: 'Alejandro Amenábar',
        acteur: 'Nicole Kidman, Christopher Eccleston',
        note_presse: 4.1,
        note_spectateurs: 4.0,
        affiche: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/02/33/92/afflesautres.jpg',
        description: 'Une femme pieuse avec deux enfants vivant dans une grande maison obscure découvre la mystérieuse histoire de la demeure.'
    },

    {
        nom: 'Le Roi Lion',
        date: '7 octobre 1994',
        temps: '1h 28min',
        type: 'Animation, Aventure, Drame',
        realisateur: 'Roger Allers, Rob Minkoff',
        acteur: 'Matthew Broderick, Jeremy Irons',
        note_presse: 4.6,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/22/09/20/12/10/2512840.jpg',
        description: 'Lionceau Simba, prince des lions, doit affronter son destin et reprendre sa place légitime en tant que roi de la Terre des Lions.'
    },

    {
        nom: 'Gladiator',
        date: '5 mai 2000',
        temps: '2h 35min',
        type: 'Action, Aventure, Drame',
        realisateur: 'Ridley Scott',
        acteur: 'Russell Crowe, Joaquin Phoenix',
        note_presse: 4.4,
        note_spectateurs: 4.5,
        affiche: 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/68/64/41/19254510.jpg',
        description: 'Le général romain Maximus est trahi et sa famille est assassinée. Il cherche à se venger en participant à des combats de gladiateurs.'
    },

    {
        nom: 'Le Parrain',
        date: '15 mars 1972',
        temps: '2h 55min',
        type: 'Crime, Drame',
        realisateur: 'Francis Ford Coppola',
        acteur: 'Marlon Brando, Al Pacino',
        note_presse: 4.7,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg',
        description: 'Le patriarche vieillissant d\'une dynastie criminelle transfère le contrôle de son empire clandestin à son fils relutant.'
    },
    
    {
        nom: 'Harry Potter',
        date: '10 novembre 2001',
        temps: '2h 32min',
        type: 'Aventure, Famille, Fantaisie',
        realisateur: 'Chris Columbus',
        acteur: 'Daniel Radcliffe, Rupert Grint, Emma Watson',
        note_presse: 4.5,
        note_spectateurs: 4.7,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/18/07/02/17/25/3643090.jpg',
        description: 'Un jeune sorcier découvre sa véritable identité tout en s\'aventurant dans le monde magique.'
    },
    
    {
        nom: 'Interstellar',
        date: '5 novembre 2014',
        temps: '2h 49min',
        type: 'Aventure, Drame, Sci-Fi',
        realisateur: 'Christopher Nolan',
        acteur: 'Matthew McConaughey, Anne Hathaway',
        note_presse: 4.4,
        note_spectateurs: 4.3,
        affiche: 'https://fr.web.img5.acsta.net/c_310_420/pictures/14/09/24/12/08/158828.jpg',
        description: 'Un groupe d\'explorateurs spatiaux voyage à travers un trou de ver pour garantir la survie de l\'humanité sur une nouvelle planète.'
    },
    
    {
        nom: 'Shutter Island',
        date: '24 février 2010',
        temps: '2h 18min',
        type: 'Mystère, Thriller',
        realisateur: 'Martin Scorsese',
        acteur: 'Leonardo DiCaprio, Mark Ruffalo',
        note_presse: 4.1,
        note_spectateurs: 4.2,
        affiche: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/96/84/19151192.jpg',
        description: 'Deux marshals enquêtent sur la mystérieuse disparition d\'une prisonnière d\'un hôpital psychiatrique.'
    },
    
    {
        nom: 'Ecrire pour Exister',
        date: '20 avril 2007',
        temps: '2h 3min',
        type: 'Biographie, Crime, Drame',
        realisateur: 'Richard LaGravenese',
        acteur: 'Hilary Swank, Imelda Staunton',
        note_presse: 4.2,
        note_spectateurs: 4.5,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/77/81/18719369.jpg',
        description: 'Une enseignante inspire ses élèves à travers l\'écriture et les aide à surmonter leurs problèmes personnels.'
    },

    {
        nom: 'Jurassic Park',
        date: '11 juin 1993',
        temps: '2h 7min',
        type: 'Aventure, Sci-Fi, Thriller',
        realisateur: 'Steven Spielberg',
        acteur: 'Sam Neill, Laura Dern, Jeff Goldblum',
        note_presse: 4.5,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img2.acsta.net/c_310_420/pictures/20/07/21/16/53/1319265.jpg',
        description: 'Un parc d\'attractions de dinosaures échappe à tout contrôle lorsque les créatures préhistoriques sont libérées.'
    }
]
module.exports = movies;