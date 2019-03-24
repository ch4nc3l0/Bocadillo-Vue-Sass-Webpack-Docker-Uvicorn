import Vue from 'vue';
import '../sass/index.sass'
import Zombie from '../img/zombie.png'



new Vue({
    el: '#vue',
    data:{
        message: "Hello World From Vue!"
    },
    delimiters:["[[","]]"]
});
