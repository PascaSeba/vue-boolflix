var app = new Vue({
    el: '#root',
    data: {
        querySearch: "",
        researched: [],
        stellarNumber: 5,
        imgFoundSrc: 'https://image.tmdb.org/t/p/',
        imgFoundSize: 'w342/',
        myAPI: "7e6063e162f3f80112ea0b2bb45258db",
    },
    methods: {
        search() {
            this.researched = [];
            axios
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: this.myAPI,
                        query: this.querySearch,
                        language: "it - IT",
                    }
                })
                .then((result) => {
                    console.log(result.data.results);
                    this.researched = this.researched.concat(result.data.results);
                })

            axios
                .get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key: "7e6063e162f3f80112ea0b2bb45258db",
                        query: this.querySearch,
                        language: "it - IT",
                    }
                })
                .then((result) => {
                    console.log(result.data.results);
                    this.researched = this.researched.concat(result.data.results);
                })
        },
        stellarVote(vote_average) {
            return Math.ceil(vote_average * this.stellarNumber / 10)
        }
    },
})


/* this.movies = this.movies.concat(results); */

Vue.config.devtools = true;