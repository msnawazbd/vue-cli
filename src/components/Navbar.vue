<template>
    <div class="navbar">
        <div id="nav">
            <span v-for="link in links" :key="link.title">
                <router-link :to="link.to">{{link.title}}</router-link> |
            </span>
        </div>
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