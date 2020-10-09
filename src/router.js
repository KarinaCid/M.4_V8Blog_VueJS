import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import NotFound from './components/NotFound'
import RecentPost from './components/RecentPost'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        },
        {
            path: '/post/:number',
            name: 'RecentPost',
            component: RecentPost
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
        }
    ]
})