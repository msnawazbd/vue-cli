<template>
    <div class="container text-center">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item" v-for="link in links" :key="link.title">
                        <router-link class="nav-link" :to="link.to">{{link.title}}</router-link>
                    </li>

                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <!--<div id="nav">
            <span v-for="link in links" :key="link.title">
                <router-link :to="link.to">{{link.title}}</router-link> |
            </span>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return {
                links: [
                    {title: 'Home', to: '/'},
                    {title: 'About', to: '/about'},
                    {title: 'Contact', to: '/contact'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>