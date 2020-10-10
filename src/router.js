import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import NotFound from './components/NotFound'
import RecentPost from './components/RecentPost'
import Administrador from './components/Administrador'

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
            component: SobreMi,
            alias: ['/acerca']

        },
        {
            path: '/contactame',
            redirect: {name: 'contacto'}
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto,

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
        },
        {
            path: '/administrador/:admin',
            name: 'Administrador',
            component: Administrador,
            props: true
        }
    ]
})