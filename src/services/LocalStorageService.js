const localStorageKey = 'moviesData';

export default {
    getData() {
        const data = localStorage.getItem(localStorageKey);
        return data ? JSON.parse(data) : [];
    },

    setData(data) {
        localStorage.setItem(localStorageKey, JSON.stringify(data));
    },

    removeMovie(movieToRemove) {
        const currentData = this.getData();
        const updatedData = currentData.filter(movie => movie.nom !== movieToRemove.nom);
        this.setData(updatedData);
    }
};