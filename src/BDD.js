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
        affiche: 'https://fr.web.img2.acsta.net/c_310_420/pictures/22/08/25/09/04/2146702.jpg',
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
    },

    {
        nom: 'Star Wars: Épisode IV - Un nouvel espoir',
        date: '25 mai 1977',
        temps: '2h 01min',
        type: 'Action, Aventure, Fantaisie',
        realisateur: 'George Lucas',
        acteur: 'Mark Hamill, Harrison Ford, Carrie Fisher',
        note_presse: 4.7,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/41/59/18422600.jpg',
        description: `Luke Skywalker rejoint les forces de la Rébellion pour lutter contre l'Empire maléfique, dirigé par le sinistre Dark Vador.`,
    },

    {
        nom: 'Transformers',
        date: '3 juillet 2007',
        temps: '2h 24min',
        type: 'Action, Aventure, Science Fiction',
        realisateur: 'Michael Bay',
        acteur: 'Shia LaBeouf, Megan Fox, Josh Duhamel',
        note_presse: 3.6,
        note_spectateurs: 4.0,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/62/81/09/18784915.jpg',
        description: `Des robots extraterrestres, les Autobots, cherchent à sauver la Terre des maléfiques Decepticons dans cette aventure pleine d'action.`,
    },

    {
        nom: 'Spider-Man: Homecoming',
        date: '12 juillet 2017',
        temps: '2h 13min',
        type: 'Action, Aventure, Sci-Fi',
        realisateur: 'Jon Watts',
        acteur: 'Tom Holland, Michael Keaton, Robert Downey Jr.',
        note_presse: 3.9,
        note_spectateurs: 4.0,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/24/15/35/100661.jpg',
        description: `Peter Parker tente de concilier sa vie de lycéen avec celle de Spider-Man tout en faisant face au redoutable Vautour.`,
    },

    {
        nom: 'Avengers: Infinity War',
        date: '25 avril 2018',
        temps: '2h 29min',
        type: 'Action, Aventure, Sci-Fi',
        realisateur: 'Joe Russo, Anthony Russo',
        acteur: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo',
        note_presse: 4.2,
        note_spectateurs: 4.3,
        affiche: 'https://fr.web.img3.acsta.net/c_310_420/pictures/18/03/16/14/42/0611719.jpg',
        description: `Les Avengers et leurs alliés tentent de stopper le puissant Thanos dans sa quête pour obtenir les six Pierres d'Infinité.`,
    },

    {
        nom: 'Le Roi Lion (2019)',
        date: '17 juillet 2019',
        temps: '1h 58min',
        type: 'Aventure, Drame, Animation',
        realisateur: 'Jon Favreau',
        acteur: 'Donald Glover, Beyoncé, James Earl Jones',
        note_presse: 3.8,
        note_spectateurs: 4.1,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/02/25/12/06/2908996.jpg',
        description: `Une version live-action du classique Disney qui suit le voyage épique de Simba, un jeune lion, pour devenir le roi de la Terre des Lions.`,
    },

    {
        nom: 'La Liste de Schindler',
        date: '17 février 1994',
        temps: '3h 15min',
        type: 'Biographie, Drame, Histoire',
        realisateur: 'Steven Spielberg',
        acteur: 'Liam Neeson, Ben Kingsley, Ralph Fiennes',
        note_presse: 4.6,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/14/10/37/5927961.jpg',
        description: `L'histoire vraie d'Oskar Schindler, un homme d'affaires allemand qui a sauvé plus de mille vies pendant l'Holocauste.`,
    },

    {
        nom: 'Inception',
        date: '21 juillet 2010',
        temps: '2h 28min',
        type: 'Action, Aventure, Sci-Fi',
        realisateur: 'Christopher Nolan',
        acteur: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
        note_presse: 4.4,
        note_spectateurs: 4.3,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg',
        description: `Dom Cobb, un voleur expérimenté, est capable d'entrer dans les rêves des autres pour voler leurs secrets les plus précieux. Alors qu'il planifie son dernier vol, Cobb doit naviguer à travers un labyrinthe de réalités oniriques et résoudre l'intrigue complexe de l'inception.`,
    },

    {
        nom: 'Titanic',
        date: '7 janvier 1998',
        temps: '3h 14min',
        type: 'Drame, Romance',
        realisateur: 'James Cameron',
        acteur: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
        note_presse: 4.5,
        note_spectateurs: 4.7,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/10/16/06/0622119.jpg',
        description: `Une histoire épique et romantique se déroulant sur le Titanic, mettant en vedette un amour tragique entre Jack et Rose, deux personnes de classes sociales différentes.`,
    },

    {
        nom: 'Matrix',
        date: '16 juin 1999',
        temps: '2h 16min',
        type: 'Action, Sci-Fi',
        realisateur: 'Lana Wachowski, Lilly Wachowski',
        acteur: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        note_presse: 4.3,
        note_spectateurs: 4.3,
        affiche: 'https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg',
        description: `Un pirate informatique découvre que la réalité qu'il connaît n'est qu'une simulation informatique sophistiquée contrôlée par des machines. Il se joint à une rébellion pour combattre l'oppression des machines et libérer l'humanité.`,
    },

    {
        nom: 'Pulp Fiction',
        date: '26 octobre 1994',
        temps: '2h 34min',
        type: 'Crime, Drame',
        realisateur: 'Quentin Tarantino',
        acteur: 'John Travolta, Uma Thurman, Samuel L. Jackson',
        note_presse: 4.6,
        note_spectateurs: 4.5,
        affiche: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg',
        description: `Une série d'histoires entrelacées impliquant des criminels, des drogues et des mystères à Los Angeles. Le film offre un regard non linéaire sur des événements connectés et des personnages mémorables.`,
    },

    {
        nom: 'The Dark Knight',
        date: '13 août 2008',
        temps: '2h 32min',
        type: 'Action, Crime, Drama',
        realisateur: 'Christopher Nolan',
        acteur: 'Christian Bale, Heath Ledger, Aaron Eckhart',
        note_presse: 4.4,
        note_spectateurs: 4.4,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg',
        description: `Batman s'attaque au criminel Joker qui provoque le chaos à Gotham City. Le film explore la dualité entre le justicier masqué et le Joker anarchique.`,
    },

    {
        nom: 'Fight Club',
        date: '10 novembre 1999',
        temps: '2h 19min',
        type: 'Drame',
        realisateur: 'David Fincher',
        acteur: 'Brad Pitt, Edward Norton, Helena Bonham Carter',
        note_presse: 4.5,
        note_spectateurs: 4.5,
        affiche: 'https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/08/14/11/0688770.jpg',
        description: `Un employé de bureau découvre un monde souterrain secret de combats violents dirigé par un mystérieux homme charismatique. Le film aborde des thèmes tels que la société de consommation et l'aliénation.`,
    },

    {
        nom: 'The Lord of the Rings: The Fellowship of the Ring',
        date: '19 décembre 2001',
        temps: '2h 58min',
        type: 'Action, Aventure, Drame',
        realisateur: 'Peter Jackson',
        acteur: 'Elijah Wood, Ian McKellen, Orlando Bloom',
        note_presse: 4.7,
        note_spectateurs: 4.8,
        affiche: 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/16/27/69218096_af.jpg',
        description: `Un jeune hobbit est chargé de détruire un anneau maléfique tandis qu'une communauté hétéroclite se forme pour le protéger. Basé sur l'œuvre épique de J.R.R. Tolkien, le film offre une aventure fantastique épique.`,
    },

]
module.exports = movies;