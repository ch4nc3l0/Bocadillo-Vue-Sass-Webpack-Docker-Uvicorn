import Vue from 'vue';
import '../sass/index.sass'

new Vue({
    el: '#vue',
    data:{
        message: "Hello World From Vue!"
    },
    delimiters:["[[","]]"]
});
