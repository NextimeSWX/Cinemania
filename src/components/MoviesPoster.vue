<template>
    <div class="movie--poster" v-if="data_moviePoster">
        <div class="movie--content">

            <div class="movie--image">
                <img :src="data_moviePoster.affiche" :alt="data_moviePoster.nom" width="400" height="600" />
            </div>

            <div class="movie-information">
                <h2>{{ truncateText(data_moviePoster.nom, 35) || 'Titre non disponible' }}</h2>
                <div class="separator"></div>
                <div class="movie-informations-bottom">
                    <h3>{{ truncateText(data_moviePoster.date, 25) || 'Date non disponible' }} en salle / {{
                        data_moviePoster.temps || 'Durée non disponible' }}
                        / {{ truncateText(data_moviePoster.type, 25) || 'Type non disponible' }}</h3>
                </div>

                <div class="description">
                    <h3 class="before">De </h3>
                    <h3 class="after">{{ truncateText(data_moviePoster.realisateur, 40) || 'Réalisateur non disponible' }}
                    </h3>
                </div>

                <div class="description">
                    <h3 class="before">Avec</h3>
                    <h3 class="after">{{ truncateText(data_moviePoster.acteur, 40) || 'Acteur non disponible' }}</h3>
                </div>

                <div class="notes">
                    <h3 class="note">PRESSE : {{ data_moviePoster.note_presse || 'N/A' }}</h3>
                    <h3 class="note">SPECTATEURS : {{ data_moviePoster.note_spectateurs || 'N/A' }}</h3>
                </div>

            </div>


        </div>

        <div class="bottom">
            <h2>Synopsis</h2>
            <h3>{{ data_moviePoster.description || 'Description non disponible' }}</h3>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "MoviePoster",
    props: {
        data_moviePoster: Object,
    },
    methods: {
        truncateText(text, length) {
            if (text && text.length > length) {
                return text.slice(0, length) + "...";
            }
            return text;
        },
    },
};
</script>
  
<style scoped>
p {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
}

h2 {
    font-size: 50px;
    text-transform: uppercase;
    font-family: 'Mulish', sans-serif;
    color: rgb(44, 44, 44);
    margin: 0;
}

h3 {
    font-size: 16px;
    font-family: 'Kanit', sans-serif;
    color: rgb(107, 107, 107);
}


.movie--content {
    display: flex;
    margin-top: 50px;
}

.movie--image {
    margin: 0;
    margin-left: 100px;
    margin-right: 150px;
    margin-bottom: 40px;
    border: solid 2px #d44e00;
    width: 400px;
    height: 600px;
}

.movie--information {
    display: block;
}

.separator {
    width: 200px;
    border-bottom: 4px solid rgb(40, 40, 40);
    margin-bottom: 20px;
}

.notes {
    display: flex;
    justify-content: space-between;
}

.note {
    font-size: 20px;
    text-align: center;
    background-color: #d44e00;
    border-radius: 40px;
    padding: 5px;
    color: white;
    width: 40%;
}

.description {
    display: flex;
}

.before {
    color: rgb(167, 167, 167);
    font-family: 'Kanit', sans-serif;
    margin-right: 10px;
}

.after {
    color: rgb(51, 51, 51);
}

.bottom {
    margin-left: 100px;
    margin-right: 300px;
}

.bottom h2 {
    font-size: 25px;
    margin: 0;
}
</style>
