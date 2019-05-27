<template>
    <div id="app">
        <div class="container">
            <div class="wrapper">
                <!-- отображаем тут компонент, для которого совпадает маршрут -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Home from './components/layouts/Home.vue'
    import Rate from './components/layouts/Rate.vue'
    import Result from './components/layouts/Result.vue'
    import History from './components/layouts/History.vue'

    export default {
        name: 'app',
        components: {
            Home, Rate, Result, History
        }
    }
</script>