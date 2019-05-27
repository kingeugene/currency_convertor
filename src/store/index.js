import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        money: 0,
        converted: 0,
        currency_from: 'USD',
        currency_to: 'UAH',
        currencies: ['USD', 'UAH', 'EUR', 'RUR', 'BTC'],
        history: [],
        rates: {'USD': {}, 'UAH': {}, 'EUR': {}, 'RUR': {}, 'BTC':{}}
    },
    getters: {
    },
    mutations: {
        from(state, from) {
            state.currency_from = from;
        },
        to(state, to) {
            state.currency_to = to;
        },
        sell(state, count) {
            state.money = count;
        },
        convert(state) {
            const purchase = state.money * state.rates[state.currency_to][state.currency_from],
                date = new Date();
            state.converted = isNaN(purchase) ? 'Такого рейта нет в системе' : purchase.toFixed(2) + ' ' + state.currency_to;
            state.history.push('[ ' + date.toString() + '] => Из валюты: ' +  state.currency_from + ' В валюту: ' + state.currency_to + ' Результат: ' + state.converted);
        },
        addRate(state, data) {
            state.rates[data[0]][data[1]] = data[2];
        }
    },
    actions: {
        getRates({commit}) {
            axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then((response) => {
                response.data.forEach((el) => {
                    commit('addRate', [el.base_ccy, el.ccy, el.buy]);
                    commit('addRate', [el.ccy, el.base_ccy, 1 / el.buy]);
                })
            })
        }
    },
});