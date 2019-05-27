<template>
    <div>
        <div class="wrapCurrent">
            <select  @change="changeFrom($event)" v-model="from">
                <option selected disabled>Выберите Валюту</option>
                <option v-for="option in options" :value="option">{{option}}</option>
            </select>
            <span class="colon">:</span>
            <select  @change="changeTo($event)" v-model="to">
                <option selected disabled>Выберите Валюту</option>
                <option v-for="option in options" :value="option">{{option}}</option>
            </select>
        </div>
        <div class="buttons">
            <router-link to="/" class="btn">Отмена</router-link>
            <router-link to="/result" class="btn">Обмен</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Rate',
        data: function() {
            return {
                from: this.$store.state.currency_from,
                to: this.$store.state.currency_to,
                options: this.$store.state.currencies
            }
        },
        methods: {
            changeFrom(event) {
                this.$store.commit('from', event.target.value);
            },
            changeTo(event) {
                this.$store.commit('to', event.target.value);
            }
        }
    }
</script>