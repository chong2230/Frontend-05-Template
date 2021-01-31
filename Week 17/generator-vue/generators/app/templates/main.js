import HelloWorld from 'HelloWorld.vue';
import Vue from 'vue';

new Vue({
    el: "#app",
    render: h => h(HelloWorld)
})

/*
new Vue({
    el: "#app",
    template: "<HelloWorld/>",
    components: {HelloWorld}
})
*/