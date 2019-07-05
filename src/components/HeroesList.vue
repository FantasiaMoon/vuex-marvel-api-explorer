<template>
    <div class="container">
        <div class="row my-5" v-if="!loading">
            <div class="col-12 col-sm-8 col-md-6 col-lg-3 my-3" :key="index" v-for="(hero, index) in heroes">
                <div class="card">
                    <img class="card-img-top"
                        src="https://i1.wp.com/www.epicheroes.com/wp-content/uploads/2018/09/marvel-wallpaper-14.jpg?ssl=1"
                        alt="MarvelBg">
                    <div class="card-body text-center">
                        <img class="avatar rounded-circle" :src="`${imgUrl[hero.id]}/${imgSize}`"
                            alt="Bologna">
                        <h5 class="card-title">{{ hero.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Famous Actor</h6>
                        <router-link :to="{name: 'hero' , params: {id: hero.id}}" class="btn btn-warning btn-block">View</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="fa-4x text-center my-5">
            <i class="fa fa-lg fa-spinner fa-spin"></i>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'HeroesList',
        data() {
            return {
                imgSize: 'standard_fantastic.jpg',
            }
        },

        mounted() {
            this.$store.dispatch('getHeroes')
        },

        computed: {
            ...mapState({
                heroes: state => state.heroes,
                imgUrl: state => state.imgUrl,
                loading: state => state.loading
            })
        },

        methods: {
           
        }
    }
</script>

<style scoped>
    .avatar {
        border: 0.3rem solid rgba(#fff, 0.3);
        margin-top: -6rem;
        margin-bottom: 1rem;
        max-width: 9rem;
    }
</style>