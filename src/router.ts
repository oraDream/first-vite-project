import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history, 
    routes:[{
        path:'/',component:Home,
        
    },{
        path:'/doc',component:Doc,
        children:[
        {
            path:'switch',component:SwitchDemo
        },
        {
            path:'button',component:Button
        },
        {
            path:'dialog',component:Dialog
        },
        {
            path:'tabs',component:Tabs
        }

    ]
    }]
})