import vue from 'vue'

const myvue=new vue({
    el:'#app',
    date: {
        mytext: 'Vue项目开始'
    }
})


const {add}=require("./js/myjs");

require('./css/mycss.css');
require('./css/myless.less');
console.log(add(100,58));