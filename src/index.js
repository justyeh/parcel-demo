import Vue from 'vue/dist/vue.esm.js';

import './style/common.scss';
import './style/index.scss';

Vue.component('list',{
    template:` <div class="list">
        <div v-for="item in list" :key="item.id">
            <p>{{item.name}}</p>
            <p>{{item.age}}</p>
        </div>
    </div>`,
    props:{
        list:{
            type:Array,
            required:true
        }
    }
})

const app  = new Vue({
    el:"#app",
    template:`<div>
        <p>index page</p>
        <list :list="list"></list>
    </div>`,
    data:{
        list:[
            {id:1,name:'one',age:1},
            {id:2,name:'two',age:2}
        ],
    }
})