<template>
    <div>
        <div class="manyTitle">Ваши деньги: {{quantity}}</div>
        <input type="text" name="many" v-model="quantity" @keypress="isNumber($event)"
               placeholder="Введите кол-во денег" class="many">
        <div class="buttons">
            <input type="button" @click="clearInput" value="Очистить">
            <router-link to="/rate" class="btn">Посчитать</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data: function () {
            return {
            }
        },
        computed:{
            quantity: {
                get () {
                    return this.$store.state.money
                },
                set (value) {
                    this.$store.commit('sell', value)
                }
            }
        },
        methods:{
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                const charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            clearInput: function () {
                this.quantity = '';
            }
        }
    }
</script>