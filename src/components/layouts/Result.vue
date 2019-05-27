<template>
    <div class="buttons">
        <div class="output">После конвертации у вас:
            <p>
                <span class="amount">{{ converted }}</span>
            </p>
        </div>
        <router-link to="/" class="btn">В начало</router-link>
        <router-link to="/history" class="btn">История</router-link>
    </div>
</template>
<script>
    export default {
        name: 'Result',
        computed: {
            converted(){
                this.$store.commit('convert');
                return this.$store.state.converted;
            }
        }
    }
</script>