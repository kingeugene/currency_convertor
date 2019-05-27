<template>
    <div class="buttons">
        <ol>
            <li v-for="act in log">{{ act }}</li>
        </ol>
        <p>
            <router-link to="/" class="btn">В начало</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'History',
        computed: {
            log(){
                return this.$store.state.history;
            }
        }
    }
</script>