<template>
    <div class="container">
        <div class="row" v-if="!loading">
            <div class="col-lg-12 my-5" v-for="item in hero">
                <h3>{{ item.name }}</h3>
                <hr>
                <img class="card-img-top" :src="`${imgSingleUrl}/${imgSize}`" alt="">
                <hr>
                <div class="card-body">
                    <p class="card-text text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quis earum dolores beatae aperiam consequatur accusantium pariatur vel libero, explicabo suscipit? Sit maiores repudiandae veniam perferendis incidunt tenetur aliquam! Vitae.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">#ID: {{ $route.params.id }}</small>
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
        name: 'HeroItem',
        data() {
            return {
                imgSize: 'landscape_incredible.jpg',
            }
        },

        mounted() {
            this.$store.dispatch('getHero', this.$route.params.id)
        },

        computed: {
            ...mapState({
                hero: state => state.hero,
                imgSingleUrl: state => state.imgSingleUrl,
                loading: state => state.loading
            })
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