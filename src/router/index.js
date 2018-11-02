import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogIndex from '@/views/BlogIndex'
import BlogArtical from '@/views/BlogArtical'
import LifeArtical from '@/views/LifeArtical'
import About from '@/views/About'
import Board from '@/views/Board'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/BlogIndex',
            component: BlogIndex
        },
        {
            path: '/BlogArtical',
            component: BlogArtical
        },
        {
            path: '/LifeArtical',
            component: LifeArtical
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Board',
            component: Board
        },
        {
        	path: '/',
        	redirect: '/BlogIndex'
        }
    ]
    })
