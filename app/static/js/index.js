import Vue from 'vue';
import '../sass/index.sass'
import '../img/zombie.png'




new Vue({
    el: '#vue',
    data:{
        message: "Hello World From Vue!"
    },
    delimiters:["[[","]]"]
});
