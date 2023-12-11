<template>
  <div id="app">
    <app-header/>

    <app-footer/>
  </div>
</template>

<script>
import Header from '/components/Header.vue';
import Footer from '/components/Footer.vue';

export default {
  components: {
    'app-header':Header,
    'app-footer':Footer,
  },

  data() {
    return {
      title: 'Liste des films',
      movies: [
        {
          nom: 'Avatar',
          date: '16 décembre 2009',
          temps: '2h 42min',
          type: 'Science Fiction, Aventure',
          realisateur: 'James Cameron',
          acteur: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
          note_presse: 4.3,
          note_spectateurs: 4.6,
          affiche: 'components/Avatar.webp',
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
          affiche: 'components/Avengers.jpg',
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
          affiche: 'components/Vaiana.jpg',
          description: 'Vaiana, la légende du bout du monde, raconte l’aventure d’une jeune fille téméraire qui se lance dans un audacieux périple pour sauver son peuple. Au cours de sa traversée du vaste océan, Vaiana va rencontrer Maui, un demi-dieu capable de contrôler le vent et les vagues. Ensemble, ils vont affronter d’énormes créatures marines, découvrir des îles fabuleuses et accomplir une quête aussi héroïque que périlleuse.'
        },
      ]
    }
  }
}
</script>

<style>

</style>
